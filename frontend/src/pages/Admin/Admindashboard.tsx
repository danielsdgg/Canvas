import React, { useEffect, useState } from 'react';
import SideNav from '../../components/SideNav'; // Ensure this component is implemented and styled appropriately

interface User {
  id: number;
  emailAddress: string;
  username: string;
  phoneNumber: string | null;
  createdAt: string;
}

const Admindashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/users');
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
    fetchUsers();
  }, []);

  // Fetch individual user details
  const fetchUserDetails = async (userId: number) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/users/${userId}`);
      const data = await response.json();
      setSelectedUser(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  if (loading) {
    return <p className="text-center text-lg text-gray-700">Loading users...</p>;
  }

  return (
    <>
    <SideNav />
    <div className="flex min-h-screen bg-gray-100">
      {/* Side Navigation */}
      

      {/* Main Content */}
      <div className="flex-1 p-5">
        <header className="text-3xl font-bold text-blue-700 mb-5">Admin Dashboard</header>

        {/* Users List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-4 bg-white shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition"
              onClick={() => fetchUserDetails(user.id)}
            >
              <h3 className="text-xl font-semibold text-gray-800">{user.username}</h3>
              <p className="text-gray-600">Email: {user.emailAddress}</p>
              <p className="text-gray-600">
                Phone: {user.phoneNumber ? user.phoneNumber : 'N/A'}
              </p>
              <p className="text-gray-600">
                Joined: {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>

        {/* User Details Section */}
        {selectedUser && (
          <div className="mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">User Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700">
                  <strong>Username:</strong> {selectedUser.username}
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> {selectedUser.emailAddress}
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> {selectedUser.phoneNumber || 'N/A'}
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Joined:</strong>{' '}
                  {new Date(selectedUser.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="mt-5">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                onClick={() => setSelectedUser(null)}
              >
                Close Details
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Admindashboard;
