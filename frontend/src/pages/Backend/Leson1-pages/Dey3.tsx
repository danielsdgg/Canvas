import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Dey3: React.FC = () => {
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

                {/* Title */}
                <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
                    Control Flow: Conditions & Loops
                </h1>

                {/* Introduction */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Understanding Control Flow</h2>
                    <p className="text-gray-700">
                        Control flow determines the order in which statements are executed in a program.  
                        Python provides **conditional statements** to execute code based on conditions and **loops** to repeat actions.
                    </p>
                </div>

                {/* Conditions Section */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Conditional Statements</h2>
                    <p className="text-gray-700">
                        Conditional statements allow a program to execute different blocks of code depending on conditions.
                        Python provides `if`, `elif`, and `else` for handling conditions.
                    </p>
                    <pre className="bg-gray-800 p-4 rounded-md text-sm text-white mt-2">
                        <code>
{`# Example: Checking age eligibility
age = 18

if age >= 18:
    print("You are an adult.")
elif age >= 13:
    print("You are a teenager.")
else:
    print("You are a child.")`}
                        </code>
                    </pre>
                </div>

                {/* Loops Section */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Loops in Python</h2>
                    <p className="text-gray-700">
                        Loops allow repeated execution of a block of code. Python supports `for` and `while` loops.
                    </p>

                    {/* For Loop Example */}
                    <h3 className="text-lg font-bold text-gray-800 mt-4">For Loop</h3>
                    <p className="text-gray-700">Used for iterating over a sequence (list, tuple, string, etc.).</p>
                    <pre className="bg-gray-800 p-4 rounded-md text-sm text-white mt-2">
                        <code>
{`# Example: Looping through a list
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)`}
                        </code>
                    </pre>

                    {/* While Loop Example */}
                    <h3 className="text-lg font-bold text-gray-800 mt-4">While Loop</h3>
                    <p className="text-gray-700">Repeats as long as a condition is `True`.</p>
                    <pre className="bg-gray-800 p-4 rounded-md text-sm text-white mt-2">
                        <code>
{`# Example: Counting from 1 to 5
count = 1

while count <= 5:
    print(count)
    count += 1`}
                        </code>
                    </pre>
                </div>

                {/* Conclusion */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Conclusion</h2>
                    <p className="text-gray-700">
                        Conditional statements (`if`, `elif`, `else`) help control program flow based on conditions.  
                        Loops (`for`, `while`) allow repetitive tasks, making code more efficient.  
                        Mastering these concepts is crucial for developing logic in programming.
                    </p>
                </div>

                {/* Further Resources */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Further Resources</h2>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>
                            <a href="https://docs.python.org/3/tutorial/controlflow.html" 
                               className="text-blue-600 hover:underline" target="_blank" rel='noreferrer'>
                               Python Documentation - Control Flow
                            </a>
                        </li>
                        <li>
                            <a href="https://realpython.com/python-conditional-statements/" 
                               className="text-blue-600 hover:underline" target="_blank" rel='noreferrer'>
                               Real Python - Conditional Statements
                            </a>
                        </li>
                        <li>
                            <a href="https://www.w3schools.com/python/python_for_loops.asp" 
                               className="text-blue-600 hover:underline" target="_blank" rel='noreferrer'>
                               W3Schools - Python Loops
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Dey3;
