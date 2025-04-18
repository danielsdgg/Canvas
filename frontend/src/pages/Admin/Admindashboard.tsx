import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import SideNav from "../../components/SideNav";
import StudentListCard from "../../components/StudentListCard";
import axiosInstance from "../../api/api";

export interface Student {
  id: number;
  emailAddress: string;
  firstName: string;
  lastName: string;
  role: string;
  phoneNumber: string | null;
  createdAt: string;
}

export interface Courses {
  id: number;
  courseName: string;
  users?: Student[];
}

const Admindashboard: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { userToken, userData } = useAuth();
  const [courses, setCourses] = useState<Courses[]>([]);
  const [isAssigned, setIsAssigned] = useState<boolean>(true);
  const username = userData?.userDetails.firstName || 'User';

  useEffect(() => {
    fetchCourses();
  }, [userToken]);

  const fetchCourses = async () => {
    const url = axiosInstance.getUri() + "/api/v1/courses";
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching courses. Status: ${response.status}`);
      }

      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setCourses(data);
        setIsAssigned(true);
      } else {
        setCourses([]);
        setIsAssigned(false);
      }
    } catch (err) {
      setError("You are not Enrolled in any course. Kindly contact Admin.");
      setIsAssigned(false);
    } finally {
      setLoading(false);
    }
  };

  const enrolledCourses = courses.filter((course) =>
    course.users?.some((user) => user.emailAddress === userData?.userDetails.emailAddress)
  );

  return (
    <>
      <SideNav />
      <div className="flex min-h-screen bg-white text-black">
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <header className="relative text-xl sm:text-2xl lg:text-3xl font-extrabold text-center text-indigo-600 mb-6 sm:mb-8 lg:mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-2xl rounded-full -z-10"></div>
            <span className="relative animate-fade-in">
              Admin Dashboard
            </span>
          </header>

          {/* Welcome Message */}
          {enrolledCourses.length > 0 && (
            <div className="mb-6 text-center border-b border-indigo-200 pb-3">
              <p className="text-indigo-600 font-medium text-sm sm:text-base italic tracking-wide">
                Welcome, {username}! Your course content{enrolledCourses.length > 1 ? 's are' : ' is'} now available as well as your class list of students. Take a look below.
              </p>
            </div>
          )}

          {error && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-100/30 border border-red-500 rounded-lg text-red-600 text-center text-sm sm:text-base">
              {error}
            </div>
          )}

          {!isAssigned && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-100/30 backdrop-blur-md shadow-lg rounded-xl border border-red-500/20 text-center">
              <p className="text-red-600 text-sm sm:text-base font-semibold">
                You are not Assigned to a course yet.
              </p>
            </div>
          )}

          <div className="space-y-6 sm:space-y-8">
            {enrolledCourses.length > 0 ? (
              enrolledCourses.map((course) => (
                <StudentListCard
                  key={course.id}
                  courseName={course.courseName}
                  id={course.id}
                />
              ))
            ) : (
              <p className="text-center text-sm sm:text-base lg:text-lg text-black">
                You are not Assigned to a course yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admindashboard;