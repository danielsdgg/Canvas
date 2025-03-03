import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Deyy7: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();

    // State for file upload
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        assignmentId: 7, // Changed to 7 for Deyy7
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
                    Middleware & Request Hooks
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction to Flask Middleware & Request Hooks */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        🔹 Introduction to Flask Middleware & Request Hooks
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Middleware and request hooks in Flask provide a powerful mechanism to intercept and manipulate the request-response cycle, allowing you to execute custom logic at specific points before, during, or after request processing. Unlike frameworks like Express.js with explicit middleware stacks, Flask uses <strong>Werkzeug’s WSGI middleware</strong> for low-level request handling and offers lightweight <strong>request hooks</strong>—such as <code className="bg-gray-800 text-white px-1 py-0.5 rounded">before_request</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">after_request</code>, and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">teardown_request</code>—for application-level control. These hooks enable tasks like authentication enforcement, response modification, logging, and resource cleanup, either globally or per blueprint.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        This lesson dives into Flask’s approach to middleware via WSGI, explores request hooks in depth, and demonstrates their integration with routing, forms, databases, and blueprints. You’ll learn how to leverage these tools to enhance functionality, improve security, and maintain a clean codebase in your Flask applications.
                    </p>
                </section>

                {/* Understanding Flask Middleware */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🌐 Understanding Flask Middleware (WSGI)
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Flask operates on the <strong>WSGI (Web Server Gateway Interface)</strong> standard, leveraging Werkzeug to handle HTTP requests and responses at a low level. Middleware in this context is a WSGI callable that wraps the Flask app, allowing you to preprocess requests or post-process responses before they reach the client. While Flask doesn’t have a built-in middleware stack like Django, you can create custom WSGI middleware for advanced use cases (e.g., request logging, rate limiting).
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Custom WSGI Middleware Example</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask
from werkzeug.wrappers import Request, Response

class LoggingMiddleware:
    def __init__(self, app):
        self.app = app

    def __call__(self, environ, start_response):
        print(f"Request: {environ['REQUEST_METHOD']} {environ['PATH_INFO']}")
        return self.app(environ, start_response)

app = Flask(__name__)
app.wsgi_app = LoggingMiddleware(app.wsgi_app)

@app.route('/')
def home():
    return "Hello, Flask!"

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            This middleware logs each request’s method and path before passing it to the Flask app. Wrap the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">wsgi_app</code> attribute to extend Flask’s WSGI handling.
                        </p>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        WSGI middleware is low-level and less common in Flask due to hooks’ simplicity, but it’s powerful for cross-cutting concerns like proxying or request transformation.
                    </p>
                </section>

                {/* Understanding before_request */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🚀 Understanding before_request
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">before_request</code> hook executes before every request reaches a route handler, making it ideal for global pre-processing tasks like authentication checks, setting up request context, or redirecting users. It’s defined with the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">@app.before_request</code> decorator and can short-circuit the request by returning a response.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Basic Example</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, request, redirect, url_for

app = Flask(__name__)

@app.before_request
def check_login():
    if request.path != '/login' and 'user' not in request.args:
        return redirect(url_for('login'))

@app.route('/login')
def login():
    return "Login Page"

@app.route('/dashboard')
def dashboard():
    return "Dashboard"

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Ensures all routes except <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/login</code> require a <code className="bg-gray-800 text-white px-1 py-0.5 rounded">user</code> query parameter, redirecting otherwise.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">With Authentication</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, request, redirect, url_for
from flask_login import current_user

app = Flask(__name__)

@app.before_request
def require_login():
    public_routes = ['/login', '/register']
    if request.path not in public_routes and not current_user.is_authenticated:
        return redirect(url_for('login'))

@app.route('/login')
def login():
    return "Login Page"

@app.route('/secure')
def secure():
    return "Secure Page"

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Integrates with Flask-Login (Day 6) to protect non-public routes, redirecting unauthenticated users to login.
                        </p>
                    </div>
                </section>

                {/* Understanding after_request */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📦 Understanding after_request
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">after_request</code> hook runs after a route processes a request but before the response is sent, allowing you to modify the response (e.g., add headers, compress data). It’s defined with <code className="bg-gray-800 text-white px-1 py-0.5 rounded">@app.after_request</code> and must return a response object.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Basic Example</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask

app = Flask(__name__)

@app.after_request
def add_header(response):
    response.headers['X-Custom-Header'] = 'Hello from Flask'
    return response

@app.route('/')
def home():
    return "Home Page"

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Adds a custom header to every response, visible in browser developer tools.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Logging Response Time</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`import time
from flask import Flask, g

app = Flask(__name__)

@app.before_request
def start_timer():
    g.start = time.time()

@app.after_request
def log_time(response):
    if hasattr(g, 'start'):
        elapsed = time.time() - g.start
        print(f"Request took {elapsed:.3f} seconds")
    return response

@app.route('/')
def home():
    return "Home Page"

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Combines <code className="bg-gray-800 text-white px-1 py-0.5 rounded">before_request</code> and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">after_request</code> to measure and log request processing time using Flask’s <code className="bg-gray-800 text-white px-1 py-0.5 rounded">g</code> object for request-scoped storage.
                        </p>
                    </div>
                </section>

                {/* Understanding teardown_request */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        ⚙️ Understanding teardown_request
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">teardown_request</code> hook executes after the response is sent, whether the request succeeded or failed (e.g., due to an exception). It’s perfect for cleanup tasks like closing database connections or logging errors. It’s defined with <code className="bg-gray-800 text-white px-1 py-0.5 rounded">@app.teardown_request</code> and receives an exception argument (or <code className="bg-gray-800 text-white px-1 py-0.5 rounded">None</code> if successful).
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Basic Example</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask

app = Flask(__name__)

@app.teardown_request
def cleanup(exception=None):
    if exception:
        print(f"Request failed with: {exception}")
    print("Request completed, cleaning up...")

@app.route('/')
def home():
    return "Home Page"

@app.route('/error')
def error():
    raise ValueError("Test error")

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Logs success or failure details after each request, useful for debugging or resource management.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Database Connection Cleanup</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, g
import sqlite3

app = Flask(__name__)

def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect('example.db')
    return g.db

@app.teardown_request
def close_db(exception):
    db = g.pop('db', None)
    if db is not None:
        db.close()
        print("Database connection closed")

@app.route('/')
def home():
    db = get_db()
    db.execute("SELECT 1")  # Simulate DB usage
    return "Home Page"

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Ensures database connections are closed after each request, integrating with Day 4’s database skills using Flask’s <code className="bg-gray-800 text-white px-1 py-0.5 rounded">g</code> object.
                        </p>
                    </div>
                </section>

                {/* Combining Hooks with Blueprints */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🔗 Combining Hooks with Blueprints
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Hooks can be applied globally via <code className="bg-gray-800 text-white px-1 py-0.5 rounded">@app</code> or scoped to blueprints (Day 5), allowing modular control over request handling. Here’s an example with a blueprint:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, Blueprint, request, redirect, url_for

app = Flask(__name__)

# Blueprint for admin routes
admin_bp = Blueprint('admin', __name__, url_prefix='/admin')

@admin_bp.before_request
def admin_check():
    if 'admin' not in request.args:
        return redirect(url_for('login'))

@admin_bp.route('/')
def admin_home():
    return "Admin Dashboard"

@app.route('/login')
def login():
    return "Login Page"

app.register_blueprint(admin_bp)

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">before_request</code> hook applies only to <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/admin</code> routes, ensuring admin access control within the blueprint.
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
                        Build a Flask app with middleware and request hooks to manage a simple task tracker, integrating routing (Day 2), forms (Day 3), and database (Day 4):
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 1️⃣: Setup with WSGI Middleware</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from werkzeug.wrappers import Request, Response
import time

class TimingMiddleware:
    def __init__(self, app):
        self.app = app

    def __call__(self, environ, start_response):
        start_time = time.time()
        response = self.app(environ, start_response)
        elapsed = time.time() - start_time
        print(f"Request took {elapsed:.3f} seconds")
        return response

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.wsgi_app = TimingMiddleware(app.wsgi_app)

db = SQLAlchemy(app)`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 2️⃣: Task Model</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    completed = db.Column(db.Boolean, default=False)`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 3️⃣: Request Hooks and Routes</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.before_request
def log_request():
    print(f"Handling {request.method} {request.path}")

@app.after_request
def add_header(response):
    response.headers['X-Task-App'] = 'Flask Demo'
    return response

@app.teardown_request
def cleanup(exception):
    if exception:
        print(f"Error: {exception}")
    print("Request cleanup complete")

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        title = request.form['title']
        task = Task(title=title)
        db.session.add(task)
        db.session.commit()
    tasks = Task.query.all()
    return render_template('index.html', tasks=tasks)

@app.route('/complete/<int:id>')
def complete(id):
    task = Task.query.get_or_404(id)
    task.completed = True
    db.session.commit()
    return redirect(url_for('index'))`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/index.html</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Task Tracker</h1>
    <form method="post">
        <input type="text" name="title" placeholder="New Task">
        <button type="submit">Add</button>
    </form>
    <ul>
    {% for task in tasks %}
        <li>{{ task.title }} {% if not task.completed %}<a href="{{ url_for('complete', id=task.id) }}">Complete</a>{% endif %}</li>
    {% endfor %}
    </ul>
</body>
</html>`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 4️⃣: Running the App</h3>
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
                        This exercise demonstrates <strong>middleware (WSGI timing) and request hooks (logging, headers, cleanup)</strong> with a task tracker. Upload your project to GitHub and submit the link below 🚀
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
                        Flask’s middleware (via WSGI) and request hooks—<code className="bg-gray-800 text-white px-1 py-0.5 rounded">before_request</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">after_request</code>, and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">teardown_request</code>—provide flexible control over the request-response lifecycle. Whether enforcing authentication, customizing responses, or ensuring cleanup, these tools enhance your app’s functionality, security, and maintainability. Combined with blueprints, forms, and databases, they empower you to build robust, scalable Flask applications, preparing you for advanced features like API middleware and error handling.
                    </p>
                </section>

                {/* Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        📚 Resources for Further Study
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Explore Flask middleware and hooks further with these resources:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <strong>Flask Request Hooks Docs:</strong> Official guide to hooks.<br />
                            <a href="https://flask.palletsprojects.com/en/latest/api/#flask.Flask.before_request" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">flask.palletsprojects.com/hooks</a>
                        </li>
                        <li>
                            <strong>Real Python - Flask Middleware:</strong> Tutorial on request handling.<br />
                            <a href="https://realpython.com/flask-by-example-part-2/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">realpython.com/flask-middleware</a>
                        </li>
                        <li>
                            <strong>Miguel Grinberg - Flask Hooks:</strong> In-depth explanation.<br />
                            <a href="https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-vii-error-handling" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">miguelgrinberg.com/flask-hooks</a>
                        </li>
                        <li>
                            <strong>YouTube - Tech With Tim:</strong> Video on Flask hooks.<br />
                            Search "Tech With Tim Flask Hooks" on YouTube.
                        </li>
                        <li>
                            <strong>Werkzeug Docs:</strong> WSGI middleware and request handling.<br />
                            <a href="https://werkzeug.palletsprojects.com/en/latest/middleware/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">werkzeug.palletsprojects.com/middleware</a>
                        </li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                        These resources offer practical examples, advanced techniques, and deeper insights into Flask’s request lifecycle management.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Deyy7;