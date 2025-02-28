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
  FaBookOpen,
  FaRocket,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext"; // Adjust path if needed

const Dayy5: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 5, // Matches Day 5
    userId: userData?.userDetails.id ?? "", // Fallback to empty string
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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Arrays and Objects in JavaScript</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Introduction
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Welcome to Day 5 of Morgan Technical Training’s frontend course! Today, we explore arrays and objects—JavaScript’s powerhouse data structures. Arrays store ordered lists, perfect for sequences, while objects manage key-value pairs, ideal for structured data like user profiles or API responses.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              These structures build on everything you’ve learned: variables for storage, operators for manipulation, functions for logic, and loops for iteration. Mastering arrays and objects unlocks efficient data handling, a critical skill for real-world development.
            </p>
          </div>

          {/* Arrays */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Arrays
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Arrays are ordered, zero-indexed collections that hold multiple values of any type—numbers, strings, even other arrays or objects.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple
console.log(fruits.length); // Output: 3`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Access elements with indices (e.g., <code>fruits[1]</code> is "Banana"), and use <code>.length</code> for the total count.
            </p>
          </div>

          {/* Array Methods */}
          <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
    <FaEdit className="mr-2 text-indigo-600 text-2xl" />
    Common Array Methods
  </h2>
  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
    JavaScript arrays feature a rich set of built-in methods for manipulation and transformation, categorized as mutating (altering the original array) or non-mutating (returning a new array or value).
  </p>
  <div className="space-y-8">
    {/* Mutating Methods */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Mutating Methods</h3>
      <ul className="list-none text-gray-700 text-sm sm:text-base space-y-4">
        <li className="flex items-start bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
          <div className="flex-1">
            <strong className="font-medium text-gray-800"><code>push()</code>:</strong>{" "}
            <span>
              Adds one or more elements to the end of an array and returns the new length—ideal for growing lists dynamically.
            </span>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-3">
              {`let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]`}
            </pre>
          </div>
        </li>
        <li className="flex items-start bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
          <div className="flex-1">
            <strong className="font-medium text-gray-800"><code>pop()</code>:</strong>{" "}
            <span>
              Removes and returns the last element—useful for stack-like operations or trimming arrays.
            </span>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-3">
              {`let arr = [1, 2, 3];
arr.pop();
console.log(arr); // Output: [1, 2]`}
            </pre>
          </div>
        </li>
        <li className="flex items-start bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
          <div className="flex-1">
            <strong className="font-medium text-gray-800"><code>unshift()</code>:</strong>{" "}
            <span>
              Adds one or more elements to the start and returns the new length—handy for prepending items.
            </span>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-3">
              {`let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr); // Output: [0, 1, 2, 3]`}
            </pre>
          </div>
        </li>
        <li className="flex items-start bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
          <div className="flex-1">
            <strong className="font-medium text-gray-800"><code>shift()</code>:</strong>{" "}
            <span>
              Removes and returns the first element—perfect for queue-like behavior or shifting focus.
            </span>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-3">
              {`let arr = [1, 2, 3];
arr.shift();
console.log(arr); // Output: [2, 3]`}
            </pre>
          </div>
        </li>
      </ul>
    </div>

    {/* Non-Mutating Methods */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Non-Mutating Methods</h3>
      <ul className="list-none text-gray-700 text-sm sm:text-base space-y-4">
        <li className="flex items-start bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
          <div className="flex-1">
            <strong className="font-medium text-gray-800"><code>map()</code>:</strong>{" "}
            <span>
              Creates a new array by applying a function to each element—excellent for transforming data.
            </span>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-3">
              {`let arr = [1, 2, 3];
let doubled = arr.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]`}
            </pre>
          </div>
        </li>
        <li className="flex items-start bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
          <div className="flex-1">
            <strong className="font-medium text-gray-800"><code>filter()</code>:</strong>{" "}
            <span>
              Returns a new array with elements passing a condition—great for selective extraction.
            </span>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-3">
              {`let arr = [1, 2, 3, 4];
let evens = arr.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]`}
            </pre>
          </div>
        </li>
        <li className="flex items-start bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
          <div className="flex-1">
            <strong className="font-medium text-gray-800"><code>reduce()</code>:</strong>{" "}
            <span>
              Accumulates array values into a single result—versatile for sums, products, or custom reductions.
            </span>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-3">
              {`let arr = [1, 2, 3];
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 6`}
            </pre>
          </div>
        </li>
        <li className="flex items-start bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
          <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
          <div className="flex-1">
            <strong className="font-medium text-gray-800"><code>forEach()</code>:</strong>{" "}
            <span>
              Executes a function for each element without returning a value—ideal for side effects like logging.
            </span>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-3">
              {`let arr = ["a", "b", "c"];
arr.forEach(item => console.log(item));
// Output: a, b, c (one per line)`}
            </pre>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

          {/* Objects */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Objects
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Objects store data as key-value pairs, offering a flexible way to represent complex entities.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`const person = {
  name: "John",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "gaming"]
};
console.log(person.name); // Output: John
console.log(person["age"]); // Output: 30`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Access properties with dot notation (<code>person.name</code>) or bracket notation (<code>person["age"]</code>).
            </p>
          </div>

          {/* Object Methods */}
          <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
    <FaEdit className="mr-2 text-indigo-600 text-2xl" />
    Common Object Methods
  </h2>
  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
    Objects come with powerful utility methods to manipulate and inspect their properties—making data handling more efficient and intuitive.
  </p>
  <ul className="list-none text-gray-700 text-sm sm:text-base space-y-4">
    <li className="flex items-start bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div className="flex-1">
        <strong className="font-medium text-gray-800"><code>Object.keys()</code>:</strong>{" "}
        <span>
          Returns an array of an object’s enumerable property names (keys), useful for iteration or analysis.
        </span>
        <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-3">
          {`const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // Output: ["a", "b"]`}
        </pre>
      </div>
    </li>
    <li className="flex items-start bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div className="flex-1">
        <strong className="font-medium text-gray-800"><code>Object.values()</code>:</strong>{" "}
        <span>
          Returns an array of an object’s enumerable property values—great for extracting data.
        </span>
        <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-3">
          {`const obj = { a: 1, b: 2 };
console.log(Object.values(obj)); // Output: [1, 2]`}
        </pre>
      </div>
    </li>
    <li className="flex items-start bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
      <FaCode className="mr-3 mt-1 text-indigo-600 flex-shrink-0" />
      <div className="flex-1">
        <strong className="font-medium text-gray-800"><code>Object.entries()</code>:</strong>{" "}
        <span>
          Returns an array of key-value pair arrays—perfect for looping or transforming object data.
        </span>
        <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-3">
          {`const obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // Output: [["a", 1], ["b", 2]]`}
        </pre>
      </div>
    </li>
  </ul>
</div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Create a JavaScript program that tests all skills from Days 1-5 (variables, operators, functions, loops, arrays, objects):
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <span>
                  Declare variables (Day 1) for an array of student objects, each with <code>name</code>, <code>score</code>, and <code>subjects</code> (array).
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <span>
                  Use operators (Day 2) to calculate each student’s average score and determine pass/fail (<code>score &gt;= 60</code>
                  ).
                </span>
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <span>
                  Define a function (Day 3) to process student data and return an updated object with <code>average</code> and <code>status</code>.
                </span>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                <span>
                  Use a loop (Day 4) to iterate over the array, applying the function to each student.
                </span>
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <span>
                  Use array methods (Day 5) like <code>map</code> and <code>filter</code> to extract passing students’ names.
                </span>
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <span>
                  Log a summary object with total students, passing count, and names.
                </span>
              </li>
            </ul>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-4">
              {`// Sample Solution
const students = [
  { name: "Alice", score: 85, subjects: ["Math", "Science"] },
  { name: "Bob", score: 55, subjects: ["History", "Art"] },
  { name: "Charlie", score: 92, subjects: ["Math", "PE"] }
];

function processStudent(student) {
  const average = student.score; // Simplified for demo; could average subjects
  const status = average >= 60 ? "Pass" : "Fail";
  return { ...student, average, status };
}

const processedStudents = [];
for (let i = 0; i < students.length; i++) {
  processedStudents.push(processStudent(students[i]));
}

const passingStudents = processedStudents.filter(student => student.status === "Pass");
const passingNames = passingStudents.map(student => student.name);

const summary = {
  total: students.length,
  passingCount: passingStudents.length,
  passingNames: passingNames
};

console.log(summary);
// Output: { total: 3, passingCount: 2, passingNames: ["Alice", "Charlie"] }`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 italic">
              Build this in a `.js` file, test it, and submit your GitHub link below!
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

          {/* Further Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Further Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Deepen your understanding with these resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  MDN - Arrays
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  MDN - Objects
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://javascript.info/array-methods"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  JavaScript.info - Array Methods
                </a>
              </li>
            </ul>
          </div>

          {/* Congratulations Section */}
          <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-green-800 mb-4 flex items-center">
              <FaCheckCircle className="mr-2" />
              Congratulations on Completing Week 1!
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              You’ve mastered JavaScript fundamentals—variables, operators, functions, loops, arrays, and objects! This foundation sets you up for advanced topics like DOM manipulation and APIs next week.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
              Keep practicing with small projects and challenges on platforms like CodeWars or HackerRank. See you next week for more JavaScript adventures! 🚀
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dayy5;