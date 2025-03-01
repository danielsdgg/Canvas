import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCode,
  FaLaptopCode,
  FaList,
  FaLink,
  FaEdit,
  FaCheckCircle,
  FaLightbulb,
  FaRocket
} from "react-icons/fa";

const Dayy10: React.FC = () => {
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

        {/* Title */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center justify-center">
          <FaLaptopCode className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">
            Day 10: Introduction to ES6+ Features & JavaScript Best Practices
          </h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to ES6+ Features & JavaScript Best Practices
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              ES6 (ECMAScript 2015) revolutionized JavaScript by introducing powerful features that enhance code readability, maintainability, and performance. These additions—followed by further ES6+ updates—bring modern programming paradigms to JavaScript, making it a more robust language for web development.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Alongside these features, adopting best practices ensures your code is clean, efficient, and scalable. This lesson prepares you for advanced frameworks like React by solidifying your JavaScript foundation with modern techniques and principles.
            </p>
          </div>

          {/* Why ES6 is Important */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCheckCircle className="mr-2 text-indigo-600" />
              Why ES6 is Important
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Enhances code readability and maintainability with improved syntax (e.g., arrow functions, template literals).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Introduces modularity using <b>import/export</b> for scalable, organized applications.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Improves asynchronous operations with <b>Promises</b> and <b>async/await</b>, critical for API calls.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Optimizes memory and execution time with modern looping (<b>map</b>, <b>filter</b>) over traditional <b>for</b> loops.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Supports object-oriented programming with <b>classes</b>, aligning JavaScript with other languages.
              </li>
            </ul>
          </div>

          {/* Key ES6+ Features */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaList className="mr-2 text-indigo-600" />
              Key ES6+ Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <b>let & const:</b> Block-scoped variables replacing <code>var</code> for safer scope management.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <b>Arrow Functions:</b> Concise syntax and lexical <i>this</i> binding, simplifying callbacks.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <b>Template Literals:</b> Multi-line strings and embedded expressions using backticks for cleaner code.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <b>Destructuring:</b> Simplifies extracting values from arrays and objects, reducing boilerplate.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <b>Spread & Rest Operators:</b> Enhances array/object manipulation and function parameters.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <b>ES6 Modules:</b> Enables modular programming with <b>import/export</b> for better code organization.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <b>Promises & Async/Await:</b> Efficient handling of asynchronous operations, replacing callbacks.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <b>Classes & Inheritance:</b> Introduces OOP-style programming with cleaner syntax.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <b>Default Parameters:</b> Simplifies function definitions with preset argument values.
              </li>
            </ul>
          </div>

          {/* JavaScript Best Practices */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCheckCircle className="mr-2 text-indigo-600" />
              JavaScript Best Practices
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Use <b>const</b> and <b>let</b> instead of <b>var</b> to prevent scope-related issues like hoisting.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Write modular code using <b>ES6 modules</b> for better maintainability and reusability.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Use <b>arrow functions</b> for concise, predictable behavior in callbacks and event handlers.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Utilize <b>template literals</b> instead of string concatenation for readability.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Apply <b>destructuring</b> to extract values efficiently from objects and arrays.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Optimize loops with <b>map</b>, <b>filter</b>, and <b>reduce</b> over traditional <b>for</b> loops for functional clarity.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Handle errors gracefully using <b>try/catch</b> in asynchronous functions for robustness.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Follow consistent naming conventions (camelCase for variables, PascalCase for classes) for clarity.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Write readable code with meaningful variable/function names to enhance collaboration.
              </li>
            </ul>
          </div>

          {/* ES6+ Features Examples */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              1. ES6+ Features Examples
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">a) let & const</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  In ES6, <code>let</code> and <code>const</code> replace <code>var</code>, offering block scoping and immutability to prevent accidental redeclarations.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// let: block-scoped variable
let name = "John";
if (true) {
  let name = "Doe"; // Different scope
  console.log(name); // "Doe"
}
console.log(name); // "John"

// const: block-scoped constant
const age = 30;
age = 31; // Error: Cannot reassign`}
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">b) Arrow Functions</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Arrow functions provide concise syntax and lexical <code>this</code> binding, ideal for event handlers and callbacks.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// Regular function
const obj = {
  name: "Alice",
  sayHello: function() { return "Hello " + this.name; }
};

// Arrow function
const obj2 = {
  name: "Bob",
  sayHello: () => "Hello " + this.name // 'this' from outer scope
};
console.log(obj.sayHello()); // "Hello Alice"
console.log(obj2.sayHello()); // "Hello undefined"`}
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">c) Template Literals</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Template literals simplify string creation with backticks and embedded expressions.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const name = "Alice";
const greeting = \`Hello, \${name}! How are you?\`;
console.log(greeting); // "Hello, Alice! How are you?"`}
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">d) Destructuring</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Destructuring extracts values from objects and arrays efficiently, reducing code verbosity.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const person = { firstName: "Jane", age: 25 };
const { firstName, age } = person;
console.log(\`Name: \${firstName}, Age: \${age}\`);

const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a, b); // 1, 2`}
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">e) Spread & Rest Operators</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Spread expands arrays/objects; Rest collects arguments into an array—both streamline data handling.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// Spread
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr); // [1, 2, 3, 4, 5]

// Rest
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4)); // 10`}
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">f) Promises & Async/Await</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Promises and async/await handle asynchronous operations, replacing nested callbacks with cleaner code.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// Promise
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await
const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};
fetchData();`}
                </pre>
              </div>
            </div>
          </div>

          {/* JavaScript Best Practices Examples */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              2. JavaScript Best Practices Examples
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">a) Use Strict Mode</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Strict mode enforces stricter parsing and error handling, catching common mistakes.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`"use strict";
x = 3.14; // Error: x is not declared
let x = 3.14; // Works fine`}
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">b) Keep Code DRY</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  DRY (Don't Repeat Yourself) reduces redundancy by reusing functions or modules.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// Bad
console.log("Hello, John");
console.log("Hello, Jane");

// Good
const greet = (name) => console.log(\`Hello, \${name}\`);
greet("John");
greet("Jane");`}
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">c) Use Meaningful Variable Names</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Descriptive names improve code readability and intent.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// Bad
let x = 5;

// Good
let userAge = 5;`}
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">d) Use Modular Code</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Break code into reusable modules or functions for maintainability.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// helpers.js
export const add = (a, b) => a + b;

// main.js
import { add } from './helpers.js';
console.log(add(2, 3)); // 5`}
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">e) Handle Errors Gracefully</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Use <code>try...catch</code> to manage errors in async operations or risky code.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`try {
  let result = someUndefinedFunction();
} catch (error) {
  console.error("An error occurred:", error.message);
}`}
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">f) Optimize Performance</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Use efficient methods like <code>forEach</code> or avoid unnecessary DOM manipulations.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// Less efficient
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// More efficient
arr.forEach(item => console.log(item));`}
                </pre>
              </div>
            </div>
          </div>

          {/* Conclusion & Next Steps */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCheckCircle className="mr-2 text-indigo-600" />
              Conclusion & Next Steps
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Congratulations on completing your introduction to ES6+ and JavaScript best practices! 🎉 JavaScript is one of the most powerful and widely-used programming languages today, and mastering its modern features will set you up for success in web development.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              So far, you’ve learned about:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Modern JavaScript syntax including <b>let</b> & <b>const</b>, arrow functions, and template literals.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Efficient data handling using <b>destructuring</b>, <b>spread/rest operators</b>, and ES6 modules.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                How to write clean, modular, and maintainable JavaScript code using best practices.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Handling asynchronous tasks effectively with <b>Promises</b> and <b>async/await</b>.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Understanding object-oriented programming with ES6 <b>classes</b> and <b>inheritance</b>.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              With these skills, you are now ready to take the next big step: learning <b>React.js</b>, one of the most popular JavaScript libraries for building modern user interfaces.
            </p>
          </div>

          {/* Preparing for React.js */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Preparing for React.js
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              React is built on JavaScript, so having a strong foundation in ES6+ will help you understand React concepts more easily. Before diving into React, ensure you’re comfortable with:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <b>ES6 Modules:</b> React heavily relies on <b>import/export</b> for component-based development.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <b>Arrow Functions:</b> Used frequently in JSX syntax and component functions.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <b>Destructuring:</b> Helps in managing component props and state effectively.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <b>Spread Operator:</b> Useful when updating React state immutably.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <b>Async/Await & Promises:</b> Essential for handling API requests in React.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <b>Understanding Closures & Callbacks:</b> Important for event handling and functional components.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              If any of these concepts feel unfamiliar, take some time to revisit them before starting React. Mastering these will make your React learning journey smoother and more enjoyable!
            </p>
          </div>

          {/* Resources for Further Study */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaLink className="mr-2 text-indigo-600" />
              Resources for Further Study
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              JavaScript is vast, and continuous learning is key to becoming proficient. Here are some recommended resources to deepen your understanding:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <b>MDN Web Docs:</b>{" "}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  className="text-indigo-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JavaScript Guide
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <b>ES6 Features:</b>{" "}
                <a
                  href="https://es6.io/"
                  className="text-indigo-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ES6 for Everyone by Wes Bos
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <b>JavaScript Info:</b>{" "}
                <a
                  href="https://javascript.info/"
                  className="text-indigo-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A comprehensive JavaScript tutorial
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <b>You Don't Know JS:</b>{" "}
                <a
                  href="https://github.com/getify/You-Dont-Know-JS"
                  className="text-indigo-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Free book series on JavaScript deep dives
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <b>Frontend Masters & Udemy Courses:</b> Structured JavaScript & React courses.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <b>LeetCode & CodeWars:</b> Improve problem-solving with JavaScript challenges.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Commit to coding every day, work on small projects, and challenge yourself with real-world applications. Learning by doing is the best way to solidify your knowledge.
            </p>
          </div>

          {/* Final Words of Encouragement */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaLightbulb className="mr-2 text-indigo-600" />
              Final Words of Encouragement
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Mastering JavaScript is a journey, and every expert started as a beginner. Don’t be discouraged if things seem difficult at first—keep practicing, stay curious, and never stop exploring new concepts.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              The best way to improve is by building real projects. Start small, experiment with what you’ve learned, and challenge yourself to create something new.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              You are now well on your way to becoming a skilled JavaScript developer. Keep pushing forward, and get ready for React.js—your journey is just beginning! 🚀
            </p>
          </div>

          {/* Practical Exercises */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercises: Apply Your Knowledge
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              The best way to solidify your understanding of JavaScript (ES6+), HTML, and CSS is through practice. Below are three practical exercises designed to test your knowledge and help you build confidence.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-indigo-700 mb-2">Exercise 1: Build a Responsive Webpage</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Create a simple webpage with <b>HTML & CSS</b> that displays a personal profile.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li className="flex items-start">
                    <FaCode className="mr-2 mt-1 text-indigo-600" />
                    Use <b>semantic HTML elements</b> like <b>header</b>, <b>section</b>, <b>article</b>, and <b>footer</b>.
                  </li>
                  <li className="flex items-start">
                    <FaCode className="mr-2 mt-1 text-indigo-600" />
                    Add a <b>profile image</b>, a short bio, and contact information.
                  </li>
                  <li className="flex items-start">
                    <FaCode className="mr-2 mt-1 text-indigo-600" />
                    Use <b>CSS Flexbox or Grid</b> to ensure a <b>responsive layout</b>.
                  </li>
                  <li className="flex items-start">
                    <FaCode className="mr-2 mt-1 text-indigo-600" />
                    Ensure the page is <b>mobile-friendly</b> with proper styling.
                  </li>
                </ul>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2 italic">
                  *Bonus:* Add a simple <b>hover effect</b> to the profile image using CSS transitions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-indigo-700 mb-2">Exercise 2: Create an Interactive JavaScript Quiz</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Using <b>JavaScript (ES6+)</b>, build a <b>multiple-choice quiz</b> with the following features:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li className="flex items-start">
                    <FaCode className="mr-2 mt-1 text-indigo-600" />
                    At least <b>three questions</b>, each with <b>four answer choices</b>.
                  </li>
                  <li className="flex items-start">
                    <FaCode className="mr-2 mt-1 text-indigo-600" />
                    Use <b>event listeners</b> to capture the user’s answer.
                  </li>
                  <li className="flex items-start">
                    <FaCode className="mr-2 mt-1 text-indigo-600" />
                    Provide <b>immediate feedback</b> (e.g., "Correct!" or "Try Again").
                  </li>
                  <li className="flex items-start">
                    <FaCode className="mr-2 mt-1 text-indigo-600" />
                    Use <b>JavaScript functions, arrow functions, and template literals</b>.
                  </li>
                </ul>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2 italic">
                  *Bonus:* Store the score in <b>localStorage</b> and display it at the end.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-indigo-700 mb-2">Exercise 3: Build a JavaScript To-Do List</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Create a simple <b>To-Do List app</b> where users can <b>add, delete, and mark tasks as completed</b>.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li className="flex items-start">
                    <FaCode className="mr-2 mt-1 text-indigo-600" />
                    Use <b>HTML & CSS</b> to design a structured task list.
                  </li>
                  <li className="flex items-start">
                    <FaCode className="mr-2 mt-1 text-indigo-600" />
                    Use <b>JavaScript (ES6)</b> to add dynamic functionality:
                  </li>
                  <ul className="list-disc list-inside ml-6 text-gray-700 text-sm sm:text-base space-y-2">
                    <li className="flex items-start">
                      <FaCode className="mr-2 mt-1 text-indigo-600" />
                      Allow users to <b>add new tasks</b> using an input field.
                    </li>
                    <li className="flex items-start">
                      <FaCode className="mr-2 mt-1 text-indigo-600" />
                      Provide a <b>button to remove tasks</b> when completed.
                    </li>
                    <li className="flex items-start">
                      <FaCode className="mr-2 mt-1 text-indigo-600" />
                      Use <b>array methods (map, filter)</b> to manage tasks efficiently.
                    </li>
                    <li className="flex items-start">
                      <FaCode className="mr-2 mt-1 text-indigo-600" />
                      Save the tasks in <b>localStorage</b>, so they persist after refreshing.
                    </li>
                  </ul>
                </ul>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2 italic">
                  *Bonus:* Implement a <b>dark mode</b> switch using JavaScript and CSS.
                </p>
              </div>

              <div className="bg-indigo-100 p-4 rounded-lg">
                <p className="text-gray-700 font-semibold flex items-center">
                  <FaCheckCircle className="mr-2 text-indigo-600" />
                  Challenge yourself! Try completing all three exercises. Share your projects with classmates or online for feedback!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dayy10;