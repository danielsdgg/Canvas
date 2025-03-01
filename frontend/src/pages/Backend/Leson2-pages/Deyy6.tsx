import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';
import { FaLock } from 'react-icons/fa';

const Deyy6:React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth(); // Added for form submission
    
    // State for file upload
    const [submitted, setSubmitted] = useState(false);
    
    const [form, setForm] = useState({
        assignmentId: 6, // Changed to 6 for Deyy6
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
                Authentication & Authorization
            </h1>

            {/* Introduction to User Authentication & Authorization */}
            <div className="text-gray-700 leading-relaxed">
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 Introduction to User Authentication & Authorization</h2>
                <p className="text-gray-700 text-lg mb-4">
                    User authentication and authorization are critical for securing web applications. Authentication verifies a user’s identity (e.g., logging in with a username and password), while authorization determines what an authenticated user can do (e.g., access admin pages). In Flask, Flask-Login handles authentication, Werkzeug or Flask-Bcrypt secures passwords, and custom logic implements role-based access control (RBAC).
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    This section explores setting up Flask-Login, hashing passwords, and enforcing RBAC to protect routes and resources.
                </p>

                <div className="bg-gray-100 py-10 px-6 md:px-12 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
        <FaLock className="text-blue-600" />
        Importance of Authentication & Authorization
      </h2>
      <div className="text-gray-700 leading-relaxed mt-4">
        <p>
          Authentication and authorization are crucial aspects of application security.
          They ensure that only the right users have access to specific parts of an application,
          protecting sensitive data and preventing unauthorized access.
        </p>
        <p className="mt-3">
          <strong>Authentication</strong> is the process of verifying a user's identity, usually
          through credentials such as usernames, passwords, or authentication tokens.
          Secure authentication methods like OAuth, JWT (JSON Web Tokens), and biometric
          authentication enhance security by preventing unauthorized logins.
        </p>
        <p className="mt-3">
          <strong>Authorization</strong> determines what actions a user can perform within an application.
          It ensures that users only have access to resources they are permitted to use. Role-based access
          control (RBAC) and permission levels help enforce proper authorization mechanisms.
        </p>
        <p className="mt-3">
          Implementing strong authentication and authorization practices helps prevent security breaches,
          safeguard user data, and build trust in an application’s reliability.
        </p>
      </div>
    </div>

                {/* Implementing Authentication with Flask-Login */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🚀 Implementing Authentication with Flask-Login</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Flask-Login manages user sessions, providing tools to log users in, out, and protect routes. Install it with:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`pip install flask-login`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Basic setup with a user model:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()
        if user and user.password == password:  # Simplified; use hashing in practice
            login_user(user)
            return redirect(url_for('dashboard'))
        return "Invalid credentials"
    return render_template('login.html')

@app.route('/dashboard')
@login_required
def dashboard():
    return "Welcome to your dashboard!"

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    <code>UserMixin</code> adds required methods for Flask-Login, and <code>@login_required</code> protects routes.
                </p>

                {/* Hashing Passwords */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📦 Hashing Passwords</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Storing plain-text passwords is insecure. Use Flask-Bcrypt or Werkzeug to hash passwords. Install Flask-Bcrypt:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`pip install flask-bcrypt`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Update the app with password hashing:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask_bcrypt import Bcrypt

app = Flask(__name__)
bcrypt = Bcrypt(app)

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = bcrypt.generate_password_hash(request.form['password']).decode('utf-8')
        user = User(username=username, password=password)
        db.session.add(user)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = User.query.filter_by(username=request.form['username']).first()
        if user and bcrypt.check_password_hash(user.password, request.form['password']):
            login_user(user)
            return redirect(url_for('dashboard'))
        return "Invalid credentials"
    return render_template('login.html')`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    <code>generate_password_hash</code> secures passwords, and <code>check_password_hash</code> verifies them.
                </p>

                {/* Role-Based Access Control (RBAC) */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">⚙️ Role-Based Access Control (RBAC)</h2>
                <p className="text-gray-700 text-lg mb-4">
                    RBAC restricts access based on user roles (e.g., admin, user). Add a <code>role</code> column to the model and create a decorator:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from functools import wraps
from flask_login import current_user

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    role = db.Column(db.String(10), default='user')

def role_required(role):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            if not current_user.is_authenticated or current_user.role != role:
                return "Access denied"
            return f(*args, **kwargs)
        return decorated_function
    return decorator

@app.route('/admin')
@login_required
@role_required('admin')
def admin_panel():
    return "Welcome to the Admin Panel!"`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Only users with <code>role='admin'</code> can access the admin panel.
                </p>

                {/* Practical Exercise Section */}
                <h2 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md mt-6">🎯 Practical Exercise</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Build a Flask app with user authentication and RBAC using Flask-Login and Flask-Bcrypt:
                </p>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 1️⃣: Setup</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from flask_bcrypt import Bcrypt
from functools import wraps

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///auth.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 2️⃣: User Model</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    role = db.Column(db.String(10), default='user')

    def __repr__(self):
        return f"User('{self.username}', '{self.role}')"

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 3️⃣: Authentication Routes</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = bcrypt.generate_password_hash(request.form['password']).decode('utf-8')
        role = request.form.get('role', 'user')
        user = User(username=username, password=password, role=role)
        db.session.add(user)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = User.query.filter_by(username=request.form['username']).first()
        if user and bcrypt.check_password_hash(user.password, request.form['password']):
            login_user(user)
            return redirect(url_for('dashboard'))
        return "Invalid credentials"
    return render_template('login.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">In <code>templates/register.html</code>:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Register</h1>
    <form method="post">
        <input type="text" name="username" placeholder="Username"><br>
        <input type="password" name="password" placeholder="Password"><br>
        <select name="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select><br>
        <button type="submit">Register</button>
    </form>
    <a href="{{ url_for('login') }}">Login</a>
</body>
</html>`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">In <code>templates/login.html</code>:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Login</h1>
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

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 4️⃣: RBAC with Protected Routes</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`def role_required(role):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            if not current_user.is_authenticated or current_user.role != role:
                return "Access denied"
            return f(*args, **kwargs)
        return decorated_function
    return decorator

@app.route('/dashboard')
@login_required
def dashboard():
    return f"Welcome, {current_user.username}! Role: {current_user.role}"

@app.route('/admin')
@login_required
@role_required('admin')
def admin_panel():
    return "Admin Panel: Manage Users"
`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 5️⃣: Running the App</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)`}
                    </code>
                </pre>

                <p className="text-gray-700 text-lg mt-6 mb-3">
                    This exercise focuses on **user authentication (login/register/logout) and authorization (RBAC)**. Register users with roles, log in, and test access to the admin panel. Upload your project to GitHub and submit the link below 🚀
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
                    User authentication and authorization secure your Flask app by controlling who can access it and what they can do. Flask-Login simplifies session management, password hashing protects credentials, and RBAC ensures fine-grained access control. These skills enable you to build robust, user-centric applications with confidence.
                </p>

                {/* Resources for Further Study */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Resources for Further Study</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Deepen your understanding of authentication and authorization with these resources:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li>
                        <strong>Flask-Login Docs:</strong> Official guide to authentication.<br />
                        <a href="https://flask-login.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">flask-login.readthedocs.io</a>
                    </li>
                    <li>
                        <strong>Flask-Bcrypt Docs:</strong> Password hashing details.<br />
                        <a href="https://flask-bcrypt.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">flask-bcrypt.readthedocs.io</a>
                    </li>
                    <li>
                        <strong>Real Python - Flask Authentication:</strong> Tutorial on login systems.<br />
                        <a href="https://realpython.com/using-flask-login-for-user-management/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">realpython.com/flask-login</a>
                    </li>
                    <li>
                        <strong>YouTube - Corey Schafer:</strong> Flask authentication series.<br />
                        Search "Corey Schafer Flask Authentication" on YouTube.
                    </li>
                </ul>
                <p className="text-gray-700 text-lg">
                    These resources offer practical examples and advanced techniques for securing Flask apps.
                </p>
            </div>
        </section>
        </>
    )
}

export default Deyy6