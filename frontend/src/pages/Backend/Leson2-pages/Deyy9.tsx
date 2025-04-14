import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Deyy9: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();

    // State for file upload
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        assignmentId: 32,
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
                    External APIs & Data Handling
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction to External APIs & Data Handling */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        🔹 Introduction to External APIs & Data Handling
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Integrating <strong>external APIs</strong> into your Flask application enables you to fetch, process, and send data to third-party services, unlocking a wealth of real-world functionality—such as weather forecasts, social media feeds, payment gateways, or geolocation data. The Python <code className="bg-gray-800 text-white px-1 py-0.5 rounded">requests</code> library simplifies HTTP interactions, while Flask’s robust JSON handling capabilities allow you to transform and serve this data seamlessly. This synergy is critical for building dynamic, connected applications that leverage external resources effectively.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        This lesson explores fetching data from external APIs, sending data to them, handling JSON responses, integrating with databases and RESTful APIs (Days 4 and 8), and applying security best practices. You’ll learn to enrich your Flask apps with external data, enhancing user experiences and functionality.
                    </p>
                </section>

                {/* Fetching Data with Requests */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🚀 Fetching Data with Requests
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">requests</code> library is Python’s go-to tool for making HTTP requests, enabling GET calls to retrieve data from external APIs. Install it with:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`pip install requests`}
                            </code>
                        </pre>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Example fetching weather data from OpenWeatherMap:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Basic Weather API</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/weather/<city>')
def get_weather(city):
    api_key = 'your-api-key'  # Replace with your OpenWeatherMap API key
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
    response = requests.get(url)
    if response.status_code != 200:
        return jsonify({'error': 'Failed to fetch weather data'}), response.status_code
    data = response.json()
    return jsonify({
        'city': data['name'],
        'temp': data['main']['temp'],
        'description': data['weather'][0]['description']
    })

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
  A GET request to{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/weather/London</code>{" "}
  returns{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
    {`{"city": "London", "temp": 15.5, "description": "clear sky"}`}
  </code>
  .{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
    response.json()
  </code>{" "}
  parses the JSON response into a Python dictionary.
</p>

                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Fetching with Error Handling</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.route('/news')
def get_news():
    url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=your-api-key'
    try:
        response = requests.get(url, timeout=5)
        response.raise_for_status()  # Raises exception for 4xx/5xx errors
        articles = response.json()['articles'][:3]
        return jsonify([{'title': a['title'], 'source': a['source']['name']} for a in articles])
    except requests.exceptions.RequestException as e:
        return jsonify({'error': f'Failed to fetch news: {str(e)}'}), 500`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Fetches top news headlines with error handling using <code className="bg-gray-800 text-white px-1 py-0.5 rounded">raise_for_status()</code> and a timeout, returning simplified data or an error message.
                        </p>
                    </div>
                </section>

                {/* Sending Data to External APIs */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📦 Sending Data to External APIs
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Use <code className="bg-gray-800 text-white px-1 py-0.5 rounded">requests.post()</code> to send data to external APIs, such as creating resources or triggering actions. Example sending a todo to JSONPlaceholder:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Basic POST Example</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/add-todo', methods=['POST'])
def add_todo():
    todo = {
        'task': request.form['task'],
        'completed': False,
        'userId': 1
    }
    response = requests.post('https://jsonplaceholder.typicode.com/todos', json=todo)
    if response.status_code == 201:
        return jsonify({'message': 'Todo added', 'response': response.json()})
    return jsonify({'error': 'Failed to add todo'}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Submits a form to <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/add-todo</code>, sending the data as JSON to JSONPlaceholder and returning the response. Use <code className="bg-gray-800 text-white px-1 py-0.5 rounded">json=</code> for JSON payloads.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Sending with Headers</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.route('/send-notification', methods=['POST'])
def send_notification():
    api_key = 'your-pushover-api-key'
    user_key = 'your-pushover-user-key'
    message = {
        'token': api_key,
        'user': user_key,
        'message': request.form['message']
    }
    response = requests.post('https://api.pushover.net/1/messages.json', data=message)
    if response.status_code == 200:
        return jsonify({'message': 'Notification sent'})
    return jsonify({'error': 'Failed to send notification'}), response.status_code`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Sends a notification via Pushover API using form data and API keys, demonstrating authenticated POST requests with form-encoded data (<code className="bg-gray-800 text-white px-1 py-0.5 rounded">data=</code>).
                        </p>
                    </div>
                </section>

                {/* Handling JSON Data */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        ⚙️ Handling JSON Data
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Flask’s <code className="bg-gray-800 text-white px-1 py-0.5 rounded">jsonify</code> converts Python dictionaries to JSON responses, making it easy to process and serve data from external APIs. Combine it with <code className="bg-gray-800 text-white px-1 py-0.5 rounded">requests</code> for robust data handling:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Simplifying User Data</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.route('/users')
def get_users():
    response = requests.get('https://jsonplaceholder.typicode.com/users')
    if response.status_code != 200:
        return jsonify({'error': 'Failed to fetch users'}), response.status_code
    users = response.json()
    simplified_users = [{'id': user['id'], 'name': user['name']} for user in users]
    return jsonify(simplified_users)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Fetches user data from JSONPlaceholder, extracts key fields, and returns a simplified JSON list.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Caching with Database</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timedelta

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cache.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Cache(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    key = db.Column(db.String(50), unique=True, nullable=False)
    data = db.Column(db.JSON, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

@app.route('/cached-posts')
def get_cached_posts():
    cache_key = 'posts'
    cache_entry = Cache.query.filter_by(key=cache_key).first()
    if cache_entry and cache_entry.timestamp > datetime.utcnow() - timedelta(minutes=5):
        return jsonify(cache_entry.data)
    response = requests.get('https://jsonplaceholder.typicode.com/posts')
    posts = response.json()[:5]
    if cache_entry:
        cache_entry.data = posts
        cache_entry.timestamp = datetime.utcnow()
    else:
        cache_entry = Cache(key=cache_key, data=posts)
        db.session.add(cache_entry)
    db.session.commit()
    return jsonify(posts)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Caches posts in a database (Day 4) for 5 minutes, reducing external API calls and improving performance.
                        </p>
                    </div>
                </section>

                {/* Security & Best Practices */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🔒 Security & Best Practices
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        When interacting with external APIs, apply security and best practices to ensure reliability and safety:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2 mb-4">
                        <li><strong>API Keys:</strong> Store keys in environment variables (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">os.environ['API_KEY']</code>) instead of hardcoding.</li>
                        <li><strong>Error Handling:</strong> Use try-except and check status codes to handle failures gracefully.</li>
                        <li><strong>Timeouts:</strong> Set <code className="bg-gray-800 text-white px-1 py-0.5 rounded">timeout</code> in requests to avoid hanging (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">requests.get(url, timeout=5)</code>).</li>
                        <li><strong>Rate Limiting:</strong> Respect API limits, caching responses where possible.</li>
                        <li><strong>HTTPS:</strong> Ensure external APIs use HTTPS for secure data transfer.</li>
                    </ul>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`import os
@app.route('/secure-weather/<city>')
def secure_weather(city):
    api_key = os.environ.get('WEATHER_API_KEY')
    if not api_key:
        return jsonify({'error': 'API key missing'}), 500
    url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
    try:
        response = requests.get(url, timeout=5)
        response.raise_for_status()
        data = response.json()
        return jsonify({'city': data['name'], 'temp': data['main']['temp']})
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Uses environment variables, timeout, and error handling for a secure weather API call.
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
                        Build a Flask app that fetches and sends data to external APIs, integrating RESTful principles (Day 8) and handling JSON responses:
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 1️⃣: Setup</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask, render_template, request, jsonify
from flask_restful import Api, Resource, reqparse
import requests
import os

app = Flask(__name__)
api = Api(app, prefix='/api/v1')`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 2️⃣: Fetching Posts (Web Route)</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.route('/')
def index():
    response = requests.get('https://jsonplaceholder.typicode.com/posts')
    if response.status_code != 200:
        return render_template('index.html', error="Failed to fetch posts")
    posts = response.json()[:5]  # Limit to 5 posts
    return render_template('index.html', posts=posts)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/index.html</code>:</p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Posts</h1>
    {% if error %}
        <p>{{ error }}</p>
    {% else %}
        <ul>
        {% for post in posts %}
            <li>{{ post.title }}</li>
        {% endfor %}
        </ul>
    {% endif %}
    <h2>Add Post</h2>
    <form method="post" action="{{ url_for('add_post') }}">
        <input type="text" name="title" placeholder="Title"><br>
        <textarea name="body" placeholder="Body"></textarea><br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 3️⃣: Sending Data (Web Route)</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`@app.route('/add-post', methods=['POST'])
def add_post():
    post_data = {
        'title': request.form['title'],
        'body': request.form['body'],
        'userId': 1
    }
    try:
        response = requests.post('https://jsonplaceholder.typicode.com/posts', json=post_data, timeout=5)
        response.raise_for_status()
        return jsonify({'message': 'Post added', 'response': response.json()})
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 4️⃣: RESTful API Resource</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`post_parser = reqparse.RequestParser()
post_parser.add_argument('title', type=str, required=True, help='Title is required')
post_parser.add_argument('body', type=str, required=True, help='Body is required')

class PostResource(Resource):
    def get(self, post_id):
        response = requests.get(f'https://jsonplaceholder.typicode.com/posts/{post_id}')
        if response.status_code != 200:
            abort(response.status_code, message="Failed to fetch post")
        post = response.json()
        return {'id': post['id'], 'title': post['title'], 'body': post['body']}

    def post(self):
        args = post_parser.parse_args()
        post_data = {'title': args['title'], 'body': args['body'], 'userId': 1}
        response = requests.post('https://jsonplaceholder.typicode.com/posts', json=post_data)
        if response.status_code == 201:
            return response.json(), 201
        abort(response.status_code, message="Failed to create post")

api.add_resource(PostResource, '/post', '/post/<int:post_id>')`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 5️⃣: Running the App</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                    </div>

                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4 mb-3">
  This exercise builds a Flask app that <strong>fetches posts from JSONPlaceholder (web and API), sends new posts, and handles JSON data</strong>. 
  Test the API with curl (e.g.,{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
    {`curl -X POST http://localhost:5000/api/v1/post -H "Content-Type: application/json" -d '{"title": "Test", "body": "Test body"}'`}
  </code>
  ). Upload your project to GitHub and submit the link below 🚀
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
                        Working with external APIs in Flask using <code className="bg-gray-800 text-white px-1 py-0.5 rounded">requests</code> and handling JSON data unlocks dynamic, data-driven functionality. By fetching, sending, and processing data securely, you can integrate real-time information and third-party services into your app, enhancing user experiences. Combined with RESTful APIs (Day 8), databases (Day 4), and authentication (Day 6), these skills prepare you for building sophisticated, interconnected Flask applications.
                    </p>
                </section>

                {/* Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        📚 Resources for Further Study
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Explore external APIs and data handling further with these resources:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <strong>Requests Docs:</strong> Official guide to HTTP requests.<br />
                            <a href="https://requests.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">requests.readthedocs.io</a>
                        </li>
                        <li>
                            <strong>Flask JSON Docs:</strong> Handling JSON in Flask.<br />
                            <a href="https://flask.palletsprojects.com/en/latest/api/#flask.jsonify" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">flask.palletsprojects.com/jsonify</a>
                        </li>
                        <li>
                            <strong>Real Python - Flask APIs:</strong> Tutorial on external APIs.<br />
                            <a href="https://realpython.com/flask-connexion-rest-api/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">realpython.com/flask-apis</a>
                        </li>
                        <li>
                            <strong>YouTube - Tech With Tim:</strong> Video on Flask and APIs.<br />
                            Search "Tech With Tim Flask External APIs" on YouTube.
                        </li>
                        <li>
                            <strong>Postman Learning:</strong> Practical API testing and integration.<br />
                            <a href="https://learning.postman.com/docs/getting-started/introduction/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">learning.postman.com</a>
                        </li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                        These resources provide practical examples, tools, and advanced techniques for integrating external APIs into Flask applications effectively.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Deyy9;