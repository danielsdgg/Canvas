import React from 'react';
import SideNav from '../SideNav';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Lesson10 = () => {
  const navigate = useNavigate();

  return (
    <>
      <SideNav />
      <div className="flex-1 p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 md:ml-16 container">

        {/* Back Button */}
        <button onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
          <FaArrowLeft className="mr-2" />
          Back to Course
        </button>
        <h1 className="text-center text-4xl font-bold text-blue-900 mb-6">Lesson 4 - JavaScript</h1>

        {/* Intro Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Introduction to JavaScript</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            JavaScript is a versatile and powerful programming language that enables dynamic behavior on websites and web applications. 
            It’s the backbone of modern interactive web experiences, allowing developers to create features like real-time updates, 
            animations, and seamless user interactions. Whether you're building a simple website or a complex web application, 
            JavaScript is a critical skill for web development.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-4">Why Learn JavaScript?</h3>
          <ul className="list-disc ml-6 mb-4 text-gray-700 leading-relaxed">
            <li>
              <strong>Interactivity:</strong> JavaScript enables features like form validation, content updates without page reloads, and interactive menus.
            </li>
            <li>
              <strong>Cross-Platform Support:</strong> JavaScript runs on virtually all web browsers, making it highly accessible.
            </li>
            <li>
              <strong>Rich Ecosystem:</strong> With libraries like React, Angular, and Vue, and backend frameworks like Node.js, JavaScript offers endless possibilities for web and app development.
            </li>
            <li>
              <strong>Easy to Learn:</strong> JavaScript has a relatively simple syntax and a supportive community, making it beginner-friendly.
            </li>
            <li>
              <strong>Career Opportunities:</strong> JavaScript is one of the most in-demand programming languages, with opportunities in front-end, back-end, and full-stack development.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mb-4">Course Overview</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This course will guide you through the essentials of JavaScript, starting with the basics and advancing to more complex topics over two weeks. 
            Topics include:
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-700 leading-relaxed">
            <li>JavaScript Syntax and Variables</li>
            <li>Functions and Event Handling</li>
            <li>DOM Manipulation</li>
            <li>Asynchronous Programming</li>
            <li>Working with APIs</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The course concludes with a **Project**, where you’ll apply what you’ve learned to build a dynamic web application, showcasing your new skills.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-4">Resources to Learn JavaScript</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            To deepen your understanding of JavaScript, explore these resources:
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-700 leading-relaxed">
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                MDN Web Docs: JavaScript Guide
              </a> - Comprehensive documentation and tutorials.
            </li>
            <li>
              <a
                href="https://javascript.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                The Modern JavaScript Tutorial
              </a> - Beginner to advanced JavaScript topics.
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/learn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                freeCodeCamp
              </a> - Interactive lessons and projects to practice JavaScript.
            </li>
            <li>
              <a
                href="https://www.codecademy.com/learn/introduction-to-javascript"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Codecademy: Learn JavaScript
              </a> - Beginner-friendly interactive tutorials.
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/the-complete-javascript-course/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Udemy: The Complete JavaScript Course
              </a> - Comprehensive paid course for in-depth learning.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mb-4">Expected Outcome</h3>
          <p className="text-gray-700 leading-relaxed">
            By the end of this course, you’ll have a solid understanding of JavaScript fundamentals and be equipped to create interactive web applications. 
            You’ll also gain confidence to explore advanced JavaScript concepts and frameworks like React or Node.js.
          </p>
        </section>


        {/* Week 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-600 text-center">Week 1: JavaScript Basics</h2>

        {/* Day 1 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-blue-700">Day 1: Introduction to JavaScript</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            JavaScript is a versatile programming language used to make web pages interactive and dynamic. 
            It allows developers to implement features like form validation, interactive maps, animations, and more. 
            JavaScript can run directly in the browser or on the server using platforms like Node.js.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            On this first day, we will explore JavaScript basics, including how to include it in HTML files, write simple scripts, 
            and understand its fundamental role in web development.
          </p>

          <h4 className="text-lg font-bold text-gray-800 mb-2">Including JavaScript in HTML</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            JavaScript can be added to an HTML file using the <code>&lt;script&gt;</code> tag. This script can be included in the 
            <code>&lt;head&gt;</code> or <code>&lt;body&gt;</code> section of your HTML file. Here's an example of inline JavaScript:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded mb-4">
            {`<!DOCTYPE html>
        <html>
        <head>
          <title>My First JavaScript</title>
        </head>
        <body>
          <script>
            console.log('Hello, JavaScript!');
          </script>
        </body>
        </html>`}
          </pre>
            
          <h4 className="text-lg font-bold text-gray-800 mb-2">Example 1: Output to the Console</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The simplest way to display output in JavaScript is by using <code>console.log()</code>. This method logs messages to the browser's console.
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded mb-4">
            {`<script>
          console.log('Welcome to JavaScript!');
        </script>`}
          </pre>
            
          <h4 className="text-lg font-bold text-gray-800 mb-2">Example 2: Displaying Output on a Webpage</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Use the <code>document.write()</code> method to display content directly on a webpage.
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded mb-4">
            {`<script>
          document.write('Hello, World!');
        </script>`}
          </pre>
            
          <h4 className="text-lg font-bold text-gray-800 mb-2">Example 3: Using Variables</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Variables in JavaScript are used to store data. You can define a variable using <code>let</code>, <code>const</code>, or <code>var</code>.
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded mb-4">
            {`<script>
          let name = 'John';
          console.log('Hello, ' + name + '!');
        </script>`}
          </pre>
            
          <h4 className="text-lg font-bold text-gray-800 mb-2">Example 4: Simple Arithmetic</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            JavaScript can perform arithmetic operations like addition, subtraction, multiplication, and division.
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded mb-4">
            {`<script>
          let num1 = 5;
          let num2 = 10;
          console.log('Sum: ' + (num1 + num2));
        </script>`}
          </pre>
            
          <h4 className="text-lg font-bold text-gray-800 mb-2">Example 5: Interactivity with Alerts</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Use the <code>alert()</code> method to display a popup message to the user.
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded mb-4">
            {`<script>
          alert('Welcome to JavaScript!');
        </script>`}
          </pre>
            
          <h4 className="text-lg font-bold text-gray-800 mb-2">Try it Yourself</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Open your browser's developer tools (usually by pressing <code>F12</code> or <code>Ctrl + Shift + I</code>), 
            navigate to the console tab, and try typing your first JavaScript commands like <code>console.log('Hello!');</code>.
          </p>
            
          <h4 className="text-lg font-bold text-gray-800 mb-2">Assignment</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Write a script that performs the following tasks:
          </p>
          <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
            <li>Declare a variable and assign it your name.</li>
            <li>Use <code>console.log</code> to print a greeting with your name.</li>
            <li>Perform and log a simple arithmetic operation of your choice.</li>
          </ul>
        </div>


          {/* Day 2 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 2: Variables and Data Types</h3>
            <p className="text-gray-700 mb-4">
              Understand variables, constants, and data types in JavaScript, including strings, numbers, booleans, and
              more.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`let name = 'John';
const age = 25;
let isStudent = true;
console.log(name, age, isStudent);`}
            </pre>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 3: Functions</h3>
            <p className="text-gray-700 mb-4">
              Learn how to define and invoke functions in JavaScript, including parameterized and arrow functions.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`function greet(name) {
  return 'Hello, ' + name;
}

const greetArrow = (name) => 'Hello, ' + name;
console.log(greet('Alice'));
console.log(greetArrow('Bob'));`}
            </pre>
          </div>
        </section>

        {/* Week 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Week 2: Advanced JavaScript</h2>

          {/* Day 1 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 1: Arrays and Objects</h3>
            <p className="text-gray-700 mb-4">
              Dive into arrays and objects, essential data structures in JavaScript, and learn how to manipulate them.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`let fruits = ['apple', 'banana', 'cherry'];
let person = { name: 'Alice', age: 30 };
console.log(fruits[0]);
console.log(person.name);`}
            </pre>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 2: DOM Manipulation</h3>
            <p className="text-gray-700 mb-4">
              Learn how to use JavaScript to interact with and modify the Document Object Model (DOM).
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`document.getElementById('myElement').innerText = 'Updated Text';`}
            </pre>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 3: Events</h3>
            <p className="text-gray-700 mb-4">
              Explore JavaScript events and learn how to add interactivity to web pages by handling events.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`document.querySelector('button').addEventListener('click', () => {
  alert('Button clicked!');
});`}
            </pre>
          </div>
        </section>

        {/* Week 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Week 3: JavaScript Project</h2>

          <div className="mb-8">
            <h3 className="text-xl font-bold">Build a Todo List Application</h3>
            <p className="text-gray-700 mb-4">
              Use your JavaScript knowledge to create a simple Todo List application. The project should include adding,
              editing, and removing tasks dynamically using JavaScript.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`// Sample structure
let todos = [];
function addTodo(task) {
  todos.push(task);
  renderTodos();
}

function renderTodos() {
  // Render todos on the page
}`}
            </pre>
          </div>
        </section>
      </div>
    </>
  );
};

export default Lesson10;
