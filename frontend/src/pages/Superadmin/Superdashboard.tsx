import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import SideNav from '../../components/SideNav';
import axiosInstance from '../../api/api';
import axios from 'axios';

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
}

const Superdashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { userToken } = useAuth();

  useEffect(() => {
    if (!userToken) {
      console.error('User token is missing.');
      navigate('/login');
    } else {
      fetchUsers();
      fetchCourses();
    }
  }, [userToken, navigate]);

  const fetchUsers = async () => {
    const url = axiosInstance.getUri() + "/api/v1/users"
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (!response.ok) {
        console.error('Failed to fetch users.');
        return;
      }

      const data = await response.json();
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCourses = async () => {
    const url = axiosInstance.getUri() + "/api/v1/courses/"
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${userToken}`, // Use the token from context in the headers
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCourses(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEnrollClick = (userId: number) => {
    setSelectedUser(userId);
    setIsModalOpen(true);
  };

  const enrollStudent = async () => {
    const url = axiosInstance.getUri() + `/api/v1/courses/${selectedCourse}/enroll/${selectedUser}`
    
    if (!selectedUser || !selectedCourse) return;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        alert('Student successfully enrolled!');
        fetchUsers(); 
      } else {
        alert('Failed to enroll student.');
      }
    } catch (error) {
      console.error('Error enrolling student:', error);
    }
    setIsModalOpen(false);
  };

  if (loading) {
    return <p className="text-center text-lg text-gray-700">Loading users...</p>;
  }

  return (
    <>
      <SideNav />
      <div className="flex min-h-screen bg-gray-100">
        <div className="flex-1 p-5">
          <header className="text-3xl text-center font-bold text-blue-700 mb-5">ADMIN DASHBOARD</header>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-red-600">Students List</h2>
            <div className="overflow-auto">
              <table className="min-w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-4 py-2">First Name</th>
                    <th className="px-4 py-2">Last Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Phone Number</th>
                    <th className="px-4 py-2">Joined</th>
                    <th className="px-4 py-2">Course Enrolled</th>
                  </tr>
                </thead>
                <tbody>
                  {users.filter(user => user.role === 'STUDENT').map(user => (
                    <tr key={user.id} className="hover:bg-blue-200">
                      <NavLink to={`/user/${user.id}`} className="text-blue-500 hover:text-blue-700">
                          {user.firstName}
                        </NavLink>
                      <td className="px-4 py-2">{user.lastName}</td>
                      <td className="px-4 py-2">{user.emailAddress}</td>
                      <td className="px-4 py-2">{user.phoneNumber || 'N/A'}</td>
                      <td className="px-4 py-2">{new Date(user.createdAt).toLocaleDateString()}</td>
                      <td className="px-4 py-2">
            
                        {user.courses.length > 0 ? user.courses.map(course => course.courseName).join(', ') : (
                          <>
                            <span className="italic">Not enrolled</span>
                            <button 
                              onClick={() => handleEnrollClick(user.id)}
                              className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                              Enroll
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-3">Select a Course</h2>
            <select onChange={(e) => setSelectedCourse(Number(e.target.value))} className="p-2 border rounded w-full">
              <option value="">-- Select a Course --</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>{course.courseName}</option>
              ))}
            </select>
            <div className="mt-4">
              <button onClick={enrollStudent} className="bg-green-500 text-white px-4 py-2 rounded mr-2">Enroll</button>
              <button onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Superdashboard;