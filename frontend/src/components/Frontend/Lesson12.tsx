import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import SideNav from '../SideNav';

const Lesson12: React.FC = () => {
    const navigate = useNavigate()

  return (
    <>
    <SideNav/>
    <div className="p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 min-h-screen mx-auto">
        {/* Back Button */}
        <button onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-blue-800 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaArrowLeft className="mr-2" />
            Back to Course
        </button>
      <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">FRONTEND DEVELOPMENT - FINAL PROJECT</h1>
        <p className="text-gray-700 text-lg mb-8 text-center">
          This project will guide you in creating a dynamic e-commerce website with full CRUD functionalities, 
          using React, JavaScript, HTML, and CSS. Follow the detailed plan to complete the project in one week.
        </p>

        <h2 className="text-2xl font-semibold text-red-800 mb-4">PROJECT OVERVIEW</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700 text-lg">
          <li><strong>Title:</strong> E-commerce Website</li>
          <li><strong>Duration:</strong> 1 Week</li>
          <li><strong>Goal:</strong> Build a responsive website with CRUD functionalities.</li>
          <li><strong>Technologies:</strong> React, JavaScript, HTML, CSS</li>
        </ul>

        <h2 className="text-2xl font-semibold text-red-800 mb-4">Project Phases</h2>

        {/* Phase 1: Planning */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Phase 1: Planning (Day 1)</h3>
          <p className="text-gray-700 mb-3">
            Begin by defining the purpose and structure of your website. Create wireframes for the following pages:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Home</li>
            <li>Product Listing</li>
            <li>Product Details</li>
            <li>Cart</li>
            <li>Admin Dashboard</li>
          </ul>
          <p className="text-gray-700 mt-3">Tools: Figma, Adobe XD, or any wireframing tool.</p>
        </div>

        {/* Phase 2: Setup */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Phase 2: Setup (Day 2)</h3>
          <p className="text-gray-700 mb-3">Set up your project with the following steps:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Initialize a React project using <code>npx create-react-app ecommerce</code>.</li>
            <li>Install dependencies like <code>react-router-dom</code> and <code>axios</code>.</li>
            <li>Organize the folder structure as follows:
            <pre className="bg-gray-200 text-black p-6 rounded-lg overflow-y-auto shadow-inner text-sm">
          <code>
            src/
            ├── components/
            │   ├── Navbar.js
            │   ├── Footer.js
            │   ├── ProductCard.js
            │   ├── ProductForm.js
            │   └── AdminDashboard.js
            ├── pages/
            │   ├── Home.js
            │   ├── ProductList.js
            │   ├── ProductDetails.js
            │   ├── Cart.js
            │   └── Admin.js
            ├── App.js
            ├── index.js
            └── styles/
          </code>
        </pre>
            </li>
          </ul>
        </div>

        {/* Phase 3: Implementation */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Phase 3: Implementation (Day 3-6)</h3>
          <p className="text-gray-700 mb-3">Develop core functionalities for the website:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Day 3:</strong> Create Navbar, Footer, and Home Page.</li>
            <li><strong>Day 4:</strong> Develop Product Listing and Product Details pages with mock data.</li>
            <li><strong>Day 5:</strong> Add CRUD functionalities for managing products in the admin dashboard.</li>
            <li><strong>Day 6:</strong> Implement Cart functionality and complete routing.</li>
          </ul>
        </div>

        {/* Phase 4: Testing & Deployment */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Phase 4: Testing & Deployment (Day 7)</h3>
          <p className="text-gray-700 mb-3">Finalize your project by testing and deploying:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Test all features and ensure responsiveness on different devices.</li>
            <li>Fix bugs and improve user experience.</li>
            <li>Deploy the website using Netlify or Vercel.</li>
          </ul>
        </div>

        {/* Submission */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-inner">
          <h3 className="text-lg font-bold text-blue-600 mb-3">Submission</h3>
          <p className="text-gray-700 mb-4">
            Submit your project by providing the following details:
          </p>
          <form>
            <input
              type="url"
              placeholder="Deployed Website URL"
              className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="url"
              placeholder="GitHub Repository URL"
              className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Submit Project
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Lesson12;
