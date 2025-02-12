import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Dayy3: React.FC = () => {
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
        <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
          Functions & Scope in JavaScript
        </h1>
        
        {/* Introduction */}
        <div className="mb-6">
          <p className="text-gray-800">
            Functions are one of the most fundamental building blocks in JavaScript. They allow us to write reusable, maintainable code. Scope determines where variables can be accessed within our code. Understanding these concepts is crucial for writing efficient JavaScript programs.
          </p>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">Calling a Function</h3>
      <p className="text-lg text-gray-800 leading-relaxed">
        To <span className="font-semibold">"execute"</span> or <span className="font-semibold">"call"</span> a function in JavaScript, you add <span className="text-blue-500">()</span> after its name. To execute the function we just defined, you run: <span className="bg-gray-200 px-1 rounded">exerciseByronThePoodle()</span>. When we ran <span className="bg-gray-200 px-1 rounded">document.querySelector()</span>, we were calling a function. <span className="bg-gray-200 px-1 rounded">Math.floor()</span> is another function. That <span className="text-blue-500">()</span> is also known as the <span className="font-semibold">invocation operator</span> because it tells JavaScript to...invoke the function.
      </p>
      
      <p className="mt-4 text-lg text-gray-800 leading-relaxed">
        <span className="font-bold text-green-600">LEARNING TIP:</span> Try defining a small function in the JavaScript console to test this out. You can copy the syntax provided above.
      </p>
      
      <p className="mt-4 text-lg text-gray-800 leading-relaxed">
        Of course, calling a function only works if the function has been declared.
      </p>
      
      <p className="mt-4 text-lg text-gray-800 leading-relaxed italic">
        <span className="font-bold">Note:</span> Later in the course, you will learn about different ways of declaring functions and about a concept called <span className="font-semibold">hoisting</span>. If you declare a function using the <span className="font-semibold">function</span> keyword, as we have been doing so far, the function call can actually come before the function declaration in the code file, due to hoisting. But it needs to exist somewhere; if you try to call a function that hasn't been declared somewhere in the code, you'll get an error.
      </p>
    </div>
        </div>

        {/* Function Basics */}
        <h2 className="text-lg font-semibold text-blue-600 mt-4">Function Basics</h2>
        <p className="text-gray-800">
          A function in JavaScript is a block of code designed to perform a specific task. Functions are executed when they are called (or invoked).
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mt-2">{`
function greet() {
  console.log("Hello, world!");
}
greet();
        `}</pre>

        {/* Function Types */}
        <h2 className="text-lg font-semibold text-blue-600 mt-4">Types of Functions</h2>
        
        {/* 1. Function Declaration */}
      <h3 className="text-md font-semibold text-gray-700 mt-4">1. Function Declaration</h3>
      <p className="text-gray-600 mt-2">
        Function declarations are the most common way to define functions in JavaScript.
        They are hoisted, meaning they can be called before they are defined in the code.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // Output: 8

// Function with default parameters
function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!
`}
      </pre>

      {/* 2. Function Expression */}
      <h3 className="text-md font-semibold text-gray-700 mt-4">2. Function Expression</h3>
      <p className="text-gray-600 mt-2">
        Function expressions assign functions to variables. Unlike function declarations, they are not hoisted.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(4, 2)); // Output: 8

// Anonymous function stored in a variable
const divide = function(x, y) {
  return x / y;
};
console.log(divide(10, 2)); // Output: 5
`}
      </pre>

      {/* 3. Arrow Functions */}
      <h3 className="text-md font-semibold text-gray-700 mt-4">3. Arrow Functions</h3>
      <p className="text-gray-600 mt-2">
        Arrow functions provide a more concise syntax for writing functions. They are particularly useful for callbacks and shorter functions.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`
const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // Output: 6

// Arrow function with implicit return
const square = n => n * n;
console.log(square(5)); // Output: 25

// Arrow function without parameters
const sayHello = () => "Hello, World!";
console.log(sayHello()); // Output: Hello, World!
`}
      </pre>
        
        {/* 4. Immediately Invoked Function Expression (IIFE) */}
        <h3 className="text-md font-semibold text-gray-700 mt-2">4. Immediately Invoked Function Expression (IIFE)</h3>
        <pre className="bg-gray-800 text-white p-4 rounded">{`
(function() {
  console.log("This runs immediately!");
})();
        `}</pre>

        {/* Function Scope */}
        <h2 className="text-lg font-semibold text-blue-600 mt-4">Understanding Scope</h2>
        <p className="text-gray-800">Scope determines the accessibility of variables within JavaScript code.</p>

        {/* 1. Global Scope */}
        <h3 className="text-md font-semibold text-gray-700 mt-2">1. Global Scope</h3>
        <p className="text-gray-600">Variables declared outside of any function are in the global scope and can be accessed from anywhere in the code.</p>
        <pre className="bg-gray-800 text-white p-4 rounded">{`
let globalVar = "I'm global";
function showGlobal() {
  console.log(globalVar);
}
showGlobal();
        `}</pre>

        {/* 2. Function Scope */}
        <h3 className="text-md font-semibold text-gray-700 mt-2">2. Function Scope</h3>
        <p className="text-gray-600">Variables declared inside a function are only accessible within that function.</p>
        <pre className="bg-gray-800 text-white p-4 rounded">{`
function testScope() {
  let localVar = "I'm local";
  console.log(localVar);
}
testScope();
// console.log(localVar); // This would cause an error
        `}</pre>
        
        {/* 3. Block Scope (let & const) */}
        <h3 className="text-md font-semibold text-gray-700 mt-2">3. Block Scope (let & const)</h3>
        <p className="text-gray-600">Variables declared with let and const inside a block ({}) cannot be accessed outside of it.</p>
        <pre className="bg-gray-800 text-white p-4 rounded">{`
if (true) {
  let blockVar = "I'm block scoped";
  console.log(blockVar);
}
// console.log(blockVar); // Error
        `}</pre>
        
        {/* 4. Lexical Scope */}
        <h3 className="text-md font-semibold text-gray-700 mt-2">4. Lexical Scope</h3>
        <p className="text-gray-600">Variables declared with let and const inside a block ({}) cannot be accessed outside of it.</p>
        <pre className="bg-gray-800 text-white p-4 rounded">{`
function outerFunction() {
  let outerVar = "I'm outer";
  
  function innerFunction() {
    console.log(outerVar);
  }
  
  innerFunction();
}
outerFunction();
        `}</pre>

         {/* Conclusion */}
      <h2 className="text-xl font-bold text-gray-900 mt-6">Conclusion</h2>
      <p className="text-gray-600 mt-2">To effectively manage scope in JavaScript, keep these best practices in mind:</p>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Use <code>const</code> and <code>let</code> to declare variables, as they respect block scope.</li>
        <li>Remember that functions create their own scope, and variables inside them aren't accessible outside.</li>
        <li>Avoid using <code>var</code> as it does not follow block scope rules and can lead to unexpected behavior.</li>
        <li>Take advantage of closures to access variables from an outer function.</li>
      </ul>
        
        {/* Practical Exercise */}
        <h2 className="text-lg font-semibold text-blue-600 mt-6">Practical Exercise</h2>
        <p className="text-gray-800">Try to solve the following challenge:</p>
        <pre className="bg-gray-800 text-white p-4 rounded">{`
// 1. Create a function that takes a name as an argument and returns a greeting message.
// 2. Implement a function that calculates the factorial of a number.
// 3. Demonstrate the difference between var, let, and const in terms of scope.
        `}</pre>
        
        {/* Further Reading */}
        <h2 className="text-lg font-semibold text-blue-600 mt-6">Further Reading</h2>
        <ul className="list-disc ml-6 text-gray-800">
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" className="text-blue-500">MDN - JavaScript Functions</a></li>
          <li><a href="https://javascript.info/function-basics" className="text-blue-500">JavaScript.info - Function Basics</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" className="text-blue-500">MDN - JavaScript Closures</a></li>
        </ul>
      </section>
    </>
  );
};

export default Dayy3;
