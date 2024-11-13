import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SideNav from './SideNav';

interface Course {
  id: number;
  title: string;
  description: string;
}

const CoursesList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/courses'); // Adjust the endpoint if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data); // Assuming the API returns a list of courses
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div className="spinner">Loading...</div>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      <SideNav />
      <div className="p-4 md:p-8 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-6 text-center">Available Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-lg p-6 border hover:shadow-xl hover:border-blue-500 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-700 mb-2">{course.description}</p>
              <Link to={`/course/${course.id}`} className="text-blue-500 hover:underline font-semibold mt-4 inline-block">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesList;
