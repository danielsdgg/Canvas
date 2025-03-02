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

const Grade: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const { userToken, userData } = useAuth();
  const emailAddress = userData?.userDetails.emailAddress;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/assignments/submission/${emailAddress}`, {
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

    if (emailAddress) {
      fetchSubmissions();
    }
  }, [emailAddress, userToken]);

  return (
    <>
      <SideNav />
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-800 to-gray-900 text-gray-100 p-4 sm:p-6 md:p-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-300 hover:text-indigo-100 mb-6 sm:mb-8 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
        <div className="max-w-3xl mx-auto bg-indigo-900/30 backdrop-blur-md shadow-xl rounded-lg p-6 sm:p-8 border border-indigo-500/20 transition-all duration-300 hover:shadow-2xl">
          <header className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-400 mb-6 uppercase tracking-wide text-center border-b-2 border-indigo-500/50 pb-3">
            My Grades
          </header>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-300 mb-4 uppercase tracking-wide">
            Submissions & Grades
          </h3>
          <table className="w-full mt-3 bg-indigo-800/20 rounded-md overflow-hidden shadow-md">
            <thead>
              <tr className="bg-indigo-700/50 text-gray-100 text-lg">
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Grade</th>
                <th className="px-6 py-3">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {submissions.length > 0 ? (
                submissions.map((submission) => (
                  <tr
                    key={submission.submissionId}
                    className="text-center hover:bg-indigo-800/40 transition duration-200"
                  >
                    <td className="px-6 py-4 border-b border-indigo-500/30 text-gray-300">
                      {submission.assignmentTitle}
                    </td>
                    <td className="px-6 py-4 border-b border-indigo-500/30 font-semibold text-teal-400">
                      {submission.graded ? submission.grade : 'Not Graded'}
                    </td>
                    <td className="px-6 py-4 border-b border-indigo-500/30 text-gray-400">
                      {submission.graded ? submission.feedback : 'No Feedback'}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center text-gray-400">
                    No submissions available yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Grade;