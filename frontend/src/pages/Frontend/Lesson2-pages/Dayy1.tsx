import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCode,
  FaLaptopCode,
  FaList,
  FaTable,
  FaLink,
  FaEdit,
  FaCheckCircle,
  FaBookOpen,
  FaRocket,
} from "react-icons/fa";

const Dayy1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Introduction to JavaScript</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Welcome to Day 1 of Morgan Technical Training’s frontend development course! Today, we kick off with JavaScript (JS), a versatile and powerful programming language that brings interactivity to the web. Alongside HTML and CSS, JavaScript forms the backbone of modern web development, enabling dynamic content, user interactions, animations, and even full-fledged applications.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            In this lesson, you’ll learn JavaScript’s fundamentals—its purpose, syntax, key features, and how it integrates with HTML. We’ll also cover setting up your environment and submitting your work via GitHub and Morgan-LMS, mirroring professional workflows. Let’s dive into the world of programming!
          </p>

          {/* Why Learn JavaScript? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Why Learn JavaScript?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              JavaScript is a must-know for web developers, offering unparalleled flexibility and power. Here’s why it’s essential:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Interactivity:</strong> Adds dynamic features like form validation, animations, and real-time updates to websites.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Versatility:</strong> Runs in browsers and on servers (via Node.js), making it a full-stack tool.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Community & Ecosystem:</strong> Supported by a vast ecosystem of libraries (e.g., React, Vue) and a thriving developer community.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Career Demand:</strong> A core skill for frontend, backend, and full-stack roles across industries.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              At Morgan Technical Training, you’ll use JavaScript to build projects, submitting them to GitHub for review via Morgan-LMS. This hands-on approach prepares you for real-world coding challenges.
            </p>
          </div>

          {/* What is JavaScript? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              What is JavaScript?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              JavaScript is a high-level, interpreted scripting language created by Brendan Eich in 1995. Initially designed to add interactivity to static HTML pages in Netscape Navigator, it has since evolved into a cornerstone of the web. Unlike HTML (structure) and CSS (style), JavaScript handles logic and behavior, executing directly in the browser or on servers with Node.js.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Modern JavaScript (ES6+) includes advanced features like arrow functions, promises, and modules, making it both powerful and approachable. It’s event-driven, asynchronous, and object-oriented, enabling everything from simple scripts to complex applications like Google Maps or Netflix.
            </p>
          </div>

          {/* Setting up a JavaScript Environment */}
          <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
    <FaEdit className="mr-2 text-indigo-600 text-2xl" />
    Setting Up Your JavaScript Environment
  </h2>
  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
    To start coding in JavaScript, you’ll need a few essential tools. Here’s a step-by-step guide to get you set up:
  </p>
  <ul className="list-none text-gray-700 text-sm sm:text-base space-y-4">
    <li className="flex items-start bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div>
        <strong className="font-medium text-gray-800">Code Editor:</strong>{" "}
        <span>
          Choose a powerful editor like{" "}
          <span className="text-indigo-600 font-semibold">Visual Studio Code (VS Code)</span>,{" "}
          <span className="text-indigo-600 font-semibold">Sublime Text</span>, or{" "}
          <span className="text-indigo-600 font-semibold">WebStorm</span> to write and manage your code efficiently.
        </span>
      </div>
    </li>
    <li className="flex items-start bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div>
        <strong className="font-medium text-gray-800">Browser:</strong>{" "}
        <span>
          Use modern browsers like{" "}
          <span className="text-indigo-600 font-semibold">Chrome</span>,{" "}
          <span className="text-indigo-600 font-semibold">Firefox</span>, or{" "}
          <span className="text-indigo-600 font-semibold">Edge</span> with DevTools (e.g.,{" "}
          <code className="bg-gray-200 px-1 py-0.5 rounded text-indigo-700">Ctrl + Shift + J</code> in Chrome) to run and debug JavaScript directly in the console.
        </span>
      </div>
    </li>
    <li className="flex items-start bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div>
        <strong className="font-medium text-gray-800">Node.js (Optional):</strong>{" "}
        <span>
          Install{" "}
          <span className="text-indigo-600 font-semibold">Node.js</span> to run JavaScript outside the browser—perfect for server-side projects or advanced development later on.
        </span>
      </div>
    </li>
  </ul>
  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-6 italic">
    No setup yet? No problem! Start experimenting right away in your browser’s console—no tools required!
  </p>
</div>

          {/* Linking JavaScript to HTML */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaLink className="mr-2 text-indigo-600" />
              Linking JavaScript to HTML
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              JavaScript integrates with HTML in two main ways: internal scripts within <code>&lt;script&gt;</code> tags or external files linked via <code>src</code>. Here’s how:
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Internal JavaScript</h3>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mb-4">
              {`<script>
  console.log("Hello, World!");
</script>`}
            </pre>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">2. External JavaScript</h3>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mb-4">
              {`<script src="script.js"></script>`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              External files (e.g., <code>script.js</code>) keep code organized:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`// script.js
console.log("Hello from script.js!");`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Place <code>&lt;script&gt;</code> tags before the closing <code>&lt;/body&gt;</code> tag or use <code>defer</code> to ensure HTML loads first.
            </p>
          </div>

          {/* JavaScript Variables */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Variables: var, let, and const
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Variables store data in JavaScript. There are three declarations:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong><code>var</code>:</strong> Function-scoped, can be redeclared (older style, less preferred).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong><code>let</code>:</strong> Block-scoped, reassignable, modern standard.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong><code>const</code>:</strong> Block-scoped, constant value (cannot be reassigned).
              </li>
            </ul>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-4">
              {`var name = "Alice"; // Old way
let age = 25;        // Reassignable
const country = "USA"; // Fixed value`}
            </pre>
          </div>

          {/* JavaScript Data Types */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaList className="mr-2 text-indigo-600" />
              JavaScript Data Types
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              JavaScript supports various data types for storing and manipulating data:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>String:</strong> Text, e.g., <code>"Hello"</code>.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Number:</strong> Numeric values, e.g., <code>42</code>.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Boolean:</strong> True/false, e.g., <code>true</code>.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Null/Undefined:</strong> Absence of value or unassigned variables.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Object:</strong> Key-value pairs, e.g., <code>{'{ "name": "John" }'}</code>.
              </li>
            </ul>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-4">
              {`let person = {
  name: "John",
  age: 30
};`}
            </pre>
          </div>

          {/* Basic Console Operations */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Basic Console Operations
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Start interacting with JavaScript using these browser methods:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong><code>console.log()</code>:</strong> Outputs messages to the console.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong><code>alert()</code>:</strong> Shows a pop-up message.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong><code>prompt()</code>:</strong> Requests user input.
              </li>
            </ul>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-4">
              {`console.log("Hello, Console!");
alert("Welcome to JavaScript!");
let userInput = prompt("Enter your name:");`}
            </pre>
          </div>

          {/* JavaScript Best Practices */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-indigo-600" />
              JavaScript Best Practices
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Write clean, effective JavaScript with these tips:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Use <code>let</code>/<code>const</code>:</strong> Avoid <code>var</code> for better scoping.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Debug Often:</strong> Use <code>console.log()</code> or DevTools to test code.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>External Files:</strong> Keep JS separate from HTML for maintainability.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Comment Code:</strong> Add notes (e.g., <code>// This logs a message</code>) for clarity.
              </li>
            </ul>
          </div>

          {/* Practice Exercises */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practice Exercises
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply what you’ve learned with these tasks. Submit your work to GitHub and share the link via Morgan-LMS:
            </p>
            <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Create an HTML page with a button that uses <code>alert()</code> to say "Hello, World!".
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                Build a script using <code>prompt()</code> to ask for a name and log it to the console.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Write a page with an unordered list of your favorite foods, styled with external JS to log the list when clicked.
              </li>
              <li className="flex items-start">
                <FaTable className="mr-2 mt-1 text-indigo-600" />
                Create a table of 3 students’ names and ages, using JS to populate it dynamically.
              </li>
            </ol>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Resources for Further Learning
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Deepen your JavaScript skills with these resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  MDN Web Docs: JavaScript
                </a>
                — Authoritative reference with examples.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.w3schools.com/js/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  W3Schools: JavaScript Tutorial
                </a>
                — Beginner-friendly lessons.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://javascript.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  JavaScript.info
                </a>
                — In-depth modern tutorial.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 italic text-center">
              JavaScript is your gateway to interactive web development. Keep practicing, experimenting, and building—every line of code is a step toward mastery. You’ve got this! 🚀
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dayy1;