import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";
import { FaArrowLeft } from "react-icons/fa";

const Leson2:React.FC = () => {
  const navigate = useNavigate();

  const [openWeek, setOpenWeek] = useState<number | null>(null);

  useEffect(() => {
    setOpenWeek(1); 
  }, []);

  // Toggle the dropdown content
  const toggleDropdown = (week: number) => {
    setOpenWeek(openWeek === week ? null : week);
  };

  return (
    <>
      <SideNav />
      <section className="mb-12 p-4 sm:p-8 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 min-h-screen sm:pl-[90px] flex flex-col items-center sm:items-start">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back to Course
        </button>

        {/* Lesson Description */}
        <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-800">Flask</h1>
<p className="text-gray-700 leading-relaxed mt-4">
  Flask is a lightweight and flexible web framework for Python, designed to help developers build web applications quickly and efficiently. It follows a minimalistic approach, providing essential tools for routing, handling requests, and integrating with databases, while allowing developers to extend its functionality as needed.
</p>

<p className="text-gray-700 leading-relaxed mt-4">
  In this module, you’ll learn how to set up a Flask project, create routes, work with templates, and connect to databases. You’ll also explore RESTful API development, authentication, and deployment strategies.
</p>

<p className="text-gray-700 leading-relaxed mt-4">
  By the end of this lesson, you’ll be able to build scalable backend systems with Flask, enabling seamless communication between frontend applications and databases.
</p>

        </div>

        {/* Weeks Section */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
          <div className="flex justify-around mb-6 gap-6">
            <div
              onClick={() => toggleDropdown(1)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium mb-6 ${
                openWeek === 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Week 1: Flask Framework
            </div>
            <div
              onClick={() => toggleDropdown(2)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium mb-6 ${
                openWeek === 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Week 2: Indepth Flask & More
            </div>
            <div
              onClick={() => toggleDropdown(3)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium mb-6 ${
                openWeek === 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Week 3: Flask or Fullstack project
            </div>
            
          </div>

          {/* Week Content */}
          <div>
            {openWeek === 1 && (
              <div className="space-y-6">
                {/* Day 1 */}
                <div className="bg-indigo-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/sdl2day1">Day 1: Introduction to Flask & Environment setup</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Learn about the Flask framework, setting up a development environment, and creating your first Flask application
                  </p>
                </div>
                {/* Day 2 */}
                <div className="bg-indigo-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/sdl2day2">Day 2: Routing & Request handling</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Understand routing in Flask, handling requests, and working with query parameters
                  </p>
                </div>
                 {/* Day 3 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                <Link to="/sdl2day3">Day 3: Forms & Handling User Inputs</Link>
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Handling form inputs in flask
              </p>
            </div>

            {/* day 4 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                <Link to="/sdl2day4">Day 4: Flask & Databases</Link>
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Defining models using Flask-SQLAlchemy,CRUD operations, and database migrations
              </p>
            </div>

            {/* day 5 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                <Link to="/sdl2day5">Day 5: Flask Blueprints & Application Structuring</Link>
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Understanding Flask blueprints, structuring your application, and working with multiple routes
              </p>
            </div>

              </div>
            )}

            {openWeek === 2 && (
              <div className="space-y-6">
                {/* Example Content for Week 2 */}
                <div className="bg-purple-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-purple-700 mb-4 underline">
                    <Link to="/sdl2day6">Day 6: User Authentication & Authorization</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Implementing user authentication with flask-login,hashing passwords, and role-based access control(RBAC)
                  </p>
                </div>
                {/* day 7 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/sdl2day7">Day 7: Flask Middleware & Request Hooks</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Understanding before_request, after_request, and teardown_request
                  </p>
                </div>

                {/* day 8 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/sdl2day8">Day 8: Working with Flask Restful APIs </Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Building RESTful APIs with Flask-RESTful
                  </p>
                </div>

                {/* day 9 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/sdl2day9">Day 9: Working with external APIs & Data Handling</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Fetching and sending data to third-party APIs, using requests and handling JSON data
                  </p>
                </div>

                {/* day 10 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/sdl2day10">Day 10: Error Handling & Debugging in Flask</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Handling common flask errors, debugging, and logging    
                  </p>
                </div>
              </div>
            )}

            {openWeek === 3 && (
                <div className="space-y-6">
                    {/* day 11 */}
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                            <Link to="/sdl2day11">Day 11: Deployment and best practices</Link>
                        </h3>
                        <p className="text-gray-800 leading-relaxed">
                            Learn to prepare a flask app for production, best practices, and deployment strategies
                        </p>
                    </div>
                    {/* day 12 */}
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold text-center text-red-700 mb-4 underline">
                            <Link to="/sdl2day12">Day 12: Backend Lesson 2 Project</Link>
                        </h3>
                        <p className="text-gray-800 leading-relaxed">
                            You are now a fullstack developer; build a fullstack project using Flask and React
                        </p>
                    </div>
                </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Leson2;