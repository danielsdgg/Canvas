import React, { useEffect, useState } from "react";
import { useParams,  useNavigate } from "react-router-dom";
import SideNav from "./SideNav";
import { FaArrowLeft } from "react-icons/fa";

interface Lesson {
  id: number;
  title: string;
  content: string;
}

interface Course {
  title: string;
  description: string;
  duration: string;
  lessons: { id: number; title: string }[];
}

const CourseDetails: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [lessonDetails, setLessonDetails] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching course details from an API
    const fetchCourseDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/v1/courses/${courseId}`);
        const data: Course = await response.json();
        setCourse(data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (courseId) fetchCourseDetails();
  }, [courseId]);

  const fetchLessonDetails = async (lessonId: number) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/v1/lessons/${lessonId}`);
      const data: Lesson = await response.json();
      setLessonDetails(data);
    } catch (error) {
      console.error("Error fetching lesson details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!courseId) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-red-500 text-xl font-semibold">Course not found</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-700 text-xl font-semibold">Loading...</p>
      </div>
    );
  }

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
          {course ? (
            <>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{course.title}</h1>
              <p className="text-gray-600 text-lg mb-2">{course.description}</p>
              <p className="text-gray-500 text-md font-medium mb-6">
                <span className="font-semibold text-gray-700">Duration:</span> {course.duration}
              </p>
              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lessons</h2>
                <ul className="list-disc list-inside space-y-2">
                  {course.lessons.map((lesson) => (
                    <li key={lesson.id}>
                      <button
                        onClick={() => fetchLessonDetails(lesson.id)}
                        className="text-blue-500 hover:underline"
                      >
                        {lesson.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              {lessonDetails && (
                <div className="mt-6 p-4 bg-gray-100 rounded shadow">
                  <h3 className="text-xl font-semibold text-gray-700">{lessonDetails.title}</h3>
                  <p className="text-gray-600 mt-2">{lessonDetails.content}</p>
                </div>
              )}
            </>
          ) : (
            <p className="text-red-500 text-xl font-semibold">Course not found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
