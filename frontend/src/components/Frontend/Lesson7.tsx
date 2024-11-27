import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import SideNav from '../SideNav';

const Lesson7: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
    <SideNav />
    <div className="p-4 sm:p-8 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 min-h-screen sm:pl-[200px] flex flex-col items-center sm:items-start">
      {/* Back Button */}
      <button onClick={() => navigate(-1)}
      className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
        <FaArrowLeft className="mr-2" />
        Back to Course
      </button>
      <div className="max-w-7xl mx-auto px-5">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Introduction to Web Development (Frontend)
          </h1>
          <p className="text-lg text-gray-700">
            A comprehensive guide to building stunning websites and user experiences.
          </p>
        </header>

{/* Welcome Section */}
<section className="bg-white shadow-lg rounded-lg p-8 mb-8">
  {/* Section Heading */}
  <div className="bg-gray-800 text-white py-4 px-6 rounded-t-lg">
    <h2 className="text-3xl font-semibold">Welcome to Morgan Technical Training</h2>
  </div>

  <div className="p-6">
    {/* Introduction */}
    <p className="text-gray-700 leading-relaxed mb-4">
      At Morgan Technical Training, we prioritize excellence and hands-on experience. This course is designed to empower you with the skills needed to excel in web development.
    </p>
    <p className="text-gray-700 mb-4">
      Here are some key features of this Learning Management System (LMS), powered by Canvas:
    </p>

    {/* Key Features List */}
    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
      <li>Attendance is mandatory for all sessions unless otherwise excused.</li>
      <li>Respect and professionalism are expected at all times.</li>
      <li>Weekly assignments must be submitted on time.</li>
    </ul>

    {/* Canvas Overview */}
    <p className="text-gray-700 leading-relaxed mb-4">
      Our Learning Management System, Canvas, is your hub for all course-related activities:
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
      <li>Access lecture materials and resources.</li>
      <li>Submit assignments and track your progress.</li>
      <li>
        Use the <strong>Inbox</strong> feature to communicate directly with instructors
        and fellow students.
      </li>
    </ul>

    <p className="text-gray-700 leading-relaxed">
      We believe that every learner deserves the best tools and guidance to succeed.
    </p>
  </div>

  {/* Frontend Developer Roadmap */}
  <div className="bg-gray-800 text-white py-4 px-6 rounded-lg mt-8">
    <h2 className="text-3xl sm:text-4xl font-semibold">
      Becoming a Frontend Developer: The Roadmap
    </h2>
  </div>

  <div className="p-6">
    <p className="text-sm sm:text-base text-gray-700 mb-6">
      Frontend development is an exciting field where you bring digital designs to life on the web. A frontend developer ensures that websites are visually appealing, interactive, and user-friendly. You’ll work on crafting responsive interfaces, optimizing performance, and implementing modern web standards.
    </p>
    <p className="text-sm sm:text-base text-gray-700 mb-6">
      In this lesson, you will begin by learning about three core technologies: <strong>HTML, CSS, and Git</strong>. These foundational tools are essential for creating, styling, and managing web projects. Over the next two weeks, you will:
    </p>

    {/* Roadmap List */}
    <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 space-y-4 mb-6">
      <li>
        Understand the structure of a webpage and learn how to use <strong>HTML</strong> to build content.
      </li>
      <li>
        Explore <strong>CSS</strong> to design visually appealing and responsive layouts.
      </li>
      <li>
        Master <strong>Git</strong>, a powerful tool for version control, ensuring smooth collaboration and project management.
      </li>
    </ul>

    <p className="text-sm sm:text-base text-gray-700">
      By the end of this lesson, you’ll have the skills to create your first simple website and manage it like a professional developer.
    </p>
  </div>
</section>


        {/* Course Topics */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold bg-gray-800 text-white py-4 px-6 rounded-t-lg">
            Topics Covered in This Course
          </h2>
          <div className="space-y-6">
            {/* HTML */}
            <div>
              <h3 className="text-2xl font-medium text-gray-500 mb-2">1. HTML Basics</h3>
              <p className="text-gray-700 leading-relaxed">
                Learn the foundational structure of the web. Topics include:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                <li>Tags and elements</li>
                <li>Semantic HTML</li>
                <li>Forms, tables, and media embedding</li>
              </ul>
            </div>
            {/* CSS */}
            <div>
              <h3 className="text-2xl font-medium text-gray-500 mb-2">2. CSS for Styling</h3>
              <p className="text-gray-700 leading-relaxed">
                Add visual appeal to your webpages. Topics include:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                <li>CSS selectors and properties</li>
                <li>Responsive design with Flexbox and Grid</li>
                <li>CSS animations and transitions</li>
              </ul>
            </div>
            {/* JavaScript */}
            <div>
              <h3 className="text-2xl font-medium text-gray-500 mb-2">3. JavaScript Fundamentals</h3>
              <p className="text-gray-700 leading-relaxed">
                Add interactivity and logic to your pages. Topics include:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                <li>Variables, loops, and conditionals</li>
                <li>DOM manipulation</li>
                <li>Event handling</li>
              </ul>
            </div>
            {/* React */}
            <div>
              <h3 className="text-2xl font-medium text-gray-500 mb-2">4. Introduction to React</h3>
              <p className="text-gray-700 leading-relaxed">
                Learn how to build reusable components and manage state. Topics include:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                <li>JSX syntax</li>
                <li>Props and state</li>
                <li>Component lifecycle</li>
              </ul>
            </div>
            {/* Git */}
            <div>
              <h3 className="text-2xl font-medium text-gray-500 mb-2">5. Version Control with Git</h3>
              <p className="text-gray-700 leading-relaxed">
                Git is an essential tool for version control and collaboration. In this module, you’ll learn:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                <li>How to install and configure Git</li>
                <li>Basic commands: `git init`, `git add`, `git commit`, and `git push`</li>
                <li>Working with branches for collaborative development</li>
                <li>Using GitHub to host and manage repositories</li>
              </ul>
            </div>
            {/* CLI */}
            <div>
              <h3 className="text-2xl font-medium text-gray-500 mb-2">6. Command Line Interfaces (CLI)</h3>
              <p className="text-gray-700 leading-relaxed">
                The CLI is a powerful tool for developers. You’ll learn:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                <li>Basic navigation commands like `cd`, `ls`, and `pwd`</li>
                <li>File and directory management commands</li>
                <li>Running scripts and programs via the terminal</li>
              </ul>
            </div>
            {/* Visual Studio Code */}
            <div>
              <h3 className="text-2xl font-medium text-gray-500 mb-2">7. Setting Up Visual Studio Code</h3>
              <p className="text-gray-700 leading-relaxed">
                Visual Studio Code (VS Code) is a versatile code editor. You’ll learn:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                <li>How to download and install VS Code</li>
                <li>Installing extensions for web development</li>
                <li>Using the integrated terminal and debugging tools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold bg-gray-800 text-white py-4 px-6 rounded-t-lg">Getting Started</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Setting up your development environment is crucial. Follow these steps:
          </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Install Node.js:</strong> Download it from{" "}
                <a
                  href="https://nodejs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline">
                  nodejs.org
                </a>.
              </li>
              <li>
                <strong>Install Visual Studio Code:</strong> Get it from{" "}
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline">
                  code.visualstudio.com
                </a>.
              </li>
              <li>
                <strong>Install React:</strong> Use the command <code>npx create-react-app my-app</code>.
              </li>
            </ul>
          </section>

        {/* Hands on activities */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold bg-gray-800 text-white py-4 px-6 rounded-t-lg">
            Hands-on Activities
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Practical application is key to mastering web development. Throughout this course, you'll engage in a series of hands-on activities designed to reinforce the concepts taught in each module. These activities will provide real-world experience and prepare you for industry challenges. Here's what you will accomplish:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Building a Portfolio Website
              </h3>
              <p className="leading-relaxed">
                Create a fully responsive and visually appealing portfolio website that reflects your skills and creativity. This project will include:
              </p>
              <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                <li>Using semantic HTML for structured content.</li>
                <li>Applying CSS and modern frameworks (e.g., Tailwind CSS) for styling.</li>
                <li>Integrating JavaScript for interactive components.</li>
                <li>Hosting your portfolio on GitHub Pages or Netlify for public access.</li>
                <li>Incorporating SEO best practices to improve visibility.</li>
              </ul>
            </li>

            <li>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Developing a Dynamic To-Do Application
              </h3>
              <p className="leading-relaxed">
                Gain hands-on experience with React by creating a to-do app. This project will help you understand how to manage application state and build dynamic user interfaces. Key features include:
              </p>
              <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                <li>Creating and managing components in React.</li>
                <li>Utilizing hooks like `useState` and `useEffect` for state management.</li>
                <li>Implementing CRUD (Create, Read, Update, Delete) operations.</li>
                <li>Enhancing user experience with animations and error handling.</li>
                <li>Styling the app for a professional, user-friendly design.</li>
              </ul>
            </li>

            <li>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Collaborating on GitHub with Classmates
              </h3>
              <p className="leading-relaxed">
                Learn how to work effectively in a collaborative environment using Git and GitHub. This activity simulates real-world software development team dynamics and focuses on:
              </p>
              <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                <li>Setting up a shared repository for team projects.</li>
                <li>Creating and managing branches for feature development.</li>
                <li>Submitting pull requests and participating in code reviews.</li>
                <li>Resolving merge conflicts and maintaining clean commit histories.</li>
                <li>Leveraging GitHub Actions to automate workflows, such as testing and deployment.</li>
              </ul>
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-6">
            These activities are designed not only to deepen your understanding of the concepts covered in class but also to equip you with a portfolio of real-world projects that showcase your skills to potential employers.
          </p>
        </section>


        {/* Conclusion */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold bg-gray-800 text-white py-4 px-6 rounded-t-lg">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            By the end of this course, you’ll have the skills and confidence to create modern websites and web apps. With practice, you can become a proficient web developer ready to tackle real-world challenges.
          </p>
        </section>
        <footer className="text-center mt-10 text-gray-500">
          <p>© 2024 Morgan Technical Training. All rights reserved.</p>
        </footer>
      </div>
    </div>
    </>
  );
};

export default Lesson7;
