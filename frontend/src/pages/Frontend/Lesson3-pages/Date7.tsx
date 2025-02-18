import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Date7: React.FC = () => {
  const navigate = useNavigate();

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
        Global State Management (Context API)
      </h1>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          What is Global State Management?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          In React, global state management allows data to be shared across
          multiple components without the need for prop drilling. The{" "}
          <span className="font-semibold">Context API</span> is a built-in
          feature that provides a way to manage global state efficiently without
          relying on third-party libraries like Redux or Zustand.
        </p>
      </section>

      {/* Benefits of Context API */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Why Use Context API?
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            <span className="font-semibold">Avoids Prop Drilling:</span> Pass
            data directly to components without unnecessary intermediate props.
          </li>
          <li>
            <span className="font-semibold">Improves Code Readability:</span>{" "}
            Centralized state management makes code cleaner and more
            maintainable.
          </li>
          <li>
            <span className="font-semibold">Lightweight:</span> Unlike Redux,
            it does not require extra dependencies.
          </li>
          <li>
            <span className="font-semibold">Efficient:</span> Reduces
            unnecessary re-renders when used with the{" "}
            <span className="font-semibold">useContext</span> hook.
          </li>
        </ul>
      </section>

      {/* Steps to Implement Context API */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          How to Implement Context API in React
        </h2>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed">
          <li>
            Create a Context using <code>React.createContext()</code>.
          </li>
          <li>
            Wrap the application (or required components) with a{" "}
            <code>Context.Provider</code>.
          </li>
          <li>
            Use <code>useContext</code> hook to consume the state in components.
          </li>
        </ol>
      </section>

      {/* Code Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Code Example: Using Context API
        </h2>
        <pre className="bg-gray-800 text-white text-sm p-4 rounded-lg overflow-auto">
          <code>
            {`// 1. Create the Context
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

// 2. Create a Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("John Doe");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Consume the Context in a Component
const Profile = () => {
  const { user } = useContext(UserContext);
  return <h1>Welcome, {user}!</h1>;
};

// 4. Wrap Components with Provider in App.js
const App = () => (
  <UserProvider>
    <Profile />
  </UserProvider>
);

export default App;`}
          </code>
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Best Practices for Using Context API
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            Use Context API for global state that multiple components need to
            access.
          </li>
          <li>
            Avoid using Context for frequently changing values (use state
            instead).
          </li>
          <li>
            Use multiple contexts to separate concerns (e.g., AuthContext,
            ThemeContext).
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Conclusion
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The Context API is a powerful tool in React for managing global state
          without the complexity of external libraries. By following best
          practices, developers can efficiently manage state while keeping their
          code clean and maintainable.
        </p>
      </section>
    </section>
  );
};

export default Date7;
