import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaEdit, FaCheckCircle } from 'react-icons/fa';
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
                    Python Project: Student Management System
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Project Introduction */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        📌 Project Overview
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Welcome to your capstone Python project! This <strong>Student Management System</strong> is a command-line application designed to test and reinforce your understanding of Python fundamentals. You’ll build a robust system to <strong>add, view, update, and delete student records</strong>, integrating key concepts like <strong>Object-Oriented Programming (OOP)</strong>, <strong>inheritance</strong>, <strong>regular expressions (regex)</strong>, and <strong>SQLite with SQLAlchemy</strong>. This project simulates a real-world application, preparing you for more advanced frameworks like Flask in future lessons.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        By the end, you’ll have a fully functional system that validates user input, manages a database, and showcases your Python skills. Follow the steps below to create this system, and feel free to extend it with additional features!
                    </p>
                </section>

                {/* Step 1: Setting Up */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        1️⃣ Step 1: Setting Up the Environment
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Before coding, set up your development environment to ensure all dependencies are ready:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                            <li><strong>Install SQLAlchemy:</strong> SQLAlchemy is our ORM for database management. Run:<br />
                                <code className="bg-gray-800 text-white p-2 rounded-md">pip install sqlalchemy</code>
                            </li>
                            <li><strong>Create a Project File:</strong> Start with a new Python file named <code className="bg-gray-800 text-white px-1 py-0.5 rounded">student_management.py</code>.</li>
                            <li><strong>Optional: Virtual Environment:</strong> Use a virtual environment for dependency isolation:<br />
                                <code className="bg-gray-800 text-white p-2 rounded-md">python -m venv venv</code><br />
                                <code className="bg-gray-800 text-white p-2 rounded-md">source venv/bin/activate</code> (Linux/Mac) or <code className="bg-gray-800 text-white p-2 rounded-md">venv\Scripts\activate</code> (Windows)
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Step 2: Defining the Database */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        2️⃣ Step 2: Creating the Database with SQLAlchemy
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Define the database structure using SQLAlchemy’s ORM. We’ll create a base `Student` class and set up SQLite as our database.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

# Initialize SQLAlchemy
Base = declarative_base()
engine = create_engine("sqlite:///students.db", echo=True)  # echo=True for debugging
Session = sessionmaker(bind=engine)
session = Session()

# Define the Student model
class Student(Base):
    __tablename__ = "students"
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)

# Create the database and tables
Base.metadata.create_all(engine)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            This code sets up a SQLite database file (`students.db`) and defines a `Student` table with `id`, `name`, and `email` columns. The `unique=True` constraint ensures no duplicate emails.
                        </p>
                    </div>
                </section>

                {/* Step 3: Implementing CRUD Operations */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        3️⃣ Step 3: Implementing CRUD Operations
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Implement <strong>Create, Read, Update, Delete (CRUD)</strong> operations to manage student records. These functions will interact with the database using SQLAlchemy’s session.
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h4 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">📝 Adding a Student</h4>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`def add_student(name, email):
    try:
        student = Student(name=name, email=email)
        session.add(student)
        session.commit()
        print(f"Student '{name}' added successfully!")
    except Exception as e:
        session.rollback()
        print(f"Error adding student: {e}")`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Includes error handling with a rollback to prevent database corruption if the email is not unique.
                        </p>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h4 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">📋 Viewing Students</h4>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`def view_students():
    students = session.query(Student).all()
    if students:
        for student in students:
            print(f"ID: {student.id}, Name: {student.name}, Email: {student.email}")
    else:
        print("No students found.")`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Displays all students or a message if the database is empty.
                        </p>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h4 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">✏️ Updating a Student</h4>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`def update_student(student_id, name=None, email=None):
    student = session.query(Student).filter_by(id=student_id).first()
    if student:
        if name:
            student.name = name
        if email:
            try:
                student.email = email
                session.commit()
                print(f"Student ID {student_id} updated successfully!")
            except Exception as e:
                session.rollback()
                print(f"Error updating email: {e}")
    else:
        print(f"Student ID {student_id} not found.")`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Updates name or email selectively with error handling for unique email conflicts.
                        </p>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h4 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">🗑️ Deleting a Student</h4>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`def delete_student(student_id):
    student = session.query(Student).filter_by(id=student_id).first()
    if student:
        session.delete(student)
        session.commit()
        print(f"Student ID {student_id} deleted successfully!")
    else:
        print(f"Student ID {student_id} not found.")`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Deletes a student by ID with a check for existence.
                        </p>
                    </div>
                </section>

                {/* Step 4: Implementing Object Inheritance */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        4️⃣ Step 4: Implementing Object Inheritance
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Extend the `Student` class with inheritance to create a specialized `GraduateStudent` class, adding fields like `thesis_topic`.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`class GraduateStudent(Student):
    __tablename__ = "graduate_students"
    id = Column(Integer, ForeignKey('students.id'), primary_key=True)
    thesis_topic = Column(String, nullable=False)

Base.metadata.create_all(engine)

# Adding a graduate student
grad_student = GraduateStudent(name="Eve", email="eve@example.com", thesis_topic="Machine Learning")
session.add(grad_student)
session.commit()`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Uses single table inheritance with a foreign key linking back to the `students` table.
                        </p>
                    </div>
                </section>

                {/* Step 5: Using Regex for Email Validation */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        5️⃣ Step 5: Using Regular Expressions for Email Validation
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Add regex to validate email formats before adding or updating students, ensuring data integrity.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`import re

def is_valid_email(email):
    pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    return re.match(pattern, email) is not None

# Enhanced add_student with validation
def add_student(name, email):
    if not is_valid_email(email):
        print("Invalid email format!")
        return
    try:
        student = Student(name=name, email=email)
        session.add(student)
        session.commit()
        print(f"Student '{name}' added successfully!")
    except Exception as e:
        session.rollback()
        print(f"Error adding student: {e}")`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            The regex ensures emails follow a standard format (e.g., `user@domain.com`).
                        </p>
                    </div>
                </section>

                {/* Step 6: Running the Project */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        6️⃣ Step 6: Running and Testing the Project
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Create a main function to run the system interactively:
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`def main():
    while True:
        print("\\nStudent Management System")
        print("1. Add Student")
        print("2. View Students")
        print("3. Update Student")
        print("4. Delete Student")
        print("5. Exit")
        choice = input("Enter choice (1-5): ")

        if choice == "1":
            name = input("Enter name: ")
            email = input("Enter email: ")
            add_student(name, email)
        elif choice == "2":
            view_students()
        elif choice == "3":
            id = int(input("Enter student ID: "))
            name = input("Enter new name (or press Enter to skip): ")
            email = input("Enter new email (or press Enter to skip): ")
            update_student(id, name if name else None, email if email else None)
        elif choice == "4":
            id = int(input("Enter student ID: "))
            delete_student(id)
        elif choice == "5":
            print("Exiting...")
            break
        else:
            print("Invalid choice!")

if __name__ == "__main__":
    main()`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Run <code className="bg-gray-800 text-white px-1 py-0.5 rounded">python student_management.py</code> and test all operations in the interactive shell.
                        </p>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4 mb-3">
                        Once you've completed the exercise, submit your GitHub link below:
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
                        🎯 Conclusion
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        This project provides a hands-on way to practice <strong>Python fundamentals</strong>, including <strong>OOP</strong>, <strong>inheritance</strong>, <strong>regex</strong>, and <strong>SQLAlchemy</strong>. By building this system, you’ve solidified your understanding of database interactions, input validation, and modular code design. This foundation prepares you for advanced topics like web development with Flask in upcoming lessons.
                    </p>
                </section>

                {/* Words of Encouragement */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6 text-center">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center justify-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        You're Nearly There!
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed italic">
                        Congratulations! You’ve mastered Python basics and fundamentals through this project—a strong foundation for your programming journey. You’re now ready to dive into <strong>Flask</strong>, a Python web framework, and build incredible applications. See you in the next lesson—keep up the momentum! 🚀
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Dey13;