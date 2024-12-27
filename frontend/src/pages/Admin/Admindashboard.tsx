import React from 'react';
import SideNav from '../../components/SideNav';

const Admindashboard = () => {
  const handleEnroll = (username: string) => {
    console.log(`${username} has been enrolled.`);
  };

  const handleGrade = (student: string, grade: number) => {
    console.log(`${student} has been graded: ${grade}`);
  };

  return (
    <>
      <SideNav />
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 max-w-5xl w-full">
          {/* Students Not Enrolled Card */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-yellow-600">Students Not Enrolled</h2>
            <div className="overflow-auto">
              <table className="min-w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-yellow-100">
                    <th className="px-4 py-2 font-medium text-gray-700">Username</th>
                    <th className="px-4 py-2 font-medium text-gray-700">Status</th>
                    <th className="px-4 py-2 font-medium text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-yellow-50">
                    <td className="px-4 py-2">Student1</td>
                    <td className="px-4 py-2">Not Enrolled</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEnroll('Student1')}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                      >
                        Enroll
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-yellow-50">
                    <td className="px-4 py-2">Student2</td>
                    <td className="px-4 py-2">Not Enrolled</td>
                    <td className="px-4 py-2">
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

          {/* Class List Card */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Class List</h2>
            <div className="overflow-auto">
              <table className="min-w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-green-100">
                    <th className="px-4 py-2 font-medium text-gray-700">Username</th>
                    <th className="px-4 py-2 font-medium text-gray-700">Email</th>
                    <th className="px-4 py-2 font-medium text-gray-700">Course Assigned</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-green-50">
                    <td className="px-4 py-2">Student3</td>
                    <td className="px-4 py-2">student3@example.com</td>
                    <td className="px-4 py-2">Course A</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="px-4 py-2">Student4</td>
                    <td className="px-4 py-2">student4@example.com</td>
                    <td className="px-4 py-2">Course B</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Grading Assignments/Exams Card */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-orange-600">Grade Assignments/Exams</h2>
            <div className="overflow-auto">
              <table className="min-w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="px-4 py-2 font-medium text-gray-700">Student</th>
                    <th className="px-4 py-2 font-medium text-gray-700">Assignment</th>
                    <th className="px-4 py-2 font-medium text-gray-700">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-orange-50">
                    <td className="px-4 py-2">Student3</td>
                    <td className="px-4 py-2">Tailwindcss Quiz 1</td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        onChange={(e) => handleGrade('Student5', parseInt(e.target.value, 10))}
                        className="border rounded px-2 py-1 w-20"
                        placeholder="0-100"
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50">
                    <td className="px-4 py-2">Student4</td>
                    <td className="px-4 py-2">HTML Project</td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        onChange={(e) => handleGrade('Student6', parseInt(e.target.value, 10))}
                        className="border rounded px-2 py-1 w-20"
                        placeholder="0-100"
                      />
                    </td>
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

export default Admindashboard;
