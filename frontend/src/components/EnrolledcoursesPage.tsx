import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';
import SideNav from './SideNav';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

interface Course {
  id: number;
  courseName: string;
  description: string;
}

const EnrolledCoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const { userToken,userData } = useAuth(); 
  const userId = userData?.userDetails.id; // Change this dynamically if needed
  const navigate = useNavigate();

  

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/users/${userId}`,{headers: {Authorization: `Bearer ${userToken}`,},});
        if (!response.ok) throw new Error('Failed to fetch courses');
        
        const userData = await response.json();
        setCourses(userData.courses || []); // Assuming 'enrolledCourses' is the key in response
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };

    fetchEnrolledCourses();
  }, [userId]);

  return (
    <>
    <SideNav/>
    <div className="min-h-screen p-6 bg-gray-100">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaArrowLeft className="mr-2" />
            Back
        </button>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Enrolled Courses</h2>
      {courses.length === 0 ? (
        <p className="text-gray-600">You are not enrolled in any courses yet.</p>
      ) : (
        <ul className="space-y-4">
          {courses.map((course) => (
            <li key={course.id} className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">{course.courseName}</h3>
              <p className="text-gray-600">{course.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default EnrolledCoursesPage;
