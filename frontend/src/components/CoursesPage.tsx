import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext"; // Import the hook for context
import SideNav from "./SideNav";

interface Course {
  id: number;
  courseName: string;
  description: string;
}

const CoursesPage: React.FC = () => {
  const { userToken } = useAuth(); // Corrected to access userToken from context
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/v1/courses", {
          headers: {
            Authorization: `Bearer ${userToken}`, // Use the token from context in the headers
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCourses(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userToken) {
      fetchCourses(); // Only fetch if userToken is available
    } else {
      setError("You are not logged in.");
      setLoading(false);
    }
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
        {loading && <p className="text-gray-600">Loading courses...</p>}
        {error && <p className="text-red-600">Error loading courses: {error}</p>}

        {/* Courses Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
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
      </div>
    </>
  );
};

export default CoursesPage;
