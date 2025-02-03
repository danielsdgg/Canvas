import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import SideNav from '../../components/SideNav';
import { FaArrowLeft } from 'react-icons/fa';

interface Submission {
  id: number;
  title: string;
  grade: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string | null;
  createdAt: string;
  submissions: Submission[];
}

const UserDetail: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const { userToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        if (!response.ok) {
          console.error('Failed to fetch user details. Status:', response.status);
          return;
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, [userId, userToken]);

  if (!user) {
    return <p className="text-center text-lg text-gray-700">Loading user details...</p>;
  }

  return (
    <>
      <SideNav />
      
      <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-white hover:text-yellow-300 mb-6 transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          <FaArrowLeft className="mr-2" />
          Back to Users List
        </button>
        
        <div className="bg-white shadow-2xl rounded-xl p-8 max-w-3xl mx-auto">
          <header className="text-4xl font-bold text-center text-blue-700 mb-6 border-b-4 border-blue-300 pb-3">
            User Details
          </header>

          <h2 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-gray-200 p-3 rounded-md shadow-md">
            {user.firstName} {user.lastName}
          </h2>

          <div className="text-lg space-y-4">
            <p><span className="font-semibold text-gray-900">Email:</span> {user.emailAddress}</p>
            <p><span className="font-semibold text-gray-900">Phone:</span> {user.phoneNumber || 'N/A'}</p>
            <p><span className="font-semibold text-gray-900">Joined:</span> {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mt-6 bg-blue-200 p-3 rounded-md shadow-md">Submissions</h3>
          <table className="w-full mt-3 bg-white shadow-md rounded-md overflow-hidden">
            <thead>
              <tr className="bg-yellow-400 text-gray-900 text-lg">
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Grade</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(user.submissions) && user.submissions.length > 0 ? (
                user.submissions.map((submission) => (
                  <tr key={submission.id} className="text-center hover:bg-yellow-100">
                    <td className="px-6 py-4 border-b border-gray-300">{submission.title}</td>
                    <td className="px-6 py-4 border-b border-gray-300 font-semibold text-green-600">{submission.grade}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="px-6 py-4 text-center text-gray-500">No submissions available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserDetail;