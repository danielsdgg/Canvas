import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext'; 
import SideNav from './SideNav';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axiosInstance from '../api/api';

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
      const url = axiosInstance.getUri() + `/api/v1/assignments/submission/${emailAddress}`
      try {
        const response = await fetch(url, {
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
      <div className="min-h-screen bg-white text-black p-4 sm:p-6 md:p-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 hover:text-indigo-400 mb-6 sm:mb-8 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
        <div className="max-w-3xl mx-auto bg-indigo-100/30 backdrop-blur-md shadow-xl rounded-lg p-6 sm:p-8 border border-indigo-500/20 transition-all duration-300 hover:shadow-2xl">
          <header className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 mb-6 uppercase tracking-wide text-center border-b-2 border-indigo-500/50 pb-3">
            My Grades
          </header>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-600 mb-4 uppercase tracking-wide">
            Submissions & Grades
          </h3>
          <table className="w-full mt-3 bg-indigo-100/20 rounded-md overflow-hidden shadow-md">
            <thead>
              <tr className="bg-indigo-200/50 text-black text-lg">
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
                    className="text-center hover:bg-indigo-100/40 transition duration-200"
                  >
                    <td className="px-6 py-4 border-b border-indigo-500/30 text-black">
                      {submission.assignmentTitle}
                    </td>
                    <td className="px-6 py-4 border-b border-indigo-500/30 font-semibold text-indigo-600">
                      {submission.graded ? submission.grade : 'Not Graded'}
                    </td>
                    <td className="px-6 py-4 border-b border-indigo-500/30 text-black">
                      {submission.graded ? submission.feedback : 'No Feedback'}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center text-gray-600">
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