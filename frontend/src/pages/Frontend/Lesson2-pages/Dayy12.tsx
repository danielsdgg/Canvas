import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaLink, FaEdit, FaCheckCircle, FaRocket } from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Dayy12: React.FC = () => {
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
                    <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">
                        Frontend Lesson 2 Project - JavaScript Application
                    </h1>
                </div>

                <div className="p-4 sm:p-6">
                    {/* Project Overview */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaEdit className="mr-2 text-indigo-600" />
                            Project Overview
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Welcome to Project Week! In this capstone project, you’ll create a <b>fully functional JavaScript application</b> using <b>HTML, CSS (Tailwind), and JavaScript</b>. This is your chance to showcase everything you’ve learned from Day 1 to Day 11—variables, operators, functions, loops, arrays & objects, DOM manipulation, events, forms, asynchronous JavaScript (fetch), and object orientation. The project topic is up to you! Pitch your idea to the instructor, receive guidance, and build something unique.
                        </p>
                    </section>

                    {/* Prerequisites */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaList className="mr-2 text-indigo-600" />
                            Prerequisites
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Basic knowledge of <b>HTML structure</b> for page layout.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Understanding of <b>CSS and Tailwind CSS</b> for styling.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Proficiency in <b>JavaScript fundamentals</b> (variables, operators, functions, loops).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Familiarity with <b>arrays & objects</b> for data management.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Skills in <b>DOM manipulation</b> and <b>event handling</b>.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Experience with <b>forms</b> and <b>async JS (fetch)</b> for user input and data fetching.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Understanding of <b>object-oriented programming</b> and context (<code>this</code>).
                            </li>
                        </ul>
                    </section>

                    {/* Project Requirements */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Project Requirements
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                            Your project should demonstrate mastery of all concepts learned from Day 1 to Day 11. You’ll pitch your unique project idea to the instructor (e.g., a task manager, weather app, quiz game, or anything creative), who will guide you on implementation. The project must include:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Variables & Operators:</b> Use variables to store data and operators for calculations or logic (e.g., counters, comparisons).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Functions:</b> Implement reusable functions to handle core logic (e.g., data processing, UI updates).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Loops:</b> Use loops to iterate over data (e.g., displaying lists, processing arrays).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Arrays & Objects:</b> Manage data with arrays and objects (e.g., storing items, user info).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>DOM Manipulation:</b> Dynamically update the page (e.g., adding/removing elements).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Events:</b> Handle user interactions with event listeners (e.g., clicks, form submissions).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Forms:</b> Collect and process user input (e.g., search, settings, data entry).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Async JS (Fetch):</b> Fetch data from an API and display it (e.g., external content, mock data).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Object Orientation:</b> Use classes and objects with proper context (<code>this</code>) for structured code (e.g., managing entities).
                            </li>
                        </ul>
                    </section>

                    {/* Step-by-Step Guide */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaList className="mr-2 text-indigo-600" />
                            Step-by-Step Guide
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                            Follow these steps to complete your project, with guidance from your instructor:
                        </p>
                        <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base space-y-2">
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Pitch Your Idea:</b> Propose your project concept to the instructor (e.g., a task manager, recipe tracker, quiz game) and await feedback.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Plan Your Project:</b> Outline features, sketch a basic UI, and map out how to use each concept (variables, loops, OOP, etc.).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Set Up Structure:</b> Create an <b>index.html</b> file with a basic layout using semantic HTML and Tailwind CSS for styling.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Implement JavaScript:</b> Write functions, loops, and OOP logic to handle data and DOM updates, integrating events and forms.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Add Async Data:</b> Use <code>fetch</code> to pull data from an API (e.g., mock API, public data source) and display it dynamically.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Test & Refine:</b> Test your project, ensure all features work, and polish the UI with Tailwind CSS.
                            </li>
                        </ol>
                    </section>

                    {/* Bonus Challenges */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaRocket className="mr-2 text-indigo-600" />
                            Bonus Challenges
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Implement a <b>search or filter</b> feature using loops and array methods.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Add a <b>settings form</b> to customize the app (e.g., theme, user preferences).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Store data in <b>localStorage</b> to persist across page reloads.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Use <b>async/await</b> with multiple API calls and handle errors gracefully.
                            </li>
                        </ul>
                    </section>

                    {/* GitHub Submission */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaLink className="mr-2 text-indigo-600" />
                            Submit Your Work
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                            Once your project is complete, create a GitHub repository, push your code, and submit the link below for grading. Ensure your README includes a brief description of your project and how it uses the concepts from Days 1-11.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <label
                                className="block text-gray-800 text-sm sm:text-base font-semibold mb-2"
                                htmlFor="fileUrl"
                            >
                                Paste Your GitHub Repository Link:
                            </label>
                            <textarea
                                name="fileUrl"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                                rows={6}
                                placeholder="e.g., https://github.com/username/repo"
                                value={form.fileUrl}
                                onChange={handleFileChange}
                            />
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                            >
                                Submit Project
                            </button>
                        </form>
                        {submitted && (
                            <p className="mt-4 text-green-600 font-medium flex items-center">
                                <FaCheckCircle className="mr-2" />
                                Thank you! Your project has been submitted successfully!
                            </p>
                        )}
                    </section>

                    {/* Words of Encouragement */}
                    <section className="mb-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6 text-center">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center justify-center">
                            <FaCheckCircle className="mr-2 text-indigo-600" />
                            Congratulations!
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
                            You’ve built a strong foundation in JavaScript over the past 11 days! This project is your opportunity to shine—apply your skills creatively and confidently. In the next lesson, we’ll dive into <b>React</b>, a powerful JavaScript library, to build outstanding user interfaces. Keep practicing, and get ready for an exciting journey ahead! 🚀
                        </p>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Dayy12;