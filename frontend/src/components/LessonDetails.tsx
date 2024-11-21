import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { lessonDetails, lessonContents } from '../coursesData'; // Importing the lesson details and content
import SideNav from './SideNav';

const LessonDetails: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();

  // Check if lessonId is valid before accessing the lesson details and content
  if (!lessonId) {
    return <p>Lesson not found.</p>;
  }

  const lessonDetail = lessonDetails[lessonId];
  const lessonContent = lessonContents[lessonId];

  // If lesson detail or lesson content is not found, show an error
  if (!lessonDetail || !lessonContent) {
    return <p>Lesson not found.</p>;
  }

  return (
    <>
    <SideNav/>
    <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      {/* Back Button */}
      <div className="mb-4">
        <Link to={`/courses/${courseId}`} className="text-blue-500 hover:text-blue-700">
          &larr; Back to Course
        </Link>
      </div>

      {/* Lesson Title */}
      <h1 className="text-3xl font-bold mb-4">{lessonDetail.title}</h1>

      {/* Lesson Content */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Lesson Content</h2>
        {lessonContent.map((contentItem: string, index: number) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-medium">{contentItem}</h3>
            <p className="text-gray-600">{lessonDetail.content}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default LessonDetails;
