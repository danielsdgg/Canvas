import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Dey10:React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();
    
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
        // console.log("User Token:", userToken);
      
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
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        {/* Title */}
        <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
          SQLAlchemy
        </h1>

        {/* Introduction to SQLAlchemy */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">🔹 Introduction to SQLAlchemy</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          SQLAlchemy is a powerful and popular SQL toolkit and Object-Relational Mapper (ORM) for Python.
          It provides a set of tools to interact with databases in an efficient and Pythonic way.
        </p>

        {/* Benefits & Uses of SQLAlchemy */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">🚀 Benefits & Uses of SQLAlchemy</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>✅ Simplifies database interactions using Python objects.</li>
          <li>✅ Provides support for multiple databases (SQLite, MySQL, PostgreSQL, etc.).</li>
          <li>✅ Supports advanced ORM features like relationships and query optimizations.</li>
          <li>✅ Enables easy migration and schema management with Alembic.</li>
          <li>✅ Helps prevent SQL injection by using parameterized queries.</li>
        </ul>

        {/* Installing SQLAlchemy */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">📦 Installing SQLAlchemy</h2>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
            pip install sqlalchemy
          </code>
        </pre>

        {/* Connecting to a Database */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">🔗 Connecting to a Database</h2>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`from sqlalchemy import create_engine

# Create an SQLite database connection
engine = create_engine('sqlite:///example.db')

# Establish the connection
connection = engine.connect()
print("Database connected successfully!")

# Close the connection
connection.close()`}
          </code>
        </pre>

        {/* Defining Models with SQLAlchemy ORM */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">📌 Defining Models with ORM</h2>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)

    def __repr__(self):
        return f"User(id={self.id}, name='{self.name}', email='{self.email}')"
`}
          </code>
        </pre>

        {/* Creating Tables */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">🛠️ Creating Tables</h2>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`from sqlalchemy.orm import sessionmaker

engine = create_engine('sqlite:///example.db')
Base.metadata.create_all(engine)  # Create all tables`}
          </code>
        </pre>

        {/* CRUD Operations */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">📝 CRUD Operations</h2>
        <p className="text-gray-700 text-lg">
          CRUD stands for <strong>Create, Read, Update, and Delete</strong>. These are the basic operations performed on a database.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mt-4">✅ Inserting Data</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`Session = sessionmaker(bind=engine)
session = Session()

new_user = User(name="John Doe", email="john@example.com")
session.add(new_user)
session.commit()`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold text-gray-800 mt-4">🔍 Reading Data</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`users = session.query(User).all()
for user in users:
    print(user)`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold text-gray-800 mt-4">✏️ Updating Data</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`user = session.query(User).filter_by(name="John Doe").first()
user.name = "Jane Doe"
session.commit()`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold text-gray-800 mt-4">🗑️ Deleting Data</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`session.delete(user)
session.commit()`}
          </code>
        </pre>

        {/* Practical Exercise Section */}
        <h2 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md mt-3">🎯 Practical Exercise</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Try this hands-on project covering Object Inheritance, Regular Expressions, ORM, and SQLite with SQLAlchemy:
        </p>
        
        <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 1️⃣: Setting Up SQLAlchemy</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

# Create database engine
engine = create_engine("sqlite:///example.db")
Base = declarative_base()
Session = sessionmaker(bind=engine)
session = Session()`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 2️⃣: Implementing Object Inheritance</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`class Person(Base):
    __tablename__ = 'persons'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

class Employee(Person):  # Inheritance from Person
    __tablename__ = 'employees'
    employee_id = Column(String, unique=True, nullable=False)

Base.metadata.create_all(engine)`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 3️⃣: Using Regular Expressions (Regex)</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`import re

def validate_email(email):
    pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    return bool(re.match(pattern, email))

print(validate_email("test@example.com"))  # Output: True`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold text-gray-800 mt-4">Step 4️⃣: Performing CRUD Operations</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`# Create a new employee
new_employee = Employee(name="John Doe", employee_id="EMP123")
session.add(new_employee)
session.commit()

# Read employees
employees = session.query(Employee).all()
for emp in employees:
    print(emp.name, emp.employee_id)

# Update an employee
employee = session.query(Employee).filter_by(employee_id="EMP123").first()
if employee:
    employee.name = "Jane Doe"
    session.commit()

# Delete an employee
session.delete(employee)
session.commit()`}
          </code>
        </pre>

        <p className="text-gray-700 text-lg mt-6 mb-3">
          This exercise integrates **Object Inheritance, Regular Expressions, ORM, and SQLite using SQLAlchemy**
          to help reinforce your understanding. Try modifying the script to add more fields and validation rules! Remember to paste your github url below 🚀
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                        name = 'fileUrl'
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={6}
                        placeholder="Paste your github link"
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

        {/* Conclusions */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">📌 Conclusions</h2>
                <p className="text-gray-700 text-lg">
                    In this section, we explored SQLAlchemy and its importance in database management. We covered:
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-700">
                    <li>The fundamentals of SQLAlchemy and why it's widely used.</li>
                    <li>How to define models and interact with databases using ORM.</li>
                    <li>Benefits of using SQLAlchemy over raw SQL.</li>
                    <li>Practical exercises covering Object Inheritance, Regular Expressions, and SQLite.</li>
                </ul>

                {/* Resources */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Resources</h2>
                <ul className="list-disc pl-6 text-lg text-gray-700">
                    <li><a href="https://docs.sqlalchemy.org/en/20/" className="text-blue-600 hover:underline">SQLAlchemy Official Documentation</a></li>
                    <li><a href="https://www.sqlite.org/docs.html" className="text-blue-600 hover:underline">SQLite Documentation</a></li>
                    <li><a href="https://regexr.com/" className="text-blue-600 hover:underline">Regular Expressions Testing Tool</a></li>
                    <li><a href="https://realpython.com/tutorials/sqlalchemy/" className="text-blue-600 hover:underline">Real Python SQLAlchemy Guide</a></li>
                    <li><a href="https://www.fullstackpython.com/sqlalchemy.html" className="text-blue-600 hover:underline">Full Stack Python SQLAlchemy Overview</a></li>
                </ul>

                

      </section>
    </>
  )
}

export default Dey10;
