import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCode,
  FaLaptopCode,
  FaList,
  FaLink,
  FaEdit,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Dayy4: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for file upload
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 5,
    userId: userData?.userDetails.id ?? "", // Fallback to empty string if undefined
    fileUrl: "",
  });

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Data:", form);

    if (!userToken) {
      alert("Authentication error. Please log in again.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/v1/assignments/submit", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
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
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaLaptopCode className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Loops and Iterations</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Loops and iterations are foundational to programming, enabling you to execute code repeatedly with efficiency. They streamline repetitive tasks, reducing manual effort and improving code maintainability. Without loops, you’d be stuck writing the same instructions over and over—tedious and error-prone!
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              In JavaScript, loops are indispensable for tasks like processing arrays, iterating over object properties, running functions multiple times, and managing asynchronous operations. Mastering loops is key to writing scalable, optimized applications—skills you’ll build on throughout this course.
            </p>
          </div>

          {/* Types of Loops */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Types of Loops
            </h2>
            <div className="space-y-6">
              {/* For Loop */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. For Loop
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  The <code>for</code> loop repeats a block of code a specific number of times—ideal for known iteration counts.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}`}
                </pre>
              </div>

              {/* While Loop */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. While Loop
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  The <code>while</code> loop runs as long as its condition is true—great for dynamic stopping points.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`let count = 0;
while (count < 5) {
  console.log("Count:", count);
  count++;
}`}
                </pre>
              </div>

              {/* Do-While Loop */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Do-While Loop
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  The <code>do-while</code> loop executes at least once, then continues while the condition holds.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`let num = 0;
do {
  console.log("Number:", num);
  num++;
} while (num < 5);`}
                </pre>
              </div>

              {/* ForEach Loop */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. ForEach Loop (Array Iteration)
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  The <code>forEach</code> method simplifies array iteration with a clean, functional syntax.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit));`}
                </pre>
              </div>

              {/* Map Function */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  5. Map Function
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  The <code>map</code> method transforms each array element, creating a new array—perfect for data manipulation.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared);`}
                </pre>
              </div>

              {/* Filter Function */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  6. Filter Function
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  The <code>filter</code> method selects elements based on a condition, returning a new array.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practice Exercise */}
          <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practice Exercise
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Test your loop skills with this task. Write a JavaScript program that:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Uses a <code>for</code> loop to iterate through numbers 1 to 20.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Prints "Even" for even numbers and "Odd" for odd numbers.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Stores the results in an array and logs it to the console.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 italic">
              Submit your GitHub repository link below after completing the exercise.
            </p>
          </div>

          {/* GitHub Submission */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaLink className="mr-2 text-indigo-600" />
              Submit Your Work
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label
                className="block text-gray-800 text-sm sm:text-base font-semibold mb-2"
                htmlFor="fileUrl"
              >
                Paste Your GitHub Repository Link:
              </label>
              <textarea
                name="fileUrl"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                rows={4}
                placeholder="e.g., https://github.com/username/repo"
                value={form.fileUrl}
                onChange={handleFileChange}
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Submit Exercise
              </button>
            </form>
            {submitted && (
              <p className="mt-4 text-green-600 font-medium flex items-center">
                <FaCheckCircle className="mr-2" />
                Your exercise has been submitted successfully!
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dayy4;