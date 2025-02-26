import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext'; // Assuming this exists in your project

const Deyy5:React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth(); // Added for form submission
    
    // State for file upload
    const [submitted, setSubmitted] = useState(false);
    
    const [form, setForm] = useState({
        assignmentId: 5, // Changed to 5 for Deyy5
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
                Blueprints
            </h1>

            {/* Introduction to Flask Blueprints */}
            <div className="text-gray-700 leading-relaxed">
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 Introduction to Flask Blueprints</h2>
                <p className="text-gray-700 text-lg mb-4">
                    As Flask applications grow, managing all routes, models, and logic in a single file becomes unwieldy. Flask Blueprints provide a way to organize your app into modular components, each handling a specific part of the functionality (e.g., user management, admin panel). A blueprint is like a mini-Flask app that you register with the main app, allowing for better structure and reusability.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    Blueprints let you group related routes, templates, and static files, making your codebase cleaner and easier to maintain. They’re especially useful for large projects or when working in teams.
                </p>

                {/* Understanding Flask Blueprints */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🚀 Understanding Flask Blueprints</h2>
                <p className="text-gray-700 text-lg mb-4">
                    A blueprint is created using <code>Blueprint</code> from Flask, defining routes and handlers just like a regular app. You then register it with the main Flask app. Here’s a simple example:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
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
                <p className="text-gray-700 text-lg mb-4">
                    Visiting <code>/login</code> triggers the blueprint’s <code>login</code> route. Blueprints can have their own templates and static folders by specifying <code>template_folder</code> and <code>static_folder</code> in the <code>Blueprint</code> constructor.
                </p>

                {/* Structuring Your Application */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📦 Structuring Your Application</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Using blueprints, you can split your app into modules. A common structure might look like this:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
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
└── main/
    ├── __init__.py
    ├── routes.py
    └── templates/
        └── main/
            └── index.html`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Each folder (<code>auth</code>, <code>main</code>) contains a blueprint. In <code>app.py</code>, register them:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask import Flask
from auth.routes import auth_bp
from main.routes import main_bp

app = Flask(__name__)
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(main_bp)

if __name__ == '__main__':
    app.run(debug=True)`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    The <code>url_prefix</code> makes <code>auth</code> routes start with <code>/auth</code> (e.g., <code>/auth/login</code>).
                </p>

                {/* Working with Multiple Routes */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">⚙️ Working with Multiple Routes</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Blueprints handle multiple routes just like the main app, supporting dynamic routes, request handling, and more. Example in <code>auth/routes.py</code>:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask import Blueprint, request

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        return f"Logged in as {username}"
    return "Login Form"

@auth_bp.route('/user/<username>')
def user_profile(username):
    return f"Profile: {username}"`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    This blueprint handles a form submission and a dynamic route, showing how blueprints encapsulate functionality.
                </p>

                {/* Practical Exercise Section */}
                <h2 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md mt-6">🎯 Practical Exercise</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Build a Flask app using blueprints that integrates everything from Day1-Day5: basic Flask setup, routing, forms, database with CRUD, and blueprints. Create a blog system:
                </p>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 1️⃣: Project Structure</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
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

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 2️⃣: Main App (Day1: Flask Basics)</h3>
                <p className="text-gray-700 text-lg mb-4">In <code>app.py</code>:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
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

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 3️⃣: Main Blueprint (Day2: Routing)</h3>
                <p className="text-gray-700 text-lg mb-4">In <code>main/__init__.py</code>:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`from flask import Blueprint

main_bp = Blueprint('main', __name__, template_folder='templates')`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">In <code>main/routes.py</code>:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`from flask import render_template
from main import main_bp

@main_bp.route('/')
def index():
    return render_template('main/index.html')`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">In <code>templates/main/index.html</code>:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Blog Home</h1>
    <a href="/posts/create">Create Post</a> | <a href="/posts">View Posts</a>
</body>
</html>`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 4️⃣: Posts Blueprint (Day3: Forms, Day4: Database)</h3>
                <p className="text-gray-700 text-lg mb-4">In <code>posts/__init__.py</code>:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`from flask import Blueprint

posts_bp = Blueprint('posts', __name__, template_folder='templates')`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">In <code>posts/models.py</code>:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
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
                <p className="text-gray-700 text-lg mb-4">In <code>posts/routes.py</code>:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
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
                <p className="text-gray-700 text-lg mb-4">In <code>templates/posts/create.html</code>:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
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
                <p className="text-gray-700 text-lg mb-4">In <code>templates/posts/list.html</code>:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
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

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 5️⃣: Running and Migrating (Day4: Migrations)</h3>
                <p className="text-gray-700 text-lg mb-4">Run these commands:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`flask db init
flask db migrate -m "Initial post model"
flask db upgrade`}
                    </code>
                </pre>

                <p className="text-gray-700 text-lg mt-6 mb-3">
                    This exercise combines **Flask basics (Day1), routing (Day2), forms (Day3), database with CRUD (Day4), and blueprints (Day5)**. Upload your project to GitHub and submit the link below 🚀
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
                    Flask Blueprints bring modularity to your applications, allowing you to scale projects efficiently while keeping code organized. By structuring routes and logic into separate modules, you can maintain clarity and collaborate effectively. Combined with previous skills—routing, forms, and databases—blueprints empower you to build complex, well-structured Flask apps.
                </p>

                {/* Resources for Further Study */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Resources for Further Study</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Explore Flask Blueprints further with these resources:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li>
                        <strong>Flask Blueprints Docs:</strong> Official guide to blueprints.<br />
                        <a href="https://flask.palletsprojects.com/en/latest/blueprints/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">flask.palletsprojects.com/blueprints</a>
                    </li>
                    <li>
                        <strong>Real Python - Flask Blueprints:</strong> Tutorial on structuring apps.<br />
                        <a href="https://realpython.com/flask-blueprint/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">realpython.com/flask-blueprint</a>
                    </li>
                    <li>
                        <strong>Miguel Grinberg - Flask Mega-Tutorial:</strong> Covers blueprints in depth.<br />
                        <a href="https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-ii-blueprints" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">miguelgrinberg.com/flask-blueprints</a>
                    </li>
                    <li>
                        <strong>YouTube - Pretty Printed:</strong> Video on Flask blueprints.<br />
                        Search "Pretty Printed Flask Blueprints" on YouTube.
                    </li>
                </ul>
                <p className="text-gray-700 text-lg">
                    These resources provide practical examples and advanced techniques for mastering blueprints.
                </p>
            </div>
            {/* Words of Encouragement */}
            <section className="mb-6 text-center">
                <h2 className="text-2xl font-semibold mb-2 mt-5">You're Close!</h2>
                <p className="italic">
                    Fantastic..! You have learnt the Flask basics and fundamentals, with this knowledge you are now ready for more topics like authentication and Restful APIs 🚀
                </p>
            </section>
        </section>
        </>
    )
}

export default Deyy5