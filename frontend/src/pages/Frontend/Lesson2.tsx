import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";
import { FaArrowLeft } from "react-icons/fa";

const Lesson2: React.FC = () => {
  const navigate = useNavigate();
  const [openWeek, setOpenWeek] = useState<number | null>(null);

  useEffect(() => {
    setOpenWeek(1);
  }, []);

  const toggleDropdown = (week: number) => {
    setOpenWeek(openWeek === week ? null : week);
  };

  return (
    <>
      <SideNav />
      <section className="min-h-screen bg-white text-black p-4 sm:p-6 md:p-8 flex flex-col items-center">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6 sm:mb-8 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back to Course
        </button>

        {/* Lesson Description */}
        <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-8">
          <h1 className="underline text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 uppercase tracking-wide">
            JavaScript
          </h1>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            In this lesson, you’ll dive deep into the foundational concepts of JavaScript. Explore variables, functions, loops,
            and objects, and learn about DOM manipulation, event handling, ES6+ features, and asynchronous programming. Work
            on practical assignments to solidify your knowledge and enhance your coding skills.
          </p>
        </div>

        {/* Weeks Section */}
        <div className="max-w-4xl w-full mx-auto bg-gray-50 shadow-lg rounded-lg p-6 sm:p-8 border border-gray-200 transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col sm:flex-row justify-around mb-6 gap-4 sm:gap-6">
            <div
              onClick={() => toggleDropdown(1)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-sm sm:text-lg font-medium ${
                openWeek === 1
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              Week 1: JavaScript Basics & Fundamentals
            </div>
            <div
              onClick={() => toggleDropdown(2)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-sm sm:text-lg font-medium ${
                openWeek === 2
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              Week 2: Advanced JavaScript & Async Programming
            </div>
            <div
              onClick={() => toggleDropdown(3)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-sm sm:text-lg font-medium ${
                openWeek === 3
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              Week 3: JavaScript Project Week
            </div>
          </div>

          {/* Week Content */}
          <div>
            {openWeek === 1 && (
              <div className="space-y-6">
                {/* Day 1 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link to="/fdl2day1" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 1: Introduction to JavaScript & Variables
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Learn JavaScript basics and how to work with variables.
                  </p>
                </div>
                {/* Day 2 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link to="/fdl2day2" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 2: Operators, Conditions & Workflows
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Get more insight on JavaScript operations, conditionals, and workflows.
                  </p>
                </div>
                {/* Day 3 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link to="/fdl2day3" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 3: Functions & Scope
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Learn how to create functions and understand scope in JavaScript.
                  </p>
                </div>
                {/* Day 4 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link to="/fdl2day4" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 4: Loops & Iteration
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Explore loops and iteration techniques in JavaScript.
                  </p>
                </div>
                {/* Day 5 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link to="/fdl2day5" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 5: Arrays & Objects
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Learn about arrays and objects in JavaScript.
                  </p>
                </div>
              </div>
            )}

            {openWeek === 2 && (
              <div className="space-y-6">
                {/* Day 6 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link to="/fdl2day6" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 6: The Document Object Model (DOM)
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Understand what the DOM is and how to manipulate it.
                  </p>
                </div>
                {/* Day 7 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link to="/fdl2day7" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 7: Events & Event Listeners
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Learn how to handle events and add event listeners in JavaScript.
                  </p>
                </div>
                {/* Day 8 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link to="/fdl2day8" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 8: Working with Forms & User Input
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    First look at working with forms and capturing user input.
                  </p>
                </div>
                {/* Day 9 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link to="/fdl2day9" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 9: Introduction to Asynchronous JavaScript (Promises & Fetch API)
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Learn how to fetch data from an API using Promises and the Fetch API.
                  </p>
                </div>
                {/* Day 10 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link to="/fdl2day10" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 10: Introduction to ES6+ Features & Best Practices
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Explore ES6+ features and JavaScript best practices.
                  </p>
                </div>
              </div>
            )}

            {openWeek === 3 && (
              <div className="space-y-6">
                {/* Day 11 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link to="/fdl2day11" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 11: Object-Oriented JavaScript & Context
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Introduction to object-oriented programming and context in JavaScript.
                  </p>
                </div>
                {/* Day 12 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link to="/fdl2day12" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 12: Project Week
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Put to the test all you’ve learned in this JavaScript course.
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

export default Lesson2;