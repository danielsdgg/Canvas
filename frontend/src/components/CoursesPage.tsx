import React from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";

const CoursesPage: React.FC = () => {
  return (
    <>
      <SideNav />
      <div className="bg-gray-100 min-h-screen p-4 sm:pl-[250px] flex flex-col items-center sm:items-start">
        {/* Page Header */}
        <div className="p-6 mb-8 w-full text-center sm:text-left sm:max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Available Courses
          </h1>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* Course Card */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6 text-center sm:text-left">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Data Science
              </h2>
              <p className="text-gray-600 mb-4">
                Learn to analyze and visualize data to make data-driven decisions.
              </p>
              <Link
                to="/courses/1"
                className="text-blue-600 hover:underline font-medium"
              >
                View Course →
              </Link>
            </div>
          </div>

          {/* Course Card */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6 text-center sm:text-left">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Frontend Development
              </h2>
              <p className="text-gray-600 mb-4">
                Master the art of creating stunning user interfaces with modern tools.
              </p>
              <Link
                to="/courses/2"
                className="text-blue-600 hover:underline font-medium"
              >
                View Course →
              </Link>
            </div>
          </div>

          {/* Course Card */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6 text-center sm:text-left">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Backend Development
              </h2>
              <p className="text-gray-600 mb-4">
                Build robust server-side applications and APIs with confidence.
              </p>
              <Link
                to="/courses/3"
                className="text-blue-600 hover:underline font-medium"
              >
                View Course →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
