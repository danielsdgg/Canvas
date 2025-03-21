import { Courses, Student } from "../pages/Admin/Admindashboard";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import axiosInstance from "../api/api";

export default function StudentListCard({ id, courseName }: Courses) {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { userToken, userData } = useAuth();

  useEffect(() => {
    fetchStudents();
  }, [userData?.userDetails.id]);

  const fetchStudents = async () => {
    const url = axiosInstance.getUri() + `/api/v1/users/students?courseId=${id}`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setStudents(data);
      }
    } catch (err: any) {
      setError("You are not enrolled in any course. Kindly contact Admin.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-indigo-100/30 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-5 border border-indigo-500/20 mb-6 animate-pulse">
        <p className="text-center text-sm sm:text-base text-black">Loading students...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100/30 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-5 border border-red-500/20 mb-6">
        <p className="text-center text-sm sm:text-base text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-indigo-100/30 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-5 border border-indigo-500/20 mb-6 transition-all duration-300 hover:shadow-xl hover:border-indigo-400/50">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-5 text-indigo-600 uppercase tracking-wide text-center">
        {courseName} Students
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {/* Header Row */}
        <div className="hidden sm:grid sm:grid-cols-6 gap-2 bg-indigo-200/50 text-black text-sm font-semibold uppercase tracking-wider p-2 rounded-md">
          <div className="text-center">First Name</div>
          <div className="text-center">Last Name</div>
          <div className="text-center">Email</div>
          <div className="text-center">Phone</div>
          <div className="text-center">Joined</div>
          <div className="text-center">Role</div>
        </div>

        {/* Student List */}
        {students.map((student) => (
          <div
            key={student.id || student.emailAddress}
            className="flex flex-col sm:grid sm:grid-cols-6 gap-2 sm:gap-3 p-2 sm:p-3 border-b border-indigo-500/20 last:border-b-0 hover:bg-indigo-100/20 transition duration-300 rounded-md"
          >
            <div className="sm:text-center">
              <span className="sm:hidden font-semibold text-indigo-600 text-sm">First Name: </span>
              <NavLink
                to={`/user/${student.emailAddress}`}
                className="text-indigo-600 hover:underline hover:text-indigo-400 font-semibold transition duration-200 text-sm sm:text-base break-words"
              >
                {student.firstName}
              </NavLink>
            </div>
            <div className="sm:text-center">
              <span className="sm:hidden font-semibold text-indigo-600 text-sm">Last Name: </span>
              <span className="text-black text-sm sm:text-base break-words">{student.lastName}</span>
            </div>
            <div className="sm:text-center">
              <span className="sm:hidden font-semibold text-indigo-600 text-sm">Email: </span>
              <span className="text-black text-sm sm:text-base break-words">{student.emailAddress}</span>
            </div>
            <div className="sm:text-center">
              <span className="sm:hidden font-semibold text-indigo-600 text-sm">Phone: </span>
              <span className="text-black text-sm sm:text-base break-words">{student.phoneNumber || "N/A"}</span>
            </div>
            <div className="sm:text-center">
              <span className="sm:hidden font-semibold text-indigo-600 text-sm">Joined: </span>
              <span className="text-black text-sm sm:text-base break-words">
                {new Date(student.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="sm:text-center">
              <span className="sm:hidden font-semibold text-indigo-600 text-sm">Role: </span>
              <span className="text-black text-sm sm:text-base break-words">{student.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}