import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Deyy1:React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth(); // Added for form submission
    
    // State for file upload
    const [submitted, setSubmitted] = useState(false);
    
    const [form, setForm] = useState({
        assignmentId: 1,
        userId: userData?.userDetails.id, // Ensuring a valid initial state
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
                Introduction to Flask
            </h1>

            {/* Introduction to Flask */}
            <div className="text-gray-700 leading-relaxed">
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 What is Flask?</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Flask is a lightweight and flexible web framework for Python, designed to make building web applications simple and efficient. Introduced in 2010 by Armin Ronacher, Flask is classified as a micro-framework because it provides the essential tools to get started without imposing a rigid structure—unlike larger frameworks like Django. It’s built on two core libraries: Werkzeug (for handling HTTP requests and routing) and Jinja2 (for templating). Flask’s simplicity and extensibility make it a favorite among developers who want control over their application’s architecture.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    With Flask, you can start small with a simple "Hello World" app and scale up to complex applications by adding extensions for databases, authentication, form handling, and more. Its philosophy of "simplicity with the option to grow" appeals to beginners and experienced developers alike.
                </p>

                {/* Uses of Flask */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🚀 Uses of Flask</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Flask is versatile and widely used across various domains due to its lightweight nature and Python integration. Here are some common use cases:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li><strong>Web Applications:</strong> Build dynamic websites, from small personal blogs to large-scale business platforms.</li>
                    <li><strong>APIs:</strong> Create RESTful APIs to serve data to front-end applications (like this React app!) or mobile clients.</li>
                    <li><strong>Prototyping:</strong> Quickly develop proofs-of-concept or MVPs (Minimum Viable Products) due to its simplicity.</li>
                    <li><strong>Machine Learning Deployment:</strong> Serve machine learning models as web services, leveraging Python’s rich ML ecosystem.</li>
                    <li><strong>Microservices:</strong> Build independent, lightweight services in a microservices architecture.</li>
                </ul>
                <p className="text-gray-700 text-lg mb-4">
                    Companies like Netflix, Reddit, and Airbnb have used Flask in parts of their infrastructure, showcasing its ability to handle real-world demands when paired with the right tools.
                </p>

                {/* Installation */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📦 Installing Flask</h2>
                <p className="text-gray-700 text-lg mb-4">
                    To start using Flask, you’ll need Python installed on your system (version 3.6 or higher is recommended). Flask is distributed via PyPI (Python Package Index) and can be installed using pip, Python’s package manager. Here’s how to set it up:
                </p>
                <ol className="list-decimal pl-6 text-lg text-gray-700 mb-4">
                    <li><strong>Install Python:</strong> Download and install Python from python.org if it’s not already on your system.</li>
                    <li><strong>Open a Terminal:</strong> Use Command Prompt (Windows), Terminal (macOS/Linux), or an IDE like VS Code.</li>
                    <li><strong>Install Flask:</strong> Run the following command:<br />
                        <code className="bg-gray-800 text-white p-1 rounded">pip install flask</code>
                    </li>
                    <li><strong>Verify Installation:</strong> Check the installed version by running:<br />
                        <code className="bg-gray-800 text-white p-1 rounded">python -c "import flask; print(flask.__version__)"</code>
                    </li>
                </ol>
                <p className="text-gray-700 text-lg mb-4">
                    It’s a good practice to use a virtual environment to isolate your project’s dependencies. Create one with:<br />
                    <code className="bg-gray-800 text-white p-1 rounded">python -m venv venv</code><br /> <br/>
                    Activate it: <code className="bg-gray-800 text-white p-1 rounded">venv\Scripts\activate</code> (Windows) or <code className="bg-gray-800 text-white p-1 rounded">source venv/bin/activate</code> (macOS/Linux).
                </p>

                {/* Setup */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">⚙️ Setting Up Flask</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Once installed, Flask doesn’t require complex configuration to get started. You simply write a Python script, import Flask, and define routes (URL endpoints) for your application. Flask applications are typically structured with:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li>A main Python file (e.g., <code>app.py</code>) where the Flask app is initialized.</li>
                    <li>A <code>templates</code> folder for HTML files (used with Jinja2).</li>
                    <li>A <code>static</code> folder for CSS, JavaScript, and images.</li>
                </ul>
                <p className="text-gray-700 text-lg mb-4">
                    This minimal structure allows you to focus on coding rather than configuration, making Flask ideal for learning and rapid development.
                </p>

                {/* Creating Your First Flask App */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📝 Creating Your First Flask App</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Let’s walk through building a basic Flask application. Create a file called <code>app.py</code> and add the following code:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, Flask!'

if __name__ == '__main__':
    app.run(debug=True)`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">Here’s what each part does:</p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li><strong><code>from flask import Flask</code>:</strong> Imports the Flask class.</li>
                    <li><strong><code>app = Flask(__name__)</code>:</strong> Creates a Flask application instance. <code>__name__</code> tells Flask where to look for templates and static files.</li>
                    <li><strong><code>@app.route('/')</code>:</strong> Defines a route (URL endpoint). The home page (<code>/</code>) will trigger the <code>home()</code> function.</li>
                    <li><strong><code>return 'Hello, Flask!'</code>:</strong> The response sent to the browser.</li>
                    <li><strong><code>app.run(debug=True)</code>:</strong> Starts the development server with debugging enabled (auto-reloads on code changes).</li>
                </ul>
                <p className="text-gray-700 text-lg mb-4">
                    To run the app, open your terminal, navigate to the folder containing <code>app.py</code>, and type:<br />
                    <code className="bg-gray-800 text-white p-1 rounded">python app.py</code><br />
                    Visit <code>http://127.0.0.1:5000</code> in your browser, and you’ll see "Hello, Flask!" displayed!
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    This is just the beginning—Flask lets you expand this app with templates, forms, databases, and more as you learn.
                </p>

                {/* Practical Exercise Section */}
                <h2 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md mt-6">🎯 Practical Exercise</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Build a small Flask app with multiple routes and basic templating. This exercise covers routing and templating with Jinja2:
                </p>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 1️⃣: Setting Up Flask</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`from flask import Flask, render_template

app = Flask(__name__)`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 2️⃣: Adding Routes</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return "This is the About page!"`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 3️⃣: Creating a Template</h3>
                <p className="text-gray-700 text-lg mb-4">Create a file <code>templates/index.html</code>:</p>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`<!DOCTYPE html>
<html>
<body>
    <h1>Welcome to Flask</h1>
    <p>This is a simple Flask app.</p>
</body>
</html>`}
                    </code>
                </pre>

                <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 4️⃣: Running the App</h3>
                <pre className="bg-gray-800 p-4 rounded-md text-white">
                    <code>
{`if __name__ == '__main__':
    app.run(debug=True)`}
                    </code>
                </pre>

                <p className="text-gray-700 text-lg mt-6 mb-3">
                    This exercise introduces **Flask routing and templating**. Upload your project to GitHub and submit the link below 🚀
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
                    Flask offers an accessible entry point into web development with Python, balancing simplicity with powerful capabilities. Its lightweight design empowers you to build applications tailored to your needs, whether you’re creating a small project or laying the groundwork for something larger. By mastering the basics—installation, setup, and your first app—you’ve taken the first step toward harnessing Flask’s potential. As you progress, you’ll discover its flexibility through extensions and integrations, making it a valuable tool in your developer toolkit. Keep experimenting, building, and exploring—Flask grows with you!
                </p>

                {/* Resources for Further Study */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Resources for Further Study</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Ready to dive deeper into Flask? Here are some excellent resources to expand your knowledge and skills:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li>
                        <strong>Official Flask Documentation:</strong> The definitive guide, covering everything from basics to advanced topics.<br />
                        <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">flask.palletsprojects.com</a>
                    </li>
                    <li>
                        <strong>"Flask Web Development" by Miguel Grinberg:</strong> A highly recommended book with practical examples and projects.<br />
                        Available on Amazon or O’Reilly’s website.
                    </li>
                    <li>
                        <strong>Real Python Flask Tutorials:</strong> Step-by-step articles and videos for beginners and intermediate learners.<br />
                        <a href="https://realpython.com/tutorials/flask/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">realpython.com/tutorials/flask/</a>
                    </li>
                    <li>
                        <strong>Full Stack Python - Flask:</strong> A comprehensive resource explaining Flask in the context of full-stack development.<br />
                        <a href="https://www.fullstackpython.com/flask.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">fullstackpython.com/flask.html</a>
                    </li>
                    <li>
                        <strong>YouTube - Corey Schafer Flask Series:</strong> A free video tutorial series breaking down Flask concepts.<br />
                        Search "Corey Schafer Flask" on YouTube.
                    </li>
                </ul>
                <p className="text-gray-700 text-lg">
                    These resources offer a mix of written guides, hands-on projects, and video content to suit different learning styles. Explore them to solidify your Flask foundation and tackle more ambitious projects!
                </p>
            </div>
        </section>
        </>
    )
}

export default Deyy1