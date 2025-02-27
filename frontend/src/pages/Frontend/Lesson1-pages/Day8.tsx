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
  FaColumns,
  FaTh,
} from "react-icons/fa";

const Day8: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for file upload
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 2,
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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">CSS and Semantic HTML</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Welcome to Day 8 of Morgan Technical Training’s frontend development course! Today, we introduce CSS (Cascading Style Sheets), the language that brings style and layout to your HTML content, and explore Semantic HTML, which enhances structure and accessibility. Together, these skills allow you to create visually stunning, user-friendly, and well-organized web pages.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            In this lesson, you’ll learn CSS fundamentals—including selectors, the box model, Flexbox, and Grid—alongside Tailwind CSS, a utility-first framework. We’ll also dive into Semantic HTML tags to improve accessibility and SEO. By the end, you’ll apply these concepts in a practical assignment, submitting your work via GitHub and Morgan-LMS.
          </p>

          {/* CSS Overview */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Introduction to CSS
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              CSS is a styling language that controls the presentation of HTML elements—colors, fonts, spacing, and layouts. It works by applying rules to HTML tags, enabling developers to transform static content into dynamic, responsive designs. CSS is “cascading” because styles can inherit or override each other based on specificity and order.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Key benefits of CSS include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Separation of Concerns:</strong> Keeps styling separate from HTML structure for cleaner code.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Flexibility:</strong> Allows consistent styling across multiple pages with a single file.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Responsiveness:</strong> Enables adaptive designs for various screen sizes using tools like Flexbox and Grid.
              </li>
            </ul>
          </div>

          {/* Setting Up CSS */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              1. Setting Up CSS
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              To use CSS, link an external stylesheet to your HTML document using the <code>&lt;link&gt;</code> tag in
              the <code>&lt;head&gt;</code> section. Here’s an example:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First CSS Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 mb-4">
              Create a <code>styles.css</code> file in the same directory and add your CSS rules:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`h1 {
    color: #2c3e50;
    font-family: Arial, sans-serif;
    text-align: center;
}`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Alternatively, use inline CSS with the <code>style</code> attribute (e.g.,
              <code>&lt;h1 style="color: blue;"&gt;</code>) or internal CSS within a <code>&lt;style&gt;</code> tag in
              the <code>&lt;head&gt;</code>, though external files are preferred for maintainability.
            </p>
          </div>

          {/* CSS Syntax and Selectors */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              2. CSS Syntax and Selectors
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              A CSS rule consists of a selector (what to style) and a declaration block (how to style it). Example:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`body {
    font-family: Arial, sans-serif;
    color: #333;
    margin: 0;
    padding: 0;
}`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Common selectors include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <span>
                  <strong>Type Selector:</strong> Targets HTML tags (e.g., <code>p {'{'} color: blue; {'}'}</code>).
                </span>
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <span>
                  <strong>Class Selector:</strong> Targets elements with a class (e.g., <code>.example {'{'} font-size: 16px; {'}'}</code>).
                </span>
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <span>
                  <strong>ID Selector:</strong> Targets a unique element (e.g., <code>#header {'{'} background: gray; {'}'}</code>).
                </span>
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <span>
                  <strong>Group Selector:</strong> Styles multiple elements (e.g., <code>h1, h2, h3 {'{'} margin: 0; {'}'}</code>).
                </span>
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <span>
                  <strong>Descendant Selector:</strong> Targets nested elements (e.g., <code>.container p {'{'} color: red; {'}'}</code>).
                </span>
              </li>
            </ul>
          </div>

          {/* The Box Model */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaColumns className="mr-2 text-indigo-600" />
              3. The Box Model
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              The CSS box model defines how elements are sized and spaced on a page, consisting of content, padding,
              border, and margin:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Content:</strong> The inner area (text, images) with defined <code>width</code> and
                <code>height</code>.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Padding:</strong> Space between content and border (e.g., <code>padding: 20px;</code>).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Border:</strong> Surrounds padding (e.g., <code>border: 5px solid black;</code>).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Margin:</strong> Outer space separating elements (e.g., <code>margin: 10px;</code>).
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Example in traditional CSS:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`div {
    width: 200px;
    padding: 20px;
    border: 5px solid #000;
    margin: 10px;
}`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Using Tailwind CSS utility classes:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<div class="w-52 p-5 border-2 border-black m-2">
    This is a Tailwind CSS styled div.
</div>`}
            </pre>
            <div className="bg-gray-200 p-5 border-2 border-gray-500 m-4 rounded shadow-md">
              <p className="font-sans text-gray-800">
                This div demonstrates the box model with padding, border, and margin in Tailwind CSS.
              </p>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Use browser developer tools (right-click  Inspect) to visualize the box model and adjust spacing
              dynamically.
            </p>
          </div>

          {/* Flexbox and Grid */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaTh className="mr-2 text-indigo-600" />
              4. Flexbox and Grid
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Flexbox and Grid are modern CSS layout systems for creating responsive designs:
            </p>
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 flex items-center">
                <FaColumns className="mr-2 text-indigo-600" />
                Flexbox
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Flexbox is a one-dimensional layout tool for aligning items in rows or columns. Example:
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                {`.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex-item {
    flex: 1;
}`}
              </pre>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
                In Tailwind: <code>&lt;div class="flex justify-between items-center"&gt;</code>.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 flex items-center">
                <FaTh className="mr-2 text-indigo-600" />
                Grid
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Grid is a two-dimensional system for complex layouts. Example:
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                {`.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
.grid-item {
    background-color: #ddd;
}`}
              </pre>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
                In Tailwind: <code>&lt;div class="grid grid-cols-3 gap-4"&gt;</code>.
              </p>
            </div>
          </div>

          {/* Semantic HTML */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Semantic HTML
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Semantic HTML uses tags that convey meaning about content structure, improving accessibility, SEO, and
              maintainability. Unlike generic tags (<code>&lt;div&gt;</code>), semantic tags provide context to browsers
              and assistive technologies.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Common semantic tags include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;header&gt;</code>:</strong> Defines introductory content or navigation (e.g., logo,
                menu).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;footer&gt;</code>:</strong> Contains closing info like copyright or contact details.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;main&gt;</code>:</strong> Holds the primary content, excluding headers/footers.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;article&gt;</code>:</strong> Represents standalone content (e.g., a blog post).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;section&gt;</code>:</strong> Groups related content (e.g., a chapter).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;aside&gt;</code>:</strong> Adds supplementary content (e.g., a sidebar).
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Example of a semantic structure:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<header>
    <h1>Welcome to My Blog</h1>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>
</header>
<main>
    <section>
        <h2>Introduction</h2>
        <p>This is the introductory section.</p>
    </section>
    <article>
        <h2>Blog Post</h2>
        <p>A standalone article.</p>
    </article>
    <aside>
        <h3>Related Links</h3>
        <p>Additional info here.</p>
    </aside>
</main>
<footer>
    <p>© 2025 My Blog</p>
</footer>`}
            </pre>
          </div>

          {/* Assignment */}
          <div className="mb-8">
            <h2 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-indigo-300 p-3 rounded-md shadow-md mt-6">
            🎯 CSS & Semantic HTML Assignment
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Test your skills by creating a fully responsive webpage using Semantic HTML and CSS. Submit your GitHub
              repository link via Morgan-LMS for evaluation.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Instructions:</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                Use semantic tags (<code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, etc.) for structure.
              </li>
              <li className="flex items-start">
                <FaColumns className="mr-2 mt-1 text-indigo-600" />
                Apply Flexbox and Grid for layout (e.g., navigation and content sections).
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Ensure responsiveness for desktop and mobile (use media queries or Tailwind).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                Include a navigation bar, content section, and footer with styled elements.
              </li>
              <li className="flex items-start">
                <FaUpload className="mr-2 mt-1 text-indigo-600" />
                Host on GitHub and submit the repository URL below.
              </li>
            </ul>
            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <label className="block text-gray-600 font-medium mb-2">GitHub Repository URL:</label>
              <textarea
                name="fileUrl"
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
                Submit Assignment
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
      </section>
    </>
  );
};

export default Day8;