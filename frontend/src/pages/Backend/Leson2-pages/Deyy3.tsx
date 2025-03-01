import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Deyy3:React.FC = () => {
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
                Forms & User Inputs
            </h1>

            {/* Introduction to Forms & User Inputs */}
            <div className="text-gray-700 leading-relaxed">
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 Introduction to Forms & User Inputs</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Forms are a fundamental part of web applications, allowing users to submit data like text, selections, or files. In Flask, handling user inputs through forms involves creating HTML forms, processing the submitted data with the <code>request</code> object, and optionally validating inputs to ensure they meet your application’s requirements. This process enables interactive features like user registration, search functionality, or feedback collection.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    Flask provides a straightforward way to manage forms, but for more complex applications, extensions like Flask-WTF can streamline validation and security. This section focuses on the basics of form creation and input handling in pure Flask.
                </p>

                {/* Creating Forms in Flask */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🚀 Creating Forms in Flask</h2>
                <p className="text-gray-700 text-lg mb-4">
                    To create a form in Flask, you define an HTML form in a template (or directly in a route for simple cases) and specify its action (URL) and method (usually POST). The form sends data to a Flask route, where you process it. Here’s a basic example:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/form', methods=['GET', 'POST'])
def handle_form():
    if request.method == 'POST':
        name = request.form['name']
        return f"Hello, {name}!"
    return render_template('form.html')

if __name__ == '__main__':
    app.run(debug=True)`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Create a file <code>templates/form.html</code>:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Simple Form</h1>
    <form method="post" action="/form">
        <input type="text" name="name" placeholder="Enter your name">
        <button type="submit">Submit</button>
    </form>
</body>
</html>`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    When the user submits the form, the <code>/form</code> route processes the POST request, retrieves the input from <code>request.form['name']</code>, and returns a greeting.
                </p>

                {/* Handling User Inputs */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📦 Handling User Inputs</h2>
                <p className="text-gray-700 text-lg mb-4">
                    The <code>request.form</code> dictionary in Flask holds all form data sent via POST. You access inputs by their <code>name</code> attribute. Flask also supports other input types, like checkboxes or file uploads, with additional methods like <code>request.files</code>.
                </p>
                <p className="text-gray-700 text-lg mb-4">Example with multiple inputs:</p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        return f"Registered: {username} ({email})"
    return render_template('register.html')`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Template <code>templates/register.html</code>:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Register</h1>
    <form method="post" action="/register">
        <input type="text" name="username" placeholder="Username"><br>
        <input type="email" name="email" placeholder="Email"><br>
        <button type="submit">Register</button>
    </form>
</body>
</html>`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    This handles two inputs and returns a confirmation message. You can extend this to store data in a database or perform other actions.
                </p>

                {/* Validating Inputs */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">⚙️ Validating Inputs</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Input validation ensures user data is safe and meets expectations (e.g., non-empty fields, valid email formats). In pure Flask, you manually check inputs before processing them. For example:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`@app.route('/validate', methods=['GET', 'POST'])
def validate_form():
    if request.method == 'POST':
        email = request.form['email']
        if not email or '@' not in email:
            return "Invalid email!"
        return f"Valid email: {email}"
    return render_template('validate.html')`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Template <code>templates/validate.html</code>:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Email Validation</h1>
    <form method="post" action="/validate">
        <input type="email" name="email" placeholder="Enter email">
        <button type="submit">Submit</button>
    </form>
</body>
</html>`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    This simple check rejects empty or malformed emails. For robust validation, consider Flask-WTF, which integrates with WTForms for built-in validators.
                </p>

                {/* Best Practices */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📝 Best Practices</h2>
                <p className="text-gray-700 text-lg mb-4">
                    When working with forms in Flask, keep these tips in mind:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li><strong>Use POST for Forms:</strong> GET exposes data in URLs, so use POST for security.</li>
                    <li><strong>Add CSRF Protection:</strong> Flask-WTF provides CSRF tokens to prevent attacks.</li>
                    <li><strong>Validate Inputs:</strong> Always check data before processing to avoid errors or security issues.</li>
                    <li><strong>Provide Feedback:</strong> Return success or error messages to users after submission.</li>
                    <li><strong>Leverage Templates:</strong> Keep HTML separate from Python code for cleaner structure.</li>
                </ul>

                {/* Conclusion */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📌 Conclusion</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Forms and user input handling in Flask enable you to create interactive web applications that respond to user actions. By combining HTML forms with Flask’s <code>request</code> object, you can collect and process data efficiently. While basic validation can be done manually, extensions like Flask-WTF offer advanced tools for security and ease. This knowledge builds on routing and prepares you for more complex features like database integration.
                </p>

                {/* Resources for Further Study */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Resources for Further Study</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Ready to enhance your form-handling skills in Flask? Explore these resources:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li>
                        <strong>Flask Forms Docs:</strong> Official guide to handling requests and forms.<br />
                        <a href="https://flask.palletsprojects.com/en/latest/patterns/wtforms/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">flask.palletsprojects.com/wtforms</a>
                    </li>
                    <li>
                        <strong>Flask-WTF:</strong> Documentation for the Flask-WTF extension.<br />
                        <a href="https://flask-wtf.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">flask-wtf.readthedocs.io</a>
                    </li>
                    <li>
                        <strong>Real Python - Flask Forms:</strong> Tutorial on forms and validation.<br />
                        <a href="https://realpython.com/flask-forms/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">realpython.com/flask-forms</a>
                    </li>
                    <li>
                        <strong>YouTube - Tech With Tim:</strong> Video on Flask forms.<br />
                        Search "Tech With Tim Flask Forms" on YouTube.
                    </li>
                </ul>
                <p className="text-gray-700 text-lg">
                    These resources offer practical examples and advanced techniques to master forms in Flask.
                </p>
            </div>
        </section>
        </>
    )
}

export default Deyy3