import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Grade:React.FC = () => {
    const navigate = useNavigate();
  const studentDetails = {
    name: "John Doe",
    studentID: "STU123456",
    course: "Frontend Development",
    semester: "Fall 2024",
  };

  const grades = [
    { subject: "HTML Basics", score: 92, status: "Distinction" },
    { subject: "CSS & Tailwind Styling", score: 78, status: "Pass" },
    { subject: "Javascript Fundamentals", score: 65, status: "Pass" },
    { subject: "React Library", score: 45, status: "Fail" },
    { subject: "Final Project", score: 88, status: "Distinction" },
  ];

  const calculateOverallPerformance = () => {
    const totalScores = grades.reduce((sum, grade) => sum + grade.score, 0);
    const average = totalScores / grades.length;
    if (average >= 85) return "Distinction";
    if (average >= 50) return "Pass";
    return "Fail";
  };

  return (
    <section className="min-h-screen bg-gray-50 p-6 sm:p-12 flex flex-col items-center">
                   {/* Back Button */}
    <button onClick={() => navigate(-1)}
    className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
        <FaArrowLeft className="mr-2" />
            Back to Dashboard
    </button>
      {/* Header */}
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-10 w-full max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-indigo-600">Grading Summary</h1>
        <p className="mt-2 text-gray-600">
          <strong>Name:</strong> {studentDetails.name}
        </p>
        <p className="text-gray-600">
          <strong>Student ID:</strong> {studentDetails.studentID}
        </p>
        <p className="text-gray-600">
          <strong>Course:</strong> {studentDetails.course}
        </p>
        <p className="text-gray-600">
          <strong>Semester:</strong> {studentDetails.semester}
        </p>
      </div>

      {/* Grading Table */}
      <div className="bg-white shadow-md rounded-lg mt-8 p-6 sm:p-10 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-indigo-600 text-center mb-6">Course Grades</h2>
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead className="bg-indigo-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-indigo-700">Subject</th>
              <th className="border border-gray-300 px-4 py-2 text-indigo-700">Score </th>
              <th className="border border-gray-300 px-4 py-2 text-indigo-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition-all`}
              >
                <td className="border border-gray-300 px-4 py-2">{grade.subject}</td>
                <td className="border border-gray-300 px-4 py-2">{grade.score}</td>
                <td
                  className={`border border-gray-300 px-4 py-2 font-semibold ${
                    grade.status === "Distinction"
                      ? "text-green-600"
                      : grade.status === "Fail"
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {grade.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Overall Performance */}
      <div className="bg-white shadow-md rounded-lg mt-8 p-6 sm:p-10 w-full max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-indigo-600">Overall Performance</h2>
        <p
          className={`text-3xl font-bold mt-4 ${
            calculateOverallPerformance() === "Distinction"
              ? "text-green-600"
              : calculateOverallPerformance() === "Fail"
              ? "text-red-600"
              : "text-gray-600"
          }`}
        >
          {calculateOverallPerformance()}
        </p>
        <p className="text-gray-600 mt-2">Based on the average score across all subjects.</p>
      </div>
    </section>
  );
};

export default Grade;
