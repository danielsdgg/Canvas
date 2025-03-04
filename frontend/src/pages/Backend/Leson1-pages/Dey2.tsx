import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from "react-icons/fa";

const Dey2: React.FC = () => {
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
                    Variables, Data Types, and Operators
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction to Variables */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        Understanding Variables
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Variables are used to store data in a program. In Python, you can assign values to variables without specifying their type explicitly. A variable is essentially a named reference to a value, making it easy to reuse and manipulate data throughout your code.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Python’s dynamic typing means variables can hold any type of data, and their type can change during execution. This flexibility simplifies coding but requires careful management to avoid unexpected behavior. Variables act as containers, storing information like numbers, text, or complex objects, which you can access or modify using their names.
                    </p>

                    {/* Declaring Variables */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Declaring Variables in Python
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            In Python, variables are created the moment you assign a value to them using the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">=</code> operator. Unlike some other programming languages, you do not need to declare the variable type explicitly—Python’s dynamic typing handles it for you.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# Assigning values to variables
name = "Alice"  # String
age = 25  # Integer
price = 99.99  # Float
is_active = True  # Boolean

print(name, age, price, is_active)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            This code outputs: <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Alice 25 99.99 True</code>. Python infers the type based on the assigned value.
                        </p>
                    </div>

                    {/* Rules for Naming Variables */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Rules for Naming Variables
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            To keep your code clear and error-free, follow these naming rules:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                            <li>
                                Variable names can contain letters, numbers, and underscores (<code className="bg-gray-800 text-white px-1 py-0.5 rounded">_</code>).
                            </li>
                            <li>
                                They <strong>must</strong> start with a letter or an underscore, but <strong>cannot</strong> start with a number.
                            </li>
                            <li>
                                Variable names are <strong>case-sensitive</strong> (<code className="bg-gray-800 text-white px-1 py-0.5 rounded">name</code> and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Name</code> are different).
                            </li>
                            <li>
                                They should not be Python keywords (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">if</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">for</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">while</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">import</code>).
                            </li>
                        </ul>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Example of valid and invalid names:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# Valid variable names
user_name = "John"
age2 = 25
_price = 99.99
isActive = True

# Invalid variable names
2age = 25  # Starts with a number
for = "loop"  # Uses a keyword`}
                            </code>
                        </pre>
                    </div>

                    {/* Variable Scope */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Variable Scope in Python
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Variable <strong>scope</strong> refers to the region of a program where a variable is accessible. In Python, there are two main types of scope:
                        </p>

                        <h4 className="text-sm sm:text-md font-medium text-gray-800 mt-3">1. Local Scope</h4>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            A variable declared inside a function is <strong>local</strong> to that function and cannot be accessed outside it.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`def greet():
    message = "Hello, world!"  # Local variable
    print(message)

greet()
# print(message)  # ❌ This will cause an error (message is not defined outside the function)`}
                            </code>
                        </pre>

                        <h4 className="text-sm sm:text-md font-medium text-gray-800 mt-3">2. Global Scope</h4>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            A variable declared outside any function is <strong>global</strong> and can be accessed anywhere in the program.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`message = "Hello, world!"  # Global variable

def greet():
    print(message)  # ✅ Accessible inside function

greet()
print(message)  # ✅ Accessible outside function`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Understanding scope helps prevent naming conflicts and manage variable accessibility effectively.
                        </p>
                    </div>

                    {/* Additional Subtopic: Global Keyword */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Using the Global Keyword
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            To modify a global variable inside a function, use the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">global</code> keyword:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`count = 0  # Global variable

def increment():
    global count  # Declare count as global
    count += 1

increment()
print(count)  # Outputs: 1`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Without <code className="bg-gray-800 text-white px-1 py-0.5 rounded">global</code>, Python treats <code className="bg-gray-800 text-white px-1 py-0.5 rounded">count</code> as local, causing an error.
                        </p>
                    </div>

                    {/* Additional Subtopic: Variable Assignment Variations */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Variable Assignment Variations
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Python supports multiple ways to assign values to variables:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                            <li>
                                <strong>Multiple Assignment:</strong> Assign values to multiple variables in one line.
                                <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                    <code>
                                        {`x, y, z = 1, 2, 3
print(x, y, z)  # Outputs: 1 2 3`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Chained Assignment:</strong> Assign the same value to multiple variables.
                                <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                    <code>
                                        {`a = b = c = 10
print(a, b, c)  # Outputs: 10 10 10`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Unpacking:</strong> Assign values from a list or tuple to variables.
                                <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                    <code>
                                        {`coords = (4, 5)
x, y = coords
print(x, y)  # Outputs: 4 5`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            These techniques improve code readability and efficiency when working with multiple variables.
                        </p>
                    </div>
                </section>

                {/* Data Types in Python */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Data Types in Python
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Python supports multiple data types that define the kind of data a variable holds. Some common ones include:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <strong>Integers:</strong> Whole numbers (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">5</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">-10</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">1000</code>).
                        </li>
                        <li>
                            <strong>Floats:</strong> Decimal numbers (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">3.14</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">-0.5</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">2.71</code>).
                        </li>
                        <li>
                            <strong>Strings:</strong> Sequence of characters (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">"Hello"</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">'Python'</code>).
                        </li>
                        <li>
                            <strong>Booleans:</strong> Logical values (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">True</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">False</code>).
                        </li>
                        <li>
                            <strong>Lists:</strong> Ordered collection of items (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">[1, 2, 3, "Python"]</code>).
                        </li>
                        <li>
                            <strong>Tuples:</strong> Immutable ordered collection (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">(10, 20, "data")</code>).
                        </li>
                        <li>
                            <strong>Dictionaries:</strong> Key-value pairs (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">&#123;"name": "John", "age": 30&#123;</code>).
                        </li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                        These data types form the building blocks for storing and manipulating information in your programs.
                    </p>
                </section>

                {/* Operators in Python */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Operators in Python
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Operators are symbols used to perform operations on variables and values. Python supports several types:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <strong>Arithmetic Operators:</strong> <code className="bg-gray-800 text-white px-1 py-0.5 rounded">+</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">-</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">*</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">%</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">**</code> (exponentiation).
                        </li>
                        <li>
                            <strong>Comparison Operators:</strong> <code className="bg-gray-800 text-white px-1 py-0.5 rounded">==</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">!=</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">&gt;</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">&lt;</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">&gt;=</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">&lt;=</code>.
                        </li>
                        <li>
                            <strong>Logical Operators:</strong> <code className="bg-gray-800 text-white px-1 py-0.5 rounded">and</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">or</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">not</code>.
                        </li>
                        <li>
                            <strong>Assignment Operators:</strong> <code className="bg-gray-800 text-white px-1 py-0.5 rounded">=</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">+=</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">-=</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">*=</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/=</code>.
                        </li>
                        <li>
                            <strong>Bitwise Operators:</strong> <code className="bg-gray-800 text-white px-1 py-0.5 rounded">&</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">|</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">^</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">~</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">&lt;&lt;</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">&gt;&gt;</code>.
                        </li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                        Operators enable you to perform calculations, comparisons, and logical decisions in your code.
                    </p>
                </section>

                {/* Code Along Section */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Code Along: Working with Variables
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Variables are essential in programming as they store data that can be manipulated and reused. In Python, you don’t need to explicitly declare the type of a variable—the interpreter determines it automatically. Let’s explore how variables work with a practical example.
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            How to Run This Code
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            To execute this Python script:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                            <li>Ensure you have <strong>Python installed</strong> on your computer.</li>
                            <li>Open a <strong>text editor</strong> (e.g., VS Code, PyCharm, or Notepad++).</li>
                            <li>Copy and paste the code into a new file.</li>
                            <li>
                                Save the file with a <code className="bg-gray-800 text-white px-1 py-0.5 rounded">.py</code> extension, e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">variables.py</code>.
                            </li>
                            <li>
                                Open a terminal and navigate to the folder using <code className="bg-gray-800 text-white px-1 py-0.5 rounded">cd</code>.
                            </li>
                            <li>Run the script by typing:</li>
                        </ul>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                            <code>python variables.py</code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Example Code
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Here’s an example of defining and using variables in Python:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# Defining variables
name = "Alice"  # String
age = 25  # Integer
height = 5.6  # Float

# Performing arithmetic operations
sum_value = age + 5  # Adding 5 to age
product = age * 2  # Multiplying age by 2

# Using comparison operators
is_adult = age >= 18  # Boolean comparison

# Printing values
print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Sum:", sum_value)
print("Product:", product)
print("Is adult:", is_adult)`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCheckCircle className="mr-2 text-indigo-600" />
                            Expected Output
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            After running the script, you should see:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`Name: Alice
Age: 25
Height: 5.6
Sum: 30
Product: 50
Is adult: True`}
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
                        In this lesson, we explored fundamental programming concepts in Python, including variables, data types, and operators. Understanding these concepts is essential for writing efficient and structured code.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li><strong>Variables:</strong> Named references used to store data in a program.</li>
                        <li><strong>Data Types:</strong> Different kinds of values, such as integers, floats, strings, and booleans.</li>
                        <li><strong>Operators:</strong> Symbols used for performing operations like arithmetic, comparison, and logical evaluations.</li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                        Mastering these concepts will help you build more advanced Python applications as you progress in your backend development journey.
                    </p>
                </section>

                {/* Further Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        Further Resources
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        To deepen your understanding of variables, data types, and operators in Python, consider exploring the following resources:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <a
                                href="https://docs.python.org/3/tutorial/introduction.html"
                                className="text-indigo-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Official Python Documentation - Introduction to Python
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.w3schools.com/python/python_variables.asp"
                                className="text-indigo-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                W3Schools - Python Variables
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://realpython.com/python-data-types/"
                                className="text-indigo-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Real Python - Understanding Data Types in Python
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.geeksforgeeks.org/python-operators/"
                                className="text-indigo-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GeeksforGeeks - Python Operators Explained
                            </a>
                        </li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                        Practicing through online coding platforms like{" "}
                        <a
                            href="https://www.hackerrank.com/domains/tutorials/10-days-of-python"
                            className="text-indigo-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            HackerRank
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://www.codecademy.com/learn/learn-python-3"
                            className="text-indigo-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Codecademy
                        </a>{" "}
                        can also help reinforce these concepts with interactive exercises.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Dey2;