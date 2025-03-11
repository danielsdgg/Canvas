import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import SideNav from "./SideNav";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

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
        const response = await fetch(
          `https://canvas-1-mr06.onrender.com/api/v1/assignments/submission/${userData?.userDetails.emailAddress}`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        if (!response.ok) {
          console.error("Failed to fetch submissions. Status:", response.status);
          return;
        }

        const data = await response.json();
        setSubmissions(data);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    };

    if (userData) {
      fetchSubmissions();
    }
  }, [userData, userToken]);

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
          <span className="font-semibold">Back</span>
        </button>

        {/* Card Container */}
        <div className="bg-indigo-100/30 backdrop-blur-md shadow-xl rounded-lg p-6 sm:p-8 max-w-4xl mx-auto border border-indigo-500/20 transition-all duration-300 hover:shadow-2xl">
          {/* Title */}
          <header className="relative text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-indigo-600 mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-2xl rounded-full -z-10"></div>
            <span className="relative animate-fade-in">
              Submission History
            </span>
          </header>

          {/* Submissions Section */}
          <h3 className="text-lg underline sm:text-xl md:text-2xl font-semibold text-indigo-600 mb-4 sm:mb-6 uppercase tracking-wide">
            Submissions & Grades
          </h3>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-indigo-200/50 text-black uppercase tracking-wider">
                  <th className="px-4 sm:px-5 py-2 sm:py-3 text-left border-b border-indigo-500/30">
                    Date Submitted
                  </th>
                  <th className="px-4 sm:px-5 py-2 sm:py-3 text-left border-b border-indigo-500/30">
                    Assignment Title
                  </th>
                  <th className="px-4 sm:px-5 py-2 sm:py-3 text-center border-b border-indigo-500/30">
                    Grade
                  </th>
                  <th className="px-4 sm:px-5 py-2 sm:py-3 text-center border-b border-indigo-500/30">
                    Feedback
                  </th>
                </tr>
              </thead>
              <tbody>
                {submissions.length > 0 ? (
                  submissions.map((submission, index) => (
                    <tr
                      key={submission.submissionId}
                      className={`text-black border-b border-indigo-500/20 hover:bg-indigo-100/20 transition duration-300 ${
                        index % 2 === 0 ? "bg-indigo-100/10" : "bg-transparent"
                      }`}
                    >
                      <td className="px-4 sm:px-5 py-3 sm:py-4 text-left whitespace-nowrap italic">
                        {new Date(submission.submittedAt).toLocaleString()}
                      </td>
                      <td className="px-4 sm:px-5 py-3 sm:py-4 text-left">
                        {submission.assignmentTitle}
                      </td>
                      <td className="px-4 sm:px-5 py-3 sm:py-4 text-center font-semibold">
                        {submission.graded ? (
                          <span className="text-indigo-600">{submission.grade}</span>
                        ) : (
                          <span className="text-red-600">Not Graded</span>
                        )}
                      </td>
                      <td className="px-4 sm:px-5 py-3 sm:py-4 text-center text-black">
                        {submission.graded ? (
                          submission.feedback
                        ) : (
                          <span className="text-gray-600">No Feedback</span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 sm:px-6 py-4 sm:py-6 text-center text-gray-600 text-xs sm:text-sm md:text-base"
                    >
                      No submissions available yet
                    </td>
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