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
  <div className="flex min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100">
    <div className="flex-1 p-6">
      <header className="text-4xl text-center font-extrabold text-white mb-8 tracking-wide">
        ADMIN DASHBOARD
      </header>

      {/* Glassmorphism Card */}
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400 uppercase">
          Students Class List
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base border-collapse border border-gray-600">
            <thead>
              <tr className="bg-yellow-500 text-gray-900 uppercase">
                <th className="px-4 py-3 border border-gray-600">First Name</th>
                <th className="px-4 py-3 border border-gray-600">Last Name</th>
                <th className="px-4 py-3 border border-gray-600">Email</th>
                <th className="px-4 py-3 border border-gray-600">Phone</th>
                <th className="px-4 py-3 border border-gray-600">Joined</th>
                <th className="px-4 py-3 border border-gray-600">Role</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border border-gray-600 hover:bg-yellow-500/30 transition duration-300"
                >
                  <td className="px-4 py-3 text-center">
                    <NavLink
                      to={`/user/${student.id}`}
                      className="text-yellow-300 hover:text-yellow-500 font-semibold transition"
                    >
                      {student.firstName}
                    </NavLink>
                  </td>
                  <td className="px-4 py-3 text-center">{student.lastName}</td>
                  <td className="px-4 py-3 text-center">{student.emailAddress}</td>
                  <td className="px-4 py-3 text-center">{student.phoneNumber || "N/A"}</td>
                  <td className="px-4 py-3 text-center">{new Date(student.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3 text-center">{student.role}</td>
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