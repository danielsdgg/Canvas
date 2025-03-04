import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';
import SideNav from './SideNav';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

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
  
interface Course {
    id: number;
    courseName: string;
    description: string;
    lessons: { id: number; title: string }[];
    users: User[];
}

const EnrolledAdmins: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const { userToken, userData } = useAuth(); 
    const userId = userData?.userDetails.emailAddress; 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEnrolledCourses = async () => {
            try {
                const response = await fetch("/api/v1/users/profile", {
                    headers: { Authorization: `Bearer ${userToken}` },
                });
                if (!response.ok) throw new Error('Failed to fetch courses');
                
                const userData = await response.json();
                setCourses(userData.courses || []);
            } catch (error) {
                console.error("Error fetching enrolled courses:", error);
            }
        };

        fetchEnrolledCourses();
    }, [userId]);

    const fetchLessonDetails = (lessonId: number) => {
        console.log(`Fetching details for lesson ID: ${lessonId}`);
    };

    return (
        <>
            <SideNav />
            <div className="min-h-screen bg-white text-black p-4 sm:p-6 md:p-8 flex flex-col items-center">
                <div className="w-full max-w-4xl">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-indigo-600 hover:text-indigo-400 mb-6 sm:mb-8 transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        <FaArrowLeft className="mr-2" />
                        Back
                    </button>
                    <header className="relative text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-indigo-600 mb-8 sm:mb-10 md:mb-12">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-2xl rounded-full -z-10"></div>
                        <span className="relative animate-fade-in">
                            Assigned Courses
                        </span>
                    </header>
                    {courses.length === 0 ? (
                        <p className="text-black text-lg sm:text-xl text-center">
                            You are not assigned to any courses yet.
                        </p>
                    ) : (
                        <div className="space-y-6">
                            {courses.map((course) => (
                                <div
                                    key={course.id}
                                    className="p-6 bg-indigo-100/30 backdrop-blur-md shadow-xl rounded-lg border border-indigo-500/20 transition-all duration-300 hover:shadow-2xl"
                                >
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-600 mb-4 uppercase tracking-wide">
                                        {course.courseName}
                                    </h3>
                                    <p className="text-black text-sm sm:text-base md:text-lg mb-6">
                                        {course.description}
                                    </p>

                                    {/* Lessons Section */}
                                    {course.lessons.length > 0 ? (
                                        <div className="mt-4">
                                            <h4 className="text-xl font-bold text-indigo-800 mb-3">
                                                Lessons:
                                            </h4>
                                            <ul className="space-y-3">
                                                {course.lessons.map((lesson) => (
                                                    <li
                                                        key={lesson.id}
                                                        className="flex items-center bg-indigo-200/20 p-3 rounded-md hover:bg-indigo-300/40 transition duration-200"
                                                    >
                                                        <span className="text-black mr-2">•</span>
                                                        <Link
                                                            to={`/courses/${course.id}/lessons/${lesson.id}`}
                                                            onClick={() => fetchLessonDetails(lesson.id)}
                                                            className="underline text-indigo-700 hover:text-indigo-900 text-lg font-bold transition duration-400"
                                                        >
                                                            {lesson.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <p className="text-sm text-black mt-2">
                                            No lessons available for this course.
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default EnrolledAdmins;