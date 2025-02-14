import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaLightbulb } from 'react-icons/fa';

const Dayy10: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        {/* Title */}
        <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
          Day 10: Introduction to ES6+ Features & JavaScript Best Practices
        </h1>

        <section className="mb-6">
    <h2 className="text-xl font-semibold text-gray-700 underline">Introduction to ES6+ Features & JavaScript Best Practices</h2>
    <p className="text-gray-600 mt-2">
        ES6 (ECMAScript 2015) introduced a variety of features that make JavaScript more powerful, readable, and maintainable. 
        These enhancements simplify code structure, improve performance, and align JavaScript with modern development practices.
    </p>
</section>

<section className="mb-6">
    <h2 className="text-xl font-semibold text-gray-700 uppercase">Why ES6 is Important?</h2>
    <ul className="list-disc ml-6 text-gray-600">
        <li>Enhances code readability and maintainability with improved syntax.</li>
        <li>Introduces modularity using <b>import/export</b> for scalable applications.</li>
        <li>Improves asynchronous operations with <b>Promises</b> and <b>async/await</b>.</li>
        <li>Optimizes memory and execution time with modern looping techniques.</li>
    </ul>
</section>

<section className="mb-6">
    <h2 className="text-xl font-semibold text-gray-700 underline mb-2 uppercase">Key ES6+ Features</h2>
    <ul className="list-disc ml-6 text-gray-600">
        <li><b>let & const:</b> Block-scoped variable declarations replacing var.</li>
        <li><b>Arrow Functions:</b> Concise syntax and lexical <i>this</i> binding.</li>
        <li><b>Template Literals:</b> Multi-line strings and embedded expressions using backticks.</li>
        <li><b>Destructuring:</b> Simplifies extracting values from arrays and objects.</li>
        <li><b>Spread & Rest Operators:</b> Enhances array and function parameter handling.</li>
        <li><b>ES6 Modules:</b> Enables modular programming with <b>import/export</b>.</li>
        <li><b>Promises & Async/Await:</b> Efficient handling of asynchronous operations.</li>
        <li><b>Classes & Inheritance:</b> Improves OOP-style programming in JavaScript.</li>
    </ul>
</section>

<section className="mb-6">
    <h2 className="text-xl font-semibold text-gray-700 underline mb-2 uppercase">JavaScript Best Practices</h2>
    <ul className="list-disc ml-6 text-gray-600">
        <li>Use <b>const</b> and <b>let</b> instead of <b>var</b> to prevent scope-related issues.</li>
        <li>Write modular code using <b>ES6 modules</b> for better maintainability.</li>
        <li>Use <b>arrow functions</b> for concise and predictable function behavior.</li>
        <li>Utilize <b>template literals</b> instead of string concatenation.</li>
        <li>Apply <b>destructuring</b> to extract values efficiently from objects and arrays.</li>
        <li>Optimize loops by preferring <b>map, filter, and reduce</b> over traditional loops.</li>
        <li>Handle errors gracefully using <b>try/catch</b> in asynchronous functions.</li>
        <li>Follow consistent naming conventions (camelCase for variables, PascalCase for classes).</li>
        <li>Write readable and maintainable code by using meaningful variable and function names.</li>
    </ul>
</section>


        {/* Content Section */}
        <div className="text-gray-700 leading-7">
          <h2 className="text-xl font-bold text-blue-700 mt-4">1. ES6+ Features</h2>
          
          <h3 className="text-lg font-semibold mt-3">a) let & const</h3>
          <p>In ES6, <code>let</code> and <code>const</code> were introduced to replace <code>var</code>, improving scoping and immutability.</p>
          <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto mt-2">
{`// let: block-scoped variable
let name = "John";
name = "Doe"; // Allowed

// const: block-scoped constant
const age = 30;
age = 31; // Error: Cannot reassign a constant variable`}
          </pre>
          
          <h3 className="text-lg font-semibold mt-3">b) Arrow Functions</h3>
          <p>Arrow functions provide a concise way to write functions and inherit <code>this</code> from their surrounding scope.</p>
          <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto mt-2">
{`// Regular function
function greet(name) {
  return "Hello " + name;
}

// Arrow function
const greet = (name) => "Hello " + name;`}
          </pre>
          
          <h3 className="text-lg font-semibold mt-3">c) Template Literals</h3>
          <p>Template literals allow for easier string interpolation.</p>
          <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto mt-2">
{`const name = "Alice";
console.log(\`Hello, my name is \${name}!\`);`}
          </pre>
          
          <h3 className="text-lg font-semibold mt-3">d) Destructuring</h3>
          <p>Destructuring simplifies extracting values from objects and arrays.</p>
          <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto mt-2">
{`const person = { firstName: "Jane", age: 25 };
const { firstName, age } = person;
console.log(firstName, age);`}
          </pre>
          
          <h3 className="text-lg font-semibold mt-3">e) Spread & Rest Operators</h3>
          <p>These operators make handling arrays and objects easier.</p>
          <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto mt-2">
{`const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // Spread operator

const sum = (...nums) => nums.reduce((a, b) => a + b, 0); // Rest operator`}
          </pre>
          
          <h3 className="text-lg font-semibold mt-3">f) Promises & Async/Await</h3>
          <p>Promises and async/await simplify asynchronous operations.</p>
          <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto mt-2">
{`// Using Promises
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data));

// Using async/await
const fetchData = async () => {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
};`}
          </pre>

          <h2 className="text-xl font-bold text-blue-700 mt-4">2. JavaScript Best Practices</h2>
          
          <h3 className="text-lg font-semibold mt-3">a) Use Strict Mode</h3>
          <p>Strict mode helps catch common JavaScript mistakes.</p>
          <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto mt-2">
{`"use strict";
var x = 3.14;
// Without strict mode, this is allowed
// With strict mode, it throws an error`}
          </pre>
          
          <h3 className="text-lg font-semibold mt-3">b) Keep Code DRY</h3>
          <p>DRY (Don't Repeat Yourself) principle helps maintain clean and reusable code.</p>
          
          <h3 className="text-lg font-semibold mt-3">c) Use Meaningful Variable Names</h3>
          <p>Use descriptive names for variables and functions for better readability.</p>
          
          <h3 className="text-lg font-semibold mt-3">d) Use Modular Code</h3>
          <p>Break code into reusable functions or components.</p>
          
          <h3 className="text-lg font-semibold mt-3">e) Handle Errors Gracefully</h3>
          <p>Use <code>try...catch</code> blocks to handle potential errors.</p>
          <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto mt-2">
{`try {
  let result = someFunction();
} catch (error) {
  console.error("An error occurred:", error);
}`}
          </pre>
          
          <h3 className="text-lg font-semibold mt-3">f) Optimize Performance</h3>
          <p>Avoid unnecessary re-renders and optimize loops to improve execution speed.</p>
        </div>
        <section className="mt-6">
    <h2 className="text-xl text-center uppercase bg-blue-200 py-2 font-semibold text-gray-700">🎯 Conclusion & Next Steps</h2>
    
    <p className="text-gray-600 mt-2">
        Congratulations on completing your introduction to ES6+ and JavaScript best practices! 🎉  
        JavaScript is one of the most powerful and widely-used programming languages today,  
        and mastering its modern features will set you up for success in web development.
    </p>

    <p className="text-gray-600 mt-4">
        So far, you’ve learned about:
    </p>
    
    <ul className="list-disc ml-6 text-gray-600 mt-2">
        <li>Modern JavaScript syntax including <b>let</b> & <b>const</b>, arrow functions, and template literals.</li>
        <li>Efficient data handling using <b>destructuring</b>, <b>spread/rest operators</b>, and ES6 modules.</li>
        <li>How to write clean, modular, and maintainable JavaScript code using best practices.</li>
        <li>Handling asynchronous tasks effectively with <b>Promises</b> and <b>async/await</b>.</li>
        <li>Understanding object-oriented programming with ES6 <b>classes</b> and <b>inheritance</b>.</li>
    </ul>

    <p className="text-gray-600 mt-4">
        With these skills, you are now ready to take the next big step:  
        learning <b>React.js</b>, one of the most popular JavaScript libraries for building modern user interfaces.
    </p>
</section>

<section className="mt-6 mb-6">
    <h2 className="text-xl font-semibold text-gray-700 text-center bg-blue-200 py-2">🔹 Preparing for React.js</h2>
    
    <p className="text-gray-600 mt-2">
        React is built on JavaScript, so having a strong foundation in ES6+ will help you understand React concepts more easily.  
        Before diving into React, make sure you are comfortable with:
    </p>

    <ul className="list-disc ml-6 text-gray-600 mt-2">
        <li><b>ES6 Modules:</b> React heavily relies on <b>import/export</b> for component-based development.</li>
        <li><b>Arrow Functions:</b> Used frequently in JSX syntax and component functions.</li>
        <li><b>Destructuring:</b> Helps in managing component props and state effectively.</li>
        <li><b>Spread Operator:</b> Useful when updating React state immutably.</li>
        <li><b>Async/Await & Promises:</b> Essential for handling API requests in React.</li>
        <li><b>Understanding Closures & Callbacks:</b> Important for event handling and functional components.</li>
    </ul>

    <p className="text-gray-600 mt-4">
        If any of these concepts feel unfamiliar, take some time to revisit them before starting React.  
        Mastering these will make your React learning journey smoother and more enjoyable!
    </p>
</section>

<section className="mb-6">
    <h2 className="text-xl font-semibold text-gray-700 text-center bg-blue-200 py-2">📖 Resources for Further Study</h2>

    <p className="text-gray-600 mt-2">
        JavaScript is vast, and continuous learning is key to becoming proficient.  
        Here are some recommended resources to deepen your understanding:
    </p>

    <ul className="list-disc ml-6 text-gray-600 mt-2">
        <li><b>MDN Web Docs:</b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="text-blue-600 hover:underline">JavaScript Guide</a></li>
        <li><b>ES6 Features:</b> <a href="https://es6.io/" className="text-blue-600 hover:underline">ES6 for Everyone by Wes Bos</a></li>
        <li><b>JavaScript Info:</b> <a href="https://javascript.info/" className="text-blue-600 hover:underline">A comprehensive JavaScript tutorial</a></li>
        <li><b>You Don't Know JS:</b> <a href="https://github.com/getify/You-Dont-Know-JS" className="text-blue-600 hover:underline">Free book series on JavaScript deep dives</a></li>
        <li><b>Frontend Masters & Udemy Courses:</b> Structured JavaScript & React courses.</li>
        <li><b>LeetCode & CodeWars:</b> Improve problem-solving with JavaScript challenges.</li>
    </ul>

    <p className="text-gray-600 mt-4">
        Commit to coding every day, work on small projects, and challenge yourself with real-world applications.  
        Learning by doing is the best way to solidify your knowledge.
    </p>
</section>

<section className="mb-6">
    <h2 className="text-xl font-semibold text-gray-700 flex items-center bg-blue-200 py-2">
        <FaLightbulb className="text-yellow-500 mr-2" />
        Final Words of Encouragement
    </h2>

    <p className="text-gray-600 mt-2">
        Mastering JavaScript is a journey, and every expert started as a beginner.  
        Don't be discouraged if things seem difficult at first—keep practicing,  
        stay curious, and never stop exploring new concepts.
    </p>

    <p className="text-gray-600 mt-4">
        The best way to improve is by building real projects. Start small,  
        experiment with what you’ve learned, and challenge yourself to create something new.
    </p>

    <p className="text-gray-600 mt-4">
        You are now well on your way to becoming a skilled JavaScript developer.  
        Keep pushing forward, and get ready for React.js—your journey is just beginning! 🚀
    </p>
</section>

<section className="mb-6">
    <h2 className="text-xl font-semibold text-gray-700 flex items-center bg-blue-200 py-2">
        📝 Practical Exercises: Apply Your Knowledge
    </h2>

    <p className="text-gray-600 mt-2">
        The best way to solidify your understanding of JavaScript (ES6+), HTML, and CSS is through practice.  
        Below are three practical exercises designed to test your knowledge and help you build confidence.
    </p>

    {/* Exercise 1: Build a Responsive Webpage */}
    <div className="mt-6">
        <h3 className="text-lg font-semibold text-blue-600">Exercise 1: Build a Responsive Webpage</h3>
        <p className="text-gray-600 mt-2">
            Create a simple webpage with **HTML & CSS** that displays a personal profile.
        </p>

        <ul className="list-disc ml-6 text-gray-600 mt-2">
            <li>Use **semantic HTML elements** like <b>header</b>, <b>section</b>, <b>article</b>, and <b>footer</b>.</li>
            <li>Add a **profile image**, a short bio, and contact information.</li>
            <li>Use **CSS Flexbox or Grid** to ensure a **responsive layout**.</li>
            <li>Ensure the page is **mobile-friendly** with proper styling.</li>
        </ul>

        <p className="text-gray-600 mt-2">
            *Bonus:* Add a simple **hover effect** to the profile image using CSS transitions.
        </p>
    </div>

    {/* Exercise 2: Interactive JavaScript Quiz */}
    <div className="mt-6">
        <h3 className="text-lg font-semibold text-blue-600">Exercise 2: Create an Interactive JavaScript Quiz</h3>
        <p className="text-gray-600 mt-2">
            Using **JavaScript (ES6+)**, build a **multiple-choice quiz** with the following features:
        </p>

        <ul className="list-disc ml-6 text-gray-600 mt-2">
            <li>At least **three questions**, each with **four answer choices**.</li>
            <li>Use **event listeners** to capture the user’s answer.</li>
            <li>Provide **immediate feedback** (e.g., "Correct!" or "Try Again").</li>
            <li>Use **JavaScript functions, arrow functions, and template literals**.</li>
        </ul>

        <p className="text-gray-600 mt-2">
            *Bonus:* Store the score in **localStorage** and display it at the end.
        </p>
    </div>

    {/* Exercise 3: JavaScript To-Do List */}
    <div className="mt-6">
        <h3 className="text-lg font-semibold text-blue-600">Exercise 3: Build a JavaScript To-Do List</h3>
        <p className="text-gray-600 mt-2">
            Create a simple **To-Do List app** where users can **add, delete, and mark tasks as completed**.
        </p>

        <ul className="list-disc ml-6 text-gray-600 mt-2">
            <li>Use **HTML & CSS** to design a structured task list.</li>
            <li>Use **JavaScript (ES6)** to add dynamic functionality:</li>
            <ul className="list-disc ml-8">
                <li>Allow users to **add new tasks** using an input field.</li>
                <li>Provide a **button to remove tasks** when completed.</li>
                <li>Use **array methods (map, filter)** to manage tasks efficiently.</li>
                <li>Save the tasks in **localStorage**, so they persist after refreshing.</li>
            </ul>
        </ul>

        <p className="text-gray-600 mt-2">
            *Bonus:* Implement a **dark mode** switch using JavaScript and CSS.
        </p>
    </div>

    {/* Encouragement */}
    <div className="mt-6 bg-blue-100 p-4 rounded-lg">
        <p className="text-gray-700 font-semibold">
            ✅ Challenge yourself! Try completing all three exercises. 
            Share your projects with classmates or online for feedback!
        </p>
    </div>
</section>


      </section>
    </>
  );
};

export default Dayy10;