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
  FaRocket,
  FaBookOpen
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Dayy6: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for file upload
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 9,
    userId: userData?.userDetails.id ?? "", 
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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">DOM (Document Object Model)</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction to DOM */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to DOM
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              The Document Object Model (DOM) is the cornerstone of interactive web development. It’s a programming interface that transforms static HTML into a dynamic, structured tree of objects—each representing an element, attribute, or text node on a webpage. With the DOM, JavaScript can access, manipulate, and update the page in real time, without requiring a reload.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Standardized by the World Wide Web Consortium (W3C), the DOM bridges the gap between HTML structure and JavaScript logic. It’s what powers everything from simple button clicks to complex single-page applications (SPAs) like those built with React or Vue. Understanding the DOM is not just a skill—it’s a necessity for creating modern, user-friendly web experiences.
            </p>
          </div>

          {/* Understanding the DOM */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding the DOM
            </h2>
            <div className="space-y-6">
              {/* What is the DOM? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What is the DOM?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
  At its core, the DOM is a representation of a webpage as a tree of objects. The <code>document</code> object serves as the root, providing access to all elements, from <code>&lt;html&gt;</code> down to individual text nodes.
</p>

                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`<!-- HTML -->
<html>
  <body>
    <h1>Hello DOM</h1>
  </body>
</html>

// JavaScript
console.log(document.documentElement); // <html>
console.log(document.body); // <body>
console.log(document.querySelector("h1")); // <h1>Hello DOM</h1>`}
                </pre>
              </div>

              {/* DOM Tree Structure */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. DOM Tree Structure
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  The DOM organizes a page hierarchically—parents, children, and siblings form a tree. This structure allows precise navigation and manipulation of elements.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`<!-- HTML -->
<div>
  <span>Item 1</span>
  <span>Item 2</span>
</div>

// JavaScript
const div = document.querySelector("div");
console.log(div.children); // [span, span]
console.log(div.firstChild); // #text or <span>Item 1</span>
console.log(div.parentElement); // <body> or null`}
                </pre>
              </div>

              {/* Nodes vs Elements */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Nodes vs Elements
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
  Nodes are the building blocks of the DOM—elements (like <code>&lt;div&gt;</code>), text, and comments. Elements are a specific type of node representing HTML tags.
</p>

                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`<!-- HTML -->
<p>Text <!-- Comment --> here</p>

// JavaScript
const p = document.querySelector("p");
console.log(p.childNodes); // [Text "Text ", Comment, Text " here"]
console.log(p.children); // [] (no element children)`}
                </pre>
              </div>

              {/* Accessing the DOM */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Accessing the DOM
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  The <code>document</code> object is your entryway, offering methods to select elements by ID, class, tag, or CSS selector.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// Examples
console.log(document.getElementById("myId"));
console.log(document.getElementsByClassName("myClass"));
console.log(document.querySelector(".myClass"));
console.log(document.querySelectorAll("p"));`}
                </pre>
              </div>
            </div>
          </div>

          {/* Why Learn the DOM? */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCheckCircle className="mr-2 text-indigo-600" />
              Why Learn the DOM?
            </h2>
            <div className="space-y-6">
              {/* Dynamic Web Pages */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. Creating Dynamic Web Pages
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  The DOM allows real-time updates—change text, styles, or structure without reloading, making sites responsive.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const p = document.querySelector("p");
p.textContent = "Updated text!";
p.style.color = "indigo";`}
                </pre>
              </div>

              {/* User Interactivity */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Enabling User Interactivity
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  It’s critical for handling user actions—clicks, inputs, or scrolls—via event listeners tied to DOM elements.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`document.querySelector("button").addEventListener("click", () => {
  document.querySelector("div").style.backgroundColor = "indigo";
});`}
                </pre>
              </div>

              {/* Foundation for Frameworks */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Foundation for Frameworks
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Libraries like React or Vue abstract the DOM, but understanding it ensures you grasp their underlying mechanics.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// React manipulates the DOM indirectly
const [text, setText] = useState("Hello");
<p>{text}</p> // DOM updates via state`}
                </pre>
              </div>

              {/* Cross-Browser Consistency */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Cross-Browser Consistency
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  The DOM provides a standardized API, ensuring your code works across Chrome, Firefox, and more.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// Works in all modern browsers
document.body.style.background = "indigo";`}
                </pre>
              </div>
            </div>
          </div>

          {/* DOM Manipulation */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaList className="mr-2 text-indigo-600" />
              DOM Manipulation
            </h2>
            <div className="space-y-6">
              {/* Selecting Elements */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. Selecting Elements
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Use methods to target specific elements—by ID, class, tag, or selector—for manipulation.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const byId = document.getElementById("header");
const byClass = document.getElementsByClassName("item")[0];
const byQuery = document.querySelector(".item");
const allItems = document.querySelectorAll("p");`}
                </pre>
              </div>

              {/* Modifying Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Modifying Content
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Change text or HTML inside elements using properties like <code>textContent</code> or <code>innerHTML</code>.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const elem = document.querySelector("div");
elem.textContent = "New Text";
elem.innerHTML = "<strong>Bold Text</strong>";`}
                </pre>
              </div>

              {/* Styling Elements */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Styling Elements
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Apply CSS styles directly to elements through the <code>style</code> property.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const box = document.querySelector(".box");
box.style.backgroundColor = "indigo";
box.style.fontSize = "16px";`}
                </pre>
              </div>

              {/* Creating Elements */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Creating Elements
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Dynamically add new elements using <code>createElement</code> and append them to the DOM.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const newDiv = document.createElement("div");
newDiv.textContent = "I’m new!";
document.body.appendChild(newDiv);`}
                </pre>
              </div>

              {/* Removing Elements */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  5. Removing Elements
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Delete elements with <code>remove</code> or <code>removeChild</code> for cleanup or updates.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const elem = document.querySelector(".old");
elem.remove();
// OR
document.body.removeChild(elem);`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: DOM Manipulation Challenge
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Build a mini-application to test your DOM skills. Create a task list where users can:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Add tasks via an input field and button.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Mark tasks as complete by clicking them (toggle style).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Remove tasks with a delete button next to each.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                Clear all tasks with a single button.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter example—expand it to meet all requirements:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<!-- HTML -->
<input id="taskInput" type="text" placeholder="Enter task">
<button id="addBtn">Add Task</button>
<ul id="taskList"></ul>
<button id="clearBtn">Clear All</button>

// JavaScript
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    li.style.cursor = "pointer";
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.backgroundColor = "indigo";
    deleteBtn.style.color = "white";
    
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    input.value = "";

    li.addEventListener("click", () => {
      li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
    });

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent li click
      taskList.removeChild(li);
    });
  }
});

clearBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
});`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 italic">
              Implement this in a separate HTML/JS file, test it, and submit your GitHub link below!
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
        </div>
        <div className="mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        <FaBookOpen className="mr-2 text-indigo-600" />
        Document Object Model (DOM) Resources
      </h2>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
        Deepen your understanding with these resources:
      </p>
      <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
        <li className="flex items-start">
          <FaLink className="mr-2 mt-1 text-indigo-600" />
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            MDN - Document Object Model (DOM)
          </a>
        </li>
        <li className="flex items-start">
          <FaLink className="mr-2 mt-1 text-indigo-600" />
          <a
            href="https://www.w3schools.com/js/js_htmldom.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            W3Schools - JavaScript HTML DOM
          </a>
        </li>
        <li className="flex items-start">
          <FaLink className="mr-2 mt-1 text-indigo-600" />
          <a
            href="https://javascript.info/dom-nodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            JavaScript.info - DOM Nodes
          </a>
        </li>
        <li className="flex items-start">
          <FaLink className="mr-2 mt-1 text-indigo-600" />
          <a
            href="https://www.freecodecamp.org/news/javascript-dom-tutorial/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            FreeCodeCamp - JavaScript DOM Tutorial
          </a>
        </li>
      </ul>
    </div>
      </section>
    </>
  );
};

export default Dayy6;