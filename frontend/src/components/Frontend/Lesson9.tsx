import React from 'react';
import SideNav from '../SideNav';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Lesson9 = () => {
  const navigate = useNavigate();

  return (
    <>
      <SideNav />
      <div className="p-4 sm:p-8 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 min-h-screen sm:pl-[200px] flex flex-col items-center sm:items-start">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back to Course
        </button>
        <h1 className="text-center text-4xl font-bold text-blue-900 mb-2">Lesson 3 - CSS Fundamentals & Flexbox/Grid</h1>
          
        {/* Intro Section */}
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
        </section>
          
        {/* Getting Started Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Getting Started with CSS and Tailwind CSS</h2>
          
          {/* CSS Installation */}
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
            
          {/* Tailwind CSS Installation */}
          <h3 className="text-xl font-bold text-gray-800 mb-4">2. Setting Up Tailwind CSS</h3>
          <p className="text-gray-800 mb-4 leading-relaxed">
            To use Tailwind CSS, you need to install it in your project. Here’s a quick guide to set it up:
          </p>
            
          {/* Installation Steps */}
          <ol className="list-decimal ml-6 mb-4 leading-relaxed">
            <li>Install Tailwind CSS via npm:</li>
            <pre className="bg-gray-800 text-white p-4 rounded mb-4">
              {`npm install -D tailwindcss
        npx tailwindcss init`}
            </pre>
            <li>Configure your <code>tailwind.config.js</code> file to specify your content sources:</li>
            <pre className="bg-gray-800 text-white p-4 rounded mb-4">
              {`module.exports = {
          content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
          theme: {
            extend: {},
          },
          plugins: [],
        }`}
            </pre>
            <li>Add Tailwind directives to your CSS file:</li>
            <pre className="bg-gray-800 text-white p-4 rounded mb-4">
              {`@tailwind base;
        @tailwind components;
        @tailwind utilities;`}
            </pre>
            <li>Start your development server to see Tailwind in action:</li>
            <pre className="bg-gray-800 text-white p-4 rounded mb-4">
              {`npm run dev`}
            </pre>
          </ol>
              
          <p className="text-gray-800 mb-6 leading-relaxed">
            Once set up, you can use Tailwind classes directly in your HTML or JSX to style elements quickly and effectively.
          </p>
              
          {/* Example Outcome */}
          <h3 className="text-xl font-bold text-gray-800 mb-4">Expected Outcome</h3>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Here's an example of what you can achieve using Tailwind CSS:
          </p>
          <div className="bg-gray-100 p-4 rounded shadow-lg flex justify-center items-center text-gray-800">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Tailwind Styled Button
            </button>
          </div>
        </section>


        {/* Week 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Week 1: CSS Fundamentals & Layouts</h2>

          {/* Day 1 */}
          <div className="mb-8">
            <h3 className="text-xl text-center font-bold text-blue-700">DAY 1: Introduction to CSS</h3>
            <p className="text-gray-800 mb-4">
              CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. It allows you to control the layout, colors, fonts, and other visual aspects of a webpage. Today, we will explore its basics, including syntax, selectors, and the box model.
            </p>

            <h4 className="text-lg font-semibold text-blue-600">CSS Syntax</h4>
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

            <h4 className="text-lg font-semibold text-blue-600 mt-6">Using Tailwind CSS</h4>
            <p className="text-gray-800 mb-4">
              In Tailwind CSS, you can achieve the same effects using utility classes. For example, to style text and add spacing to a container, you might use:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`<div class="p-4 m-4 border-2 border-gray-800 text-center">
                <p class="text-gray-700 font-medium">This is a styled box.</p>
              </div>`}
            </pre>

            <div className="bg-white p-4 rounded mt-4 shadow-lg">
              <p className="font-sans text-gray-800">
                This is a Tailwind CSS styled div with a shadow and padding applied for visual emphasis.
              </p>
            </div>

            <p className="text-gray-800 mt-4">
              Congratulations on completing Day 1! Practice these basics and explore the flexibility of CSS and utility-first frameworks like Tailwind CSS to create amazing designs.
            </p>
          </div>


          {/* Day 2 */}
          <div className="mb-8">
            <h3 className="text-xl text-center font-bold text-blue-700">DAY 2: Understanding the Box Model</h3>
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

          {/* Day 3 */}
          <div className="mb-8">
            <h3 className="text-xl text-center font-bold text-blue-700">DAY 3: Flexbox Basics</h3>
            <p className="text-gray-800 mb-4">
              Flexbox is a powerful layout module in CSS that provides an efficient way to layout, align, and distribute space among items in a container, even when their size is dynamic.
            </p>
            <h4 className="text-lg font-semibold text-blue-600 mt-4">Key Flexbox Properties:</h4>
            <ul className="list-disc ml-6 text-gray-800">
              <li>
                <span className="font-semibold">display:</span> Enables a flex container using <code>display: flex;</code>.
              </li>
              <li>
                <span className="font-semibold">flex-direction:</span> Defines the direction of the main axis (<code>row</code>, <code>row-reverse</code>, <code>column</code>, <code>column-reverse</code>).
              </li>
              <li>
                <span className="font-semibold">justify-content:</span> Aligns items horizontally along the main axis (<code>flex-start</code>, <code>center</code>, <code>space-between</code>, etc.).
              </li>
              <li>
                <span className="font-semibold">align-items:</span> Aligns items vertically along the cross-axis (<code>stretch</code>, <code>center</code>, <code>baseline</code>, etc.).
              </li>
              <li>
                <span className="font-semibold">flex-wrap:</span> Controls whether items wrap onto multiple lines.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-blue-600 mt-4">Code Example:</h4>
            <p className="text-gray-800 mb-4">
              Below is an example of centering content both horizontally and vertically using Flexbox:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`/* CSS */
              .container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
              }`}
            </pre>
            <p className="text-gray-800 mt-4">
              In Tailwind CSS, you can achieve this layout with utility classes:
              <code className="bg-gray-100 p-1 rounded mx-1">flex</code>,
              <code className="bg-gray-100 p-1 rounded mx-1">justify-center</code>, and
              <code className="bg-gray-100 p-1 rounded mx-1">items-center</code>.
            </p>
              
            <div className="flex justify-center items-center bg-blue-200 p-5 border rounded mt-4 h-32">
              <p className="text-blue-800 font-semibold">This is a centered Flexbox container using Tailwind CSS.</p>
            </div>
              
            <h4 className="text-lg font-semibold text-blue-600 mt-4">Practical Application:</h4>
            <p className="text-gray-800">
              Flexbox is widely used for creating modern layouts, including:
            </p>
            <ul className="list-disc ml-6 text-gray-800 mt-2">
              <li>Navigation bars</li>
              <li>Responsive grids</li>
              <li>Vertically and horizontally centered content</li>
              <li>Sidebars and multi-column layouts</li>
            </ul>
              
            <h4 className="text-lg font-semibold text-blue-600 mt-4">Try It Yourself:</h4>
            <div className="bg-gray-100 p-4 rounded mt-2">
              <p className="text-gray-800">
                Create a navigation bar using Flexbox or Tailwind CSS:
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded mt-2">
                {`<div class="flex justify-between items-center p-4 bg-blue-600 text-white">
                <div>Logo</div>
                  <nav class="flex space-x-4">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                  </nav>
                </div>`}
              </pre>
            </div>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h3 className="text-xl text-center font-bold text-blue-700">DAY 4: Grid Basics</h3>
            <p className="text-gray-800 mb-4">
              CSS Grid is a powerful tool for creating two-dimensional layouts, allowing you to arrange items in rows and columns. It's perfect for building complex and responsive designs with ease.
            </p>

            <h4 className="text-lg font-semibold text-blue-600 mt-4">Key Grid Properties:</h4>
            <ul className="list-disc ml-6 text-gray-800">
              <li>
                <span className="font-semibold">display:</span> Enables grid layout with <code>display: grid;</code>.
              </li>
              <li>
                <span className="font-semibold">grid-template-columns:</span> Defines the structure of columns (e.g., <code>repeat(3, 1fr)</code>, <code>200px 1fr</code>).
              </li>
              <li>
                <span className="font-semibold">grid-template-rows:</span> Defines the structure of rows.
              </li>
              <li>
                <span className="font-semibold">gap:</span> Specifies the spacing between grid items.
              </li>
              <li>
                <span className="font-semibold">place-items:</span> Centers content in each grid cell (<code>center</code>, <code>start</code>, etc.).
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-blue-600 mt-4">Code Example:</h4>
            <p className="text-gray-800 mb-4">
              Here's a simple grid layout with three equal columns and spacing between items:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`/* CSS */
              .container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
              }`}
            </pre>
            <p className="text-gray-800 mt-4">
              In Tailwind CSS, this can be achieved with the following utility classes:
              <code className="bg-gray-100 p-1 rounded mx-1">grid</code>,
              <code className="bg-gray-100 p-1 rounded mx-1">grid-cols-3</code>, and
              <code className="bg-gray-100 p-1 rounded mx-1">gap-4</code>.
            </p>
              
            <div className="grid grid-cols-3 gap-4 bg-green-200 p-5 rounded mt-4">
              <div className="bg-white p-4 border">Item 1</div>
              <div className="bg-white p-4 border">Item 2</div>
              <div className="bg-white p-4 border">Item 3</div>
            </div>
              
            <h4 className="text-lg font-semibold text-blue-600 mt-4">Practical Application:</h4>
            <p className="text-gray-800">
              CSS Grid can be used for creating a variety of layouts, such as:
            </p>
            <ul className="list-disc ml-6 text-gray-800 mt-2">
              <li>Photo galleries</li>
              <li>Dashboard layouts</li>
              <li>Card-based designs</li>
              <li>Responsive grids</li>
            </ul>
              
            <h4 className="text-lg font-semibold text-blue-600 mt-4">Advanced Example:</h4>
            <p className="text-gray-800">
              You can combine rows and columns to create more complex grid layouts:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`/* CSS */
              .container {
                display: grid;
                grid-template-columns: 2fr 1fr;
                grid-template-rows: auto;
                gap: 20px;
              }`}
            </pre>
            <div className="grid grid-cols-2 gap-4 bg-green-200 p-5 rounded mt-4">
              <div className="bg-white p-4 border col-span-2">Header</div>
              <div className="bg-white p-4 border">Sidebar</div>
              <div className="bg-white p-4 border">Main Content</div>
              <div className="bg-white p-4 border col-span-2">Footer</div>
            </div>
              
            <h4 className="text-lg font-semibold text-blue-600 mt-4">Try It Yourself:</h4>
            <div className="bg-gray-100 p-4 rounded mt-2">
              <p className="text-gray-800">
                Build a photo gallery using CSS Grid or Tailwind CSS:
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded mt-2">
                {`<div class="grid grid-cols-4 gap-4">
                  <div class="bg-gray-300 h-24">Photo 1</div>
                  <div class="bg-gray-300 h-24">Photo 2</div>
                  <div class="bg-gray-300 h-24">Photo 3</div>
                  <div class="bg-gray-300 h-24">Photo 4</div>
                  </div>`}
              </pre>
            </div>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h3 className="text-xl text-center font-bold text-blue-700">
              DAY 5: Combining Flexbox & Grid
            </h3>
            <p className="text-gray-800 mb-4">
              Flexbox and Grid are not mutually exclusive; they can be combined to create highly flexible and powerful layouts. This combination is especially useful when creating complex designs with both rows and columns while maintaining precise alignment of elements.
            </p>

            <h4 className="text-lg font-semibold text-blue-600 mt-4">
              Why Combine Flexbox & Grid?
            </h4>
            <ul className="list-disc ml-6 text-gray-800">
              <li>
                Use Grid for the overall layout structure, such as dividing the page into rows and columns.
              </li>
              <li>
                Use Flexbox for precise alignment and spacing of items within each grid cell.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-blue-600 mt-4">Code Example:</h4>
            <p className="text-gray-800 mb-4">
              Here's an example of combining Grid for the overall structure and Flexbox for aligning content:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`<div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Box 1</div>
            <div>Box 2</div>
          </div>`}
            </pre>
            <p className="text-gray-800 mt-4">
              In Tailwind CSS, this can be achieved using:
              <code className="bg-gray-100 p-1 rounded mx-1">grid grid-cols-2 gap-5</code> for the grid layout and
              <code className="bg-gray-100 p-1 rounded mx-1">flex justify-center items-center</code> for aligning content within the flex container.
            </p>
              
            <div className="grid grid-cols-2 gap-5 bg-yellow-200 p-5 rounded mt-4">
              <div className="flex justify-center items-center bg-white p-4 border">Box 1</div>
              <div className="bg-white p-4 border">Box 2</div>
            </div>
              
            <h4 className="text-lg font-semibold text-blue-600 mt-4">Practical Applications:</h4>
            <p className="text-gray-800">
              Combining Flexbox and Grid is ideal for:
            </p>
            <ul className="list-disc ml-6 text-gray-800 mt-2">
              <li>Dashboard layouts with cards and charts</li>
              <li>Product grids with centered content</li>
              <li>Responsive layouts where alignment and spacing need fine-tuning</li>
            </ul>
              
            <h4 className="text-lg font-semibold text-blue-600 mt-4">Advanced Example:</h4>
            <p className="text-gray-800">
              Let's create a layout with a header, sidebar, and main content area where Flexbox is used inside the grid cells for alignment:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`<div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '10px' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h1>Logo</h1>
              <nav>Navigation</nav>
            </header>
            <aside>Sidebar</aside>
            <main>Main Content</main>
          </div>`}
            </pre>
              
            <div className="grid grid-cols-2 gap-5 bg-yellow-200 p-5 rounded mt-4">
              <header className="flex justify-between items-center bg-white p-4 border col-span-2">
                <h1 className="font-bold">Logo</h1>
                <nav>Navigation</nav>
              </header>
              <aside className="bg-white p-4 border">Sidebar</aside>
              <main className="bg-white p-4 border">Main Content</main>
            </div>
              
            <h4 className="text-lg font-semibold text-blue-600 mt-4">Try It Yourself:</h4>
            <div className="bg-gray-100 p-4 rounded mt-2">
              <p className="text-gray-800">
                Create a responsive product grid with centered content using this concept:
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded mt-2">
                {`<div class="grid grid-cols-3 gap-4">
                <div class="flex justify-center items-center bg-gray-300 h-24">Product 1</div>
                <div class="flex justify-center items-center bg-gray-300 h-24">Product 2</div>
                <div class="flex justify-center items-center bg-gray-300 h-24">Product 3</div>
                </div>`}
              </pre>
            </div>
          </div>
        </section>

        {/* Assignment Section */}
        <div className="mb-12 bg-gray-400">
          <h2 className="text-2xl text-center font-extrabold text-blue-800 mb-6">
            Assignment: Mastering CSS and Tailwind
          </h2>
          <p className="text-gray-800 mb-4 text-lg">
            Apply everything you've learned about CSS and Tailwind to create a complete, responsive webpage. This assignment will help you reinforce key concepts, from basic styling to advanced layouts with Flexbox and Grid.
          </p>

          <h3 className="text-xl font-bold text-blue-700 mt-4">Instructions:</h3>
          <ol className="list-decimal ml-6 text-gray-800 mt-2">
            <li>
              Design a **Landing Page** for a fictional product or service. Use your creativity and ensure the page is visually appealing and functional.
            </li>
            <li>
              Use **CSS Basics** for:
              <ul className="list-disc ml-6">
                <li>Setting up typography (fonts, colors, and sizes).</li>
                <li>Adding background colors, images, and gradients.</li>
                <li>Styling buttons and links with hover effects.</li>
              </ul>
            </li>
            <li>
              Implement **Flexbox** to:
              <ul className="list-disc ml-6">
                <li>Center elements horizontally and vertically.</li>
                <li>Create a responsive navbar.</li>
                <li>Align and distribute content in a hero section.</li>
              </ul>
            </li>
            <li>
              Use **Grid** to:
              <ul className="list-disc ml-6">
                <li>Design a feature section with multiple columns.</li>
                <li>Create a gallery layout.</li>
                <li>Organize a footer into distinct sections (e.g., links, social media, and contact info).</li>
              </ul>
            </li>
            <li>
              Combine **Flexbox and Grid** to:
              <ul className="list-disc ml-6">
                <li>Build a card layout for showcasing testimonials or products.</li>
                <li>Ensure proper alignment and spacing in your design.</li>
              </ul>
            </li>
            <li>
              Style the entire page using **Tailwind CSS** utilities for:
              <ul className="list-disc ml-6">
                <li>Consistency in spacing, colors, and responsiveness.</li>
                <li>Adding hover, focus, and active states for interactivity.</li>
              </ul>
            </li>
            <li>
              Make the page **Responsive**:
              <ul className="list-disc ml-6">
                <li>Ensure the design works seamlessly on desktop, tablet, and mobile screens.</li>
                <li>Test using Tailwind's responsive utilities (e.g., <code>sm:</code>, <code>md:</code>, <code>lg:</code>).</li>
              </ul>
            </li>
          </ol>

          <h3 className="text-xl font-bold text-blue-700 mt-6">Deliverables:</h3>
          <ul className="list-disc ml-6 text-gray-800 mt-2">
            <li>
              Submit a link to your live webpage (hosted on platforms like Netlify, Vercel, or GitHub Pages).
            </li>
            <li>
              Include a brief write-up or presentation (optional) explaining your design decisions and how you applied the concepts learned.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-blue-700 mt-6">Evaluation Criteria:</h3>
          <p className="text-gray-800 mt-2">
            Your assignment will be evaluated based on:
          </p>
          <ul className="list-disc ml-6 text-gray-800 mt-2">
            <li>Creativity and originality of the design.</li>
            <li>Effective use of CSS and Tailwind concepts.</li>
            <li>Clean, readable code (avoid duplication and unnecessary styles).</li>
            <li>Responsiveness and accessibility of the webpage.</li>
            <li>Attention to detail (consistent spacing, alignment, and color schemes).</li>
          </ul>

          <form className='items-center justify-center flex mt-2'>
            <input type="url" placeholder="Your-Assignment-Link" className="w-[400px] ml-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2" required />
            <button type="submit" className="ml-4 mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
              Submit
            </button>
          </form>

          <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 mt-6">
            <p className="text-gray-800">
              <strong>Tip:</strong> Don't forget to use browser developer tools to inspect and debug your design at various screen sizes. Take your time and experiment with different layouts!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lesson9;
