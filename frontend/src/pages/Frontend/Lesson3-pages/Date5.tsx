import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaLink, FaEdit, FaCheckCircle, FaRocket } from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Date5: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();
    const [count, setCount] = useState(0);
    const [data, setData] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // State for GitHub submission
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        assignmentId: 5,
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

    // 🔄 Simulating component lifecycle with useEffect
    useEffect(() => {
        console.log("Component Mounted ✅");

        // Simulating API call
        setTimeout(() => {
            setData("Fetched data from API 📡");
        }, 2000);

        return () => {
            console.log("Component Unmounted ❌");
        };
    }, []);

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
                    <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Component Life Cycle & React Hooks</h1>
                </div>

                <div className="p-4 sm:p-6">
                    {/* 📖 Introduction to Component Lifecycle */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaEdit className="mr-2 text-indigo-600" />
                            📖 Understanding Component Lifecycle
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            In React, every component goes through different phases known as the <strong>Component Lifecycle</strong>. This includes:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                            <li>
                                <strong>Mounting:</strong> When the component is first created and inserted into the DOM.
                            </li>
                            <li>
                                <strong>Updating:</strong> When the component re-renders due to state or prop changes.
                            </li>
                            <li>
                                <strong>Unmounting:</strong> When the component is removed from the DOM.
                            </li>
                        </ul>
                    </section>

                    {/* 🎣 React Hooks Explanation */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            🎣 What are React Hooks?
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            React Hooks allow you to use <strong>state</strong> and other React features without writing a class component. The most commonly used hooks include:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                            <li>
                                <strong>useState:</strong> Used to manage state in functional components.
                            </li>
                            <li>
                                <strong>useEffect:</strong> Handles side effects (e.g., fetching data, subscriptions).
                            </li>
                            <li>
                                <strong>useContext:</strong> Allows sharing state between components without prop drilling.
                            </li>
                            <li>
                                <strong>useRef:</strong> Creates mutable references to elements or variables.
                            </li>
                        </ul>
                    </section>

                    {/* 🚀 Live Demo: React Hooks in Action */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaRocket className="mr-2 text-indigo-600" />
                            🚀 React Hooks in Action
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            React Hooks allow functional components to have state, perform side effects, access context, and more. Below are detailed examples demonstrating the usage of essential React hooks: <code>useState</code>, <code>useEffect</code>, <code>useContext</code>, and <code>useRef</code>.
                        </p>

                        {/* 1️⃣ useState - Managing Component State */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                🔢 Managing State with useState
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                The <code>useState</code> hook allows us to add local state to functional components. It returns an array containing the current state and a function to update it.
                            </p>
                            <p className="text-gray-800 text-sm sm:text-base mb-3">Counter: {count}</p>
                            <button
                                onClick={() => setCount(count + 1)}
                                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
                            >
                                Increment
                            </button>
                            <pre className="bg-gray-900 text-white p-4 rounded-md mt-4 text-sm sm:text-base overflow-x-auto">
                                {`const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>Increment</button>`}
                            </pre>
                        </div>

                        {/* 2️⃣ useEffect - Handling Side Effects */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                📡 Fetching Data with useEffect
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                The <code className="bg-gray-200 px-1 rounded">useEffect</code> hook is used to handle side effects in React components. Side effects include data fetching, subscribing to external services, or updating the DOM manually.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mb-4">{data || "Loading..."}</p>

                            {/* Why useEffect is important */}
                            <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                                <FaList className="mr-2 text-indigo-600" />
                                🛠 Why use useEffect?
                            </h4>
                            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed mb-4 space-y-2">
                                <li>Prevents unnecessary re-renders by running code only when dependencies change.</li>
                                <li>Enables data fetching when a component mounts.</li>
                                <li>Useful for integrating external APIs and services.</li>
                            </ul>

                            {/* Example: Fetching Data with Fetch API */}
                            <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                🌍 Example: Fetching Data using Fetch API
                            </h4>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                Below is an example of using <code className="bg-gray-200 px-1 rounded">fetch</code> inside <code>useEffect</code> to retrieve data from an API when the component mounts.
                            </p>
                            <pre className="bg-gray-900 text-white p-4 rounded-md mt-3 text-sm sm:text-base overflow-x-auto">
                                {`import { useState, useEffect } from "react";

const FetchExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Runs only once when component mounts

  return (
    <div>
      <h2>Fetch API Example</h2>
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>Title: {data.title}</p>}
    </div>
  );
};

export default FetchExample;`}
                            </pre>

                            {/* Example: Fetching Data with Axios */}
                            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                ⚡ Example: Fetching Data using Axios
                            </h4>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                <a
                                    href="https://axios-http.com/docs/intro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mr-1 text-indigo-600 hover:underline"
                                >
                                    Axios
                                </a>
                                is a popular JavaScript library for making HTTP requests. It simplifies API calls by handling responses and errors more gracefully.
                            </p>
                            <pre className="bg-gray-900 text-white p-4 rounded-md mt-3 text-sm sm:text-base overflow-x-auto">
                                {`import { useState, useEffect } from "react";
import axios from "axios";

const AxiosExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Runs only once when component mounts

  return (
    <div>
      <h2>Axios Example</h2>
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>Title: {data.title}</p>}
    </div>
  );
};

export default AxiosExample;`}
                            </pre>

                            {/* Handling Dependency Arrays */}
                            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2 flex items-center">
                                <FaList className="mr-2 text-indigo-600" />
                                🔄 Understanding useEffect Dependencies
                            </h4>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                The dependency array in <code>useEffect</code> controls when the effect runs:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed mb-4 space-y-2">
                                <li>
                                    <strong>Empty array <code>[]</code>:</strong> Runs only once when the component mounts.
                                </li>
                                <li>
                                    <strong>No dependency array:</strong> Runs after every render.
                                </li>
                                <li>
                                    <strong>Specific dependencies:</strong> Runs when listed dependencies change.
                                </li>
                            </ul>
                            <pre className="bg-gray-900 text-white p-4 rounded-md mt-3 text-sm sm:text-base overflow-x-auto">
                                {`useEffect(() => {
  console.log("Runs after every render");
});

useEffect(() => {
  console.log("Runs only once when component mounts");
}, []);

useEffect(() => {
  console.log("Runs when 'count' changes");
}, [count]);`}
                            </pre>

                            {/* Cleanup Function in useEffect */}
                            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                🧹 Cleanup with useEffect
                            </h4>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                When using <code>useEffect</code> for subscriptions or event listeners, always return a cleanup function to prevent memory leaks.
                            </p>
                            <pre className="bg-gray-900 text-white p-4 rounded-md mt-3 text-sm sm:text-base overflow-x-auto">
                                {`useEffect(() => {
  const interval = setInterval(() => {
    console.log("Updating every second");
  }, 1000);

  return () => {
    clearInterval(interval); // Cleanup when component unmounts
  };
}, []);`}
                            </pre>
                        </div>

                        {/* 3️⃣ useContext - Managing Global State */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                🌍 Sharing State with useContext
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                The <code>useContext</code> hook allows us to access global state without prop drilling. Below is an example where a theme is shared across components.
                            </p>
                            <pre className="bg-gray-900 text-white p-4 rounded-md mt-4 text-sm sm:text-base overflow-x-auto">
                                {`const ThemeContext = React.createContext('light');

const App = () => (
    <ThemeContext.Provider value="dark">
        <ChildComponent />
    </ThemeContext.Provider>
);

const ChildComponent = () => {
    const theme = useContext(ThemeContext);
    return <p>Current Theme: {theme}</p>;
};`}
                            </pre>
                        </div>

                        {/* 4️⃣ useRef - Accessing DOM Elements & Preserving Values */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                📌 Manipulating DOM with useRef
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                The <code>useRef</code> hook allows us to reference a DOM element or persist values across renders without causing re-renders. In the example below, clicking the button focuses the input field.
                            </p>
                            <input
                                type="text"
                                ref={inputRef}
                                className="border p-2 rounded-md w-full max-w-xs mb-4"
                                placeholder="Type something..."
                            />
                            <button
                                onClick={() => inputRef.current?.focus()}
                                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition ml-2"
                            >
                                Focus Input
                            </button>
                            <pre className="bg-gray-900 text-white p-4 rounded-md mt-4 text-sm sm:text-base overflow-x-auto">
                                {`const inputRef = useRef(null);

<button onClick={() => inputRef.current.focus()}>Focus Input</button>`}
                            </pre>
                        </div>

                        {/* 5️⃣ Custom Hook Example */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                🛠️ Creating a Custom Hook
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                You can create your own custom hooks to encapsulate logic. Below is an example of a hook that manages window width.
                            </p>
                            <pre className="bg-gray-900 text-white p-4 rounded-md mt-4 text-sm sm:text-base overflow-x-auto">
                                {`const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
};`}
                            </pre>
                        </div>
                    </section>

                    {/* 📚 React Router Hooks & State Management */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            📚 React Router Hooks & State Management: useLocation, useParams, useNavigate, and useReducer
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            React provides powerful hooks for managing navigation and state within your application. This section covers four essential hooks: <strong>useLocation</strong> (to get the current URL info), <strong>useParams</strong> (to access route parameters), <strong>useNavigate</strong> (to programmatically navigate between routes), and <strong>useReducer</strong> (for complex state management).
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            📍 useLocation
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-2 leading-relaxed">
                            The <code className="bg-gray-200 px-1 rounded">useLocation</code> hook allows you to access the current URL’s pathname, search parameters, and state. This is useful when you need to track changes in the URL or get data passed via navigation.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 text-sm sm:text-base overflow-x-auto">
                            {`import { useLocation } from 'react-router-dom';

const LocationExample = () => {
  const location = useLocation();

  return (
    <div>
      <h2>Current Page</h2>
      <p>Pathname: {location.pathname}</p>
      <p>Query String: {location.search}</p>
    </div>
  );
};`}
                        </pre>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            🔢 useParams
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-2 leading-relaxed">
                            The <code className="bg-gray-200 px-1 rounded">useParams</code> hook is used to access dynamic route parameters. This is useful when defining routes that contain variables, such as user profiles or product pages.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 text-sm sm:text-base overflow-x-auto">
                            {`import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>
    </div>
  );
};`}
                        </pre>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            🚀 useNavigate
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-2 leading-relaxed">
                            The <code className="bg-gray-200 px-1 rounded">useNavigate</code> hook replaces the older <code>useHistory</code> and allows programmatic navigation. It enables redirecting users dynamically based on actions.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 text-sm sm:text-base overflow-x-auto">
                            {`import { useNavigate } from 'react-router-dom';

const NavigationExample = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/dashboard')}>
        Go to Dashboard
      </button>
    </div>
  );
};`}
                        </pre>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            ⚡ useReducer
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-2 leading-relaxed">
                            The <code className="bg-gray-200 px-1 rounded">useReducer</code> hook is useful for managing complex state logic in your application. It works similarly to Redux, allowing state transitions based on dispatched actions.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 text-sm sm:text-base overflow-x-auto">
                            {`import { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>
    </div>
  );
};`}
                        </pre>
                    </section>

                    {/* 🧑‍💻 Practical Exercise: Task Manager */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                            <FaRocket className="mr-2 text-indigo-600" />
                            🧑‍💻 Practical Exercise: Build a Task Manager
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            In this comprehensive exercise, you'll create a "Task Manager" application that integrates everything you've learned from Day 1 to Day 5: <strong>JSX</strong>, <strong>components</strong>, <strong>props and state</strong>, <strong>event handling and conditional rendering</strong>, <strong>lists, keys & forms</strong>, and <strong>React hooks</strong>. This project will simulate a real-world scenario where users can manage tasks fetched from an API, add new tasks via a form, and interact with the UI dynamically.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                            Follow the step-by-step guide below to build the application. Test each step thoroughly, and submit your GitHub repository link once complete. Your instructor will review your work and provide feedback.
                        </p>

                        {/* Step 1 - Setup and JSX Structure */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                Step 1: Setup and JSX Structure
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Start by creating a new React component called <code>TaskManager</code> using JSX. Use Tailwind CSS to style a basic layout with a header, a form section, and a task list section. This leverages <strong>JSX</strong> from Day 1.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                <strong>Goal:</strong> Establish the UI structure with semantic JSX elements.
                            </p>
                        </div>

                        {/* Step 2 - Components with Props */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                Step 2: Components with Props
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Break the UI into reusable components: <code>TaskForm</code> (for adding tasks) and <code>TaskItem</code> (for each task). Pass <strong>props</strong> to <code>TaskItem</code> (e.g., task title, status) and to <code>TaskForm</code> (e.g., a callback to add tasks). This builds on <strong>components and props</strong> from Day 2.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                <strong>Goal:</strong> Modularize the app with props for data passing.
                            </p>
                        </div>

                        {/* Step 3 - State Management */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                Step 3: State Management
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Use <code>useState</code> in <code>TaskManager</code> to manage a list of tasks and form input values. Implement state updates in <code>TaskForm</code> for the input field and in <code>TaskManager</code> for adding tasks. This reinforces <strong>state</strong> from Day 2.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                <strong>Goal:</strong> Manage dynamic task data with state.
                            </p>
                        </div>

                        {/* Step 4 - Event Handling and Conditional Rendering */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                Step 4: Event Handling and Conditional Rendering
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Add event handlers in <code>TaskForm</code> for form submission (<code>onSubmit</code>) and input changes (<code>onChange</code>). In <code>TaskItem</code>, add a button to toggle task completion status, using <strong>conditional rendering</strong> to display "Completed" or "Pending" based on state. Use <code>event.preventDefault()</code> to prevent form reloads. This applies <strong>event handling and conditional rendering</strong> from Day 3.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                <strong>Goal:</strong> Enable user interactions and dynamic UI updates.
                            </p>
                        </div>

                        {/* Step 5 - Lists, Keys & Forms */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                Step 5: Lists, Keys & Forms
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Render the task list in <code>TaskManager</code> using <code>.map()</code>, ensuring each <code>TaskItem</code> has a unique <strong>key</strong> (e.g., task ID). Implement a controlled form in <code>TaskForm</code> with multiple inputs (e.g., title, priority). This builds on <strong>lists, keys & forms</strong> from Day 4.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                <strong>Goal:</strong> Display a dynamic task list and manage form inputs.
                            </p>
                        </div>

                        {/* Step 6 - Fetching Data with Hooks */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                Step 6: Fetching Data with Hooks
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Use <code>useEffect</code> in <code>TaskManager</code> to fetch initial tasks from <strong>https://jsonplaceholder.typicode.com/todos</strong> when the component mounts. Store the fetched data in state and display it. Add a <code>useRef</code> hook to focus the form input field when a button is clicked. This applies <strong>React hooks</strong> from Day 5.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                <strong>Goal:</strong> Integrate API data and DOM manipulation with hooks.
                            </p>
                        </div>

                        {/* Example Solution */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                Example Solution
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Here’s a starter code example to guide you. Build upon it to meet all requirements:
                            </p>
                            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto mb-4">
                                {`import React, { useState, useEffect, useRef } from 'react';

const TaskItem = ({ task, toggleComplete }) => (
  <div className="flex items-center justify-between p-2 border-b">
    <span className={task.completed ? "line-through text-gray-500" : "text-gray-800"}>
      {task.title} (Priority: {task.priority})
    </span>
    <button
      onClick={() => toggleComplete(task.id)}
      className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-600"
    >
      {task.completed ? "Undo" : "Complete"}
    </button>
  </div>
);

const TaskForm = ({ addTask }) => {
  const [formData, setFormData] = useState({ title: '', priority: 'Low' });
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim()) {
      addTask({ ...formData, id: Date.now(), completed: false });
      setFormData({ title: '', priority: 'Low' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        ref={inputRef}
        placeholder="Task title"
        className="border p-2 rounded w-full mb-2"
      />
      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-2"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
        Add Task
      </button>
      <button
        type="button"
        onClick={() => inputRef.current?.focus()}
        className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Focus Input
      </button>
    </form>
  );
};

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setTasks(data.slice(0, 5).map(task => ({
          id: task.id,
          title: task.title,
          priority: 'Medium',
          completed: task.completed,
        })));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
        setLoading(false);
      });
  }, []);

  const addTask = (newTask) => setTasks(prev => [...prev, newTask]);

  const toggleComplete = (id) => {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskForm addTask={addTask} />
      {loading ? (
        <p>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul className="list-disc list-inside">
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskManager;`}
                            </pre>
                        </div>

                        {/* Submission Field */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaLink className="mr-2 text-indigo-600" />
                                Submit Your Work
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                After completing the Task Manager, create a GitHub repository, push your code, and submit the link below. Ensure your project includes:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4 space-y-2">
                                <li>JSX for structured UI.</li>
                                <li>Components with props (TaskForm, TaskItem).</li>
                                <li>State for tasks and form data.</li>
                                <li>Event handling (form submission, toggle completion).</li>
                                <li>Conditional rendering (loading, empty states).</li>
                                <li>Lists with unique keys.</li>
                                <li>Forms with multiple controlled inputs.</li>
                                <li>Hooks (useState, useEffect, useRef) for data fetching and DOM focus.</li>
                            </ul>
                            <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                                Test your app thoroughly and include a README with instructions before submitting.
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <textarea
                                    name="fileUrl"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    rows={6}
                                    placeholder="Paste your GitHub link here"
                                    value={form.fileUrl}
                                    onChange={handleFileChange}
                                />
                                <button
                                    type="submit"
                                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
                                >
                                    Submit Solution
                                </button>
                            </form>
                            {submitted && (
                                <p className="mt-4 text-green-600 font-medium flex items-center">
                                    <FaCheckCircle className="mr-2" />
                                    Your solution has been submitted successfully!
                                </p>
                            )}
                        </div>
                    </section>

                    {/* 📚 Further Resources */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaLink className="mr-2 text-indigo-600" />
                            📚 Further Resources
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                            <li>
                                <a
                                    href="https://react.dev/learn/state-and-lifecycle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    React Docs - State & Lifecycle
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://react.dev/reference/react/useEffect"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    React Docs - useEffect Hook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    MDN - Using Fetch API
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://axios-http.com/docs/intro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    Axios Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/watch?v=0cSGF9c8V6I"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    YouTube: Mastering useEffect in React
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Date5;