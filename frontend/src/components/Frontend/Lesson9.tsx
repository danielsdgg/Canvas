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
        <h1 className="text-center text-4xl font-bold text-blue-900 mb-2">Lesson 3 - CSS Fundamentals & Flexbox/Grid</h1>

        {/* Intro Section */}
        <section className="mb-12">
          <p className="text-gray-700 mb-4">
            CSS (Cascading Style Sheets) is a cornerstone technology of the web, used to style and lay out web pages.
            It allows developers to control the look and feel of a site, including colors, fonts, and layouts.
          </p>
          <p className="text-gray-700 mb-4">
            Flexbox and Grid are powerful CSS layout systems that provide efficient ways to design responsive and structured web pages.
          </p>
          <p className="text-gray-700">
            Students are required to practice the concepts daily, share their work on GitHub, and submit links for evaluation.
          </p>
        </section>

        {/* Week 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Week 1: CSS Fundamentals & Layouts</h2>

          {/* Day 1 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 1: Introduction to CSS</h3>
            <p className="text-gray-700 mb-4">
              Learn the basics of CSS, including syntax, selectors, and the box model.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`body {
  font-family: Arial, sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
}`}
            </pre>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 2: Understanding the Box Model</h3>
            <p className="text-gray-700 mb-4">
              Dive into the CSS box model, which consists of margins, borders, padding, and content.
            </p>
            <p className="text-gray-700">
              Example:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`div {
  width: 200px;
  padding: 20px;
  border: 5px solid #000;
  margin: 10px;
}`}
            </pre>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 3: Flexbox Basics</h3>
            <p className="text-gray-700 mb-4">
              Learn how to use Flexbox to create flexible and responsive layouts.
            </p>
            <p className="text-gray-700">
              Example:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`display: flex;
justify-content: center;
align-items: center;`}
            </pre>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 4: Grid Basics</h3>
            <p className="text-gray-700 mb-4">
              Understand CSS Grid for creating advanced two-dimensional layouts.
            </p>
            <p className="text-gray-700">
              Example:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;`}
            </pre>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold">Day 5: Combining Flexbox & Grid</h3>
            <p className="text-gray-700 mb-4">
              Explore practical examples that combine Flexbox and Grid to build modern web layouts.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`<div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Box 1</div>
  <div>Box 2</div>
</div>`}
            </pre>
          </div>
        </section>
      </div>
    </>
  );
};

export default Lesson9;
