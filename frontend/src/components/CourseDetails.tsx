import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SideNav from "./SideNav";
import { FaArrowLeft } from "react-icons/fa";
import { useAuth } from "../context/authContext"; // Importing the useAuth hook

interface Lesson {
  id: number;
  title: string;
  content: string;
}

interface Course {
  title: string;
  description: string;
  lessons: { id: number; title: string }[];
}

const CourseDetails: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [lessonDetails, setLessonDetails] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); 
  const navigate = useNavigate();

  const { userToken } = useAuth(); // Get userToken from AuthContext

  // Fetch course details
  useEffect(() => {
    const fetchCourseDetails = async () => {
      if (!courseId) return;

      try {
        setLoading(true);
        const response = await fetch(`/api/v1/courses/${courseId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`, // Adding Authorization header
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch course details.");
        }
        const data: Course = await response.json();
        setCourse(data);
      } catch (error) {
        setError("Error fetching course details.");
        console.error("Error fetching course details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId, userToken]); // Added userToken to dependency array

  // Fetch lesson details
  const fetchLessonDetails = async (lessonId: number) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/v1/lessons/${lessonId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`, // Adding Authorization header
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch lesson details.");
      }
      const data: Lesson = await response.json();
      setLessonDetails(data);
    } catch (error) {
      setError("Error fetching lesson details.");
      console.error("Error fetching lesson details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-700 text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-red-500 text-xl font-semibold">{error}</p>
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
