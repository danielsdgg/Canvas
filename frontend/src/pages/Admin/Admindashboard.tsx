import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import SideNav from '../../components/SideNav';

interface Student {
  id: number;
  emailAddress: string;
  firstName: string;
  lastName: string;
  role: string;
  phoneNumber: string | null;
  createdAt: string;
}

const Admindashboard: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { userToken } = useAuth();
  const adminId = 1;
  const courseId = 1;

  useEffect(() => {
    fetchStudents();
  }, [userToken]);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`/api/v1/users/students?adminId=${adminId}&courseId=${courseId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setStudents(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-lg text-gray-700">Loading students...</p>;
  }

  return (
    <>
      <SideNav />
      <div className="flex min-h-screen bg-gray-100">
        <div className="flex-1 p-5">
          <header className="text-3xl text-center font-bold text-blue-700 mb-5">ADMIN DASHBOARD</header>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-red-600">Students Class List</h2>
            <div className="overflow-auto">
              <table className="min-w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-4 py-2">First Name</th>
                    <th className="px-4 py-2">Last Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Phone Number</th>
                    <th className="px-4 py-2">Joined</th>
                    <th className="px-4 py-2">Role</th>

                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student.id} className="hover:bg-blue-200">
                      <td className="px-4 py-2">
                        <NavLink to={`/user/${student.id}`} className="text-blue-500 hover:text-blue-700">
                          {student.firstName}
                        </NavLink>
                      </td>
                      <td className="px-4 py-2">{student.lastName}</td>
                      <td className="px-4 py-2">{student.emailAddress}</td>
                      <td className="px-4 py-2">{student.phoneNumber || 'N/A'}</td>
                      <td className="px-4 py-2">{new Date(student.createdAt).toLocaleDateString()}</td>
                      <td className="px-4 py-2">{student.role}</td>

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