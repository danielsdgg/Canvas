import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";
import { FaArrowLeft } from "react-icons/fa";

const Lesson3:React.FC = () => {
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
          <h1 className="text-3xl font-bold text-indigo-800">React - Javascript library</h1>
          <p className="text-gray-700 leading-relaxed mt-4">
            In this lesson, you'll dive into React, a powerful JavaScript library for building dynamic user interfaces. 
            You'll also explore essential web technologies like HTML, CSS, Javascript, Tailwind & Git. 
            Through hands-on assignments, you'll gain practical experience and deepen your understanding of modern frontend development.
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
              Week 1: Introduction
            </div>
            <div
              onClick={() => toggleDropdown(2)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium mb-6 ${
                openWeek === 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Week 2: Logical topics
            </div>
            <div
              onClick={() => toggleDropdown(3)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium mb-6 ${
                openWeek === 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Week 3: Advanced React
            </div>

          </div>

          {/* Week Content */}
          <div>
            {openWeek === 1 && (
              <div className="space-y-6">
                {/* Day 1 */}
                <div className="bg-indigo-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl3day1">Day 1: Introduction & JSX</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Understanding React, setting up a project, and JSX syntax
                  </p>
                </div>
                {/* Day 2 */}
                <div className="bg-indigo-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl3day2">Day 2: Components, Props & State</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Creating functional components, passing props, and managing state
                  </p>
                </div>
                 {/* Day 3 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                <Link to="/fdl3day3">Day 3: Event Handling & Conditional Rendering</Link>
              </h3>
              <p className="text-gray-800 leading-relaxed">Handling user interactions and dynamically rendering UI</p>
            </div>

            {/* day 4 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                <Link to="/fdl3day4">Day 4: Lists, Keys & Forms</Link>
              </h3>
              <p className="text-gray-800 leading-relaxed">
               Rendering dynamic lists and managing form inputs in React                
              </p>
            </div>

            {/* day 5 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                <Link to="/fdl3day5">Day 5: Component Lifecycle & React Hooks</Link>
              </h3>
              <p className="text-gray-800 leading-relaxed">Exploring lifecycle methods and hooks like useState, useEffect</p>
            </div>
                {/* Add the rest of the days here */}
              </div>
            )}

            {openWeek === 2 && (
              <div className="space-y-6">
                {/* Example Content for Week 2 */}
                <div className="bg-purple-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-purple-700 mb-4 underline">
                    <Link to="/fdl3day6">Day 6: React Router & Navigation</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Implementing navigation with React Router for multi-page apps
                  </p>
                </div>
                {/* day 7 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl3day7">Day 7: Fetching API Data</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Learn about making API requests using fetch/Axios and handling responses
                  </p>
                </div>

                {/* day 8 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl3day8">Day 8: Advanced React Hooks </Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                   Deep dive into other react hooks like useReducer, useRef, and custom hooks                
                  </p>
                </div>

                {/* day 9 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl3day9">Day 9: Global State Management (Context API)</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Learn about managing global state efficiently with React Context API
                  </p>
                </div>

                {/* day 10 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl3day10">Day 10: Error Handling & Debugging</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Learn about Debugging React apps and handling errors effectively
                  </p>
                </div>
              </div>
            )}

            {openWeek === 3 && (
                <div className="space-y-6">
                    {/* day 11 */}
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                            <Link to="/fdl3day11">Day 11: Performance Optimization</Link>
                        </h3>
                        <p className="text-gray-800 leading-relaxed">
                            Learn how to optimize React performance with memoization techniques
                        </p>
                    </div>
                    {/* day 12 */}
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                            <Link to="/fdl3day12">Day 12: React with TypeScript</Link>
                        </h3>
                        <p className="text-gray-800 leading-relaxed">
                            Learn how to use TypeScript for type safety in React projects
                        </p>
                    </div>
                    {/* day 13 */}
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                            <Link to="/fdl3day13">Day 13: Building & Deploying React Apps</Link>
                        </h3>
                        <p className="text-gray-800 leading-relaxed">
                            Deploying React projects on Netlify
                        </p>
                    </div>
                    {/* day 14 */}
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold text-center text-red-700 mb-4 underline">
                            <Link to="/fdl3day14">Day 14: Lesson 3 Project</Link>
                        </h3>
                        <p className="text-gray-800 leading-relaxed">
                            Its time to put all the skills & knowledge you've learnt to the test and build something great using react
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

export default Lesson3