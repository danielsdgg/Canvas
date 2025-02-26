import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext'; // Assuming this exists in your project

const Deyy4:React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth(); // Added for form submission
    
    // State for file upload
    const [submitted, setSubmitted] = useState(false);
    
    const [form, setForm] = useState({
        assignmentId: 4, // Changed to 4 for Deyy4
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
                Integrating a Database to Your Flask App
            </h1>

            {/* Introduction to Databases with Flask */}
            <div className="text-gray-700 leading-relaxed">
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 Introduction to Databases with Flask</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Integrating a database into your Flask application allows you to store and manage data persistently. Flask-SQLAlchemy, an extension for Flask, simplifies this process by providing an Object-Relational Mapping (ORM) layer over SQLAlchemy. With Flask-SQLAlchemy, you can define models as Python classes, perform CRUD (Create, Read, Update, Delete) operations, and manage database schema changes using migrations with Flask-Migrate. This makes Flask a powerful tool for data-driven web applications.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    This section covers setting up Flask-SQLAlchemy, defining models, performing CRUD operations, and handling migrations, using SQLite as an example database for simplicity.
                </p>

                {/* Setting Up Flask-SQLAlchemy */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🚀 Setting Up Flask-SQLAlchemy</h2>
                <p className="text-gray-700 text-lg mb-4">
                    First, install Flask-SQLAlchemy and Flask-Migrate:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`pip install flask-sqlalchemy flask-migrate`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Then, configure your Flask app to use SQLAlchemy:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

if __name__ == '__main__':
    app.run(debug=True)`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    The <code>SQLALCHEMY_DATABASE_URI</code> specifies the database location (SQLite here), and <code>db</code> is the SQLAlchemy instance tied to your app.
                </p>

                {/* Defining Models with Flask-SQLAlchemy */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📦 Defining Models with Flask-SQLAlchemy</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Models represent database tables as Python classes. Each attribute defines a column, using types like <code>Integer</code>, <code>String</code>, etc.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    After defining models, create the tables with:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`with app.app_context():
    db.create_all()`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    This generates a <code>site.db</code> file containing the <code>users</code> table.
                </p>

                {/* CRUD Operations */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">⚙️ CRUD Operations</h2>
                <p className="text-gray-700 text-lg mb-4">
                    CRUD operations allow you to manipulate data in the database:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li><strong>Create:</strong> Add new records.</li>
                    <li><strong>Read:</strong> Retrieve data.</li>
                    <li><strong>Update:</strong> Modify existing records.</li>
                    <li><strong>Delete:</strong> Remove records.</li>
                </ul>
                <p className="text-gray-700 text-lg mb-4">Example:</p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`# Create
new_user = User(username='alice', email='alice@example.com')
db.session.add(new_user)
db.session.commit()

# Read
users = User.query.all()
user = User.query.filter_by(username='alice').first()

# Update
user.email = 'alice.new@example.com'
db.session.commit()

# Delete
db.session.delete(user)
db.session.commit()`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Use <code>db.session</code> to stage changes and <code>commit()</code> to save them. <code>query</code> provides flexible ways to retrieve data.
                </p>

                {/* Database Migrations with Flask-Migrate */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📝 Database Migrations</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Migrations manage schema changes (e.g., adding columns) over time. Flask-Migrate uses Alembic to handle this. After setting up <code>migrate</code>, initialize the migration repository:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`flask db init`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Generate a migration after modifying a model (e.g., adding a <code>bio</code> column):
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    bio = db.Column(db.String(200))  # New column

flask db migrate -m "Added bio column"
flask db upgrade`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    <code>migrate</code> creates a migration script, and <code>upgrade</code> applies it to the database.
                </p>

                {/* Practical Exercise Section */}
                <h2 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md mt-6">🎯 Practical Exercise</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Build a Flask app with a database to manage users, including CRUD operations and a migration:
                </p>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 1️⃣: Setting Up Flask-SQLAlchemy</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 2️⃣: Defining a Model</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 3️⃣: Adding CRUD Routes</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
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
    return redirect('/')
`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">Create <code>templates/index.html</code>:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
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
        <li>{{ user.username }} ({{ user.email }}) <a href="/delete/{{ user.id }}">Delete</a></li>
    {% endfor %}
    </ul>
</body>
</html>`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 4️⃣: Initializing and Running</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 5️⃣: Adding a Migration</h3>
                <p className="text-gray-700 text-lg mb-4">Run these commands after adding a <code>bio</code> column to the <code>User</code> model:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`flask db init
flask db migrate -m "Added bio column"
flask db upgrade`}
                    </code>
                </pre>

                <p className="text-gray-700 text-lg mt-6 mb-3">
                    This exercise covers **defining models, CRUD operations, and migrations**. Upload your project to GitHub and submit the link below 🚀
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
                    Integrating a database with Flask using Flask-SQLAlchemy transforms your app into a powerful data-driven tool. Defining models, performing CRUD operations, and managing migrations with Flask-Migrate provide a robust foundation for storing and manipulating data. This knowledge bridges static web pages to dynamic applications, setting you up for advanced features like user authentication and API development.
                </p>

                {/* Resources for Further Study */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Resources for Further Study</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Dive deeper into Flask and databases with these resources:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li>
                        <strong>Flask-SQLAlchemy Docs:</strong> Official guide to ORM integration.<br />
                        <a href="https://flask-sqlalchemy.palletsprojects.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">flask-sqlalchemy.palletsprojects.com</a>
                    </li>
                    <li>
                        <strong>Flask-Migrate Docs:</strong> Learn migration workflows.<br />
                        <a href="https://flask-migrate.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">flask-migrate.readthedocs.io</a>
                    </li>
                    <li>
                        <strong>Real Python - Flask-SQLAlchemy:</strong> Tutorial on database integration.<br />
                        <a href="https://realpython.com/flask-sqlalchemy-database/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">realpython.com/flask-sqlalchemy</a>
                    </li>
                    <li>
                        <strong>YouTube - Corey Schafer:</strong> Flask-SQLAlchemy video series.<br />
                        Search "Corey Schafer Flask SQLAlchemy" on YouTube.
                    </li>
                </ul>
                <p className="text-gray-700 text-lg">
                    These resources offer step-by-step guidance and examples to master database handling in Flask.
                </p>
            </div>
        </section>
        </>
    )
}

export default Deyy4