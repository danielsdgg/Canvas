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
        <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Understanding Variables</h2>
            <p className="text-gray-700">
                Variables are used to store data in a program. In Python, you can assign values to variables without specifying their type explicitly.
                A variable is essentially a named reference to a value, making it easy to reuse and manipulate data.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-4">Declaring Variables in Python</h3>
            <p className="text-gray-700">
                In Python, variables are created the moment you assign a value to them using the `=` operator. Unlike some other programming languages, 
                you do not need to declare the variable type explicitly.
            </p>
            <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-800 mt-2 w-fit mx-auto">
                <code className="flex flex-col space-y-1">
                    <span># Assigning values to variables</span>
                    <span>name = "Alice"  # String</span>
                    <span>age = 25  # Integer</span>
                    <span>price = 99.99  # Float</span>
                    <span>is_active = True  # Boolean</span>
                    <span></span> {/* Blank line for spacing */}
                    <span>print(name, age, price, is_active)</span>
                </code>
            </pre>

            <h3 className="text-lg font-semibold text-gray-800 mt-4">Rules for Naming Variables</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Variable names can contain letters, numbers, and underscores (`_`).</li>
                <li>They **must** start with a letter or an underscore, but **cannot** start with a number.</li>
                <li>Variable names are **case-sensitive** (`name` and `Name` are different variables).</li>
                <li>They should not be Python keywords (e.g., `if`, `for`, `while`, `import`).</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 mt-4">Variable Scope in Python</h3>
            <p className="text-gray-700">
        Variable **scope** refers to the region of a program where a variable is accessible. In Python, there are different types of variable scopes:
    </p>

    <h4 className="text-md font-medium text-gray-800 mt-3">1. Local Scope</h4>
    <p className="text-gray-700">
        A variable declared inside a function is **local** to that function and cannot be accessed outside of it.
    </p>
    <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-800 mt-2 w-fit mx-auto">
    <code className="flex flex-col space-y-1">
        <span>def greet():</span>
        <span className="pl-4">message = "Hello, world!"  # Local variable</span>
        <span className="pl-4">print(message)</span>

        <span>greet()</span>
        <span>print(message)  # ❌ This will cause an error (message is not defined outside the function)</span>
    </code>
</pre>


    <h4 className="text-md font-medium text-gray-800 mt-3">2. Global Scope</h4>
    <p className="text-gray-700">
        A variable declared outside any function is **global** and can be accessed anywhere in the program.
    </p>
    <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-800 mt-2 w-fit mx-auto">
    <code className="flex flex-col space-y-1">
        <span>message = "Hello, world!"  # Global variable</span>

        <span>def greet():</span>
        <span className="pl-4">print(message)  # ✅ Accessible inside function</span>

        <span>greet()</span>
        <span>print(message)  # ✅ Accessible outside function</span>
    </code>
</pre>

        </div>

        {/* Data Types in Python */}
        <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Data Types in Python</h2>
            <p className="text-gray-700">
                Python supports multiple data types that help define the kind of data a variable holds. Some of the common data types include:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
                <li><strong>Integers:</strong> Whole numbers (e.g., 5, -10, 1000).</li>
                <li><strong>Floats:</strong> Decimal numbers (e.g., 3.14, -0.5, 2.71).</li>
                <li><strong>Strings:</strong> Sequence of characters (e.g., "Hello", 'Python').</li>
                <li><strong>Booleans:</strong> Logical values (e.g., True, False).</li>
                <li><strong>Lists:</strong> Ordered collection of items (e.g., [1, 2, 3, "Python"]).</li>
                <li><strong>Tuples:</strong> Immutable ordered collection (e.g., (10, 20, "data")).</li>
                <li><strong>Dictionaries:</strong> Key-value pairs (e.g., <code>{"{"}name: "John", age: 30{"}"}</code>).</li>
                </ul>
        </div>

        {/* Operators in Python */}
        <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Operators in Python</h2>
            <p className="text-gray-700">
                Operators are used to perform operations on variables and values. Python supports different types of operators:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
                <li><strong>Arithmetic Operators:</strong> +, -, *, /, %, ** (exponentiation).</li>
                <li><strong>Comparison Operators:</strong> ==, !=, &gt;, &lt;, &gt;=, &lt;=.</li>
                <li><strong>Logical Operators:</strong> and, or, not.</li>
                <li><strong>Assignment Operators:</strong> =, +=, -=, *=, /=.</li>
                <li><strong>Bitwise Operators:</strong> &, |, ^, ~, &lt;&lt;, &gt;&gt;.</li>
                </ul>
        </div>

        {/* Code Along Section */}
<div className="mb-6">
    <h2 className="text-xl font-bold text-gray-800 mb-3">Code Along: Working with Variables</h2>

    {/* Explanation Section */}
    <p className="text-gray-700">
        Variables are essential in programming as they store data that can be manipulated and reused. 
        In Python, you don't need to explicitly declare the type of a variable—the interpreter 
        determines it automatically. Let's go step by step and explore how variables work.
    </p>

    {/* How to Run the Code */}
    <div className="bg-blue-100 p-3 rounded-md mt-3">
        <h3 className="text-lg font-semibold text-gray-900">How to Run This Code</h3>
        <p className="text-gray-700 mt-1">
            To execute the following Python script, follow these steps:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Ensure you have <strong>Python installed</strong> on your computer.</li>
            <li>Open a **text editor** (VS Code, PyCharm, or Notepad++).</li>
            <li>Copy and paste the code into a new file.</li>
            <li>Save the file with a <code className="bg-gray-200 px-1 rounded">.py</code> extension, e.g., <code className="bg-gray-200 px-1 rounded">variables.py</code>.</li>
            <li>Open a terminal (Command Prompt, PowerShell, or Bash).</li>
            <li>Navigate to the folder where you saved the file using the <code className="bg-gray-200 px-1 rounded">cd</code> command.</li>
            <li>Run the script by typing:</li>
        </ul>
        <pre className="bg-gray-200 p-2 rounded-md text-sm text-gray-800 mt-2 w-fit mx-auto">
            <code>python variables.py</code>
        </pre>
    </div>

    {/* Python Code Block */}
    <p className="text-gray-700 mt-3">Here’s an example of defining and using variables in Python:</p>
    <pre className="bg-gray-100 p-4 rounded-md shadow-md mt-3 overflow-x-auto w-fit mx-auto">
        <code className="flex flex-col space-y-1">
            <span># Defining variables</span>
            <span>name = "Alice"  # String</span>
            <span>age = 25  # Integer</span>
            <span>height = 5.6  # Float</span>
            <span></span> {/* Blank line for spacing */}
            
            <span># Performing arithmetic operations</span>
            <span>sum_value = age + 5  # Adding 5 to age</span>
            <span>product = age * 2  # Multiplying age by 2</span>
            <span></span>

            <span># Using comparison operators</span>
            <span>is_adult = age {'>'}= 18  # Boolean comparison</span>
            <span></span>

            <span># Printing values</span>
            <span>print("Name:", name)</span>
            <span>print("Age:", age)</span>
            <span>print("Height:", height)</span>
            <span>print("Sum:", sum_value)</span>
            <span>print("Product:", product)</span>
            <span>print("Is adult:", is_adult)</span>
        </code>
    </pre>

    {/* Expected Output */}
    <div className="bg-green-100 p-3 rounded-md mt-3">
        <h3 className="text-lg font-semibold text-gray-900">Expected Output</h3>
        <p className="text-gray-700">After running the script, you should see the following output in your terminal:</p>
        <pre className="bg-gray-200 p-2 rounded-md text-sm text-gray-800 mt-2 w-fit mx-auto">
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
</div>

{/* Conclusion */}
<div className="mb-6">
    <h2 className="text-xl font-bold text-gray-800 mb-3">Conclusion</h2>
    <p className="text-gray-700">
        In this lesson, we explored fundamental programming concepts in Python, including variables, data types, and operators.  
        Understanding these concepts is essential for writing efficient and structured code.
    </p>
    <ul className="list-disc pl-5 text-gray-700 mt-3">
        <li><strong>Variables:</strong> Named references used to store data in a program.</li>
        <li><strong>Data Types:</strong> Different kinds of values, such as integers, floats, strings, and booleans.</li>
        <li><strong>Operators:</strong> Symbols used for performing operations like arithmetic, comparison, and logical evaluations.</li>
    </ul>
    <p className="text-gray-700 mt-3">
        Mastering these concepts will help you build more advanced Python applications as you progress.
    </p>
</div>
{/* Further Resources */}
<div className="mb-6">
    <h2 className="text-xl font-bold text-gray-800 mb-3">Further Resources</h2>
    <p className="text-gray-700">
        To deepen your understanding of variables, data types, and operators in Python, consider exploring the following resources:
    </p>
    <ul className="list-disc pl-5 text-gray-700 mt-3">
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
    <p className="text-gray-700 mt-3">
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

export default Dey2;