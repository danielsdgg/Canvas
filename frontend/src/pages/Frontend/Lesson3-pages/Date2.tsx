import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Date2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
          Components, Props & State
        </h1>

        {/* Intro Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🚀 Understanding React: Components, Props, and State
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            React is a powerful JavaScript library for building dynamic and interactive user interfaces. At its core, React follows a{' '}
            <strong>component-based architecture</strong>, allowing developers to break down complex UIs into smaller, reusable building blocks.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Each <strong>component</strong> in React represents a part of the UI and can manage its own logic and structure. Components can receive{' '}
            <strong>props</strong> (short for properties), which allow data to be passed from parent components to child components, making them reusable and dynamic.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In addition to props, React introduces <strong>state</strong>, which enables components to manage and update their own data over time. State plays a crucial role in
            creating interactive applications, allowing components to respond to user input and update the UI efficiently.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In this lesson, we’ll explore how <strong>components, props, and state</strong> work together to create seamless and engaging user experiences in React. Let’s dive in
            and start building! 🚀
          </p>
        </section>

        {/* Components in React */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">🔹 What is a Component?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A React component is a self-contained, reusable unit of UI that can be independently managed. There are two main types of components in React:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>
              <strong>Functional Components:</strong> These are JavaScript functions that return JSX. They are the most common type of React component.
            </li>
            <li>
              <strong>Class Components:</strong> These are ES6 classes that extend <code>React.Component</code>. They used to be necessary for managing state, but with React
              Hooks, functional components are now preferred.
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-4">✅ Example of a Functional Component</h4>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`function Welcome() {
  return <h1>Hello, world!</h1>;
}`}
          </pre>
        </section>

        {/* Props in React */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">🔹 Understanding Props</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Props (short for properties) are used to pass data from a parent component to a child component. Props make components reusable and dynamic.
          </p>

          <h4 className="text-lg font-semibold mt-4">✅ Example of Using Props</h4>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Rendering the component with a prop
ReactDOM.render(<Greeting name="Alice" />, document.getElementById('root'));`}
          </pre>
        </section>

        {/* State in React */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">🔹 Understanding State</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Unlike props, which are read-only, state allows a component to manage its own data and re-render when that data changes. State is commonly used for handling user
            interactions, such as form inputs and button clicks.
          </p>

          <h4 className="text-lg font-semibold mt-4">✅ Example of Using State</h4>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}`}
          </pre>
        </section>

        {/* Practical Exercise */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600">📝 Practical Exercise</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Now, let’s apply what we've learned! Complete the following exercise:
          </p>

          <h4 className="text-lg font-semibold mt-4">📌 Task</h4>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Create a new React component called <code>ProfileCard</code>.</li>
            <li>Pass props for the user's name, age, and bio.</li>
            <li>Use state to track and display the number of times the profile has been viewed.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4">💡 Example Solution</h4>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`function ProfileCard({ name, age, bio }) {
  const [views, setViews] = useState(0);

  return (
    <div className="p-4 border shadow-md">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
      <p>Profile Views: {views}</p>
      <button onClick={() => setViews(views + 1)}>View Profile</button>
    </div>
  );
}`}
          </pre>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-600">📌 Conclusion</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In this lesson, we explored the core concepts of React, including <strong>components, props, and state</strong>. Understanding these fundamental building blocks will
            help you build scalable and interactive web applications.
          </p>
          <p className="text-gray-700">
            Soon, we’ll dive deeper into <strong>React Hooks</strong> and explore how they make managing state even more powerful!
          </p>
        </section>
      </section>
    </>
  );
};

export default Date2;
