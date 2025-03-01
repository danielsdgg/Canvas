import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Deyy8:React.FC = () => {
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
                Flask RESTful APIs
            </h1>

            {/* Introduction to Flask RESTful APIs */}
            <div className="text-gray-700 leading-relaxed">
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 Introduction to Flask RESTful APIs</h2>
                <p className="text-gray-700 text-lg mb-4">
                    RESTful APIs (Representational State Transfer) are a popular way to build web services that allow clients (e.g., web apps, mobile apps) to interact with your Flask application over HTTP. Flask-RESTful is an extension that simplifies creating RESTful APIs by providing tools to define resources, handle requests, and return structured responses like JSON. It’s ideal for building scalable, data-driven backends.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    This section covers setting up Flask-RESTful, defining resources, and handling common HTTP methods (GET, POST, PUT, DELETE) to create a robust API.
                </p>

                {/* Setting Up Flask-RESTful */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">🚀 Setting Up Flask-RESTful</h2>
                <p className="text-gray-700 text-lg mb-4">
                    To use Flask-RESTful, install it alongside Flask:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`pip install flask-restful`}
                    </code>
                </pre>
                <p className="text-gray-700 text-lg mb-4">
                    Basic setup involves creating an <code>Api</code> instance and adding resources:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
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
                <p className="text-gray-700 text-lg mb-4">
                    Visiting <code>/</code> returns a JSON response: <code>{'{'}"message": "Hello, World!"{'}'}</code>. Resources are the core of Flask-RESTful, mapped to URLs.
                </p>

                {/* Defining RESTful Resources */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📦 Defining RESTful Resources</h2>
                <p className="text-gray-700 text-lg mb-4">
                    A resource is a class继承了 <code>Resource</code> that implements HTTP methods (e.g., <code>get</code>, <code>post</code>). Each method handles a specific action on the resource. Example with a simple todo list:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`from flask import Flask
from flask_restful import Api, Resource

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
                <p className="text-gray-700 text-lg mb-4">
                    - <code>GET /todo/1</code>: Retrieves the todo with ID 1.<br />
                    - <code>POST /todo/1</code> with <code>{'{'}"task": "Buy milk"{'}'}</code>: Adds a todo.<br />
                    - <code>DELETE /todo/1</code>: Deletes the todo. Responses are JSON by default.
                </p>

                {/* Handling Request Data */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">⚙️ Handling Request Data</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Flask-RESTful integrates with <code>request</code> to handle JSON payloads, query parameters, and more. Use <code>reqparse</code> for parsing and validating input:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
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
                <p className="text-gray-700 text-lg mb-4">
                    Sending <code>{'{'}"task": "Call mom", "priority": 2{'}'}</code> to <code>/todo</code> returns the parsed data. <code>reqparse</code> ensures <code>task</code> is provided and sets a default for <code>priority</code>.
                </p>

                {/* Best Practices for RESTful APIs */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📝 Best Practices for RESTful APIs</h2>
                <p className="text-gray-700 text-lg mb-4">
                    When building RESTful APIs with Flask-RESTful, consider these guidelines:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li><strong>Use HTTP Methods:</strong> GET for retrieval, POST for creation, PUT for updates, DELETE for removal.</li>
                    <li><strong>Return JSON:</strong> Consistent, machine-readable responses.</li>
                    <li><strong>Status Codes:</strong> 200 (OK), 201 (Created), 404 (Not Found), etc.</li>
                    <li><strong>Versioning:</strong> Use <code>/api/v1/</code> prefixes for future-proofing.</li>
                    <li><strong>Validation:</strong> Leverage <code>reqparse</code> to enforce input requirements.</li>
                </ul>
                <p className="text-gray-700 text-lg mb-4">
                    Example with status codes and versioning:
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md mb-4 overflow-x-auto">
                    <code>
{`api = Api(app, prefix='/api/v1')

class Item(Resource):
    def get(self, item_id):
        if item_id in items:
            return items[item_id]
        return {'message': 'Item not found'}, 404

api.add_resource(Item, '/item/<string:item_id>')`}
                    </code>
                </pre>

                {/* Conclusion */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📌 Conclusion</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Flask-RESTful simplifies building RESTful APIs by providing a resource-based structure, seamless request handling, and JSON responses. It’s a powerful tool for creating backends that interact with frontends or other services, leveraging Flask’s flexibility while adhering to REST principles. This foundation sets the stage for integrating with databases, authentication, and more complex API designs.
                </p>

                {/* Resources for Further Study */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Resources for Further Study</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Deepen your Flask-RESTful knowledge with these resources:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                    <li>
                        <strong>Flask-RESTful Docs:</strong> Official guide to API building.<br />
                        <a href="https://flask-restful.readthedocs.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">flask-restful.readthedocs.io</a>
                    </li>
                    <li>
                        <strong>Real Python - Flask REST API:</strong> Tutorial on RESTful APIs.<br />
                        <a href="https://realpython.com/flask-rest-api/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">realpython.com/flask-rest-api</a>
                    </li>
                    <li>
                        <strong>Miguel Grinberg - REST Tutorial:</strong> In-depth REST with Flask.<br />
                        <a href="https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">miguelgrinberg.com/rest-tutorial</a>
                    </li>
                    <li>
                        <strong>YouTube - Pretty Printed:</strong> Video on Flask-RESTful.<br />
                        Search "Pretty Printed Flask RESTful" on YouTube.
                    </li>
                </ul>
                <p className="text-gray-700 text-lg">
                    These resources offer practical examples and advanced techniques for crafting RESTful APIs with Flask.
                </p>
            </div>
        </section>
        </>
    )
}

export default Deyy8