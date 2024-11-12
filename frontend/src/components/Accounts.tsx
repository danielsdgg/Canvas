// src/components/Account.tsx
import React from 'react';
import SideNav from './SideNav';

interface User {
  name: string;
  email: string;
  phone: string;
  role: string;
  joinedDate: string;
}

const userData: User = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  phone: '+1 (555) 123-4567',
  role: 'Student',
  joinedDate: '2023-05-15',
};

const Account: React.FC = () => {
  return (
    <>
    <SideNav/>
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">Account Details</h2>

      {/* Personal Details */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-semibold mb-4">Personal Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-600 font-medium">Name</label>
            <p className="text-gray-800">{userData.name}</p>
          </div>
          <div>
            <label className="text-gray-600 font-medium">Email</label>
            <p className="text-gray-800">{userData.email}</p>
          </div>
          <div>
            <label className="text-gray-600 font-medium">Phone</label>
            <p className="text-gray-800">{userData.phone}</p>
          </div>
          <div>
            <label className="text-gray-600 font-medium">Role</label>
            <p className="text-gray-800">{userData.role}</p>
          </div>
          <div>
            <label className="text-gray-600 font-medium">Joined Date</label>
            <p className="text-gray-800">{userData.joinedDate}</p>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-semibold mb-4">Account Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200">
            Edit Profile
          </button>
          <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition duration-200">
            Change Password
          </button>
        </div>
      </div>

      {/* Security Settings */}
      {/* <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Security Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition duration-200">
            Change Password
          </button>

        </div>
      </div> */}
    </div>
    </>

  );
};

export default Account;
