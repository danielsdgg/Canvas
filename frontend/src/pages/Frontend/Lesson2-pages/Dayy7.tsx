import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCode,
  FaLaptopCode,
  FaEdit,
  FaBookOpen,
  FaLink
} from "react-icons/fa";

const Dayy7: React.FC = () => {
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

        {/* Section Heading */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaLaptopCode className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Events and Event Listeners</h1>
        </div>

          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Events and event listeners are the heartbeat of interactive web applications. They allow JavaScript to respond to user actions—like clicks, keypresses, or mouse movements—transforming static pages into dynamic experiences. Without events, websites would be lifeless; with them, you can create everything from simple button responses to complex real-time interfaces.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Building on the DOM from Day 6, events tie JavaScript logic to user interactions. Whether it’s validating a form, animating an element, or fetching data on scroll, mastering events is essential for modern web development. Today, we’ll explore how they work and how to wield them effectively.
            </p>
          </div>

          {/* Events and Listeners Essentials */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Events and Listeners Essentials
            </h2>
            <div className="space-y-6">
              {/* What Are Events? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What Are Events?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Events are actions or occurrences in the browser—user-driven (e.g., clicking) or system-driven (e.g., page loading). They’re signals that something has happened, ready for JavaScript to respond.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// Examples of events
window.onload = () => console.log("Page loaded!"); // System event
document.querySelector("button").onclick = () => console.log("Clicked!"); // User event`}
                </pre>
              </div>

              {/* What Are Event Listeners? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. What Are Event Listeners?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Event listeners are functions that “listen” for specific events on DOM elements and execute code when triggered. The <code>addEventListener</code> method is the modern way to attach them.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  alert("Button clicked!");
});`}
                </pre>
              </div>

              {/* Common Event Types */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Common Event Types
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  JavaScript supports a wide range of events, categorized by their triggers—mouse, keyboard, form, window, etc.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// Mouse event
document.querySelector("div").addEventListener("mouseover", () => console.log("Hovered!"));

// Keyboard event
document.querySelector("input").addEventListener("keydown", (e) => console.log(e.key));

// Form event
document.querySelector("form").addEventListener("submit", (e) => e.preventDefault());

// Window event
window.addEventListener("resize", () => console.log("Window resized!"));`}
                </pre>
              </div>

              {/* Event Object */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. The Event Object
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Every event listener receives an <code>event</code> object, packed with details like the target element, key pressed, or mouse coordinates.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`document.querySelector("button").addEventListener("click", (e) => {
  console.log(e.target); // The clicked button
  console.log(e.type);   // "click"
  console.log(e.timeStamp); // Time since page load
});`}
                </pre>
              </div>

              {/* Event Propagation */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  5. Event Propagation
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Events “bubble” up or “capture” down the DOM tree. Bubbling (default) goes from the target to the root; capturing goes from root to target.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// HTML: <div><button>Click</button></div>
document.querySelector("div").addEventListener("click", () => console.log("Div clicked!"));
document.querySelector("button").addEventListener("click", (e) => {
  console.log("Button clicked!");
  e.stopPropagation(); // Stops bubbling
}, { capture: false }); // Default bubbling`}
                </pre>
              </div>

              {/* Event Handling Techniques */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  6. Event Handling Techniques
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  You can handle events inline, via properties, or with listeners—each with pros and cons.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// Inline (HTML): <button onclick="alert('Clicked!')">Click</button>

// Property
const btn1 = document.querySelector("#btn1");
btn1.onclick = () => alert("Clicked via property!");

// Listener (Best Practice)
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => alert("Clicked via listener!"));`}
                </pre>
              </div>

              {/* Event Delegation */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  7. Event Delegation
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Instead of adding listeners to every child, delegate them to a parent—efficient for dynamic content.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// HTML: <ul id="list"><li>Item 1</li><li>Item 2</li></ul>
document.querySelector("#list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});`}
                </pre>
              </div>

              {/* Preventing Default Behavior */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  8. Preventing Default Behavior
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Use <code>preventDefault()</code> to stop browser defaults, like form submissions or link navigation.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submission stopped!");
});`}
                </pre>
              </div>

              {/* Custom Events */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  9. Custom Events
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Create and dispatch your own events for custom interactions or communication between components.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const myEvent = new Event("customEvent");
document.addEventListener("customEvent", () => console.log("Custom event fired!"));
document.dispatchEvent(myEvent);`}
                </pre>
              </div>
            </div>
          </div>

          {/* <div className="mb-8">
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
                Submit Notes
              </button>
            </form>
            {submitted && (
              <p className="mt-4 text-green-600 font-medium flex items-center">
                <FaCheckCircle className="mr-2" />
                Your notes have been submitted successfully!
              </p>
            )}
          </div> */}
          <div className="mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        <FaBookOpen className="mr-2 text-indigo-600" />
        JavaScript Events & Event Listeners
      </h2>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
        Enhance your knowledge of events and event listeners with these resources:
      </p>
      <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
        <li className="flex items-start">
          <FaLink className="mr-2 mt-1 text-indigo-600" />
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            MDN - Introduction to Events
          </a>
        </li>
        <li className="flex items-start">
          <FaLink className="mr-2 mt-1 text-indigo-600" />
          <a
            href="https://www.w3schools.com/js/js_events.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            W3Schools - JavaScript Events
          </a>
        </li>
        <li className="flex items-start">
          <FaLink className="mr-2 mt-1 text-indigo-600" />
          <a
            href="https://javascript.info/introduction-browser-events"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            JavaScript.info - Introduction to Browser Events
          </a>
        </li>
        <li className="flex items-start">
          <FaLink className="mr-2 mt-1 text-indigo-600" />
          <a
            href="https://www.freecodecamp.org/news/javascript-event-listeners/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            FreeCodeCamp - JavaScript Event Listeners
          </a>
        </li>
      </ul>
    </div>

      </section>
    </>
  );
};

export default Dayy7;