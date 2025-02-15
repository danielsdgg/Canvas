import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SideNav from '../../components/SideNav';
import { FaArrowLeft } from 'react-icons/fa';

const Lesson2:React.FC = () => {
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
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaArrowLeft className="mr-2" />
            Back to Course
        </button>
    
        {/* Lesson Description */}
        <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-3xl font-bold text-indigo-800">JavaScript</h1>
            <p className="text-gray-700 leading-relaxed mt-4">
                In this lesson, you'll dive deep into the foundational concepts of JavaScript. Explore variables, functions, loops, 
                and objects, and learn about DOM manipulation, event handling, ES6+ features, and asynchronous programming. 
                Work on practical assignments to solidify your knowledge and enhance your coding skills.
            </p>
        </div>
    
        {/* Weeks Section */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
            <div className="flex justify-around mb-6 gap-6">
                <div onClick={() => toggleDropdown(1)}
                      className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium mb-6 ${
                        openWeek === 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
                      }`}>
                      Week 1: JavaScript Basics & Fundamentals
                </div>
                <div onClick={() => toggleDropdown(2)}
                      className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium mb-6 ${
                        openWeek === 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
                      }`}>
                      Week 2: Advanced JavaScript & Asynchronous Programming
                </div>
                    <div
                      onClick={() => toggleDropdown(3)}
                      className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium mb-6 ${
                        openWeek === 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
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
                        <div className="bg-indigo-50 shadow-lg rounded-lg p-6 md:p-8">
                          <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                            <Link to="/fdl2day1">Day 1: Introduction to JavaScript & Variables</Link>
                          </h3>
                          <p className="text-gray-800 leading-relaxed">
                            Learn javascript
                          </p>
                        </div>
                        {/* Day 2 */}
                        <div className="bg-indigo-50 shadow-lg rounded-lg p-6 md:p-8">
                          <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                            <Link to="/fdl2day2">Day 2: Operators, Conditions & Workflows</Link>
                          </h3>
                          <p className="text-gray-800 leading-relaxed">
                            Get more insight on javascript operations
                          </p>
                        </div>
                         {/* Day 3 */}
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                      <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                        <Link to="/fdl2day3">Day 3: Functions & Scope</Link>
                      </h3>
                      <p className="text-gray-800 leading-relaxed">Learn how to create a function & how it operates.</p>
                    </div>
        
                    {/* day 4 */}
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                      <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                        <Link to="/fdl2day4">Day 4: Loops & Iteration</Link>
                      </h3>
                      <p className="text-gray-800 leading-relaxed">See about loops & iterations</p>
                    </div>
        
                    {/* day 5 */}
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                      <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                        <Link to="/fdl2day5">Day 5: Arrays & objects</Link>
                      </h3>
                      <p className="text-gray-800 leading-relaxed">Learn about arrays & objects</p>
                    </div>
                        {/* Add the rest of the days here */}
                      </div>
                    )}
        
                    {openWeek === 2 && (
                      <div className="space-y-6">
                        {/* Example Content for Week 2 */}
                        <div className="bg-purple-50 shadow-lg rounded-lg p-6 md:p-8">
                          <h3 className="text-xl font-bold text-center text-purple-700 mb-4 underline">
                            <Link to="/fdl2day6">Day 6: The Document Object Model(DOM)</Link>
                          </h3>
                          <p className="text-gray-800 leading-relaxed">
                            What is DOM?
                          </p>
                        </div>
                        {/* day 7 */}
                        <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                          <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                            <Link to="/fdl2day7">Day 7: Events & Event Listeners</Link>
                          </h3>
                          <p className="text-gray-800 leading-relaxed">
                            Learn about the common tags of html, how to add links and images to your web page.
                          </p>
                        </div>
        
                        {/* day 8 */}
                        <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                          <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                            <Link to="/fdl2day8">Day 8: Working with forms & user input </Link>
                          </h3>
                          <p className="text-gray-800 leading-relaxed">
                        First look at forms
                          </p>
                        </div>
        
                        {/* day 9 */}
                        <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                          <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                            <Link to="/fdl2day9">Day 9: Introduction to Asynchronous JavaScript (Promises & Fetch API)</Link>
                          </h3>
                          <p className="text-gray-800 leading-relaxed">
                            Learn how to fetch data from an API.
                          </p>
                        </div>
        
                        {/* day 10 */}
                        <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                          <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                            <Link to="/fdl2day10">Day 10: Introduction to ES6+ Features & JavaScript Best Practices
                            </Link>
                          </h3>
                          <p className="text-gray-800 leading-relaxed">
                            ES6 & best practices on javascript
                          </p>
                        </div>
                      </div>
                    )}
        
                    {openWeek === 3 && (
                        <div className="space-y-6">
                            {/* day 11 */}
                            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                                <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                                    <Link to="/fdl2day11">Day 11: Object Oriented JavaScript & Context</Link>
                                </h3>
                                <p className="text-gray-800 leading-relaxed">
                                    Introduction to Context & object orientation in  javascript
                                </p>
                            </div>
                            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                                <h3 className="text-xl font-bold text-center text-red-700 mb-4 underline">
                                    <Link to="/fdl2day12">Project Week</Link>
                                </h3>
                                <p className="text-gray-800 leading-relaxed">
                                    Put to the test all you've learnt.
                                </p>
                            </div>
                        </div>
                    )}
                  </div>
                </div>
    </section>
    </>
  )
}

export default Lesson2
