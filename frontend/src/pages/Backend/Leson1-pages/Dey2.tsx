import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Dey2:React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
            {/* Back Button */}
            <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
                <FaArrowLeft className="mr-2" />
                Back
            </button>
    
            <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
                Variables, Data Types and Operators
            </h1>

            {/* Introduction to Variables */}
            <div className="text-gray-700 leading-relaxed">
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 Understanding Variables</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Variables are used to store data in a program. In Python, you can assign values to variables without specifying their type explicitly. A variable is essentially a named reference to a value, making it easy to reuse and manipulate data throughout your code.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-4">Declaring Variables in Python</h3>
                <p className="text-gray-700 text-lg mb-4">
                    In Python, variables are created the moment you assign a value to them using the <code className="bg-gray-800 text-white p-1 rounded">=</code> operator. Unlike some other programming languages, you do not need to declare the variable type explicitly—Python’s dynamic typing handles it for you.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto w-fit mx-auto">
                    <code>
{`# Assigning values to variables
name = "Alice"  # String
age = 25  # Integer
price = 99.99  # Float
is_active = True  # Boolean

print(name, age, price, is_active)`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    This code outputs: <code className="bg-gray-800 text-white p-1 rounded">Alice 25 99.99 True</code>. Python infers the type based on the assigned value.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Rules for Naming Variables</h3>
                <p className="text-gray-700 text-lg mb-4">
                    To keep your code clear and error-free, follow these naming rules:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li>Variable names can contain letters, numbers, and underscores (<code className="bg-gray-800 text-white p-1 rounded">_</code>).</li>
                    <li>They <strong>must</strong> start with a letter or an underscore, but <strong>cannot</strong> start with a number.</li>
                    <li>Variable names are <strong>case-sensitive</strong> (<code className="bg-gray-800 text-white p-1 rounded">name</code> and <code className="bg-gray-800 text-white p-1 rounded">Name</code> are different).</li>
                    <li>They should not be Python keywords (e.g., <code className="bg-gray-800 text-white p-1 rounded">if</code>, <code className="bg-gray-800 text-white p-1 rounded">for</code>, <code className="bg-gray-800 text-white p-1 rounded">while</code>, <code className="bg-gray-800 text-white p-1 rounded">import</code>).</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Variable Scope in Python</h3>
                <p className="text-gray-700 text-lg mb-4">
                    Variable <strong>scope</strong> refers to the region of a program where a variable is accessible. In Python, there are two main types of scope:
                </p>

                <h4 className="text-md font-medium text-gray-800 mt-3">1. Local Scope</h4>
                <p className="text-gray-700 text-lg mb-4">
                    A variable declared inside a function is <strong>local</strong> to that function and cannot be accessed outside it.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto w-fit mx-auto">
                    <code>
{`def greet():
    message = "Hello, world!"  # Local variable
    print(message)

greet()
# print(message)  # ❌ This will cause an error (message is not defined outside the function)`}
                    </code>
                </pre>

                <h4 className="text-md font-medium text-gray-800 mt-3">2. Global Scope</h4>
                <p className="text-gray-700 text-lg mb-4">
                    A variable declared outside any function is <strong>global</strong> and can be accessed anywhere in the program.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto w-fit mx-auto">
                    <code>
{`message = "Hello, world!"  # Global variable

def greet():
    print(message)  # ✅ Accessible inside function

greet()
print(message)  # ✅ Accessible outside function`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Understanding scope helps prevent naming conflicts and manage variable accessibility effectively.
                </p>

                {/* Data Types in Python */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🚀 Data Types in Python</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Python supports multiple data types that define the kind of data a variable holds. Some common ones include:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li><strong>Integers:</strong> Whole numbers (e.g., <code className="bg-gray-800 text-white p-1 rounded">5</code>, <code className="bg-gray-800 text-white p-1 rounded">-10</code>, <code className="bg-gray-800 text-white p-1 rounded">1000</code>).</li>
                    <li><strong>Floats:</strong> Decimal numbers (e.g., <code className="bg-gray-800 text-white p-1 rounded">3.14</code>, <code className="bg-gray-800 text-white p-1 rounded">-0.5</code>, <code className="bg-gray-800 text-white p-1 rounded">2.71</code>).</li>
                    <li><strong>Strings:</strong> Sequence of characters (e.g., <code className="bg-gray-800 text-white p-1 rounded">"Hello"</code>, <code className="bg-gray-800 text-white p-1 rounded">'Python'</code>).</li>
                    <li><strong>Booleans:</strong> Logical values (e.g., <code className="bg-gray-800 text-white p-1 rounded">True</code>, <code className="bg-gray-800 text-white p-1 rounded">False</code>).</li>
                    <li><strong>Lists:</strong> Ordered collection of items (e.g., <code className="bg-gray-800 text-white p-1 rounded">[1, 2, 3, "Python"]</code>).</li>
                    <li><strong>Tuples:</strong> Immutable ordered collection (e.g., <code className="bg-gray-800 text-white p-1 rounded">(10, 20, "data")</code>).</li>
                    <li><strong>Dictionaries:</strong> Key-value pairs (e.g., <code className="bg-gray-800 text-white p-1 rounded">{'{'}"name": "John", "age": 30{'}'}</code>).</li>
                </ul>
                <p className="text-gray-700 text-lg mb-4">
                    These data types form the building blocks for storing and manipulating information in your programs.
                </p>

                {/* Operators in Python */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📦 Operators in Python</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Operators are symbols used to perform operations on variables and values. Python supports several types:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li><strong>Arithmetic Operators:</strong> <code className="bg-gray-800 text-white p-1 rounded">+</code>, <code className="bg-gray-800 text-white p-1 rounded">-</code>, <code className="bg-gray-800 text-white p-1 rounded">*</code>, <code className="bg-gray-800 text-white p-1 rounded">/</code>, <code className="bg-gray-800 text-white p-1 rounded">%</code>, <code className="bg-gray-800 text-white p-1 rounded">**</code> (exponentiation).</li>
                    <li><strong>Comparison Operators:</strong> <code className="bg-gray-800 text-white p-1 rounded">==</code>, <code className="bg-gray-800 text-white p-1 rounded">!=</code>, <code className="bg-gray-800 text-white p-1 rounded">{'>'}</code>, <code className="bg-gray-800 text-white p-1 rounded">{'<'}</code>, <code className="bg-gray-800 text-white p-1 rounded">{'>='}</code>, <code className="bg-gray-800 text-white p-1 rounded">{'<='}</code>.</li>
                    <li><strong>Logical Operators:</strong> <code className="bg-gray-800 text-white p-1 rounded">and</code>, <code className="bg-gray-800 text-white p-1 rounded">or</code>, <code className="bg-gray-800 text-white p-1 rounded">not</code>.</li>
                    <li><strong>Assignment Operators:</strong> <code className="bg-gray-800 text-white p-1 rounded">=</code>, <code className="bg-gray-800 text-white p-1 rounded">+=</code>, <code className="bg-gray-800 text-white p-1 rounded">-=</code>, <code className="bg-gray-800 text-white p-1 rounded">*=</code>, <code className="bg-gray-800 text-white p-1 rounded">/=</code>.</li>
                    <li><strong>Bitwise Operators:</strong> <code className="bg-gray-800 text-white p-1 rounded">&</code>, <code className="bg-gray-800 text-white p-1 rounded">|</code>, <code className="bg-gray-800 text-white p-1 rounded">^</code>, <code className="bg-gray-800 text-white p-1 rounded">~</code>, <code className="bg-gray-800 text-white p-1 rounded">{'<<'}</code>, <code className="bg-gray-800 text-white p-1 rounded">{'>>'}</code>.</li>
                </ul>
                <p className="text-gray-700 text-lg mb-4">
                    Operators enable you to perform calculations, comparisons, and logical decisions in your code.
                </p>

                {/* Code Along Section */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">⚙️ Code Along: Working with Variables</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Variables are essential in programming as they store data that can be manipulated and reused. In Python, you don’t need to explicitly declare the type of a variable—the interpreter determines it automatically. Let’s explore how variables work with a practical example.
                </p>

                <div className="bg-blue-100 p-3 rounded-md mt-3">
                    <h3 className="text-lg font-semibold text-gray-800">How to Run This Code</h3>
                    <p className="text-gray-700 text-lg mt-1">
                        To execute this Python script:
                    </p>
                    <ul className="list-disc pl-6 text-lg text-gray-700 mt-2">
                        <li>Ensure you have <strong>Python installed</strong> on your computer.</li>
                        <li>Open a <strong>text editor</strong> (e.g., VS Code, PyCharm, or Notepad++).</li>
                        <li>Copy and paste the code into a new file.</li>
                        <li>Save the file with a <code className="bg-gray-800 text-white p-1 rounded">.py</code> extension, e.g., <code className="bg-gray-800 text-white p-1 rounded">variables.py</code>.</li>
                        <li>Open a terminal and navigate to the folder using <code className="bg-gray-800 text-white p-1 rounded">cd</code>.</li>
                        <li>Run the script by typing:</li>
                    </ul>
                    <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto w-fit mx-auto mt-2">
                        <code>python variables.py</code>
                    </pre>
                </div>

                <p className="text-gray-700 text-lg mt-3 mb-4">
                    Here’s an example of defining and using variables in Python:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto w-fit mx-auto">
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

                <div className="bg-green-100 p-3 rounded-md mt-3">
                    <h3 className="text-lg font-semibold text-gray-800">Expected Output</h3>
                    <p className="text-gray-700 text-lg">
                        After running the script, you should see:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto w-fit mx-auto mt-2">
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

                {/* Conclusion */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📌 Conclusion</h2>
                <p className="text-gray-700 text-lg mb-4">
                    In this lesson, we explored fundamental programming concepts in Python, including variables, data types, and operators. Understanding these concepts is essential for writing efficient and structured code.
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li><strong>Variables:</strong> Named references used to store data in a program.</li>
                    <li><strong>Data Types:</strong> Different kinds of values, such as integers, floats, strings, and booleans.</li>
                    <li><strong>Operators:</strong> Symbols used for performing operations like arithmetic, comparison, and logical evaluations.</li>
                </ul>
                <p className="text-gray-700 text-lg mb-4">
                    Mastering these concepts will help you build more advanced Python applications as you progress in your backend development journey.
                </p>

                {/* Further Resources */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Further Resources</h2>
                <p className="text-gray-700 text-lg mb-4">
                    To deepen your understanding of variables, data types, and operators in Python, consider exploring the following resources:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li>
                        <a href="https://docs.python.org/3/tutorial/introduction.html" 
                           className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                           Official Python Documentation - Introduction to Python
                        </a>
                    </li>
                    <li>
                        <a href="https://www.w3schools.com/python/python_variables.asp" 
                           className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                           W3Schools - Python Variables
                        </a>
                    </li>
                    <li>
                        <a href="https://realpython.com/python-data-types/" 
                           className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                           Real Python - Understanding Data Types in Python
                        </a>
                    </li>
                    <li>
                        <a href="https://www.geeksforgeeks.org/python-operators/" 
                           className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                           GeeksforGeeks - Python Operators Explained
                        </a>
                    </li>
                </ul>
                <p className="text-gray-700 text-lg mb-4">
                    Practicing through online coding platforms like 
                    <a href="https://www.hackerrank.com/domains/tutorials/10-days-of-python" 
                       className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                       HackerRank
                    </a> 
                    and 
                    <a href="https://www.codecademy.com/learn/learn-python-3" 
                       className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                       Codecademy
                    </a> 
                    can also help reinforce these concepts with interactive exercises.
                </p>
            </div>
        </section>
        </>
    )
}

export default Dey2