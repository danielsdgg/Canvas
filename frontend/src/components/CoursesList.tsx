// src/components/CoursesList.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  term: string;
}

const CoursesList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch('/courses') // adjust the endpoint if necessary
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

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
