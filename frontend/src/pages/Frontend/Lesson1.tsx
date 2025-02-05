import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";
import { FaArrowLeft } from "react-icons/fa";

const Lesson1:React.FC = () => {
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
          <h1 className="text-3xl font-bold text-indigo-800">Introduction to web Development</h1>
          <p className="text-gray-700 leading-relaxed mt-4">
            In this lesson, you'll dive deep into the foundational concepts of web development. Explore HTML CSS,TailwindCSS
            learn about semantic structures,Git,CLIs and work on practical assignments to solidify your knowledge.
          </p>
        </div>

        {/* Weeks Section */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
          <div className="flex justify-around mb-6">
            <div
              onClick={() => toggleDropdown(1)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium ${
                openWeek === 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Week 1: Introduction
            </div>
            <div
              onClick={() => toggleDropdown(2)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium ${
                openWeek === 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Week 2: HTML & CSS
            </div>
            <div
              onClick={() => toggleDropdown(3)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium ${
                openWeek === 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Week 3: TailwindCSS
            </div>
            <div
              onClick={() => toggleDropdown(4)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium ${
                openWeek === 4 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Week 4: Project
            </div>
          </div>

          {/* Week Content */}
          <div>
            {openWeek === 1 && (
              <div className="space-y-6">
                {/* Day 1 */}
                <div className="bg-indigo-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl1day1">Day 1: Welcome to Morgan Technical Training</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Learn about our community and the course structure. Get ready to start your journey in web development.
                  </p>
                </div>
                {/* Day 2 */}
                <div className="bg-indigo-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl1day2">Day 2: Getting started</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Set up your development environment and get ready to begin your frontend journey.
                  </p>
                </div>
                 {/* Day 3 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                <Link to="/fdl1day3">Day 3: Command Line Interfaces</Link>
              </h3>
              <p className="text-gray-800 leading-relaxed">Learn the basics and fundamentals of CLIs.</p>
            </div>

            {/* day 4 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                <Link to="/fdl1day4">Day 4: Course Outline</Link>
              </h3>
              <p className="text-gray-800 leading-relaxed">See the various topics and programming languages that you will learn in frontend development course.</p>
            </div>

            {/* day 5 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                <Link to="/fdl1day5">Day 5: Students' handbook</Link>
              </h3>
              <p className="text-gray-800 leading-relaxed">Get in-depth knowledge about the role of students in our organization</p>
            </div>
                {/* Add the rest of the days here */}
              </div>
            )}

            {openWeek === 2 && (
              <div className="space-y-6">
                {/* Example Content for Week 2 */}
                <div className="bg-purple-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-purple-700 mb-4 underline">
                    <Link to="/fdl1day6">Day 6: Introduction to HTML</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Take a deep dive into HTML and learn about its structure,syntax and also take a tour of the web.
                  </p>
                </div>
                {/* day 7 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl1day7">Day 7: HTML tags,links and images</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Learn about the common tags of html, how to add links and images to your web page.
                  </p>
                </div>

                {/* day 8 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl1day8">Day 8: Getting started with CSS,Semantic HTML </Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                First look at CSS for stylings and Semantic html
                  </p>
                </div>

                {/* day 9 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl1day9">Day 9: Multimedia Elements</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Learn how to insert media elements like audio and video to your web page.
                  </p>
                </div>

                {/* day 10 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/fdl1day10">Day 10: Flexbox & Grid</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Learn about flexbox & Grid.
                  </p>
                </div>
              </div>
            )}

            {openWeek === 3 && (
                <div className="space-y-6">
                    {/* day 11 */}
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                            <Link to="/fdl1day11">Day 11: Introduction to TailwindCSS</Link>
                        </h3>
                        <p className="text-gray-800 leading-relaxed">
                            Learn about Tailwind and create a simple webpage using TailwindCSS.
                        </p>
                    </div>
                </div>
            )}

            {openWeek === 4 && (
              <div className="space-y-6">
                {/* Example Content for Week 3 */}
                <div className="bg-pink-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-pink-700 mb-4 underline">
                    <Link to="/lesson2project">Project Week</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    A comprehensive recap of all topics covered so far. Assignments include website creation, styling, and
                    basic operations.
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

export default Lesson1