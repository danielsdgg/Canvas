import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';
import SideNav from '../../components/SideNav';
import StudentListCard from '../../components/StudentListCard';

export interface Student {
  id: number;
  emailAddress: string;
  firstName: string;
  lastName: string;
  role: string;
  phoneNumber: string | null;
  createdAt: string;
}

export interface Courses{
  id: number;
  courseName: string;
}

const Admindashboard: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { userToken } = useAuth();
  const [courses, setCourses] =useState<Courses[]>([])

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
    <div className="flex-1 p-6">
      <header className="text-4xl text-center font-extrabold text-white mb-8 tracking-wide">
        ADMIN DASHBOARD
      </header>
      {displayStudentList}
      
    </div>
  </div>
</>

  );
};

export default Admindashboard;