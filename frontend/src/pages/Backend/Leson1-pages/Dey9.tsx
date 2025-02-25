import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Dey9:React.FC = () => {
    const navigate = useNavigate();
  return (
    <>
    <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <FaArrowLeft className="mr-2" />
              Back
            </button>
    
            {/* Title */}
            <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
              Object Relational Mapping (ORM)
            </h1>
    
            {/* Introduction */}
            <p className="text-gray-700 text-lg leading-relaxed">
              Object Relational Mapping (ORM) is a technique that allows developers to interact with a database using Python objects instead of writing raw SQL queries. ORM acts as a bridge between the relational database and object-oriented programming, making it easier to work with database records as Python objects.
            </p>
    
            {/* Benefits of ORM */}
            <h2 className="text-xl font-semibold text-gray-800 mt-6">🌟 Benefits of ORM</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li>Eliminates the need to write complex SQL queries.</li>
              <li>Provides a more intuitive way to interact with databases.</li>
              <li>Enhances security by reducing SQL injection risks.</li>
              <li>Supports database migration and schema management.</li>
            </ul>
    
            {/* Mapping Database Records to Python Objects */}
            <h2 className="text-xl font-semibold text-gray-800 mt-6">🔗 Mapping Database Records to Python Objects</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              ORM allows you to map database tables to Python classes and rows to instances of those classes. Here’s an example of how we can define a model and interact with the database.
            </p>
    
            <h3 className="text-lg font-semibold text-gray-800 mt-4">1️⃣ Defining a Model</h3>
            <pre className="bg-gray-800 p-4 rounded-md text-white">
              <code>
{`class User:
    def __init__(self, id, name, email):
        self.id = id
        self.name = name
        self.email = email

    def __repr__(self):
        return f"User(id={self.id}, name='{self.name}', email='{self.email}')"`}
              </code>
            </pre>
    
            <h3 className="text-lg font-semibold text-gray-800 mt-4">2️⃣ Creating and Storing Data</h3>
            <pre className="bg-gray-800 p-4 rounded-md text-white">
              <code>
{`# Creating user objects
user1 = User(1, "John Doe", "john@example.com")
user2 = User(2, "Jane Doe", "jane@example.com")

# Storing users in a list (simulating a database)
database = [user1, user2]

# Retrieving users from the database
for user in database:
    print(user)`}
              </code>
            </pre>
    
            {/* Querying and Manipulating Data */}
            <h3 className="text-lg font-semibold text-gray-800 mt-4">3️⃣ Querying and Manipulating Data</h3>
            <pre className="bg-gray-800 p-4 rounded-md text-white">
              <code>
{`# Searching for a user by email
search_email = "john@example.com"
found_user = next((user for user in database if user.email == search_email), None)

if found_user:
    print("User found:", found_user)
else:
    print("User not found")`}
              </code>
            </pre>
    
            {/* Resources */}
            <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Resources</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li><a href="https://realpython.com/tutorials/databases/" className="text-blue-600 hover:underline">Real Python - Database Tutorials</a></li>
              <li><a href="https://www.tutorialspoint.com/python/python_database_access.htm" className="text-blue-600 hover:underline">TutorialsPoint - Python Database Access</a></li>
              <li><a href="https://docs.python.org/3/library/sqlite3.html" className="text-blue-600 hover:underline">Python Official SQLite3 Documentation</a></li>
            </ul>
        </section>
    </>
  )
}

export default Dey9
