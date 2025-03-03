import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from 'react-icons/fa';

const Deyy3: React.FC = () => {
    const navigate = useNavigate();

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
                    Forms & User Inputs
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction to Forms & User Inputs */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        🔹 Introduction to Forms & User Inputs
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Forms are a cornerstone of interactive web applications, enabling users to submit data such as text, selections, or files to the server. In Flask, handling user inputs through forms involves creating HTML forms, processing the submitted data with the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">request</code> object, and validating inputs to ensure they meet application requirements. This functionality powers features like user registration, search bars, feedback systems, and more, making forms essential for dynamic web experiences.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Flask provides a straightforward approach to form handling using its built-in tools, while extensions like <strong>Flask-WTF</strong> enhance security and validation for complex scenarios. This lesson explores the basics of form creation in pure Flask, advanced input handling, validation techniques, and best practices, preparing you to build robust, user-friendly applications.
                    </p>
                </section>

                {/* Creating Forms in Flask */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🚀 Creating Forms in Flask
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        To create a form in Flask, you define an HTML form in a template (or inline for simple cases), specifying its <code className="bg-gray-800 text-white px-1 py-0.5 rounded">action</code> (the URL to submit to) and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">method</code> (typically POST). The form sends data to a Flask route, where you process it using the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">request</code> object. Here’s a basic example:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
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
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">
                            Create a file <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/form.html</code>:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
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
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            When the user submits the form, the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/form</code> route processes the POST request, retrieves the input from <code className="bg-gray-800 text-white px-1 py-0.5 rounded">request.form['name']</code>, and returns a greeting. GET requests render the form initially.
                        </p>
                    </div>
                </section>

                {/* Handling User Inputs */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📦 Handling User Inputs
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">request.form</code> dictionary holds all form data sent via POST, accessed by the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">name</code> attribute of each input. Flask also supports diverse input types—text, checkboxes, radio buttons, file uploads—with methods like <code className="bg-gray-800 text-white px-1 py-0.5 rounded">request.files</code> for files.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Example: Multiple Inputs</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
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
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">
                            Template <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/register.html</code>:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
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
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            This handles two inputs and returns a confirmation. You can extend it to include more fields—e.g., age, preferences—or store data in a database.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Example: File Upload</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['file']
        if file:
            file.save(f"uploads/{file.filename}")
            return f"File {file.filename} uploaded successfully!"
    return render_template('upload.html')`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">
                            Template <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/upload.html</code>:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Upload a File</h1>
    <form method="post" action="/upload" enctype="multipart/form-data">
        <input type="file" name="file">
        <button type="submit">Upload</button>
    </form>
</body>
</html>`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Note the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">enctype="multipart/form-data"</code> attribute for file uploads. Ensure an <code className="bg-gray-800 text-white px-1 py-0.5 rounded">uploads</code> folder exists in your project directory.
                        </p>
                    </div>
                </section>

                {/* Validating Inputs */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        ⚙️ Validating Inputs
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Input validation ensures user data is safe, complete, and correctly formatted (e.g., valid emails, non-empty fields). In pure Flask, you implement validation logic manually within your routes. For more robust solutions, extensions like Flask-WTF with WTForms provide built-in validators.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Basic Validation Example</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.route('/validate', methods=['GET', 'POST'])
def validate_form():
    if request.method == 'POST':
        email = request.form['email']
        if not email or '@' not in email:
            return "Invalid email! Please include '@' and a domain."
        return f"Valid email: {email}"
    return render_template('validate.html')`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">
                            Template <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/validate.html</code>:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
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
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            This checks for a non-empty email with an '@' symbol. More complex validation (e.g., regex) can be added as needed.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Advanced Validation with Regex</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`import re

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        if not username or len(username) < 3:
            return "Username must be at least 3 characters!"
        if not re.match(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", email):
            return "Invalid email format!"
        return f"Sign-up successful for {username} ({email})"
    return render_template('signup.html')`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">
                            Template <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/signup.html</code>:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Sign Up</h1>
    <form method="post" action="/signup">
        <input type="text" name="username" placeholder="Username"><br>
        <input type="email" name="email" placeholder="Email"><br>
        <button type="submit">Sign Up</button>
    </form>
</body>
</html>`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Uses regex to enforce a strict email format and checks username length, enhancing data quality.
                        </p>
                    </div>
                </section>

                {/* Security Considerations */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🔒 Security Considerations
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Handling user inputs introduces security risks like <strong>Cross-Site Request Forgery (CSRF)</strong> and <strong>SQL Injection</strong>. Flask offers basic protections, but additional measures are critical:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2 mb-4">
                        <li><strong>CSRF Protection:</strong> Use Flask-WTF with a CSRF token to prevent unauthorized form submissions.<br />
                            Example with Flask-WTF:<br />
                            <pre className="bg-gray-800 text-white p-2 rounded-md text-sm sm:text-base overflow-x-auto">
                                <code>
{`from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

class MyForm(FlaskForm):
    name = StringField('Name')
    submit = SubmitField('Submit')`}
                                </code>
                            </pre>
                        </li>
                        <li><strong>Sanitizing Inputs:</strong> Escape or sanitize inputs to prevent XSS (Cross-Site Scripting) attacks.</li>
                        <li><strong>Database Safety:</strong> Use parameterized queries with SQLAlchemy to avoid SQL injection.</li>
                    </ul>
                </section>

                {/* Best Practices */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📝 Best Practices
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        When working with forms in Flask, adopt these best practices to ensure usability and security:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
  <li>
    <strong>Use POST for Forms:</strong> GET exposes data in URLs, so use POST for security.
  </li>
  <li>
    <strong>Add CSRF Protection:</strong> Flask-WTF provides CSRF tokens to prevent attacks.
  </li>
  <li>
    <strong>Validate Inputs:</strong> Always check data before processing to avoid errors or security issues.
  </li>
  <li>
    <strong>Provide Feedback:</strong> Return success or error messages to users after submission.
  </li>
  <li>
    <strong>Leverage Templates:</strong> Keep HTML separate from Python code for a cleaner structure.
  </li>
  <li>
    <strong>Use Labels:</strong> Enhance accessibility with{" "}
    <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
      {"<label>"}
    </code>{" "}
    tags.<br />
    Example:{" "}
    <code className="bg-gray-800 text-white p-1 rounded">
      {`<label for="name">Name:</label><input id="name" name="name">`}
    </code>
  </li>
</ul>

                </section>

                {/* Conclusion */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        📌 Conclusion
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Forms and user input handling in Flask enable you to create interactive web applications that respond to user actions. By combining HTML forms with Flask’s <code className="bg-gray-800 text-white px-1 py-0.5 rounded">request</code> object, you can collect and process data efficiently. Adding validation and security measures ensures robust, safe applications. While basic validation can be done manually, extensions like Flask-WTF offer advanced tools for efficiency and protection, building on your routing foundation and preparing you for database integration in future lessons.
                    </p>
                </section>

                {/* Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        📚 Resources for Further Study
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Ready to enhance your form-handling skills in Flask? Explore these resources:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <strong>Flask Forms Docs:</strong> Official guide to handling requests and forms.<br />
                            <a href="https://flask.palletsprojects.com/en/latest/patterns/wtforms/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">flask.palletsprojects.com/wtforms</a>
                        </li>
                        <li>
                            <strong>Flask-WTF:</strong> Documentation for the Flask-WTF extension.<br />
                            <a href="https://flask-wtf.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">flask-wtf.readthedocs.io</a>
                        </li>
                        <li>
                            <strong>Real Python - Flask Forms:</strong> Tutorial on forms and validation.<br />
                            <a href="https://realpython.com/flask-forms/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">realpython.com/flask-forms</a>
                        </li>
                        <li>
                            <strong>YouTube - Tech With Tim:</strong> Video on Flask forms.<br />
                            Search "Tech With Tim Flask Forms" on YouTube.
                        </li>
                        <li>
                            <strong>WTForms Docs:</strong> Detailed guide for form validation with Flask-WTF.<br />
                            <a href="https://wtforms.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">wtforms.readthedocs.io</a>
                        </li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                        These resources offer practical examples and advanced techniques to master forms and user inputs in Flask, from basics to secure, scalable solutions.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Deyy3;