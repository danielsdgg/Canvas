import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Day6:React.FC = () => {
    const navigate = useNavigate();
  return (
    <>
    <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaArrowLeft className="mr-2" />
            Back
        </button>
        <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">Introduction to Web - HTML</h1>

        <p className="text-gray-700 mb-4">
            HTML (HyperText Markup Language) is the standard markup language used to create web pages. It structures the
            content on the web, allowing browsers to display text, images, links, and other multimedia elements.
          </p>
          <p className="text-gray-700 mb-4">
            HTML is essential for every web developer as it forms the foundation of web development. Some of its key
            advantages include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Easy to learn and use.</li>
            <li>Works seamlessly with other technologies like CSS and JavaScript.</li>
            <li>Wide browser support and compatibility.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Students are required to upload their work to GitHub and submit the repository links for evaluation. 
            This will help in building a strong foundation for collaborative web development.
          </p>
          <p className="text-gray-700">
            Learning HTML is the first step in your journey to becoming a web developer. Let's dive into the basics and
            build a strong foundation.
          </p>
          {/* What is HTML */}
  <h4 className="text-lg font-semibold mb-2 mt-10 text-center">What is HTML?</h4>
  <p className="text-gray-700 mb-4">
    HTML is a markup language used to describe the structure of web pages. It uses tags to define elements, which browsers interpret to display content.
  </p>

  {/* Basic HTML Structure */}
  <h4 className="text-lg font-semibold mb-2">Basic HTML Structure</h4>
  <p className="text-gray-700 mb-4">
    Every HTML document follows a basic structure:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`}
  </pre>
  <p className="text-gray-700 mb-4">
    Let’s break it down:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li><code>&lt;!DOCTYPE html&gt;</code>: Declares the document type and version of HTML being used.</li>
    <li><code>&lt;html&gt;</code>: The root element of the document.</li>
    <li><code>&lt;head&gt;</code>: Contains meta-information, such as the title and linked resources (e.g., CSS or JavaScript files).</li>
    <li><code>&lt;body&gt;</code>: Contains the content of the web page displayed in the browser.</li>
  </ul>

  {/* Common HTML Elements */}
  <h4 className="text-lg font-semibold mb-2">Common HTML Elements</h4>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li><code>&lt;h1&gt; to &lt;h6&gt;</code>: Headings, where <code>&lt;h1&gt;</code> is the largest and <code>&lt;h6&gt;</code> is the smallest.</li>
    <li><code>&lt;p&gt;</code>: Paragraphs, used for blocks of text.</li>
    <li><code>&lt;a href="url"&gt;</code>: Anchor tags, used to create hyperlinks.</li>
    <li><code>&lt;img src="url" alt="description"&gt;</code>: Image tags, used to display images.</li>
    <li><code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code>: Unordered and ordered lists.</li>
    <li><code>&lt;table&gt;</code>: Tables, used to display tabular data.</li>
  </ul>

  {/* Attributes */}
  <h4 className="text-lg font-semibold mb-2">Attributes</h4>
  <p className="text-gray-700 mb-4">
    Attributes provide additional information about HTML elements. They are included in the opening tag and have a name-value pair.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example</a>`}
  </pre>
  <p className="text-gray-700 mb-4">
    In this example:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li><code>href</code>: Specifies the URL of the link.</li>
    <li><code>target="_blank"</code>: Opens the link in a new tab.</li>
    <li><code>rel="noopener noreferrer"</code>: Ensures security and privacy when opening links.</li>
  </ul>

  {/* HTML Forms */}
  <h4 className="text-lg font-semibold mb-2 text-center mt-8">HTML Forms</h4>
  <p className="text-gray-700 mb-4">
    Forms are used to collect user input. Here's an example:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Submit</button>
</form>`}
  </pre>
  <div className="mb-8">
  <p className="text-gray-700 mb-4">
    The structure of an HTML document forms the foundation of any web page. It defines how the browser interprets and displays the content. Understanding these essential components is crucial for building well-structured web pages.
  </p>

  <p className="text-gray-700 mb-4">
    An HTML document follows a standard hierarchy and includes the following key elements:
  </p>

  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li>
      <strong>&lt;!DOCTYPE html&gt;</strong>: Specifies the document type and version of HTML being used. For modern web pages, this declaration indicates HTML5.
    </li>
    <li>
      <strong>&lt;html&gt;</strong>: The root element that wraps all the content of the page. It contains both metadata and visible elements.
    </li>
    <li>
      <strong>&lt;head&gt;</strong>: The metadata container that includes information like the document title, character encoding, external stylesheets, and JavaScript files. This section does not display content directly on the page.
    </li>
    <li>
      <strong>&lt;body&gt;</strong>: The main section that contains the visible content of the webpage, such as headings, paragraphs, images, and other elements.
    </li>
  </ul>

  <p className="text-gray-700 mb-4">
    Below is an example of a simple HTML document structure:
  </p>

  <pre className="bg-gray-800 text-white p-4 rounded mb-4">
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Structure Example</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <header>
      <h1>Welcome to My Web Page</h1>
    </header>
    <main>
      <p>This is a simple HTML document example showcasing its structure.</p>
      <img src="example.jpg" alt="Example Image">
    </main>
    <footer>
      <p>&copy; 2024 Your Name</p>
    </footer>
  </body>
</html>`}
  </pre>

  <p className="text-gray-700 mb-4">
    <strong>Additional Notes:</strong>
  </p>
  <ul className="list-disc list-inside text-gray-700">
    <li>
      Always include the <strong>&lt;!DOCTYPE html&gt;</strong> declaration at the beginning of your HTML document to ensure compatibility with modern web standards.
    </li>
    <li>
      The <strong>&lt;meta charset="UTF-8"&gt;</strong> tag in the <strong>&lt;head&gt;</strong> ensures proper handling of special characters.
    </li>
    <li>
      The <strong>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</strong> tag makes the page responsive on different devices.
    </li>
    <li>
      Use semantic elements like <strong>&lt;header&gt;</strong>, <strong>&lt;main&gt;</strong>, and <strong>&lt;footer&gt;</strong> for better readability and accessibility.
    </li>
  </ul>
</div>
{/* HTML Best Practices */}
<h4 className="text-lg font-semibold mb-2">HTML Best Practices</h4>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li>Use semantic HTML tags (e.g., <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>) to improve accessibility and SEO.</li>
    <li>Ensure all images include descriptive <code>alt</code> attributes.</li>
    <li>Validate your HTML using the W3C Validator (<a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://validator.w3.org/</a>).</li>
    <li>Organize your code with proper indentation for better readability.</li>
  </ul>

  {/* Practice Exercises */}
  <h4 className="text-lg font-semibold mb-2">Practice Exercises</h4>
  <ol className="list-decimal list-inside text-gray-700 mb-4">
    <li>Create an HTML page with a heading, paragraph, and a link.</li>
    <li>Build a form with fields for name, email, and a message, and add a submit button.</li>
    <li>Use an image tag to display an image, ensuring you include an appropriate <code>alt</code> attribute.</li>
    <li>Experiment with lists by creating both ordered and unordered lists.</li>
    <li>Design a table with at least three rows and two columns.</li>
  </ol>

  {/* Resources */}
  <h4 className="text-lg font-semibold mb-2">Resources for Further Learning</h4>
  <ul className="list-disc list-inside text-gray-700">
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">MDN Web Docs: HTML</a></li>
    <li><a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">W3Schools: HTML Tutorial</a></li>
    <li><a href="https://html.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">HTML.com</a></li>
  </ul>
  <p className="text-gray-700 mt-4">
    By the end of Day 6, you should be familiar with the basic structure and elements of HTML, ready to start creating web pages. Spend some time experimenting and building simple projects to solidify your understanding.
  </p>
    </section>
    </>
  )
}

export default Day6