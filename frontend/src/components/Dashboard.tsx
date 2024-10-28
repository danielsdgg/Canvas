import React from 'react';
import SideNav from './SideNav';

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* SideNav as Top Navbar on mobile, Sidebar on larger screens */}
      <SideNav />

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Banner */}
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6">
            <p>
              <strong>Welcome to Canvas!</strong> You don't have any courses, so this page won't be very exciting for now.
              Once you've created or signed up for courses, you'll start to see conversations from all of your classes.
            </p>
          </div>

          {/* Dashboard Title */}
          <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>

          {/* Recent Activity Section */}
          <section className="border-b border-gray-300 mb-6">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <p className="text-gray-600 mt-2">Nothing to show for now</p>
          </section>

          {/* Right Sidebar Section (To-Do List, Feedback) */}
          <div className="lg:flex lg:justify-between lg:space-x-4">
            <div className="bg-white p-4 shadow rounded mb-6 lg:mb-0">
              <h3 className="text-lg font-semibold mb-2">To Do</h3>
              <p className="text-gray-600">Nothing for now</p>
            </div>

            <div className="bg-white p-4 shadow rounded mb-6 lg:mb-0">
              <h3 className="text-lg font-semibold mb-2">Recent Feedback</h3>
              <p className="text-gray-600">Nothing for now</p>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded shadow">
              View Grades
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
