// src/components/Courses/CourseList.tsx
import React, { useEffect, useState } from 'react';
import { getAllCourses } from './Services/courseService';
import { Link } from 'react-router-dom';

const CoursesList: React.FC = () => {
    const [courses, setCourses] = useState<any[]>([]); // Use 'any' or define a specific type if needed
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            try {
                const data = await getAllCourses();
                setCourses(data);
            } catch (error) {
                setError("Error fetching courses: " + (error instanceof Error ? error.message : 'Unknown error'));
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <div className="text-center p-4">Loading courses...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center p-4">{error}</div>;
    }

  return (
    <div className="p-4 md:p-8 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6 text-center">Available Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-lg rounded-lg p-6 border">
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-gray-700 mb-2">{course.description}</p>
            <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
            <p className="text-sm text-gray-500">Term: {course.term}</p>
            <Link
              to={`/courses/${course.id}`}
              className="text-blue-500 hover:underline font-semibold mt-4 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
