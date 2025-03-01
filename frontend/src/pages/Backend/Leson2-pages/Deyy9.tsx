import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext'; // Assuming this exists in your project

const Deyy9:React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth(); // Added for form submission
    
    // State for file upload
    const [submitted, setSubmitted] = useState(false);
    
    const [form, setForm] = useState({
        assignmentId: 9, // Changed to 9 for Deyy9
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
                External APIs & Data Handling
            </h1>

            {/* Introduction to External APIs & Data Handling */}
            <div className="text-gray-700 leading-relaxed">
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 Introduction to External APIs & Data Handling</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Integrating external APIs into your Flask application allows you to fetch or send data to third-party services, enhancing functionality with real-world data—like weather updates, user info, or payment processing. The <code>requests</code> library in Python simplifies HTTP requests, while Flask handles JSON data to process and serve this information. This combination is key for building dynamic, connected apps.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    This section covers fetching data from external APIs, sending data to them, and handling JSON responses in Flask.
                </p>

                {/* Fetching Data with Requests */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🚀 Fetching Data with Requests</h2>
                <p className="text-gray-700 text-lg mb-4">
                    The <code>requests</code> library makes GET requests to retrieve data from external APIs. Install it with:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`pip install requests`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Example fetching weather data:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/weather')
def get_weather():
    api_key = 'your-api-key'
    url = f'http://api.openweathermap.org/data/2.5/weather?q=London&appid={api_key}'
    response = requests.get(url)
    data = response.json()
    return jsonify({
        'city': data['name'],
        'temp': data['main']['temp'],
        'description': data['weather'][0]['description']
    })

if __name__ == '__main__':
    app.run(debug=True)`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    This fetches weather data for London from OpenWeatherMap and returns it as JSON. Use <code>response.json()</code> to parse the response.
                </p>

                {/* Sending Data to External APIs */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📦 Sending Data to External APIs</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Use <code>requests.post()</code> to send data to an API. Example sending a new todo to a mock API:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/add-todo', methods=['POST'])
def add_todo():
    todo = {
        'task': request.form['task'],
        'completed': False
    }
    response = requests.post('https://jsonplaceholder.typicode.com/todos', json=todo)
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    This sends a todo to JSONPlaceholder and returns the API’s response. Use <code>json=</code> to send JSON data in the request body.
                </p>

                {/* Handling JSON Data */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">⚙️ Handling JSON Data</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Flask’s <code>jsonify</code> converts Python dictionaries to JSON responses. Combine it with <code>requests</code> to process external data:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`@app.route('/users')
def get_users():
    response = requests.get('https://jsonplaceholder.typicode.com/users')
    users = response.json()
    simplified_users = [{'id': user['id'], 'name': user['name']} for user in users]
    return jsonify(simplified_users)`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    This fetches user data, simplifies it, and returns it as JSON. Handle errors with <code>response.raise_for_status()</code> for robustness.
                </p>

                {/* Practical Exercise Section */}
                <h2 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md mt-6">🎯 Practical Exercise</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Build a Flask app that fetches and sends data to third-party APIs, handling JSON responses:
                </p>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 1️⃣: Setup</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 2️⃣: Fetching Posts</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`@app.route('/')
def index():
    response = requests.get('https://jsonplaceholder.typicode.com/posts')
    posts = response.json()[:5]  # Limit to 5 posts
    return render_template('index.html', posts=posts)`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">In <code>templates/index.html</code>:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Posts</h1>
    <ul>
    {% for post in posts %}
        <li>{{ post.title }}</li>
    {% endfor %}
    </ul>
    <h2>Add Post</h2>
    <form method="post" action="/add-post">
        <input type="text" name="title" placeholder="Title"><br>
        <textarea name="body" placeholder="Body"></textarea><br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 3️⃣: Sending Data</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`@app.route('/add-post', methods=['POST'])
def add_post():
    post_data = {
        'title': request.form['title'],
        'body': request.form['body'],
        'userId': 1
    }
    response = requests.post('https://jsonplaceholder.typicode.com/posts', json=post_data)
    return jsonify({
        'message': 'Post added',
        'response': response.json()
    })`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 4️⃣: Running the App</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`if __name__ == '__main__':
    app.run(debug=True)`}
                    </code>
                </pre>

                <p className="text-gray-700 text-lg mt-6 mb-3">
                    This exercise involves **fetching posts from JSONPlaceholder, displaying them, and sending a new post**, handling JSON data throughout. Upload your project to GitHub and submit the link below 🚀
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
                    Working with external APIs in Flask using <code>requests</code> and handling JSON data opens up a world of possibilities, from integrating real-time data to interacting with third-party services. These skills enable your app to go beyond static content, providing dynamic, user-driven experiences with robust data handling.
                </p>

                {/* Resources for Further Study */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Resources for Further Study</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Explore external APIs and data handling further with these resources:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li>
                        <strong>Requests Docs:</strong> Official guide to HTTP requests.<br />
                        <a href="https://requests.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">requests.readthedocs.io</a>
                    </li>
                    <li>
                        <strong>Flask JSON Docs:</strong> Handling JSON in Flask.<br />
                        <a href="https://flask.palletsprojects.com/en/latest/api/#flask.jsonify" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">flask.palletsprojects.com/jsonify</a>
                    </li>
                    <li>
                        <strong>Real Python - Flask APIs:</strong> Tutorial on external APIs.<br />
                        <a href="https://realpython.com/flask-connexion-rest-api/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">realpython.com/flask-apis</a>
                    </li>
                    <li>
                        <strong>YouTube - Tech With Tim:</strong> Video on Flask and APIs.<br />
                        Search "Tech With Tim Flask External APIs" on YouTube.
                    </li>
                </ul>
                <p className="text-gray-700 text-lg">
                    These resources provide practical examples and advanced techniques for working with external APIs in Flask.
                </p>
            </div>
        </section>
        </>
    )
}

export default Deyy9