import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaLink, FaEdit, FaCheckCircle, FaRocket } from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Date7: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();

    // State for GitHub submission
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        assignmentId: 7,
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
                <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Global State Management (Context API)</h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        What is Global State Management?
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        In React, global state management allows data to be shared across multiple components without the need for prop drilling. The <span className="font-semibold">Context API</span> is a built-in feature that provides a way to manage global state efficiently without relying on third-party libraries like Redux or Zustand.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        The Context API addresses the challenge of passing data through many layers of components by creating a centralized "context" that any component can access. It’s particularly useful for data like user authentication status, themes, or app-wide settings that need to be available globally.
                    </p>
                </section>

                {/* Benefits of Context API */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        Why Use Context API?
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li>
                            <span className="font-semibold">Avoids Prop Drilling:</span> Pass data directly to components without unnecessary intermediate props.
                        </li>
                        <li>
                            <span className="font-semibold">Improves Code Readability:</span> Centralized state management makes code cleaner and more maintainable.
                        </li>
                        <li>
                            <span className="font-semibold">Lightweight:</span> Unlike Redux, it does not require extra dependencies.
                        </li>
                        <li>
                            <span className="font-semibold">Efficient:</span> Reduces unnecessary re-renders when used with the <span className="font-semibold">useContext</span> hook.
                        </li>
                    </ul>

                    {/* Additional Subtopic: When to Use Context API */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        When to Use Context API
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Context API shines in scenarios where state needs to be accessed by multiple components at different levels of the component tree. Examples include:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li>User authentication status across an app.</li>
                        <li>Theme preferences (e.g., dark mode).</li>
                        <li>Language settings for internationalization.</li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                        However, for complex state logic or large-scale apps, consider integrating it with tools like <code>useReducer</code> or external libraries.
                    </p>
                </section>

                {/* Steps to Implement Context API */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaList className="mr-2 text-indigo-600" />
                        How to Implement Context API in React
                    </h2>
                    <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li>Create a Context using <code>React.createContext()</code>.</li>
                        <li>Wrap the application (or required components) with a <code>Context.Provider</code>.</li>
                        <li>Use <code>useContext</code> hook to consume the state in components.</li>
                    </ol>

                    {/* Additional Subtopic: Combining with Hooks */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Combining Context with Hooks
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Enhance Context API with <code>useState</code> or <code>useReducer</code> for dynamic state updates:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                        {`const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};`}
                    </pre>
                </section>

                {/* Code Example */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Code Example: Using Context API
                    </h2>
                    <pre className="bg-gray-800 text-white text-sm sm:text-base p-4 rounded-lg shadow-md overflow-x-auto">
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
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        Best Practices for Using Context API
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li>Use Context API for global state that multiple components need to access.</li>
                        <li>Avoid using Context for frequently changing values (use state instead).</li>
                        <li>Use multiple contexts to separate concerns (e.g., AuthContext, ThemeContext).</li>
                    </ul>

                    {/* Additional Subtopic: Performance Considerations */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Performance Considerations
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Context API triggers re-renders of all consuming components when the context value changes. To optimize:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li>Split contexts to isolate unrelated state updates.</li>
                        <li>Use memoization (e.g., <code>React.memo</code>) to prevent unnecessary re-renders.</li>
                    </ul>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-4">
                        {`const Component = React.memo(() => {
  const { user } = useContext(UserContext);
  return <div>{user}</div>;
});`}
                    </pre>
                </section>

                {/* Practical Exercise */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                        <FaRocket className="mr-2 text-indigo-600" />
                        Practical Exercise: Theme Switcher with Context API
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                        In this exercise, you'll build a simple "Theme Switcher" application using the Context API to manage a global theme state (light/dark mode). This will help you practice creating and consuming context in a practical scenario.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                        Follow the steps below to implement the theme switcher, then submit your GitHub repository link for review.
                    </p>

                    {/* Step 1 - Create Theme Context */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Step 1: Create Theme Context
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Create a <code>ThemeContext</code> using <code>createContext</code> and a provider component (<code>ThemeProvider</code>) with a state for the theme (initially "light") and a function to toggle it.
                        </p>
                    </div>

                    {/* Step 2 - Wrap App with Provider */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Step 2: Wrap App with Provider
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            In your main <code>App</code> component, wrap the app with <code>ThemeProvider</code> to make the theme available globally.
                        </p>
                    </div>

                    {/* Step 3 - Consume Context */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Step 3: Consume Context
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Create a <code>Header</code> component that uses <code>useContext</code> to display the current theme and a button to toggle it. Style the app dynamically based on the theme (e.g., background color).
                        </p>
                    </div>

                    {/* Example Solution */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Example Solution
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Here’s a starter code to build upon. Enhance it with additional features like persisting the theme in local storage:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            {`import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className={\`p-4 \${theme === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-white"}\`}>
      <h1>Theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        className="mt-2 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
      >
        Toggle Theme
      </button>
    </header>
  );
};

const App = () => (
  <ThemeProvider>
    <div className="min-h-screen">
      <Header />
      <main className={\`p-4 \${theme === "light" ? "bg-white" : "bg-gray-900"}\`}>
        <p>Content goes here.</p>
      </main>
    </div>
  </ThemeProvider>
);

export default App;`}
                        </pre>
                    </div>

                    {/* Submission Field */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaLink className="mr-2 text-indigo-600" />
                            Submit Your Work
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Once complete, upload your project to a GitHub repository and submit the link below. Ensure it includes:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4 space-y-2">
                            <li>A working theme switcher with Context API.</li>
                            <li>Dynamic styling based on theme state.</li>
                            <li>A clean README with setup instructions.</li>
                        </ul>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <textarea
                                name="fileUrl"
                                value={form.fileUrl}
                                onChange={handleFileChange}
                                placeholder="Paste your GitHub repository link here"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                                rows={4}
                            />
                            <button
                                type="submit"
                                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105"
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
                </section>

                {/* Conclusion */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        Conclusion
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        The Context API is a powerful tool in React for managing global state without the complexity of external libraries. By following best practices, developers can efficiently manage state while keeping their code clean and maintainable.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Date7;