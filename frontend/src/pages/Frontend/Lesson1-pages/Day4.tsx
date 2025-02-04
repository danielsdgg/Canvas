import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Day4: React.FC = () => {
    const navigate = useNavigate();
  return (
    <>
    {/* Course Topics */}
    <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaArrowLeft className="mr-2" />
            Back
        </button>
          <h2 className="text-3xl font-semibold bg-gray-800 text-white py-4 px-6 rounded-t-lg">
            Topics Covered in This Course
          </h2>
          <div className="space-y-6">
            {/* Visual Studio Code */}
            <div>
              <h3 className="text-2xl font-medium text-gray-500 mb-2">1. Setting Up Visual Studio Code</h3>
              <p className="text-gray-700 leading-relaxed">
                Visual Studio Code (VS Code) is a powerful, lightweight code editor that supports various programming languages. You’ll learn:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                <li>How to download and install VS Code on different operating systems</li>
                <li>Installing essential extensions for JavaScript, React, and other frameworks</li>
                <li>Using the integrated terminal for executing commands efficiently</li>
                <li>Debugging tools and keyboard shortcuts for improved productivity</li>
              </ul>
            </div>
            {/* CLI */}
            <div>
              <h3 className="text-2xl font-medium text-gray-500 mb-2">2. Command Line Interfaces (CLI)</h3>
              <p className="text-gray-700 leading-relaxed">
                The Command Line Interface (CLI) enables direct interaction with the computer’s operating system. You’ll learn:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                <li>Basic navigation commands: <code>cd</code>, <code>ls</code>, <code>pwd</code>, <code>mkdir</code></li>
                <li>File operations: creating, moving, renaming, and deleting files</li>
                <li>Executing scripts and automating tasks</li>
                <li>Package managers like <code>npm</code> and <code>yarn</code> for JavaScript projects</li>
              </ul>
            </div>
            {/* Git */}
            <div>
              <h3 className="text-2xl font-medium text-gray-500 mb-2">3. Version Control with Git</h3>
              <p className="text-gray-700 leading-relaxed">
                Git is an essential tool for tracking changes in code and collaborating with teams. You’ll learn:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                <li>Installing and configuring Git on your system</li>
                <li>Initializing repositories and making commits</li>
                <li>Branching, merging, and resolving conflicts</li>
                <li>Working with remote repositories using GitHub</li>
              </ul>
            </div>
            {/* HTML */}
            <div>
              <h3 className="text-2xl font-medium text-gray-500 mb-2">4. HTML Basics</h3>
              <p className="text-gray-700 leading-relaxed">
                HTML (HyperText Markup Language) structures web pages. You’ll learn:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                <li>Understanding HTML tags, elements, and attributes</li>
                <li>Building semantic HTML for accessibility</li>
                <li>Using forms, tables, lists, and multimedia elements</li>
              </ul>
            </div>
            {/* CSS */}
            <div>
              <h3 className="text-2xl font-medium text-gray-500 mb-2">5. CSS for Styling</h3>
              <p className="text-gray-700 leading-relaxed">
                CSS (Cascading Style Sheets) enhances the appearance of web pages. You’ll learn:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                <li>CSS selectors, properties, and specificity</li>
                <li>Responsive web design using Flexbox and Grid</li>
                <li>Creating animations and transitions for dynamic effects</li>
              </ul>
            </div>
            {/* JavaScript */}
            <div>
              <h3 className="text-2xl font-medium text-gray-500 mb-2">6. JavaScript Fundamentals</h3>
              <p className="text-gray-700 leading-relaxed">
                JavaScript (JS) adds interactivity and logic to web applications. You’ll learn:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                <li>Declaring variables using <code>var</code>, <code>let</code>, and <code>const</code></li>
                <li>Loops, conditionals, and functions</li>
                <li>Manipulating the DOM (Document Object Model)</li>
                <li>Event listeners and asynchronous programming (Promises & Async/Await)</li>
              </ul>
            </div>
            {/* React */}
            <div>
              <h3 className="text-2xl font-medium text-gray-500 mb-2">7. Introduction to React</h3>
              <p className="text-gray-700 leading-relaxed">
                React is a popular JavaScript library for building user interfaces. You’ll learn:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                <li>Understanding JSX and virtual DOM</li>
                <li>Creating and using functional components</li>
                <li>Managing state with hooks (<code>useState</code> & <code>useEffect</code>)</li>
                <li>Routing with React Router</li>
              </ul>
            </div>
          </div>
          {/* Additional Topics Section */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md mt-8">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Become a Skilled Frontend Developer</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Frontend development requires dedication and continuous learning. Ensure you master each topic covered in this course to build high-quality web applications. Focus on:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                            <li>Writing clean and maintainable code</li>
                            <li>Understanding the fundamentals before moving to advanced topics</li>
                            <li>Building real-world projects to apply what you learn</li>
                            <li>Keeping up with industry trends and best practices</li>
                        </ul>
                        <p className="text-gray-700 font-semibold mt-4">
                            Stay focused, practice consistently, and push yourself to improve every day. Success in frontend development comes with effort and persistence!
                        </p>
                    </div>
        </section>
    </>    
  )
}

export default Day4;
