import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

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
        Error Handling & Debugging
      </h1>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Understanding Error Handling
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Error handling is a crucial aspect of software development that helps
          manage unexpected behaviors in an application. In JavaScript and
          TypeScript, errors can occur due to invalid user inputs, network
          failures, or unexpected data formats. Proper error handling ensures a
          smooth user experience and prevents application crashes.
        </p>
      </section>

      {/* Common Types of Errors */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Common Types of Errors
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            <span className="font-semibold">Syntax Errors:</span> Mistakes in
            the code structure (e.g., missing brackets, incorrect syntax).
          </li>
          <li>
            <span className="font-semibold">Reference Errors:</span> Trying to
            access a variable that is not defined.
          </li>
          <li>
            <span className="font-semibold">Type Errors:</span> Using a value in
            an incorrect way (e.g., calling a non-function).
          </li>
          <li>
            <span className="font-semibold">Logic Errors:</span> Bugs that
            produce incorrect output without breaking the code.
          </li>
          <li>
            <span className="font-semibold">Runtime Errors:</span> Errors that
            occur during execution due to unforeseen conditions.
          </li>
        </ul>
      </section>

      {/* Handling Errors in JavaScript/TypeScript */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Error Handling Techniques
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            <span className="font-semibold">Try...Catch:</span> Catches errors
            in a block of code to prevent application crashes.
          </li>
          <li>
            <span className="font-semibold">Throw Statements:</span> Manually
            throw errors for better debugging.
          </li>
          <li>
            <span className="font-semibold">Error Boundaries in React:</span>{" "}
            Used to handle component errors gracefully.
          </li>
          <li>
            <span className="font-semibold">Logging Errors:</span> Use{" "}
            <code>console.error</code>, external logging services, or error
            tracking tools (e.g., Sentry).
          </li>
        </ul>
      </section>

      {/* Example: Try...Catch in Action */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Code Example: Using Try...Catch
        </h2>
        <pre className="bg-gray-800 text-white text-sm p-4 rounded-lg overflow-auto">
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
      </section>

      {/* Practical Exercise */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Practical Exercise: Debug the Code Below
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          The following code has an intentional bug. Try to fix it by handling
          the error correctly.
        </p>
        <pre className="bg-gray-800 text-white text-sm p-4 rounded-lg overflow-auto">
          <code>
            {`function fetchData() {
  const response = fetch("https://api.example.com/data");
  return response.json();
}

console.log(fetchData());`}
          </code>
        </pre>
        <p className="text-gray-700 leading-relaxed mt-3">
          💡 Hint: The function is missing an <code>await</code> keyword.
        </p>
      </section>

      {/* Error Display */}
      {error && (
        <div className="mt-6 p-4 bg-red-200 text-red-800 rounded-lg shadow">
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Conclusion */}
      <section>
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Conclusion
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Handling errors efficiently improves user experience and code
          reliability. By using proper debugging techniques and tools, developers
          can identify and resolve issues quickly. Remember to log errors, use
          try-catch blocks, and leverage debugging tools to ensure smooth
          application performance.
        </p>
      </section>
    </section>
  );
};

export default Date8;
