import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SideNav from './SideNav';

interface LessonContent {
  week_number: number;
  content_type: string;
  content: string;
  week_start: string;
  week_end: string;
}

interface Assignment {
  title: string;
  description: string;
  assigned_at: string;
  due_date: string;
}

interface Lesson {
  title: string;
  description: string;
  order: number;
  lesson_contents: LessonContent[];
  assignments: Assignment[];
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
  const [activeLessonIndex, setActiveLessonIndex] = useState<number | null>(null); // New state to track active lesson

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

  const handleLessonClick = (index: number) => {
    setActiveLessonIndex(activeLessonIndex === index ? null : index); // Toggle active lesson
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!course) {
    return <p className="text-center">Loading course details...</p>;
  }

  return (
    <>
    <SideNav/>
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-3xl font-bold text-center">{course.title}</h1>
      <p className="text-lg text-gray-700 text-center mb-6">{course.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Lessons</h2>
      {course.lessons.map((lesson, index) => (
        <div key={index} className="p-4 bg-gray-100 rounded-lg mb-4">
          <h3
            className="text-xl font-semibold cursor-pointer"
            onClick={() => handleLessonClick(index)} // Handle lesson click
          >
            {lesson.title}
          </h3>
          {activeLessonIndex === index && (
            <div>
              <p className="text-gray-700 mb-2">{lesson.description}</p>
              <p className="text-sm text-gray-500">Order: {lesson.order}</p>

              <h4 className="text-lg font-semibold mt-3">Lesson Contents</h4>
              <ul className="list-disc list-inside">
                {lesson.lesson_contents.map((content, idx) => (
                  <li key={idx} className="mt-1">
                    <strong>Week {content.week_number}:</strong> {content.content_type} - {content.content}
                    <br />
                    <em>Start: {content.week_start}, End: {content.week_end}</em>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold mt-3">Assignments</h4>
              <ul className="list-disc list-inside">
                {lesson.assignments.map((assignment, idx) => (
                  <li key={idx} className="mt-1">
                    <strong>{assignment.title}:</strong> {assignment.description}
                    <br />
                    <em>Assigned: {assignment.assigned_at}</em>
                    <br />
                    <em>Due: {assignment.due_date}</em>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default CourseDetails;
