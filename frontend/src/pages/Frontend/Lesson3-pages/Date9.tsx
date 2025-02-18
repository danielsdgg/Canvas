import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Date9: React.FC = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");

  // Example function with TypeScript types
  const greetUser = (name: string): string => {
    return `Hello, ${name}! Welcome to React with TypeScript.`;
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
        React with TypeScript (TSX)
      </h1>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Why Use TypeScript with React?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          TypeScript is a powerful superset of JavaScript that introduces static
          typing, improving code quality, maintainability, and developer
          productivity. When used with React, TypeScript helps catch errors
          early and enhances code readability.
        </p>
      </section>

      {/* Benefits of TypeScript in React */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Key Benefits of TypeScript in React
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            <span className="font-semibold">Static Typing:</span> Detects errors
            during development instead of runtime.
          </li>
          <li>
            <span className="font-semibold">Better Code Completion:</span> Helps
            with auto-suggestions and IntelliSense.
          </li>
          <li>
            <span className="font-semibold">Improved Documentation:</span>{" "}
            Clearly defines expected data structures.
          </li>
          <li>
            <span className="font-semibold">Enhanced Refactoring:</span> Makes
            it easier to update code safely.
          </li>
        </ul>
      </section>

      {/* TypeScript Basics for React */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          TypeScript Basics in React
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            <span className="font-semibold">Type Annotations:</span> Explicitly
            defining variable types.
          </li>
          <li>
            <span className="font-semibold">Interfaces:</span> Defining the
            shape of objects and components.
          </li>
          <li>
            <span className="font-semibold">Props & State:</span> Adding type
            safety to component props and state.
          </li>
          <li>
            <span className="font-semibold">Hooks with TypeScript:</span>{" "}
            Ensuring proper types with useState, useEffect, etc.
          </li>
        </ul>
      </section>

      {/* Code Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Code Example: TypeScript in a React Component
        </h2>
        <pre className="bg-gray-800 text-white text-sm p-4 rounded-lg overflow-auto">
          <code>
            {`import React, { useState } from 'react';

interface UserProps {
  name: string;
}

const Welcome: React.FC<UserProps> = ({ name }) => {
  return <h2>Welcome, {name}!</h2>;
};

const App: React.FC = () => {
  const [user, setUser] = useState<string>('Daniel');

  return <Welcome name={user} />;
};

export default App;`}
          </code>
        </pre>
      </section>

      {/* Practical Exercise */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Practical Exercise: Fix the Type Errors
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Below is a React component with incorrect TypeScript typings. Your
          task is to fix the errors and make the code type-safe.
        </p>
        <pre className="bg-gray-800 text-white text-sm p-4 rounded-lg overflow-auto">
          <code>
            {`import React, { useState } from 'react';

const UserProfile = ({ name, age }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

const App = () => {
  const [username, setUsername] = useState(null);

  return <UserProfile name={username} age="25" />;
};

export default App;`}
          </code>
        </pre>
        <p className="text-gray-700 leading-relaxed mt-3">
          💡 **Hint:**  
          - Define an **interface** for `UserProfile` props.  
          - Add **TypeScript types** to the `useState` hook.  
          - Fix incorrect types in the `age` prop.
        </p>
      </section>

      {/* Interactive Message */}
      <div className="mt-6 flex flex-col items-center">
        <button
          onClick={() => setMessage(greetUser("Daniel"))}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          Click to See a TypeScript Greeting
        </button>
        {message && (
          <p className="mt-4 p-3 bg-green-200 text-green-800 rounded-lg shadow">
            {message}
          </p>
        )}
      </div>

      {/* Conclusion */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">
          React with TypeScript provides a powerful way to build scalable,
          error-free applications. By using TypeScript's type safety, you can
          prevent common runtime errors and improve code maintainability. Start
          by adding types to your props, state, and functions, and gradually
          refactor your code to be fully type-safe!
        </p>
      </section>
    </section>
  );
};

export default Date9;
