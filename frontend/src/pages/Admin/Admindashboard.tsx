import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import SideNav from "../../components/SideNav";
import StudentListCard from "../../components/StudentListCard";

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

  useEffect(() => {
    fetchCourses();
  }, [userToken]);

  const fetchCourses = async () => {
    try {
      const response = await fetch("/api/v1/courses", {
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

  // Find courses where the logged-in user is enrolled
  const enrolledCourses = courses.filter((course) =>
    course.users?.some((user) => user.emailAddress === userData?.userDetails.emailAddress)
  );

  return (
    <>
      <SideNav />
      <div className="flex min-h-screen bg-gradient-to-br from-indigo-900 via-gray-800 to-gray-900 text-gray-100">
        <div className="flex-1 p-4 sm:p-6 md:p-8">
          <header className="relative text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-white mb-8 sm:mb-10 md:mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-2xl rounded-full -z-10"></div>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 animate-fade-in">
              Admin Dashboard
            </span>
          </header>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-200 text-center text-sm sm:text-base">
              {error}
            </div>
          )}

          {!isAssigned && (
            <div className="mb-6 p-4 bg-red-900/30 backdrop-blur-md shadow-lg rounded-xl border border-red-500/20 text-center">
              <p className="text-red-300 text-sm sm:text-base font-semibold">
                You are not Assigned to a course yet.
              </p>
            </div>
          )}

          <div className="grid gap-6 sm:gap-8">
            {enrolledCourses.length > 0 ? (
              enrolledCourses.map((course) => (
                <StudentListCard
                  key={course.id}
                  courseName={course.courseName}
                  id={course.id}
                />
              ))
            ) : (
              <p className="text-center text-base sm:text-lg md:text-xl text-gray-400">
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