import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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

const LessonDetails: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string, lessonId: string }>();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        const response = await axios.get(`/courses/${courseId}/lessons/${lessonId}`);
        setLesson(response.data);
      } catch (error) {
        setError('Error fetching lesson data');
        console.error(error);
      }
    };

    fetchLessonData();
  }, [courseId, lessonId]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!lesson) {
    return <p className="text-center">Loading lesson details...</p>;
  }

  return (
    <>
      <SideNav />
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-3xl font-bold text-center">{lesson.title}</h1>
        <p className="text-lg text-gray-700 text-center mb-6">{lesson.description}</p>

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
    </>
  );
};

export default LessonDetails;
