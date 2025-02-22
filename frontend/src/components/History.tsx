import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext'; 
import SideNav from './SideNav';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

interface Submission {
  submissionId: number;
  assignmentTitle: string;
  grade: number | null;
  feedback: string | null;
  submittedAt: string;
  graded: boolean;
}

const History: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const { userToken, userData } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/assignments/submission/${userData?.userDetails.emailAddress}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        if (!response.ok) {
          console.error('Failed to fetch submissions. Status:', response.status);
          return;
        }

        const data = await response.json();
        setSubmissions(data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };

    if (userData) {
      fetchSubmissions();
    }
  }, [userData, userToken]);

  return (
    <>
  <SideNav />
  <div className="p-8 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
    {/* Back Button */}
    <button 
      onClick={() => navigate(-1)} 
      className="flex items-center text-gray-700 hover:text-blue-700 mb-6 transition-transform transform hover:scale-105"
    >
      <FaArrowLeft className="mr-2 text-lg" />
      <span className="font-semibold">Back</span>
    </button>

    {/* Card Container */}
    <div className="bg-white shadow-lg rounded-lg p-10 max-w-4xl mx-auto">
      {/* Title */}
      <header className="text-3xl font-extrabold text-center text-blue-700 mb-6 border-b-2 border-blue-300 pb-3">
        Submission History
      </header>

      {/* Submissions Section */}
      <h3 className="text-lg font-semibold text-gray-900 mb-4 bg-blue-100 p-3 rounded-lg shadow-sm">
        Submissions & Grades
      </h3>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-blue-600 text-white text-sm uppercase">
              <th className="px-5 py-3 text-left">Date Submitted</th>
              <th className="px-5 py-3 text-left">Assignment Title</th>
              <th className="px-5 py-3 text-center">Grade</th>
              <th className="px-5 py-3 text-center">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {submissions.length > 0 ? (
              submissions.map((submission, index) => (
                <tr key={submission.submissionId} className={`text-gray-800 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="px-5 py-4 border-b border-gray-200">{submission.submittedAt}</td>
                  <td className="px-5 py-4 border-b border-gray-200">{submission.assignmentTitle}</td>
                  <td className="px-5 py-4 border-b border-gray-200 text-center font-semibold text-green-600">
                    {submission.graded ? submission.grade : <span className="text-red-500">Not Graded</span>}
                  </td>
                  <td className="px-5 py-4 border-b border-gray-200 text-center text-gray-700">
                    {submission.graded ? submission.feedback : <span className="text-gray-500">No Feedback</span>}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">No submissions available yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</>

  );
};

export default History;