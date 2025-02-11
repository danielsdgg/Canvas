import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Day12:React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();
        
          // State for file upload
          const [submitted, setSubmitted] = useState(false);
        
          const [form, setForm] = useState({
            assignmentId: 4,
            userId: userData?.userDetails.id, // Ensuring a valid initial state
            fileUrl: "",
          });
        
          // Handle file selection
          const handleFileChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const name = e.target.name;
            const value = e.target.value;
            setForm(prev => ({
                ...prev,
                [name]: value
            }));
        };
        
        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
          
            console.log("Form Data:", form);
            // console.log("User Token:", userToken);
          
            if (!userToken) {
              alert("Authentication error. Please log in again.");
              return;
            }
          
            try {
              const response = await fetch("http://localhost:8080/api/v1/assignments/submit", {
                method: "POST",
                headers: { 
                  'Authorization': `Bearer ${userToken}`,
                  'Content-Type': 'application/json' 
                },
                body: JSON.stringify(form),
              });
          
              if (response.ok) {
                setSubmitted(true);
                alert("Assignment submitted successfully!");
              } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
              }
            } catch (error) {
              console.error("Error submitting assignment:", error);
              alert("Failed to submit. Please try again later.");
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

    <form onSubmit={handleSubmit} className='mt-6'>
    <h3 className="text-xl font-bold text-gray-800 mb-4">Practical Exercise</h3>
        <p className="text-gray-800 mb-4 leading-relaxed">Your task is to replicate the above example and expand it by adding a features section, a contact form, and a footer.</p>

        <h3 className="text-xl font-bold text-gray-800 mb-4">Submit Your Work</h3>
        <p className="text-gray-800 mb-4 leading-relaxed">Once you complete the project, submit your GitHub repository URL below:</p>
        <textarea
                    name='fileURL'
                    value={form.fileUrl}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your GitHub repository URL"
                    onChange={handleFileChange}
                />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
    </form>
        {submitted && (
                <p className="mt-4 text-green-600 font-medium">Thank you! Your assignment has been submitted successfully.</p>
            )}
    </section>
    </>
  )
}

export default Day12
