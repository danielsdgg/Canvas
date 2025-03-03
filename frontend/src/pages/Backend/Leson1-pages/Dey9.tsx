import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from 'react-icons/fa';

const Dey9: React.FC = () => {
    const navigate = useNavigate();

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
                    Object Relational Mapping (ORM) in Python
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        Introduction to ORM
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Object Relational Mapping (ORM) is a powerful technique in Python that bridges the gap between <strong>object-oriented programming</strong> and <strong>relational databases</strong>. It allows developers to interact with a database using Python objects instead of writing raw SQL queries, making database operations more intuitive, maintainable, and aligned with Python’s object-oriented paradigm.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        In traditional database interactions, developers write SQL queries to perform CRUD operations (Create, Read, Update, Delete). However, ORM abstracts this process by mapping database tables to Python classes and rows to instances of those classes. Popular Python ORMs like <strong>SQLAlchemy</strong>, <strong>Django ORM</strong>, and <strong>Peewee</strong> provide robust tools to manage database schemas, relationships, and queries seamlessly. This lesson explores ORM concepts, benefits, practical usage, and examples to help you master database interactions in Python.
                    </p>
                </section>

                {/* Benefits of ORM */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🌟 Benefits of ORM
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Using an ORM offers several advantages that streamline development and enhance code quality:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li><strong>Eliminates Complex SQL:</strong> Developers can work with Python objects instead of crafting intricate SQL queries.</li>
                        <li><strong>Intuitive Interaction:</strong> Database records are represented as objects, aligning with OOP principles.</li>
                        <li><strong>Enhanced Security:</strong> ORMs reduce SQL injection risks by using parameterized queries internally.</li>
                        <li><strong>Database Migration:</strong> Tools like SQLAlchemy’s Alembic or Django’s migrations simplify schema changes.</li>
                        <li><strong>Cross-Database Compatibility:</strong> Many ORMs support multiple databases (SQLite, PostgreSQL, MySQL) with minimal code changes.</li>
                        <li><strong>Productivity Boost:</strong> Faster development cycles due to reduced boilerplate code and simplified operations.</li>
                    </ul>
                </section>

                {/* Mapping Database Records */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🔗 Mapping Database Records to Python Objects
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        ORM allows you to map database tables to Python classes and rows to instances of those classes. This mapping transforms relational data into an object-oriented structure, making it easier to manipulate. Below are examples using a simple approach and then with SQLAlchemy, a popular Python ORM.
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">1️⃣ Basic Mapping (Without ORM)</h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">
                            A simple Python class can simulate ORM behavior by representing database records as objects.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`class User:
    def __init__(self, id, name, email):
        self.id = id
        self.name = name
        self.email = email

    def __repr__(self):
        return f"User(id={self.id}, name='{self.name}', email='{self.email}')"

# Simulating a database with a list
user1 = User(1, "John Doe", "john@example.com")
user2 = User(2, "Jane Doe", "jane@example.com")
database = [user1, user2]

# Retrieving data
for user in database:
    print(user)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Output: <br />
                            <code className="bg-gray-800 text-white p-2 rounded-md">User(id=1, name='John Doe', email='john@example.com')<br />User(id=2, name='Jane Doe', email='jane@example.com')</code>
                        </p>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">2️⃣ Using SQLAlchemy (Real ORM)</h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">
                            SQLAlchemy provides a full-fledged ORM solution. Here’s how to define a model, create a table, and interact with it.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Create an engine (SQLite in-memory database for this example)
engine = create_engine('sqlite:///:memory:', echo=True)
Base = declarative_base()

# Define a User model
class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True)

    def __repr__(self):
        return f"User(id={self.id}, name='{self.name}', email='{self.email}')"

# Create the table in the database
Base.metadata.create_all(engine)

# Create a session to interact with the database
Session = sessionmaker(bind=engine)
session = Session()

# Adding data
user1 = User(name="John Doe", email="john@example.com")
user2 = User(name="Jane Doe", email="jane@example.com")
session.add_all([user1, user2])
session.commit()

# Querying data
users = session.query(User).all()
for user in users:
    print(user)`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Output: <br />
                            <code className="bg-gray-800 text-white p-2 rounded-md">User(id=1, name='John Doe', email='john@example.com')<br />User(id=2, name='Jane Doe', email='jane@example.com')</code>
                        </p>
                    </div>
                </section>

                {/* Querying and Manipulating Data */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🔍 Querying and Manipulating Data with ORM
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        ORMs simplify querying and manipulating data using Python syntax instead of SQL. Below are examples of common operations with SQLAlchemy.
                    </p>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">1️⃣ Querying Data</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`# Filtering by email
found_user = session.query(User).filter_by(email="john@example.com").first()
print("Found user:", found_user)

# Filtering with conditions
users_named_john = session.query(User).filter(User.name.like("John%")).all()
print("Users named John:", users_named_john)`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">2️⃣ Updating Data</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`# Update a user's name
user_to_update = session.query(User).filter_by(email="john@example.com").first()
if user_to_update:
    user_to_update.name = "John Smith"
    session.commit()
    print("Updated user:", user_to_update)`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">3️⃣ Deleting Data</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`# Delete a user
user_to_delete = session.query(User).filter_by(email="jane@example.com").first()
if user_to_delete:
    session.delete(user_to_delete)
    session.commit()
    print("User deleted")`}
                            </code>
                        </pre>
                    </div>
                </section>

                {/* Relationships in ORM */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🤝 Relationships in ORM
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        ORMs support relationships like one-to-one, one-to-many, and many-to-many using foreign keys and relationship attributes. Here’s an example with SQLAlchemy showing a one-to-many relationship between Users and Orders.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

# Define models
class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True)
    orders = relationship("Order", back_populates="user")

class Order(Base):
    __tablename__ = 'orders'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    product = Column(String, nullable=False)
    user = relationship("User", back_populates="orders")

# Create tables
Base.metadata.create_all(engine)

# Adding data
user = User(name="Alice", email="alice@example.com")
order1 = Order(product="Book", user=user)
order2 = Order(product="Laptop", user=user)
session.add_all([user, order1, order2])
session.commit()

# Querying relationships
print(f"{user.name}'s orders:")
for order in user.orders:
    print(f"- {order.product}")`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            Output: <br />
                            <code className="bg-gray-800 text-white p-2 rounded-md">Alice's orders:<br />- Book<br />- Laptop</code>
                        </p>
                    </div>
                </section>

                {/* Practical Example */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center justify-center mb-4">
                        <FaLaptopCode className="mr-3 text-2xl" />
                        <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase text-center">
                            🎯 Practical Example: Library Management System
                        </h2>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Let’s build a simple library management system using SQLAlchemy to manage books and authors, demonstrating ORM in action.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship

engine = create_engine('sqlite:///:memory:', echo=True)
Base = declarative_base()

# Models
class Author(Base):
    __tablename__ = 'authors'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    books = relationship("Book", back_populates="author")

class Book(Base):
    __tablename__ = 'books'
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    author_id = Column(Integer, ForeignKey('authors.id'))
    author = relationship("Author", back_populates="books")

# Create tables
Base.metadata.create_all(engine)

# Session
Session = sessionmaker(bind=engine)
session = Session()

# Adding data
author1 = Author(name="J.K. Rowling")
book1 = Book(title="Harry Potter and the Sorcerer's Stone", author=author1)
book2 = Book(title="Harry Potter and the Chamber of Secrets", author=author1)
session.add_all([author1, book1, book2])
session.commit()

# Querying
authors = session.query(Author).all()
for author in authors:
    print(f"Author: {author.name}")
    for book in author.books:
        print(f"  Book: {book.title}")

# Updating
book_to_update = session.query(Book).filter_by(title="Harry Potter and the Sorcerer's Stone").first()
book_to_update.title = "Harry Potter and the Philosopher's Stone"
session.commit()

# Deleting
book_to_delete = session.query(Book).filter_by(title="Harry Potter and the Chamber of Secrets").first()
session.delete(book_to_delete)
session.commit()`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
                            This example demonstrates creating a database, defining relationships, and performing CRUD operations with ORM.
                        </p>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        Conclusion
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Object Relational Mapping (ORM) in Python revolutionizes database interactions by abstracting SQL into Python objects. It enhances productivity, security, and maintainability, making it ideal for modern applications. With tools like SQLAlchemy, you can manage complex relationships, perform migrations, and write cleaner code. Mastering ORM equips you to build scalable, data-driven systems efficiently.
                    </p>
                </section>

                {/* Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        📚 Resources
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <a href="https://realpython.com/tutorials/databases/" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                Real Python - Database Tutorials
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tutorialspoint.com/python/python_database_access.htm" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                TutorialsPoint - Python Database Access
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.python.org/3/library/sqlite3.html" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                Python Official SQLite3 Documentation
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.sqlalchemy.org/en/20/" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                SQLAlchemy Official Documentation
                            </a>
                        </li>
                        <li>
                            <a href="https://www.fullstackpython.com/object-relational-mappers-orms.html" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                Full Stack Python - ORMs in Python
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default Dey9;