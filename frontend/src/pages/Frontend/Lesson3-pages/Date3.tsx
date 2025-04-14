import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaLink, FaEdit, FaCheckCircle, FaRocket } from "react-icons/fa";

const Date3: React.FC = () => {
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

                {/* Title */}
                <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center justify-center">
                    <FaLaptopCode className="mr-3 text-2xl" />
                    <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Event Handling & Conditional Rendering</h1>
                </div>

                <div className="p-4 sm:p-6">
                    {/* Introduction */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaEdit className="mr-2 text-indigo-600" />
                            ⚡ Mastering React: Event Handling & Conditional Rendering
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            React makes handling events and rendering content conditionally a seamless experience. Events in React work similarly to JavaScript events, but with a consistent JSX syntax. Conditional rendering, on the other hand, allows components to display different UI elements based on certain conditions.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Event handling enables user interactions—like clicks, form submissions, or key presses—to trigger updates in your application. React’s approach simplifies this by integrating event listeners directly into JSX, using camelCase naming conventions and function references. Understanding how events propagate and how to manage them efficiently is key to building responsive UIs.
                        </p>
                    </section>

                    {/* Event Handling */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            🎯 Event Handling in React
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Event handling in React follows a declarative approach, where event listeners are added directly to JSX elements using camelCase syntax. For example, handling a button click looks like this:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`<button onClick={handleClick}>Click Me</button>`}
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                            Unlike traditional HTML, React event handlers are passed functions instead of string event handlers. This ensures cleaner and more predictable code. React events are synthetic, wrapping native DOM events to provide consistent behavior across browsers.
                        </p>

                        {/* Additional Content: Event Types and Handling */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaList className="mr-2 text-indigo-600" />
                            Common Event Types
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            React supports a variety of event types, mirroring native JavaScript events. Here are some commonly used ones:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4 space-y-2">
                            <li>
                                <strong>onClick:</strong> Triggered by mouse clicks (e.g., buttons, links).
                            </li>
                            <li>
                                <strong>onChange:</strong> Fired when an input’s value changes (e.g., text fields, checkboxes).
                            </li>
                            <li>
                                <strong>onSubmit:</strong> Called when a form is submitted.
                            </li>
                            <li>
                                <strong>onMouseOver:</strong> Triggered when the mouse hovers over an element.
                            </li>
                            <li>
                                <strong>onKeyDown:</strong> Fired when a key is pressed (e.g., for keyboard navigation).
                            </li>
                        </ul>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Event Object and Parameters
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Event handlers in React receive a synthetic event object, which provides details about the event (e.g., target, type). You can also pass additional parameters to handlers:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`function handleClick(event, message) {
  console.log("Button clicked:", event.target);
  console.log("Message:", message);
}

<button onClick={(e) => handleClick(e, "Hello!")}>Click Me</button>`}
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            The event object (`e`) includes properties like `target` (the element triggering the event), `type` (event type), and methods like `preventDefault()` to stop default behavior (e.g., form submission).
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Preventing Default Behavior
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Use `event.preventDefault()` to stop default browser actions, such as preventing a form from refreshing the page:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`function handleSubmit(event) {
  event.preventDefault();
  console.log("Form submitted without refresh!");
}

<form onSubmit={handleSubmit}>
  <input type="text" />
  <button type="submit">Submit</button>
</form>`}
                        </pre>
                    </section>

                    {/* Conditional Rendering */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            🔀 Conditional Rendering in React
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Conditional rendering enables components to decide what to render based on dynamic conditions. There are multiple ways to achieve conditional rendering in React, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4 leading-relaxed space-y-2">
                            <li>
                                <strong>If-Else Statements:</strong> Using standard JavaScript if-else inside functions.
                            </li>
                            <li>
                                <strong>Ternary Operators:</strong> `{`condition ? <ComponentA /> : <ComponentB />`}` for inline conditions.
                            </li>
                            <li>
                                <strong>Logical AND (`&&`) Operators:</strong> `{`condition && <Component />`}` for simple conditional rendering.
                            </li>
                        </ul>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                            Example of a button that toggles visibility using conditional rendering:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`const [isVisible, setIsVisible] = useState(false);

return (
    <div>
        <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
        {isVisible && <p>Hello, I am visible!</p>}
    </div>
);`}
                        </pre>

                        {/* Additional Content: Advanced Conditional Rendering */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Advanced Techniques
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Beyond basic methods, you can use switch statements or early returns for more complex logic:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`function StatusIndicator({ status }) {
  switch (status) {
    case 'loading':
      return <p>Loading...</p>;
    case 'success':
      return <p>Data loaded successfully!</p>;
    case 'error':
      return <p>Error occurred!</p>;
    default:
      return null;
  }
}`}
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Early returns can simplify components by exiting early when conditions aren’t met, reducing nesting:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`function UserProfile({ user }) {
  if (!user) return <p>No user data available.</p>;
  return <div>Name: {user.name}</div>;
}`}
                        </pre>
                    </section>

                    {/* Further Resources */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaLink className="mr-2 text-indigo-600" />
                            📚 Further Resources
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Here are some additional resources to deepen your understanding of event handling and conditional rendering in React:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                            <li>
                                <a
                                    href="https://react.dev/learn/responding-to-events"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    React Docs - Handling Events
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://react.dev/learn/conditional-rendering"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    React Docs - Conditional Rendering
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/Events"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    MDN Web Docs - Events in JavaScript
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.freecodecamp.org/news/react-conditional-rendering-patterns/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    FreeCodeCamp - Conditional Rendering in React
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/watch?v=9U3IhLAnb9M"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    YouTube: Event Handling in React (Video Tutorial)
                                </a>
                            </li>
                        </ul>
                    </section>

                    {/* Conclusion */}
                    <section className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCheckCircle className="mr-2 text-indigo-600" />
                            🚀 Wrapping Up
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Mastering event handling and conditional rendering is essential for building interactive React applications. Events allow users to interact with the app, while conditional rendering ensures dynamic UI changes based on state or props. Keep practicing to strengthen your React skills! 🎉
                        </p>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Date3;