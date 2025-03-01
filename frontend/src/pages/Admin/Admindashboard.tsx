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
}

const Admindashboard: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { userToken } = useAuth();
  const [courses, setCourses] = useState<Courses[]>([]);

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
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCourses(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const displayStudentList = courses?.map((course) => (
    <StudentListCard key={course.id} courseName={course.courseName} id={course.id} />
  ));

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-gray-800 to-gray-900">
        <p className="text-lg sm:text-xl text-white animate-pulse">Loading dashboard...</p>
      </div>
    );
  }

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

          <div className="grid gap-6 sm:gap-8">
            {displayStudentList.length > 0 ? (
              displayStudentList
            ) : (
              <p className="text-center text-base sm:text-lg md:text-xl text-gray-400">
                No courses available yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admindashboard;