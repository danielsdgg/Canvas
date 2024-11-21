import React from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";

const CoursesPage: React.FC = () => {
  return (
    <>
      <SideNav />
      <div className=" bg-gray-100 min-h-screen p-2">
        {/* Page Header */}
        <div className="flex justify-center items-center rounded-lg p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Available Courses</h1>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Course Card */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Data Science</h2>
            <p className="text-gray-600 mb-4">
              Learn to analyze and visualize data to make data-driven decisions.
            </p>
            <Link to="/courses/1" className="text-blue-600 hover:underline font-medium">
              View Course →
            </Link>
          </div>

          {/* Course Card */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Frontend Development
            </h2>
            <p className="text-gray-600 mb-4">
              Master the art of creating stunning user interfaces with modern tools.
            </p>
            <Link to="/courses/2" className="text-blue-600 hover:underline font-medium">
              View Course →
            </Link>
          </div>

          {/* Course Card */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Backend Development
            </h2>
            <p className="text-gray-600 mb-4">
              Build robust server-side applications and APIs with confidence.
            </p>
            <Link to="/courses/3" className="text-blue-600 hover:underline font-medium">
              View Course →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
