import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';
import SideNav from './SideNav';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axiosInstance from '../api/api';

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
    const username = userData?.userDetails.firstName || 'User';

    const navigate = useNavigate();

    useEffect(() => {
        const fetchEnrolledCourses = async () => {
            const url = axiosInstance.getUri() + "/api/v1/users/profile";
            try {
                const response = await fetch(url, {
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

                    {/* Page Header */}
                    <div className="relative w-full mb-6 sm:mb-8 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-600">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-300 opacity-20 blur-2xl rounded-full -z-10"></div>
                            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400 animate-fade-in">
                                Assigned Courses
                            </span>
                        </h2>
                    </div>

                    {/* Welcome Message */}
                    {courses.length > 0 && (
                    <div className="mb-6 text-center border-b border-indigo-200 pb-3">
                        <p className="text-indigo-600 font-medium text-sm sm:text-base italic tracking-wide">
                            Welcome once again, {username}! Your course content{courses.length > 1 ? 's are' : ' is'} now accessible. Happy mentoring..!.                        </p>
                    </div>
                    )}

                    {/* Courses Section */}
                    {courses.length === 0 ? (
                        <p className="text-gray-600 font-medium text-sm sm:text-base text-center">
                            You are not assigned in any courses yet.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                            {courses.map((course) => (
                                <div
                                    key={course.id}
                                    className="bg-gray-50 shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-indigo-300"
                                >
                                    <div className="p-6 text-center sm:text-left">
                                        <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-2 uppercase tracking-wide">
                                            {course.courseName}
                                        </h3>
                                        <p className="text-gray-600 mb-4 text-sm sm:text-base">
                                            {course.description}
                                        </p>

                                        {/* Lessons Section */}
                                        {course.lessons.length > 0 ? (
                                            <div className="mt-4">
                                                <h4 className="text-base font-semibold text-gray-800 mb-3">
                                                    Lessons:
                                                </h4>
                                                <ul className="space-y-2">
                                                    {course.lessons.map((lesson) => (
                                                        <li
                                                            key={lesson.id}
                                                            className="flex items-center bg-gray-100 p-2 rounded-md hover:bg-indigo-50 transition duration-200"
                                                        >
                                                            <span className="text-gray-500 mr-2">•</span>
                                                            <Link
                                                                to={`/courses/${course.id}/lessons/${lesson.id}`}
                                                                onClick={() => fetchLessonDetails(lesson.id)}
                                                                className="underline text-indigo-600 hover:text-indigo-800 font-medium transition duration-200"
                                                            >
                                                                {lesson.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : (
                                            <p className="text-sm text-gray-600 mt-2">
                                                No lessons available for this course.
                                            </p>
                                        )}
                                    </div>
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