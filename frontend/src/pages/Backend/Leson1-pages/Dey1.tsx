import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext'; 

const Dey1: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();
    
    // State for file upload
    const [submitted, setSubmitted] = useState(false);
    
    const [form, setForm] = useState({
        assignmentId: 1, // Set to 1 for Dey1
        userId: userData?.userDetails.id,
        fileUrl: "",
    });
    
    // Handle file selection
    const handleFileChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
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
                    'Authorization': `Bearer ${userToken}`,
                    'Content-Type': 'application/json' 
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
                <div className="text-gray-700 leading-relaxed">
                    <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 What is Programming?</h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Programming is the process of creating a set of instructions that tell a computer how to perform a task. It is the foundation of software development and is used in various fields, including web development, mobile app creation, data science, artificial intelligence, and automation.
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                        At its core, programming involves writing code using a structured language known as a programming language. These languages, such as Python, JavaScript, C++, and Java, enable developers to build software solutions tailored to specific problems. Programming is also about problem-solving, logic, and creativity, as developers need to break down complex problems into smaller, manageable steps that computers can understand and execute.
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                        With programming, we can create applications that power websites, automate tasks, process large amounts of data, and even control hardware like robots and IoT devices. Learning to program provides a valuable skill that opens doors to various career opportunities in technology and beyond.
                    </p>

                    {/* History of Python */}
                    <h2 className="text-xl font-semibold text-gray-800 mt-6">🚀 History of Python</h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Python was created by Guido van Rossum and first released in 1991. It was designed as a successor to the ABC programming language, with the goal of providing a language that was easy to read, write, and maintain while being powerful enough for professional software development.
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                        Over the years, Python has undergone significant evolution. It gained popularity due to its simplicity and versatility, making it a preferred language in various domains such as web development, data science, artificial intelligence, and automation. The introduction of Python 2 in 2000 brought new features, but it was eventually succeeded by Python 3 in 2008, which improved performance and eliminated redundancy.
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                        Today, Python is one of the most widely used programming languages, backed by a large community and extensive libraries that support modern software development needs. Its ease of learning and robust functionality continue to attract both beginners and experienced developers worldwide.
                    </p>

                    {/* Benefits of Python */}
                    <h2 className="text-xl font-semibold text-gray-800 mt-6">📦 Why Use Python for Backend Development?</h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Python offers numerous advantages that make it an excellent choice for backend development:
                    </p>
                    <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                        <li>Easy to read and write, making it beginner-friendly.</li>
                        <li>Large community and extensive libraries.</li>
                        <li>Highly scalable and widely used in web development.</li>
                        <li>Supports multiple frameworks like Flask and Django.</li>
                    </ul>
                    <p className="text-gray-700 text-lg mb-4">
                        These benefits streamline development, enabling you to build robust backend systems efficiently.
                    </p>

                    {/* Installing Python */}
                    <h2 className="text-xl font-semibold text-gray-800 mt-6">⚙️ Installing Python</h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Python is one of the most popular programming languages for backend development. To install Python:
                    </p>
                    <ol className="list-decimal pl-6 text-lg text-gray-700 mb-4">
                        <li>Visit the official Python website: <a href="https://www.python.org/downloads/" className="text-blue-600 hover:underline">python.org/downloads</a></li>
                        <li>Download the latest version of Python for your operating system.</li>
                        <li>Run the installer and ensure you check "Add Python to PATH" before proceeding with the installation.</li>
                        <li>Open your terminal or command prompt and type <code className="bg-gray-800 text-white p-1 rounded">python --version</code> to verify the installation.</li>
                    </ol>
                    <p className="text-gray-700 text-lg mb-4">
                        This ensures Python is ready for your backend adventures!
                    </p>

                    {/* Writing Your First Python Script */}
                    <h2 className="text-xl font-semibold text-gray-800 mt-6">📝 Writing Your First Python Script</h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Open a terminal or command prompt, and create a new Python file:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                        <code>echo "print('Hello, World!')"  hello.py</code>
                    </pre>
                    <p className="text-gray-700 text-lg mb-4">
                        Then, run the script:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                        <code>python hello.py</code>
                    </pre>
                    <p className="text-gray-700 text-lg mb-4">
                        You should see the output: <strong>Hello, World!</strong>. This is your first step into coding!
                    </p>

                    {/* Practical Exercise */}
                    <h2 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md mt-6">🎯 Practical Exercise</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Let’s get hands-on! Create a simple Python script to kickstart your backend journey:
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 1️⃣: Create a Greeting Script</h3>
                    <p className="text-gray-700 text-lg mb-4">
                        Write a Python script that takes a user’s name as input and prints a personalized greeting.
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                        <code>
{`# greeting.py
name = input("Enter your name: ")
print(f"Hello, {name}! Welcome to backend development with Python!")`}
                        </code>
                    </pre>

                    <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 2️⃣: Run Your Script</h3>
                    <p className="text-gray-700 text-lg mb-4">
                        In your terminal, navigate to the script’s directory and run:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                        <code>python greeting.py</code>
                    </pre>
                    <p className="text-gray-700 text-lg mb-4">
                        Enter your name when prompted and see the output!
                    </p>

                    <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 3️⃣: Enhance It</h3>
                    <p className="text-gray-700 text-lg mb-4">
                        Add a line to print the current Python version using <code>sys.version</code>:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                        <code>
{`# greeting.py
import sys
name = input("Enter your name: ")
print(f"Hello, {name}! Welcome to backend development with Python!")
print(f"You're using Python version: {sys.version.split()[0]}")`}
                        </code>
                    </pre>

                    <p className="text-gray-700 text-lg mt-6 mb-3">
                        Upload your <code>greeting.py</code> to a GitHub repository and submit the link below to start your coding portfolio! 🚀
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <textarea
                            name="fileUrl"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={6}
                            placeholder="Paste your GitHub link"
                            value={form.fileUrl}
                            onChange={handleFileChange}
                        />
                        <button 
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
                        >
                            Submit Exercise
                        </button>
                    </form>
                    {submitted && (
                        <p className="text-green-600 font-medium">Your exercise has been submitted successfully!</p>
                    )}

                    {/* Next Steps */}
                    <h2 className="text-xl font-semibold text-gray-800 mt-6">📌 Next Steps</h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Now that you've set up Python and written your first script, you can start exploring variables, data types, and control structures in Python. Stay tuned for the next lesson where we dive deeper into Python fundamentals and begin your journey toward mastering backend development!
                    </p>

                    {/* Resources for Further Study */}
                    <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Resources for Further Study</h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Ready to expand your Python knowledge? Check out these resources:
                    </p>
                    <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                        <li>
                            <strong>Python Official Docs:</strong> The go-to guide for Python basics.<br />
                            <a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">docs.python.org/3/tutorial</a>
                        </li>
                        <li>
                            <strong>Real Python:</strong> Beginner-friendly Python tutorials.<br />
                            <a href="https://realpython.com/start-here/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">realpython.com/start-here</a>
                        </li>
                        <li>
                            <strong>W3Schools Python:</strong> Quick and interactive Python lessons.<br />
                            <a href="https://www.w3schools.com/python/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">w3schools.com/python</a>
                        </li>
                        <li>
                            <strong>YouTube - Corey Schafer:</strong> Python for beginners series.<br />
                            Search "Corey Schafer Python Beginner" on YouTube.
                        </li>
                    </ul>
                    <p className="text-gray-700 text-lg">
                        These resources will help you solidify your foundation as you embark on this exciting coding journey!
                    </p>
                </div>
            </section>
        </>
    );
};

export default Dey1;