import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from "react-icons/fa";

const Dey4: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-8 mx-auto max-w-5xl">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
                <FaArrowLeft className="mr-2" />
                Back
            </button>

            {/* Title */}
            <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center justify-center">
                <FaLaptopCode className="mr-3 text-2xl" />
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-center">
                    Functions & Modules
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        Understanding Functions & Modules
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Functions and modules help in <strong>code reusability, organization, and modular programming</strong>. A <strong>function</strong> is a block of code that performs a specific task, while a <strong>module</strong> is a file containing reusable functions.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Functions break down complex problems into manageable, reusable pieces, enhancing code readability and maintainability. Modules take this further by grouping related functions into separate files, promoting a modular architecture. Together, they form the backbone of structured programming in Python, enabling developers to write efficient, scalable backend systems. This lesson explores how to define, use, and extend functions and modules comprehensively.
                    </p>
                </section>

                {/* Functions Section */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Functions in Python
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Functions are essential for encapsulating logic, reducing redundancy, and improving code clarity. They allow you to define a task once and reuse it multiple times, with or without customization via parameters.
                    </p>

                    {/* Defining Functions */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Defining Functions
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Functions in Python are defined using the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">def</code> keyword. They allow you to write reusable blocks of code that can be called with specific inputs.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# Example: Defining and calling a function
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # Output: Hello, Alice!`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Functions are named using the same rules as variables (e.g., no spaces, no keywords) and can include a <code className="bg-gray-800 text-white px-1 py-0.5 rounded">return</code> statement to send back a result.
                        </p>
                    </div>

                    {/* Function Parameters & Return Values */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Function Parameters & Return Values
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Functions can take <strong>parameters</strong> as inputs and return <strong>values</strong> as outputs. Parameters allow customization, while return values provide results for further use.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# Example: Function with multiple parameters
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 10)
print(result)  # Output: 15`}
                            </code>
                        </pre>
                    </div>

                    {/* Types of Parameters */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Types of Parameters
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Python supports various parameter types to enhance function flexibility:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                            <li>
                                <strong>Positional Parameters:</strong> Required arguments in a specific order.
                                <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                    <code>
                                        {`def multiply(x, y):
    return x * y

print(multiply(3, 4))  # Output: 12`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Default Parameters:</strong> Optional arguments with default values.
                                <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                    <code>
                                        {`def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Bob"))  # Output: Hello, Bob!
print(greet("Bob", "Hi"))  # Output: Hi, Bob!`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Keyword Arguments:</strong> Pass arguments by name for clarity.
                                <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                    <code>
                                        {`def introduce(name, age):
    return f"{name} is {age} years old."

print(introduce(age=25, name="Alice"))  # Output: Alice is 25 years old.`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Arbitrary Arguments (*args):</strong> Accept a variable number of positional arguments.
                                <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                    <code>
                                        {`def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4))  # Output: 10`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Keyword-Only Arguments (**kwargs):</strong> Accept a variable number of keyword arguments.
                                <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                    <code>
                                        {`def describe_person(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

describe_person(name="Alice", age=30, job="Engineer")`}
                                    </code>
                                </pre>
                                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                                    Output:
                                    <pre className="bg-gray-800 text-white p-2 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                        <code>
                                            {`name: Alice
age: 30
job: Engineer`}
                                        </code>
                                    </pre>
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Function Scope */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Function Scope
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Variables inside a function have <strong>local scope</strong>, meaning they’re only accessible within that function unless explicitly made global.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`x = 10  # Global variable

def my_function():
    x = 20  # Local variable
    print(f"Inside function: {x}")

my_function()  # Output: Inside function: 20
print(f"Outside function: {x}")  # Output: Outside function: 10`}
                            </code>
                        </pre>
                    </div>

                    {/* Lambda Functions */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Lambda Functions
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Python supports anonymous functions (lambda functions) using the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">lambda</code> keyword for concise, one-line operations.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# Lambda function example
square = lambda x: x ** 2
print(square(5))  # Output: 25

# Using lambda with map
numbers = [1, 2, 3, 4]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # Output: [1, 4, 9, 16]`}
                            </code>
                        </pre>
                    </div>
                </section>

                {/* Modules Section */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Modules in Python
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Modules are Python files that encapsulate functions, variables, and classes for reuse across scripts. They promote modularity, allowing you to organize code into logical units and leverage Python’s extensive standard library or community contributions.
                    </p>

                    {/* Built-in Modules */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Using Built-in Modules
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Python has many built-in modules that provide useful functions. You can <strong>import</strong> these modules using the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">import</code> statement.
                        </p>

                        <h4 className="text-sm sm:text-md font-medium text-gray-800 mt-3">Example: Using the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">math</code> Module</h4>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# Importing the math module
import math

print(math.sqrt(16))  # Output: 4.0
print(math.pi)        # Output: 3.141592653589793`}
                            </code>
                        </pre>

                        <h4 className="text-sm sm:text-md font-medium text-gray-800 mt-3">Example: Using the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">random</code> Module</h4>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# Importing the random module
import random

print(random.randint(1, 10))  # Output: Random number between 1 and 10`}
                            </code>
                        </pre>
                    </div>

                    {/* Creating Custom Modules */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Creating Custom Modules
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            You can create your own <strong>custom module</strong> by saving functions in a <code className="bg-gray-800 text-white px-1 py-0.5 rounded">.py</code> file and <strong>importing</strong> it into another script.
                        </p>
                        <h4 className="text-sm sm:text-md font-medium text-gray-800 mt-3">Example: Creating a Custom Module</h4>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">Save the following code in a file named <code className="bg-gray-800 text-white px-1 py-0.5 rounded">mymodule.py</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                            <code>
                                {`# mymodule.py
def greet(name):
    return f"Hello, {name}!"`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4">Now, import and use the module in another Python file:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                            <code>
                                {`# main.py
import mymodule

print(mymodule.greet("Alice"))  # Output: Hello, Alice!`}
                            </code>
                        </pre>
                    </div>

                    {/* Importing Specific Functions */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Importing Specific Functions
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Use <code className="bg-gray-800 text-white px-1 py-0.5 rounded">from</code> to import specific functions or variables from a module, avoiding namespace clutter.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# Importing specific function
from math import sqrt

print(sqrt(25))  # Output: 5.0

# Importing with alias
from random import randint as rand
print(rand(1, 10))  # Output: Random number between 1 and 10`}
                            </code>
                        </pre>
                    </div>

                    {/* Module Structure and Best Practices */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Module Structure and Best Practices
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Structure your modules for clarity and maintainability:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                            <li><strong>Docstrings:</strong> Add documentation at the top of the module.</li>
                            <li><strong>Main Guard:</strong> Use <code className="bg-gray-800 text-white px-1 py-0.5 rounded">if __name__ == "__main__":</code> to separate executable code.</li>
                            <li><strong>Organize:</strong> Group related functions logically.</li>
                        </ul>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                            <code>
                                {`# mymodule.py
"""A simple greeting module."""

def greet(name):
    return f"Hello, {name}!"

def farewell(name):
    return f"Goodbye, {name}!"

if __name__ == "__main__":
    print(greet("Test"))  # Runs only if module is executed directly`}
                            </code>
                        </pre>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        Conclusion
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Functions allow <strong>code reusability</strong> and <strong>modularity</strong>, making your programs more efficient. Python provides <strong>built-in modules</strong> (<code className="bg-gray-800 text-white px-1 py-0.5 rounded">math</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">random</code>, etc.), but you can also <strong>create your own custom modules</strong> for organizing reusable code in large projects.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        By mastering functions and modules, you unlock the ability to structure complex backend systems, leverage Python’s ecosystem, and write clean, maintainable code. These concepts are pivotal for scaling applications and collaborating on projects effectively.
                    </p>
                </section>

                {/* Further Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        Further Resources
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        To deepen your understanding of functions and modules in Python, explore these resources:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <a
                                href="https://docs.python.org/3/tutorial/modules.html"
                                className="text-indigo-600 hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Python Official Documentation - Modules
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://realpython.com/python-functions/"
                                className="text-indigo-600 hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Real Python - Python Functions
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.w3schools.com/python/python_functions.asp"
                                className="text-indigo-600 hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                W3Schools - Python Functions
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.geeksforgeeks.org/python-modules/"
                                className="text-indigo-600 hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GeeksforGeeks - Python Modules
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.learnpython.org/en/Functions"
                                className="text-indigo-600 hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LearnPython.org - Functions Tutorial
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default Dey4;