import { Courses, Student } from "../pages/Admin/Admindashboard";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";

export default function StudentListCard({ id, courseName }: Courses) {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { userToken, userData } = useAuth();

  useEffect(() => {
    fetchStudents();
  }, [userData?.userDetails.id]);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`/api/v1/users/students?courseId=${id}`, {
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
      <div className="bg-indigo-100/30 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-6 border border-indigo-500/20 mb-6 animate-pulse">
        <p className="text-center text-sm sm:text-base text-black">Loading students...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100/30 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-6 border border-red-500/20 mb-6">
        <p className="text-center text-sm sm:text-base text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-indigo-100/30 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-6 border border-indigo-500/20 mb-6 transition-all duration-300 hover:shadow-xl hover:border-indigo-400/50">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-indigo-600 uppercase tracking-wide">
        {courseName} Students
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm md:text-base border-collapse">
          <thead>
            <tr className="bg-indigo-200/50 text-black uppercase tracking-wider">
              <th className="px-2 sm:px-4 py-2 sm:py-3 border-b border-indigo-500/30">First Name</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 border-b border-indigo-500/30">Last Name</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 border-b border-indigo-500/30">Email</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 border-b border-indigo-500/30">Phone</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 border-b border-indigo-500/30">Joined</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 border-b border-indigo-500/30">Role</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.id || student.emailAddress}
                className="border-b border-indigo-500/20 hover:bg-indigo-100/20 transition duration-300"
              >
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                  <NavLink
                    to={`/user/${student.emailAddress}`}
                    className="text-indigo-600 hover:text-indigo-400 font-semibold transition duration-200 whitespace-nowrap"
                  >
                    {student.firstName}
                  </NavLink>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-black whitespace-nowrap">
                  {student.lastName}
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-black break-all sm:break-words">
                  {student.emailAddress}
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-black whitespace-nowrap">
                  {student.phoneNumber || "N/A"}
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-black whitespace-nowrap">
                  {new Date(student.createdAt).toLocaleDateString()}
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-black whitespace-nowrap">
                  {student.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}