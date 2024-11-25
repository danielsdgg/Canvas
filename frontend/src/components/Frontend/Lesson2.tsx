import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SideNav from "../SideNav";

const Lesson2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <SideNav />
      <div className="p-4 sm:p-8 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 min-h-screen">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back to Course
        </button>

        {/* Extended Overview */}
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Beginning of Frontend Development Course
          </h1>
        </header>
        <div className="max-w-full sm:max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-4 sm:p-8 mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
            Becoming a Frontend Developer: The Roadmap
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-6">
            Frontend development is an exciting field where you bring digital designs to life on the web. A frontend developer ensures that websites are visually appealing, interactive, and user-friendly. You’ll work on crafting responsive interfaces, optimizing performance, and implementing modern web standards.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-6">
            In this lesson, you will begin by learning about three core technologies: **HTML, CSS, and Git**. These foundational tools are essential for creating, styling, and managing web projects. Over the next two weeks, you will:
          </p>
          <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 space-y-4 mb-6">
            <li>
              Understand the structure of a webpage and learn how to use **HTML** to build content.
            </li>
            <li>
              Explore **CSS** to design visually appealing and responsive layouts.
            </li>
            <li>
              Master **Git**, a powerful tool for version control, ensuring smooth collaboration and project management.
            </li>
          </ul>
          <p className="text-sm sm:text-base text-gray-700">
            By the end of this lesson, you’ll have the skills to create your first simple website and manage it like a professional developer.
          </p>
        </div>

        {/* Header */}
        <header className="text-center mb-8">
          {/* <h1 className="text-2xl sm:text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Introduction to HTML
          </h1> */}
          <p className="text-sm sm:text-lg text-gray-800 mt-4">
            Learn the basics of HTML, the foundational markup language of the web.
          </p>
        </header>

        {/* Content */}
        <div className="max-w-full sm:max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-4 sm:p-8">
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">What is HTML?</h2>
            <p className="text-sm sm:text-base text-gray-700">
              HTML (Hypertext Markup Language) is the standard language for creating webpages. It provides the basic structure of web documents and is used to structure content such as text, images, links, and forms.
            </p>
          </section>

          {/* HTML Structure */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Basic Structure of HTML</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              Every HTML document follows a basic structure. This structure includes a doctype declaration, an HTML element, a head section, and a body section.
            </p>
            <pre className="bg-gray-100 p-4 sm:p-6 rounded-lg overflow-x-auto text-xs sm:text-sm text-blue-800">
              <code>
                {`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>
  </head>
  <body>
    <h1>Welcome to HTML!</h1>
    <p>This is a simple HTML page.</p>
  </body>
</html>`}
              </code>
            </pre>
            <p className="text-sm sm:text-base text-gray-700 mt-4">
              In this structure:
              <ul className="list-disc list-inside text-gray-600">
                <li><strong>DOCTYPE</strong>: Declares the document type (HTML5 in this case).</li>
                <li><strong>html</strong>: The root element of the document.</li>
                <li><strong>head</strong>: Contains metadata about the page (title, character encoding, etc.).</li>
                <li><strong>body</strong>: Contains the actual content of the webpage.</li>
              </ul>
            </p>
          </section>

          {/* Common HTML Tags */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Common HTML Tags</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              HTML uses a variety of tags to structure content. Here are some common ones:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 sm:p-6 bg-gradient-to-r from-green-100 to-green-200 rounded-lg shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Heading Tags</h3>
                <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
                  <code>
                    {`<h1>This is a heading level 1</h1>
<h2>This is a heading level 2</h2>
<h3>This is a heading level 3</h3>
<h4>This is a heading level 4</h4>
<h5>This is a heading level 5</h5>
<h6>This is a heading level 6`}
                  </code>
                </pre>
                <p className="mt-4 text-gray-700">
                  Heading tags are used to create titles and subheadings in your document. <code>&lt;h1&gt;</code> is the highest level and <code>&lt;h6&gt;</code> is the lowest.
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Paragraph Tags</h3>
                <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
                  <code>{`<p>This is a paragraph of text.</p>`}</code>
                </pre>
                <p className="mt-4 text-gray-700">
                  The <code>&lt;p&gt;</code> tag is used for defining paragraphs in HTML.
                </p>
              </div>
            </div>
          </section>

          {/* Attributes */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">HTML Attributes</h2>
            <p className="text-sm sm:text-base text-gray-700">
              HTML tags can have attributes that provide additional information. Attributes are added inside the opening tag.
            </p>
            <div className="p-4 sm:p-6 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Example of a Link with Attributes</h3>
              <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
                <code>{`<a href="https://www.example.com" target="_blank">Click here to visit Example</a>`}</code>
              </pre>
              <p className="mt-4 text-gray-700">
                The <code>&lt;a&gt;</code> tag creates hyperlinks. In this example:
                <ul className="list-disc list-inside text-gray-600">
                  <li><strong>href</strong>: Specifies the URL of the page the link goes to.</li>
                  <li><strong>target</strong>: Specifies where to open the linked document (in this case, a new tab).</li>
                </ul>
              </p>
            </div>
          </section>

          {/* Forms */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">HTML Forms</h2>
            <p className="text-sm sm:text-base text-gray-700">
              Forms are used to collect user input. Below is an example of a simple HTML form:
            </p>
            <div className="p-4 sm:p-6 bg-gradient-to-r from-teal-100 to-teal-200 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Form Example</h3>
              <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
                <code>{`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />
  <input type="submit" value="Submit" />
</form>`}</code>
              </pre>
              <p className="mt-4 text-gray-700">
                Forms allow users to input data. This example uses <code>&lt;input&gt;</code> fields to collect a name and email.
              </p>
            </div>
          </section>

        {/* Git */}
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
            Git: A Comprehensive Guide
          </h1>
          <p className="text-sm sm:text-lg text-gray-800 mt-4">
            Learn everything you need to know about Git, version control, and GitHub.
          </p>
        </header>

        {/* Introduction */}
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-8 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Introduction to Git</h2>
          <p className="text-sm sm:text-base text-gray-700 mb-6">
            **Git** is a distributed version control system that allows developers to track changes in their code, collaborate on projects, and maintain the integrity of their codebase. It is an essential tool for every software developer.
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            With Git, you can:
          </p>
          <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 space-y-4 mb-6">
            <li>Keep a history of your project's changes.</li>
            <li>Collaborate with other developers seamlessly.</li>
            <li>Experiment with new features using branching.</li>
            <li>Revert to previous versions of your code if needed.</li>
          </ul>
        </div>

        {/* Setting Up Git */}
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-8 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Setting Up Git</h2>
          <p className="text-sm sm:text-base text-gray-700 mb-6">
            To use Git on your computer, you'll need to install it first and configure it for your projects.
          </p>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Installing Git</h3>
          <ol className="list-decimal pl-6 text-sm sm:text-base text-gray-700 space-y-4 mb-6">
            <li>Go to the official Git website: <a href="https://git-scm.com/" className="text-blue-600 hover:underline">git-scm.com</a>.</li>
            <li>Download the Git installer for your operating system.</li>
            <li>Run the installer and follow the prompts to complete the installation.</li>
            <li>Verify the installation by running <code>git --version</code> in your terminal.</li>
          </ol>

          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Configuring Git</h3>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            Once Git is installed, you need to configure your username and email address. These details are used to associate commits with your identity.
          </p>
          <pre className="bg-gray-100 p-4 sm:p-6 rounded-lg overflow-x-auto text-xs sm:text-sm text-blue-800">
            <code>
              {`# Set your name
git config --global user.name "Your Name"

# Set your email
git config --global user.email "youremail@example.com"`}
            </code>
          </pre>
        </div>

        {/* Creating a GitHub Profile */}
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-8 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Creating a GitHub Profile</h2>
          <p className="text-sm sm:text-base text-gray-700 mb-6">
            GitHub is a platform that allows you to host and share Git repositories. Follow these steps to create an account:
          </p>
          <ol className="list-decimal pl-6 text-sm sm:text-base text-gray-700 space-y-4 mb-6">
            <li>Visit <a href="https://github.com/" className="text-blue-600 hover:underline">github.com</a>.</li>
            <li>Click on **Sign Up** and fill in your details (username, email, and password).</li>
            <li>Verify your email address by clicking the confirmation link sent to your inbox.</li>
            <li>Log in to your account and explore the GitHub dashboard.</li>
          </ol>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Setting Up a Repository</h3>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            To start using GitHub, you need to create a repository (repo) where you’ll store your project files.
          </p>
          <pre className="bg-gray-100 p-4 sm:p-6 rounded-lg overflow-x-auto text-xs sm:text-sm text-blue-800">
            <code>
              {`# Create a new repository on GitHub
# Follow the instructions to clone the repo locally
git clone https://github.com/username/repository-name.git`}
            </code>
          </pre>
        </div>

        {/* Common Git Commands */}
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-8 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Common Git Commands</h2>
          <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 space-y-4 mb-6">
            <li>
              **git init**: Initialize a new Git repository.
            </li>
            <li>
              **git add**: Stage changes for commit.
            </li>
            <li>
              **git commit -m "message"**: Commit changes with a message.
            </li>
            <li>
              **git push**: Upload changes to a remote repository.
            </li>
            <li>
              **git pull**: Fetch and merge changes from a remote repository.
            </li>
          </ul>
        </div>

        {/* Conclusion on git */}
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Remarks</h2>
          <p className="text-sm sm:text-base text-gray-700">
            Git and GitHub are powerful tools that every developer must master. From tracking changes to collaborating with others, they play a crucial role in modern software development. Practice these commands and explore GitHub features to enhance your skills.
          </p>
        </div>

          {/* Conclusion */}
          <section className="mt-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Conclusion</h2>
            <p className="text-sm sm:text-lg text-gray-700">
              HTML is the backbone of web development. By mastering its basic structure and common tags, you can start building web pages. As you advance, you will learn about more complex topics such as CSS and JavaScript integration.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Lesson2;
