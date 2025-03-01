import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Deyy7:React.FC = () => {
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
                Middleware & Hooks
            </h1>

            {/* Introduction to Flask Middleware & Request Hooks */}
            <div className="text-gray-700 leading-relaxed">
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 Introduction to Flask Middleware & Request Hooks</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Middleware and request hooks in Flask allow you to execute code at specific points in the request-response cycle, enhancing control over how requests are processed. While Flask doesn’t use traditional middleware like some frameworks (e.g., Express.js), it provides hooks like <code>before_request</code>, <code>after_request</code>, and <code>teardown_request</code> to achieve similar functionality. These hooks are powerful for tasks like authentication checks, logging, or cleanup, applying globally or to specific routes.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    This section explores these hooks, explaining their purpose and how they integrate into Flask applications.
                </p>

                {/* Understanding before_request */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🚀 Understanding before_request</h2>
                <p className="text-gray-700 text-lg mb-4">
                    The <code className='bg-gray-800 text-white px-1'>before_request</code> hook runs before every request is processed by a route. It’s ideal for tasks like checking authentication, setting up global variables, or redirecting users. You define it with the <code>@app.before_request</code> decorator.
                </p>
                <p className="text-gray-700 text-lg mb-4">Example:</p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
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
                <p className="text-gray-700 text-lg mb-4">
                    Here, <code>check_login</code> ensures every request except <code>/login</code> includes a <code>user</code> query parameter, redirecting to the login page if absent. Return a response from <code>before_request</code> to short-circuit the request.
                </p>

                {/* Understanding after_request */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📦 Understanding after_request</h2>
                <p className="text-gray-700 text-lg mb-4">
                    The <code>after_request</code> hook runs after a route has processed a request, but before the response is sent to the client. It’s useful for modifying responses (e.g., adding headers) or logging. Define it with <code>@app.after_request</code>, and it must accept and return a response object.
                </p>
                <p className="text-gray-700 text-lg mb-4">Example:</p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask import Flask, Response

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
                <p className="text-gray-700 text-lg mb-4">
                    This adds a custom header to every response. You can also log response details or modify content based on conditions.
                </p>

                {/* Understanding teardown_request */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">⚙️ Understanding teardown_request</h2>
                <p className="text-gray-700 text-lg mb-4">
                    The <code>teardown_request</code> hook executes after the response is sent, regardless of success or failure (e.g., exceptions). It’s perfect for cleanup tasks like closing database connections. Define it with <code>@app.teardown_request</code>, and it receives an exception (if any) as an argument.
                </p>
                <p className="text-gray-700 text-lg mb-4">Example:</p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
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
                <p className="text-gray-700 text-lg mb-4">
                    This logs whether a request succeeded or failed, useful for debugging or resource management.
                </p>

                {/* Combining Hooks */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📝 Combining Hooks</h2>
                <p className="text-gray-700 text-lg mb-4">
                    You can use all three hooks together for a cohesive workflow:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask import Flask, request, redirect, url_for

app = Flask(__name__)

@app.before_request
def log_request():
    print(f"Request: {request.method} {request.path}")

@app.after_request
def log_response(response):
    print(f"Response: {response.status}")
    return response

@app.teardown_request
def cleanup(exception):
    if exception:
        print(f"Error: {exception}")
    print("Cleanup complete")

@app.route('/')
def home():
    return "Home Page"

if __name__ == '__main__':
    app.run(debug=True)`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    This logs the request, response, and any errors, demonstrating how hooks work in sequence.
                </p>

                {/* Conclusion */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📌 Conclusion</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Flask’s request hooks—<code>before_request</code>, <code>after_request</code>, and <code>teardown_request</code>—offer a lightweight alternative to middleware, giving you fine-grained control over the request lifecycle. They enable global logic like authentication, response customization, and cleanup without cluttering route handlers, enhancing your app’s maintainability and robustness.
                </p>

                {/* Resources for Further Study */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Resources for Further Study</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Explore Flask middleware and hooks further with these resources:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li>
                        <strong>Flask Request Hooks Docs:</strong> Official guide to hooks.<br />
                        <a href="https://flask.palletsprojects.com/en/latest/api/#flask.Flask.before_request" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">flask.palletsprojects.com/hooks</a>
                    </li>
                    <li>
                        <strong>Real Python - Flask Middleware:</strong> Tutorial on request handling.<br />
                        <a href="https://realpython.com/flask-by-example-part-2/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">realpython.com/flask-middleware</a>
                    </li>
                    <li>
                        <strong>Miguel Grinberg - Flask Hooks:</strong> In-depth explanation.<br />
                        <a href="https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-vii-error-handling" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">miguelgrinberg.com/flask-hooks</a>
                    </li>
                    <li>
                        <strong>YouTube - Tech With Tim:</strong> Video on Flask hooks.<br />
                        Search "Tech With Tim Flask Hooks" on YouTube.
                    </li>
                </ul>
                <p className="text-gray-700 text-lg">
                    These resources provide examples and insights to master Flask’s request lifecycle management.
                </p>
            </div>
        </section>
        </>
    )
}

export default Deyy7