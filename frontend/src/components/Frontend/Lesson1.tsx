import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SideNav from "../SideNav";

const Lesson1: React.FC = () => {
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

        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Introduction to HTML
          </h1>
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

export default Lesson1;
