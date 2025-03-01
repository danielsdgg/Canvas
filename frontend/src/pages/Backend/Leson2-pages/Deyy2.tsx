import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Deyy2:React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth(); // Added for form submission
    
    // State for file upload
    const [submitted, setSubmitted] = useState(false);
    
    const [form, setForm] = useState({
        assignmentId: 2, 
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
                Routing & Request Handling
            </h1>

            {/* Introduction to Routing & Request Handling */}
            <div className="text-gray-700 leading-relaxed">
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 Introduction to Routing & Request Handling</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Routing and request handling are core concepts in Flask that allow you to define how your web application responds to different URLs and user interactions. Routing maps URLs to specific functions (called view functions), while request handling lets you process incoming data, such as form submissions or query parameters. Flask’s simplicity makes it easy to create dynamic, user-friendly applications by leveraging these features.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    Flask uses the Werkzeug library under the hood to manage routing and requests, providing a flexible system for defining endpoints and handling HTTP methods like GET and POST. Whether you’re building a simple website or a complex API, mastering routing and request handling is essential.
                </p>

                {/* Understanding Routing in Flask */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🚀 Understanding Routing in Flask</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Routing in Flask is handled using the <code>@app.route()</code> decorator, which binds a URL pattern to a Python function. When a user visits a URL, Flask calls the associated function and returns its response to the browser. Routes can be static (e.g., <code>/about</code>) or dynamic (e.g., <code>/user/&lt;username&gt;</code>), allowing for flexible URL structures.
                </p>
                <p className="text-gray-700 text-lg mb-4">Here’s a basic example:</p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
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
                <p className="text-gray-700 text-lg mb-4">
                    In this example, visiting <code>/</code> shows "Welcome to the Home Page!" and <code>/about</code> shows "This is the About Page!". You can also add dynamic segments:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`@app.route('/user/<username>')
def user_profile(username):
    return f"Hello, {username}!"`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Here, <code>&lt;username&gt;</code> is a variable part of the URL, passed to the function as an argument. Visiting <code>/user/Alice</code> would display "Hello, Alice!".
                </p>

                {/* Handling Requests */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📦 Handling Requests</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Flask provides the <code>request</code> object to handle incoming HTTP requests. This object lets you access data like form inputs, query parameters, and HTTP methods (GET, POST, etc.). To use it, import <code>request</code> from Flask and specify allowed methods in the route.
                </p>
                <p className="text-gray-700 text-lg mb-4">Example with a form submission:</p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
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
                <p className="text-gray-700 text-lg mb-4">
                    This route handles both GET (displaying the form) and POST (processing the submission). The <code>request.form</code> dictionary retrieves form data by name.
                </p>

                {/* Working with Query Parameters */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">⚙️ Working with Query Parameters</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Query parameters are key-value pairs in a URL (e.g., <code>/search?q=flask</code>) that pass data to the server. In Flask, you access them via <code>request.args</code>. They’re commonly used for filtering, searching, or passing optional data.
                </p>
                <p className="text-gray-700 text-lg mb-4">Example:</p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask import Flask, request

app = Flask(__name__)

@app.route('/search')
def search():
    query = request.args.get('q', 'No query provided')
    return f"Search query: {query}"`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Visiting <code>/search?q=flask</code> returns "Search query: flask". The <code>.get()</code> method provides a default value if the parameter is missing, preventing errors.
                </p>

                {/* Practical Exercise Section */}
                <h2 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md mt-6">🎯 Practical Exercise</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Create a Flask app that demonstrates routing, request handling, and query parameters. Build a mini profile and search system:
                </p>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 1️⃣: Setting Up Flask</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`from flask import Flask, request, render_template

app = Flask(__name__)`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 2️⃣: Adding Routes with Dynamic Segments</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`@app.route('/')
def home():
    return render_template('index.html')

@app.route('/profile/<username>')
def profile(username):
    return f"Profile page for {username}"`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 3️⃣: Handling Form Requests</h3>
                <p className="text-gray-700 text-lg mb-4">Add a route to handle a form:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`@app.route('/submit', methods=['GET', 'POST'])
def submit():
    if request.method == 'POST':
        username = request.form['username']
        return f"Welcome, {username}!"
    return render_template('submit.html')`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">Create <code>templates/submit.html</code>:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
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

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 4️⃣: Using Query Parameters</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`@app.route('/search')
def search():
    query = request.args.get('q', 'Nothing searched')
    return f"You searched for: {query}"`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">Create <code>templates/index.html</code>:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
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

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 5️⃣: Running the App</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`if __name__ == '__main__':
    app.run(debug=True)`}
                    </code>
                </pre>

                <p className="text-gray-700 text-lg mt-6 mb-3">
                    This exercise covers **routing, request handling, and query parameters**. Upload your project to GitHub and submit the link below 🚀
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

                {/* Conclusion */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📌 Conclusion</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Routing and request handling are the backbone of Flask applications, enabling you to create dynamic, interactive web experiences. By understanding how to define routes, process requests, and use query parameters, you can build everything from simple pages to robust APIs. This foundation sets the stage for adding templates, forms, and more advanced features as you grow with Flask.
                </p>

                {/* Resources for Further Study */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Resources for Further Study</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Want to deepen your Flask routing and request handling skills? Check out these resources:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li>
                        <strong>Flask Routing Docs:</strong> Official guide to routing and URL building.<br />
                        <a href="https://flask.palletsprojects.com/en/latest/quickstart/#routing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">flask.palletsprojects.com/routing</a>
                    </li>
                    <li>
                        <strong>Real Python - Flask Routing:</strong> Detailed tutorial on routing and requests.<br />
                        <a href="https://realpython.com/flask-by-example-part-1/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">realpython.com/flask-routing</a>
                    </li>
                    <li>
                        <strong>Flask Request Object:</strong> Learn more about handling requests.<br />
                        <a href="https://flask.palletsprojects.com/en/latest/api/#flask.request" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">flask.palletsprojects.com/request</a>
                    </li>
                    <li>
                        <strong>YouTube - Pretty Printed:</strong> Video tutorials on Flask routing.<br />
                        Search "Pretty Printed Flask Routing" on YouTube.
                    </li>
                </ul>
                <p className="text-gray-700 text-lg">
                    These resources provide practical examples and deeper insights to help you master Flask’s routing and request capabilities.
                </p>
            </div>
        </section>
        </>
    )
}

export default Deyy2