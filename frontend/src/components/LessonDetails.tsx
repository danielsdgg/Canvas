import React from "react";
import { useParams } from "react-router-dom";
import { lessonDetails } from "../coursesData"; // Adjust import path if necessary

const LessonDetails: React.FC = () => {
  const { lessonId } = useParams<{ courseId: string; lessonId: string }>();

  // Ensure the lessonId exists in lessonDetails
  if (!lessonId || !lessonDetails[lessonId]) {
    return <div>Lesson not found</div>;
  }

  const lesson = lessonDetails[lessonId];
  // const contents = lessonContents[lessonId];

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p className="text-gray-700 mb-6">{lesson.content}</p>

      {/* <div className="mt-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Key Topics:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {contents?.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default LessonDetails;
