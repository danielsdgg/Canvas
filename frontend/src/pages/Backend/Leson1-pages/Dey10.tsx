import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Dey10: React.FC = () => {
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
                    SQLAlchemy
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        🔹 Introduction to SQLAlchemy
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        SQLAlchemy is a powerful and popular SQL toolkit and Object-Relational Mapper (ORM) for Python. It provides a set of tools to interact with databases in an efficient and Pythonic way.
                    </p>
                </section>

                {/* Benefits & Uses */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🚀 Benefits & Uses of SQLAlchemy
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>✅ Simplifies database interactions using Python objects.</li>
                        <li>✅ Provides support for multiple databases (SQLite, MySQL, PostgreSQL, etc.).</li>
                        <li>✅ Supports advanced ORM features like relationships and query optimizations.</li>
                        <li>✅ Enables easy migration and schema management with Alembic.</li>
                        <li>✅ Helps prevent SQL injection by using parameterized queries.</li>
                    </ul>
                </section>

                {/* Installing SQLAlchemy */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📦 Installing SQLAlchemy
                    </h2>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
                                pip install sqlalchemy
                            </code>
                        </pre>
                    </div>
                </section>

                {/* Connecting to a Database */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🔗 Connecting to a Database
                    </h2>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
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
                    </div>
                </section>

                {/* Defining Models */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📌 Defining Models with SQLAlchemy ORM
                    </h2>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
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
        return f"User(id={self.id}, name='{self.name}', email='{self.email}')"`}
                            </code>
                        </pre>
                    </div>
                </section>

                {/* Creating Tables */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🛠️ Creating Tables
                    </h2>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`from sqlalchemy.orm import sessionmaker

engine = create_engine('sqlite:///example.db')
Base.metadata.create_all(engine)  # Create all tables`}
                            </code>
                        </pre>
                    </div>
                </section>

                {/* CRUD Operations */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        📝 CRUD Operations
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        CRUD stands for <strong>Create, Read, Update, and Delete</strong>. These are the basic operations performed on a database.
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">✅ Inserting Data</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`Session = sessionmaker(bind=engine)
session = Session()

new_user = User(name="John Doe", email="john@example.com")
session.add(new_user)
session.commit()`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">🔍 Reading Data</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`users = session.query(User).all()
for user in users:
    print(user)`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">✏️ Updating Data</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`user = session.query(User).filter_by(name="John Doe").first()
user.name = "Jane Doe"
session.commit()`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">🗑️ Deleting Data</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`session.delete(user)
session.commit()`}
                            </code>
                        </pre>
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
                        Try this hands-on project covering Object Inheritance, Regular Expressions, ORM, and SQLite with SQLAlchemy:
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 1️⃣: Setting Up SQLAlchemy</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
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
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 2️⃣: Implementing Object Inheritance</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
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
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 3️⃣: Using Regular Expressions (Regex)</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`import re

def validate_email(email):
    pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    return bool(re.match(pattern, email))

print(validate_email("test@example.com"))  # Output: True`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Step 4️⃣: Performing CRUD Operations</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
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
                    </div>

                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                        This exercise integrates <strong>Object Inheritance, Regular Expressions, ORM, and SQLite using SQLAlchemy</strong> to help reinforce your understanding. Try modifying the script to add more fields and validation rules! Remember to paste your GitHub URL below 🚀
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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

                {/* Conclusions */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        📌 Conclusions
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        In this section, we explored SQLAlchemy and its importance in database management. We covered:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>The fundamentals of SQLAlchemy and why it's widely used.</li>
                        <li>How to define models and interact with databases using ORM.</li>
                        <li>Benefits of using SQLAlchemy over raw SQL.</li>
                        <li>Practical exercises covering Object Inheritance, Regular Expressions, and SQLite.</li>
                    </ul>
                </section>

                {/* Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        📚 Resources
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <a href="https://docs.sqlalchemy.org/en/20/" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                SQLAlchemy Official Documentation
                            </a>
                        </li>
                        <li>
                            <a href="https://www.sqlite.org/docs.html" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                SQLite Documentation
                            </a>
                        </li>
                        <li>
                            <a href="https://regexr.com/" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                Regular Expressions Testing Tool
                            </a>
                        </li>
                        <li>
                            <a href="https://realpython.com/tutorials/sqlalchemy/" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                Real Python SQLAlchemy Guide
                            </a>
                        </li>
                        <li>
                            <a href="https://www.fullstackpython.com/sqlalchemy.html" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                Full Stack Python SQLAlchemy Overview
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default Dey10;