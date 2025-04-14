import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaEdit, FaCheckCircle, FaRocket } from "react-icons/fa";

const Date8: React.FC = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);

    // Example Function with Error Handling
    const handleDivide = (a: number, b: number) => {
        try {
            if (b === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return a / b;
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unknown error occurred");
        }
    };

    return (
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
                <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Error Handling & Debugging</h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        Understanding Error Handling
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        Error handling is a crucial aspect of software development that helps manage unexpected behaviors in an application. In JavaScript and TypeScript, errors can occur due to invalid user inputs, network failures, or unexpected data formats. Proper error handling ensures a smooth user experience and prevents application crashes.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                        Effective error handling involves anticipating potential issues, catching them gracefully, and providing meaningful feedback to users or developers. Coupled with robust debugging practices, it allows you to maintain code quality and quickly resolve issues in development and production environments.
                    </p>
                </section>

                {/* Common Types of Errors */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaList className="mr-2 text-indigo-600" />
                        Common Types of Errors
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li>
                            <span className="font-semibold">Syntax Errors:</span> Mistakes in the code structure (e.g., missing brackets, incorrect syntax).
                        </li>
                        <li>
                            <span className="font-semibold">Reference Errors:</span> Trying to access a variable that is not defined.
                        </li>
                        <li>
                            <span className="font-semibold">Type Errors:</span> Using a value in an incorrect way (e.g., calling a non-function).
                        </li>
                        <li>
                            <span className="font-semibold">Logic Errors:</span> Bugs that produce incorrect output without breaking the code.
                        </li>
                        <li>
                            <span className="font-semibold">Runtime Errors:</span> Errors that occur during execution due to unforeseen conditions.
                        </li>
                    </ul>

                    {/* Additional Subtopic: Examples of Errors */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Examples of Errors
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Understanding these errors with examples helps identify them in your code:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                        {`// Syntax Error
console.log("Hello" // Missing closing parenthesis

// Reference Error
console.log(undefinedVariable);

// Type Error
const num = 5;
num();

// Logic Error
function add(a, b) { return a - b; } // Should be a + b

// Runtime Error
fetch("invalid-url");`}
                    </pre>
                </section>

                {/* Handling Errors in JavaScript/TypeScript */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Error Handling Techniques
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li>
                            <span className="font-semibold">Try...Catch:</span> Catches errors in a block of code to prevent application crashes.
                        </li>
                        <li>
                            <span className="font-semibold">Throw Statements:</span> Manually throw errors for better debugging.
                        </li>
                        <li>
                            <span className="font-semibold">Error Boundaries in React:</span> Used to handle component errors gracefully.
                        </li>
                        <li>
                            <span className="font-semibold">Logging Errors:</span> Use <code>console.error</code>, external logging services, or error tracking tools (e.g., Sentry).
                        </li>
                    </ul>

                    {/* Additional Subtopic: Advanced Error Handling */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Advanced Error Handling
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Beyond basic techniques, consider these advanced strategies:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li>
                            <strong>Custom Error Classes:</strong> Create specific error types for better error classification.
                            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                {`class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

try {
    throw new ValidationError("Invalid input");
} catch (err) {
    console.error(err.name, err.message);
}`}
                            </pre>
                        </li>
                        <li>
                            <strong>Async Error Handling:</strong> Use try-catch with async/await for network requests.
                            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                {`async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        if (!response.ok) throw new Error("Network error");
        return await response.json();
    } catch (error) {
        console.error("Fetch failed:", error.message);
    }
}`}
                            </pre>
                        </li>
                    </ul>
                </section>

                {/* Example: Try...Catch in Action */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Code Example: Using Try...Catch
                    </h2>
                    <pre className="bg-gray-800 text-white text-sm sm:text-base p-4 rounded-lg shadow-md overflow-x-auto">
                        <code>
                            {`try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("Execution completed.");
}`}
                        </code>
                    </pre>

                    {/* Additional Subtopic: Error Boundaries */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Error Boundaries in React
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Error boundaries catch errors in React component trees, preventing app crashes:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                        {`class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

const App = () => (
    <ErrorBoundary>
        <ComponentThatMightFail />
    </ErrorBoundary>
);`}
                    </pre>
                </section>

                {/* Debugging Techniques */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Debugging Techniques
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Debugging is the process of identifying and fixing errors. Here are key techniques:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li>
                            <strong>Console Logging:</strong> Use <code>console.log</code>, <code>console.error</code>, and <code>console.table</code> to inspect values.
                        </li>
                        <li>
                            <strong>Browser DevTools:</strong> Utilize breakpoints, call stacks, and network tab in Chrome DevTools.
                        </li>
                        <li>
                            <strong>React Developer Tools:</strong> Debug React component trees and state.
                        </li>
                        <li>
                            <strong>Unit Testing:</strong> Write tests with tools like Jest to catch errors early.
                        </li>
                    </ul>

                    {/* Additional Subtopic: Tools and Strategies */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Debugging Tools and Strategies
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Leverage these tools and strategies for effective debugging:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li>
                            <strong>VS Code Debugger:</strong> Set breakpoints and step through code.
                            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                {`// Add breakpoint in VS Code
function divide(a, b) {
    debugger; // Pauses execution here
    return a / b;
}`}
                            </pre>
                        </li>
                        <li>
                            <strong>Error Tracking Services:</strong> Use Sentry or LogRocket to monitor errors in production.
                        </li>
                    </ul>
                </section>

                {/* Practical Exercise */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaRocket className="mr-2 text-indigo-600" />
                        Practical Exercise: Debug the Code Below
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                        The following code has an intentional bug. Try to fix it by handling the error correctly.
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                        <code>
                            {`function fetchData() {
  const response = fetch("https://api.example.com/data");
  return response.json();
}

console.log(fetchData());`}
                        </code>
                    </pre>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3">
                        💡 Hint: The function is missing an <code>await</code> keyword.
                    </p>

                    {/* Additional Subtopic: Challenge Exercises */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2 flex items-center">
                        <FaRocket className="mr-2 text-indigo-600" />
                        Challenge Exercises
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Test your skills with these challenges. Submit your solutions to a shared repository if instructed:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h4 className="text-md font-semibold text-gray-800 mb-2">Challenge 1: Async Error Boundary</h4>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Fix this async function to handle network errors properly:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            {`async function getUser(id) {
    const response = await fetch(\`https://api.example.com/users/\${id}\`);
    return response.json();
}

getUser(1).then(data => console.log(data));`}
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                            💡 Hint: Add try-catch and check response status.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h4 className="text-md font-semibold text-gray-800 mb-2">Challenge 2: Debug React Component</h4>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Debug this component that crashes when clicking the button:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            {`function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count.push(1));
    return <button onClick={increment}>{count}</button>;
}`}
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                            💡 Hint: Check the increment logic.
                        </p>
                    </div>
                </section>

                {/* Error Display */}
                {error && (
                    <div className="mt-6 p-4 bg-red-200 text-red-800 rounded-lg shadow">
                        <strong>Error:</strong> {error}
                    </div>
                )}

                {/* Conclusion */}
                <section className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        Conclusion
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        Handling errors efficiently improves user experience and code reliability. By using proper debugging techniques and tools, developers can identify and resolve issues quickly. Remember to log errors, use try-catch blocks, and leverage debugging tools to ensure smooth application performance.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Date8;