import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaLaptopCode, FaTerminal, FaGitAlt, FaCode, FaPaintBrush, FaJsSquare, FaReact, FaRocket, FaBookOpen, FaProjectDiagram } from "react-icons/fa";

const Day4: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Course Topics */}
      <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-8 mx-auto max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        {/* Section Heading */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaLaptopCode className="mr-3 text-2xl" />
          <h2 className="text-2xl sm:text-3xl font-semibold">Topics Covered in This Course</h2>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Welcome to the frontend development course at Morgan Technical Training! This course is designed to take you from a beginner to a skilled frontend developer through a carefully crafted curriculum. You’ll master essential tools, languages, and frameworks, building a strong foundation for creating modern, responsive web applications. Below is an overview of the key topics you’ll explore over the coming weeks.
          </p>

          {/* 1. Setting Up Visual Studio Code */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaLaptopCode className="mr-2 text-indigo-600" />
              1. Setting Up Visual Studio Code
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Visual Studio Code (VS Code) is a lightweight, extensible code editor that’s a favorite among developers for its versatility. You’ll learn how to set it up and optimize it for frontend development:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li>How to download and install VS Code on Windows, macOS, and Linux.</li>
              <li>Installing key extensions like Prettier, ESLint, and Live Server for JavaScript, React, and productivity.</li>
              <li>Using the integrated terminal to run CLI commands within your editor.</li>
              <li>Mastering debugging tools, settings customization, and shortcuts (e.g., Ctrl + D, Alt + Arrow) to streamline coding.</li>
            </ul>
          </div>

          {/* 2. Command Line Interfaces (CLI) */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaTerminal className="mr-2 text-indigo-600" />
              2. Command Line Interfaces (CLI)
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              The CLI empowers you to interact with your system efficiently using text commands. This skill is vital for managing projects and tools in frontend development:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li>Basic navigation commands: <code className="bg-gray-200 px-2 py-1 rounded">cd</code>, <code className="bg-gray-200 px-2 py-1 rounded">ls</code> (or <code className="bg-gray-200 px-2 py-1 rounded">dir</code>), <code className="bg-gray-200 px-2 py-1 rounded">/pwd</code>, <code className="bg-gray-200 px-2 py-1 rounded">mkdir</code>.</li>
              <li>File operations: creating (<code className="bg-gray-200 px-2 py-1 rounded">touch</code>), moving (<code className="bg-gray-200 px-2 py-1 rounded">mv</code>), renaming, and deleting (<code className="bg-gray-200 px-2 py-1 rounded">rm</code>).</li>
              <li>Executing scripts and automating repetitive tasks with batch or shell scripts.</li>
              <li>Using package managers like <code className="bg-gray-200 px-2 py-1 rounded">npm</code> and <code className="bg-gray-200 px-2 py-1 rounded">yarn</code> to install dependencies.</li>
            </ul>
          </div>

          {/* 3. Version Control with Git */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaGitAlt className="mr-2 text-indigo-600" />
              3. Version Control with Git
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Git is the industry-standard version control system for tracking code changes and collaborating with teams. You’ll gain hands-on experience with:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li>Installing and configuring Git on your system with <code className="bg-gray-200 px-2 py-1 rounded">git config</code>.</li>
              <li>Initializing repositories (<code className="bg-gray-200 px-2 py-1 rounded">git init</code>) and making commits (<code className="bg-gray-200 px-2 py-1 rounded">git commit</code>).</li>
              <li>Branching (<code className="bg-gray-200 px-2 py-1 rounded">git branch</code>), merging (<code className="bg-gray-200 px-2 py-1 rounded">git merge</code>), and resolving merge conflicts.</li>
              <li>Collaborating via remote repositories on platforms like GitHub with <code className="bg-gray-200 px-2 py-1 rounded">git push</code> and <code className="bg-gray-200 px-2 py-1 rounded">git pull</code>.</li>
            </ul>
          </div>

          {/* 4. HTML Basics */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              4. HTML Basics
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              HTML (HyperText Markup Language) is the backbone of web pages, providing structure and content. You’ll master:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li>Understanding HTML tags (<code className="bg-gray-200 px-2 py-1 rounded">&lt;div&gt;</code>), elements, and attributes (e.g., <code className="bg-gray-200 px-2 py-1 rounded">id</code>, <code className="bg-gray-200 px-2 py-1 rounded">class</code>).</li>
              <li>Writing semantic HTML (<code className="bg-gray-200 px-2 py-1 rounded">&lt;header&gt;</code>, <code className="bg-gray-200 px-2 py-1 rounded">&lt;article&gt;</code>) for accessibility and SEO.</li>
              <li>Building forms (<code className="bg-gray-200 px-2 py-1 rounded">&lt;input&gt;</code>), tables, lists, and multimedia elements (<code className="bg-gray-200 px-2 py-1 rounded">&lt;video&gt;</code>).</li>
              <li>Best practices for organizing HTML files and linking resources (<code className="bg-gray-200 px-2 py-1 rounded">&lt;link&gt;</code>, <code className="bg-gray-200 px-2 py-1 rounded">&lt;script&gt;</code>).</li>
            </ul>
          </div>

          {/* 5. CSS for Styling */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaPaintBrush className="mr-2 text-indigo-600" />
              5. CSS for Styling
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              CSS (Cascading Style Sheets) brings visual design to your HTML structure. You’ll explore:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li>CSS selectors (e.g., <code className="bg-gray-200 px-2 py-1 rounded">.class</code>), properties (e.g., <code className="bg-gray-200 px-2 py-1 rounded">color</code>), and specificity rules.</li>
              <li>Responsive design with Flexbox (<code className="bg-gray-200 px-2 py-1 rounded">display: flex</code>) and Grid (<code className="bg-gray-200 px-2 py-1 rounded">display: grid</code>).</li>
              <li>Creating animations (<code className="bg-gray-200 px-2 py-1 rounded">@keyframes</code>) and transitions (<code className="bg-gray-200 px-2 py-1 rounded">transition</code>) for interactivity.</li>
              <li>Using media queries (<code className="bg-gray-200 px-2 py-1 rounded">@media</code>) for mobile-first design.</li>
            </ul>
          </div>

          {/* 6. JavaScript Fundamentals */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaJsSquare className="mr-2 text-indigo-600" />
              6. JavaScript Fundamentals
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              JavaScript (JS) adds interactivity and logic to your web applications. You’ll dive into:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li>Declaring variables with <code className="bg-gray-200 px-2 py-1 rounded">var</code>, <code className="bg-gray-200 px-2 py-1 rounded">let</code>, and <code className="bg-gray-200 px-2 py-1 rounded">const</code>, understanding scope.</li>
              <li>Using loops (<code className="bg-gray-200 px-2 py-1 rounded">for</code>), conditionals (<code className="bg-gray-200 px-2 py-1 rounded">if</code>), and functions.</li>
              <li>Manipulating the DOM with methods like <code className="bg-gray-200 px-2 py-1 rounded">querySelector</code> and <code className="bg-gray-200 px-2 py-1 rounded">getElementById</code>.</li>
              <li>Adding event listeners (<code className="bg-gray-200 px-2 py-1 rounded">addEventListener</code>) and handling asynchronous code with Promises and <code className="bg-gray-200 px-2 py-1 rounded">async/await</code>.</li>
            </ul>
          </div>

          {/* 7. Introduction to React */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaReact className="mr-2 text-indigo-600" />
              7. Introduction to React
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              React is a powerful JavaScript library for building dynamic user interfaces. You’ll learn the essentials to start creating React apps:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li>Understanding JSX syntax and the virtual DOM for efficient rendering.</li>
              <li>Creating reusable functional components with props.</li>
              <li>Managing state with hooks like <code className="bg-gray-200 px-2 py-1 rounded">useState</code> and effects with <code className="bg-gray-200 px-2 py-1 rounded">useEffect</code>.</li>
              <li>Implementing navigation with React Router (<code className="bg-gray-200 px-2 py-1 rounded">BrowserRouter</code>, <code className="bg-gray-200 px-2 py-1 rounded">Route</code>).</li>
            </ul>
          </div>

          {/* Become a Skilled Frontend Developer */}
          <div className="bg-indigo-100 p-4 sm:p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Become a Skilled Frontend Developer
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Frontend development is a rewarding field that blends creativity and technical expertise. At Morgan Technical Training, this course equips you with the skills to succeed:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2 mb-4">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Write clean, maintainable code following best practices.
              </li>
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                Master fundamentals (HTML, CSS, JS) before advancing to frameworks like React.
              </li>
              <li className="flex items-start">
                <FaProjectDiagram className="mr-2 mt-1 text-indigo-600" />
                Build real-world projects—like a portfolio or interactive app—to solidify your skills.
              </li>
              <li className="flex items-start">
                <FaRocket className="mr-2 mt-1 text-indigo-600" />
                Stay updated with industry trends (e.g., CSS frameworks, ES6+) and tools.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-semibold">
              Consistency is key! Practice daily, explore beyond the curriculum, and tackle challenges head-on. By the end of this course, you’ll be ready to create professional-grade web applications and take on more advanced topics like TypeScript and state management libraries.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Day4;