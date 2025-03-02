import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaLink, FaEdit, FaCheckCircle } from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Date11: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();

    // State for submission field
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        assignmentId: 11,
        userId: userData?.userDetails.id ?? "",
        projectUrl: "",
    });

    // Handle URL input change
    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                alert("Project URL submitted successfully!");
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error submitting project URL:", error);
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
                <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Project Week: Build a React Application</h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Project Overview */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        Project Overview
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Welcome to Project Week! This is your opportunity to showcase everything you've learned about ReactJS over the past 10 lessons. You’ll build a fully functional React application that integrates <strong>JSX</strong>, <strong>components</strong>, <strong>props and state</strong>, <strong>event handling</strong>, <strong>conditional rendering</strong>, <strong>lists, keys, and forms</strong>, <strong>React hooks</strong>, <strong>React Router</strong>, <strong>Context API</strong>, <strong>error handling and debugging</strong>, <strong>TypeScript (TSX)</strong>, and <strong>deployment</strong>. The choice of project is yours—whether it’s a personal portfolio, a task manager, or anything else that inspires you—but it must demonstrate mastery of these concepts.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        Your project will serve as a capstone to your frontend development journey with React, allowing you to apply theoretical knowledge to a practical, real-world scenario. Pitch your idea to your instructor for approval, then build, test, deploy, and submit your work for review.
                    </p>
                </section>

                {/* Project Requirements */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FaList className="mr-2 text-indigo-600" />
                        Project Requirements
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Your project must incorporate all the key React concepts you've learned. Below is a detailed breakdown of what to include, ensuring a robust and comprehensive application:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                        <li>
                            <span className="font-semibold">JSX (Day 1):</span> Use JSX to structure your UI with semantic and reusable elements, styled with Tailwind CSS or a CSS-in-JS solution.
                        </li>
                        <li>
                            <span className="font-semibold">Components, Props, and State (Day 2):</span> Break your app into modular components, passing data via props, and manage dynamic state with <code>useState</code>.
                        </li>
                        <li>
                            <span className="font-semibold">Event Handling and Conditional Rendering (Day 3):</span> Implement user interactions (e.g., clicks, form submissions) with event handlers and use conditional rendering to display UI based on state (e.g., loading states, toggles).
                        </li>
                        <li>
                            <span className="font-semibold">Lists, Keys, and Forms (Day 4):</span> Render dynamic lists with unique keys using <code>.map()</code> and create controlled forms to handle user input.
                        </li>
                        <li>
                            <span className="font-semibold">React Hooks (Day 5):</span> Utilize hooks like <code>useState</code>, <code>useEffect</code>, and <code>useRef</code> for state management, side effects (e.g., API calls), and DOM manipulation.
                        </li>
                        <li>
                            <span className="font-semibold">React Router (Day 6):</span> Set up multi-page navigation with <code>Routes</code>, <code>Route</code>, and <code>Link</code>, including dynamic routes with <code>useParams</code>.
                        </li>
                        <li>
                            <span className="font-semibold">Context API (Day 7):</span> Manage global state (e.g., user data, theme) using the Context API and <code>useContext</code>.
                        </li>
                        <li>
                            <span className="font-semibold">Error Handling and Debugging (Day 8):</span> Implement try-catch blocks, error boundaries, and debugging techniques (e.g., console logging) to ensure robustness.
                        </li>
                        <li>
                            <span className="font-semibold">TypeScript (TSX) (Day 9):</span> Use TypeScript to type props, state, and functions, enhancing code safety and maintainability.
                        </li>
                        <li>
                            <span className="font-semibold">Deployment (Day 10):</span> Deploy your app to a platform like Vercel or Netlify and optimize it with a production build (<code>npm run build</code>).
                        </li>
                    </ul>
                </section>

                {/* Project Guidelines */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Project Guidelines
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Follow these steps to ensure your project meets expectations and leverages all React skills:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                        <li>
                            <strong>Pitch Your Idea:</strong> Propose a unique project concept to your instructor (e.g., a portfolio, blog, or app). Await approval before proceeding.
                        </li>
                        <li>
                            <strong>Plan Your Features:</strong> Outline core features that utilize all listed concepts. Design a simple wireframe or list of components (e.g., Navbar, Form, ListDisplay).
                        </li>
                        <li>
                            <strong>Setup with TypeScript:</strong> Initialize your project with TypeScript (<code>npx create-react-app my-app --template typescript</code>) and type all components, props, and state.
                        </li>
                        <li>
                            <strong>Build the Frontend:</strong> Create a multi-page app with React Router, incorporating reusable components, forms, lists, and dynamic state updates via hooks and Context API.
                        </li>
                        <li>
                            <strong>Handle Errors:</strong> Add error handling (e.g., try-catch for API calls) and debug using browser tools or console logs to ensure stability.
                        </li>
                        <li>
                            <strong>Deploy Your App:</strong> Build and deploy your app to a hosting platform (e.g., Vercel, Netlify), optimizing with a production build and testing the live site.
                        </li>
                        <li>
                            <strong>Document Your Work:</strong> Include a README with setup instructions, project description, and a link to the deployed app.
                        </li>
                    </ul>

                    {/* Additional Subtopic: Success Criteria */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        Success Criteria
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Your project will be evaluated based on:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li><strong>Functionality:</strong> All features work as intended with no major bugs.</li>
                        <li><strong>Code Quality:</strong> Clean, typed TSX code with proper structure and comments.</li>
                        <li><strong>Creativity:</strong> Unique idea and thoughtful implementation.</li>
                        <li><strong>Deployment:</strong> Successfully hosted with a live, accessible URL.</li>
                    </ul>
                </section>

                {/* Submission Field */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        Submit Your Project
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Once your project is complete and deployed, submit the live URL below for review. Ensure your deployment is accessible and your README is well-documented.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="projectUrl"
                            value={form.projectUrl}
                            onChange={handleUrlChange}
                            placeholder="e.g., https://my-project.vercel.app"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                        />
                        <button
                            type="submit"
                            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            Submit Project URL
                        </button>
                    </form>
                    {submitted && (
                        <p className="mt-4 text-green-600 font-medium flex items-center">
                            <FaCheckCircle className="mr-2" />
                            Your project URL has been submitted successfully!
                        </p>
                    )}
                </section>

                {/* Resources for React */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        Resources for React
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Enhance your React skills and project development with these valuable resources:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li>
                            <a
                                href="https://react.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                React Official Documentation
                            </a> – Comprehensive guide to React fundamentals and advanced topics.
                        </li>
                        <li>
                            <a
                                href="https://reactrouter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                React Router Documentation
                            </a> – In-depth resource for routing in React apps.
                        </li>
                        <li>
                            <a
                                href="https://www.typescriptlang.org/docs/handbook/react.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                TypeScript with React
                            </a> – Official TypeScript docs for React integration.
                        </li>
                        <li>
                            <a
                                href="https://vercel.com/docs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                Vercel Documentation
                            </a> – Guide to deploying React apps on Vercel.
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/watch?v=7S_tz1z_5YA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                YouTube: Full React Course
                            </a> – Free video tutorial covering React essentials.
                        </li>
                    </ul>
                </section>

                {/* Congratulations Message */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6 text-center">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        Congratulations on Completing Frontend Development!
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        🎉 You’ve made it through an incredible journey mastering ReactJS! From JSX basics to advanced hooks, routing, state management, TypeScript, and deployment, you’ve built a strong foundation in frontend development. Your project this week is a testament to your skills and creativity. Celebrate your achievement, deploy your app with pride, and get ready to tackle even more exciting challenges in the world of web development! 🚀
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Date11;