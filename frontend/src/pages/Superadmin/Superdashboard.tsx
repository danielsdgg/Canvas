import React from 'react';
import SideNav from '../../components/SideNav';

const Superdashboard = () => {
  return (
    <>
      <SideNav />
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 max-w-6xl w-full">
          {/* Lecturers Card */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">LECTURERS</h2>
            <div className="overflow-auto">
              <table className="min-w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-purple-400">
                    <th className="px-4 py-2 font-medium text-gray-700">USERNAME</th>
                    <th className="px-4 py-2 font-medium text-gray-700">COURSE ASSIGNED</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-purple-50">
                    <td className="px-4 py-2">Admin1</td>
                    <td className="px-4 py-2">Course X</td>
                  </tr>
                  <tr className="hover:bg-purple-50">
                    <td className="px-4 py-2">Admin2</td>
                    <td className="px-4 py-2">Course Y</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Students Card */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">STUDENTS</h2>
            <div className="overflow-auto">
              <table className="min-w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-blue-400">
                    <th className="px-4 py-2 font-medium text-gray-700">USERNAME</th>
                    <th className="px-4 py-2 font-medium text-gray-700">COURSE ENROLLED</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="px-4 py-2">Student1</td>
                    <td className="px-4 py-2">Course X</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="px-4 py-2">Student2</td>
                    <td className="px-4 py-2">Course Y</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Grades Card */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-green-600">GRADES</h2>
            <div className="overflow-auto">
              <table className="min-w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-green-400">
                    <th className="px-4 py-2 font-medium text-gray-700">STUDENT</th>
                    <th className="px-4 py-2 font-medium text-gray-700">COURSE</th>
                    <th className="px-4 py-2 font-medium text-gray-700">ASSIGNMENT/EXAM</th>
                    <th className="px-4 py-2 font-medium text-gray-700">GRADE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-green-50">
                    <td className="px-4 py-2">Student1</td>
                    <td className="px-4 py-2">Course X</td>
                    <td className="px-4 py-2">Exam 1</td>
                    <td className="px-4 py-2">82</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="px-4 py-2">Student2</td>
                    <td className="px-4 py-2">Course Y</td>
                    <td className="px-4 py-2">Assignment 1</td>
                    <td className="px-4 py-2">55</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Superdashboard;
