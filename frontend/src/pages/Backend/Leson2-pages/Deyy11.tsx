import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Deyy11: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();

    // State for file upload
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        assignmentId: 34,
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
                    Flask Deployment
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction to Deployment and Best Practices */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        🔹 Introduction to Deployment and Best Practices
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        <strong>Deploying a Flask application</strong> transitions it from a local development environment to a live, accessible production server, allowing users to interact with it over the internet. This process involves configuring a production-grade server, securing sensitive data, optimizing performance, and ensuring scalability to handle real-world traffic. Effective deployment requires moving beyond Flask’s built-in development server to robust solutions like WSGI servers, reverse proxies, and cloud platforms, while adhering to best practices for reliability, security, and maintainability.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        This lesson covers preparing your Flask app for deployment, using WSGI servers (e.g., Gunicorn), deploying to cloud platforms (e.g., Heroku, AWS), integrating with previous concepts (e.g., authentication from Day 6, RESTful APIs from Day 8), and applying best practices to ensure your app thrives in production. You’ll learn to take your Flask projects live with confidence.
                    </p>
                </section>

                {/* Preparing for Deployment */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🚀 Preparing for Deployment
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Before deploying, configure your Flask app to meet production requirements, ensuring security, performance, and proper resource management:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2 mb-4">
                        <li><strong>Disable Debug Mode:</strong> Set <code className="bg-gray-800 text-white px-1 py-0.5 rounded">debug=False</code> to avoid exposing stack traces and sensitive info.</li>
                        <li><strong>Secure Configuration:</strong> Use environment variables for secrets like <code className="bg-gray-800 text-white px-1 py-0.5 rounded">SECRET_KEY</code>, database URLs, and API keys.</li>
                        <li><strong>Static Files:</strong> Offload static file serving (CSS, JS, images) to a web server like Nginx, not Flask.</li>
                        <li>
  <strong>Dependency Management:</strong> Generate a{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
    requirements.txt
  </code>{" "}
  file with{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
    {"pip freeze > requirements.txt"}
  </code>
  .
</li>
                    </ul>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Basic Production Setup</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask
import os
from dotenv import load_dotenv

load_dotenv()  # Load .env file

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'default-secret')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///app.db')
app.debug = False  # Disable debug mode

@app.route('/')
def home():
    return "Production-ready Flask App"

if __name__ == '__main__':
    app.run()`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">.env</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`SECRET_KEY=your-secure-key
DATABASE_URL=postgresql://user:password@host:port/dbname`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Uses <code className="bg-gray-800 text-white px-1 py-0.5 rounded">python-dotenv</code> (<code className="bg-gray-800 text-white px-1 py-0.5 rounded">pip install python-dotenv</code>) to load environment variables securely.
                        </p>
                    </div>
                </section>

                {/* Using WSGI Servers */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📦 Using WSGI Servers
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Flask’s built-in server is for development only and lacks the performance and concurrency needed for production. A <strong>WSGI (Web Server Gateway Interface)</strong> server like <strong>Gunicorn</strong> or <strong>uWSGI</strong> bridges Flask to a production-ready web server. Install Gunicorn:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`pip install gunicorn`}
                            </code>
                        </pre>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Run your Flask app with Gunicorn:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Basic Gunicorn Setup</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`gunicorn -w 4 -b 0.0.0.0:8000 app:app`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            - <code className="bg-gray-800 text-white px-1 py-0.5 rounded">-w 4</code>: Runs 4 worker processes for concurrency.<br />
                            - <code className="bg-gray-800 text-white px-1 py-0.5 rounded">-b 0.0.0.0:8000</code>: Binds to all network interfaces on port 8000.<br />
                            - <code className="bg-gray-800 text-white px-1 py-0.5 rounded">app:app</code>: Specifies the Flask app instance in <code className="bg-gray-800 text-white px-1 py-0.5 rounded">app.py</code>.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Gunicorn with Nginx</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`# In nginx.conf or a site config file
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /static/ {
        alias /path/to/your/static/;
    }
}
# Run Gunicorn
gunicorn -w 4 -b 127.0.0.1:8000 app:app`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Pairs Gunicorn with Nginx as a reverse proxy, serving static files directly and forwarding dynamic requests to Flask, enhancing performance and security.
                        </p>
                    </div>
                </section>

                {/* Deploying to a Platform */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        ⚙️ Deploying to a Platform
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Cloud platforms like <strong>Heroku</strong>, <strong>AWS Elastic Beanstalk</strong>, or <strong>Render</strong> simplify deployment by managing servers, scaling, and domains. Here’s how to deploy to Heroku:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Heroku Deployment</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`# Step 1: Install Heroku CLI and login
heroku login

# Step 2: Create Procfile
echo "web: gunicorn app:app" > Procfile

# Step 3: Create requirements.txt
pip freeze > requirements.txt

# Step 4: Initialize git and deploy
git init
git add .
git commit -m "Initial commit"
heroku create your-app-name
git push heroku main

# Step 5: Set environment variables
heroku config:set SECRET_KEY=your-secure-key DATABASE_URL=your-db-url`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Deploys your app to Heroku with Gunicorn, auto-scaling, and environment variable configuration via the Heroku dashboard or CLI.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">AWS Elastic Beanstalk</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`# Step 1: Install AWS EB CLI
pip install awsebcli

# Step 2: Create .ebextensions/python.config
echo "option_settings:
  aws:elasticbeanstalk:container:python:
    WSGIPath: app:app" > .ebextensions/python.config

# Step 3: Initialize and deploy
eb init -p python-3.9 your-app-name
eb create your-env-name
eb deploy`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Deploys to AWS Elastic Beanstalk, configuring the WSGI path and leveraging AWS scalability features. Set environment variables via the AWS console.
                        </p>
                    </div>
                </section>

                {/* Best Practices */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📝 Best Practices
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Adopt these best practices to ensure your Flask app is secure, performant, and scalable in production:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2 mb-4">
                        <li><strong>HTTPS:</strong> Enforce SSL/TLS with tools like Let’s Encrypt or cloud provider certificates.</li>
                        <li><strong>Logging:</strong> Implement detailed logging (Day 10) to files or services like Sentry for error tracking.</li>
                        <li><strong>Database Management:</strong> Use Flask-Migrate (Day 4) for schema migrations (<code className="bg-gray-800 text-white px-1 py-0.5 rounded">flask db upgrade</code>).</li>
                        <li><strong>Performance:</strong> Cache responses with Flask-Caching and optimize database queries.</li>
                        <li><strong>Security:</strong> Enable CSRF protection (Day 6), validate inputs, and use secure headers with Flask-Talisman.</li>
                        <li><strong>Monitoring:</strong> Add health checks (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/health</code>) and monitor with tools like New Relic.</li>
                    </ul>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Secure Headers with Talisman</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask
from flask_talisman import Talisman
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'default-secret')
Talisman(app, force_https=True, strict_transport_security=True)

@app.route('/')
def home():
    return "Secure Flask App"

if __name__ == '__main__':
    app.run()`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Install with <code className="bg-gray-800 text-white px-1 py-0.5 rounded">pip install flask-talisman</code>. Enforces HTTPS and adds security headers like HSTS.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Caching with Flask-Caching</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask
from flask_caching import Cache

app = Flask(__name__)
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

@app.route('/cached-data')
@cache.cached(timeout=60)  # Cache for 60 seconds
def cached_data():
    return {'data': 'Expensive operation result'}

if __name__ == '__main__':
    app.run()`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Install with <code className="bg-gray-800 text-white px-1 py-0.5 rounded">pip install flask-caching</code>. Caches responses to reduce server load.
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
                        Deploy a Flask app integrating authentication (Day 6), RESTful APIs (Day 8), external APIs (Day 9), error handling/logging (Day 10), and production-ready deployment (Day 11):
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 1️⃣: Project Setup</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, render_template, request, jsonify, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, login_required
from flask_bcrypt import Bcrypt
from flask_restful import Api, Resource, reqparse
from flask_talisman import Talisman
from flask_caching import Cache
import requests
import logging
from logging.handlers import RotatingFileHandler
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'default-secret')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///app.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.debug = False  # Disable debug mode

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'
api = Api(app, prefix='/api/v1')
Talisman(app, force_https=True)
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

# Logging setup
handler = RotatingFileHandler('app.log', maxBytes=10000, backupCount=3)
handler.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]')
handler.setFormatter(formatter)
app.logger.addHandler(handler)
app.logger.setLevel(logging.INFO)

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 2️⃣: Authentication Routes</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = bcrypt.generate_password_hash(request.form['password']).decode('utf-8')
        user = User(username=username, password=password)
        try:
            db.session.add(user)
            db.session.commit()
            app.logger.info(f'User {username} registered')
            return redirect(url_for('login'))
        except Exception as e:
            app.logger.error(f'Registration failed: {e}')
            return render_template('register.html', error="Registration failed"), 500
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = User.query.filter_by(username=request.form['username']).first()
        if user and bcrypt.check_password_hash(user.password, request.form['password']):
            login_user(user)
            app.logger.info(f'User {user.username} logged in')
            return redirect(url_for('dashboard'))
        app.logger.warning('Failed login attempt')
        return render_template('login.html', error="Invalid credentials"), 401
    return render_template('login.html')`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/register.html</code> and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/login.html</code>, use Day 6 templates.</p>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 3️⃣: Dashboard with External API</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.route('/dashboard', methods=['GET', 'POST'])
@login_required
def dashboard():
    weather_data = None
    error = None
    if request.method == 'POST':
        city = request.form['city']
        api_key = os.getenv('WEATHER_API_KEY')
        if not api_key:
            app.logger.error('WEATHER_API_KEY not set')
            error = "Server configuration error"
        else:
            url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
            try:
                response = requests.get(url, timeout=5)
                response.raise_for_status()
                data = response.json()
                weather_data = {'city': data['name'], 'temp': data['main']['temp'], 'description': data['weather'][0]['description']}
                app.logger.info(f'Weather fetched for {city} by {current_user.username}')
            except requests.RequestException as e:
                app.logger.error(f'Weather API fetch failed: {e}')
                error = "Failed to fetch weather data"
    return render_template('dashboard.html', weather=weather_data, error=error)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/dashboard.html</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Dashboard</h1>
    <h2>Get Weather</h2>
    <form method="post">
        <input type="text" name="city" placeholder="Enter city"><br>
        <button type="submit">Fetch Weather</button>
    </form>
    {% if error %}
        <p>{{ error }}</p>
    {% elif weather %}
        <p>City: {{ weather.city }}, Temp: {{ weather.temp }}°C, {{ weather.description }}</p>
    {% endif %}
</body>
</html>`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 4️⃣: RESTful API with Caching</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`weather_parser = reqparse.RequestParser()
weather_parser.add_argument('city', type=str, required=True, help='City is required')

class WeatherAPI(Resource):
    @login_required
    @cache.cached(timeout=300)  # Cache for 5 minutes
    def get(self):
        args = weather_parser.parse_args()
        api_key = os.getenv('WEATHER_API_KEY')
        if not api_key:
            app.logger.error('WEATHER_API_KEY not set')
            abort(500, message="Server configuration error")
        url = f'http://api.openweathermap.org/data/2.5/weather?q={args['city']}&appid={api_key}&units=metric'
        try:
            response = requests.get(url, timeout=5)
            response.raise_for_status()
            data = response.json()
            app.logger.info(f'Weather API fetched for {args["city"]} by {current_user.username}')
            return {'city': data['name'], 'temp': data['main']['temp'], 'description': data['weather'][0]['description']}
        except requests.RequestException as e:
            app.logger.error(f'Weather API fetch failed: {e}')
            abort(502, message=f"Failed to fetch weather: {str(e)}")

api.add_resource(WeatherAPI, '/weather')`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 5️⃣: Error Handling</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.errorhandler(404)
def not_found(error):
    app.logger.warning(f'404 error: {request.path}')
    if request.path.startswith('/api/'):
        return jsonify({'error': 'Resource not found'}), 404
    return render_template('404.html'), 404

@app.errorhandler(500)
def server_error(error):
    app.logger.error(f'500 error: {error}')
    if request.path.startswith('/api/'):
        return jsonify({'error': 'Internal Server Error'}), 500
    return render_template('500.html'), 500

@app.errorhandler(502)
def bad_gateway(error):
    app.logger.error(f'502 error: {error}')
    return jsonify({'error': str(error)}), 502`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/404.html</code> and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/500.html</code>, use Day 10 templates.</p>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 6️⃣: Deployment Files</h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Procfile</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`web: gunicorn -w 4 app:app`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">
  In{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
    requirements.txt
  </code>{" "}
  (run{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
    {"pip freeze > requirements.txt"}
  </code>
  ):
</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`Flask
Flask-SQLAlchemy
Flask-Login
Flask-Bcrypt
Flask-RESTful
Flask-Talisman
Flask-Caching
requests
python-dotenv
gunicorn`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 7️⃣: Running and Deploying</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run()

# Deploy to Heroku
# heroku create your-app-name
# heroku config:set SECRET_KEY=your-key WEATHER_API_KEY=your-weather-key DATABASE_URL=your-db-url
# git push heroku main`}
                            </code>
                        </pre>
                    </div>

                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4 mb-3">
                        This exercise builds a <strong>production-ready Flask app</strong> with authentication, RESTful weather API, external API integration, error handling, logging, caching, and secure headers. Deploy it to Heroku or a similar platform, test locally with Gunicorn (<code className="bg-gray-800 text-white px-1 py-0.5 rounded">gunicorn -w 4 -b 0.0.0.0:8000 app:app</code>), and submit your GitHub link below 🚀
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
                        Deploying a Flask application involves preparing it for production, leveraging WSGI servers like Gunicorn, and utilizing cloud platforms for scalability. By implementing best practices—such as HTTPS, logging, caching, and secure configurations—you ensure your app is reliable, secure, and performant in a live environment. This process completes the journey from development to deployment, integrating skills from authentication, APIs, and error handling to deliver a robust Flask application to users worldwide.
                    </p>
                </section>

                {/* Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        📚 Resources for Further Study
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Learn more about Flask deployment with these resources:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <strong>Flask Deployment Docs:</strong> Official deployment guide.<br />
                            <a href="https://flask.palletsprojects.com/en/latest/deploying/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">flask.palletsprojects.com/deploying</a>
                        </li>
                        <li>
                            <strong>Heroku Flask Guide:</strong> Deploying to Heroku.<br />
                            <a href="https://devcenter.heroku.com/articles/getting-started-with-python" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">devcenter.heroku.com</a>
                        </li>
                        <li>
                            <strong>Real Python - Flask Deployment:</strong> Deployment tutorial.<br />
                            <a href="https://realpython.com/flask-deployment/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">realpython.com/flask-deployment</a>
                        </li>
                        <li>
                            <strong>YouTube - Corey Schafer:</strong> Flask deployment video.<br />
                            Search "Corey Schafer Flask Deployment" on YouTube.
                        </li>
                        <li>
                            <strong>Gunicorn Docs:</strong> WSGI server configuration.<br />
                            <a href="https://docs.gunicorn.org/en/stable/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">docs.gunicorn.org</a>
                        </li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                        These resources provide practical steps, advanced strategies, and tools for deploying Flask applications effectively in various environments.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Deyy11;