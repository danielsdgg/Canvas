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
        const url = axiosInstance.getUri() + `/api/v1/users/${emailAddress}`;
        const response = await fetch(url, {
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
        const url = axiosInstance.getUri() + `/api/v1/assignments/submission/${emailAddress}`;
        const response = await fetch(url, {
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
      const url = axiosInstance.getUri() + "/api/v1/assignments/grade";
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

  const handleFileUrlClick = (fileUrl: string) => {
    const isUrl = /^(https?:\/\/|www\.)[^\s/$.?#].[^\s]*$/i.test(fileUrl);
    if (isUrl) {
      window.open(fileUrl, "_blank", "noopener,noreferrer");
    } else {
      const dataUri = `data:text/html;charset=utf-8,${encodeURIComponent(`<pre>${fileUrl}</pre>`)}`;
      window.open(dataUri, "_blank");
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-base sm:text-lg text-gray-700 animate-pulse">Loading user details...</p>
      </div>
    );
  }

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
          <span className="text-sm sm:text-base font-medium">Back to Users List</span>
        </button>

        {/* Main Container */}
        <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 lg:p-8 mx-auto border border-gray-200 transition-all duration-300 hover:shadow-xl max-w-full">
          <header className="relative text-xl sm:text-2xl lg:text-3xl font-bold text-center text-indigo-700 mb-4 sm:mb-6 lg:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 opacity-30 blur-2xl rounded-full -z-10"></div>
            <span className="relative">User Details</span>
          </header>

          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center text-gray-800 mb-4 sm:mb-6 tracking-tight">
            {user.firstName} {user.lastName}
          </h2>

          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-indigo-700 mb-3 sm:mb-4 lg:mb-5 tracking-wide">
            Submissions
          </h3>

          <div className="space-y-4 sm:space-y-5">
            {submissions.length > 0 ? (
              submissions.map((submission) => (
                <div
                  key={submission.submissionId}
                  className="border border-gray-200 rounded-lg p-3 sm:p-4 bg-white hover:bg-gray-50 transition duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {/* Title */}
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-indigo-600 tracking-tight">
                      {submission.assignmentTitle}
                    </h4>

                    {/* Submission Details */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                      <div className="flex-1">
                        <button
                          onClick={() => handleFileUrlClick(submission.fileUrl)}
                          className="text-indigo-600 hover:text-indigo-500 font-medium text-sm sm:text-base transition duration-200 underline hover:no-underline"
                        >
                          View Submission
                        </button>
                      </div>

                      <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-sm sm:text-base font-medium text-gray-700">Grade:</span>
                          {editing[submission.submissionId] ? (
                            <input
                              type="number"
                              value={grading[submission.submissionId]?.grade ?? submission.grade ?? ""}
                              onChange={(e) =>
                                handleGradeChange(submission.submissionId, "grade", parseInt(e.target.value))
                              }
                              className="w-16 sm:w-20 bg-gray-50 border border-gray-300 rounded-md p-1 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                            />
                          ) : (
                            <span
                              onClick={() => setEditing({ ...editing, [submission.submissionId]: true })}
                              className="cursor-pointer text-gray-600 hover:text-indigo-600 text-sm sm:text-base transition duration-200"
                            >
                              {submission.grade !== null ? submission.grade : "Not Graded"}
                            </span>
                          )}
                        </div>

                        <div className="flex-1 flex items-center gap-2">
                          <span className="text-sm sm:text-base font-medium text-gray-700">Feedback:</span>
                          <input
                            type="text"
                            defaultValue={submission.feedback || ""}
                            onChange={(e) => handleGradeChange(submission.submissionId, "feedback", e.target.value)}
                            className="w-full bg-gray-50 border border-gray-300 rounded-md p-1 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                          />
                        </div>

                        <button
                          onClick={() => submitGrade(submission.submissionId)}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md text-sm sm:text-base font-medium transition-all duration-200 hover:shadow-md active:scale-95"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-sm sm:text-base lg:text-lg text-gray-500 py-4 sm:py-6">
                No submissions available yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;