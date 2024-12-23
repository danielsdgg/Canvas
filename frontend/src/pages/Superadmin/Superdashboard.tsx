import React from 'react';
import SideNav from '../../components/SideNav';

const Superdashboard = () => {
  return (
    <>
      <SideNav />
      <div className="flex flex-col lg:flex-row justify-between p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen">
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4 text-white">LECTURERS</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-purple-300">
                  <th className="border border-gray-300 px-4 py-2 text-left">USERNAME</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">COURSE ASSIGNED</th>
                </tr>
              </thead>
              <tbody>
                {/* Data will be fetched and mapped here */}
                <tr className="hover:bg-purple-100">
                  <td className="border border-gray-300 px-4 py-2">Admin1</td>
                  <td className="border border-gray-300 px-4 py-2">Course A</td>
                </tr>
                <tr className="hover:bg-purple-100">
                  <td className="border border-gray-300 px-4 py-2">Admin2</td>
                  <td className="border border-gray-300 px-4 py-2">Course B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4 text-white">STUDENTS</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-blue-300">
                  <th className="border border-gray-300 px-4 py-2 text-left">USERNAME</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">COURSE ENROLLED</th>
                </tr>
              </thead>
              <tbody>
                {/* Data will be fetched and mapped here */}
                <tr className="hover:bg-blue-100">
                  <td className="border border-gray-300 px-4 py-2">Student1</td>
                  <td className="border border-gray-300 px-4 py-2">Course X</td>
                </tr>
                <tr className="hover:bg-blue-100">
                  <td className="border border-gray-300 px-4 py-2">Student2</td>
                  <td className="border border-gray-300 px-4 py-2">Course Y</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Superdashboard;