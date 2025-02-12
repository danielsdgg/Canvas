import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Dayy5: React.FC = () => {
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
          Arrays and Objects
        </h1>

        {/* Introduction */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Introduction</h2>
          <p className="text-gray-600 mt-2">
            Arrays and objects are fundamental data structures in JavaScript. Arrays store ordered collections of elements, while objects store key-value pairs. Understanding these structures is essential for data manipulation, API interactions, and organizing complex data efficiently.
          </p>
        </section>

        {/* Arrays */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Arrays</h2>
          <p className="text-gray-600 mt-2">
            An array is a special variable that can hold multiple values at once. Arrays are zero-indexed, meaning the first element starts at index 0.
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded">{`
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple
          `}</pre>
        </section>

        {/* Array Methods */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Common Array Methods</h2>
          <p className="text-gray-600 mt-2">JavaScript provides various built-in methods to manipulate arrays.</p>
          <ul className="list-disc ml-6 text-gray-600">
            <li><b>push()</b>: Adds an item to the end</li>
            <pre className="bg-gray-800 text-white p-4 rounded">{`
let arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
            `}</pre>
            
            <li><b>pop()</b>: Removes the last item</li>
            <pre className="bg-gray-800 text-white p-4 rounded">{`
let arr = [1, 2, 3];
arr.pop(); // [1, 2, 3]
            `}</pre>
            
            <li><b>shift()</b>: Removes the first item</li>
            <pre className="bg-gray-800 text-white p-4 rounded">{`
let arr = [1, 2, 3];
arr.shift(); // [2, 3]
            `}</pre>
            
            <li><b>unshift()</b>: Adds an item to the beginning</li>
            <pre className="bg-gray-800 text-white p-4 rounded">{`
let arr = [1, 2, 3];
arr.unshift(0); // [0, 2, 3]
            `}</pre>
            
            <li><b>map()</b>: Creates a new array by applying a function</li>
            <pre className="bg-gray-800 text-white p-4 rounded">{`
let arr = [1, 2, 3];
let doubled = arr.map(num => num * 2); // [0, 4, 6]
            `}</pre>
            
            <li><b>filter()</b>: Returns a new array with elements that match a condition</li>
            <pre className="bg-gray-800 text-white p-4 rounded">{`
let arr = [1, 2, 3];
let evenNumbers = arr.filter(num => num % 2 === 0); // [0, 2]
            `}</pre>
            
            <li><b>reduce()</b>: Reduces an array to a single value</li>
            <pre className="bg-gray-800 text-white p-4 rounded">{`
let arr = [1, 2, 3];
let sum = arr.reduce((total, num) => total + num, 0); // 5
            `}</pre>
          </ul>
        </section>

        {/* Objects */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Objects</h2>
          <p className="text-gray-600 mt-2">
            Objects are collections of key-value pairs. They allow us to store structured data efficiently.
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded">{`
const person = {
  name: "John",
  age: 30,
  isStudent: false
};
console.log(person.name); // Output: John
          `}</pre>
        </section>

        {/* Practical Exercise */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Practical Exercise</h2>
          <p className="text-gray-600 mt-2">
            Create a JavaScript program that:
          </p>
          <ul className="list-decimal ml-6 text-gray-600">
            <li>Defines an array of student objects.</li>
            <li>Each object should have properties: name, age, and grade.</li>
            <li>Filters students who have a grade above 80.</li>
            <li>Uses the map() function to return an array of student names.</li>
            <li>Logs the filtered and mapped results to the console.</li>
          </ul>
          <pre className="bg-gray-800 text-white p-4 rounded">{`
const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 75 },
  { name: "Charlie", age: 23, grade: 90 }
];

const highScorers = students.filter(student => student.grade > 80);
const studentNames = highScorers.map(student => student.name);

console.log(studentNames);
          `}</pre>
        </section>
        {/* Resources */}
        <section className="mb-6">
          <h1 className="text-xl font-semibold text-gray-700">Further Resources on Arrays and Objects</h1>
          <p className="text-gray-600 mt-2">
            To solidify your understanding of arrays and objects, here are some highly recommended resources:
          </p>
        <ul className="list-disc ml-6 text-gray-600">
          <li>
            <b>MDN Web Docs - Arrays</b>: 
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
            target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">
              MDN Arrays Documentation
            </a>
          </li>
          <li>
            <b>MDN Web Docs - Objects</b>: 
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"
            target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">
              MDN Objects Documentation
            </a>
          </li>
          <li>
            <b>JavaScript.info - Arrays</b>: 
            <a href="https://javascript.info/array-methods" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">
              JavaScript Array Methods
            </a>
          </li>
          <li>
            <b>JavaScript.info - Objects</b>: 
            <a href="https://javascript.info/object" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">
              JavaScript Objects Guide
            </a>
          </li>
          <li>
            <b>Interactive Practice - FreeCodeCamp</b>: 
            <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-data-structures"
             target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">
              FreeCodeCamp Data Structures Course
            </a>
          </li>
          <li>
            <b>JavaScript Array and Object Challenges</b>: 
            <a href="https://www.codewars.com/" target="_blank" rel="noopener noreferrer" 
            className="text-blue-500 hover:underline ml-2">
              CodeWars JavaScript Challenges
            </a>
          </li>
        </ul>
        </section>
        <section className="mb-6 bg-green-100 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold text-green-800">🎉 Congratulations on Completing the Introduction to JavaScript! 🎉</h2>
  <p className="text-gray-700 mt-4">
    Well done! You've successfully covered the fundamentals of JavaScript, including variables, functions, loops, arrays, and objects. These concepts form the **foundation of JavaScript programming**, and mastering them will make learning advanced topics much easier.
  </p>
  
  <h3 className="text-lg font-semibold text-gray-800 mt-4">🔥 What's Next?</h3>
  <p className="text-gray-700 mt-2">
    Next week, we'll dive into **more advanced topics** that will bring your JavaScript skills to a whole new level:
  </p>
  <ul className="list-disc ml-6 text-gray-700 mt-2">
    <li><b>DOM Manipulation</b> – Learn how to dynamically update and modify web pages.</li>
    <li><b>Event Listeners</b> – Handle user interactions like clicks, keyboard inputs, and form submissions.</li>
    <li><b>Forms</b> – Understand how to validate and process user input.</li>
    <li><b>Promises & Fetch API</b> – Work with asynchronous JavaScript to fetch data from external sources.</li>
    <li><b>ES6+ Features</b> – Explore modern JavaScript features like template literals, destructuring, and modules.</li>
  </ul>

  <h3 className="text-lg font-semibold text-gray-800 mt-4">🚀 Keep Practicing!</h3>
  <p className="text-gray-700 mt-2">
    To truly master JavaScript, **consistent practice is key**. Make sure to:
  </p>
  <ul className="list-disc ml-6 text-gray-700 mt-2">
    <li>Go through all the **exercises** provided and test yourself.</li>
    <li>Review the **resources** listed for deeper understanding.</li>
    <li>Try building **small projects** to apply what you've learned.</li>
    <li>Challenge yourself with **coding problems** on platforms like <a href="https://www.codewars.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">CodeWars</a> and <a href="https://www.hackerrank.com/domains/tutorials/10-days-of-javascript" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">HackerRank</a>.</li>
  </ul>

  <p className="text-gray-800 mt-4 font-semibold">See you next week for the next level of JavaScript mastery! 💡</p>
</section>


      </section>
    </>
  );
};

export default Dayy5;
