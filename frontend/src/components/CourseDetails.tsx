import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import SideNav from './SideNav';

interface Lesson {
  id: number;
  title: string;
  description: string;
}

interface Course {
  title: string;
  description: string;
  lessons: Lesson[];
}

const CourseDetails: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get(`/courses/${courseId}`);
        setCourse(response.data);
      } catch (error) {
        setError('Error fetching course data');
        console.error(error);
      }
    };

    fetchCourseData();
  }, [courseId]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!course) {
    return <p className="text-center">Loading course details...</p>;
  }

  return (
    <>
    <SideNav/>
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">{course.title}</h2>
      <p className="text-lg text-gray-700 text-center mb-6">{course.description}</p>
      <h3 className="text-2xl font-semibold mb-4">Lessons</h3>
      <ul className="list-disc list-inside space-y-2">
        {course.lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link to={`/course/${courseId}/lesson/${lesson.id}`} className="text-blue-500 hover:underline">
              {lesson.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default CourseDetails;
