import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Grade: React.FC = () => {
  const navigate = useNavigate();
  const { studentId } = useParams<{ studentId: string }>();
  const [grades, setGrades] = useState<any[]>([]);
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    studentID: "",
    course: "",
    semester: "",
  });

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/assignments/results/${studentId}`);
        const data = await response.json();
        setGrades(data);
      } catch (error) {
        console.error("Error fetching grades:", error);
      }
    };
    
    fetchGrades();
  }, [studentId]);

  const calculateOverallPerformance = () => {
    if (grades.length === 0) return "No Data";
    const totalScores = grades.reduce((sum, grade) => sum + grade.grade, 0);
    const average = totalScores / grades.length;
    if (average >= 85) return "Distinction";
    if (average >= 50) return "Pass";
    return "Fail";
  };

  return (
    <section className="min-h-screen bg-gray-100 p-6 sm:p-12 flex flex-col items-center">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-700 hover:text-blue-600 mb-6 transition-all duration-300"
      >
        <FaArrowLeft className="mr-2" /> Back to Dashboard
      </button>

      {/* Header */}
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-10 w-full max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-indigo-600">Grading Summary</h1>
        <p className="mt-2 text-gray-600"><strong>Student ID:</strong> {studentId}</p>
      </div>

      {/* Grading Table */}
      <div className="bg-white shadow-md rounded-lg mt-8 p-6 sm:p-10 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-indigo-600 text-center mb-6">Course Grades</h2>
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead className="bg-indigo-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-indigo-700">Assignment</th>
              <th className="border border-gray-300 px-4 py-2 text-indigo-700">Score</th>
              <th className="border border-gray-300 px-4 py-2 text-indigo-700">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {grades.length > 0 ? (
              grades.map((grade, index) => (
                <tr key={index} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition-all`}>
                  <td className="border border-gray-300 px-4 py-2">{grade.assignmentTitle}</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">{grade.grade}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">{grade.feedback || "No feedback provided"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center text-gray-500 py-4">No grades available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Overall Performance */}
      <div className="bg-white shadow-md rounded-lg mt-8 p-6 sm:p-10 w-full max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-indigo-600">Overall Performance</h2>
        <p className={`text-3xl font-bold mt-4 ${
          calculateOverallPerformance() === "Distinction" ? "text-green-600" :
          calculateOverallPerformance() === "Fail" ? "text-red-600" : "text-gray-600"}`}
        >
          {calculateOverallPerformance()}
        </p>
        <p className="text-gray-600 mt-2">Based on the average score across all assignments.</p>
      </div>
    </section>
  );
};

export default Grade;
