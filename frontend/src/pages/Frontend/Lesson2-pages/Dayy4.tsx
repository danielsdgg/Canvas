import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Dayy4: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();
          
            // State for file upload
            const [submitted, setSubmitted] = useState(false);
          
            const [form, setForm] = useState({
              assignmentId: 5,
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
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
          Loops and Iterations
        </h1>

        {/* Introduction */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">Introduction</h2>
          <p className="text-gray-700 mt-2">
            Loops and iterations are fundamental concepts in programming that allow us to execute a block of code multiple times. 
            They help automate repetitive tasks, making code more efficient and readable. Without loops, programmers would need 
            to manually write repetitive instructions, leading to longer and less maintainable code.
          </p>
          <p className="text-gray-700 mt-2">
            In JavaScript, loops help in processing arrays, iterating over object properties, executing functions multiple times, 
            and handling asynchronous operations efficiently. Understanding loops is crucial for writing optimized and scalable applications.
          </p>
        </section>

        {/* Loops Content */}
        <div className="text-gray-800">
        <header className="text-xl font-bold text-blue-800">Types of Loops</header>
          <h2 className="text-xl font-bold mt-4">1. For Loop</h2>
          <p className="mb-2">The for loop is used to repeat a block of code a fixed number of times.</p>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}`}
          </pre>

          <h2 className="text-xl font-bold mt-4">2. While Loop</h2>
          <p className="mb-2">The while loop runs as long as the condition remains true.</p>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`let count = 0;
while (count < 5) {
  console.log("Count:", count);
  count++;
}`}
          </pre>

          <h2 className="text-xl font-bold mt-4">3. Do-While Loop</h2>
          <p className="mb-2">A do-while loop always executes at least once.</p>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`let num = 0;
do {
  console.log("Number:", num);
  num++;
} while (num < 5);`}
          </pre>

          <h2 className="text-xl font-bold mt-4">4. ForEach Loop (Array Iteration)</h2>
          <p className="mb-2">The forEach method is used to iterate over arrays.</p>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit));`}
          </pre>

          <h2 className="text-xl font-bold mt-4">5. Map Function</h2>
          <p className="mb-2">The map method creates a new array by applying a function to each element.</p>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared);`}
          </pre>

          <h2 className="text-xl font-bold mt-4">6. Filter Function</h2>
          <p className="mb-2">The filter method creates a new array with elements that satisfy a condition.</p>
          <pre className="bg-gray-800 text-white p-4 rounded">
            {`const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);`}
          </pre>
        </div>

        {/* Practice Exercise */}
        <div className="mt-8 bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-bold">Practice Exercise</h2>
          <p className="mt-2">Write a JavaScript program that:</p>
          <ul className="list-disc ml-6">
            <li>Uses a for loop to iterate through numbers 1-20.</li>
            <li>If the number is even, print "Even"; otherwise, print "Odd".</li>
            <li>Store the results in an array and log the array.</li>
          </ul>
          <p className="mt-2">Submit your GitHub link below after completing the task.</p>
        </div>

        {/* GitHub Submission */}
        <div className="mt-4">
        <form onSubmit={handleSubmit} className="mt-6">
          <label className="block text-gray-800 font-semibold mb-2" htmlFor="github-link">Submit Your GitHub Repository Link:</label>
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
                <p className="mt-4 text-green-600 font-medium">Your exercise has been submitted successfully.</p>
            )}
        </div>
      </section>
    </>
  );
};

export default Dayy4;
