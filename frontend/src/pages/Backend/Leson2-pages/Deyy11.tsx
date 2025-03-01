import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Deyy11:React.FC = () => {
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
                Deployment
            </h1>

            {/* Introduction to Deployment and Best Practices */}
            <div className="text-gray-700 leading-relaxed">
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 Introduction to Deployment and Best Practices</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Deploying a Flask application moves it from development to a live environment where users can access it. This process involves configuring a production server, securing the app, and optimizing performance. Best practices ensure reliability, security, and scalability, making your app ready for real-world use.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    This section covers deploying Flask apps, using WSGI servers, and key best practices for production.
                </p>

                {/* Preparing for Deployment */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🚀 Preparing for Deployment</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Before deployment, adjust your Flask app for production:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li><strong>Disable Debug Mode:</strong> Set <code>debug=False</code> to prevent exposing sensitive info.</li>
                    <li><strong>Secure Configuration:</strong> Use environment variables for secrets (e.g., <code>SECRET_KEY</code>, database URLs).</li>
                    <li><strong>Static Files:</strong> Serve static files via a web server like Nginx, not Flask.</li>
                </ul>
                <p className="text-gray-700 text-lg mb-4">Example with environment variables:</p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask import Flask
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'default-secret')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///app.db')

if __name__ == '__main__':
    app.run()`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Set variables in your environment or a <code>.env</code> file with <code>python-dotenv</code>.
                </p>

                {/* Using WSGI Servers */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📦 Using WSGI Servers</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Flask’s built-in server isn’t suitable for production. Use a WSGI (Web Server Gateway Interface) server like Gunicorn or uWSGI. Install Gunicorn:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`pip install gunicorn`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Run your app with Gunicorn:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`gunicorn -w 4 -b 0.0.0.0:8000 app:app`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    <code>-w 4</code> uses 4 workers; <code>-b 0.0.0.0:8000</code> binds to port 8000. Pair it with Nginx as a reverse proxy for static files and load balancing.
                </p>

                {/* Deploying to a Platform */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">⚙️ Deploying to a Platform</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Platforms like Heroku, AWS, or Render simplify deployment. Example for Heroku:
                </p>
                <ol className="list-decimal pl-6 text-lg text-gray-700 mb-4">
                    <li>Install Heroku CLI and create a <code>Procfile</code>: <code>web: gunicorn app:app</code></li>
                    <li>Add <code>requirements.txt</code> with dependencies.</li>
                    <li>Run: <code>heroku create</code>, <code>git push heroku main</code>.</li>
                </ol>
                <p className="text-gray-700 text-lg mb-4">
                    Configure environment variables in the platform’s dashboard (e.g., <code>heroku config:set SECRET_KEY=your-key</code>).
                </p>

                {/* Best Practices */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📝 Best Practices</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Follow these practices for a production-ready Flask app:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li><strong>HTTPS:</strong> Use SSL/TLS (e.g., via Let’s Encrypt) for security.</li>
                    <li><strong>Logging:</strong> Log errors and key events to a file or service (e.g., Sentry).</li>
                    <li><strong>Database Management:</strong> Apply migrations with Flask-Migrate.</li>
                    <li><strong>Performance:</strong> Use caching (e.g., Flask-Caching) and optimize queries.</li>
                    <li><strong>Security:</strong> Enable CSRF protection, validate inputs, and use secure headers.</li>
                </ul>
                <p className="text-gray-700 text-lg mb-4">
                    Example enabling secure headers with Flask-Talisman:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask import Flask
from flask_talisman import Talisman

app = Flask(__name__)
Talisman(app, force_https=True)

@app.route('/')
def home():
    return "Secure Home Page"

if __name__ == '__main__':
    app.run()`}
                    </code>
                </pre>

                {/* Conclusion */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📌 Conclusion</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Deploying a Flask app requires careful preparation, a production-grade server, and adherence to best practices. By securing your app, optimizing performance, and using reliable platforms, you ensure it’s robust, scalable, and user-friendly in a live environment. These steps complete the journey from development to deployment.
                </p>

                {/* Resources for Further Study */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Resources for Further Study</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Learn more about Flask deployment with these resources:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li>
                        <strong>Flask Deployment Docs:</strong> Official deployment guide.<br />
                        <a href="https://flask.palletsprojects.com/en/latest/deploying/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">flask.palletsprojects.com/deploying</a>
                    </li>
                    <li>
                        <strong>Heroku Flask Guide:</strong> Deploying to Heroku.<br />
                        <a href="https://devcenter.heroku.com/articles/getting-started-with-python" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">devcenter.heroku.com</a>
                    </li>
                    <li>
                        <strong>Real Python - Flask Deployment:</strong> Deployment tutorial.<br />
                        <a href="https://realpython.com/flask-deployment/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">realpython.com/flask-deployment</a>
                    </li>
                    <li>
                        <strong>YouTube - Corey Schafer:</strong> Flask deployment video.<br />
                        Search "Corey Schafer Flask Deployment" on YouTube.
                    </li>
                </ul>
                <p className="text-gray-700 text-lg">
                    These resources offer practical steps and strategies for deploying Flask apps effectively.
                </p>
            </div>
        </section>
        </>
    )
}

export default Deyy11