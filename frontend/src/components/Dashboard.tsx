import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';
import SideNav from './SideNav';
import { Link } from 'react-router-dom';
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

const Dashboard: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const { userToken, userData } = useAuth(); 
    const userEmail = userData?.userDetails.emailAddress; 

    useEffect(() => {
        const fetchEnrolledCourses = async () => {
            try {
                const url = axiosInstance.getUri() + "/api/v1/users/profile"
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
    }, [userEmail, userToken]);

    return (
        <>
            <SideNav />
            <div className="min-h-screen bg-white text-black p-4 sm:p-6 md:p-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-600 uppercase tracking-wide">
                            Welcome to Morgan-LMS
                        </h2>
                        <p className="mt-2 text-black text-sm sm:text-base md:text-lg">
                            Your learning journey starts here
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-xl border border-indigo-500/30">
                        {courses.length === 0 ? (
                            <div className="text-center py-10">
                                <p className="text-black text-lg sm:text-xl md:text-2xl font-medium">
                                    No courses yet
                                </p>
                                <p className="text-black text-sm sm:text-base mt-2">
                                    Once you're enrolled, your courses will appear here.
                                </p>
                            </div>
                        ) : (
                            <div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-6 uppercase tracking-wide">
                                    Your Enrolled Courses
                                </h3>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    {courses.map((course) => (
                                        <div
                                            key={course.id}
                                            className="p-5 bg-indigo-100/30 rounded-lg shadow-md border border-indigo-500/20 hover:bg-indigo-100/50 transition-all duration-300"
                                        >
                                            <h4 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-2 uppercase tracking-wide">
                                                {course.courseName}
                                            </h4>
                                            <p className="text-black text-sm sm:text-base line-clamp-2">
                                                {course.description}
                                            </p>
                                            {/* Uncomment if needed */}
                                            {/* <Link
                                                to={`/courses/${course.id}`}
                                                className="text-indigo-600 hover:text-indigo-400 text-sm font-medium underline transition duration-200 mt-3 inline-block"
                                            >
                                                Go to Course
                                            </Link> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* View Grades Button */}
                    <div className="mt-10 text-center">
                        <Link
                            to="/grades"
                            className="inline-flex items-center px-6 py-3 bg-indigo-700 hover:bg-indigo-600 text-indigo-100 font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
                        >
                            View Grades
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;