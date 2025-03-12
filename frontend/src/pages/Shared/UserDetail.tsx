import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import SideNav from "../../components/SideNav";
import { FaArrowLeft } from "react-icons/fa";
import axiosInstance from "../../api/api";

interface Submission {
  submissionId: number;
  assignmentTitle: string;
  fileUrl: string;
  grade: number | null;
  feedback: string | null;
  graded: boolean;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

const UserDetail: React.FC = () => {
  const { emailAddress } = useParams<{ emailAddress: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const { userToken } = useAuth();
  const navigate = useNavigate();
  const [grading, setGrading] = useState<{ [key: number]: { grade: number; feedback: string } }>({});
  const [editing, setEditing] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://canvas-1-mr06.onrender.com/api/v1/users/${emailAddress}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        if (!response.ok) {
          console.error("Failed to fetch user details. Status:", response.status);
          return;
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    const fetchSubmissions = async () => {
      try {
        const response = await fetch(`https://canvas-1-mr06.onrender.com/api/v1/assignments/submission/${emailAddress}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

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

    if (emailAddress) {
      fetchUserDetails();
      fetchSubmissions();
    }
  }, [emailAddress, userToken]);

  const handleGradeChange = (submissionId: number, field: "grade" | "feedback", value: any) => {
    setGrading((prev) => ({
      ...prev,
      [submissionId]: {
        ...prev[submissionId],
        [field]: value,
      },
    }));
  };

  const submitGrade = async (submissionId: number) => {
    const { grade, feedback } = grading[submissionId] || {};
    if (grade === undefined || feedback === undefined) return;

    try {
      const url = axiosInstance.getUri() + "/api/v1/assignments/grade"
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({ submissionId, grade, feedback }),
      });

      if (!response.ok) {
        console.error("Failed to grade submission:", response.status);
        return;
      }

      setSubmissions((prev) =>
        prev.map((sub) => (sub.submissionId === submissionId ? { ...sub, grade, feedback, graded: true } : sub))
      );
      setEditing((prev) => ({ ...prev, [submissionId]: false }));
    } catch (error) {
      console.error("Error submitting grade:", error);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <p className="text-lg sm:text-xl text-black animate-pulse">Loading user details...</p>
      </div>
    );
  }

  return (
    <>
      <SideNav />
      <div className="min-h-screen bg-white text-black p-4 sm:p-6 md:p-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 hover:text-indigo-400 mb-6 sm:mb-8 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back to Users List
        </button>

        <div className="bg-indigo-100/30 backdrop-blur-md shadow-xl rounded-xl p-6 sm:p-8 max-w-4xl mx-auto border border-indigo-500/20 transition-all duration-300 hover:shadow-2xl">
            <header className="relative text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-indigo-600 mb-8 sm:mb-10 md:mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-2xl rounded-full -z-10"></div>
                    <span className="relative animate-fade-in">
                          User Details
                    </span>
            </header>

          <h2 className="text-xl underline sm:text-2xl md:text-3xl font-bold text-center text-indigo-600 mb-6 sm:mb-8 uppercase tracking-wide">
            {user.firstName} {user.lastName}
          </h2>

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-600 mb-4 sm:mb-6 uppercase tracking-wide">
            Submissions
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-indigo-200/50 text-black uppercase tracking-wider">
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border-b border-indigo-500/30">File-URL</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border-b border-indigo-500/30">Title</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border-b border-indigo-500/30">Grade</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border-b border-indigo-500/30">Feedback</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border-b border-indigo-500/30">Actions</th>
                </tr>
              </thead>
              <tbody>
                {submissions.length > 0 ? (
                  submissions.map((submission) => (
                    <tr
                      key={submission.submissionId}
                      className="text-center border-b border-indigo-500/20 hover:bg-indigo-100/20 transition duration-300"
                    >
                      <td className="px-2 sm:px-4 py-2 sm:py-3">
                        <a
                          href={submission.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-400 font-semibold transition duration-200 whitespace-nowrap"
                        >
                          View Submission
                        </a>
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-black whitespace-nowrap">
                        {submission.assignmentTitle}
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-black">
                        {editing[submission.submissionId] ? (
                          <input
                            type="number"
                            value={grading[submission.submissionId]?.grade ?? submission.grade ?? ""}
                            onChange={(e) =>
                              handleGradeChange(submission.submissionId, "grade", parseInt(e.target.value))
                            }
                            className="w-full sm:w-20 bg-white border border-indigo-500/50 rounded p-1 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
                          />
                        ) : (
                          <span
                            onClick={() => setEditing({ ...editing, [submission.submissionId]: true })}
                            className="cursor-pointer text-black hover:text-indigo-600 transition duration-200"
                          >
                            {submission.grade !== null ? submission.grade : "Not graded"}
                          </span>
                        )}
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-black">
                        <input
                          type="text"
                          defaultValue={submission.feedback || ""}
                          onChange={(e) => handleGradeChange(submission.submissionId, "feedback", e.target.value)}
                          className="w-full bg-white border border-indigo-500/50 rounded p-1 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3">
                        <button
                          onClick={() => submitGrade(submission.submissionId)}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md transition-all duration-200 transform hover:scale-105"
                        >
                          Save
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-2 sm:px-4 py-4 sm:py-6 text-center text-gray-600 text-xs sm:text-sm md:text-base"
                    >
                      No submissions available yet.
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

export default UserDetail;