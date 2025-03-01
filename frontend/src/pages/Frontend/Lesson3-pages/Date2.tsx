import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaEdit, FaCheckCircle, FaRocket, FaLink } from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Date2: React.FC = () => {
    const navigate = useNavigate();
      const { userData, userToken } = useAuth();
  
      // State for file upload
      const [submitted, setSubmitted] = useState(false);
      const [form, setForm] = useState({
          assignmentId: 8,
          userId: userData?.userDetails.id ?? "", // Ensuring a valid initial state
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
                    <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Components, Props & State</h1>
                </div>

                <div className="p-4 sm:p-6">
                    {/* Intro Section */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaRocket className="mr-2 text-indigo-600" />
                            Understanding React: Components, Props, and State
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            React is a powerful JavaScript library for building dynamic and interactive user interfaces. At its core, React follows a{" "}
                            <strong>component-based architecture</strong>, allowing developers to break down complex UIs into smaller, reusable building blocks.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Each <strong>component</strong> in React represents a part of the UI and can manage its own logic and structure. Components can receive{" "}
                            <strong>props</strong> (short for properties), which allow data to be passed from parent components to child components, making them reusable and dynamic.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            In addition to props, React introduces <strong>state</strong>, which enables components to manage and update their own data over time. State plays a crucial role in
                            creating interactive applications, allowing components to respond to user input and update the UI efficiently.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            In this lesson, we’ll explore how <strong>components, props, and state</strong> work together to create seamless and engaging user experiences in React. Let’s dive in
                            and start building! 🚀
                        </p>
                    </section>

                    {/* Components in React */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            🔹 What is a Component?
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            A React component is a self-contained, reusable unit of UI that can be independently managed. There are two main types of components in React:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4 space-y-2">
                            <li>
                                <strong>Functional Components:</strong> These are JavaScript functions that return JSX. They are the most common type of React component.
                            </li>
                            <li>
                                <strong>Class Components:</strong> These are ES6 classes that extend <code>React.Component</code>. They used to be necessary for managing state, but with React
                                Hooks, functional components are now preferred.
                            </li>
                        </ul>

                        <h4 className="text-lg font-semibold text-gray-800 mt-4 flex items-center">
                            <FaCheckCircle className="mr-2 text-indigo-600" />
                            ✅ Example of a Functional Component
                        </h4>
                        <pre className="bg-gray-800 text-white p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
                            {`function Welcome() {
  return <h1>Hello, world!</h1>;
}`}
                        </pre>
                    </section>

                    {/* Props in React */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            🔹 Understanding Props
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Props (short for properties) are used to pass data from a parent component to a child component. Props make components reusable and dynamic.
                        </p>

                        <h4 className="text-lg font-semibold text-gray-800 mt-4 flex items-center">
                            <FaCheckCircle className="mr-2 text-indigo-600" />
                            ✅ Example of Using Props
                        </h4>
                        <pre className="bg-gray-800 text-white p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
                            {`function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Rendering the component with a prop
ReactDOM.render(<Greeting name="Alice" />, document.getElementById('root'));`}
                        </pre>
                    </section>

                    {/* State in React */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            🔹 Understanding State
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Unlike props, which are read-only, state allows a component to manage its own data and re-render when that data changes. State is commonly used for handling user
                            interactions, such as form inputs and button clicks.
                        </p>

                        <h4 className="text-lg font-semibold text-gray-800 mt-4 flex items-center">
                            <FaCheckCircle className="mr-2 text-indigo-600" />
                            ✅ Example of Using State
                        </h4>
                        <pre className="bg-gray-800 text-white p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
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
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                            <FaRocket className="mr-2 text-indigo-600" />
                            📝 Practical Exercise
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Now, let’s apply what we've learned! Complete the following exercise:
                        </p>

                        <h4 className="text-lg font-semibold text-gray-800 mt-4 flex items-center">
                            <FaList className="mr-2 text-indigo-600" />
                            📌 Task
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4 space-y-2">
                            <li>Create a new React component called <code>ProfileCard</code>.</li>
                            <li>Pass props for the user's name, age, and bio.</li>
                            <li>Use state to track and display the number of times the profile has been viewed.</li>
                        </ul>

                        <h4 className="text-lg font-semibold text-gray-800 mt-4 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            💡 Example Solution
                        </h4>
                        <pre className="bg-gray-800 text-white p-4 rounded-lg text-sm sm:text-base overflow-x-auto">
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

                     {/* GitHub Submission */}
                     <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                              <FaLink className="mr-2 text-indigo-600" />
                               Submit Your Work
                          </h2>
                          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                                Once you complete the exercise, create a GitHub repository, push your code, and submit the link below for grading.
                          </p>
                          <form onSubmit={handleSubmit} className="space-y-4">
                               <label className="block text-gray-800 text-sm sm:text-base font-semibold mb-2" htmlFor="fileUrl">
                                     Paste Your GitHub Repository Link:
                                </label>
                                <textarea name="fileUrl" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                                 rows={6} placeholder="e.g., https://github.com/username/repo" value={form.fileUrl} onChange={handleFileChange}/>
                                 <button type="submit" className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105">
                                      Submit
                                   </button>
                            </form>
                            {submitted && (
                               <p className="mt-4 text-green-600 font-medium flex items-center">
                                    <FaCheckCircle className="mr-2" />
                                       Thank you! Your Exercise has been submitted successfully!
                                </p>
                                 )}
                          </section>
                    </section>

                    {/* Conclusion */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                            <FaCheckCircle className="mr-2 text-indigo-600" />
                            📌 Conclusion
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            In this lesson, we explored the core concepts of React, including <strong>components, props, and state</strong>. Understanding these fundamental building blocks will
                            help you build scalable and interactive web applications.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Soon, we’ll dive deeper into <strong>React Hooks</strong> and explore how they make managing state even more powerful!
                        </p>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Date2;