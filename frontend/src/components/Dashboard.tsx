import React from 'react';
import SideNav from './SideNav';
import { Link } from 'react-router-dom';

const Dashboard:React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* SideNav */}
      <div className="md:w-12">
        <SideNav />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 sm:p-6 bg-gray-200 ml-0 md:ml-0">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Banner */}
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6 rounded-md shadow-sm">
            <p className="text-sm sm:text-base">
              <strong>Welcome to Canvas!</strong> You don't have any courses, so this page won't be very exciting for now.
              Once you've created or signed up for courses, you'll start to see conversations from all of your classes.
            </p>
          </div>

          {/* Dashboard Title */}
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-center lg:text-left">
            Dashboard
          </h1>

          {/* Recent Activity Section */}
          <section className="border-b border-gray-300 mb-6 pb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-center lg:text-left">
              Recent Activity
            </h2>
            <p className="text-gray-600 mt-2 text-center lg:text-left">
              Nothing to show for now
            </p>
          </section>

          {/* Right Sidebar Section (To-Do List, Feedback) */}
          <div className="grid gap-4 lg:flex lg:justify-between lg:space-x-4">
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-center lg:text-left">
                To Do
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">Nothing for now</p>
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-center lg:text-left">
                Recent Feedback
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">Nothing for now</p>
            </div>

            <Link to={'/grades'}><button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition text-sm sm:text-base h-20">
              View Grades
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
