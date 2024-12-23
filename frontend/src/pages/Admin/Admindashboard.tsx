import React from 'react';
import SideNav from '../../components/SideNav';

const Admindashboard = () => {
    const handleEnroll = (username: string) => {
        // Placeholder function for enrolling a student
        console.log(`${username} has been enrolled.`);
      };
      

  return (
    <>
      <SideNav />
      <div className="flex flex-col lg:flex-row justify-between p-4 bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 min-h-screen">
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4 text-white">Students Not Enrolled</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-yellow-300">
                  <th className="border border-gray-300 px-4 py-2 text-left">Username</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Data will be fetched and mapped here */}
                <tr className="hover:bg-yellow-100">
                  <td className="border border-gray-300 px-4 py-2">Student1</td>
                  <td className="border border-gray-300 px-4 py-2">Not Enrolled</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleEnroll('Student1')}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Enroll
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-yellow-100">
                  <td className="border border-gray-300 px-4 py-2">Student2</td>
                  <td className="border border-gray-300 px-4 py-2">Not Enrolled</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleEnroll('Student2')}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Enroll
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4 text-white">Class List</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-green-300">
                  <th className="border border-gray-300 px-4 py-2 text-left">Username</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Course Assigned</th>
                </tr>
              </thead>
              <tbody>
                {/* Data will be fetched and mapped here */}
                <tr className="hover:bg-green-100">
                  <td className="border border-gray-300 px-4 py-2">Student3</td>
                  <td className="border border-gray-300 px-4 py-2">student3@example.com</td>
                  <td className="border border-gray-300 px-4 py-2">Course A</td>
                </tr>
                <tr className="hover:bg-green-100">
                  <td className="border border-gray-300 px-4 py-2">Student4</td>
                  <td className="border border-gray-300 px-4 py-2">student4@example.com</td>
                  <td className="border border-gray-300 px-4 py-2">Course B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admindashboard;
