import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Deyy8: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();

    // State for file upload
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        assignmentId: 31,
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
                    Flask RESTful APIs
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction to Flask RESTful APIs */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        🔹 Introduction to Flask RESTful APIs
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        <strong>RESTful APIs</strong> (Representational State Transfer) provide a standardized way to build scalable, stateless web services that enable clients—such as web applications, mobile apps, or IoT devices—to interact with your Flask application over HTTP. Using resources as the central abstraction, RESTful APIs leverage HTTP methods (GET, POST, PUT, DELETE) and status codes to perform CRUD operations (Create, Read, Update, Delete) on data, typically returning responses in JSON format. <strong>Flask-RESTful</strong>, an extension for Flask, simplifies this process by offering a structured, resource-based approach to API development, reducing boilerplate code and enhancing maintainability.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        RESTful APIs are essential for modern applications, enabling seamless communication between frontends and backends or integrating with third-party services. This lesson explores setting up Flask-RESTful, defining resources, handling requests, integrating with databases and authentication (Days 4 and 6), and applying best practices to create robust, secure APIs.
                    </p>
                </section>

                {/* Setting Up Flask-RESTful */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🚀 Setting Up Flask-RESTful
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        To start building RESTful APIs with Flask, install <strong>Flask-RESTful</strong> alongside Flask:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`pip install flask-restful`}
                            </code>
                        </pre>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Basic setup involves initializing an <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Api</code> instance and defining resources:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'message': 'Hello, World!'}

api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
  Sending a GET request to{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/</code> returns{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
    {`{"message": "Hello, World!"}`}
  </code>{" "}
  in JSON. The{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Api</code>{" "}
  instance manages resources, which are Python classes mapped to URL endpoints
  via{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
    add_resource
  </code>
  .
</p>

                    </div>
                </section>

                {/* Defining RESTful Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📦 Defining RESTful Resources
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        A <strong>resource</strong> is a class inheriting from <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Resource</code>, implementing HTTP methods like <code className="bg-gray-800 text-white px-1 py-0.5 rounded">get</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">post</code>, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">put</code>, and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">delete</code>. Each method corresponds to a RESTful action on the resource. Here’s an example managing a todo list:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Basic Todo API</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask
from flask_restful import Api, Resource, request

app = Flask(__name__)
api = Api(app)

todos = {}

class Todo(Resource):
    def get(self, todo_id):
        return {todo_id: todos.get(todo_id, 'Not found')}

    def post(self, todo_id):
        todos[todo_id] = request.json['task']
        return {todo_id: todos[todo_id]}, 201

    def delete(self, todo_id):
        if todo_id in todos:
            del todos[todo_id]
            return {'message': 'Todo deleted'}
        return {'message': 'Todo not found'}, 404

api.add_resource(Todo, '/todo/<string:todo_id>')

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
  - <code className="bg-gray-800 text-white px-1 py-0.5 rounded">GET /todo/1</code>: Retrieves todo ID 1.<br />
  - <code className="bg-gray-800 text-white px-1 py-0.5 rounded">POST /todo/1</code> with{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
    {`{"task": "Buy milk"}`}
  </code>: Creates a todo (201 status).<br />
  - <code className="bg-gray-800 text-white px-1 py-0.5 rounded">DELETE /todo/1</code>: Deletes the todo (404 if not found). JSON responses are automatic.
</p>

                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
  Resources can handle dynamic URL parameters (e.g.,{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
    {`<string:todo_id>`}
  </code>) and integrate with request data like JSON payloads.
</p>

                </section>

                {/* Handling Request Data */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        ⚙️ Handling Request Data
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Flask-RESTful integrates with Flask’s <code className="bg-gray-800 text-white px-1 py-0.5 rounded">request</code> object to access JSON payloads, query parameters, and form data. The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">reqparse</code> module provides robust parsing and validation for incoming data, ensuring inputs meet your API’s requirements:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Basic Parsing Example</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

todo_parser = reqparse.RequestParser()
todo_parser.add_argument('task', type=str, required=True, help='Task is required')
todo_parser.add_argument('priority', type=int, default=1)

class Todo(Resource):
    def post(self):
        args = todo_parser.parse_args()
        return {'task': args['task'], 'priority': args['priority']}, 201

api.add_resource(Todo, '/todo')

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
  A POST request to{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/todo</code> with{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
    {`{'task': 'Call mom', 'priority': 2}`}
  </code>{" "}
  returns the parsed data.{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">reqparse</code>{" "}
  enforces{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">task</code> as
  required and defaults{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">priority</code>{" "}
  to 1.
</p>

                    </div>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Query Parameters Example</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

filter_parser = reqparse.RequestParser()
filter_parser.add_argument('completed', type=bool, location='args')

class TaskList(Resource):
    def get(self):
        args = filter_parser.parse_args()
        if args['completed'] is not None:
            return {'tasks': [t for t in tasks if t['completed'] == args['completed']]}
        return {'tasks': tasks}

tasks = [{'id': 1, 'task': 'Buy milk', 'completed': False}, {'id': 2, 'task': 'Call mom', 'completed': True}]
api.add_resource(TaskList, '/tasks')

if __name__ == '__main__':
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            A GET request to <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/tasks?completed=true</code> filters tasks by completion status, using <code className="bg-gray-800 text-white px-1 py-0.5 rounded">location='args'</code> for query parameters.
                        </p>
                    </div>
                </section>

                {/* Integrating with Databases */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🔗 Integrating with Databases
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        RESTful APIs often interact with databases (Day 4) to persist data. Combine Flask-RESTful with Flask-SQLAlchemy for seamless CRUD operations:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource, reqparse, abort

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todos.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
api = Api(app)

class TodoModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(100), nullable=False)

todo_parser = reqparse.RequestParser()
todo_parser.add_argument('task', type=str, required=True, help='Task is required')

class Todo(Resource):
    def get(self, todo_id):
        todo = TodoModel.query.get_or_404(todo_id)
        return {'id': todo.id, 'task': todo.task}

    def put(self, todo_id):
        args = todo_parser.parse_args()
        todo = TodoModel.query.get(todo_id)
        if todo:
            todo.task = args['task']
        else:
            todo = TodoModel(id=todo_id, task=args['task'])
            db.session.add(todo)
        db.session.commit()
        return {'id': todo_id, 'task': args['task']}, 201 if not todo else 200

api.add_resource(Todo, '/todo/<int:todo_id>')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
  -{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
    GET /todo/1
  </code>
  : Fetches a todo by ID (404 if not found).<br />
  -{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
    PUT /todo/1
  </code>{" "}
  with{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
    {`{'task': 'Update task'}`}
  </code>
  : Creates or updates a todo, persisting it to the database.
</p>

                    </div>
                </section>

                {/* Securing RESTful APIs */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🔒 Securing RESTful APIs
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Integrate Flask-Login (Day 6) or token-based authentication (e.g., JWT) to secure your API. Here’s an example with Flask-Login:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask
from flask_restful import Api, Resource, abort
from flask_login import LoginManager, UserMixin, login_required, current_user
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
api = Api(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class ProtectedResource(Resource):
    @login_required
    def get(self):
        return {'message': f'Hello, {current_user.username}!'}

api.add_resource(ProtectedResource, '/protected')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Requires authentication for <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/protected</code>, returning a personalized message. Use JWT or API keys for stateless APIs.
                        </p>
                    </div>
                </section>

                {/* Best Practices for RESTful APIs */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📝 Best Practices for RESTful APIs
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Adhere to REST principles and practical guidelines for effective APIs:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2 mb-4">
                        <li><strong>Use HTTP Methods Correctly:</strong> GET (retrieve), POST (create), PUT (update), DELETE (remove), PATCH (partial update).</li>
                        <li><strong>Return Consistent JSON:</strong> Ensure responses are machine-readable and predictable.</li>
                        <li><strong>Appropriate Status Codes:</strong> 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Server Error).</li>
                        <li><strong>API Versioning:</strong> Use prefixes like <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/api/v1/</code> to manage updates.</li>
                        <li><strong>Input Validation:</strong> Use <code className="bg-gray-800 text-white px-1 py-0.5 rounded">reqparse</code> to enforce data requirements.</li>
                        <li><strong>Pagination:</strong> For large datasets, return paginated results (e.g., <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/tasks?page=2&limit=10</code>).</li>
                    </ul>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Versioned API Example</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`api = Api(app, prefix='/api/v1')

class Item(Resource):
    def get(self, item_id):
        if item_id in items:
            return items[item_id]
        abort(404, message="Item not found")

api.add_resource(Item, '/item/<string:item_id>')`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Uses <code className="bg-gray-800 text-white px-1 py-0.5 rounded">abort</code> for error handling and versioning with <code className="bg-gray-800 text-white px-1 py-0.5 rounded">/api/v1</code>.
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
                        Build a Flask-RESTful API for a task manager, integrating databases (Day 4) and authentication (Day 6):
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 1️⃣: Setup</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource, reqparse, abort
from flask_login import LoginManager, UserMixin, login_required, current_user

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
api = Api(app, prefix='/api/v1')
login_manager = LoginManager(app)
login_manager.login_view = 'login'`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 2️⃣: Models</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    completed = db.Column(db.Boolean, default=False)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 3️⃣: API Resources</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`task_parser = reqparse.RequestParser()
task_parser.add_argument('title', type=str, required=True, help='Title is required')

class TaskResource(Resource):
    @login_required
    def get(self, task_id):
        task = Task.query.filter_by(id=task_id, user_id=current_user.id).first_or_404()
        return {'id': task.id, 'title': task.title, 'completed': task.completed}

    @login_required
    def put(self, task_id):
        args = task_parser.parse_args()
        task = Task.query.filter_by(id=task_id, user_id=current_user.id).first()
        if task:
            task.title = args['title']
        else:
            task = Task(id=task_id, user_id=current_user.id, title=args['title'])
            db.session.add(task)
        db.session.commit()
        return {'id': task_id, 'title': args['title']}, 201 if not task else 200

class TaskListResource(Resource):
    @login_required
    def get(self):
        tasks = Task.query.filter_by(user_id=current_user.id).all()
        return {'tasks': [{'id': t.id, 'title': t.title, 'completed': t.completed} for t in tasks]}

    @login_required
    def post(self):
        args = task_parser.parse_args()
        task = Task(user_id=current_user.id, title=args['title'])
        db.session.add(task)
        db.session.commit()
        return {'id': task.id, 'title': task.title}, 201

api.add_resource(TaskResource, '/task/<int:task_id>')
api.add_resource(TaskListResource, '/tasks')`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 4️⃣: Authentication Routes</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto">
                            <code>
{`from flask_bcrypt import Bcrypt

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
    return render_template('login.html')

@app.route('/dashboard')
@login_required
def dashboard():
    return "Welcome to your dashboard!"`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2 mb-2">In <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/register.html</code> and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">templates/login.html</code>, use Day 6 templates.</p>
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
  This exercise builds a <strong>RESTful API for task management</strong> with database persistence and authentication.
  Test with curl or Postman (e.g.,{" "}
  <code className="bg-gray-800 text-white px-1 py-0.5 rounded">
    {`curl -X POST http://localhost:5000/api/v1/tasks -H "Content-Type: application/json" -d '{"title": "New task"}'`}
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
                        Flask-RESTful simplifies the creation of RESTful APIs, providing a resource-based structure, robust request handling, and seamless JSON integration. By combining it with databases, authentication, and best practices, you can build scalable, secure backends for modern applications. This knowledge connects your Flask skills—from routing and forms to blueprints and security—enabling you to serve data to diverse clients and prepare for advanced API features like rate limiting and versioning.
                    </p>
                </section>

                {/* Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        📚 Resources for Further Study
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Deepen your Flask-RESTful knowledge with these resources:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <strong>Flask-RESTful Docs:</strong> Official guide to API building.<br />
                            <a href="https://flask-restful.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">flask-restful.readthedocs.io</a>
                        </li>
                        <li>
                            <strong>Real Python - Flask REST API:</strong> Tutorial on RESTful APIs.<br />
                            <a href="https://realpython.com/flask-rest-api/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">realpython.com/flask-rest-api</a>
                        </li>
                        <li>
                            <strong>Miguel Grinberg - REST Tutorial:</strong> In-depth REST with Flask.<br />
                            <a href="https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">miguelgrinberg.com/rest-tutorial</a>
                        </li>
                        <li>
                            <strong>YouTube - Pretty Printed:</strong> Video on Flask-RESTful.<br />
                            Search "Pretty Printed Flask RESTful" on YouTube.
                        </li>
                        <li>
                            <strong>REST API Guidelines:</strong> Best practices for REST design.<br />
                            <a href="https://restfulapi.net/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">restfulapi.net</a>
                        </li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                        These resources offer practical examples, advanced techniques, and foundational REST principles for crafting robust Flask APIs.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Deyy8;