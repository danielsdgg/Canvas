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
  username: string;
  emailAddress: string;
  phoneNumber: string | null;
  createdAt: string;
  submissions: Submission[]; // Ensure this is an array
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

  // Ensure user and user.submissions are defined before trying to access them
  if (!user) {
    return <p className="text-center text-lg text-gray-700">Loading user details...</p>;
  }

  return (
    <>
    <SideNav/>
    {/* Back Button */}
    <button onClick={() => navigate(-1)}
    className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
        <FaArrowLeft className="mr-2" />
        Back to Users List
    </button>
    {/* user detail section */}
    <div className="p-5 bg-gray-100">
      <header className="text-3xl font-bold text-blue-700 mb-5">User Details</header>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">User: {user.username}</h2>
        <p><strong>Email:</strong> {user.emailAddress}</p>
        <p><strong>Phone:</strong> {user.phoneNumber || 'N/A'}</p>
        <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>

        <h3 className="text-xl font-bold text-gray-800 mt-5">Submissions</h3>
        <table className="min-w-full text-left text-sm sm:text-base mt-3">
          <thead>
            <tr className="bg-yellow-100">
              <th className="px-4 py-2 font-medium text-gray-700">Title</th>
              <th className="px-4 py-2 font-medium text-gray-700">Grade</th>
            </tr>
          </thead>
          <tbody>
            {/* Check if submissions is an array and has items */}
            {Array.isArray(user.submissions) && user.submissions.length > 0 ? (
              user.submissions.map((submission) => (
                <tr key={submission.id} className="hover:bg-yellow-50">
                  <td className="px-4 py-2">{submission.title}</td>
                  <td className="px-4 py-2">{submission.grade}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="px-4 py-2 text-center">No submissions available</td>
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
