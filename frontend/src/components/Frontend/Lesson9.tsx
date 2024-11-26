import React from 'react';
import SideNav from '../SideNav';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Lesson9 = () => {
  const navigate = useNavigate();

  return (
    <>
      <SideNav />
      <div className="container mx-auto p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back to Course
        </button>
        <h1 className="text-center text-4xl font-bold text-blue-900 mb-2">Lesson 2 - HTML</h1>

        {/* Intro Section */}
        <section className="mb-12">
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
        </section>

        {/* Week 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Week 1: Introduction to HTML</h2>

          {/* Day 1 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 1: HTML Overview</h3>
            <p className="text-gray-700 mb-4">
              Learn the basics of HTML, the building block of the web, including tags, elements, and attributes.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`}
            </pre>
          </div>

                  {/* Day 2 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold">Day 2: Structure of an HTML Document</h3>
          <p className="text-gray-700 mb-4">
            Understand the essential components of an HTML document, including the doctype declaration, 
            the <code>&lt;html&gt;</code> root element, and the <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> sections.
          </p>
          <p className="text-gray-700">
            An HTML document has a structured hierarchy:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>&lt;!DOCTYPE html&gt;</strong>: Declares the document type (HTML5 in this case).</li>
            <li><strong>&lt;html&gt;</strong>: The root element containing all the content.</li>
            <li><strong>&lt;head&gt;</strong>: Contains metadata such as the title, links to stylesheets, and scripts.</li>
            <li><strong>&lt;body&gt;</strong>: Contains the visible content of the page, such as headings, paragraphs, and images.</li>
          </ul>
          <p className="text-gray-700">
            Example:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`<!DOCTYPE html>
<html>
  <head>
    <title>Structure Example</title>
  </head>
  <body>
    <h1>This is the Body</h1>
  </body>
</html>`}
          </pre>
        </div>

        {/* Day 3 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold">Day 3: Common HTML Tags</h3>
          <p className="text-gray-700 mb-4">
            Explore commonly used HTML tags like <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>, 
            and <code>&lt;div&gt;</code>.
          </p>
          <p className="text-gray-700">
            Commonly used tags include:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>&lt;p&gt;</strong>: Defines a paragraph.</li>
            <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong>: Define headings from largest (<code>&lt;h1&gt;</code>) to smallest (<code>&lt;h6&gt;</code>).</li>
            <li><strong>&lt;div&gt;</strong>: Groups content into sections for styling or scripting.</li>
          </ul>
          <p className="text-gray-700">
            Example:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`<h1>Main Heading</h1>
<p>This is a paragraph.</p>
<div>
  <p>Content inside a div.</p>
</div>`}
          </pre>
        </div>

        {/* Day 4 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold">Day 4: Links and Images</h3>
          <p className="text-gray-700 mb-4">
            Learn how to add links using the <code>&lt;a&gt;</code> tag and include images with the <code>&lt;img&gt;</code> tag.
          </p>
          <p className="text-gray-700">
            Adding links and images is essential for creating interactive and visually appealing pages:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>&lt;a href="url"&gt;</strong>: Creates a hyperlink.</li>
            <li><strong>&lt;img src="image.jpg" alt="description"&gt;</strong>: Displays an image with alternative text.</li>
          </ul>
          <p className="text-gray-700">
            Example:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`<a href="https://example.com">Visit Example</a>
<img src="image.jpg" alt="A beautiful scenery">`}
          </pre>
        </div>

        {/* Day 5 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold">Day 5: Lists and Tables</h3>
          <p className="text-gray-700 mb-4">
            Get familiar with creating ordered and unordered lists and structuring data using tables.
          </p>
          <p className="text-gray-700">
            Use lists to organize items:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>&lt;ul&gt;</strong>: Unordered list.</li>
            <li><strong>&lt;ol&gt;</strong>: Ordered list.</li>
            <li><strong>&lt;li&gt;</strong>: List item.</li>
          </ul>
          <p className="text-gray-700">
            Tables:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>&lt;table&gt;</strong>: Defines the table.</li>
            <li><strong>&lt;tr&gt;</strong>: Table row.</li>
            <li><strong>&lt;td&gt;</strong>: Table data.</li>
          </ul>
          <p className="text-gray-700">
            Example:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<table>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>`}
          </pre>
        </div>

        {/* Weekly Assignment */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-600">Weekly Assignment / Code Quiz</h3>
          <p className="text-gray-700 mb-2">
            Build a webpage that includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>A title, heading, and paragraph.</li>
            <li>An image with alternative text.</li>
            <li>Both ordered and unordered lists.</li>
            <li>A table with rows and columns.</li>
          </ul>
          <p className="text-gray-700 font-semibold block mb-2">
            Submit your code for evaluation.
          </p>
          <form>
              <input type="url" placeholder="https://github.com/your-repo"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                required/>
              <button type="submit"
                className="mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
                Submit
              </button>
            </form>
        </div>
      </section>

        {/* Week 2 Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Week 2: Intermediate HTML Concepts</h2>

          {/* Day 1 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 1: Semantic HTML</h3>
            <p className="text-gray-700 mb-4">
              Understand the importance of using semantic HTML tags for better accessibility and SEO. Semantic tags provide
              meaning to the content, such as <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;main&gt;</code>,
              and <code>&lt;article&gt;</code>.
            </p>
            <p className="text-gray-700">Example:</p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`<header>
  <h1>Welcome to My Blog</h1>
</header>
<main>
  <article>
    <h2>Article Title</h2>
    <p>This is a blog post.</p>
  </article>
</main>
<footer>
  <p>© 2024 My Blog</p>
</footer>`}
            </pre>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 2: Forms and Input Elements</h3>
            <p className="text-gray-700 mb-4">
              Learn how to create interactive forms using HTML input elements, labels, and buttons. Forms are crucial for
              collecting user data.
            </p>
            <p className="text-gray-700">Example:</p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <button type="submit">Submit</button>
</form>`}
            </pre>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 3: Multimedia Elements</h3>
            <p className="text-gray-700 mb-4">
              Explore how to add audio and video to your webpage using the <code>&lt;audio&gt;</code> and
              <code>&lt;video&gt;</code> tags.
            </p>
            <p className="text-gray-700">Example:</p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
<video controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>`}
            </pre>
          </div>

          {/* Assignment */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-600">End of Lesson2 Assignment - HTML</h3>
            <p className="text-gray-700 mb-2">
              Build a webpage that includes the following features:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>A header, main section, and footer using semantic HTML.</li>
              <li>A form for collecting user feedback.</li>
              <li>Embedded audio and video elements.</li>
            </ul>
            <p className="block text-gray-700 font-semibold mt-2 mb-2">Submit your code for evaluation by providing the GitHub repository link below.</p>
            <form>
              <input type="url" placeholder="https://github.com/your-repo"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required/>
              <button type="submit"
                className="mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Lesson9;
