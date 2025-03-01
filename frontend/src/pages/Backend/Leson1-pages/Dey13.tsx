import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Dey13: React.FC = () => {
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
          Python Project
        </h1>

        {/* Project Introduction */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">📌 Project Overview</h2>
        <p className="text-gray-700 text-lg">
          This project will test your understanding of Python fundamentals by building a **Student Management System**.
          The project will involve creating a command-line application that allows users to **add, view, update, and delete students**,
          while also implementing **OOP, inheritance, regex, and SQLite with SQLAlchemy**.
        </p>

        {/* Step 1: Setting Up */}
        <h3 className="text-lg font-semibold text-gray-800 mt-4">1️⃣ Step 1: Setting Up the Environment</h3>
        <p className="text-gray-700">
          - Install necessary packages: <code>pip install sqlalchemy</code>
          - Create a new Python file: <code>student_management.py</code>
        </p>

        {/* Step 2: Defining the Database */}
        <h3 className="text-lg font-semibold text-gray-800 mt-4">2️⃣ Step 2: Creating the Database with SQLAlchemy</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()
engine = create_engine("sqlite:///students.db")
Session = sessionmaker(bind=engine)
session = Session()

class Student(Base):
    __tablename__ = "students"
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)

Base.metadata.create_all(engine)`}
          </code>
        </pre>

        {/* Step 3: Implementing CRUD Operations */}
        <h3 className="text-lg font-semibold text-gray-800 mt-4">3️⃣ Step 3: Implementing CRUD Operations</h3>
        <p className="text-gray-700">Now, implement functions to add, read, update, and delete students.</p>
        
        {/* Example: Adding Students */}
        <h4 className="text-md font-semibold text-gray-800 mt-2">📝 Adding a Student</h4>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`def add_student(name, email):
    student = Student(name=name, email=email)
    session.add(student)
    session.commit()
    print("Student added successfully!")`}
          </code>
        </pre>

        {/* Example: Viewing Students */}
        <h4 className="text-md font-semibold text-gray-800 mt-2">📋 Viewing Students</h4>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`def view_students():
    students = session.query(Student).all()
    for student in students:
        print(f"ID: {student.id}, Name: {student.name}, Email: {student.email}")`}
          </code>
        </pre>

        {/* Step 4: Implementing Object Inheritance */}
        <h3 className="text-lg font-semibold text-gray-800 mt-4">4️⃣ Step 4: Implementing Object Inheritance</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`class GraduateStudent(Student):
    __tablename__ = "graduate_students"
    id = Column(Integer, primary_key=True)
    thesis_topic = Column(String, nullable=False)`}
          </code>
        </pre>

        {/* Step 5: Using Regex for Email Validation */}
        <h3 className="text-lg font-semibold text-gray-800 mt-4">5️⃣ Step 5: Using Regular Expressions for Email Validation</h3>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`import re

def is_valid_email(email):
    pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    return re.match(pattern, email) is not None`}
          </code>
        </pre>

        {/* Step 6: Running the Project */}
        <h3 className="text-lg font-semibold text-gray-800 mt-4">6️⃣ Step 6: Running the Project</h3>
        <p className="text-gray-700">
          - Test your CRUD operations in Python's interactive shell.
          - Try adding students, viewing them, updating details, and deleting records.
        </p>

        <p className="text-gray-700 mt-3 mb-3">
            Once you've completed the exercise below, submit your github link below:
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


        {/* Conclusion */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">🎯 Conclusion</h2>
        <p className="text-gray-700">
          This project provides a hands-on way to practice **Python fundamentals**, **OOP**, **inheritance**, **regex**, and **SQLAlchemy**.
          Completing this will solidify your understanding of databases and Python programming concepts.
        </p>

        {/* Words of Encouragement */}
      <section className="mb-6 text-center">
        <h2 className="text-2xl font-semibold mb-2 mt-5">You're nearly there!</h2>
        <p className="italic">
          Congratulations..! You have learnt the python basics and fundamentals,, this is a good foundation. Now you are ready to learn Flask - A python framework and use it to build incredible programs. See you in the next lesson 🚀
        </p>
      </section>
      </section>
    </>
  );
};

export default Dey13;