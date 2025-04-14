import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle, FaLock } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Deyy6: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();

    // State for file upload
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        assignmentId: 29,
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
                    Authentication & Authorization
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction to User Authentication & Authorization */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        🔹 Introduction to User Authentication & Authorization
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        <strong>Authentication</strong> and <strong>authorization</strong> are foundational pillars of web application security. Authentication verifies a user’s identity (e.g., through a username and password or multi-factor authentication), ensuring only legitimate users can access the system. Authorization determines what an authenticated user is permitted to do (e.g., view pages, edit content), enforcing access control based on roles or permissions. In Flask, tools like <strong>Flask-Login</strong> manage user sessions, <strong>Werkzeug</strong> or <strong>Flask-Bcrypt</strong> secure passwords, and custom logic implements role-based access control (RBAC).
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        These mechanisms protect sensitive data, prevent unauthorized actions, and enhance user trust. This lesson covers setting up authentication with Flask-Login, securing passwords with hashing, implementing RBAC, and integrating these with forms and databases, building on your Flask skills to create secure, user-centric applications.
                    </p>
                </section>

                {/* Importance of Authentication & Authorization */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLock className="mr-2 text-indigo-600" />
                        Importance of Authentication & Authorization
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Authentication and authorization are crucial for application security, ensuring that only authorized users access specific resources and perform permitted actions. They protect sensitive data (e.g., personal information, financial records) and prevent security breaches like unauthorized logins or privilege escalation.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        <strong>Authentication</strong> confirms identity using credentials (e.g., passwords, tokens, biometrics). Modern methods like OAuth, JWT (JSON Web Tokens), and two-factor authentication (2FA) bolster security by reducing risks like password theft. <strong>Authorization</strong> defines permissions, often via RBAC or attribute-based access control (ABAC), ensuring users only interact with resources they’re entitled to—e.g., admins manage users, while regular users view content.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Together, they safeguard your app’s integrity, comply with privacy regulations (e.g., GDPR), and build user confidence in its reliability.
                    </p>
                </section>

                {/* Implementing Authentication with Flask-Login */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🚀 Implementing Authentication with Flask-Login
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        <strong>Flask-Login</strong> simplifies user session management, offering tools to log users in, track their sessions, log them out, and restrict access to routes. Install it with:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`pip install flask-login`}
                            </code>
                        </pre>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Set up Flask-Login with a user model and basic routes:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'  # Required for session security
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'  # Redirect unauthorized users here

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
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            <code className="bg-gray-800 text-white px-1 py-0.5 rounded">UserMixin</code> provides authentication methods (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">is_authenticated</code>), <code className="bg-gray-800 text-white px-1 py-0.5 rounded">@login_required</code> restricts routes to logged-in users, and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">user_loader</code> retrieves users by ID for session management.
                        </p>
                    </div>
                </section>

                {/* Hashing Passwords */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📦 Hashing Passwords
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Storing plain-text passwords is a security risk; hashing transforms them into irreversible, fixed-length strings using algorithms like bcrypt. <strong>Flask-Bcrypt</strong> integrates bcrypt with Flask for secure password management. Install it with:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`pip install flask-bcrypt`}
                            </code>
                        </pre>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Update the app with registration and login using hashed passwords:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
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
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            <code className="bg-gray-800 text-white px-1 py-0.5 rounded">generate_password_hash</code> creates a secure hash, and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">check_password_hash</code> verifies it against user input. The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">decode('utf-8')</code> ensures compatibility with the database.
                        </p>
                    </div>
                </section>

                {/* Role-Based Access Control (RBAC) */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        ⚙️ Role-Based Access Control (RBAC)
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        <strong>RBAC</strong> restricts access based on user roles (e.g., 'admin', 'user'), ensuring users only perform authorized actions. Add a <code className="bg-gray-800 text-white px-1 py-0.5 rounded">role</code> column to the model and create a custom decorator:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
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
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Only users with <code className="bg-gray-800 text-white px-1 py-0.5 rounded">role='admin'</code> can access the admin panel. <code className="bg-gray-800 text-white px-1 py-0.5 rounded">current_user</code> from Flask-Login provides the logged-in user’s details.
                        </p>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        For more granular control, store permissions in a separate table and check them dynamically.
                    </p>
                </section>

                {/* Security Best Practices */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🔒 Security Best Practices
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Implementing authentication and authorization requires attention to security:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li><strong>Strong Secret Key:</strong> Use a long, random <code className="bg-gray-800 text-white px-1 py-0.5 rounded">SECRET_KEY</code> (e.g., generated with <code className="bg-gray-800 text-white px-1 py-0.5 rounded">secrets.token_hex(16)</code>) for session security.</li>
                        <li><strong>CSRF Protection:</strong> Add Flask-WTF for CSRF tokens on forms to prevent forgery attacks.</li>
                        <li><strong>Password Policies:</strong> Enforce minimum length and complexity in registration.</li>
                        <li><strong>HTTPS:</strong> Use HTTPS in production to encrypt data in transit.</li>
                        <li><strong>Rate Limiting:</strong> Implement Flask-Limiter to prevent brute-force login attempts:<br />
                            <pre className="bg-gray-800 text-white p-2 rounded-md text-sm sm:text-base overflow-x-auto">
                                <code>
{`pip install flask-limiter
from flask_limiter import Limiter
limiter = Limiter(app, default_limits=["100 per day", "10 per hour"])
@app.route('/login', methods=['GET', 'POST'])
@limiter.limit("5 per minute")
def login(): ...`}
                                </code>
                            </pre>
                        </li>
                    </ul>
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
                        Build a Flask app with user authentication and RBAC using Flask-Login and Flask-Bcrypt:
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 1️⃣: Setup</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
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
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 2️⃣: User Model</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
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
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 3️⃣: Authentication Routes</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
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
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/register.html</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
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
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/login.html</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
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
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 4️⃣: RBAC with Protected Routes</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
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
    return "Admin Panel: Manage Users"`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 5️⃣: Running the App</h3>
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
                        This exercise focuses on <strong>user authentication (login/register/logout) and authorization (RBAC)</strong>. Register users with roles, log in, and test access to the admin panel. Upload your project to GitHub and submit the link below 🚀
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
                        User authentication and authorization are pivotal for securing Flask applications, ensuring only verified users access resources and perform permitted actions. Flask-Login simplifies session management, password hashing with Flask-Bcrypt protects credentials, and RBAC enforces granular access control. Integrating these with forms, databases, and blueprints creates a robust security framework, preparing you for advanced features like API authentication and user management in real-world projects.
                    </p>
                </section>

                {/* Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        📚 Resources for Further Study
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Deepen your understanding of authentication and authorization with these resources:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <strong>Flask-Login Docs:</strong> Official guide to authentication.<br />
                            <a href="https://flask-login.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">flask-login.readthedocs.io</a>
                        </li>
                        <li>
                            <strong>Flask-Bcrypt Docs:</strong> Password hashing details.<br />
                            <a href="https://flask-bcrypt.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">flask-bcrypt.readthedocs.io</a>
                        </li>
                        <li>
                            <strong>Real Python - Flask Authentication:</strong> Tutorial on login systems.<br />
                            <a href="https://realpython.com/using-flask-login-for-user-management/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">realpython.com/flask-login</a>
                        </li>
                        <li>
                            <strong>YouTube - Corey Schafer:</strong> Flask authentication series.<br />
                            Search "Corey Schafer Flask Authentication" on YouTube.
                        </li>
                        <li>
                            <strong>OWASP Security Guide:</strong> Best practices for secure authentication.<br />
                            <a href="https://owasp.org/www-project-cheat-sheets/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">owasp.org/cheat-sheets</a>
                        </li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                        These resources provide practical examples, security insights, and advanced techniques for securing Flask apps with authentication and authorization.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Deyy6;