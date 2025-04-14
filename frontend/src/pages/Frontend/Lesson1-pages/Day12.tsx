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
  FaBars,
  FaHome,
  FaLink,
  FaEnvelope,
} from "react-icons/fa";

const Day12: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for file upload
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 4,
    userId: userData?.userDetails.id || 0, 
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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Frontend Lesson 1 Project - HTML</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Welcome to Day 12 of Morgan Technical Training’s frontend development course! Today marks the culmination of Lesson 1 with your first major project: building a simple, responsive landing page using HTML, CSS, and Tailwind CSS. This project integrates everything you’ve learned—semantic HTML, Flexbox, Grid, and Tailwind utilities—into a practical, real-world application.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Your task is to create a landing page that showcases your skills, incorporating a navigation bar, hero section, features/services, contact form, and footer. You’ll submit your work via GitHub and Morgan-LMS, simulating a professional workflow. This guide provides detailed requirements, starter examples, and tips to ensure your success, preparing you for real-world frontend challenges.
          </p>

          {/* Project Overview */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Project Overview
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              A landing page is a standalone webpage designed to capture visitor attention and encourage specific actions, such as signing up or contacting the site owner. For this project, you’ll build a responsive landing page that adapts seamlessly to various screen sizes—mobile, tablet, and desktop—using HTML for structure, CSS for custom enhancements (if desired), and Tailwind CSS for rapid, utility-driven styling. This exercise tests your ability to combine foundational skills into a cohesive, polished product.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Key objectives include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Apply semantic HTML to enhance accessibility and search engine optimization (SEO).
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Utilize Tailwind CSS utilities to create a modern, responsive design with minimal custom CSS.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Practice project organization, version control with Git, and submission workflows via GitHub and Morgan-LMS.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Demonstrate creativity and problem-solving in layout and styling decisions.
              </li>
            </ul>
          </div>

          {/* Project Requirements */}
          <div className="mb-10 rounded-lg bg-gray-50 p-6 shadow-md">
  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center border-b-2 border-indigo-200 pb-2">
    <FaEdit className="mr-2 text-indigo-600" />
    Project Requirements
  </h2>
  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 bg-gray-100 p-4 rounded-md shadow-inner">
    Your landing page must include the following elements, each styled with Tailwind CSS and structured with semantic HTML. These components test your mastery of layout techniques, responsiveness, and form handling:
  </p>
  <ul className="list-none space-y-4">
    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaBars className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div>
        <strong className="text-gray-800">Responsive Navigation Bar:</strong>
        <span className="text-gray-700">
          {" "}Include at least three links (e.g., Home, About, Contact). Use Flexbox (e.g., <code>flex justify-between</code>) or Grid for layout, with a mobile-friendly toggle (e.g., hamburger menu) using Tailwind’s <code>md:</code> breakpoint (e.g., <code>hidden md:flex</code>).
        </span>
      </div>
    </li>
    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaHome className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div>
        <strong className="text-gray-800">Hero Section:</strong>
        <span className="text-gray-700">
          {" "}Feature a bold heading (e.g., <code>text-4xl font-bold</code>), descriptive subheading (e.g., <code>text-xl</code>), and prominent call-to-action button (e.g., <code>bg-indigo-600 hover:bg-indigo-700</code>). Use a background color or image (e.g., <code>bg-indigo-600</code>) and center content with Tailwind utilities like <code>text-center</code>.
        </span>
      </div>
    </li>
    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaBookOpen className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div>
        <strong className="text-gray-800">Features/Services Section:</strong>
        <span className="text-gray-700">
          {" "}Showcase at least three items as cards with titles, descriptions, and optional icons or images. Use Grid for layout (e.g., <code>grid grid-cols-1 sm:grid-cols-3 gap-6</code>) to ensure responsiveness across devices.
        </span>
      </div>
    </li>
    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaEnvelope className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div>
        <strong className="text-gray-800">Contact Form:</strong>
        <span className="text-gray-700">
          {" "}Include fields for name, email, and message, styled with Tailwind’s form utilities (e.g., <code>w-full p-2 border rounded focus:ring-indigo-500</code>). Add a submit button with hover effects (e.g., <code>bg-indigo-600 hover:bg-indigo-700</code>).
        </span>
      </div>
    </li>
    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaLink className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div>
        <strong className="text-gray-800">Footer:</strong>
        <span className="text-gray-700">
          {" "}Add social media links (e.g., as text or icons with <code>text-indigo-600 hover:text-indigo-800</code>) and copyright info (e.g., "© 2025 Your Name"). Use Flexbox for alignment (e.g., <code>flex justify-center space-x-4</code>).
        </span>
      </div>
    </li>
  </ul>
</div>

          {/* Code-Along Example */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaPlayCircle className="mr-2 text-indigo-600" />
              Code-Along Example: Hero Section
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Start your project with this hero section example, which uses Tailwind CSS to create a responsive, visually appealing introduction. It demonstrates background styling, typography scaling, and interactive button effects:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<section className="bg-indigo-600 text-white py-20 text-center">
    <h1 className="text-3xl sm:text-4xl font-bold">Welcome to My Landing Page</h1>
    <p className="mt-2 text-lg sm:text-xl">This is a simple hero section using Tailwind CSS</p>
    <button className="mt-4 px-6 py-2 bg-white text-indigo-600 rounded hover:bg-gray-200 transition-all duration-300">
        Get Started
    </button>
</section>`}
            </pre>
            <div className="bg-indigo-600 text-white py-20 text-center mt-4">
              <h1 className="text-3xl sm:text-4xl font-bold">Welcome to My Landing Page</h1>
              <p className="mt-2 text-lg sm:text-xl">This is a simple hero section using Tailwind CSS</p>
              <button className="mt-4 px-6 py-2 bg-white text-indigo-600 rounded hover:bg-gray-200 transition-all duration-300">
                Get Started
              </button>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Experiment with this by adjusting colors (e.g., <code>bg-indigo-700</code>), font sizes (e.g., <code>text-5xl</code>), or adding a background image (e.g., <code>bg-[url('https://via.placeholder.com/1500x500')]</code>). Note: Ensure any image file exists in your project directory or use a valid URL.
            </p>
          </div>

          {/* Practical Exercise */}
          <div className="mb-10 rounded-lg bg-gray-50 p-6 shadow-md">
  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center border-b-2 border-indigo-200 pb-2">
    <FaUpload className="mr-2 text-indigo-600" />
    Practical Exercise: Build Your Landing Page
  </h2>
  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 bg-gray-100 p-4 rounded-md shadow-inner">
    Expand the hero section example into a full landing page, incorporating all required elements: navigation bar, features section, contact form, and footer. Follow these detailed steps to ensure a complete, polished project:
  </p>
  <ul className="list-none space-y-4">
    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div>
        <span className="text-gray-700">
          Set up a new HTML file and link Tailwind CSS via CDN (<code><script src="https://cdn.tailwindcss.com"></script></code>) or npm setup from Day 11.
        </span>
      </div>
    </li>
    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div>
        <span className="text-gray-700">
          Build a responsive navigation bar with Flexbox (e.g., <code>flex justify-between items-center</code>) and a mobile toggle (e.g., <code>hidden md:flex</code>). Add three links like "Home", "Features", and "Contact".
        </span>
      </div>
    </li>
    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div>
        <span className="text-gray-700">
          Create a hero section with a heading (e.g., <code>text-4xl font-bold</code>), subheading (e.g., <code>text-xl</code>), and button (e.g., <code>bg-indigo-600</code>). Use responsive sizing (e.g., <code>sm:text-5xl</code>).
        </span>
      </div>
    </li>
    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div>
        <span className="text-gray-700">
          Add a features section with three cards using Grid (e.g., <code>grid grid-cols-1 sm:grid-cols-3 gap-6</code>). Include titles, descriptions, and optional placeholder images (e.g., <code>w-full h-32 object-cover</code>).
        </span>
      </div>
    </li>
    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div>
        <span className="text-gray-700">
          Design a contact form with labeled inputs for name, email, and message (e.g., <code>w-full p-2 border rounded</code>) and a submit button (e.g., <code>bg-indigo-600 hover:bg-indigo-700</code>).
        </span>
      </div>
    </li>
    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div>
        <span className="text-gray-700">
          Finish with a footer using Flexbox (e.g., <code>flex justify-center space-x-4</code>) for social media links (e.g., "Twitter", "GitHub") and copyright (e.g., <code>text-gray-600</code>).
        </span>
      </div>
    </li>
  </ul>
  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 mt-6 bg-gray-100 p-4 rounded-md shadow-inner">
    Upload your completed project to a GitHub repository and submit the link below via Morgan-LMS. Ensure your repository includes an <code>index.html</code> file and any necessary assets (e.g., images).
  </p>
  <form onSubmit={handleSubmit} className="space-y-6">
    <label className="block text-gray-700 font-semibold text-lg mb-2" htmlFor="fileUrl">
      GitHub Repository URL:
    </label>
    <textarea
      name="fileUrl"
      id="fileUrl"
      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200"
      rows={6}
      placeholder="Paste your GitHub repository link here"
      value={form.fileUrl}
      onChange={handleFileChange}
    />
    <button
      type="submit"
      className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center shadow-md"
    >
      <FaUpload className="mr-2" />
      Submit Exercise
    </button>
  </form>
  {submitted && (
    <p className="text-indigo-600 font-medium mt-6 flex items-center bg-indigo-50 p-3 rounded-lg shadow-sm">
      <FaCheckCircle className="mr-2" />
      Thank you! Your assignment has been submitted successfully.
    </p>
  )}
</div>

          {/* Tips for Success */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Tips for Success
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              To ensure your landing page stands out and meets expectations, consider these practical tips:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Use semantic HTML tags (e.g., <code>&lt;nav&gt;</code>, <code>&lt;footer&gt;</code>) for structure and accessibility.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Leverage Tailwind’s responsive prefixes (e.g., <code>sm:</code>, <code>md:</code>) for a mobile-first approach (e.g., <code>sm:grid-cols-3</code>).
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Test your page across browsers (Chrome, Firefox, Edge) and screen sizes using browser dev tools (F12  Responsive Design Mode).
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Optimize images (e.g., compress via tools like TinyPNG) if used in the hero or features section to reduce load times.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Commit your work to GitHub with clear messages (e.g., "Added hero section", "Styled contact form") to demonstrate version control skills.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Add subtle animations (e.g., <code>hover:scale-105 transition-all</code>) to buttons or cards for interactivity.
              </li>
            </ul>
          </div>
        </div>
        {/* Words of Encouragement */}
        <section className="mb-6 text-center">
          <h2 className="text-2xl text-green-700 font-semibold mb-2 mt-5">Nice!</h2>
          <p className="italic">
            Congratulations..! We can now look at javascript programming  🚀
          </p>
        </section>
      </section>
    </>
  );
};

export default Day12;