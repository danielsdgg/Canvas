import React from 'react';
import SideNav from '../../components/SideNav';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Lesson8 = () => {
  const navigate = useNavigate();

  return (
    <>
      <SideNav />
      <div className="flex-1 p-6 bg-gradient-to-r md:ml-16">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back to Course
        </button>
        <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-center text-4xl font-bold text-blue-900 mb-2">Lesson 2 - HTML</h1>

        {/* Intro Section */}
        <section className="shadow-lg rounded-lg p-8 mb-8 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
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
        <section className="mb-12 bg-gradient-to-r from-blue-100 via-green-100 to-blue-100">
          <h2 className="text-2xl font-semibold mb-4 text-center text-green-600">Week 1: Introduction to HTML</h2>

          <div className="mb-8">
  <h3 className="text-xl font-bold text-center">Day 1: HTML Overview</h3>
  <p className="text-gray-700 mb-4">
    HTML (HyperText Markup Language) is the foundation of the web. It provides the structure of web pages by defining elements such as headings, paragraphs, images, links, and more. Mastering HTML allows you to create well-structured and accessible web content.
  </p>
  
  {/* What is HTML */}
  <h4 className="text-lg font-semibold mb-2">What is HTML?</h4>
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
  <h4 className="text-lg font-semibold mb-2">HTML Forms</h4>
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
    By the end of Day 1, you should be familiar with the basic structure and elements of HTML, ready to start creating web pages. Spend some time experimenting and building simple projects to solidify your understanding.
  </p>
</div>

<div className="mb-8">
  <h3 className="text-xl font-bold text-center">Day 2: Structure of an HTML Document</h3>
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


{/* Day 3 */}
<div className="mb-8">
  <h3 className="text-xl font-bold text-center">Day 3: Common HTML Tags</h3>
  <p className="text-gray-700 mb-4">
    Explore commonly used HTML tags like <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>,
    <code>&lt;div&gt;</code>, and more. These tags help structure content effectively on a webpage.
  </p>
  <p className="text-gray-700 mb-4">
    Commonly used tags include:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li><strong>&lt;p&gt;</strong>: Defines a paragraph, used for regular text content.</li>
    <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong>: Define headings from largest (<code>&lt;h1&gt;</code>) to smallest (<code>&lt;h6&gt;</code>). Use headings to structure your content hierarchically.</li>
    <li><strong>&lt;div&gt;</strong>: Groups content into sections for styling or scripting purposes. Commonly used as a container for other elements.</li>
    <li><strong>&lt;span&gt;</strong>: Inline container for text or elements, often used for styling parts of text.</li>
    <li><strong>&lt;img&gt;</strong>: Embeds an image in the document. Requires the <code>src</code> attribute to specify the image file.</li>
    <li><strong>&lt;a&gt;</strong>: Defines a hyperlink, used to link to other pages or resources.</li>
  </ul>
  <p className="text-gray-700 mb-4">
    Example:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<h1>Main Heading</h1>
<p>This is a paragraph.</p>
<div>
  <h2>Subheading</h2>
  <p>Content inside a div.</p>
  <img src="example.jpg" alt="Example Image">
  <a href="https://example.com">Visit Example</a>
</div>`}
  </pre>
  <p className="text-gray-700 mt-4">
    <strong>Note:</strong> Proper use of HTML tags not only improves the structure and readability of your code but also enhances SEO and accessibility.
  </p>
</div>


{/* Day 4 */}
<div className="mb-8">
  <h3 className="text-xl font-bold text-center">Day 4: Links and Images</h3>
  <p className="text-gray-700 mb-4">
    Learn how to add links using the <code>&lt;a&gt;</code> tag and include images with the <code>&lt;img&gt;</code> tag. Links and images are fundamental elements for navigation and visual content on web pages.
  </p>
  <p className="text-gray-700">
    Adding links and images is essential for creating interactive and visually appealing pages. Here are key aspects to understand:
  </p>
  <ul className="list-disc list-inside text-gray-700">
    <li><strong>&lt;a href="url"&gt;</strong>: The anchor tag used to create hyperlinks that connect to other pages or resources. The <code>href</code> attribute specifies the URL of the page the link goes to. You can also use <code>target="_blank"</code> to open the link in a new tab.</li>
    <li><strong>&lt;img src="image.jpg" alt="description"&gt;</strong>: The image tag is used to embed images. The <code>src</code> attribute specifies the path to the image file, and the <code>alt</code> attribute provides alternative text for the image if it fails to load or for screen readers.</li>
  </ul>
  <p className="text-gray-700">
    Example of a basic hyperlink:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<a href="https://example.com" target="_blank">Visit Example</a>`}
  </pre>
  <p className="text-gray-700">
    Example of an image with alternative text:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<img src="image.jpg" alt="A beautiful scenery">`}
  </pre>
  <p className="text-gray-700">
    You can also add more attributes to enhance functionality, such as:
  </p>
  <ul className="list-disc list-inside text-gray-700">
    <li><strong><code>title</code></strong>: Provides additional information on hover. Example: <code>&lt;a href="https://example.com" title="Click to visit Example"&gt;Visit Example&lt;/a&gt;</code></li>
    <li><strong><code>width</code> and <code>height</code></strong>: Adjust the dimensions of an image. Example: <code>&lt;img src="image.jpg" alt="Scenery" width="500" height="300"&gt;</code></li>
  </ul>
</div>


{/* Day 5 */}
<div className="mb-8">
  <h3 className="text-xl font-bold text-center">Day 5: Lists and Tables</h3>
  <p className="text-gray-700 mb-4">
    Get familiar with creating ordered and unordered lists and structuring data using tables. Lists and tables are essential for organizing and displaying information in a structured format.
  </p>
  <p className="text-gray-700">
    Use lists to organize items into groups:
  </p>
  <ul className="list-disc list-inside text-gray-700">
    <li><strong>&lt;ul&gt;</strong>: An unordered list, used for items where the order does not matter. Items are typically displayed with bullet points.</li>
    <li><strong>&lt;ol&gt;</strong>: An ordered list, used for items where the order is important. Items are typically displayed with numbers or letters.</li>
    <li><strong>&lt;li&gt;</strong>: A list item, used within <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> to define individual items.</li>
  </ul>
  <p className="text-gray-700">
    Example of a list:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>`}
  </pre>
  <p className="text-gray-700">
    Tables:
  </p>
  <ul className="list-disc list-inside text-gray-700">
    <li><strong>&lt;table&gt;</strong>: Defines the table container.</li>
    <li><strong>&lt;tr&gt;</strong>: Represents a table row.</li>
    <li><strong>&lt;td&gt;</strong>: Represents a cell in a table row.</li>
    <li><strong>&lt;th&gt;</strong>: Represents a header cell, typically bold and centered.</li>
  </ul>
  <p className="text-gray-700">
    Example of a table:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
  <tr>
    <td>Data 3</td>
    <td>Data 4</td>
  </tr>
</table>`}
  </pre>
  <p className="text-gray-700">
    Tips for working with tables:
  </p>
  <ul className="list-disc list-inside text-gray-700">
    <li>Use <code>&lt;th&gt;</code> for header cells to make the content bold and centered.</li>
    <li>Use <code>colspan</code> and <code>rowspan</code> attributes to merge cells across columns or rows.</li>
    <li>Use CSS classes to style tables, adjust borders, and control spacing.</li>
  </ul>
</div>

{/* Weekly Assignment */}
<div className="bg-gray-100 p-6 rounded-lg">
  <h3 className="text-xl font-bold text-blue-600">Weekly Assignment / Code Quiz</h3>
  <p className="text-gray-700 mb-2">
    Build a webpage that includes the following elements, demonstrating your understanding of the content learned from Day 1 to Day 5:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-2">
    <li>A title, heading, and paragraph.</li>
    <li>An image with alternative text.</li>
    <li>Both ordered and unordered lists with at least three items each.</li>
    <li>A table with headers, rows, and cells, including at least two rows and two columns.</li>
    <li>Interactive links that navigate to a different webpage.</li>
  </ul>
  <p className="text-gray-700 font-semibold block mb-2">
    Follow the instructions and submit your code as a GitHub repository link.
  </p>
  <p className="text-gray-700 mb-4">
    Here are the main requirements for the assignment:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li>Ensure that your webpage is structured using proper HTML tags as learned in the previous days.</li>
    <li>Style your page minimally using CSS or Tailwind to maintain a clean look.</li>
    <li>Ensure that all images have descriptive alternative text for accessibility.</li>
    <li>Include a table with header cells to illustrate the use of <code>&lt;th&gt;</code> tags.</li>
    <li>Include a section with hyperlinks that open a new page or lead to a different section within the same page.</li>
  </ul>
  <p className="text-gray-700 font-semibold block mb-2">
    Submit your code for evaluation by pasting the link to your GitHub repository.
  </p>
  <form>
    <input type="url" placeholder="https://github.com/your-repo"
      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
      required />
    <button type="submit"
      className="mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
      Submit
    </button>
  </form>
</div>

      </section>

        {/* Week 2 Content */}
        <section className="mb-12 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
          <h2 className="text-2xl font-semibold mb-4 text-center text-green-600">Week 2: Intermediate HTML Concepts</h2>

{/* Day 1 */}
<div className="mb-8">
  <h3 className="text-xl font-bold text-center">Day 1: Semantic HTML</h3>
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
</div>


{/* Day 2 */}
<div className="mb-8">
  <h3 className="text-xl text-center font-bold">Day 2: Multimedia Elements</h3>
  <p className="text-gray-700 mb-4">
    Explore how to add audio and video to your webpage using the <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> tags. These elements provide a simple way to include media without needing third-party plugins.
  </p>
  <p className="text-gray-700 mb-4">
    The <code>&lt;audio&gt;</code> tag is used to embed audio content, while the <code>&lt;video&gt;</code> tag is used for embedding video content. Both tags support the `controls` attribute to allow users to play, pause, and control the volume.
  </p>
  <p className="text-gray-700 mb-4">
    Common attributes for these tags include:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li><strong>controls</strong>: Adds play, pause, and volume control buttons.</li>
    <li><strong>autoplay</strong>: Automatically starts playing when the page loads.</li>
    <li><strong>loop</strong>: Replays the media automatically when it reaches the end.</li>
    <li><strong>muted</strong>: Starts the media with the sound muted.</li>
    <li><strong>poster</strong>: Specifies an image to be shown while the video is downloading or until the user hits play.</li>
  </ul>
  <p className="text-gray-700 mb-4">
    Example of embedding an audio file:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`}
  </pre>
  <p className="text-gray-700 mb-4">
    Example of embedding a video file:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<video controls width="600">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>`}
  </pre>
  <p className="text-gray-700 mt-4">
    Practice embedding audio and video files into your webpage using these examples. Experiment with adding additional attributes to customize the media behavior, such as setting the `autoplay` or `loop` attributes for a unique user experience.
  </p>
</div>


{/* Assignment */}
<div className="bg-gray-100 p-6 rounded-lg">
  <h3 className="text-xl font-bold text-blue-600">End of Lesson 2 Assignment - HTML</h3>
  <p className="text-gray-700 mb-4">
    For this assignment, create a complete webpage that demonstrates your understanding of HTML and all the concepts we've covered in Week 1 and Week 2. Your webpage should include the following features:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li>
      <strong>Semantic Structure:</strong> Use semantic HTML tags to organize your content, including a <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code>.
    </li>
    <li>
      <strong>Headings and Text Content:</strong> Include headings (<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, etc.) and paragraphs to display text content.
    </li>
    <li>
      <strong>Lists:</strong> Add both ordered (<code>&lt;ol&gt;</code>) and unordered (<code>&lt;ul&gt;</code>) lists to showcase different types of content organization.
    </li>
    <li>
      <strong>Images:</strong> Embed at least one image with appropriate alternative text (<code>&lt;img&gt;</code>) to ensure accessibility.
    </li>
    <li>
      <strong>Tables:</strong> Create a table to display data with rows and columns, using <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, and <code>&lt;th&gt;</code> elements.
    </li>
    <li>
      <strong>Forms:</strong> Design a form to collect user feedback that includes text inputs, radio buttons, checkboxes, and a submit button. Use <code>&lt;form&gt;</code> and related input elements.
    </li>
    <li>
      <strong>Multimedia Elements:</strong> Embed audio and video content on your page using the <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> tags with `controls` and `src` attributes. Provide alternative text for browser support.
    </li>
  </ul>
  <p className="text-gray-700 font-semibold mt-4 mb-2">
    Ensure your webpage is responsive and adheres to modern HTML best practices. Make sure to test it on different devices for optimal performance.
  </p>
  <p className="text-gray-700 mb-2">
    Submit your code by sharing a link to your GitHub repository below:
  </p>
  <form>
    <input 
      type="url" 
      placeholder="https://github.com/your-repo"
      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
    <button 
      type="submit"
      className="mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
    >
      Submit
    </button>
  </form>
</div>

        </section>
        </div>
      </div>
    </>
  );
};

export default Lesson8;
