import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Deyy10: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();

    // State for file upload
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        assignmentId: 33,
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
                    Errors & Bugs Handling
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction to Handling Errors, Debugging, and Logging */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        🔹 Introduction to Handling Errors, Debugging, and Logging
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Errors and bugs are an inevitable part of software development, but Flask provides robust tools to <strong>handle errors gracefully</strong>, <strong>debug efficiently</strong>, and <strong>log issues</strong> for analysis. From HTTP errors (e.g., 404 Not Found, 500 Internal Server Error) to runtime exceptions (e.g., unhandled exceptions in code), effective error management ensures a smooth user experience and simplifies troubleshooting. Debugging pinpoints the root cause of issues, while logging creates a detailed record of application behavior—crucial for diagnosing problems in production environments.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        This lesson covers common Flask errors, custom error handling, debugging techniques using built-in tools and Python’s debugger, and logging setup with Python’s <code className="bg-gray-800 text-white px-1 py-0.5 rounded">logging</code> module. You’ll learn to integrate these with previous concepts—like authentication (Day 6), hooks (Day 7), and RESTful APIs (Day 8)—to build resilient Flask applications.
                    </p>
                </section>

                {/* Handling Common Flask Errors */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🚀 Handling Common Flask Errors
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Flask allows you to define custom handlers for HTTP errors using the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">@app.errorhandler</code> decorator, overriding default error pages with user-friendly responses or JSON for APIs. Common errors include 404 (Not Found) and 500 (Internal Server Error).
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Basic Error Handlers</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.errorhandler(404)
def not_found(error):
    if request.path.startswith('/api/'):
        return jsonify({'error': 'Resource not found'}), 404
    return render_template('404.html'), 404

@app.errorhandler(500)
def server_error(error):
    return render_template('500.html'), 500

@app.route('/error')
def trigger_error():
    raise Exception("Test error")

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/404.html</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>404 - Page Not Found</h1>
    <p>Sorry, we couldn't find that page.</p>
</body>
</html>`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Handles 404 with a custom page for web routes and JSON for API routes, and 500 with a generic error page. The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">trigger_error</code> route simulates a server error.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Custom Exception Handler</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`class CustomError(Exception):
    pass

@app.errorhandler(CustomError)
def handle_custom_error(error):
    return jsonify({'error': str(error)}), 400

@app.route('/custom-error')
def custom_error():
    raise CustomError("Invalid input provided")`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Defines a custom exception and handler, returning a 400 Bad Request with a JSON error message, useful for API-specific errors.
                        </p>
                    </div>
                </section>

                {/* Debugging in Flask */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📦 Debugging in Flask
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Flask’s debug mode (<code className="bg-gray-800 text-white px-1 py-0.5 rounded">debug=True</code>) offers an interactive browser debugger for unhandled exceptions, displaying stack traces and variable states. For more control, use Python’s <code className="bg-gray-800 text-white px-1 py-0.5 rounded">pdb</code> or IDE debuggers in production-like environments.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Using Debug Mode</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask

app = Flask(__name__)

@app.route('/debug')
def debug_route():
    data = None
    return data['key']  # Will raise an error

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Visiting <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/debug</code> triggers an error, and Flask’s debugger shows the traceback in the browser. Use the console to inspect variables interactively.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Using pdb</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`import pdb

@app.route('/pdb-debug')
def pdb_debug():
    data = {'key': 'value'}
    pdb.set_trace()  # Breakpoint
    result = data['missing']  # Will raise KeyError
    return result`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Run this, visit <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/pdb-debug</code>, and use <code className="bg-gray-800 text-white px-1 py-0.5 rounded">pdb</code> commands (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">n</code> for next, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">p data</code> to print) in the terminal to debug step-by-step.
                        </p>
                    </div>
                </section>

                {/* Logging in Flask */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        ⚙️ Logging in Flask
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Python’s <code className="bg-gray-800 text-white px-1 py-0.5 rounded">logging</code> module integrates with Flask via <code className="bg-gray-800 text-white px-1 py-0.5 rounded">app.logger</code> to record events, errors, and debug information. This is essential for monitoring application health and diagnosing issues in production.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Basic Logging Setup</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
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
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Logs events to <code className="bg-gray-800 text-white px-1 py-0.5 rounded">app.log</code> with timestamps and severity levels (DEBUG, INFO, ERROR). <code className="bg-gray-800 text-white px-1 py-0.5 rounded">app.logger</code> provides methods like <code className="bg-gray-800 text-white px-1 py-0.5 rounded">info</code> and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">error</code>.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Advanced Logging with Handlers</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`import logging
from logging.handlers import RotatingFileHandler

app = Flask(__name__)

handler = RotatingFileHandler('app.log', maxBytes=10000, backupCount=3)
handler.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]')
handler.setFormatter(formatter)
app.logger.addHandler(handler)
app.logger.setLevel(logging.INFO)

@app.route('/log-test')
def log_test():
    app.logger.debug('Debug message')
    app.logger.info('User accessed log-test')
    app.logger.warning('Potential issue detected')
    return "Logged!"`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Uses a <code className="bg-gray-800 text-white px-1 py-0.5 rounded">RotatingFileHandler</code> to manage log file size (rotating at 10KB with 3 backups), adding file path and line number for detailed tracing.
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
                        Build a Flask app integrating authentication (Day 6), hooks (Day 7), RESTful APIs (Day 8), external APIs (Day 9), and comprehensive error handling/logging (Day 10):
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 1️⃣: Setup with Authentication</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, render_template, request, jsonify, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, login_required, current_user
from flask_bcrypt import Bcrypt
from flask_restful import Api, Resource, reqparse, abort
import requests
import logging
from logging.handlers import RotatingFileHandler

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'
api = Api(app, prefix='/api/v1')

# Logging setup
handler = RotatingFileHandler('app.log', maxBytes=10000, backupCount=3)
handler.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]')
handler.setFormatter(formatter)
app.logger.addHandler(handler)
app.logger.setLevel(logging.DEBUG)

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 2️⃣: Authentication Routes (Day 6)</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = bcrypt.generate_password_hash(request.form['password']).decode('utf-8')
        user = User(username=username, password=password)
        try:
            db.session.add(user)
            db.session.commit()
            app.logger.info(f'User {username} registered')
            return redirect(url_for('login'))
        except Exception as e:
            app.logger.error(f'Registration failed: {e}')
            return render_template('register.html', error="Registration failed"), 500
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = User.query.filter_by(username=request.form['username']).first()
        if user and bcrypt.check_password_hash(user.password, request.form['password']):
            login_user(user)
            app.logger.info(f'User {user.username} logged in')
            return redirect(url_for('dashboard'))
        app.logger.warning('Failed login attempt')
        return render_template('login.html', error="Invalid credentials"), 401
    return render_template('login.html')

@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html')`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/register.html</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Register</h1>
    {% if error %}<p>{{ error }}</p>{% endif %}
    <form method="post">
        <input type="text" name="username" placeholder="Username"><br>
        <input type="password" name="password" placeholder="Password"><br>
        <button type="submit">Register</button>
    </form>
    <a href="{{ url_for('login') }}">Login</a>
</body>
</html>`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/login.html</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Login</h1>
    {% if error %}<p>{{ error }}</p>{% endif %}
    <form method="post">
        <input type="text" name="username" placeholder="Username"><br>
        <input type="password" name="password" placeholder="Password"><br>
        <button type="submit">Login</button>
    </form>
    <a href="{{ url_for('register') }}">Register</a>
</body>
</html>`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 3️⃣: Request Hooks (Day 7)</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.before_request
def log_request():
    app.logger.debug(f'Request: {request.method} {request.path} by {current_user.username if current_user.is_authenticated else "Anonymous"}')

@app.after_request
def log_response(response):
    app.logger.info(f'Response: {response.status} for {request.path}')
    return response

@app.teardown_request
def cleanup(exception):
    if exception:
        app.logger.error(f'Error during request: {exception}')`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 4️⃣: RESTful API with External Data (Days 8 & 9)</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`post_parser = reqparse.RequestParser()
post_parser.add_argument('city', type=str, required=True, help='City is required')

class WeatherResource(Resource):
    @login_required
    def get(self):
        args = post_parser.parse_args()
        api_key = 'your-openweathermap-api-key'
        url = f'http://api.openweathermap.org/data/2.5/weather?q={args["city"]}&appid={api_key}&units=metric'
        try:
            response = requests.get(url, timeout=5)
            response.raise_for_status()
            data = response.json()
            app.logger.info(f'Weather fetched for {args["city"]} by {current_user.username}')
            return {'city': data['name'], 'temp': data['main']['temp'], 'description': data['weather'][0]['description']}
        except requests.RequestException as e:
            app.logger.error(f'Weather API fetch failed: {e}')
            abort(502, message=f"Failed to fetch weather data: {str(e)}")

api.add_resource(WeatherResource, '/weather')`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 5️⃣: Error Handling (Day 10)</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.errorhandler(404)
def not_found(error):
    app.logger.warning(f'404 error encountered: {request.path}')
    if request.path.startswith('/api/'):
        return jsonify({'error': 'Resource not found'}), 404
    return render_template('404.html'), 404

@app.errorhandler(500)
def server_error(error):
    app.logger.error(f'500 error: {error}')
    if request.path.startswith('/api/'):
        return jsonify({'error': 'Internal Server Error'}), 500
    return render_template('500.html'), 500

@app.errorhandler(502)
def bad_gateway(error):
    app.logger.error(f'502 error: {error}')
    return jsonify({'error': str(error)}), 502`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/500.html</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>500 - Internal Server Error</h1>
    <p>Something went wrong on our end.</p>
</body>
</html>`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 6️⃣: Dashboard with Weather Form</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.route('/dashboard', methods=['GET', 'POST'])
@login_required
def dashboard():
    weather_data = None
    error = None
    if request.method == 'POST':
        city = request.form['city']
        api_key = 'your-openweathermap-api-key'
        url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
        try:
            response = requests.get(url, timeout=5)
            response.raise_for_status()
            data = response.json()
            weather_data = {'city': data['name'], 'temp': data['main']['temp'], 'description': data['weather'][0]['description']}
            app.logger.info(f'Weather fetched for {city} by {current_user.username}')
        except requests.RequestException as e:
            app.logger.error(f'Weather API fetch failed: {e}')
            error = "Failed to fetch weather data"
    return render_template('dashboard.html', weather=weather_data, error=error)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/dashboard.html</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Dashboard</h1>
    <h2>Get Weather</h2>
    <form method="post">
        <input type="text" name="city" placeholder="Enter city"><br>
        <button type="submit">Fetch Weather</button>
    </form>
    {% if error %}
        <p>{{ error }}</p>
    {% elif weather %}
        <p>City: {{ weather.city }}, Temp: {{ weather.temp }}°C, {{ weather.description }}</p>
    {% endif %}
</body>
</html>`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 7️⃣: Running the App</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)`}
                            </code>
                        </pre>
                    </div>

                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4 mb-3">
                        This exercise tests <strong>authentication (Day 6), hooks (Day 7), RESTful APIs (Day 8), external APIs (Day 9), and error handling/logging (Day 10)</strong>. Register a user, log in, fetch weather via web and API, trigger errors, and check <code className="bg-gray-800 text-white px-1 py-0.5 rounded">app.log</code>. Submit your GitHub link below 🚀
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
                        Handling errors, debugging, and logging in Flask transforms your application into a robust, maintainable system. Custom error handlers enhance user experience by providing meaningful feedback, debugging tools like Flask’s debug mode and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">pdb</code> pinpoint issues efficiently, and logging creates a detailed audit trail for production analysis. Integrating these with authentication, hooks, and APIs ensures your Flask app is resilient and production-ready, setting the stage for advanced deployment and scaling strategies.
                    </p>
                </section>

                {/* Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        📚 Resources for Further Study
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Learn more about error handling, debugging, and logging with these resources:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <strong>Flask Error Handling Docs:</strong> Official guide.<br />
                            <a href="https://flask.palletsprojects.com/en/latest/errorhandling/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">flask.palletsprojects.com/errorhandling</a>
                        </li>
                        <li>
                            <strong>Python Logging Docs:</strong> Logging setup.<br />
                            <a href="https://docs.python.org/3/library/logging.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">docs.python.org/logging</a>
                        </li>
                        <li>
                            <strong>Real Python - Flask Debugging:</strong> Debugging tutorial.<br />
                            <a href="https://realpython.com/python-debugging-pdb/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">realpython.com/debugging</a>
                        </li>
                        <li>
                            <strong>YouTube - Corey Schafer:</strong> Flask error handling video.<br />
                            Search "Corey Schafer Flask Error Handling" on YouTube.
                        </li>
                        <li>
                            <strong>Sentry Docs:</strong> Advanced error tracking for Flask.<br />
                            <a href="https://docs.sentry.io/platforms/python/guides/flask/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">docs.sentry.io/flask</a>
                        </li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                        These resources offer practical techniques and tools to master error management and debugging in Flask, from basics to production-grade solutions.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Deyy10;