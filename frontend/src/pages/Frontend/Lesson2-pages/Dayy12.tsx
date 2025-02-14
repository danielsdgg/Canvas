import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Dayy12:React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();
      
        // State for file upload
        const [submitted, setSubmitted] = useState(false);
      
        const [form, setForm] = useState({
          assignmentId: 8,
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
        {/* Title */}
        <h1 className="uppercase text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
            Lesson 2 Project: Build an E-Commerce Website
        </h1>

        {/* Project Overview */}
        <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Project Overview</h2>
            <p className="text-gray-600">In this project, you will build a fully functional **eCommerce website** using only **HTML, CSS (Tailwind), and JavaScript**. The goal is to reinforce your understanding of frontend development by implementing product listings, a shopping cart, and an order summary section.</p>
        </section>

        {/* Prerequisites */}
        <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Prerequisites</h2>
            <ul className="list-disc ml-6 text-gray-600">
                <li>Basic knowledge of **HTML structure**.</li>
                <li>Understanding of **CSS and Tailwind CSS** for styling.</li>
                <li>Familiarity with **JavaScript DOM manipulation**.</li>
            </ul>
        </section>

        {/* Project Requirements */}
        <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Project Requirements</h2>
            <p className="text-gray-600">Your eCommerce project should include the following sections:</p>
            <ul className="list-disc ml-6 text-gray-600">
                <li>A **homepage** with a featured products section.</li>
                <li>A **product catalog** displaying a list of available items.</li>
                <li>A **shopping cart** that allows users to add/remove products.</li>
                <li>An **order summary** displaying the total price.</li>
            </ul>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Step-by-Step Guide</h2>
            <ol className="list-decimal ml-6 text-gray-600">
                <li>Create an **index.html** file with a **navbar**, **product section**, and **shopping cart section**.</li>
                <li>Use **Tailwind CSS** to style the layout.</li>
                <li>Write **JavaScript functions** to handle adding and removing items from the cart.</li>
                <li>Update the **cart total dynamically** when items are added/removed.</li>
            </ol>
        </section>
        {/* Bonus Challenges */}
        <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Bonus Challenges</h2>
            <ul className="list-disc ml-6 text-gray-600">
                <li>Implement a **search bar** to filter products.</li>
                <li>Add a **checkout form** where users can enter their details.</li>
                <li>Store cart data in **localStorage** so it persists across page reloads.</li>
            </ul>
            <p className="mt-2">Remember to create a github repository of your work for grading purposes:</p>
          <p className="mt-2">Submit your GitHub link below after completing the task.</p>
        </section>
        <div className="mt-8 bg-gray-100 p-4 rounded">
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    <textarea
                        name = 'fileUrl'
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={6}
                        placeholder="Paste your github link"
                        value={form.fileUrl}
                        onChange={handleFileChange}
                    />
                    <button 
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
                    >
                        Submit Exercise
                    </button>
                </form>
                {submitted && (
                    <p className="text-green-600 font-medium">Thank you! Your assignment has been submitted successfully!</p>
                )}
        </div>
        {/* Words of Encouragement */}
      <section className="mb-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Congratulations!</h2>
        <p className="italic">
          You now have a strong foundation in javascript. Keep practicing to be a guru. See you on the next lesson where we'll learn React - a javascript library; and use it to build oustanding user interfaces. Hureeyy! 🚀
        </p>
      </section>

    </section>
    </>
  )
}

export default Dayy12
