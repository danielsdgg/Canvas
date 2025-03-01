import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import {
  FaArrowLeft,
  FaCode,
  FaLaptopCode,
  FaLink,
  FaImage,
  FaListOl,
  FaListUl,
  FaEdit,
  FaCheckCircle,
  FaBookOpen,
  FaUpload,
} from "react-icons/fa";

const Day7: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for file upload
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 1,
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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Tags, Links, and Images in HTML</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Welcome to Day 7 of Morgan Technical Training’s frontend development course! Today, we’ll build on your HTML knowledge by focusing on commonly used tags, hyperlinks, and images—three essential building blocks of web pages. These elements allow you to structure content, connect resources, and enhance visuals, forming the backbone of interactive and engaging websites.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            In this lesson, you’ll learn the syntax, attributes, and best practices for tags like headings, paragraphs, and divisions, as well as how to create links with the <code>&lt;a&gt;</code> tag and embed images with the <code>&lt;img&gt;</code> tag. Practical examples and exercises will help you apply these concepts, with submissions via GitHub and Morgan-LMS reinforcing your collaborative skills.
          </p>

          {/* Commonly Used HTML Tags */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Commonly Used HTML Tags
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              HTML tags define the structure and meaning of content on a webpage. Understanding their roles and proper usage is key to creating well-organized, accessible sites. Here are some of the most commonly used tags:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;p&gt;</code>:</strong> Represents a paragraph, used for blocks of text like articles or descriptions (e.g., <code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code>).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>:</strong> Headings range from <code>&lt;h1&gt;</code> (most important, e.g., page title) to <code>&lt;h6&gt;</code> (least important, e.g., sub-subsection), organizing content hierarchically.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;div&gt;</code>:</strong> A block-level container for grouping elements, often used for layout or styling (e.g., <code>&lt;div&gt;&lt;h2&gt;Section&lt;/h2&gt;&lt;p&gt;Content&lt;/p&gt;&lt;/div&gt;</code>).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;span&gt;</code>:</strong> An inline container for styling or scripting small portions of text (e.g., <code>&lt;span style="color: red;"&gt;highlight&lt;/span&gt;</code>).
              </li>
              <li className="flex items-start">
                <FaImage className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;img&gt;</code>:</strong> Embeds images with a <code>src</code> attribute for the file path and <code>alt</code> for accessibility (covered later).
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <strong><code>&lt;a&gt;</code>:</strong> Creates hyperlinks to connect pages or resources (covered later).
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              <strong>Example:</strong>
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<h1>Main Heading</h1>
<p>This is a paragraph.</p>
<div>
  <h2>Subheading</h2>
  <p>Content inside a <span style="font-weight: bold;">div</span>.</p>
</div>`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              <strong>Note:</strong> Using tags correctly improves readability, SEO (e.g., headings signal importance), and accessibility (e.g., screen readers interpret structure).
            </p>
          </div>

          {/* Links and Images */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaLink className="mr-2 text-indigo-600" />
              Links and Images
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Links and images make websites interactive and visually engaging. The <code>&lt;a&gt;</code> tag creates hyperlinks for navigation, while the <code>&lt;img&gt;</code> tag embeds images for visual content. Mastering these elements is crucial for building functional, appealing web pages.
            </p>

            {/* Links */}
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 flex items-center">
                <FaLink className="mr-2 text-indigo-600" />
                Adding Links with <code>&lt;a&gt;</code>
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                The <code>&lt;a&gt;</code> (anchor) tag defines hyperlinks, connecting users to other pages, files, or sections within a site. Its key attribute is <code>href</code>, which specifies the destination URL:
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                {`<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example</a>`}
              </pre>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
                Key attributes:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
                <li className="flex items-start">
                  <FaEdit className="mr-2 mt-1 text-indigo-600" />
                  <strong><code>href</code>:</strong> The URL or path (e.g., <code>"/about"</code> for relative links).
                </li>
                <li className="flex items-start">
                  <FaEdit className="mr-2 mt-1 text-indigo-600" />
                  <strong><code>target="_blank"</code>:</strong> Opens the link in a new tab for external sites.
                </li>
                <li className="flex items-start">
                  <FaEdit className="mr-2 mt-1 text-indigo-600" />
                  <strong><code>rel="noopener noreferrer"</code>:</strong> Enhances security by preventing tab hijacking and referrer leaks.
                </li>
                <li className="flex items-start">
                  <FaEdit className="mr-2 mt-1 text-indigo-600" />
                  <strong><code>title</code>:</strong> Adds a tooltip on hover (e.g., <code>title="Click me"</code>).
                </li>
              </ul>
            </div>

            {/* Images */}
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 flex items-center">
                <FaImage className="mr-2 text-indigo-600" />
                Embedding Images with <code>&lt;img&gt;</code>
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                The <code>&lt;img&gt;</code> tag displays images on a page. It’s a self-closing tag requiring <code>src</code> for the image source and <code>alt</code> for accessibility:
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                {`<img src="image.jpg" alt="A beautiful scenery" width="500" height="300">`}
              </pre>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
                Key attributes:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
                <li className="flex items-start">
                  <FaEdit className="mr-2 mt-1 text-indigo-600" />
                  <strong><code>src</code>:</strong> The URL or file path to the image (e.g., <code>"assets/photo.jpg"</code>).
                </li>
                <li className="flex items-start">
                  <FaEdit className="mr-2 mt-1 text-indigo-600" />
                  <strong><code>alt</code>:</strong> Describes the image for screen readers or if it fails to load (e.g., <code>"Sunset over mountains"</code>).
                </li>
                <li className="flex items-start">
                  <FaEdit className="mr-2 mt-1 text-indigo-600" />
                  <strong><code>width</code> and <code>height</code>:</strong> Sets image dimensions in pixels (e.g., <code>width="500"</code>).
                </li>
              </ul>
            </div>
          </div>

          {/* Examples */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Examples
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Here are practical examples demonstrating HTML tags, links, and images in action:
            </p>

            {/* Basic HTML Structure */}
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-medium text-gray-500 mb-2 flex items-center">
                <FaLaptopCode className="mr-2 text-indigo-600" />
                1. Basic HTML Structure
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                A simple page with tags structuring the content:
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                {`<!DOCTYPE html>
<html lang="en">
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is a basic HTML document structure.</p>
</body>
</html>`}
              </pre>
            </div>

            {/* Headings and Paragraphs */}
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-medium text-gray-500 mb-2 flex items-center">
                <FaListUl className="mr-2 text-indigo-600" />
                2. Headings and Paragraphs
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Using headings and paragraphs to organize text:
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                {`<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>This is a paragraph of text.</p>`}
              </pre>
            </div>

            {/* Links */}
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-medium text-gray-500 mb-2 flex items-center">
                <FaLink className="mr-2 text-indigo-600" />
                3. Adding Links
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Creating a hyperlink to an external site:
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                {`<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Visit Google</a>`}
              </pre>
            </div>

            {/* Images */}
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-medium text-gray-500 mb-2 flex items-center">
                <FaImage className="mr-2 text-indigo-600" />
                4. Displaying Images
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Embedding an image with proper attributes:
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                {`<img src="image.jpg" alt="A description of the image" width="300" height="200">`}
              </pre>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8">
            <h2 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-indigo-300 p-3 rounded-md shadow-md mt-6">
            🎯 Practical Exercise: HTML Tags, Links, and Images
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply what you’ve learned by creating an HTML document. Include the following elements, then upload your work to a GitHub repository and submit the link via Morgan-LMS:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3 mb-4">
              <li className="flex items-start">
                <FaListUl className="mr-2 mt-1 text-indigo-600" />
                A heading (<code>&lt;h1&gt;</code>) and a paragraph (<code>&lt;p&gt;</code>).
              </li>
              <li className="flex items-start">
                <FaListOl className="mr-2 mt-1 text-indigo-600" />
                An ordered (<code>&lt;ol&gt;</code>) and unordered list (<code>&lt;ul&gt;</code>).
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                A hyperlink that opens in a new tab (<code>target="_blank"</code>).
              </li>
              <li className="flex items-start">
                <FaImage className="mr-2 mt-1 text-indigo-600" />
                An image with alternative text (<code>alt</code>).
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Here’s a starter template to modify:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<!DOCTYPE html>
<html lang="en">
<head>
    <title>HTML Exercise</title>
</head>
<body>
    <h1>My First HTML Page</h1>
    <p>This is a paragraph about HTML basics.</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example</a>
    <br>
    <img src="image.jpg" alt="Sample Image" width="300" height="200">
</body>
</html>`}
            </pre>
            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
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
                Submit Exercise
              </button>
            </form>
            {submitted && (
              <p className="text-indigo-600 font-medium mt-4 flex items-center">
                <FaCheckCircle className="mr-2" />
                Your exercise has been submitted successfully!
              </p>
            )}
          </div>

          {/* Summary */}
          <div className="mt-10 p-6 bg-indigo-100 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center justify-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Summary: HTML Tags, Links, and Images
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Understanding HTML tags, links, and images is foundational to web development. These elements allow you to structure content, enable navigation, and add visual appeal, forming the core of any webpage. At Morgan Technical Training, mastering these skills sets you up to create professional, user-friendly sites.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Practice using semantic tags for structure, creating accessible links with proper attributes, and embedding images with meaningful <code>alt</code> text. These habits enhance your code’s quality and prepare you for collaboration via GitHub and Morgan-LMS submissions.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Additional Resources</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  MDN Web Docs - HTML
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.w3schools.com/html/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  W3Schools HTML Tutorial
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://html.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  HTML.com Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Day7;