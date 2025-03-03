import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Deyy4: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();

    // State for file upload
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        assignmentId: 4,
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
                    Integrating a Database to Your Flask App
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction to Databases with Flask */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        🔹 Introduction to Databases with Flask
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Integrating a database into your Flask application transforms it from a static web server into a dynamic, data-driven system capable of storing and managing information persistently. Flask itself doesn’t include database functionality out of the box, but extensions like <strong>Flask-SQLAlchemy</strong> provide an Object-Relational Mapping (ORM) layer over SQLAlchemy, simplifying database interactions. This allows you to define data models as Python classes, perform <strong>CRUD</strong> (Create, Read, Update, Delete) operations, and manage schema evolution with <strong>Flask-Migrate</strong>.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Databases are essential for applications requiring user data (e.g., profiles, posts) or persistent state (e.g., shopping carts). This lesson covers setting up Flask-SQLAlchemy with SQLite (a lightweight database), defining models, executing CRUD operations, handling migrations, and connecting forms to databases—bridging your Flask skills to real-world use cases.
                    </p>
                </section>

                {/* Setting Up Flask-SQLAlchemy */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🚀 Setting Up Flask-SQLAlchemy
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        To integrate a database, you’ll use Flask-SQLAlchemy for ORM functionality and Flask-Migrate for schema migrations. Start by installing the required packages:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`pip install flask-sqlalchemy flask-migrate`}
                            </code>
                        </pre>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Configure your Flask app to connect to a database (SQLite in this example) and initialize SQLAlchemy and Migrate:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'  # SQLite database file
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable modification tracking to save resources

# Initialize SQLAlchemy and Migrate
db = SQLAlchemy(app)
migrate = Migrate(app, db)

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            <code className="bg-gray-800 text-white px-1 py-0.5 rounded">SQLALCHEMY_DATABASE_URI</code> specifies the database location (e.g., SQLite’s <code className="bg-gray-800 text-white px-1 py-0.5 rounded">site.db</code>), and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">db</code> is the SQLAlchemy instance linked to your app. SQLite is lightweight and file-based, ideal for learning, though Flask-SQLAlchemy supports PostgreSQL, MySQL, and others for production.
                        </p>
                    </div>
                </section>

                {/* Defining Models */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📦 Defining Models with Flask-SQLAlchemy
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Models represent database tables as Python classes. Each attribute is a column defined with types like <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Integer</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">String</code>, or relationships (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">ForeignKey</code>). Flask-SQLAlchemy maps these to SQL tables automatically.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Basic Model Example</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Defines a <code className="bg-gray-800 text-white px-1 py-0.5 rounded">users</code> table with <code className="bg-gray-800 text-white px-1 py-0.5 rounded">id</code> (primary key), <code className="bg-gray-800 text-white px-1 py-0.5 rounded">username</code> (unique, max 20 chars), and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">email</code> (unique, max 120 chars).
                        </p>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Create the tables by running:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`with app.app_context():
    db.create_all()`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">app_context()</code> ensures the Flask app context is active, creating <code className="bg-gray-800 text-white px-1 py-0.5 rounded">site.db</code> with the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">users</code> table.
                        </p>
                    </div>
                </section>

                {/* CRUD Operations */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        ⚙️ CRUD Operations
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        <strong>CRUD</strong> operations (Create, Read, Update, Delete) are the core actions for managing database data. Flask-SQLAlchemy’s <code className="bg-gray-800 text-white px-1 py-0.5 rounded">db.session</code> handles these operations seamlessly:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2 mb-4">
                        <li><strong>Create:</strong> Add new records to the database.</li>
                        <li><strong>Read:</strong> Retrieve data with queries.</li>
                        <li><strong>Update:</strong> Modify existing records.</li>
                        <li><strong>Delete:</strong> Remove records from the database.</li>
                    </ul>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Basic CRUD Example</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`# Create
new_user = User(username='alice', email='alice@example.com')
db.session.add(new_user)
db.session.commit()

# Read
all_users = User.query.all()  # List of all users
user = User.query.filter_by(username='alice').first()  # Single user

# Update
user.email = 'alice.new@example.com'
db.session.commit()

# Delete
db.session.delete(user)
db.session.commit()`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            <code className="bg-gray-800 text-white px-1 py-0.5 rounded">db.session</code> stages changes (add, delete), and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">commit()</code> saves them. <code className="bg-gray-800 text-white px-1 py-0.5 rounded">query</code> offers methods like <code className="bg-gray-800 text-white px-1 py-0.5 rounded">all()</code> and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">filter_by()</code>.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Advanced Query Example</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`# Filter users with emails ending in '.com'
com_users = User.query.filter(User.email.endswith('.com')).all()

# Get user by ID or 404
user = User.query.get_or_404(1)

# Count users
user_count = User.query.count()`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Use <code className="bg-gray-800 text-white px-1 py-0.5 rounded">filter()</code> for complex conditions, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">get_or_404()</code> for safety, and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">count()</code> for aggregates.
                        </p>
                    </div>
                </section>

                {/* Database Migrations */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📝 Database Migrations with Flask-Migrate
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        <strong>Migrations</strong> manage schema changes (e.g., adding columns, modifying types) over time, ensuring your database evolves with your app. Flask-Migrate, built on Alembic, automates this process. After configuring <code className="bg-gray-800 text-white px-1 py-0.5 rounded">migrate</code>, initialize the migration repository:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`flask db init`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Creates a <code className="bg-gray-800 text-white px-1 py-0.5 rounded">migrations</code> folder for tracking changes.
                        </p>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        After modifying a model (e.g., adding a <code className="bg-gray-800 text-white px-1 py-0.5 rounded">bio</code> column), generate and apply a migration:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    bio = db.Column(db.String(200))  # New column

# Generate migration
flask db migrate -m "Added bio column"

# Apply migration
flask db upgrade`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            <code className="bg-gray-800 text-white px-1 py-0.5 rounded">migrate</code> detects changes and creates a script; <code className="bg-gray-800 text-white px-1 py-0.5 rounded">upgrade</code> applies it. Use <code className="bg-gray-800 text-white px-1 py-0.5 rounded">flask db downgrade</code> to revert if needed.
                        </p>
                    </div>
                </section>

                {/* Connecting Forms to Database */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🔗 Connecting Forms to Database
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Combine forms with database operations to create interactive apps. Here’s how to save form data into the database:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.route('/add', methods=['GET', 'POST'])
def add_user():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        user = User(username=username, email=email)
        db.session.add(user)
        db.session.commit()
        return "User added!"
    return render_template('add_user.html')`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">
                            Template <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/add_user.html</code>:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Add User</h1>
    <form method="post" action="/add">
        <input type="text" name="username" placeholder="Username">
        <input type="email" name="email" placeholder="Email">
        <button type="submit">Add</button>
    </form>
</body>
</html>`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Submits form data to the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/add</code> route, creating a new <code className="bg-gray-800 text-white px-1 py-0.5 rounded">User</code> record.
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
                        Build a Flask app to manage users with a database, including CRUD operations and a migration:
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 1️⃣: Setting Up Flask-SQLAlchemy</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 2️⃣: Defining a Model</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 3️⃣: Adding CRUD Routes</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        new_user = User(username=username, email=email)
        db.session.add(new_user)
        db.session.commit()
    users = User.query.all()
    return render_template('index.html', users=users)

@app.route('/delete/<int:id>')
def delete(id):
    user = User.query.get_or_404(id)
    db.session.delete(user)
    db.session.commit()
    return redirect(url_for('index'))`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">
                            Template <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/index.html</code>:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>User List</h1>
    <form method="post">
        <input type="text" name="username" placeholder="Username">
        <input type="email" name="email" placeholder="Email">
        <button type="submit">Add User</button>
    </form>
    <ul>
    {% for user in users %}
        <li>{{ user.username }} ({{ user.email }}) <a href="{{ url_for('delete', id=user.id) }}">Delete</a></li>
    {% endfor %}
    </ul>
</body>
</html>`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 4️⃣: Initializing and Running</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 5️⃣: Adding a Migration</h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">
                            Run these commands after adding a <code className="bg-gray-800 text-white px-1 py-0.5 rounded">bio</code> column to the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">User</code> model:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`flask db init
flask db migrate -m "Added bio column"
flask db upgrade`}
                            </code>
                        </pre>
                    </div>

                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4 mb-3">
                        This exercise covers <strong>defining models, CRUD operations, and migrations</strong>. Upload your project to GitHub and submit the link below 🚀
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
                        Integrating a database with Flask using Flask-SQLAlchemy transforms your app into a powerful data-driven tool. Defining models, performing CRUD operations, managing migrations with Flask-Migrate, and connecting forms to databases provide a robust foundation for storing and manipulating data. This knowledge bridges static web pages to dynamic applications, setting you up for advanced features like user authentication, API development, and scaling your Flask projects effectively.
                    </p>
                </section>

                {/* Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        📚 Resources for Further Study
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Dive deeper into Flask and databases with these resources:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <strong>Flask-SQLAlchemy Docs:</strong> Official guide to ORM integration.<br />
                            <a href="https://flask-sqlalchemy.palletsprojects.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">flask-sqlalchemy.palletsprojects.com</a>
                        </li>
                        <li>
                            <strong>Flask-Migrate Docs:</strong> Learn migration workflows.<br />
                            <a href="https://flask-migrate.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">flask-migrate.readthedocs.io</a>
                        </li>
                        <li>
                            <strong>Real Python - Flask-SQLAlchemy:</strong> Tutorial on database integration.<br />
                            <a href="https://realpython.com/flask-sqlalchemy-database/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">realpython.com/flask-sqlalchemy</a>
                        </li>
                        <li>
                            <strong>YouTube - Corey Schafer:</strong> Flask-SQLAlchemy video series.<br />
                            Search "Corey Schafer Flask SQLAlchemy" on YouTube.
                        </li>
                        <li>
                            <strong>Miguel Grinberg’s Blog:</strong> In-depth Flask database tutorials.<br />
                            <a href="https://blog.miguelgrinberg.com/category/Flask" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">blog.miguelgrinberg.com</a>
                        </li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                        These resources provide detailed guides, practical examples, and advanced techniques to master database integration in Flask.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Deyy4;