import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import {
  FaArrowLeft,
  FaCode,
  FaLaptopCode,
  FaEdit,
  FaCheckCircle,
  FaBookOpen,
  FaUpload,
  FaPlayCircle,
  FaPalette,
} from "react-icons/fa";

const Day11: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for file upload
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 3,
    userId: userData?.userDetails.id || 0, // Fallback to 0 if undefined
    fileUrl: "",
  });

  // Handle file input change
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

        {/* Section Heading */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center justify-center">
          <FaLaptopCode className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Comprehensive Guide to Tailwind CSS</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Welcome to Day 11 of Morgan Technical Training’s frontend development course! Today, we explore Tailwind CSS, a revolutionary utility-first CSS framework that accelerates web development by providing low-level, customizable classes. Unlike traditional frameworks like Bootstrap, Tailwind empowers you to craft unique designs directly in your markup, streamlining your workflow.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            In this lesson, you’ll learn how to set up Tailwind CSS, understand its core concepts, and apply it to create responsive, modern interfaces. Through examples, code-alongs, and a practical exercise, you’ll build proficiency for Morgan-LMS projects, submitting your work via GitHub.
          </p>

          {/* What is Tailwind CSS? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              What is Tailwind CSS?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Tailwind CSS is a utility-first framework that shifts away from predefined components, offering a vast set of small, composable utility classes (e.g., <code>bg-blue-500</code>, <code>flex</code>). These classes let you style elements inline, reducing custom CSS and boosting development speed while maintaining flexibility.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Key features include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Rapid Prototyping:</strong> Build UIs quickly without leaving your HTML/JSX.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Customizability:</strong> Tailor every aspect via a configuration file.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Consistency:</strong> Standardized classes ensure uniform design across projects.
              </li>
            </ul>
          </div>

          {/* Installation Guide */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Setting Up Tailwind CSS
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Install Tailwind CSS using npm (recommended for projects), Yarn, or a CDN. Here’s the npm setup process:
            </p>

            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-2 flex items-center">
              <FaPlayCircle className="mr-2 text-indigo-600" />
              1. Install Tailwind via npm
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`npm install -D tailwindcss
npx tailwindcss init`}
            </pre>

            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-2 mt-4 flex items-center">
              <FaPlayCircle className="mr-2 text-indigo-600" />
              2. Configure the Tailwind CSS File
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Edit <code>tailwind.config.js</code> to specify your source files for purging unused styles:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};`}
            </pre>

            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-2 mt-4 flex items-center">
              <FaPlayCircle className="mr-2 text-indigo-600" />
              3. Add Tailwind to Your CSS File
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Include Tailwind directives in your main CSS file (e.g., <code>index.css</code>):
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
            </pre>

            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-2 mt-4 flex items-center">
              <FaPlayCircle className="mr-2 text-indigo-600" />
              4. Start Your Development Server
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`npm run dev`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Once set up, Tailwind classes are ready to use in your JSX, enabling rapid styling directly in your markup.
            </p>
          </div>

          {/* Core Concepts */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Core Concepts of Tailwind CSS
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Tailwind’s power lies in its utility-first approach and flexible features:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaPalette className="mr-2 mt-1 text-indigo-600" />
                <strong>Utility-First:</strong> Build designs with classes like <code>bg-indigo-600</code> or <code>text-center</code> instead of custom CSS.
              </li>
              <li className="flex items-start">
                <FaPalette className="mr-2 mt-1 text-indigo-600" />
                <strong>Responsive Design:</strong> Use prefixes like <code>md:</code>, <code>lg:</code>, or <code>xl:</code> (e.g., <code>md:flex</code>) for breakpoints.
              </li>
              <li className="flex items-start">
                <FaPalette className="mr-2 mt-1 text-indigo-600" />
                <strong>Customization:</strong> Extend defaults via <code>tailwind.config.js</code>.
              </li>
              <li className="flex items-start">
                <FaPalette className="mr-2 mt-1 text-indigo-600" />
                <strong>State Variants:</strong> Apply hover, focus, or active styles with prefixes (e.g., <code>hover:bg-indigo-700</code>).
              </li>
            </ul>
          </div>

          {/* Example Usage */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaPlayCircle className="mr-2 text-indigo-600" />
              Example: Creating a Button
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Here’s a styled button using Tailwind CSS classes:
            </p>
            <div className="bg-gray-100 p-4 rounded shadow-lg flex justify-center items-center text-gray-800">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-all duration-300">
                Tailwind Button
              </button>
            </div>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-4">
              {`<button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-all duration-300">
    Tailwind Button
</button>`}
            </pre>
          </div>

          {/* Advanced Topics */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Advanced Topics
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Take your Tailwind skills further with these advanced features:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Dark Mode:</strong> Enable with <code>dark:</code> prefix (e.g., <code>dark:bg-gray-800</code>) and <code>class</code> in config.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Animations:</strong> Use built-in classes like <code>animate-spin</code> or <code>animate-bounce</code>.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Customizing Theme:</strong> Extend defaults in <code>tailwind.config.js</code> (e.g., <code>colors: {'{'} custom: '#123456' {'}'}</code>).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Optimizing for Production:</strong> Configure <code>content</code> in <code>tailwind.config.js</code> to purge unused styles.
              </li>
            </ul>
          </div>

          {/* Why Use Tailwind CSS? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-indigo-600" />
              Why Use Tailwind CSS?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Tailwind CSS offers a unique approach that enhances development efficiency and consistency:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Rapid UI development with utility classes.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Highly customizable via configuration.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Responsive design with intuitive breakpoints.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Optimized performance with purge integration.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Strong community support and ecosystem.
              </li>
            </ul>
          </div>

          {/* Code Along */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaPlayCircle className="mr-2 text-indigo-600" />
              Code Along: Styling a Card Component
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Create a card component with Tailwind CSS to practice utility classes:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  <img className="w-full h-48 object-cover" src="https://via.placeholder.com/150" alt="Example" />
  <div className="p-4">
    <h2 className="text-xl font-bold text-gray-800">Tailwind CSS Card</h2>
    <p className="text-gray-600 mt-2">This is a simple card styled with Tailwind CSS.</p>
    <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Learn More</button>
  </div>
</div>`}
            </pre>
            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4">
              <img
                className="w-full h-48 object-cover"
                src="https://via.placeholder.com/150"
                alt="Example"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">Tailwind CSS Card</h2>
                <p className="text-gray-600 mt-2">This is a simple card styled with Tailwind CSS.</p>
                <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaUpload className="mr-2 text-indigo-600" />
              Practical Exercise
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Create a responsive navigation bar using Tailwind CSS, including a logo, menu items, and a call-to-action button. Submit your GitHub repository link via Morgan-LMS for evaluation.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="fileUrl">
                Submit Your GitHub Repository Link:
              </label>
              <textarea
                name="fileUrl"
                id="fileUrl"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                rows={6}
                placeholder="Paste your GitHub repository link here"
                value={form.fileUrl}
                onChange={handleFileChange}
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center"
              >
                <FaUpload className="mr-2" />
                Submit Exercise
              </button>
            </form>
            {submitted && (
              <p className="text-indigo-600 font-medium mt-4 flex items-center">
                <FaCheckCircle className="mr-2" />
                Thank you! Your assignment has been submitted successfully.
              </p>
            )}
          </div>
        </div>
        {/* Words of Encouragement */}
        <section className="mb-6 text-center">
                <h2 className="text-2xl text-green-700 font-semibold mb-2 mt-5">Well done!</h2>
                <p className="italic">
                    Congratulations on learning html and css; the basics of web development. Now you are ready to build your own portfolio..! 🚀
                </p>
            </section>
      </section>
    </>
  );
};

export default Day11;