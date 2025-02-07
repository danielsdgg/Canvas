import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Dayy2: React.FC = () => {
    const navigate = useNavigate();
    
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
                    Operators, Conditions & Workflows in JavaScript
                </h1>

                {/* Introduction */}
                <p className="mb-6">
                    JavaScript allows us to perform operations on data, make decisions based on conditions, and control 
                    the flow of execution using various programming constructs. This section covers:
                </p>

                {/* Operators */}
                <h2 className="text-xl text-blue-700 underline font-semibold text-center mb-4"> JavaScript Operators</h2>
                <p className="mb-4">
                    Operators are symbols that perform operations on variables and values. JavaScript has several types of operators:
                </p>

                {/* Arithmetic Operators */}
                <h3 className="text-lg font-semibold mb-2">A. Arithmetic Operators</h3>
                <p className="mb-2">Used to perform mathematical calculations:</p>
                <pre className="bg-gray-900 text-white p-3 rounded mb-4">
                    {`let a = 10, b = 5;

console.log(a + b);  // Addition: 15
console.log(a - b);  // Subtraction: 5
console.log(a * b);  // Multiplication: 50
console.log(a / b);  // Division: 2
console.log(a % b);  // Modulus (remainder): 0
console.log(a ** b); // Exponentiation: 10^5 = 100000`}
                </pre>

                {/* Comparison Operators */}
                <h3 className="text-lg font-semibold mb-2">B. Comparison Operators</h3>
                <p className="mb-2">Used to compare values and return a boolean (true/false):</p>
                <pre className="bg-gray-900 text-white p-3 rounded mb-4">
                    {`let x = 10, y = "10";

console.log(x == y);   // true (loose equality, type conversion occurs)
console.log(x === y);  // false (strict equality, checks type too)
console.log(x != y);   // false (loose inequality)
console.log(x !== y);  // true (strict inequality)
console.log(x > 5);    // true
console.log(x <= 10);  // true`}
                </pre>

                {/* Logical Operators */}
                <h3 className="text-lg font-semibold mb-2">C. Logical Operators</h3>
                <p className="mb-2">Used to combine multiple conditions:</p>
                <pre className="bg-gray-900 text-white p-3 rounded mb-4">
                    {`let isAdult = true;
let hasLicense = false;

console.log(isAdult && hasLicense); // AND (both must be true): false
console.log(isAdult || hasLicense); // OR (one must be true): true
console.log(!isAdult);              // NOT (negation): false`}
                </pre>

                {/* Assignment Operators */}
                <h3 className="text-lg font-semibold mb-2">D. Assignment Operators</h3>
                <p className="mb-2">Used to assign values:</p>
                <pre className="bg-gray-900 text-white p-3 rounded mb-4">
                    {`let num = 10;
num += 5;  // Equivalent to num = num + 5
console.log(num); // 15

num *= 2;  // Equivalent to num = num * 2
console.log(num); // 30`}
                </pre>

                {/* Conditions */}
                <h2 className="text-xl font-semibold text-center text-blue-700 text-center underline mb-4"> Conditions in JavaScript</h2>
                <p className="mb-4">
                    Conditions allow us to control the flow of execution based on specific scenarios.
                </p>

                {/* If-Else Statement */}
                <h3 className="text-lg font-semibold mb-2">A. If-Else Statement</h3>
                <p className="mb-2">Executes different code blocks based on conditions:</p>
                <pre className="bg-gray-900 text-white p-3 rounded mb-4">
                    {`let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}`}
                </pre>

                {/* Switch Statement */}
                <h3 className="text-lg font-semibold mb-2">B. Switch Statement</h3>
                <p className="mb-2">Used for multiple possible conditions:</p>
                <pre className="bg-gray-900 text-white p-3 rounded mb-4">
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

                {/* Ternary Operator */}
                <h3 className="text-lg font-semibold mb-2">C. Ternary Operator</h3>
                <p className="mb-2">A shorthand for if-else:</p>
                <pre className="bg-gray-900 text-white p-3 rounded mb-4">
                    {`let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);`}
                </pre>

                {/* Workflows */}
                <h2 className="text-xl font-semibold text-blue-700 text-center underline mb-4"> Workflows in JavaScript</h2>
                <p className="mb-4">
                    Workflows involve controlling how JavaScript executes operations and loops over data.
                </p>

                {/* Loops */}
                <h3 className="text-lg font-semibold mb-2">A. Loops</h3>
                <p className="mb-2">Loops allow us to execute code multiple times:</p>

                {/* For Loop */}
                <h4 className="font-semibold mb-2">i. For Loop</h4>
                <pre className="bg-gray-900 text-white p-3 rounded mb-4">
                    {`for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}`}
                </pre>

                {/* While Loop */}
                <h4 className="font-semibold mb-2">ii. While Loop</h4>
                <pre className="bg-gray-900 text-white p-3 rounded mb-4">
                    {`let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++;
}`}
                </pre>

                {/* Functions */}
                <h3 className="text-lg font-semibold mb-2">B. Functions</h3>
                <p className="mb-2">Functions help us structure reusable blocks of code:</p>
                <pre className="bg-gray-900 text-white p-3 rounded mb-4">
                    {`function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Alice"));`}
                </pre>

                {/* Conclusion */}
                <h2 className="text-xl font-semibold text-blue-700 text-center underline mt-6">Conclusion</h2>
                <p className="mb-4">
                    Understanding operators, conditions, and workflows is essential for writing efficient JavaScript programs. 
                    These concepts allow developers to perform calculations, make decisions, and control program execution dynamically.
                </p>
            </section>
        </>
    );
};

export default Dayy2;
