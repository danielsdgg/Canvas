import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCode,
  FaLaptopCode,
  FaColumns,
  FaTh,
  FaBookOpen,
  FaPlayCircle,
  FaLink,
  FaCheckCircle
} from "react-icons/fa";

const Day10: React.FC = () => {
  const navigate = useNavigate();

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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Flexbox & Grid</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Welcome to Day 10 of Morgan Technical Training’s frontend development course! Today, we dive into Flexbox and Grid, two powerful CSS layout systems that revolutionize how we design responsive, flexible webpages. Together, they enable precise control over alignment, spacing, and structure, making them essential tools for modern web development.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            In this lesson, you’ll learn the strengths of Flexbox (one-dimensional layouts) and Grid (two-dimensional layouts), how they complement each other, and practical examples of their combined use—including with Tailwind CSS utilities. By mastering these techniques, you’ll create dynamic layouts for Morgan-LMS projects and beyond.
          </p>

          {/* Why Combine Flexbox & Grid? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Why Combine Flexbox & Grid?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Flexbox and Grid are not mutually exclusive; they shine when used together. Grid excels at defining the overall structure (rows and columns), while Flexbox fine-tunes alignment within those sections. This synergy allows for complex, responsive designs with minimal code.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaColumns className="mr-2 mt-1 text-indigo-600" />
                Use Grid for the overarching layout, dividing the page into rows and columns (e.g., <code>grid-template-columns: 1fr 2fr;</code>).
              </li>
              <li className="flex items-start">
                <FaTh className="mr-2 mt-1 text-indigo-600" />
                Use Flexbox for precise alignment and spacing within grid cells (e.g., <code>justify-content: center;</code>).
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Combining both creates responsive, dynamic designs adaptable to various screen sizes.
              </li>
            </ul>
          </div>

          {/* Basic Example */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaPlayCircle className="mr-2 text-indigo-600" />
              Basic Example: Combining Flexbox & Grid
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Here’s a simple example using Grid for structure and Flexbox for alignment within a cell:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Box 1</div>
    <div>Box 2</div>
</div>`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 mb-4">
              In Tailwind CSS, achieve this with:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<div class="grid grid-cols-2 gap-5">
    <div class="flex justify-center items-center">Box 1</div>
    <div>Box 2</div>
</div>`}
            </pre>
            <div className="grid grid-cols-2 gap-5 bg-indigo-100 p-5 rounded mt-4">
              <div className="flex justify-center items-center bg-white p-4 border">Box 1</div>
              <div className="bg-white p-4 border">Box 2</div>
            </div>
          </div>

          {/* Practical Applications */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Practical Applications
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Combining Flexbox and Grid is ideal for real-world scenarios requiring both structure and alignment:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaColumns className="mr-2 mt-1 text-indigo-600" />
                Dashboard layouts with cards and charts, using Grid for placement and Flexbox for card content alignment.
              </li>
              <li className="flex items-start">
                <FaTh className="mr-2 mt-1 text-indigo-600" />
                Product grids with centered images and text, leveraging Grid for columns and Flexbox for centering.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Responsive layouts where Flexbox adjusts spacing within Grid-defined sections across screen sizes.
              </li>
            </ul>
          </div>

          {/* Advanced Example */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaPlayCircle className="mr-2 text-indigo-600" />
              Advanced Example: Header, Sidebar, and Main Content
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Create a layout with a header spanning the full width, a sidebar, and a main content area, using Grid for structure and Flexbox for header alignment:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '10px' }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gridColumn: 'span 2' }}>
        <h1>Logo</h1>
        <nav>Navigation</nav>
    </header>
    <aside>Sidebar</aside>
    <main>Main Content</main>
</div>`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              In Tailwind CSS:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<div class="grid grid-cols-2 gap-5">
    <header class="flex justify-between items-center col-span-2">...</header>
    <aside>...</aside>
    <main>...</main>
</div>`}
            </pre>
            <div className="grid grid-cols-2 gap-5 bg-indigo-100 p-5 rounded mt-4">
              <header className="flex justify-between items-center bg-white p-4 border col-span-2">
                <h1 className="font-bold">Logo</h1>
                <nav>Navigation</nav>
              </header>
              <aside className="bg-white p-4 border">Sidebar</aside>
              <main className="bg-white p-4 border">Main Content</main>
            </div>
          </div>

          {/* Try It Yourself */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Try It Yourself
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Create a responsive product grid with centered content using Grid and Flexbox:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<div class="grid grid-cols-3 gap-4">
    <div class="flex justify-center items-center bg-gray-300 h-24">Product 1</div>
    <div class="flex justify-center items-center bg-gray-300 h-24">Product 2</div>
    <div class="flex justify-center items-center bg-gray-300 h-24">Product 3</div>
</div>`}
            </pre>
            <div className="grid grid-cols-3 gap-4 bg-indigo-100 p-5 rounded mt-4">
              <div className="flex justify-center items-center bg-white p-4 border h-24">Product 1</div>
              <div className="flex justify-center items-center bg-white p-4 border h-24">Product 2</div>
              <div className="flex justify-center items-center bg-white p-4 border h-24">Product 3</div>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Next week, we’ll explore Tailwind CSS in depth to simplify these layouts further.
            </p>
          </div>

          {/* Further Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Further Learning Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Deepen your Flexbox and Grid skills with these resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  CSS-Tricks: A Guide to Flexbox
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://css-tricks.com/snippets/css/complete-guide-grid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  CSS-Tricks: A Complete Guide to Grid
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://tailwindcss.com/docs/grid-template-columns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Tailwind CSS Grid Documentation
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://flexboxfroggy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Flexbox Froggy: Interactive Learning Game
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://cssgridgarden.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Grid Garden: Interactive Learning Game
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Day10;