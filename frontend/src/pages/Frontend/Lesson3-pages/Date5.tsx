import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaLink, FaEdit, FaCheckCircle, FaRocket } from "react-icons/fa";

const Date5: React.FC = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [data, setData] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

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

                    {/* React Router Hooks & State Management */}
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

                    {/* 🧑‍💻 Practical Exercise: Fetching Data & DOM Manipulation */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center justify-center">
                            <FaRocket className="mr-2 text-indigo-600" />
                            🧑‍💻 Practical Exercise: Fetching Data & DOM Manipulation
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            In this hands-on exercise, you will practice applying your knowledge of React hooks to both fetch data from an external API and perform DOM manipulation. You will utilize key React hooks like <code>useState</code>, <code>useEffect</code>, and <code>useRef</code> in real-world scenarios. By the end of this exercise, you'll understand how to manage state and side effects in functional components and interact with the DOM directly.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                            Follow the step-by-step guide below to implement the required functionality. Make sure to thoroughly test each step before moving on to the next one.
                        </p>

                        {/* Step 1 - Fetch Data from an API */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                Step 1: Fetch Data from an API
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                In this step, you will use the <code>useEffect</code> hook to fetch data from a public API endpoint, <strong>https://jsonplaceholder.typicode.com/posts</strong>. You will store the data in a state variable using <code>useState</code> and render the titles of the first 5 posts in a list below.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                                The <code>useEffect</code> hook will be used to initiate the fetch request when the component mounts. After receiving the response, you will parse the data as JSON and extract the first 5 posts from the result. These posts will be rendered dynamically using <code>map</code> to iterate over the array of posts.
                            </p>
                        </div>

                        {/* Step 2 - Manipulate DOM with useRef */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                Step 2: DOM Manipulation with useRef
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Now, let's add some interactivity to the UI. You will use the <code>useRef</code> hook to manipulate the DOM. Specifically, you will create a button that, when clicked, focuses on the first post title in the list.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                                The <code>useRef</code> hook provides a way to access and interact with a DOM element directly, without affecting the component's state. In this case, you will create a reference for the first post title and focus it when the button is clicked.
                            </p>
                        </div>

                        {/* Step 3 - Input Field for Submitting the Work */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                Step 3: Submit Your Work
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                After completing the previous steps, you will submit your solution using the input field below. Paste your working code in the provided field, ensuring the following functionality is implemented:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4 space-y-2">
                                <li>The data from the API is successfully fetched and displayed in the UI.</li>
                                <li>The titles of the first 5 posts are rendered correctly.</li>
                                <li>The "Focus First Post Title" button successfully focuses the first post title when clicked.</li>
                            </ul>
                            <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                                Double-check your code for any errors and ensure everything is working as expected before submitting.
                            </p>
                            <input
                                type="text"
                                placeholder="Paste your solution here"
                                className="border p-2 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition">
                                Submit Solution
                            </button>
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