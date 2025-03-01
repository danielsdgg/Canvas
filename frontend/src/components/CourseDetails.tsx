import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import SideNav from "./SideNav";
import { FaArrowLeft } from "react-icons/fa";
import { useAuth } from "../context/authContext";

interface User {
  id: number;
  emailAddress: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  createdAt: string;
  role: string;
  courses: any[];
}

interface Lesson {
  id: number;
  title: string;
}

interface Course {
  courseName: string;
  description: string;
  lessons: { id: number; title: string }[];
  users: User[];
}

const CourseDetails: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [lessonDetails, setLessonDetails] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { userToken } = useAuth();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      if (!courseId) return;

      try {
        setLoading(true);
        const response = await fetch(`/api/v1/courses/${courseId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
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
  }, [courseId, userToken]);

  const fetchLessonDetails = async (lessonId: number) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/v1/lessons/${lessonId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
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
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-gray-800 to-gray-900">
        <p className="text-gray-300 text-lg sm:text-xl animate-pulse">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-gray-800 to-gray-900">
        <p className="text-red-400 text-lg sm:text-xl font-semibold bg-red-500/20 border border-red-500 rounded-lg p-3">
          {error}
        </p>
      </div>
    );
  }

  return (
    <>
      <SideNav />
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-800 to-gray-900 text-gray-100 p-4 sm:p-6 md:p-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-300 hover:text-indigo-100 mb-6 sm:mb-8 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back to Courses
        </button>

        <div className="max-w-4xl mx-auto bg-indigo-900/30 backdrop-blur-md shadow-xl rounded-lg p-6 sm:p-8 border border-indigo-500/20 transition-all duration-300 hover:shadow-2xl">
          {course ? (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-400 mb-4 uppercase tracking-wide text-center sm:text-left">
                {course.courseName}
              </h1>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6">{course.description}</p>

              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-300 mb-4 uppercase tracking-wide">
                  Lessons
                </h2>
                <ul className="space-y-3">
                  {course.lessons.map((lesson) => (
                    <li key={lesson.id} className="flex items-center">
                      <span className="text-gray-400 mr-2">•</span>
                      <Link
                        to={`/courses/${courseId}/lessons/${lesson.id}`}
                        onClick={() => fetchLessonDetails(lesson.id)}
                        className="underline text-indigo-300 hover:text-indigo-100 font-medium transition duration-200"
                      >
                        {lesson.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {lessonDetails && (
                <div className="mt-6 p-4 sm:p-6 bg-indigo-800/20 rounded-lg border border-indigo-500/30">
                  <h3 className="text-lg sm:text-xl font-semibold text-teal-400">{lessonDetails.title}</h3>
                  {/* Content will be dynamically loaded, so keeping this commented */}
                  {/* <p className="text-gray-300 mt-2">{lessonDetails.content}</p> */}
                </div>
              )}
            </>
          ) : (
            <p className="text-red-400 text-lg sm:text-xl font-semibold text-center">
              Course not found
            </p>
          )}
        </div>
        {/* <header className="mt-16 text-xl text-center">Students enrolled to this course</header>
        <table className="min-w-full text-left text-sm sm:text-base mt-16">
          <thead>
            <tr className="bg-yellow-100">
              <th className="px-4 py-2 font-medium text-gray-700">First Name</th>
              <th className="px-4 py-2 font-medium text-gray-700">Last Name</th>
              <th className="px-4 py-2 font-medium text-gray-700">Email</th>
              <th className="px-4 py-2 font-medium text-gray-700">Phone Number</th>
              <th className="px-4 py-2 font-medium text-gray-700">Joined</th>
            </tr>
          </thead>
          <tbody>
            {course?.users.filter(user=>user.role==='STUDENT').map((user) => (
              <tr key={user.id} className="hover:bg-yellow-50">
                <td className="px-4 py-2">
                  <Link to={`/user/${user.id}`} className="text-blue-500 hover:text-blue-700">
                    {user.firstName}
                  </Link>
                </td>
                <td className="px-4 py-2">{user.lastName}</td>
                <td className="px-4 py-2">{user.emailAddress}</td>
                <td className="px-4 py-2">{user.phoneNumber ? user.phoneNumber : 'N/A'}</td>
                <td className="px-4 py-2">{new Date(user.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </>
  );
};

export default CourseDetails;