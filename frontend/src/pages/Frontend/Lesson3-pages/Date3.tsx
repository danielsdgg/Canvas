import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Date3: React.FC = () => {
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
                Event Handling & Conditional Rendering
            </h1>

                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">⚡ Mastering React: Event Handling & Conditional Rendering</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        React makes handling events and rendering content conditionally a seamless experience. Events in React work similarly to JavaScript events, but with a consistent JSX syntax. Conditional rendering, on the other hand, allows components to display different UI elements based on certain conditions.
                    </p>
                </section>

                {/* Event Handling */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">🎯 Event Handling in React</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Event handling in React follows a declarative approach, where event listeners are added directly to JSX elements using camelCase syntax. For example, handling a button click looks like this:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-gray-800 shadow-md mb-4">
                        {`<button onClick={handleClick}>Click Me</button>`}
                    </pre>
                    <p className="text-gray-700 leading-relaxed">
                        Unlike traditional HTML, React event handlers are passed functions instead of string event handlers. This ensures cleaner and more predictable code.
                    </p>
                </section>

                {/* Conditional Rendering */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">🔀 Conditional Rendering in React</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Conditional rendering enables components to decide what to render based on dynamic conditions. There are multiple ways to achieve conditional rendering in React, including:
                    </p>

                    <ul className="list-disc list-inside text-gray-700 mb-4 leading-relaxed">
                        <li><strong>If-Else Statements:</strong> Using standard JavaScript if-else inside functions.</li>
                        <li><strong>Ternary Operators:</strong> `{`condition ? <ComponentA /> : <ComponentB />`}` for inline conditions.</li>
                        <li><strong>Logical AND (`&&`) Operators:</strong> `{`condition && <Component />`}` for simple conditional rendering.</li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed">
                        Example of a button that toggles visibility using conditional rendering:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-gray-800 shadow-md">
                        {`const [isVisible, setIsVisible] = useState(false);

return (
    <div>
        <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
        {isVisible && <p>Hello, I am visible!</p>}
    </div>
);`}
                    </pre>
                </section>

                {/* Further Resources */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">📚 Further Resources</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Here are some additional resources to deepen your understanding of event handling and conditional rendering in React:
                    </p>

                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li>
                            <a href="https://react.dev/learn/responding-to-events" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                React Docs - Handling Events
                            </a>
                        </li>
                        <li>
                            <a href="https://react.dev/learn/conditional-rendering" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                React Docs - Conditional Rendering
                            </a>
                        </li>
                        <li>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/Events" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                MDN Web Docs - Events in JavaScript
                            </a>
                        </li>
                        <li>
                            <a href="https://www.freecodecamp.org/news/react-conditional-rendering-patterns/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                FreeCodeCamp - Conditional Rendering in React
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=9U3IhLAnb9M" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                YouTube: Event Handling in React (Video Tutorial)
                            </a>
                        </li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">🚀 Wrapping Up</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Mastering event handling and conditional rendering is essential for building interactive React applications. Events allow users to interact with the app, while conditional rendering ensures dynamic UI changes based on state or props. Keep practicing to strengthen your React skills! 🎉
                    </p>
                </section>
            </section>
        </>
    );
};

export default Date3;
