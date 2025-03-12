import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import SideNav from "./SideNav";
import axiosInstance from "../api/api";

interface Course {
  id: number;
  courseName: string;
  description: string;
}

const CoursesPage: React.FC = () => {
  const { userToken } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        if (!userToken) {
          setError("You are not logged in.");
          setLoading(false);
          return;
        }

        const url = axiosInstance.getUri() + "/api/v1/courses" 
        const response = await fetch(url, {
          headers: { Authorization: `Bearer ${userToken}` },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch courses: ${response.statusText}`);
        }

        const data = await response.json();
        setCourses(data);
      } catch (err: any) {
        setError(err?.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [userToken]);

  return (
    <>
      <SideNav />
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-800 to-gray-900 text-gray-100 p-4 sm:p-6 md:p-8 flex flex-col items-center">
        {/* Page Header */}
        <div className="relative w-full max-w-4xl mb-6 sm:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-300">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-2xl rounded-full -z-10"></div>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 animate-fade-in">
              Available Courses
            </span>
          </h1>
        </div>

        {/* Loading or Error Handling */}
        {loading && (
          <p className="text-gray-300 text-sm sm:text-base animate-pulse">
            Loading courses...
          </p>
        )}
        {error && (
          <p className="text-red-400 font-medium text-sm sm:text-base bg-red-500/20 border border-red-500 rounded-lg p-3 mb-6">
            {error}
          </p>
        )}

        {/* Courses Grid */}
        {!loading && !error && courses.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-indigo-900/30 backdrop-blur-md shadow-lg rounded-lg overflow-hidden border border-indigo-500/20 transition-all duration-300 hover:shadow-xl hover:border-indigo-400/50"
              >
                <div className="p-6 text-center sm:text-left">
                  <h2 className="text-lg sm:text-xl font-semibold text-teal-400 mb-2 uppercase tracking-wide">
                    {course.courseName}
                  </h2>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">{course.description}</p>
                  <Link
                    to={`/courses/${course.id}`}
                    className="text-indigo-300 hover:text-indigo-100 font-medium transition duration-200"
                  >
                    View Course →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Courses Found Message */}
        {!loading && !error && courses.length === 0 && (
          <p className="text-gray-400 font-medium text-sm sm:text-base">
            No courses available at the moment.
          </p>
        )}
      </div>
    </>
  );
};

export default CoursesPage;