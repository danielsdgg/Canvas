import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext'; // Assuming this exists in your project

const Deyy12:React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth(); // Added for form submission
    
    // State for file upload
    const [submitted, setSubmitted] = useState(false);
    
    const [form, setForm] = useState({
        assignmentId: 12, // Changed to 12 for Deyy12
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
                Backend Lesson 2 Project
            </h1>

            {/* Introduction to the Final Project */}
            <div className="text-gray-700 leading-relaxed">
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 Introduction to the Final Project</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Congratulations on reaching the final project of Backend Lesson 2! This project is your chance to showcase everything you’ve learned by building a full-stack web application using React for the frontend and Flask for the backend. Guided by your mentors, you’ll create a functional app that integrates all the concepts from this course—ranging from basic Flask setup to deployment best practices.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    Your project will test your skills across all topics covered in Deyy1 to Deyy11, combining前端 (React) and后端 (Flask) into a cohesive application. This is an opportunity to demonstrate your ability to design, develop, and deploy a real-world solution.
                </p>

                {/* Project Requirements */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🚀 Project Requirements</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Your mentors will provide specific instructions, but your full-stack app must include the following components, reflecting everything you’ve learned:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li><strong>Flask Basics (Deyy1):</strong> A working Flask backend with proper setup and routing.</li>
                    <li><strong>Routing & Requests (Deyy2):</strong> Multiple routes handling GET/POST requests and query parameters.</li>
                    <li><strong>Forms & Inputs (Deyy3):</strong> User input forms with validation, processed by Flask.</li>
                    <li><strong>Database (Deyy4):</strong> Flask-SQLAlchemy models with CRUD operations and migrations.</li>
                    <li><strong>Blueprints (Deyy5):</strong> Modular structure using blueprints for organization.</li>
                    <li><strong>Authentication (Deyy6):</strong> User login/logout with Flask-Login and password hashing.</li>
                    <li><strong>Hooks (Deyy7):</strong> Use <code>before_request</code> or <code>after_request</code> for global logic.</li>
                    <li><strong>RESTful APIs (Deyy8):</strong> Flask-RESTful endpoints for data interaction.</li>
                    <li><strong>External APIs (Deyy9):</strong> Fetch/send data to a third-party API (e.g., OpenWeatherMap).</li>
                    <li><strong>Error Handling (Deyy10):</strong> Custom error pages and logging with <code>logging</code>.</li>
                    <li><strong>Deployment (Deyy11):</strong> Prepare for production with Gunicorn and best practices (deploy optional).</li>
                    <li><strong>React Frontend:</strong> A responsive UI interfacing with Flask via API calls.</li>
                </ul>
                <p className="text-gray-700 text-lg mb-4">
                    Example project idea: A task management app where users log in, create/view tasks (stored in a database), fetch weather data, and access a RESTful API—all with error handling and logging.
                </p>

                {/* Building the Full-Stack Project */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📦 Building the Full-Stack Project</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Here’s a high-level guide to get started:
                </p>
                <ol className="list-decimal pl-6 text-lg text-gray-700 mb-4">
                    <li><strong>Backend (Flask):</strong> Set up a Flask app with blueprints for tasks and auth, integrating SQLAlchemy for data storage, Flask-Login for authentication, and Flask-RESTful for APIs. Add hooks for logging and custom error handlers.</li>
                    <li><strong>External API:</strong> Use <code>requests</code> to fetch data (e.g., weather) and expose it via your API.</li>
                    <li><strong>Frontend (React):</strong> Build components for login, task creation, and data display, using <code>fetch</code> or <code>axios</code> to call Flask endpoints.</li>
                    <li><strong>Integration:</strong> Connect React to Flask via RESTful routes, ensuring data flows seamlessly.</li>
                    <li><strong>Polish:</strong> Apply best practices (e.g., environment variables, secure headers) and test thoroughly.</li>
                </ol>
                <p className="text-gray-700 text-lg mb-4">
                    Example Flask snippet:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask import Flask, jsonify
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

class TaskAPI(Resource):
    def get(self, task_id):
        return jsonify({'task_id': task_id, 'title': 'Sample Task'})

api.add_resource(TaskAPI, '/api/task/<int:task_id>')`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Example React fetch:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`fetch('/api/task/1')
    .then(response => response.json())
    .then(data => console.log(data));`}
                    </code>
                </pre>

                {/* Submission Instructions */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">⚙️ Submission Instructions</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Once completed, push your project to a GitHub repository containing both the Flask backend and React frontend. Ensure your README includes:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li>Setup instructions (e.g., installing dependencies, setting environment variables).</li>
                    <li>Features and how they map to Deyy1-Deyy11 topics.</li>
                    <li>A link to a live demo (if deployed).</li>
                </ul>
                <p className="text-gray-700 text-lg mb-4">
                    Submit your GitHub repository URL below for review by your mentors.
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
                        Submit Project
                    </button>
                </form>
                {submitted && (
                    <p className="text-green-600 font-medium">Your project has been submitted successfully!</p>
                )}

                {/* Conclusion */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📌 Conclusion</h2>
                <p className="text-gray-700 text-lg mb-4">
                    This final project ties together your Flask and React skills into a full-stack masterpiece. By applying everything from routing to deployment, you’ll create a portfolio-worthy app that demonstrates your mastery of backend and frontend development. Work closely with your mentors, test thoroughly, and take pride in your accomplishment!
                </p>

                {/* Resources for Further Study */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Resources for Further Study</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Need inspiration or guidance? Check these resources:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li>
                        <strong>Flask Mega-Tutorial:</strong> Full-stack Flask guide.<br />
                        <a href="https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">miguelgrinberg.com/flask-tutorial</a>
                    </li>
                    <li>
                        <strong>React Docs:</strong> Official React documentation.<br />
                        <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">reactjs.org</a>
                    </li>
                    <li>
                        <strong>Full-Stack Python:</strong> Full-stack development tips.<br />
                        <a href="https://www.fullstackpython.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">fullstackpython.com</a>
                    </li>
                    <li>
                        <strong>YouTube - Traversy Media:</strong> Full-stack project tutorial.<br />
                        Search "Traversy Media Flask React" on YouTube.
                    </li>
                </ul>
                <p className="text-gray-700 text-lg">
                    These resources will support you in crafting an impressive full-stack project.
                </p>
            </div>

            {/* Words of Encouragement */}
            <section className="mb-6 text-center">
                <h2 className="text-2xl text-green-700 font-semibold mb-2 mt-5">The End!</h2>
                <p className="italic">
                    Incredible work! You’ve conquered the foundations of Flask, tackled complex concepts like authentication, APIs, and deployment, and built a full-stack app with React. This journey is proof of your resilience and passion for software engineering. Becoming a full-stack developer is within your reach—every line of code you write brings you closer to mastering this craft. Stay curious, keep pushing, and watch yourself soar to new heights. The tech world is waiting for your brilliance! 🚀
                </p>
            </section>
            
        </section>
        </>
    )
}

export default Deyy12