import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';

const Dayy7: React.FC = () => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  const [hoverMessage, setHoverMessage] = useState('Hover over me!');
  const { userData, userToken } = useAuth();
  
    // State for file upload
    const [submitted, setSubmitted] = useState(false);
  
    const [form, setForm] = useState({
      assignmentId: 6,
      userId: userData?.userDetails.id, // Ensuring a valid initial state
      fileUrl: "",
    });
  
    // Handle file selection
    const handleFileChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const name = e.target.name;
      const value = e.target.value;
      setForm(prev => ({
          ...prev,
          [name]: value
      }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    
      console.log("Form Data:", form);
      // console.log("User Token:", userToken);
    
      if (!userToken) {
        alert("Authentication error. Please log in again.");
        return;
      }
    
      try {
        const response = await fetch("http://localhost:8080/api/v1/assignments/submit", {
          method: "POST",
          headers: { 
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json' 
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

  // Click event handler
  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  // Mouse enter event handler
  const handleMouseEnter = () => {
    setHoverMessage('You hovered over me!');
  };

  // Mouse leave event handler
  const handleMouseLeave = () => {
    setHoverMessage('Hover over me!');
  };

  // Keyboard event handler
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    alert(`You pressed: ${event.key}`);
  };

  // Function to reset the counter
  const resetCount = () => {
    setClickCount(0);
  };

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
          Events & Event Listeners
        </h1>
        <section className="mb-6">
  
  <p className="text-gray-600 mt-2">
    JavaScript allows us to create dynamic, interactive web pages by responding to user actions. 
    This is done using <strong>events</strong> and <strong>event listeners</strong>. 
    Understanding how events work is crucial for creating engaging and responsive applications.
  </p>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">What is an Event?</h3>
  <p className="text-gray-600 mt-2">
    An <strong>event</strong> is an action or occurrence that happens in the browser, such as:
  </p>
  <ul className="list-disc ml-6 text-gray-600">
    <li>Clicking a button</li>
    <li>Hovering over an element</li>
    <li>Typing in an input field</li>
    <li>Scrolling the page</li>
    <li>Loading a webpage</li>
    <li>Pressing a key on the keyboard</li>
  </ul>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">What is an Event Listener?</h3>
  <p className="text-gray-600 mt-2">
    An <strong>event listener</strong> is a function that waits for an event to happen and executes a block of code in response.
    Event listeners help us add interactivity to web pages.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
    {`// Example: Adding a click event listener to a button
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});`}
  </pre>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">Common Event Types</h3>
  <p className="text-gray-600 mt-2">Here are some of the most commonly used events:</p>
  <ul className="list-disc ml-6 text-gray-600">
    <li><b>click</b> - Fired when an element is clicked.</li>
    <li><b>mouseover</b> - Triggered when the mouse hovers over an element.</li>
    <li><b>keydown</b> - Fires when a key is pressed.</li>
    <li><b>keyup</b> - Fires when a key is released.</li>
    <li><b>scroll</b> - Fires when the page is scrolled.</li>
    <li><b>load</b> - Triggered when the page fully loads.</li>
    <li><b>submit</b> - Fired when a form is submitted.</li>
  </ul>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">Why are Events & Event Listeners Important?</h3>
  <p className="text-gray-600 mt-2">
    Event-driven programming is the foundation of modern web applications. With events and event listeners, you can:
  </p>
  <ul className="list-disc ml-6 text-gray-600">
    <li>Handle user input dynamically.</li>
    <li>Create interactive buttons, forms, and animations.</li>
    <li>Improve user experience by responding to actions in real time.</li>
    <li>Control elements without reloading the page.</li>
  </ul>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">Event Handling Methods</h3>
  <p className="text-gray-600 mt-2">
    There are three main ways to handle events in JavaScript:
  </p>
  <ul className="list-disc ml-6 text-gray-600">
    <li><b>Inline Event Handlers</b> - Adding events directly in HTML.</li>
    <li><b>DOM Property Events</b> - Assigning events in JavaScript.</li>
    <li><b>addEventListener()</b> - Using event listeners for better control.</li>
  </ul>

  <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
    {`// Example: Three ways to handle a button click

// 1. Inline Event Handler (not recommended)
<button onclick="alert('Button clicked!')">Click Me</button>

// 2. Using DOM Property
const button = document.getElementById("btn");
button.onclick = function() {
    alert("Button clicked!");
};

// 3. Using addEventListener (recommended)
button.addEventListener("click", function() {
    alert("Button clicked!");
});`}
  </pre>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">Best Practices for Using Event Listeners</h3>
  <ul className="list-disc ml-6 text-gray-600">
    <li>Use <code>addEventListener()</code> instead of inline events for better separation of concerns.</li>
    <li>Remove event listeners when they are no longer needed to avoid memory leaks.</li>
    <li>Use <code>event.preventDefault()</code> to stop default browser actions if necessary.</li>
    <li>Use event delegation for handling multiple child elements efficiently.</li>
  </ul>

  <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
    {`// Example: Preventing default action
document.getElementById("myLink").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Link clicked, but default action prevented!");
});

// Example: Event Delegation
document.getElementById("parentDiv").addEventListener("click", function(event) {
    if (event.target.matches(".child")) {
        alert("Child element clicked!");
    }
});`}
  </pre>

  {/* <h3 className="text-lg font-semibold text-gray-700 mt-4">Conclusion</h3>
  <p className="text-gray-600 mt-2">
    Understanding events and event listeners is essential for building interactive websites. 
    Practice using different event types, explore <code>addEventListener()</code>, 
    and experiment with handling user interactions effectively.
  </p> */}
</section>


        {/* Click Event Example */}
        <div className="mb-6 p-6 bg-gray-100 rounded-md shadow-md text-center">
  <h3 className="text-lg font-semibold text-gray-700">Interactive Button Click Example</h3>
  <p className="mt-2 text-gray-600">
    Click the button below to see how event listeners work in action. Each time you click, 
    the counter will increase, demonstrating how we can dynamically update the UI using JavaScript.
  </p>

  <div className="flex justify-center items-center mt-4">
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                 hover:bg-blue-700 transition duration-300 transform hover:scale-105 active:scale-95"
    >
      Click Me
    </button>
  </div>

  <p className="mt-4 text-gray-700 font-medium">
    Button clicked: <span className="text-blue-600 font-bold">{clickCount}</span> times
  </p>

  {/* Reset Button for Enhanced User Experience */}
  <button
    onClick={resetCount}
    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 
               transition duration-300 text-sm"
  >
    Reset Counter
  </button>

  <h4 className="mt-6 text-md font-semibold text-gray-700">How It Works</h4>
  <p className="mt-2 text-gray-600">
    Every time you click the button, the event listener attached to it triggers the 
    <code className="bg-gray-200 px-1 rounded">handleClick</code> function, which updates 
    the state and re-renders the component with the new count. The <strong>Reset</strong> button 
    allows you to start over by resetting the counter.
  </p>
</div>

{/* other examples */}
    <p className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase p-3 rounded-md ">
        See other examples of events on Mouse & Keyboard
    </p>


        {/* Mouse Events Example */}
<div
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  className="mb-6 p-6 bg-yellow-100 rounded-md shadow-md text-center cursor-pointer 
             transition duration-300 hover:bg-yellow-200"
>
  <h3 className="text-lg font-semibold text-gray-800">Mouse Events Demonstration</h3>
  <p className="mt-2 text-gray-700">
    Hover over this box to see how the <code>onMouseEnter</code> and <code>onMouseLeave</code> events work.
  </p>
  <p className="mt-4 text-gray-900 font-semibold">{hoverMessage}</p>
</div>


        {/* Keyboard Event Example */}
<div className="mb-6 p-6 bg-green-100 rounded-md shadow-md text-center">
  <h3 className="text-lg font-semibold text-gray-800">Keyboard Event Demonstration</h3>
  <p className="mt-2 text-gray-700">
    Type something below and observe how the <code>onKeyDown</code> event works in real-time.
  </p>

  <input
    type="text"
    onKeyDown={handleKeyDown}
    placeholder="Press any key..."
    className="mt-3 px-4 py-2 w-full max-w-md border border-gray-300 rounded-md 
               focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent 
               transition duration-200 text-gray-800"
  />

  <p className="mt-4 text-gray-900 font-semibold">Press any key to trigger an alert!</p>
</div>

{/* practical exercise */}
{/* Practical Exercise */}
<section className="mb-6 bg-gray-100 p-6 rounded-lg shadow-md">
  <h2 className="text-xl text-center uppercase font-semibold text-gray-700">🚀 Practical Exercise: JavaScript Event Listeners</h2>
  
  <p className="text-gray-600 mt-2">
    In this exercise, you will learn how to make web elements respond to user interactions using the <code>addEventListener()</code> method. Follow the guide below to complete the challenge.
  </p>

  {/* Step 1: Understanding Event Listeners */}
  <h3 className="text-lg font-semibold text-gray-700 mt-4">🔹 Step 1: Understanding Event Listeners</h3>
  <p className="text-gray-600 mt-2">
    An event listener waits for a specific user action, such as a click, keypress, or mouse movement, and triggers a function when that action occurs.
  </p>

  {/* Step 2: Setting Up the HTML Structure */}
  <h3 className="text-lg font-semibold text-gray-700 mt-4">🔹 Step 2: Setting Up the HTML Structure</h3>
  <p className="text-gray-600 mt-2">Create a simple webpage with the following elements:</p>
  <ul className="list-disc ml-6 text-gray-600">
    <li>An input field where users can type text.</li>
    <li>A button that changes text when clicked.</li>
    <li>A second button that changes the background color of a div.</li>
    <li>A third button that adds a new paragraph dynamically.</li>
  </ul>

  {/* Step 3: Implementing JavaScript Event Listeners */}
  <h3 className="text-lg font-semibold text-gray-700 mt-4">🔹 Step 3: Implementing JavaScript Event Listeners</h3>
  <p className="text-gray-600 mt-2">
    Write JavaScript to handle the following events:
  </p>
  
  {/* Task 1: Click Event on an Input Field */}
  <h4 className="text-md font-semibold text-gray-700 mt-3">📌 Task 1: Click Event on an Input Field</h4>
  <p className="text-gray-600">
    When the user clicks inside the input field, an alert should appear.
  </p>
  <pre className="bg-gray-800 text-white p-3 rounded-md text-sm mt-2">
    {`const inputField = document.getElementById("user-input");

inputField.addEventListener("click", function() {
  alert("You clicked inside the input field!");
});`}
  </pre>

  {/* Task 2: Button Click Event */}
  <h4 className="text-md font-semibold text-gray-700 mt-3">📌 Task 2: Button Click Event</h4>
  <p className="text-gray-600">
    Clicking the button should change its text.
  </p>
  <pre className="bg-gray-800 text-white p-3 rounded-md text-sm mt-2">
    {`const changeTextButton = document.getElementById("change-text-btn");

changeTextButton.addEventListener("click", function() {
  changeTextButton.innerText = "Clicked!";
});`}
  </pre>

  {/* Task 3: Keydown Event */}
  <h4 className="text-md font-semibold text-gray-700 mt-3">📌 Task 3: Keydown Event in the Input Field</h4>
  <p className="text-gray-600">
    When a user types in the input field, log the key they pressed to the console.
  </p>
  <pre className="bg-gray-800 text-white p-3 rounded-md text-sm mt-2">
    {`const userInput = document.getElementById("user-input");

userInput.addEventListener("keydown", function(event) {
  console.log("Key pressed:", event.key);
});`}
  </pre>

  {/* Task 4: Changing Background Color */}
  <h4 className="text-md font-semibold text-gray-700 mt-3">📌 Task 4: Change Background Color on Click</h4>
  <p className="text-gray-600">
    Clicking the button should change the background color of a div.
  </p>
  <pre className="bg-gray-800 text-white p-3 rounded-md text-sm mt-2">
    {`const colorButton = document.getElementById("color-btn");
const box = document.getElementById("color-box");

colorButton.addEventListener("click", function() {
  box.style.backgroundColor = "lightblue";
});`}
  </pre>

  {/* Task 5: Appending a New Paragraph */}
  <h4 className="text-md font-semibold text-gray-700 mt-3">📌 Task 5: Append a New Paragraph on Click</h4>
  <p className="text-gray-600">
    Clicking the button should add a new paragraph to the page.
  </p>
  <pre className="bg-gray-800 text-white p-3 rounded-md text-sm mt-2">
    {`const addParagraphButton = document.getElementById("add-paragraph-btn");
const container = document.getElementById("content");

addParagraphButton.addEventListener("click", function() {
  const newParagraph = document.createElement("p");
  newParagraph.innerText = "This is a new paragraph!";
  container.appendChild(newParagraph);
});`}
  </pre>
  <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    <textarea
                        name = 'fileUrl'
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={6}
                        placeholder="Paste your github link"
                        value={form.fileUrl}
                        onChange={handleFileChange}
                    />
                    <button 
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
                    >
                        Submit Exercise
                    </button>
                </form>
                {submitted && (
                    <p className="text-green-600 font-medium">Your exercise has been submitted successfully!</p>
                )}

  {/* Bonus Challenge */}
  <section className="mb-6 mt-4 bg-gray-100 p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold uppercase text-gray-700 mb-3 mt-4">✨ Bonus Challenge (Optional)</h3>
    <p className="text-gray-600">
        Try adding event listeners for:
    </p>
    <ul className="list-disc ml-6 text-gray-600">
        <li>Changing the text color of a paragraph when hovered.</li>
        <li>Displaying an alert when a user double-clicks a button.</li>
        <li>Resetting the button text when clicked twice.</li>
    </ul>
  </section>

</section>

{/* Conclusion */}
<section className="mb-6 bg-gray-100 p-6 rounded-lg shadow-md">
  <h2 className="text-xl text-center uppercase font-semibold text-gray-700">🎯 Conclusion</h2>

  <p className="text-gray-600 mt-2">
    Mastering JavaScript events and event listeners is a crucial skill for creating **interactive and dynamic web applications**. Events allow web pages to respond to user actions, enhancing the overall user experience.
  </p>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">🔹 Key Takeaways</h3>
  <ul className="list-disc ml-6 text-gray-600">
    <li>Events represent user interactions like **clicks, keypresses, hovers, and form submissions**.</li>
    <li>The <code>addEventListener()</code> method is used to attach event handlers to elements efficiently.</li>
    <li>Event-driven programming enables real-time responses to user actions.</li>
    <li>Understanding event propagation (bubbling and capturing) helps prevent unexpected behaviors.</li>
  </ul>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">🚀 Next Steps</h3>
  <p className="text-gray-600">
    Now that you have a solid understanding of event listeners, try exploring:
  </p>
  <ul className="list-disc ml-6 text-gray-600">
    <li>**Advanced event handling techniques** like debouncing and throttling.</li>
    <li>**Event delegation**, which helps optimize performance for dynamically added elements.</li>
    <li>**JavaScript frameworks (React, Vue, Angular)** that simplify event management.</li>
  </ul>

  <p className="text-gray-600 mt-4">
    Keep experimenting with different event types and handlers to **deepen your understanding** and become more proficient in building interactive web applications. 🚀
  </p>
</section>


      </section>
    </>
  );
};

export default Dayy7;
