import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Dayy4: React.FC = () => {
  const navigate = useNavigate();
  const [githubLink, setGithubLink] = useState('');

  const handleSubmit = () => {
    if (githubLink) {
      alert(`GitHub Link Submitted: ${githubLink}`);
    } else {
      alert('Please enter a valid GitHub link.');
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
          <input
            type="text"
            className="border p-2 w-full rounded"
            placeholder="Paste your GitHub link here"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
          />
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default Dayy4;
