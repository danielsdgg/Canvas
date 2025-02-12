import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Dayy6: React.FC = () => {
    const navigate = useNavigate();
  
    return (
        <>
            <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
                {/* Back Button */}
                <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
                    <FaArrowLeft className="mr-2" />
                    Back
                </button>
                
                {/* Title */}
                <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
                    DOM (Document Object Model)
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">What is the DOM?</h2>
                    <p className="text-gray-600 mt-2">
                        The <b>Document Object Model (DOM)</b> is a programming interface for web documents. It represents the page as a structured tree of objects, which allows JavaScript to dynamically access and modify content, structure, and styles.
                    </p>
                </section>

                {/* Why is the DOM Important? */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">Why is the DOM Important?</h2>
                    <ul className="list-disc ml-6 text-gray-600">
                        <li>Allows dynamic changes to HTML elements and content.</li>
                        <li>Enables interactive web applications.</li>
                        <li>Facilitates event handling (clicks, inputs, etc.).</li>
                        <li>Powers JavaScript frameworks like React, Angular, and Vue.</li>
                    </ul>
                </section>

                {/* DOM Tree Structure */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">Understanding the DOM Tree</h2>
                    <p className="text-gray-600 mt-2">
                        The DOM represents the document as a tree-like structure where each HTML element is a node.
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
                        {`<html>
  <head></head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
  </body>
</html>`}
                    </pre>
                </section>

                {/* Selecting Elements */}
                <section className="mb-6">
  <h2 className="text-xl text-center font-semibold text-gray-700">Selecting Elements in JavaScript</h2>
  <p className="text-gray-600 mt-2">JavaScript provides multiple methods to select elements in the DOM:</p>
  <ul className="list-disc ml-6 text-gray-600">
    <li>
      <b>document.getElementById('id')</b> - Selects a single element by its unique ID.
    </li>
    <li>
      <b>document.getElementsByClassName('class')</b> - Selects all elements with a given class (returns an HTMLCollection).
    </li>
    <li>
      <b>document.getElementsByTagName('tag')</b> - Selects all elements of a given tag (returns an HTMLCollection).
    </li>
    <li>
      <b>document.querySelector('selector')</b> - Selects the first element that matches a CSS selector.
    </li>
    <li>
      <b>document.querySelectorAll('selector')</b> - Selects all elements that match a CSS selector (returns a NodeList).
    </li>
  </ul>
  <p className="text-gray-600 mt-2">Below is an example demonstrating these selection methods:</p>
  <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
    {`// Selecting elements using different methods
const heading = document.getElementById("mainHeading"); // Select by ID
const buttons = document.getElementsByClassName("btn"); // Select by class
const paragraphs = document.getElementsByTagName("p"); // Select by tag
const firstItem = document.querySelector(".list-item"); // Select first matching class
const allItems = document.querySelectorAll(".list-item"); // Select all matching classes

// Example: Change text content of an element
heading.textContent = "Updated Heading!";
  
// Example: Apply a style to all selected elements
Array.from(buttons).forEach(button => button.style.backgroundColor = "blue");
allItems.forEach(item => item.style.color = "green");`}
  </pre>
</section>


                {/* Modifying Elements */}
                <section className="mb-6">
  <h2 className="text-xl text-center font-semibold text-gray-700">Modifying Elements in the DOM</h2>
  <p className="text-gray-600 mt-2">We can dynamically change elements using JavaScript by modifying their content, styles, attributes, and classes.</p>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">1. Changing Content</h3>
  <p className="text-gray-600 mt-2">We can update an element's text, inner HTML, or attributes:</p>
  <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
    {`// Change text content
document.getElementById("myTitle").innerText = "Updated Title";

// Change HTML content
document.querySelector(".content").innerHTML = "<strong>Bold Text</strong>";`}
  </pre>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">2. Changing Styles</h3>
  <p className="text-gray-600 mt-2">We can modify an element's styles using JavaScript:</p>
  <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
    {`// Change text color
document.querySelector("p").style.color = "blue";

// Change background color
document.getElementById("box").style.backgroundColor = "yellow";

// Change font size
document.querySelector(".heading").style.fontSize = "24px";`}
  </pre>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">3. Modifying Classes</h3>
  <p className="text-gray-600 mt-2">We can add, remove, or toggle classes for styling:</p>
  <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
    {`// Add a class
document.getElementById("box").classList.add("highlight");

// Remove a class
document.querySelector(".menu").classList.remove("hidden");

// Toggle a class (if it exists, remove it; if not, add it)
document.getElementById("btn").classList.toggle("active");`}
  </pre>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">4. Changing Attributes</h3>
  <p className="text-gray-600 mt-2">We can update attributes such as `src`, `href`, `alt`, etc.:</p>
  <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
    {`// Change image source
document.getElementById("image").setAttribute("src", "new-image.jpg");

// Change link URL
document.querySelector("a").setAttribute("href", "https://example.com");

// Modify input placeholder
document.querySelector("input").setAttribute("placeholder", "Enter your name");`}
  </pre>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">5. Removing Elements</h3>
  <p className="text-gray-600 mt-2">We can remove elements from the DOM:</p>
  <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
    {`// Remove an element
document.getElementById("box").remove();

// Remove a child element
const parent = document.querySelector(".container");
const child = document.querySelector(".item");
parent.removeChild(child);`}
  </pre>
</section>


                {/* Event Listeners */}
                {/* <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">Handling Events</h2>
                    <p className="text-gray-600 mt-2">We can handle user interactions using event listeners.</p>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                        {`document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked!");
});`}
                    </pre>
                </section> */}

                {/* Best Practices */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">Best Practices</h2>
                    <ul className="list-disc ml-6 text-gray-600">
                        <li>Use <b>querySelector</b> instead of older methods like getElementById.</li>
                        <li>Minimize direct DOM manipulation; use frameworks like React for efficiency.</li>
                        <li>Detach event listeners when elements are removed.</li>
                    </ul>
                </section>

                {/* Practical Exercise */}
                <section className="mb-6 bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700">🚀 Practical Exercise</h2>
                    <p className="text-gray-600 mt-2">Create a simple webpage where:</p>
                    <ul className="list-disc ml-6 text-gray-600">
                        <li>Clicking a button changes the text of a heading.</li>
                        <li>Another button changes the background color of a div.</li>
                        <li>A third button appends a new paragraph.</li>
                    </ul>
                    
                </section>
            </section>
        </>
    );
};

export default Dayy6;
