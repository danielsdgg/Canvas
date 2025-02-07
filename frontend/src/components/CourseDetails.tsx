import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import SideNav from "./SideNav";
import { FaArrowLeft } from "react-icons/fa";
import { useAuth } from "../context/authContext"; // Importing the useAuth hook

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
  // content: string; // Dynamically coding the content
}

interface Course {
  courseName: string;
  description: string;
  lessons: { id: number; title: string }[];
  users: User[];
}

const CourseDetails: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [lessonDetails, setLessonDetails] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); 
  const navigate = useNavigate();

  const { userToken } = useAuth(); 

  
    

  // Fetch course details
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

  // Fetch lesson details
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
      setLessonDetails(data);  // Store the lesson data dynamically
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
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{course.courseName}</h1>
              <p className="text-gray-600 text-lg mb-2">{course.description}</p>

              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lessons</h2>
                

                <ul className="list-disc list-inside space-y-2">
                  {course.lessons.map((lesson) => (
                    <li key={lesson.id}>
                      <Link
              to={`/courses/${courseId}/lessons/${lesson.id}`}><button
                        onClick={() => fetchLessonDetails(lesson.id)}
                        className="text-blue-500 hover:underline"
                      >
                        {lesson.title}
                      </button> </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {lessonDetails && (
                <div className="mt-6 p-4 bg-gray-100 rounded shadow">
                  <h3 className="text-xl font-semibold text-gray-700">{lessonDetails.title}</h3>
                  {/* Content will be dynamically loaded, so keeping this commented */}
                  {/* <p className="text-gray-600 mt-2">{lessonDetails.content}</p> */}
                </div>
              )}
            </>
          ) : (
            <p className="text-red-500 text-xl font-semibold">Course not found</p>
          )}
        </div>
        <header className="mt-16 text-xl text-center">Students enrolled to this course</header>
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
                      </table>
      </div>
    </>
  );
};

export default CourseDetails;
