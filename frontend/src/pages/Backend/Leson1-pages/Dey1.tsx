import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaLink, FaEdit, FaCheckCircle, FaRocket } from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Dey1: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();

    // State for file upload
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        assignmentId: 20,
        userId: userData?.userDetails.id ?? "",
        fileUrl: "",
    });

    // Handle file selection
    const handleFileChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
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
                    Authorization: `Bearer ${userToken}`,
                    "Content-Type": "application/json",
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
                    Introduction to Backend Development (Python)
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction to Programming */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        What is Programming?
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Programming is the process of creating a set of instructions that tell a computer how to perform a task. It is the foundation of software development and is used in various fields, including web development, mobile app creation, data science, artificial intelligence, and automation.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        At its core, programming involves writing code using a structured language known as a programming language. These languages, such as Python, JavaScript, C++, and Java, enable developers to build software solutions tailored to specific problems. Programming is also about problem-solving, logic, and creativity, as developers need to break down complex problems into smaller, manageable steps that computers can understand and execute.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        With programming, we can create applications that power websites, automate tasks, process large amounts of data, and even control hardware like robots and IoT devices. Learning to program provides a valuable skill that opens doors to various career opportunities in technology and beyond. Python, in particular, stands out due to its versatility and beginner-friendly syntax, making it an ideal starting point for backend development.
                    </p>
                </section>

                {/* History of Python */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        History of Python
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Python was created by Guido van Rossum and first released in 1991. It was designed as a successor to the ABC programming language, with the goal of providing a language that was easy to read, write, and maintain while being powerful enough for professional software development.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Over the years, Python has undergone significant evolution. It gained popularity due to its simplicity and versatility, making it a preferred language in various domains such as web development, data science, artificial intelligence, and automation. The introduction of Python 2 in 2000 brought new features, but it was eventually succeeded by Python 3 in 2008, which improved performance and eliminated redundancy.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Today, Python is one of the most widely used programming languages, backed by a large community and extensive libraries that support modern software development needs. Its ease of learning and robust functionality continue to attract both beginners and experienced developers worldwide. Python’s growth is also fueled by its adoption in academia, industry, and open-source projects, cementing its status as a cornerstone of modern programming.
                    </p>
                </section>

                {/* Benefits of Python */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaList className="mr-2 text-indigo-600" />
                        Why Use Python for Backend Development?
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Python offers numerous advantages that make it an excellent choice for backend development:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>Easy to read and write, making it beginner-friendly.</li>
                        <li>Large community and extensive libraries.</li>
                        <li>Highly scalable and widely used in web development.</li>
                        <li>Supports multiple frameworks like Flask and Django.</li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                        These benefits streamline development, enabling you to build robust backend systems efficiently. Additionally, Python’s cross-platform compatibility and strong support for testing frameworks (e.g., pytest) make it a versatile tool for creating reliable APIs and services.
                    </p>
                </section>

                {/* Installing Python */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Installing Python
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Python is one of the most popular programming languages for backend development. To install Python:
                    </p>
                    <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            Visit the official Python website: <a href="https://www.python.org/downloads/" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">python.org/downloads</a>
                        </li>
                        <li>Download the latest version of Python for your operating system.</li>
                        <li>Run the installer and ensure you check "Add Python to PATH" before proceeding with the installation.</li>
                        <li>
                            Open your terminal or command prompt and type <code className="bg-gray-800 text-white px-1 py-0.5 rounded">python --version</code> to verify the installation.
                        </li>
                    </ol>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                        This ensures Python is ready for your backend adventures! For macOS/Linux users, Python may already be pre-installed, but updating to the latest version is recommended via package managers like Homebrew (<code>brew install python</code>) or apt (<code>sudo apt install python3</code>).
                    </p>
                </section>

                {/* Writing Your First Python Script */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Writing Your First Python Script
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Open a terminal or command prompt, and create a new Python file:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mb-4">
                        <code>echo "print('Hello, World!')" &gt; hello.py</code>
                    </pre>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Then, run the script:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mb-4">
                        <code>python hello.py</code>
                    </pre>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        You should see the output: <strong>Hello, World!</strong>. This is your first step into coding! Alternatively, use an IDE like VS Code or PyCharm to write and run scripts with built-in debugging tools for a smoother experience.
                    </p>
                </section>

                {/* Practical Exercise */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                        <FaRocket className="mr-2 text-indigo-600" />
                        Practical Exercise: Build Your First Python Script
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Let’s get hands-on! Create a simple Python script to kickstart your backend journey:
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Step 1: Create a Greeting Script
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Write a Python script that takes a user’s name as input and prints a personalized greeting.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# greeting.py
name = input("Enter your name: ")
print(f"Hello, {name}! Welcome to backend development with Python!")`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Step 2: Run Your Script
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            In your terminal, navigate to the script’s directory and run:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>python greeting.py</code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Enter your name when prompted and see the output!
                        </p>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Step 3: Enhance It
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Add a line to print the current Python version using <code>sys.version</code>:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                {`# greeting.py
import sys
name = input("Enter your name: ")
print(f"Hello, {name}! Welcome to backend development with Python!")
print(f"You're using Python version: {sys.version.split()[0]}")`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaLink className="mr-2 text-indigo-600" />
                            Submit Your Work
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                            Upload your <code>greeting.py</code> to a GitHub repository and submit the link below to start your coding portfolio! 🚀
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <textarea
                                name="fileUrl"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                                rows={4}
                                placeholder="Paste your GitHub link (e.g., https://github.com/username/repo)"
                                value={form.fileUrl}
                                onChange={handleFileChange}
                            />
                            <button
                                type="submit"
                                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
                            >
                                Submit Exercise
                            </button>
                        </form>
                        {submitted && (
                            <p className="mt-4 text-green-600 font-medium flex items-center">
                                <FaCheckCircle className="mr-2" />
                                Your exercise has been submitted successfully!
                            </p>
                        )}
                    </div>
                </section>

                {/* Next Steps */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        Next Steps
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Now that you've set up Python and written your first script, you can start exploring variables, data types, and control structures in Python. Stay tuned for the next lesson where we dive deeper into Python fundamentals and begin your journey toward mastering backend development!
                    </p>
                </section>

                {/* Resources for Further Study */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        Resources for Further Study
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Ready to expand your Python knowledge? Check out these resources:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <strong>Python Official Docs:</strong> The go-to guide for Python basics.
                            <br />
                            <a
                                href="https://docs.python.org/3/tutorial/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                docs.python.org/3/tutorial
                            </a>
                        </li>
                        <li>
                            <strong>Real Python:</strong> Beginner-friendly Python tutorials.
                            <br />
                            <a
                                href="https://realpython.com/start-here/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                realpython.com/start-here
                            </a>
                        </li>
                        <li>
                            <strong>W3Schools Python:</strong> Quick and interactive Python lessons.
                            <br />
                            <a
                                href="https://www.w3schools.com/python/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                w3schools.com/python
                            </a>
                        </li>
                        <li>
                            <strong>YouTube - Corey Schafer:</strong> Python for beginners series.
                            <br />
                            Search "Corey Schafer Python Beginner" on YouTube or visit his channel for detailed video tutorials.
                        </li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                        These resources will help you solidify your foundation as you embark on this exciting coding journey!
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Dey1;