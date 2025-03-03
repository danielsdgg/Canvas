import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";
import { FaArrowLeft } from "react-icons/fa";

const Lesson1: React.FC = () => {
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
            Introduction to Web Development
          </h1>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            In this lesson, you’ll dive deep into the foundational concepts of web development. Explore HTML, CSS, TailwindCSS,
            learn about semantic structures, Git, CLIs, and work on practical assignments to solidify your knowledge.
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
              Week 1: Introduction
            </div>
            <div
              onClick={() => toggleDropdown(2)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-sm sm:text-lg font-medium ${
                openWeek === 2
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              Week 2: HTML & CSS
            </div>
            <div
              onClick={() => toggleDropdown(3)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-sm sm:text-lg font-medium ${
                openWeek === 3
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              Week 3: TailwindCSS & Final Project
            </div>
          </div>

          {/* Week Content */}
          <div>
            {openWeek === 1 && (
              <div className="space-y-6">
                {/* Day 1 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link to="/fdl1day1" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 1: Welcome to Morgan Technical Training
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Learn about our community and the course structure. Get ready to start your journey in web development.
                  </p>
                </div>
                {/* Day 2 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link to="/fdl1day2" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 2: Getting Started
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Set up your development environment and get ready to begin your frontend journey.
                  </p>
                </div>
                {/* Day 3 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                <Link to="/fdl1day3" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 3: Command Line Interfaces
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Learn the basics and fundamentals of CLIs.
                  </p>
                </div>
                {/* Day 4 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                <Link to="/fdl1day4" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 4: Course Outline
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    See the various topics and programming languages that you will learn in the frontend development course.
                  </p>
                </div>
                {/* Day 5 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                <Link to="/fdl1day5" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 5: Students' Handbook
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Get in-depth knowledge about the role of students in our organization.
                  </p>
                </div>
              </div>
            )}

            {openWeek === 2 && (
              <div className="space-y-6">
                {/* Day 6 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                <Link to="/fdl1day6" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 6: Introduction to HTML
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Take a deep dive into HTML and learn about its structure, syntax, and also take a tour of the web.
                  </p>
                </div>
                {/* Day 7 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                <Link to="/fdl1day7" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 7: HTML Tags, Links, and Images
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Learn about the common tags of HTML, how to add links and images to your web page.
                  </p>
                </div>
                {/* Day 8 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                <Link to="/fdl1day8" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 8: Getting Started with CSS, Semantic HTML
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    First look at CSS for styling and Semantic HTML.
                  </p>
                </div>
                {/* Day 9 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                <Link to="/fdl1day9" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 9: Multimedia Elements
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Learn how to insert media elements like audio and video to your web page.
                  </p>
                </div>
                {/* Day 10 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                <Link to="/fdl1day10" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 10: Flexbox & Grid
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Learn about Flexbox & Grid.
                  </p>
                </div>
              </div>
            )}

            {openWeek === 3 && (
              <div className="space-y-6">
                {/* Day 11 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                <Link to="/fdl1day11" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 11: Introduction to TailwindCSS
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Learn about Tailwind and create a simple webpage using TailwindCSS.
                  </p>
                </div>
                {/* Day 12 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                <Link to="/fdl1day12" className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                      Day 12: Frontend Lesson 1 Project - HTML
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    It’s time to put all the skills & knowledge you’ve learned to the test.
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

export default Lesson1;