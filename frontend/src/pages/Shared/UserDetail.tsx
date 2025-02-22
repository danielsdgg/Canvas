import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import SideNav from '../../components/SideNav';
import { FaArrowLeft } from 'react-icons/fa';

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
  emailAddress: string;
  phoneNumber: string | null;
  createdAt: string;
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
        const response = await fetch(`http://localhost:8080/api/v1/users/${emailAddress}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        if (!response.ok) {
          console.error('Failed to fetch user details. Status:', response.status);
          return;
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

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
      fetchUserDetails();
      fetchSubmissions();
    }
  }, [emailAddress, userToken]);

  const handleGradeChange = (submissionId: number, field: 'grade' | 'feedback', value: any) => {
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
      const response = await fetch('/api/v1/assignments/grade', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({ submissionId, grade, feedback }),
      });

      if (!response.ok) {
        console.error('Failed to grade submission:', response.status);
        return;
      }

      setSubmissions((prev) =>
        prev.map((sub) => (sub.submissionId === submissionId ? { ...sub, grade, feedback, graded: true } : sub))
      );
      setEditing((prev) => ({ ...prev, [submissionId]: false }));
    } catch (error) {
      console.error('Error submitting grade:', error);
    }
  };

  if (!user) {
    return <p className="text-center text-lg text-gray-700">Loading user details...</p>;
  }

  return (
    <>
      <SideNav />
      <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-white hover:text-yellow-300 mb-6 transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          <FaArrowLeft className="mr-2" />
          Back to Users List
        </button>
        
        <div className="bg-white shadow-2xl rounded-xl p-8 max-w-3xl mx-auto">
          <header className="text-4xl font-bold text-center text-blue-700 mb-6 border-b-4 border-blue-300 pb-3">
            User Details
          </header>

          <h2 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-gray-200 p-3 rounded-md shadow-md">
            {user.firstName} {user.lastName}
          </h2>

          <h3 className="text-xl font-bold text-gray-800 mt-6 bg-blue-200 p-3 rounded-md shadow-md">Submissions</h3>
          <table className="w-full mt-3 bg-white shadow-md rounded-md overflow-hidden">
            <thead>
              <tr className="bg-yellow-400 text-gray-900 text-lg">
                <th className="px-6 py-3">File-URL</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Grade</th>
                <th className="px-6 py-3">Feedback</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <tr key={submission.submissionId} className="text-center hover:bg-yellow-100">
                  <td className="px-6 py-4 border-b border-gray-300">
                    <a href={submission.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      View Submission
                    </a>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300">{submission.assignmentTitle}</td>
                  <td className="px-6 py-4 border-b border-gray-300">
  {editing[submission.submissionId] ? (
    <input
      type="number"
      value={grading[submission.submissionId]?.grade ?? submission.grade ?? ''}
      onChange={(e) => handleGradeChange(submission.submissionId, 'grade', parseInt(e.target.value))}
      className="border rounded p-1"
    />
  ) : (
    <span onClick={() => setEditing({ ...editing, [submission.submissionId]: true })} className="cursor-pointer">
      {submission.grade !== null ? submission.grade : 'Not graded'}
    </span>
  )}
</td>

                  <td className="px-6 py-4 border-b border-gray-300">
                    <input
                      type="text"
                      defaultValue={submission.feedback || ''}
                      onChange={(e) => handleGradeChange(submission.submissionId, 'feedback', e.target.value)}
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300">
                    <button onClick={() => submitGrade(submission.submissionId)} className="bg-green-500 text-white px-3 py-1 rounded">Save</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
