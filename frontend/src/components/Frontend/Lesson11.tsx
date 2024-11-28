import React from 'react';
import SideNav from '../SideNav';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Lesson11 = () => {
  const navigate = useNavigate();

  return (
    <>
      <SideNav />
      <div className="container mx-auto p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back to Course
        </button>
        <h1 className="text-center text-4xl font-bold text-blue-900 mb-6">Lesson 5 - React Fundamentals</h1>

        {/* Intro Section */}
        <section className="mb-12">
          <p className="text-gray-700 mb-4">
            React is a popular JavaScript library for building user interfaces. It allows developers to create dynamic and interactive web applications by breaking down the UI into reusable components.
          </p>
          <p className="text-gray-700 mb-4">
            This lesson will cover everything from installation and understanding JSX to building complex applications with React.
          </p>
        </section>

        {/* Week 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Week 1: React Basics</h2>

          {/* Day 1 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 1: Installation and Introduction to React</h3>
            <p className="text-gray-700 mb-4">
              To start using React, you need to install Node.js, which includes npm (Node Package Manager). React applications are created using the `create-react-app` command, which sets up the project structure and dependencies for you.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`# Install Node.js (includes npm)
npm -v  # Check npm version
node -v  # Check Node version

# Create a new React app
npx create-react-app my-react-app

# Navigate to the project directory
cd my-react-app

# Start the development server
npm start`}
            </pre>
            <p className="text-gray-700 mb-4">
              After running `npm start`, open your browser and go to `http://localhost:3000` to see the default React app running.
            </p>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 2: Understanding JSX</h3>
            <p className="text-gray-700 mb-4">
              JSX is a syntax extension for JavaScript that allows you to write HTML elements in your JavaScript code. JSX is compiled to `React.createElement()` calls by Babel.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`// Basic JSX example
function Welcome() {
  return <h1>Hello, world!</h1>;
}

// Using JSX with JavaScript expressions
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Rendering JSX in the DOM
ReactDOM.render(<Greeting name="Alice" />, document.getElementById('root'));`}
            </pre>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 3: Components and Props</h3>
            <p className="text-gray-700 mb-4">
              Components are the building blocks of React applications. A component can be either a function or a class. Props (short for properties) are used to pass data from a parent component to a child component.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`// Function component with props
function UserProfile({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

// Parent component passing props
function App() {
  return <UserProfile name="John Doe" age={30} />;
}`}

            </pre>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 4: State and Event Handling</h3>
            <p className="text-gray-700 mb-4">
              State allows you to create components that are dynamic and interactive. You can update the state using the `useState` hook or `this.setState()` in class components. Event handling is done using React's built-in event handlers like `onClick`, `onChange`, etc.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`// Example of useState in a function component
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}`}
            </pre>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 5: Conditional Rendering and Lists</h3>
            <p className="text-gray-700 mb-4">
              Conditional rendering in React can be done using JavaScript conditional operators like `if` or ternary operators. Rendering lists involves using the `map()` function.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`// Conditional rendering
function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>;
}

// Rendering a list
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}`}
            </pre>
          </div>
        </section>

        {/* Week 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Week 2: Advanced React Concepts</h2>

          {/* Day 1 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 1: React Lifecycle Methods</h3>
            <p className="text-gray-700 mb-4">
              Understanding lifecycle methods is crucial for class components. In function components, you can use hooks like `useEffect()` to mimic lifecycle behavior.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`// Class component lifecycle methods
class DemoComponent extends React.Component {
  componentDidMount() {
    console.log('Component mounted');
  }

  render() {
    return <div>Demo Component</div>;
  }
}

// Using useEffect in function components
import React, { useEffect } from 'react';

function Demo() {
  useEffect(() => {
    console.log('Component mounted');
  }, []); // Empty dependency array for componentDidMount-like behavior

  return <div>Demo Component</div>;
}`}
            </pre>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 2: React Hooks</h3>
            <p className="text-gray-700 mb-4">
              Hooks allow you to use state and other React features without writing a class. Commonly used hooks include `useState`, `useEffect`, and `useContext`.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`// Example of useEffect for fetching data
import React, { useState, useEffect } from 'react';

function DataFetching() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}`}
            </pre>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 3: Context API</h3>
            <p className="text-gray-700 mb-4">
              The Context API allows you to manage state at a global level without prop drilling. It is useful for passing data between deeply nested components without having to pass props through every level.
            </p>
            <p className="text-gray-700 mb-4">
              To use the Context API, follow these steps:
            </p>
            <ol className="list-decimal list-inside text-gray-700 mb-4">
              <li>Create a context using `React.createContext()`.</li>
              <li>Wrap the component tree with a provider to pass the context value.</li>
              <li>Access the context in any child component using `useContext()` hook.</li>
            </ol>
            <p className="text-gray-700 mb-4">
              Here's an example of how to create and use a context:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`// Creating the context
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  const [value, setValue] = useState('Hello, world!');

  return (
    <AppContext.Provider value={{ value, setValue }}>
      {children}
    </AppContext.Provider>
  );
}

// Using the context in a child component
function ChildComponent() {
  const { value, setValue } = useContext(AppContext);

  return (
    <div>
      <p>Value from context: {value}</p>
      <button onClick={() => setValue('Hello, React!')}>Update Value</button>
    </div>
  );
}

// App component
function App() {
  return (
    <AppProvider>
      <ChildComponent />
    </AppProvider>
  );
}

export default App;`}
            </pre>
            <p className="text-gray-700 mb-4">
              With the Context API, you can easily share state across your component tree without the need for prop drilling. This can make your application easier to manage and maintain, especially for larger projects.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-blue-600 mb-4">Weekly Assignment / Code Quiz</h3>
      
      <p className="text-gray-700 mb-4">Build a webpage that includes:</p>
      
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>A title, heading, and paragraph.</li>
        <li>An image with alternative text.</li>
        <li>Both ordered and unordered lists.</li>
        <li>A table with rows and columns.</li>
      </ul>
      
      <p className="text-gray-700 font-semibold mb-4">
        Submit your code for evaluation.
      </p>
      
      <form className="mt-4">
        <input
          type="url"
          placeholder="https://github.com/your-repo"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          required
        />
        
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
        </section>
      </div>
    </>
  );
};

export default Lesson11;
