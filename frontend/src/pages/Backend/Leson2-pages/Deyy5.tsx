import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Deyy5: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();

    // State for file upload
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        assignmentId: 28,
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
                    Blueprints
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction to Flask Blueprints */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        🔹 Introduction to Flask Blueprints
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        As Flask applications grow in complexity—adding more routes, forms, database models, and logic—managing everything in a single file becomes impractical and error-prone. Flask <strong>Blueprints</strong> offer a powerful solution by allowing you to organize your app into modular, reusable components. Each blueprint acts like a mini-Flask application, encapsulating related routes, templates, static files, and logic (e.g., user authentication, blog posts, admin dashboard), which you then register with the main Flask app.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Blueprints enhance scalability, maintainability, and collaboration, making them ideal for large projects or team environments. They enable you to separate concerns, reuse code across projects, and keep your codebase clean. This lesson explores blueprint creation, structuring applications, integrating with previous concepts (routing, forms, databases), and best practices for modular Flask development.
                    </p>
                </section>

                {/* Understanding Flask Blueprints */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🚀 Understanding Flask Blueprints
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        A blueprint is created using the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Blueprint</code> class from Flask, defining routes and handlers similarly to a regular app. You register it with the main Flask app, optionally with a URL prefix. Think of blueprints as self-contained modules that plug into your application. Here’s a simple example:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, Blueprint, render_template

# Create a blueprint
auth_bp = Blueprint('auth', __name__)

# Define routes in the blueprint
@auth_bp.route('/login')
def login():
    return "Login Page"

# Main app
app = Flask(__name__)
app.register_blueprint(auth_bp)

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Visiting <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/login</code> triggers the blueprint’s <code className="bg-gray-800 text-white px-1 py-0.5 rounded">login</code> route. The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">'auth'</code> argument names the blueprint, and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">__name__</code> sets its import context.
                        </p>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Blueprints can include their own templates and static files by specifying <code className="bg-gray-800 text-white px-1 py-0.5 rounded">template_folder</code> and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">static_folder</code>:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`auth_bp = Blueprint('auth', __name__, template_folder='templates', static_folder='static')`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            This keeps blueprint-specific assets isolated, enhancing modularity.
                        </p>
                    </div>
                </section>

                {/* Structuring Your Application */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📦 Structuring Your Application
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Blueprints enable a modular project structure, splitting your app into logical components. A common layout separates blueprints into directories with their own routes, models, templates, and static files. Here’s an example structure:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`project/
├── app.py
├── auth/
│   ├── __init__.py
│   ├── routes.py
│   ├── templates/
│   │   └── auth/
│   │       └── login.html
│   └── static/
│       └── auth/
│           └── style.css
└── main/
    ├── __init__.py
    ├── routes.py
    └── templates/
        └── main/
            └── index.html`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            <code className="bg-gray-800 text-white px-1 py-0.5 rounded">auth</code> handles authentication, while <code className="bg-gray-800 text-white px-1 py-0.5 rounded">main</code> manages core app routes.
                        </p>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Register blueprints in <code className="bg-gray-800 text-white px-1 py-0.5 rounded">app.py</code> with optional prefixes:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask
from auth.routes import auth_bp
from main.routes import main_bp

app = Flask(__name__)
app.register_blueprint(auth_bp, url_prefix='/auth')  # All auth routes start with /auth
app.register_blueprint(main_bp)  # No prefix for main routes

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            <code className="bg-gray-800 text-white px-1 py-0.5 rounded">url_prefix='/auth'</code> makes <code className="bg-gray-800 text-white px-1 py-0.5 rounded">auth</code> routes accessible at <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/auth/login</code>, while <code className="bg-gray-800 text-white px-1 py-0.5 rounded">main</code> routes stay at the root (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/</code>).
                        </p>
                    </div>
                </section>

                {/* Working with Multiple Routes */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        ⚙️ Working with Multiple Routes
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Blueprints manage multiple routes like the main app, supporting dynamic routes, request handling, forms, and database operations. They integrate seamlessly with Flask’s features. Example in <code className="bg-gray-800 text-white px-1 py-0.5 rounded">auth/routes.py</code>:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Blueprint, request, render_template

auth_bp = Blueprint('auth', __name__, template_folder='templates')

@auth_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        return f"Logged in as {username}"
    return render_template('auth/login.html')

@auth_bp.route('/user/<username>')
def user_profile(username):
    return f"Profile: {username}"`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">
                            Template <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/auth/login.html</code>:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Login</h1>
    <form method="post">
        <input type="text" name="username" placeholder="Username">
        <button type="submit">Login</button>
    </form>
</body>
</html>`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            This blueprint handles a login form and a dynamic profile route, demonstrating encapsulation of related functionality.
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
                        Build a Flask app using blueprints that integrates everything from Day1-Day5: basic Flask setup, routing, forms, database with CRUD, and blueprints. Create a blog system:
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 1️⃣: Project Structure</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`blog/
├── app.py
├── main/
│   ├── __init__.py
│   ├── routes.py
│   └── templates/
│       └── main/
│           └── index.html
└── posts/
    ├── __init__.py
    ├── routes.py
    ├── models.py
    └── templates/
        └── posts/
            ├── create.html
            └── list.html`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 2️⃣: Main App (Day1: Flask Basics)</h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">app.py</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from main.routes import main_bp
from posts.routes import posts_bp

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

app.register_blueprint(main_bp)
app.register_blueprint(posts_bp, url_prefix='/posts')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 3️⃣: Main Blueprint (Day2: Routing)</h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">main/__init__.py</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Blueprint

main_bp = Blueprint('main', __name__, template_folder='templates')`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">main/routes.py</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import render_template
from main import main_bp

@main_bp.route('/')
def index():
    return render_template('main/index.html')`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/main/index.html</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Blog Home</h1>
    <a href="{{ url_for('posts.create') }}">Create Post</a> | <a href="{{ url_for('posts.list_posts') }}">View Posts</a>
</body>
</html>`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 4️⃣: Posts Blueprint (Day3: Forms, Day4: Database)</h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">posts/__init__.py</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Blueprint

posts_bp = Blueprint('posts', __name__, template_folder='templates')`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">posts/models.py</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from app import db

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f"Post('{self.title}')"`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">posts/routes.py</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import render_template, request, redirect, url_for
from posts import posts_bp
from posts.models import Post
from app import db

@posts_bp.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        if not title or not content:
            return "Title and content are required!"
        new_post = Post(title=title, content=content)
        db.session.add(new_post)
        db.session.commit()
        return redirect(url_for('posts.list_posts'))
    return render_template('posts/create.html')

@posts_bp.route('/')
def list_posts():
    posts = Post.query.all()
    return render_template('posts/list.html', posts=posts)

@posts_bp.route('/delete/<int:id>')
def delete(id):
    post = Post.query.get_or_404(id)
    db.session.delete(post)
    db.session.commit()
    return redirect(url_for('posts.list_posts'))`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/posts/create.html</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Create Post</h1>
    <form method="post">
        <input type="text" name="title" placeholder="Title"><br>
        <textarea name="content" placeholder="Content"></textarea><br>
        <button type="submit">Submit</button>
    </form>
    <a href="{{ url_for('main.index') }}">Back to Home</a>
</body>
</html>`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/posts/list.html</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>All Posts</h1>
    <ul>
    {% for post in posts %}
        <li>{{ post.title }}: {{ post.content }} <a href="{{ url_for('posts.delete', id=post.id) }}">Delete</a></li>
    {% endfor %}
    </ul>
    <a href="{{ url_for('posts.create') }}">New Post</a> | <a href="{{ url_for('main.index') }}">Home</a>
</body>
</html>`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 5️⃣: Running and Migrating (Day4: Migrations)</h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">
                            Run these commands to initialize and migrate the database:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`flask db init
flask db migrate -m "Initial post model"
flask db upgrade`}
                            </code>
                        </pre>
                    </div>

                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4 mb-3">
                        This exercise combines <strong>Flask basics (Day1), routing (Day2), forms (Day3), database with CRUD (Day4), and blueprints (Day5)</strong>. Upload your project to GitHub and submit the link below 🚀
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
                        Flask Blueprints bring modularity and scalability to your applications, allowing you to organize complex projects into manageable, reusable components. By structuring routes, templates, and logic into separate blueprints, you maintain clarity, improve collaboration, and prepare your app for growth. Combined with routing, forms, and database skills from previous lessons, blueprints empower you to build sophisticated, well-structured Flask apps, paving the way for advanced topics like authentication and RESTful APIs.
                    </p>
                </section>

                {/* Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        📚 Resources for Further Study
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Explore Flask Blueprints further with these resources:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <strong>Flask Blueprints Docs:</strong> Official guide to blueprints.<br />
                            <a href="https://flask.palletsprojects.com/en/latest/blueprints/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">flask.palletsprojects.com/blueprints</a>
                        </li>
                        <li>
                            <strong>Real Python - Flask Blueprints:</strong> Tutorial on structuring apps.<br />
                            <a href="https://realpython.com/flask-blueprint/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">realpython.com/flask-blueprint</a>
                        </li>
                        <li>
                            <strong>Miguel Grinberg - Flask Mega-Tutorial:</strong> Covers blueprints in depth.<br />
                            <a href="https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-ii-blueprints" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">miguelgrinberg.com/flask-blueprints</a>
                        </li>
                        <li>
                            <strong>YouTube - Pretty Printed:</strong> Video on Flask blueprints.<br />
                            Search "Pretty Printed Flask Blueprints" on YouTube.
                        </li>
                        <li>
                            <strong>Flask Blueprints Book:</strong> Practical examples for modular Flask apps.<br />
                            <a href="https://www.packtpub.com/product/flask-blueprints/9781784394783" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">packtpub.com/flask-blueprints</a>
                        </li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                        These resources offer practical examples and advanced techniques for mastering blueprints, from basic setup to real-world applications.
                    </p>
                </section>

                {/* Words of Encouragement */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6 text-center">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center justify-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        You're Close!
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed italic">
                        Fantastic! You’ve mastered Flask basics and fundamentals through blueprints, routing, forms, and databases. With this knowledge, you’re now ready to tackle advanced topics like authentication and RESTful APIs. Keep building—your next milestone is just ahead! 🚀
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Deyy5;