import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Day12:React.FC = () => {
    const navigate = useNavigate();
  return (
    <>
    <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaArrowLeft className="mr-2" />
            Back
        </button>
        <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
            Lesson 1 Project
        </h1>
        <p className="text-gray-800 mb-4 leading-relaxed">
            For your project, you will be creating a simple landing page using HTML, CSS, and Tailwind CSS. The landing page should include the following elements:
        </p>
        
        <h3 className="text-xl font-bold text-gray-800 mb-4">Project Requirements</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
            <li>A responsive navigation bar with at least three links.</li>
            <li>A hero section with a heading, subheading, and a call-to-action button.</li>
            <li>A section showcasing at least three features or services.</li>
            <li>A simple contact form with fields for name, email, and message.</li>
            <li>A footer with social media links and copyright information.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mb-4">Code-Along Example</h3>
        <p className="text-gray-800 mb-4 leading-relaxed">Here’s an example of a simple hero section using Tailwind CSS:</p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4 overflow-x-auto">
{`<section className="bg-blue-500 text-white py-20 text-center">
    <h1 className="text-4xl font-bold">Welcome to My Landing Page</h1>
    <p className="mt-2 text-lg">This is a simple hero section using Tailwind CSS</p>
    <button className="mt-4 px-6 py-2 bg-white text-blue-500 rounded hover:bg-gray-300">Get Started</button>
</section>`}
        </pre>

        <h3 className="text-xl font-bold text-gray-800 mb-4">Practical Exercise</h3>
        <p className="text-gray-800 mb-4 leading-relaxed">Your task is to replicate the above example and expand it by adding a features section, a contact form, and a footer.</p>

        <h3 className="text-xl font-bold text-gray-800 mb-4">Submit Your Work</h3>
        <p className="text-gray-800 mb-4 leading-relaxed">Once you complete the project, submit your GitHub repository URL below:</p>
        <input type="text" className="w-full p-2 border rounded mb-4" placeholder="Enter your GitHub repository URL" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
    </section>
    </>
  )
}

export default Day12
