import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dey1: React.FC = () => {
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
                    Introduction to Backend Development (Python)
                </h1>

                {/* Introduction to Programming */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">What is Programming?</h2>
                    <p className="text-gray-700">
                        Programming is the process of creating a set of instructions that tell a computer how to perform a task. It is the foundation of software development and is used in various fields, including web development, mobile app creation, data science, artificial intelligence, and automation. 
                    </p>
                    <p className="mt-2 text-gray-700">
                        At its core, programming involves writing code using a structured language known as a programming language. These languages, such as Python, JavaScript, C++, and Java, enable developers to build software solutions tailored to specific problems. Programming is also about problem-solving, logic, and creativity, as developers need to break down complex problems into smaller, manageable steps that computers can understand and execute.
                    </p>
                    <p className="mt-2 text-gray-700">
                        With programming, we can create applications that power websites, automate tasks, process large amounts of data, and even control hardware like robots and IoT devices. Learning to program provides a valuable skill that opens doors to various career opportunities in technology and beyond.
                    </p>
                </div>

                {/* History of Python */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">History of Python</h2>
                    <p className="text-gray-700">
                        Python was created by Guido van Rossum and first released in 1991. It was designed as a successor to the ABC programming language, with the goal of providing a language that was easy to read, write, and maintain while being powerful enough for professional software development.
                    </p>
                    <p className="mt-2 text-gray-700">
                        Over the years, Python has undergone significant evolution. It gained popularity due to its simplicity and versatility, making it a preferred language in various domains such as web development, data science, artificial intelligence, and automation. The introduction of Python 2 in 2000 brought new features, but it was eventually succeeded by Python 3 in 2008, which improved performance and eliminated redundancy.
                    </p>
                    <p className="mt-2 text-gray-700">
                        Today, Python is one of the most widely used programming languages, backed by a large community and extensive libraries that support modern software development needs. Its ease of learning and robust functionality continue to attract both beginners and experienced developers worldwide.
                    </p>
                </div>

                {/* Benefits of Python */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Why Use Python for Backend Development?</h2>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>Easy to read and write, making it beginner-friendly.</li>
                        <li>Large community and extensive libraries.</li>
                        <li>Highly scalable and widely used in web development.</li>
                        <li>Supports multiple frameworks like Flask and Django.</li>
                    </ul>
                </div>

                {/* Installing Python */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Installing Python</h2>
                    <p className="text-gray-700">
                        Python is one of the most popular programming languages for backend development. To install Python:
                    </p>
                    <ol className="list-decimal pl-6 text-gray-700">
                        <li>Visit the official Python website: <a href="https://www.python.org/downloads/" className="text-blue-600">python.org/downloads</a></li>
                        <li>Download the latest version of Python for your operating system.</li>
                        <li>Run the installer and ensure you check "Add Python to PATH" before proceeding with the installation.</li>
                        <li>Open your terminal or command prompt and type <code className="bg-gray-200 px-2 rounded">python --version</code> to verify the installation.</li>
                    </ol>
                </div>

                {/* First Python Script */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Writing Your First Python Script</h2>
                    <p className="text-gray-700 mb-2">
                        Open a terminal or command prompt, and create a new Python file:
                    </p>
                    <code className="block bg-gray-200 p-3 rounded-md text-sm">
                        echo "print('Hello, World!')" &gt; hello.py
                    </code>
                    <p className="text-gray-700 mt-2">Then, run the script:</p>
                    <code className="block bg-gray-200 p-3 rounded-md text-sm">
                        python hello.py
                    </code>
                    <p className="text-gray-700 mt-2">You should see the output: <strong>Hello, World!</strong></p>
                </div>

                {/* Next Steps */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Next Steps</h2>
                    <p className="text-gray-700">
                        Now that you've set up Python and written your first script, you can start exploring variables, data types, and control structures in Python.
                        Stay tuned for the next lesson where we dive deeper into Python fundamentals!
                    </p>
                </div>
            </section>
        </>
    );
};

export default Dey1;
