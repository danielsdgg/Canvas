import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Dayy1: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
                {/* Back Button */}
                <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
                    <FaArrowLeft className="mr-2" />
                    Back
                </button>
                
                <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
                    Introduction to JavaScript
                </h1>

                <p className="text-gray-800 mb-4 leading-relaxed">
                    JavaScript is one of the core technologies of web development alongside HTML and CSS. It is a powerful, flexible, and fast programming language used to create interactive and dynamic web pages. JavaScript enables functionalities such as form validation, animations, interactive maps, and much more.
                </p>

                {/* Things to Know Section */}
                <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Things to Know Before Learning JavaScript
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li className="mb-2">
                            Learning JavaScript can be challenging because of its unique behaviors and extensive functionality. It requires patience and continuous practice.
                        </li>
                        <li className="mb-2">
                            This module will challenge you to think critically and solve problems logically. Unlike HTML and CSS, JavaScript requires an understanding of programming logic, not just pattern recognition.
                        </li>
                        <li className="mb-2">
                            Debugging and testing your code frequently is essential. JavaScript doesn't always behave as expected, so regularly checking outputs will help reinforce your understanding.
                        </li>
                        <li className="mb-2">
                            The language is composed of many interconnected parts. Some topics may not seem to follow a direct sequence, but understanding each individually is key to mastering JavaScript.
                        </li>
                        <li className="mb-2">
                            Not all assignments will have predefined tests. Some will be open-ended to encourage creativity and deeper thinking, allowing you to practice applying concepts in real-world scenarios.
                        </li>
                    </ul>
                </section>
                
                <h2 className="text-xl text-center font-bold text-blue-700 underline mt-6">What is JavaScript?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    JavaScript (JS) is a high-level, interpreted scripting language that allows developers to create dynamic content, control multimedia, animate images, and even build web applications.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mt-6">Key Features of JavaScript</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Lightweight and interpreted</li>
                    <li>Client-side execution (can also be used on the server with Node.js)</li>
                    <li>Event-driven and asynchronous programming support</li>
                    <li>Object-oriented capabilities</li>
                    <li>Works with HTML and CSS to enhance web pages</li>
                </ul>

                {/* Setting up JavaScript Development Environment */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Setting up a JavaScript Development Environment</h2>
        <p>
          To begin writing JavaScript, you need a code editor. Popular choices include:
        </p>
        <ul className="list-disc ml-6">
          <li>Visual Studio Code (VS Code)</li>
          <li>Atom</li>
          <li>Sublime Text</li>
          <li>WebStorm</li>
        </ul>
        <p>
          You can also run JavaScript in the browser console. Open DevTools in Chrome with <code>Ctrl + Shift + J</code> (Windows) or <code>Cmd + Option + J</code> (Mac).
        </p>
      </section>

      {/* Linking JavaScript to HTML */}
      <section className="mb-6">
      <h2 className="text-2xl text-center text-blue-700 font-bold underline mb-4">Linking JavaScript to HTML</h2>
      <p className="mb-4">
        JavaScript is a powerful programming language that allows us to add interactivity, functionality, and logic to our web pages. To use JavaScript in an HTML file, we need to link it properly. There are two primary ways to do this: 
        using <strong>Internal JavaScript</strong> and <strong>External JavaScript</strong>.
      </p>

      {/* Internal JavaScript */}
      <h3 className="text-xl font-semibold mb-2">1. Internal JavaScript</h3>
      <p className="mb-2">
        Internal JavaScript is written directly inside the HTML file within a <code>&lt;script&gt;</code> tag. 
        This method is useful for small scripts or quick testing. The script is placed inside the 
        <code>&lt;head&gt;</code> or <code>&lt;body&gt;</code> section.
      </p>
      <p className="mb-2">
        Example of internal JavaScript:
      </p>
      <pre className="bg-gray-900 text-white p-3 rounded mb-4">
        {`<script>
  console.log("Hello, World!"); // This will display "Hello, World!" in the browser's console
</script>`}
      </pre>
      <p className="mb-4">
        However, using internal JavaScript is not recommended for larger projects because it makes the HTML file cluttered and difficult to maintain.
      </p>

      {/* External JavaScript */}
      <h3 className="text-xl font-semibold mb-2">2. External JavaScript</h3>
      <p className="mb-2">
        External JavaScript is stored in a separate file with a <code>.js</code> extension (e.g., <code>script.js</code>) and linked to the HTML file using the <code>&lt;script&gt;</code> tag with the <code>src</code> attribute. This method is preferred because it keeps the JavaScript code separate, making it easier to manage and reuse.
      </p>
      <p className="mb-2">
        Example of linking an external JavaScript file:
      </p>
      <pre className="bg-gray-900 text-white p-3 rounded mb-4">
        {`<script src="script.js"></script>`}
      </pre>
      <p className="mb-2">
        The <code>script.js</code> file should contain JavaScript code, such as:
      </p>
      <pre className="bg-gray-900 text-white p-3 rounded mb-4">
        {`// script.js
console.log("Hello from script.js!");`}
      </pre>
      <p className="mb-4">
        The external script is typically placed before the closing <code>&lt;/body&gt;</code> tag to ensure the HTML content loads first before the JavaScript runs.
      </p>

      {/* Best Practices */}
      <h3 className="text-xl font-semibold text-center text-blue-700 underline mb-2">Best Practices for Linking JavaScript</h3>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">
          Always use <strong>external JavaScript</strong> for better code organization and maintainability.
        </li>
        <li className="mb-2">
          Place the <code>&lt;script&gt;</code> tag at the end of the <code>&lt;body&gt;</code> section for better page performance.
        </li>
        <li className="mb-2">
          Use the <code>defer</code> attribute in the script tag (<code>&lt;script src="script.js" defer&gt;</code>) to ensure the script loads after the HTML content.
        </li>
        <li className="mb-2">
          Avoid mixing JavaScript and HTML as much as possible to keep your code clean.
        </li>
      </ul>

      {/* Conclusion */}
      <p className="mb-2">
        Understanding how to link JavaScript to HTML is crucial for web development. Whether using internal or external JavaScript, proper script placement and best practices help create efficient and well-structured web applications.
      </p>
    </section>

      {/* var, let, and const */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-center text-blue-700 underline mb-2">Understanding var, let, and const</h2>
        <p>
          JavaScript has three ways to declare variables:
        </p>
        <ul className="list-disc ml-6">
          <li><code>var</code>: Function-scoped, can be redeclared.</li>
          <li><code>let</code>: Block-scoped, can be reassigned but not redeclared.</li>
          <li><code>const</code>: Block-scoped, cannot be reassigned.</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded">
          {`var name = "Alice";
let age = 25;
const country = "USA";`}
        </pre>
      </section>

      {/* Data Types */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-700 underline mb-2">JavaScript Data Types</h2>
        <ul className="list-disc ml-6">
          <li>String: <code>"Hello"</code></li>
          <li>Number: <code>42</code></li>
          <li>Boolean: <code>true</code> or <code>false</code></li>
          <li>Null: <code>null</code> (intentional absence of value)</li>
          <li>Undefined: Variable declared but not assigned</li>
          <li>Object: Collections of key-value pairs</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded">
          {`let person = {
  name: "John",
  age: 30
};`}
        </pre>
      </section>

      {/* Basic Console Operations */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-700 underline mb-2">Basic Console Operations</h2>
        <ul className="list-disc ml-6">
          <li><code>console.log()</code>: Outputs to the console</li>
          <li><code>alert()</code>: Displays a pop-up alert</li>
          <li><code>prompt()</code>: Asks user for input</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded">
          {`console.log("Hello, Console!");
alert("Welcome to JavaScript!");
let userInput = prompt("Enter your name:");`}
        </pre>
      </section>

                <h2 className="text-xl font-bold text-blue-700 underline mt-6">How JavaScript Works in a Web Page</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    JavaScript is typically embedded inside an HTML document and executed by the browser. It can be written inline within an HTML file using the <code>&lt;script&gt;</code> tag or in a separate file with a `.js` extension.
                </p>
                <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-4">
                    {`<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Example</title>
</head>
<body>
    <h1>Welcome to JavaScript</h1>
    <button onclick="sayHello()">Click Me</button>
    <script>
        function sayHello() {
            alert('Hello, JavaScript!');
        }
    </script>
</body>
</html>`}
                </pre>

                <h2 className="text-xl font-bold text-blue-700 underline mt-6">JavaScript Syntax</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    JavaScript syntax includes variables, data types, operators, functions, and control structures. Here’s a quick example:
                </p>
                <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-4">
                    {`// Declaring a variable
let name = "John Doe";
console.log("Hello, " + name);

// Basic function
task();
function task() {
    console.log("JavaScript is fun!");
}`}
                </pre>

                <h2 className="text-xl font-bold text-blue-700 underline mt-6">Practical Exercise</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    Here is a simple exercise; create an HTML page with JavaScript that does the following:
                </p>
                <ul className="list-decimal list-inside text-gray-700 mb-4">
                    <li>Displays a button labeled "Greet Me"</li>
                    <li>When clicked, prompts the user to enter their name</li>
                    <li>Displays an alert with a greeting message using the entered name</li>
                </ul>
                
                <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-4">
                    {`<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Practice</title>
</head>
<body>
    <button onclick="greetUser()">Greet Me</button>
    <script>
        function greetUser() {
            let name = prompt("What is your name?");
            alert("Hello, " + name + "! Welcome to JavaScript.");
        }
    </script>
</body>
</html>`}
                </pre>
               
                
                 {/* Further Resources */}
      <section className="mb-6">
        <h2 className="text-2xl italic font-semibold mt-5 mb-2">Here are further Resources for study:</h2>
        <ul className="list-disc ml-6">
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="text-blue-600">MDN Web Docs</a></li>
          <li><a href="https://www.w3schools.com/js/" className="text-blue-600">W3Schools JavaScript Tutorial</a></li>
          <li><a href="https://javascript.info/" className="text-blue-600">JavaScript.info</a></li>
        </ul>
      </section>
                {/* Words of Encouragement */}
      <section className="mb-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Keep Going!</h2>
        <p className="italic">
          Learning JavaScript takes time, but every line of code you write gets you closer to mastery.
          Keep practicing, building projects, and enjoying the journey. You got this! 🚀
        </p>
      </section>
            </section>
        </>
    );
};

export default Dayy1;