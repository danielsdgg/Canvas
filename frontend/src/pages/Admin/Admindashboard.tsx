import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link to navigate
import { useAuth } from '../../context/authContext';
import SideNav from '../../components/SideNav';

interface User {
  id: number;
  emailAddress: string;
  username: string;
  phoneNumber: string | null;
  createdAt: string;
}

const Admindashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const { userToken } = useAuth();

  useEffect(() => {
    if (!userToken) {
      console.error('User token is missing.');
      navigate('/login');
    } else {
      fetchUsers();
    }
  }, [userToken, navigate]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/users', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (!response.ok) {
        console.error('Failed to fetch users. Status:', response.status);
        return;
      }

      const data = await response.json();
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        console.error('Unexpected API response format:', data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-lg text-gray-700">Loading users...</p>;
  }

  return (
    <>
      <SideNav />
      <div className="flex min-h-screen bg-gray-100">
        <div className="flex-1 p-5">
          <header className="text-3xl font-bold text-blue-700 mb-5">Admin Dashboard</header>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-yellow-600">Users List</h2>
            <div className="overflow-auto">
              <table className="min-w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-yellow-100">
                    <th className="px-4 py-2 font-medium text-gray-700">Username</th>
                    <th className="px-4 py-2 font-medium text-gray-700">Email</th>
                    <th className="px-4 py-2 font-medium text-gray-700">Phone Number</th>
                    <th className="px-4 py-2 font-medium text-gray-700">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-yellow-50">
                      <td className="px-4 py-2">
                        <Link to={`/user/${user.id}`} className="text-blue-500 hover:text-blue-700">
                          {user.username}
                        </Link>
                      </td>
                      <td className="px-4 py-2">{user.emailAddress}</td>
                      <td className="px-4 py-2">{user.phoneNumber ? user.phoneNumber : 'N/A'}</td>
                      <td className="px-4 py-2">{new Date(user.createdAt).toLocaleDateString()}</td>
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
