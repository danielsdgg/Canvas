import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Deyy2: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();

    // State for file upload
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        assignmentId: 26,
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
                    Routing & Request Handling
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction to Routing & Request Handling */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        🔹 Introduction to Routing & Request Handling
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Routing and request handling are core concepts in Flask that allow you to define how your web application responds to different URLs and user interactions. Routing maps URLs to specific functions (called view functions), while request handling lets you process incoming data, such as form submissions or query parameters. Flask’s simplicity makes it easy to create dynamic, user-friendly applications by leveraging these features.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Flask uses the Werkzeug library under the hood to manage routing and requests, providing a flexible system for defining endpoints and handling HTTP methods like GET and POST. Whether you’re building a simple website or a complex API, mastering routing and request handling is essential.
                    </p>
                </section>

                {/* Understanding Routing */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🚀 Understanding Routing in Flask
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Routing in Flask is handled using the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">@app.route()</code> decorator, which binds a URL pattern to a Python function. When a user visits a URL, Flask calls the associated function and returns its response to the browser. Routes can be static (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/about</code>) or dynamic (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">{`/user/<username>`}</code>), allowing for flexible URL structures.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">Here’s a basic example:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Home Page!"

@app.route('/about')
def about():
    return "This is the About Page!"

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        In this example, visiting <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/</code> shows "Welcome to the Home Page!" and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/about</code> shows "This is the About Page!". You can also add dynamic segments:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.route('/user/<username>')
def user_profile(username):
    return f"Hello, {username}!"`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Here, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">{`<username>`}</code> is a variable part of the URL, passed to the function as an argument. Visiting <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/user/Alice</code> would display "Hello, Alice!".
                        </p>
                    </div>
                </section>

                {/* Handling Requests */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📦 Handling Requests
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Flask provides the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">request</code> object to handle incoming HTTP requests. This object lets you access data like form inputs, query parameters, and HTTP methods (GET, POST, etc.). To use it, import <code className="bg-gray-800 text-white px-1 py-0.5 rounded">request</code> from Flask and specify allowed methods in the route.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">Example with a form submission:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, request

app = Flask(__name__)

@app.route('/submit', methods=['GET', 'POST'])
def submit():
    if request.method == 'POST':
        name = request.form['name']
        return f"Submitted name: {name}"
    return """
        <form method="post">
            <input type="text" name="name">
            <button type="submit">Submit</button>
        </form>
    """`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            This route handles both GET (displaying the form) and POST (processing the submission). The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">request.form</code> dictionary retrieves form data by name.
                        </p>
                    </div>
                </section>

                {/* Working with Query Parameters */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        ⚙️ Working with Query Parameters
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Query parameters are key-value pairs in a URL (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/search?q=flask</code>) that pass data to the server. In Flask, you access them via <code className="bg-gray-800 text-white px-1 py-0.5 rounded">request.args</code>. They’re commonly used for filtering, searching, or passing optional data.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">Example:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, request

app = Flask(__name__)

@app.route('/search')
def search():
    query = request.args.get('q', 'No query provided')
    return f"Search query: {query}"`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Visiting <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/search?q=flask</code> returns "Search query: flask". The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">.get()</code> method provides a default value if the parameter is missing, preventing errors.
                        </p>
                    </div>
                </section>

                {/* Practical Exercise */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center justify-center mb-4">
                        <FaLaptopCode className="mr-3 text-2xl" />
                        <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase text-center">
                            🎯 Practical Exercise
                        </h2>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Create a Flask app that demonstrates routing, request handling, and query parameters. Build a mini profile and search system:
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 1️⃣: Setting Up Flask</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, request, render_template

app = Flask(__name__)`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 2️⃣: Adding Routes with Dynamic Segments</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.route('/')
def home():
    return render_template('index.html')

@app.route('/profile/<username>')
def profile(username):
    return f"Profile page for {username}"`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 3️⃣: Handling Form Requests</h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">Add a route to handle a form:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.route('/submit', methods=['GET', 'POST'])
def submit():
    if request.method == 'POST':
        username = request.form['username']
        return f"Welcome, {username}!"
    return render_template('submit.html')`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">Create <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/submit.html</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Submit Your Name</h1>
    <form method="post">
        <input type="text" name="username" placeholder="Enter username">
        <button type="submit">Submit</button>
    </form>
</body>
</html>`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 4️⃣: Using Query Parameters</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.route('/search')
def search():
    query = request.args.get('q', 'Nothing searched')
    return f"You searched for: {query}"`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">Create <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/index.html</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Home Page</h1>
    <p>Try: <a href="/profile/Alice">/profile/Alice</a> or <a href="/search?q=flask">/search?q=flask</a></p>
    <p>Go to <a href="/submit">Submit page</a></p>
</body>
</html>`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 5️⃣: Running the App</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                    </div>

                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4 mb-3">
                        This exercise covers <strong>routing, request handling, and query parameters</strong>. Upload your project to GitHub and submit the link below 🚀
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <textarea
                            name="fileUrl"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 placeholder-gray-400"
                            rows={6}
                            placeholder="Paste your GitHub link"
                            value={form.fileUrl}
                            onChange={handleFileChange}
                        />
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-md"
                        >
                            Submit Exercise
                        </button>
                    </form>
                    {submitted && (
                        <p className="text-indigo-600 font-medium mt-4 flex items-center">
                            <FaCheckCircle className="mr-2" />
                            Your exercise has been submitted successfully!
                        </p>
                    )}
                </section>

                {/* Conclusion */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        📌 Conclusion
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Routing and request handling are the backbone of Flask applications, enabling you to create dynamic, interactive web experiences. By understanding how to define routes, process requests, and use query parameters, you can build everything from simple pages to robust APIs. This foundation sets the stage for adding templates, forms, and more advanced features as you grow with Flask.
                    </p>
                </section>

                {/* Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        📚 Resources for Further Study
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Want to deepen your Flask routing and request handling skills? Check out these resources:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <strong>Flask Routing Docs:</strong> Official guide to routing and URL building.<br />
                            <a href="https://flask.palletsprojects.com/en/latest/quickstart/#routing" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">flask.palletsprojects.com/routing</a>
                        </li>
                        <li>
                            <strong>Real Python - Flask Routing:</strong> Detailed tutorial on routing and requests.<br />
                            <a href="https://realpython.com/flask-by-example-part-1/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">realpython.com/flask-routing</a>
                        </li>
                        <li>
                            <strong>Flask Request Object:</strong> Learn more about handling requests.<br />
                            <a href="https://flask.palletsprojects.com/en/latest/api/#flask.request" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">flask.palletsprojects.com/request</a>
                        </li>
                        <li>
                            <strong>YouTube - Pretty Printed:</strong> Video tutorials on Flask routing.<br />
                            Search "Pretty Printed Flask Routing" on YouTube.
                        </li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                        These resources provide practical examples and deeper insights to help you master Flask’s routing and request capabilities.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Deyy2;