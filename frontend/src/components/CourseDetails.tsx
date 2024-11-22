import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import SideNav from "./SideNav";
import { courseDetails } from "../coursesData";
import { FaArrowLeft } from "react-icons/fa";

const CourseDetails: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  if (!courseId || !courseDetails[courseId]) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-red-500 text-xl font-semibold">Course not found</p>
      </div>
    );
  }

  const course = courseDetails[courseId];

  return (
    <>
      <SideNav />
      <div className="p-8 bg-gray-50 min-h-screen">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-700 hover:text-blue-500 mb-6">
          <FaArrowLeft className="mr-2" />
          Back to Course
        </button>
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{course.title}</h1>
          <p className="text-gray-600 text-lg mb-2">{course.description}</p>
          {/* Duration Field */}
          <p className="text-gray-500 text-md font-medium mb-6">
            <span className="font-semibold text-gray-700">Duration:</span> {course.duration}
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lessons</h2>
            <ul className="list-disc list-inside space-y-2">
              {course.lessons.map((lesson) => (
                <li key={lesson.id}>
                  <Link to={`/courses/${courseId}/lessons/${lesson.id}`} className="text-blue-500 hover:underline">
                    {lesson.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
