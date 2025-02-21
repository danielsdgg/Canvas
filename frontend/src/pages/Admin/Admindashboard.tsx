import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import SideNav from '../../components/SideNav';
import { Course } from '../../coursesData';
import StudentListCard from '../../components/StudentListCard';

interface User {
  id: number;
  emailAddress: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  createdAt: string;
}

export interface Courses{
  id: number;
  courseName: string;
}

const Admindashboard: React.FC = () => {
  const [students, setStudents] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { userToken, userData } = useAuth();
  const adminId = userData?.userDetails.id;
  const courseId = userData?.userDetails.id;

  useEffect(() => {
    fetchCourses();
  }, [userToken]);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/v1/courses', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setCourses(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const displayStudentList = courses?.map(course => {
    return <StudentListCard key={course.id}courseName={course.courseName} id ={course.id}/>
  })

  if (loading) {
    return <p className="text-center text-lg text-gray-700">Loading students...</p>;
  }

  return (
    <>
    <SideNav />
    <div className="flex min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100">
      <div className="flex-1 p-4 sm:p-6">
        <header className="text-3xl sm:text-4xl text-center font-extrabold text-white mb-6 sm:mb-8 tracking-wide">
          ADMIN DASHBOARD
        </header>
  
        {/* Glassmorphism Card */}
        <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-xl p-4 sm:p-6 border border-white/20">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-yellow-400 uppercase">
            Students Class List
          </h2>
  
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm md:text-base border-collapse border border-gray-600">
              <thead>
                <tr className="bg-yellow-500 text-gray-900 uppercase text-[10px] sm:text-sm md:text-base">
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border border-gray-600">First Name</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border border-gray-600">Last Name</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border border-gray-600">Email</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border border-gray-600">Phone</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border border-gray-600">Joined</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr
                    key={student.id}
                    className="border border-gray-600 hover:bg-yellow-500/30 transition duration-300"
                  >
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                      <NavLink
                        to={`/user/${student.id}`}
                        className="text-yellow-300 hover:text-yellow-500 font-semibold transition"
                      >
                        {student.firstName}
                      </NavLink>
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">{student.lastName}</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">{student.emailAddress}</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">{student.phoneNumber || "N/A"}</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                      {new Date(student.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>
  

  );
};

export default Admindashboard;