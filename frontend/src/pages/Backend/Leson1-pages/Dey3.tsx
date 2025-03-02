import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from "react-icons/fa";

const Dey3: React.FC = () => {
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
                    Control Flow: Conditions & Loops
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        Understanding Control Flow
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Control flow determines the order in which statements are executed in a program. Python provides <strong>conditional statements</strong> to execute code based on conditions and <strong>loops</strong> to repeat actions.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        In programming, control flow is like a roadmap guiding the execution path. Without it, code would run linearly from top to bottom, limiting its ability to respond dynamically to data or user input. Conditions and loops are fundamental tools that enable decision-making and repetition, forming the backbone of logic in Python scripts. This lesson explores how to use these constructs effectively to build flexible and efficient programs.
                    </p>
                </section>

                {/* Conditions Section */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Conditional Statements
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Conditional statements allow a program to execute different blocks of code depending on conditions. Python provides <code className="bg-gray-800 text-white px-1 py-0.5 rounded">if</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">elif</code>, and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">else</code> for handling conditions.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Conditions evaluate expressions to <code className="bg-gray-800 text-white px-1 py-0.5 rounded">True</code> or <code className="bg-gray-800 text-white px-1 py-0.5 rounded">False</code>, directing the program to execute specific code blocks. This decision-making capability is essential for creating interactive and responsive applications.
                    </p>

                    {/* If Statement */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">if</code> Statement
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">if</code> statement executes a block of code if its condition evaluates to <code className="bg-gray-800 text-white px-1 py-0.5 rounded">True</code>.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# Basic if statement
temperature = 25

if temperature > 20:
    print("It's a warm day!")`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Output: <code className="bg-gray-800 text-white px-1 py-0.5 rounded">It's a warm day!</code>
                        </p>
                    </div>

                    {/* If-Elif-Else Statement */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">if-elif-else</code> Structure
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Use <code className="bg-gray-800 text-white px-1 py-0.5 rounded">elif</code> (else if) for additional conditions and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">else</code> as a fallback when no conditions are met.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
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
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Output: <code className="bg-gray-800 text-white px-1 py-0.5 rounded">You are an adult.</code>
                        </p>
                    </div>

                    {/* Nested Conditions */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Nested Conditions
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Conditions can be nested to handle more complex logic by placing one <code className="bg-gray-800 text-white px-1 py-0.5 rounded">if</code> statement inside another.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# Nested if example
age = 20
has_id = True

if age >= 18:
    if has_id:
        print("You can enter the club.")
    else:
        print("You need an ID to enter.")
else:
    print("You're too young to enter.")`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Output: <code className="bg-gray-800 text-white px-1 py-0.5 rounded">You can enter the club.</code>
                        </p>
                    </div>

                    {/* Conditional Expressions (Ternary Operator) */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Conditional Expressions (Ternary Operator)
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Python supports a concise <strong>ternary operator</strong> for simple conditions in a single line.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# Ternary operator example
age = 16
status = "Adult" if age >= 18 else "Minor"
print(status)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Output: <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Minor</code>
                        </p>
                    </div>
                </section>

                {/* Loops Section */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Loops in Python
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Loops allow repeated execution of a block of code. Python supports <code className="bg-gray-800 text-white px-1 py-0.5 rounded">for</code> and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">while</code> loops.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Loops are critical for automating repetitive tasks, iterating over data structures, or running code until a condition changes. Python’s loop constructs are designed for simplicity and flexibility, making them powerful tools in programming.
                    </p>

                    {/* For Loop */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            For Loop
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Used for iterating over a sequence (list, tuple, string, etc.). It’s ideal when you know the number of iterations or need to process each item in a collection.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# Example: Looping through a list
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Output:
                            <pre className="bg-gray-800 text-white p-2 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                <code>
                                    {`apple
banana
cherry`}
                                </code>
                            </pre>
                        </p>
                    </div>

                    {/* While Loop */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            While Loop
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Repeats as long as a condition is <code className="bg-gray-800 text-white px-1 py-0.5 rounded">True</code>. It’s useful when the number of iterations is unknown and depends on a dynamic condition.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# Example: Counting from 1 to 5
count = 1

while count <= 5:
    print(count)
    count += 1`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Output:
                            <pre className="bg-gray-800 text-white p-2 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                <code>
                                    {`1
2
3
4
5`}
                                </code>
                            </pre>
                        </p>
                    </div>

                    {/* Loop Control Statements */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Loop Control Statements
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Python provides <code className="bg-gray-800 text-white px-1 py-0.5 rounded">break</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">continue</code>, and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">pass</code> to control loop execution:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                            <li>
                                <strong>Break:</strong> Exits the loop entirely.
                                <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                    <code>
                                        {`# Break example
for i in range(10):
    if i == 5:
        break
    print(i)  # Outputs: 0 1 2 3 4`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Continue:</strong> Skips the current iteration and moves to the next.
                                <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                    <code>
                                        {`# Continue example
for i in range(5):
    if i == 2:
        continue
    print(i)  # Outputs: 0 1 3 4`}
                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Pass:</strong> Does nothing, used as a placeholder.
                                <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                    <code>
                                        {`# Pass example
for i in range(3):
    pass  # Placeholder, no output`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </div>

                    {/* Loop Else Clause */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Loop Else Clause
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Python loops can have an <code className="bg-gray-800 text-white px-1 py-0.5 rounded">else</code> clause that runs if the loop completes without a <code className="bg-gray-800 text-white px-1 py-0.5 rounded">break</code>.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# Loop with else
for i in range(3):
    print(i)
else:
    print("Loop finished!")`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Output:
                            <pre className="bg-gray-800 text-white p-2 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                                <code>
                                    {`0
1
2
Loop finished!`}
                                </code>
                            </pre>
                        </p>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        Conclusion
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Conditional statements (<code className="bg-gray-800 text-white px-1 py-0.5 rounded">if</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">elif</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">else</code>) help control program flow based on conditions. Loops (<code className="bg-gray-800 text-white px-1 py-0.5 rounded">for</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">while</code>) allow repetitive tasks, making code more efficient. Mastering these concepts is crucial for developing logic in programming.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        By combining conditions and loops, you can create programs that adapt to various scenarios and handle repetitive operations with ease. These tools are foundational for backend development, enabling you to process data, manage user inputs, and automate tasks effectively.
                    </p>
                </section>

                {/* Further Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        Further Resources
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        To deepen your understanding of conditions and loops in Python, explore these resources:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <a
                                href="https://docs.python.org/3/tutorial/controlflow.html"
                                className="text-indigo-600 hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Python Documentation - Control Flow
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://realpython.com/python-conditional-statements/"
                                className="text-indigo-600 hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Real Python - Conditional Statements
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.w3schools.com/python/python_for_loops.asp"
                                className="text-indigo-600 hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                W3Schools - Python Loops
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.geeksforgeeks.org/loops-in-python/"
                                className="text-indigo-600 hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GeeksforGeeks - Loops in Python
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.learnpython.org/en/Loops"
                                className="text-indigo-600 hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LearnPython.org - Loops Tutorial
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default Dey3;