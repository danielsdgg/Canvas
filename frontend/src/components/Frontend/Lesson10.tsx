import React from 'react';
import SideNav from '../SideNav';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Lesson10 = () => {
  const navigate = useNavigate();

  return (
    <>
      <SideNav />
      <div className="mx-auto p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back to Course
        </button>
        <h1 className="text-center text-4xl font-bold text-blue-900 mb-6">Lesson 4 - JavaScript</h1>

        {/* Intro Section */}
        <section className="mb-12">
          <p className="text-gray-700 mb-4">
            JavaScript is a versatile programming language that powers dynamic behavior on most websites. It is essential
            for web developers to create interactive and engaging web applications.
          </p>
          <p className="text-gray-700 mb-4">
            This lesson will guide you through JavaScript fundamentals and advanced topics over two weeks, concluding
            with a project week to apply your knowledge.
          </p>
        </section>

        {/* Week 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Week 1: JavaScript Basics</h2>

          {/* Day 1 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 1: Introduction to JavaScript</h3>
            <p className="text-gray-700 mb-4">
              Learn about JavaScript, its purpose, and where it is used. Explore how to include JavaScript in HTML files
              and write your first script.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`<script>
  console.log('Hello, JavaScript!');
</script>`}
            </pre>
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
