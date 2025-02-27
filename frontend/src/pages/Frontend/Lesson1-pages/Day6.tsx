import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCode,
  FaLaptopCode,
  FaList,
  FaTable,
  FaLink,
  FaImage,
  FaEdit,
  FaCheckCircle,
  FaBookOpen,
  FaRocket,
} from "react-icons/fa";

const Day6: React.FC = () => {
  const navigate = useNavigate();

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
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaLaptopCode className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Introduction to Web - HTML</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Welcome to Day 6 of Morgan Technical Training’s frontend development course! Today, we dive into HTML (HyperText Markup Language), the cornerstone of web development. HTML structures the content you see on websites—text, images, links, forms, and more—allowing browsers to render it into the pages you interact with daily. As the foundation of every web project, mastering HTML is your first step toward building dynamic, user-friendly applications.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            In this lesson, you’ll explore HTML’s history, syntax, essential elements, and best practices. You’ll also learn how it integrates with tools like GitHub for collaboration and Morgan-LMS for assignment submissions—key skills for your journey as a frontend developer.
          </p>

          {/* Why Learn HTML? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Why Learn HTML?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              HTML is the starting point for all web developers, offering a simple yet powerful way to create web content. Its key advantages make it indispensable:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Beginner-Friendly:</strong> Easy to learn with a straightforward syntax, making it accessible to newcomers.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Universal Compatibility:</strong> Supported by all browsers (Chrome, Firefox, Safari) and devices, ensuring wide reach.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Foundation for Other Tech:</strong> Seamlessly integrates with CSS for styling and JavaScript for interactivity.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Industry Standard:</strong> Required knowledge for any web development role, from startups to tech giants.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              At Morgan Technical Training, you’ll use HTML as the base for all projects, submitting your work to GitHub repositories for evaluation via Morgan-LMS. This process mirrors real-world workflows, preparing you for collaborative development.
            </p>
          </div>

          {/* What is HTML? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              What is HTML?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              HTML, or HyperText Markup Language, is a markup language developed by Tim Berners-Lee in 1990 as part of the World Wide Web’s creation. It uses tags (e.g., <code className="bg-gray-200 px-2 py-1 rounded">&lt;p&gt;</code>, <code className="bg-gray-200 px-2 py-1 rounded">&lt;img&gt;</code>) to define the structure and semantics of web content, which browsers interpret to display pages visually. “HyperText” refers to its ability to link documents via hyperlinks, forming the interconnected web we know today.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              HTML has evolved through versions (e.g., HTML4, XHTML, HTML5), with HTML5 being the current standard. HTML5 introduced features like multimedia support (<code className="bg-gray-200 px-2 py-1 rounded">&lt;video&gt;</code>, <code className="bg-gray-200 px-2 py-1 rounded">&lt;audio&gt;</code>), semantic tags (<code className="bg-gray-200 px-2 py-1 rounded">&lt;article&gt;</code>, <code className="bg-gray-200 px-2 py-1 rounded">&lt;section&gt;</code>), and APIs for advanced interactivity, making it a cornerstone of modern web development.
            </p>
          </div>

          {/* Basic HTML Structure */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Basic HTML Structure
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Every HTML document follows a standard structure that browsers rely on to render content correctly. Here’s a foundational example:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Site</h1>
    <p>This is my first HTML page!</p>
  </body>
</html>`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Let’s break down the key components:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;!DOCTYPE html&gt;</code>:</strong> Declares the document as HTML5, ensuring modern standards are applied.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;html lang="en"&gt;</code>:</strong> The root element, with the <code>lang</code> attribute specifying the language (e.g., English) for accessibility.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;head&gt;</code>:</strong> Contains metadata like character encoding (<code>&lt;meta charset="UTF-8"&gt;</code>), viewport settings for responsiveness (<code>&lt;meta name="viewport"&gt;</code>), and the page title.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;body&gt;</code>:</strong> Holds the visible content—headings, paragraphs, images, and more—that users see in the browser.
              </li>
            </ul>
          </div>

          {/* Common HTML Elements */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaList className="mr-2 text-indigo-600" />
              Common HTML Elements
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              HTML elements are defined by tags, which structure content. Here are some fundamental ones you’ll use frequently:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>:</strong> Headings for titles and subtitles, with <code>&lt;h1&gt;</code> being the most prominent (e.g., page title) and <code>&lt;h6&gt;</code> the least.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;p&gt;</code>:</strong> Paragraphs for blocks of text, ideal for descriptions or articles.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;a href="url"&gt;</code>:</strong> Anchor tags create hyperlinks to other pages or resources (e.g., <code>&lt;a href="https://example.com"&gt;Link&lt;/a&gt;</code>).
              </li>
              <li className="flex items-start">
                <FaImage className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;img src="url" alt="description"&gt;</code>:</strong> Embeds images, with <code>alt</code> providing accessibility text (e.g., <code>&lt;img src="logo.png" alt="Company Logo"&gt;</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code>:</strong> Unordered (bullet) and ordered (numbered) lists for organizing items (e.g., navigation menus).
              </li>
              <li className="flex items-start">
                <FaTable className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;table&gt;</code>:</strong> Displays tabular data with rows (<code>&lt;tr&gt;</code>) and cells (<code>&lt;td&gt;</code>).
              </li>
            </ul>
          </div>

          {/* Attributes */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Attributes
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Attributes add functionality or metadata to HTML elements, written as name-value pairs in the opening tag. They enhance how elements behave or appear:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example</a>`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              In this example:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <strong><code>href</code>:</strong> Specifies the destination URL for the link.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong><code>target="_blank"</code>:</strong> Opens the link in a new browser tab or window.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong><code>rel="noopener noreferrer"</code>:</strong> Enhances security by preventing window.opener vulnerabilities and referrer leaks.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Other common attributes include <code>id</code> (unique identifier), <code>class</code> (styling groups), and <code>style</code> (inline CSS).
            </p>
          </div>

          {/* HTML Forms */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              HTML Forms
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Forms collect user input, such as text, selections, or submissions, and are critical for interactive websites (e.g., login pages, surveys). Here’s an example:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" placeholder="Enter your name" required>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="Enter your email" required>
  <button type="submit">Submit</button>
</form>`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Key components:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;form&gt;</code>:</strong> Wraps input elements, with <code>action</code> (submission URL) and <code>method</code> (e.g., POST) attributes.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;label&gt;</code>:</strong> Links text to inputs via <code>for</code>, improving accessibility.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;input&gt;</code>:</strong> Captures data, with types like <code>text</code>, <code>email</code>, and attributes like <code>required</code>.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;button&gt;</code>:</strong> Triggers form submission.
              </li>
            </ul>
          </div>

          {/* HTML Best Practices */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-indigo-600" />
              HTML Best Practices
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Writing effective HTML ensures accessibility, performance, and maintainability. Follow these guidelines:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Semantic Tags:</strong> Use tags like <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code> for better structure, accessibility, and SEO.
              </li>
              <li className="flex items-start">
                <FaImage className="mr-2 mt-1 text-indigo-600" />
                <strong>Image Alt Text:</strong> Always include descriptive <code>alt</code> attributes (e.g., <code>alt="Profile picture"</code>) for screen readers and fallback.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Validation:</strong> Check your code with the W3C Validator (
                <a
                  href="https://validator.w3.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  validator.w3.org
                </a>
                ) to catch errors.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Indentation:</strong> Use consistent indentation (e.g., 2 spaces) for readability and collaboration via GitHub.
              </li>
            </ul>
          </div>

          {/* Practice Exercises */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practice Exercises
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Hands-on practice is key to mastering HTML. Complete these exercises and upload your work to a GitHub repository, submitting the link via Morgan-LMS for feedback:
            </p>
            <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Create an HTML page with a heading, paragraph, and a link to an external site (e.g., Morgan Technical Training’s website).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                Build a form with fields for name, email, and message, including a submit button with validation (<code>required</code>).
              </li>
              <li className="flex items-start">
                <FaImage className="mr-2 mt-1 text-indigo-600" />
                Add an image with a descriptive <code>alt</code> attribute (e.g., a screenshot of your code).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Create both an ordered list (e.g., steps) and an unordered list (e.g., features) within a single page.
              </li>
              <li className="flex items-start">
                <FaTable className="mr-2 mt-1 text-indigo-600" />
                Design a table with three rows and two columns (e.g., a schedule or comparison chart).
              </li>
            </ol>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Resources for Further Learning
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Expand your HTML knowledge with these trusted resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  MDN Web Docs: HTML
                </a>
                — Comprehensive guide with examples and references.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.w3schools.com/html/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  W3Schools: HTML Tutorial
                </a>
                — Interactive tutorials for beginners.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://html.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  HTML.com
                </a>
                — Practical tips and cheat sheets.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              By the end of Day 6, you’ll have a solid grasp of HTML’s structure, elements, and best practices. Experiment with these concepts, build small projects, and submit your work to GitHub via Morgan-LMS to kickstart your frontend portfolio!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Day6;