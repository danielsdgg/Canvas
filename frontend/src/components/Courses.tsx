import React from 'react';
import { Link } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  term: string;
}

// SideNav Component
const SideNav: React.FC = () => (
  <div className="fixed top-0 left-0 h-full w-64 bg-blue-900 text-white p-4 shadow-lg">
    <h2 className="text-2xl font-semibold mb-6">Courses</h2>
    {/* Categories */}
    <ul className="space-y-4">
      <li><Link to="#" className="hover:underline">Current Courses</Link></li>
      <li><Link to="#" className="hover:underline">Upcoming Courses</Link></li>
      <li><Link to="#" className="hover:underline">Completed Courses</Link></li>
      <li><Link to="#" className="hover:underline">Archived Courses</Link></li>
    </ul>
  </div>
);

// Courses Component
const Courses: React.FC = () => {
  const courses: Course[] = [
    { id: 1, title: 'Cyber Security', description: 'Introduction to cyber.', instructor: 'Prof. Morgan', term: '2024/5' },
    { id: 2, title: 'Software Engineering - Frontend Development', description: 'Creating stunning UIs', instructor: 'Dr. Daniel Muiruri', term: '2025/6' },
    { id: 3, title: 'Graphics Design', description: 'An in-depth look at graphical designs.', instructor: 'Prof. Morgan', term: '2025/6' },
    { id: 4, title: 'Software Engineering - Backend Development', description: 'build servers', instructor: 'Prof. Morgan', term: '2025/6' },
    { id: 5, title: 'Computer Packages', description: 'Introduction to computers.', instructor: 'Dr. Daniel Muiruri', term: '2025/6' },
    // Add more courses as needed
  ];

  return (
    <div className="flex">
      {/* Render the SideNav */}
      <SideNav />

      {/* Main Content Area */}
      <div className="ml-64 flex-grow p-6 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-8">Available Courses</h2>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white shadow-lg rounded-lg p-4 border">
              <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{course.term}</p>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <p className="text-gray-500 text-sm mb-4">Instructor: {course.instructor}</p>
              <Link to={`/courses/${course.id}`} className="text-blue-500 hover:underline font-semibold">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
