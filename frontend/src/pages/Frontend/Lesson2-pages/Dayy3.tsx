import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCode,
  FaLaptopCode,
  FaList,
  FaLink,
  FaEdit,
  FaCheckCircle,
  FaBookOpen,
  FaRocket,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext"; // Adjust path if needed

const Dayy3: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 3, // Unique ID for Day 3
    userId: userData?.userDetails.id ?? "", // Fallback to empty string
    fileUrl: "",
  });

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Data:", form);

    if (!userToken) {
      alert("Authentication error. Please log in again.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/v1/assignments/submit", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        alert("Assignment submitted successfully!");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting assignment:", error);
      alert("Failed to submit. Please try again later.");
    }
  };

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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Functions in JavaScript</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Introduction
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Welcome to Day 3 of Morgan Technical Training’s frontend course! Today, we dive into functions—the heart of reusable, modular code in JavaScript. Functions encapsulate logic, making your programs more efficient, readable, and maintainable. Alongside functions, we’ll explore scope—how JavaScript manages variable accessibility—which is crucial for avoiding bugs and mastering program flow.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              In this lesson, you’ll learn function declarations, expressions, arrow functions, and more, plus how scope (global, function, block, lexical) shapes your code. These concepts underpin everything from simple scripts to complex applications—let’s get started!
            </p>
          </div>

          {/* Function Basics */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Function Basics
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              A function is a named block of code that performs a task and can be invoked (called) whenever needed. Functions reduce repetition, enhance clarity, and support modularity by grouping logic.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`function greet() {
  console.log("Hello, world!");
}
greet(); // Output: Hello, world!`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              To call a function, append <code>()</code>—the invocation operator. Functions can take parameters, return values, and be customized for diverse tasks.
            </p>
          </div>

          {/* Types of Functions */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Types of Functions
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              JavaScript offers multiple ways to define functions, each with unique traits and use cases:
            </p>
            <div className="space-y-6">
              {/* Function Declaration */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. Function Declaration
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Defined with the <code>function</code> keyword, these are hoisted—callable before their definition.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 3)); // Output: 8

// With default parameters
function greet(name: string = "Guest"): string {
  return \`Hello, \${name}!\`;
}
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!`}
                </pre>
              </div>

              {/* Function Expression */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Function Expression
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Assigned to a variable, not hoisted—useful for dynamic or conditional function creation.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const multiply = function(a: number, b: number): number {
  return a * b;
};
console.log(multiply(4, 2)); // Output: 8

// Named function expression
const divide = function div(x: number, y: number): number {
  return x / y;
};
console.log(divide(10, 2)); // Output: 5`}
                </pre>
              </div>

              {/* Arrow Functions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Arrow Functions
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Introduced in ES6, arrow functions offer concise syntax and lexical <code>this</code> binding—ideal for callbacks.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const subtract = (a: number, b: number): number => a - b;
console.log(subtract(10, 4)); // Output: 6

// Implicit return
const square = (n: number): number => n * n;
console.log(square(5)); // Output: 25

// No parameters
const sayHello = (): string => "Hello, World!";
console.log(sayHello()); // Output: Hello, World!`}
                </pre>
              </div>

              {/* IIFE */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Immediately Invoked Function Expression (IIFE)
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Executes immediately upon definition—useful for initialization or avoiding global pollution.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`(function() {
  console.log("This runs immediately!");
})();

// With parameters
((name: string) => {
  console.log(\`Hello, \${name}!\`);
})("Byron"); // Output: Hello, Byron!`}
                </pre>
              </div>

              {/* Higher-Order Functions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  5. Higher-Order Functions
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Functions that accept or return other functions—key to functional programming.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`function withLogging(fn: (x: number) => number) {
  return function(x: number) {
    console.log(\`Calling with \${x}\`);
    return fn(x);
  };
}
const double = (x: number): number => x * 2;
const loggedDouble = withLogging(double);
console.log(loggedDouble(5)); // Output: Calling with 5, 10`}
                </pre>
              </div>
            </div>
          </div>

          {/* Understanding Scope */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Understanding Scope
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Scope defines where variables are accessible. JavaScript uses lexical scoping, determined by code structure:
            </p>
            <div className="space-y-6">
              {/* Global Scope */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. Global Scope
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Variables outside functions are globally accessible—use sparingly to avoid conflicts.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`let globalVar = "I'm global";
function showGlobal() {
  console.log(globalVar);
}
showGlobal(); // Output: I'm global
console.log(globalVar); // Output: I'm global`}
                </pre>
              </div>

              {/* Function Scope */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Function Scope
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Variables inside functions are local—hidden from the outside world.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`function testScope() {
  let localVar = "I'm local";
  console.log(localVar);
}
testScope(); // Output: I'm local
// console.log(localVar); // Error: localVar is not defined`}
                </pre>
              </div>

              {/* Block Scope */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Block Scope
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  <code>let</code> and <code>const</code> create block-level scope within <code>{}</code>—unlike <code>var</code>.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`if (true) {
  let blockVar = "I'm block scoped";
  console.log(blockVar); // Output: I'm block scoped
}
// console.log(blockVar); // Error: blockVar is not defined

// Compare with var
if (true) {
  var notBlockScoped = "I'm not block scoped";
}
console.log(notBlockScoped); // Output: I'm not block scoped`}
                </pre>
              </div>

              {/* Lexical Scope & Closures */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Lexical Scope & Closures
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Inner functions retain access to outer scope variables—forming closures.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`function outerFunction() {
  let outerVar = "I'm outer";
  function innerFunction() {
    console.log(outerVar);
  }
  return innerFunction;
}
const closure = outerFunction();
closure(); // Output: I'm outer`}
                </pre>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCheckCircle className="mr-2 text-indigo-600" />
              Best Practices
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Optimize your function and scope usage with these tips:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Favor <code>const</code> and <code>let</code>:</strong> Avoid <code>var</code> for predictable scoping.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Minimize Global Scope:</strong> Limit global variables to prevent namespace pollution.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Use Arrow Functions Wisely:</strong> Leverage their concise syntax and <code>this</code> binding for callbacks.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Name Functions Clearly:</strong> Reflect their purpose (e.g., <code>calculateTotal</code>) for readability.
              </li>
            </ul>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Test your function skills with this challenge. Write a JavaScript program that:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Defines a function <code>getGreeting</code> that takes a name and time (e.g., "morning") and returns a greeting.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Uses an arrow function <code>calculateFactorial</code> to compute a number’s factorial recursively.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Demonstrates block scope with a loop using <code>let</code> vs. <code>var</code>.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Logs results to the console (e.g., "Good morning, Alice!", factorial of 5).
              </li>
            </ul>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-4">
              {`// Sample Solution
function getGreeting(name: string, time: string = "day"): string {
  return \`Good \${time}, \${name}!\`;
}

const calculateFactorial = (n: number): number => n <= 1 ? 1 : n * calculateFactorial(n - 1);

// Scope demo
for (let i = 0; i < 3; i++) {
  console.log(\`Inside loop: \${i}\`);
}
// console.log(i); // Error: i is not defined

for (var j = 0; j < 3; j++) {
  console.log(\`Inside var loop: \${j}\`);
}
console.log(\`Outside var loop: \${j}\`); // Output: 3

console.log(getGreeting("Alice", "morning")); // Output: Good morning, Alice!
console.log(calculateFactorial(5)); // Output: 120`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 italic">
              Build this in a `.js` file or browser console, then submit your GitHub link below!
            </p>
          </div>

          {/* GitHub Submission */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaLink className="mr-2 text-indigo-600" />
              Submit Your Work
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label
                className="block text-gray-800 text-sm sm:text-base font-semibold mb-2"
                htmlFor="fileUrl"
              >
                Paste Your GitHub Repository Link:
              </label>
              <textarea
                name="fileUrl"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                rows={4}
                placeholder="e.g., https://github.com/username/repo"
                value={form.fileUrl}
                onChange={handleFileChange}
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Submit Exercise
              </button>
            </form>
            {submitted && (
              <p className="mt-4 text-green-600 font-medium flex items-center">
                <FaCheckCircle className="mr-2" />
                Your exercise has been submitted successfully!
              </p>
            )}
          </div>

          {/* Further Reading */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Further Reading
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  MDN - JavaScript Functions
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://javascript.info/function-basics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  JavaScript.info - Function Basics
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  MDN - JavaScript Closures
                </a>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Conclusion
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Functions and scope are pivotal in JavaScript, enabling reusable logic and controlled variable access. From declarations to closures, these tools empower you to write elegant, efficient code. Experiment with them in your projects—they’re the stepping stones to advanced JavaScript mastery!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dayy3;