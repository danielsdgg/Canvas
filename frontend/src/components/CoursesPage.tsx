import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import SideNav from "./SideNav";

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

        const response = await fetch("/api/v1/courses/", {
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
      <div className="bg-gray-100 min-h-screen p-4 sm:pl-[80px] flex flex-col items-center sm:items-start">
        {/* Page Header */}
        <div className="p-6 mb-8 w-full text-center sm:text-left sm:max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Available Courses
          </h1>
        </div>

        {/* Loading or Error Handling */}
        {loading && <p className="text-gray-600 animate-pulse">Loading courses...</p>}
        {error && <p className="text-red-600 font-medium">{error}</p>}

        {/* Courses Grid */}
        {!loading && !error && courses.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
            {courses.map((course) => (
              <div 
                key={course.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer hover:bg-gray-50"
              >
                <div className="p-6 text-center sm:text-left">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {course.courseName}
                  </h2>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Link
                    to={`/courses/${course.id}`}
                    className="text-blue-600 hover:underline font-medium"
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
          <p className="text-gray-500 font-medium">No courses available at the moment.</p>
        )}
      </div>
    </>
  );
};

export default CoursesPage;
