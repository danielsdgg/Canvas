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
import { useAuth } from "../../../context/authContext"; // Assuming this is the correct path

const Dayy2: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for file upload
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 2, // Unique ID for Day 2
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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Operators and Conditions in JavaScript</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Introduction
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Welcome to Day 2 of Morgan Technical Training’s frontend course! Today, we explore operators and conditions in JavaScript—core concepts that let you manipulate data and control program flow. Operators perform actions on values, while conditions enable decision-making, making your code dynamic and responsive.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              In this lesson, you’ll master arithmetic, comparison, logical, and assignment operators, alongside conditional statements like <code>if-else</code>, <code>switch</code>, and the ternary operator. These tools are essential for solving real-world problems, from simple calculations to complex logic flows.
            </p>
          </div>

          {/* JavaScript Operators */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              JavaScript Operators
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Operators are symbols that perform operations on variables and values. JavaScript offers several types, each with distinct roles:
            </p>
            <div className="space-y-6">
              {/* Arithmetic Operators */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  A. Arithmetic Operators
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Perform basic math operations—addition, subtraction, and more.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`let a = 10, b = 5;

console.log(a + b);  // 15 (Addition)
console.log(a - b);  // 5 (Subtraction)
console.log(a * b);  // 50 (Multiplication)
console.log(a / b);  // 2 (Division)
console.log(a % b);  // 0 (Modulus - remainder)
console.log(a ** b); // 100000 (Exponentiation)`}
                </pre>
              </div>

              {/* Comparison Operators */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  B. Comparison Operators
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Compare values and return <code>true</code> or <code>false</code>—crucial for decision-making.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`let x = 10, y = "10";

console.log(x == y);   // true (Loose equality, coerces types)
console.log(x === y);  // false (Strict equality, checks type)
console.log(x != y);   // false (Loose inequality)
console.log(x !== y);  // true (Strict inequality)
console.log(x > 5);    // true (Greater than)
console.log(x <= 10);  // true (Less than or equal)`}
                </pre>
              </div>

              {/* Logical Operators */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  C. Logical Operators
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Combine conditions for complex logic—<code>AND</code>, <code>OR</code>, and <code>NOT</code>.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`let isAdult = true;
let hasLicense = false;

console.log(isAdult && hasLicense); // false (AND - both must be true)
console.log(isAdult || hasLicense); // true (OR - one must be true)
console.log(!isAdult);              // false (NOT - inverts value)`}
                </pre>
              </div>

              {/* Assignment Operators */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  D. Assignment Operators
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Assign or modify values efficiently with shorthand syntax.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`let num = 10;
num += 5;  // num = num + 5 -> 15
console.log(num);

num *= 2;  // num = num * 2 -> 30
console.log(num);

num -= 8;  // num = num - 8 -> 22
console.log(num);`}
                </pre>
              </div>

              {/* Bitwise Operators */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  E. Bitwise Operators
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Operate on binary representations—useful for low-level programming.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`let a = 5;  // Binary: 0101
let b = 3;  // Binary: 0011

console.log(a & b);  // 1 (AND - 0001)
console.log(a | b);  // 7 (OR - 0111)
console.log(a ^ b);  // 6 (XOR - 0110)
console.log(~a);     // -6 (NOT)`}
                </pre>
              </div>
            </div>
          </div>

          {/* Conditions in JavaScript */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Conditions in JavaScript
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Conditions control program flow by executing code based on specific criteria. JavaScript provides several constructs:
            </p>
            <div className="space-y-6">
              {/* If-Else Statement */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  A. If-Else Statement
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Executes different blocks based on a condition—your basic decision tool.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a minor.");
}`}
                </pre>
              </div>

              {/* Switch Statement */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  B. Switch Statement
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Handles multiple conditions cleanly—great for discrete values.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("You can do better.");
    break;
  default:
    console.log("Invalid grade.");
}`}
                </pre>
              </div>

              {/* Ternary Operator */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  C. Ternary Operator
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  A concise <code>if-else</code> alternative for simple conditions.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"`}
                </pre>
              </div>

              {/* Logical Short-Circuiting */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  D. Logical Short-Circuiting
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Uses <code>&&</code> and <code>||</code> to skip unnecessary evaluations—handy for efficiency.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`let user = null;
let name = user || "Guest"; // If user is null, use "Guest"
console.log(name); // "Guest"

let isValid = true && checkData(); // Only calls checkData() if isValid is true`}
                </pre>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCheckCircle className="mr-2 text-indigo-600" />
              Best Practices
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Write effective operator and condition code with these guidelines:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Use Strict Equality (<code>===</code>):</strong> Avoid type coercion issues with <code>==</code>.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Keep Conditions Simple:</strong> Break complex logic into smaller, readable parts.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Use Ternary Sparingly:</strong> Reserve it for concise, clear cases—avoid nesting.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Comment Logic:</strong> Explain tricky conditions for future clarity (e.g., <code>/* Checks age eligibility */</code>).
              </li>
            </ul>
          </div>

          {/* Practice Exercise */}
          <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practice Exercise
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply your operator and condition skills with this task. Write a JavaScript program that:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Prompts the user for their age and stores it as a number.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Uses <code>if-else</code> to categorize them as "Child" (under 13), "Teen" (13-19), or "Adult" (20+).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Checks if the age is even or odd using the modulus operator (<code>%</code>).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Logs a message like: "You are an Adult with an even age of 20."
              </li>
            </ul>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base mt-4">
              {`// Example Solution
let age = Number(prompt("Enter your age:"));
let category = "";
let parity = age % 2 === 0 ? "even" : "odd";

if (age < 13) {
  category = "Child";
} else if (age <= 19) {
  category = "Teen";
} else {
  category = "Adult";
}

console.log("You are a " + category + " with an " + parity + " age of " + age + ".");`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 italic">
              Try this in your browser console or a `.js` file. Submit your GitHub link below when done!
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

          {/* Conclusion */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Conclusion
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Operators and conditions are the building blocks of logic in JavaScript. They empower you to perform calculations, compare data, and make decisions dynamically. As you progress, combine these with loops and functions (coming soon!) to create powerful, interactive applications. Keep practicing—these skills are your foundation!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dayy2;