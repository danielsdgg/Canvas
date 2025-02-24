import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";
import { FaArrowLeft } from "react-icons/fa";

const Leson1:React.FC = () => {
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
        <h1 className="text-3xl font-bold text-indigo-800">Introduction to Backend Development</h1>
        <p className="text-gray-700 leading-relaxed mt-4">
            Backend development focuses on the server-side logic that powers web applications. It handles data processing, authentication, database interactions, and business logic.             In this lesson, you'll explore key backend concepts, including programming with Python, working with databases, setting up APIs with Flask, and managing server-side functionality.

        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
            By the end of this module, you'll have a strong foundation in backend development, allowing you to build and deploy dynamic, data-driven web applications.
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
              Week 1: Introduction and Basics of Python
            </div>
            <div
              onClick={() => toggleDropdown(2)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium mb-6 ${
                openWeek === 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Week 2: Advanced Python and Databases
            </div>
            <div
              onClick={() => toggleDropdown(3)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-lg font-medium mb-6 ${
                openWeek === 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              Week 3: Recap of Python & Project
            </div>
            
          </div>

          {/* Week Content */}
          <div>
            {openWeek === 1 && (
              <div className="space-y-6">
                {/* Day 1 */}
                <div className="bg-indigo-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/sdl1day1">Day 1: Introduction to Programming & Python Basics</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Understanding programming, installing Python, and writing first scripts.
                  </p>
                </div>
                {/* Day 2 */}
                <div className="bg-indigo-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/sdl1day2">Day 2: Variables, Data Types & Operators</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Discover working with numbers, strings, booleans, lists, tuples, and dictionaries
                  </p>
                </div>
                 {/* Day 3 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                <Link to="/sdl1day3">Day 3: Control Flow: Conditions & Loops</Link>
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Using if-else statements, for loops, and while loops effectively
              </p>
            </div>

            {/* day 4 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                <Link to="/sdl1day4">Day 4: Functions & Modules</Link>
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Learn about defining functions, using built-in modules, and creating custom modules
              </p>
            </div>

            {/* day 5 */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                <Link to="/sdl1day5">Day 5: Object-Oriented Programming (OOP)</Link>
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Introduction to classes, objects, inheritance, and polymorphism'Understanding classes, objects, inheritance, and encapsulation in Python
              </p>
            </div>
                {/* Add the rest of the days here */}
              </div>
            )}

            {openWeek === 2 && (
              <div className="space-y-6">
                {/* Example Content for Week 2 */}
                <div className="bg-purple-50 shadow-lg rounded-lg p-6 md:p-8">
                  <h3 className="text-xl font-bold text-center text-purple-700 mb-4 underline">
                    <Link to="/sdl1day6">Day 6: Object Inheritance in python</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Talk of inheritance,composition,subclass,superclass,child,parent,super() and decorators  in Python
                  </p>
                </div>
                {/* day 7 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/sdl1day7">Day 7: Regular expressions</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Learn about the regex basics and do a practical test
                  </p>
                </div>

                {/* day 8 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/sdl1day8">Day 8: Working with SQLite </Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Setting up databases, sqlite data types,table relations and performing CRUD operations using SQLite and how to work with it in Python
                  </p>
                </div>

                {/* day 9 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/sdl1day9">Day 9: object relational mapping(ORM)</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Get in depth knowledge about ORM and how to use it in Python
                  </p>
                </div>

                {/* day 10 */}
                <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                    <Link to="/sdl1day10">Day 10: Using sqlalchemy</Link>
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    Introduction to sqlalchemy, perfroming CRUD with sqlalchemy      
                  </p>
                </div>
              </div>
            )}

            {openWeek === 3 && (
                <div className="space-y-6">
                    {/* day 11 */}
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                            <Link to="/sdl1day11">Day 11: Sqlalchemy relationships</Link>
                        </h3>
                        <p className="text-gray-800 leading-relaxed">
                            Learn about the different types of relationships in sqlalchemy and how they work.
                        </p>
                    </div>
                    {/* day 12 */}
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold text-center text-indigo-700 mb-4 underline">
                            <Link to="/sdl1day12">Day 12: Data structures & Algorithims</Link>
                        </h3>
                        <p className="text-gray-800 leading-relaxed">
                            Learn about data structures and algorithms in Python
                        </p>
                    </div>
                    {/* day 13 */}
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                        <h3 className="text-xl font-bold text-center text-red-700 mb-4 underline">
                            <Link to="/sdl1day12">Day 13: Lesson 1 Project</Link>
                        </h3>
                        <p className="text-gray-800 leading-relaxed">
                            Put you knowledge to the test by building a project
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

export default Leson1