import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Day8:React.FC = () => {
    const navigate = useNavigate();
    const [githubURL, setGithubURL] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (githubURL.trim() !== '') {
            setSubmitted(true);
        }
    };
  return (
    <>
    <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaArrowLeft className="mr-2" />
            Back
        </button>
        <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">CSS and Semantic HTML</h1>
        <section className="mb-12">
          <p className="text-gray-800 mb-4 leading-relaxed">
            CSS (Cascading Style Sheets) is a fundamental technology of the web, used to style and structure web pages.
            It allows developers to define how HTML elements are displayed, including colors, fonts, spacing, and layouts.
            By mastering CSS, you can create visually appealing and user-friendly websites.
          </p>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Two of the most powerful layout techniques in CSS are **Flexbox** and **Grid**. Flexbox is designed for one-dimensional layouts and is perfect for aligning items horizontally or vertically. 
            Grid, on the other hand, is a two-dimensional layout system that enables the creation of complex, responsive designs.
          </p>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Tailwind CSS is a modern utility-first framework that extends CSS functionality. It simplifies styling by providing pre-defined utility classes, allowing developers to build custom designs directly in their HTML or JSX files.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Students are encouraged to:
            <ul className="list-disc ml-6 mt-2">
              <li>Practice daily by building small projects or replicating designs.</li>
              <li>Share their progress on GitHub and submit links for evaluation.</li>
              <li>Collaborate with peers to learn advanced concepts faster.</li>
            </ul>
          </p>
          <h3 className="text-xl font-bold text-gray-800 mb-4">1. Setting Up CSS</h3>
          <p className="text-gray-800 mb-4 leading-relaxed">
            To begin using CSS in your project, you need to link a CSS file in your HTML document. Here's how:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded mb-6">
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
            
          <p className="text-gray-800 mb-4 leading-relaxed">
            Save your CSS rules in a <code>styles.css</code> file, and the above link will style your web page accordingly.
          </p>
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-center mb-4 text-blue-600">CSS Syntax</h4>
            <p className="text-gray-800 mb-4">
              A CSS rule consists of a selector and a declaration block. The selector targets the HTML element(s), and the declaration block defines the styles to apply. Here's an example:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`body {
                font-family: Arial, sans-serif;
                color: #333;
                margin: 0;
                padding: 0;
              }`}
            </pre>

            <h4 className="text-lg font-semibold text-blue-600 mt-6">CSS Selectors</h4>
            <p className="text-gray-800 mb-4">
              CSS selectors are patterns used to select the elements you want to style. Common selectors include:
            </p>
            <ul className="list-disc list-inside text-gray-800">
              <li><code>Type Selector</code>: Targets HTML tags (e.g., <code>p</code>, <code>div</code>).</li>
              <li><code>Class Selector</code>: Targets elements with a specific class (e.g., <code>.example</code>).</li>
              <li><code>ID Selector</code>: Targets a specific element with an ID (e.g., <code>#header</code>).</li>
              <li><code>Group Selector</code>: Targets multiple selectors (e.g., <code>h1, h2, h3</code>).</li>
              <li><code>Descendant Selector</code>: Targets elements inside a container (e.g., <code>.container p</code>).</li>
            </ul>

            <h4 className="text-lg font-semibold text-blue-600 mt-6">The Box Model</h4>
            <p className="text-gray-800 mb-4">
              The box model describes the layout and spacing of an element. It includes:
            </p>
            <ul className="list-disc list-inside text-gray-800">
              <li><strong>Content:</strong> The inner area where text and images appear.</li>
              <li><strong>Padding:</strong> Space between content and the border.</li>
              <li><strong>Border:</strong> The boundary around the padding.</li>
              <li><strong>Margin:</strong> Space outside the border separating the element from others.</li>
            </ul>
            <p className="text-gray-800 mt-4">
              For example, if you style a box with <code>margin</code>, <code>padding</code>, and <code>border</code>, it might look like this:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`div {
                margin: 20px;
                padding: 10px;
                border: 2px solid #000;
              }`}
            </pre>
            <h3 className="text-xl text-center font-bold text-blue-700 mt-2 mb-3"> Understanding the Box Model</h3>
            <p className="text-gray-800 mb-4">
              The CSS box model is a fundamental concept that defines how elements are structured and spaced in a web page. It consists of four main areas:
            </p>
            <ul className="list-disc list-inside text-gray-800 mb-4">
              <li><strong>Content:</strong> The innermost part where text and other elements appear.</li>
              <li><strong>Padding:</strong> The space between the content and the border.</li>
              <li><strong>Border:</strong> The edge surrounding the padding (or content if padding is not applied).</li>
              <li><strong>Margin:</strong> The outermost layer that creates space between the element and others.</li>
            </ul>
            <p className="text-gray-800 mb-4">
              For example, consider the following CSS code:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`div {
              width: 200px;
              padding: 20px;
              border: 5px solid #000;
              margin: 10px;
              }`}
            </pre>
            <p className="text-gray-800 mt-4">
              In Tailwind CSS, you can replicate this styling using utility classes. For example:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`<div className="w-52 p-5 border-2 border-black m-2">
              This is a Tailwind CSS styled div.
              </div>`}
            </pre>
            <div className="bg-gray-200 p-5 border-2 border-gray-500 m-4 rounded shadow-md">
              <p className="font-sans text-gray-800">This div demonstrates the box model with padding, border, and margin in Tailwind CSS.</p>
            </div>
            <p className="text-gray-800 mt-4">
              The box model plays a crucial role in layout design. Practice by experimenting with different <code>width</code>, <code>padding</code>, <code>margin</code>, and <code>border</code> values to understand their effects.
            </p>
            <p className="text-gray-800 mt-4">
              Additionally, tools like browser developer tools can help visualize the box model for any element. Right-click an element on a webpage, inspect it, and observe the box model diagram in the "Elements" tab.
            </p>
          </div>
        </section>
        <div className="mb-8">
  <h3 className="text-xl font-bold text-center text-blue-800"> Semantic HTML</h3>
  <p className="text-gray-700 mb-4">
    Understand the importance of using semantic HTML tags for better accessibility and SEO. Semantic tags provide
    meaning to the content, such as <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;main&gt;</code>,
    and <code>&lt;article&gt;</code>.
  </p>
  <p className="text-gray-700 mb-4">
    Using semantic HTML tags helps create more accessible, SEO-friendly, and maintainable web pages. These tags provide
    context to the content, making it easier for search engines and assistive technologies to interpret the structure of
    the page.
  </p>
  <p className="text-gray-700 mb-4">
    Here are some common semantic HTML tags and their purposes:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li><strong>&lt;header&gt;</strong>: Represents the introductory content or navigational links of a page.</li>
    <li><strong>&lt;footer&gt;</strong>: Contains information about the nearest section or the whole document, such as copyright details.</li>
    <li><strong>&lt;main&gt;</strong>: The primary content of the document, distinct from the header, footer, and sidebar.</li>
    <li><strong>&lt;article&gt;</strong>: A self-contained piece of content that could be distributed independently.</li>
    <li><strong>&lt;section&gt;</strong>: Used to group related content together.</li>
    <li><strong>&lt;aside&gt;</strong>: Represents content that is indirectly related to the content around it, such as sidebars or related links.</li>
  </ul>
  <p className="text-gray-700 mb-4">
    Example of a simple semantic HTML structure:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<header>
  <h1>Welcome to My Blog</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
<main>
  <section>
    <h2>Introduction</h2>
    <p>This is the introductory section of the webpage.</p>
  </section>
  <article>
    <h2>Article Title</h2>
    <p>This is a blog post detailing an interesting topic.</p>
  </article>
  <aside>
    <h3>Related Links</h3>
    <ul>
      <li><a href="#link1">Related Post 1</a></li>
      <li><a href="#link2">Related Post 2</a></li>
    </ul>
  </aside>
</main>
<footer>
  <p>© 2024 My Blog</p>
</footer>`}
  </pre>
  <p className="text-gray-700 mt-4">
    Practice using these semantic tags to create a small webpage that includes a header, main content section, and footer.
    This will help you build a strong understanding of semantic structure and make your web pages more accessible and SEO-friendly.
  </p>
  <p className="text-gray-800 mt-4">
    Congratulations on completing this day's content! Practice these basics and explore the flexibility of CSS to create unique designs. Now its time to put your knowledge to the test with the assignment below.
  </p>
</div>
<section className="bg-white shadow-lg rounded-lg p-8 mb-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold bg-gray-800 text-white py-4 px-6 rounded-t-lg">
                CSS & Semantic HTML Assignment
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
                This assignment will test your knowledge and skills in CSS and Semantic HTML. You are required to create a fully responsive webpage utilizing proper semantic HTML tags and styling it effectively with CSS. Ensure that your page follows best practices in web development.
            </p>
            <h3 className="text-2xl font-medium text-gray-500 mt-6">Assignment Instructions:</h3>
            <ul className="list-disc list-inside text-gray-700 ml-6 space-y-2">
                <li>Use semantic HTML tags to structure the webpage properly.</li>
                <li>Apply CSS styling using Flexbox and Grid.</li>
                <li>Ensure the webpage is fully responsive for both desktop and mobile views.</li>
                <li>Include a navigation bar, a content section, and a footer.</li>
                <li>Host your project on GitHub and submit the repository URL.</li>
            </ul>
            <form onSubmit={handleSubmit} className="mt-6">
                <label className="block text-gray-600 font-medium mb-2">GitHub Repository URL:</label>
                <input
                    type="url"
                    value={githubURL}
                    onChange={(e) => setGithubURL(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your GitHub repository URL"
                    required
                />
                <button
                    type="submit"
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                    Submit Assignment
                </button>
            </form>
            {submitted && (
                <p className="mt-4 text-green-600 font-medium">Thank you! Your assignment has been submitted successfully.</p>
            )}
        </section>

    </section>
    </>
  )
}

export default Day8
