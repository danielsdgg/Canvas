import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext'; // Assuming this exists in your project

const Deyy10:React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth(); // Added for form submission
    
    // State for file upload
    const [submitted, setSubmitted] = useState(false);
    
    const [form, setForm] = useState({
        assignmentId: 10, // Changed to 10 for Deyy10
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
                Errors & Bugs Handling
            </h1>

            {/* Introduction to Handling Errors, Debugging, and Logging */}
            <div className="text-gray-700 leading-relaxed">
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 Introduction to Handling Errors, Debugging, and Logging</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Errors and bugs are inevitable in development, but Flask provides tools to handle them gracefully, debug effectively, and log issues for analysis. From HTTP errors (e.g., 404, 500) to runtime exceptions, proper handling improves user experience and maintainability. Debugging and logging help identify and resolve issues efficiently, especially in production environments.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    This section covers common Flask errors, debugging techniques, and logging setup.
                </p>

                {/* Handling Common Flask Errors */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🚀 Handling Common Flask Errors</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Flask allows custom error handlers for HTTP errors using <code>@app.errorhandler</code>. Example handling 404 and 500 errors:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask import Flask, render_template

app = Flask(__name__)

@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def server_error(error):
    return "Internal Server Error", 500

@app.route('/error')
def trigger_error():
    raise Exception("Test error")

if __name__ == '__main__':
    app.run(debug=True)`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    In <code>templates/404.html</code>: <code>&lt;h1&gt;Page Not Found&lt;/h1&gt;</code>. This customizes responses for common errors like missing routes or server crashes.
                </p>

                {/* Debugging in Flask */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📦 Debugging in Flask</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Flask’s debug mode (<code>debug=True</code>) provides an interactive debugger in the browser for unhandled exceptions. For production, use tools like <code>pdb</code> or logging:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`import pdb

@app.route('/debug')
def debug_route():
    data = None
    pdb.set_trace()  # Breakpoint
    return data['key']  # Will raise an error

if __name__ == '__main__':
    app.run(debug=True)`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Run this, visit <code>/debug</code>, and use <code>pdb</code> commands (e.g., <code>n</code> for next, <code>p data</code> to print) to inspect.
                </p>

                {/* Logging in Flask */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">⚙️ Logging in Flask</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Python’s <code>logging</code> module integrates with Flask to record events. Example setup:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`import logging
from flask import Flask

app = Flask(__name__)

logging.basicConfig(filename='app.log', level=logging.DEBUG,
                    format='%(asctime)s %(levelname)s: %(message)s')

@app.route('/')
def home():
    app.logger.info('Home page accessed')
    return "Welcome"

@app.route('/error')
def error():
    app.logger.error('An error occurred')
    raise ValueError("Test error")

if __name__ == '__main__':
    app.run()`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Logs are written to <code>app.log</code>. Use <code>app.logger</code> for info, warnings, errors, etc.
                </p>

                {/* Practical Exercise Section */}
                <h2 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md mt-6">🎯 Practical Exercise</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Build a Flask app integrating authentication (Day6), hooks (Day7), RESTful APIs (Day8), external APIs (Day9), and error handling/logging (Day10):
                </p>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 1️⃣: Setup with Authentication</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`from flask import Flask, render_template, request, jsonify, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, login_required
from flask_bcrypt import Bcrypt
from flask_restful import Api, Resource
import requests
import logging

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'
api = Api(app)

logging.basicConfig(filename='app.log', level=logging.DEBUG,
                    format='%(asctime)s %(levelname)s: %(message)s')

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 2️⃣: Authentication Routes (Day6)</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = User.query.filter_by(username=request.form['username']).first()
        if user and bcrypt.check_password_hash(user.password, request.form['password']):
            login_user(user)
            app.logger.info(f'User {user.username} logged in')
            return redirect(url_for('dashboard'))
        app.logger.warning('Failed login attempt')
        return "Invalid credentials", 401
    return render_template('login.html')

@app.route('/dashboard')
@login_required
def dashboard():
    return "Dashboard"`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">In <code>templates/login.html</code>: Simple login form.</p>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 3️⃣: Request Hooks (Day7)</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`@app.before_request
def log_request():
    app.logger.debug(f'Request: {request.method} {request.path}')

@app.teardown_request
def cleanup(exception):
    if exception:
        app.logger.error(f'Error: {exception}')`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 4️⃣: RESTful API (Day8)</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`class Post(Resource):
    @login_required
    def get(self, post_id):
        try:
            response = requests.get(f'https://jsonplaceholder.typicode.com/posts/{post_id}')
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            app.logger.error(f'API fetch failed: {e}')
            return {'error': 'Fetch failed'}, 500

api.add_resource(Post, '/api/post/<int:post_id>')`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 5️⃣: External API Integration (Day9)</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`@app.route('/weather', methods=['GET', 'POST'])
@login_required
def weather():
    if request.method == 'POST':
        city = request.form['city']
        try:
            api_key = 'your-api-key'
            url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'
            response = requests.get(url)
            response.raise_for_status()
            data = response.json()
            app.logger.info(f'Weather fetched for {city}')
            return jsonify({'city': data['name'], 'temp': data['main']['temp']})
        except requests.RequestException as e:
            app.logger.error(f'Weather API error: {e}')
            return jsonify({'error': 'City not found'}), 404
    return render_template('weather.html')`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">In <code>templates/weather.html</code>: Form for city input.</p>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 6️⃣: Error Handling (Day10)</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`@app.errorhandler(404)
def not_found(error):
    app.logger.warning('404 error encountered')
    return jsonify({'error': 'Not Found'}), 404

@app.errorhandler(500)
def server_error(error):
    app.logger.error(f'500 error: {error}')
    return jsonify({'error': 'Server Error'}), 500`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 7️⃣: Running</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)`}
                    </code>
                </pre>

                <p className="text-gray-700 text-lg mt-6 mb-3">
                    This tests **authentication (Day6), hooks (Day7), RESTful APIs (Day8), external APIs (Day9), and error handling/logging (Day10)**. Register a user, log in, fetch posts/weather, and trigger errors to see logs. Submit your GitHub link below 🚀
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
                    Handling errors, debugging, and logging in Flask ensures your app remains robust and diagnosable. Custom error handlers improve user experience, debugging tools pinpoint issues, and logging provides a trail for analysis—crucial for production-ready applications.
                </p>

                {/* Resources for Further Study */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Resources for Further Study</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Learn more about error handling and debugging with these resources:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li>
                        <strong>Flask Error Handling Docs:</strong> Official guide.<br />
                        <a href="https://flask.palletsprojects.com/en/latest/errorhandling/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">flask.palletsprojects.com/errorhandling</a>
                    </li>
                    <li>
                        <strong>Python Logging Docs:</strong> Logging setup.<br />
                        <a href="https://docs.python.org/3/library/logging.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">docs.python.org/logging</a>
                    </li>
                    <li>
                        <strong>Real Python - Flask Debugging:</strong> Debugging tutorial.<br />
                        <a href="https://realpython.com/python-debugging-pdb/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">realpython.com/debugging</a>
                    </li>
                    <li>
                        <strong>YouTube - Corey Schafer:</strong> Flask error handling video.<br />
                        Search "Corey Schafer Flask Error Handling" on YouTube.
                    </li>
                </ul>
                <p className="text-gray-700 text-lg">
                    These resources offer techniques to master error management in Flask.
                </p>
            </div>
        </section>
        </>
    )
}

export default Deyy10