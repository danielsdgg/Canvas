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
  graded: boolean;
}

const History: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const { userToken, userData } = useAuth();
  const userId = userData?.userDetails.id;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/assignments/submissions/${userId}`, {
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

    if (userId) {
      fetchSubmissions();
    }
  }, [userId, userToken]);

  return (
    <>
      <SideNav />
      <div className="p-6 bg-gradient-to-r from-green-500 to-blue-600 min-h-screen">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
          <FaArrowLeft className="mr-2" />
          Back
        </button>
        <div className="bg-white shadow-2xl rounded-xl p-8 max-w-3xl mx-auto">
          <header className="text-4xl font-bold text-center text-green-700 mb-6 border-b-4 border-green-300 pb-3">
            History
          </header>

          <h3 className="text-xl font-bold text-gray-800 mt-6 bg-green-200 p-3 rounded-md shadow-md">Submissions & Grades</h3>
          <table className="w-full mt-3 bg-white shadow-md rounded-md overflow-hidden">
            <thead>
              <tr className="bg-blue-400 text-white text-lg">
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Grade</th>
                <th className="px-6 py-3">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {submissions.length > 0 ? (
                submissions.map((submission) => (
                  <tr key={submission.submissionId} className="text-center hover:bg-blue-100">
                    <td className="px-6 py-4 border-b border-gray-300">{submission.assignmentTitle}</td>
                    <td className="px-6 py-4 border-b border-gray-300 font-semibold text-green-600">
                      {submission.graded ? submission.grade : 'Not Graded'}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300 text-gray-700">
                      {submission.graded ? submission.feedback : 'No Feedback'}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center text-gray-500">No submissions available yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default History;