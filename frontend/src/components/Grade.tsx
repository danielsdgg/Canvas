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
      const url = axiosInstance.getUri() + `/api/v1/assignments/submission/${emailAddress}`;
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
      <div className="min-h-screen bg-gray-50 text-gray-900 p-4 sm:p-6 lg:p-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 hover:text-indigo-500 mb-4 sm:mb-6 transition-all duration-300 ease-in-out group"
        >
          <FaArrowLeft className="mr-2 text-sm sm:text-base transition-transform group-hover:-translate-x-1" />
          <span className="text-sm sm:text-base font-medium">Back</span>
        </button>

        {/* Main Container */}
        <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 lg:p-8 mx-auto border border-gray-200 transition-all duration-300 hover:shadow-xl max-w-full">
          <header className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-700 mb-4 sm:mb-6 lg:mb-8 text-center tracking-tight">
            My Grades
          </header>

          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-indigo-700 mb-3 sm:mb-4 lg:mb-5 tracking-wide">
            Submissions & Grades
          </h3>

          <div className="space-y-4 sm:space-y-5">
            {submissions.length > 0 ? (
              submissions.map((submission) => (
                <div
                  key={submission.submissionId}
                  className="border border-gray-200 rounded-lg p-3 sm:p-4 bg-white hover:bg-gray-50 transition duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-indigo-600 tracking-tight">
                      {submission.assignmentTitle}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                      <div>
                        <span className="text-sm sm:text-base font-medium text-gray-700">Grade: </span>
                        <span className={`text-sm sm:text-base ${submission.graded ? 'text-indigo-600 font-semibold' : 'text-gray-600'}`}>
                          {submission.graded ? submission.grade : 'Not Graded'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <span className="text-sm sm:text-base font-medium text-gray-700">Feedback: </span>
                        <span className="text-sm sm:text-base text-gray-600 break-words">
                          {submission.graded && submission.feedback ? submission.feedback : 'No Feedback'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-sm sm:text-base lg:text-lg text-gray-500 py-4 sm:py-6">
                No submissions available yet
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Grade;