import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Dey4: React.FC = () => {
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
                    Functions & Modules
                </h1>

                {/* Introduction */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Understanding Functions & Modules</h2>
                    <p className="text-gray-700">
                        Functions and modules help in **code reusability, organization, and modular programming**.  
                        A **function** is a block of code that performs a specific task, while a **module** is a file containing reusable functions.
                    </p>
                </div>

                {/* Defining Functions */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Defining Functions</h2>
                    <p className="text-gray-700">
                        Functions in Python are defined using the `def` keyword. They allow you to write reusable blocks of code.
                    </p>
                    <pre className="bg-gray-800 p-4 rounded-md text-sm text-white mt-2">
                        <code>
{`# Example: Defining and calling a function
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # Output: Hello, Alice!`}
                        </code>
                    </pre>
                </div>

                {/* Function Parameters & Return Values */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Function Parameters & Return Values</h2>
                    <p className="text-gray-700">
                        Functions can take **parameters** as inputs and return **values** as outputs.
                    </p>
                    <pre className="bg-gray-800 p-4 rounded-md text-sm text-white mt-2">
                        <code>
{`# Example: Function with multiple parameters
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 10)
print(result)  # Output: 15`}
                        </code>
                    </pre>
                </div>

                {/* Built-in Modules */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Using Built-in Modules</h2>
                    <p className="text-gray-700">
                        Python has many built-in modules that provide useful functions.  
                        You can **import** these modules using the `import` statement.
                    </p>

                    {/* Example: Using Math Module */}
                    <h3 className="text-lg font-bold text-gray-800 mt-4">Example: Using the `math` Module</h3>
                    <pre className="bg-gray-800 p-4 rounded-md text-sm text-white mt-2">
                        <code>
{`# Importing the math module
import math

print(math.sqrt(16))  # Output: 4.0
print(math.pi)        # Output: 3.141592653589793`}
                        </code>
                    </pre>

                    {/* Example: Using Random Module */}
                    <h3 className="text-lg font-bold text-gray-800 mt-4">Example: Using the `random` Module</h3>
                    <pre className="bg-gray-800 p-4 rounded-md text-sm text-white mt-2">
                        <code>
{`# Importing the random module
import random

print(random.randint(1, 10))  # Output: Random number between 1 and 10`}
                        </code>
                    </pre>
                </div>

                {/* Creating Custom Modules */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Creating Custom Modules</h2>
                    <p className="text-gray-700">
                        You can create your own **custom module** by saving functions in a `.py` file  
                        and **importing** it into another script.
                    </p>

                    {/* Example: Creating a Module */}
                    <h3 className="text-lg font-bold text-gray-800 mt-4">Example: Creating a Custom Module</h3>
                    <p className="text-gray-700">Save the following code in a file named `mymodule.py`:</p>
                    <pre className="bg-gray-800 p-4 rounded-md text-sm text-white mt-2">
                        <code>
{`# mymodule.py
def greet(name):
    return f"Hello, {name}!"`}
                        </code>
                    </pre>

                    <p className="text-gray-700 mt-4">Now, import and use the module in another Python file:</p>
                    <pre className="bg-gray-800 p-4 rounded-md text-sm text-white mt-2">
                        <code>
{`# main.py
import mymodule

print(mymodule.greet("Alice"))  # Output: Hello, Alice!`}
                        </code>
                    </pre>
                </div>

                {/* Conclusion */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Conclusion</h2>
                    <p className="text-gray-700">
                        Functions allow **code reusability** and **modularity**, making your programs more efficient.  
                        Python provides **built-in modules** (`math`, `random`, etc.), but you can also **create your own custom modules**  
                        for organizing reusable code in large projects.
                    </p>
                </div>

                {/* Further Resources */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Further Resources</h2>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>
                            <a href="https://docs.python.org/3/tutorial/modules.html" 
                               className="text-blue-600 hover:underline" target="_blank" rel='noreferrer'>
                               Python Official Documentation - Modules
                            </a>
                        </li>
                        <li>
                            <a href="https://realpython.com/python-functions/" 
                               className="text-blue-600 hover:underline" target="_blank" rel='noreferrer'>
                               Real Python - Python Functions
                            </a>
                        </li>
                        <li>
                            <a href="https://www.w3schools.com/python/python_functions.asp" 
                               className="text-blue-600 hover:underline" target="_blank" rel='noreferrer'>
                               W3Schools - Python Functions
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Dey4;
