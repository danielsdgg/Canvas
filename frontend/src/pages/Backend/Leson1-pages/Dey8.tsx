import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit } from "react-icons/fa";

const Dey8: React.FC = () => {
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
          Introduction to SQLite
        </h1>
      </div>

      <div className="p-4 sm:p-6">
        {/* Overview */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaEdit className="mr-2 text-indigo-600" />
            Overview
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            SQLite is a <strong>lightweight, file-based relational database</strong> that is easy to use and does not require a server. It is widely used in mobile apps, desktop software, and embedded systems.
          </p>
        </section>

        {/* Setting Up SQLite */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            🔧 Setting Up SQLite
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            To start using SQLite, you need to install it on your system. Most Python installations come with SQLite by default.
          </p>
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
            <p className="text-gray-700 text-sm sm:text-base md:text-lg"><strong>To check if SQLite is installed, run:</strong></p>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>python -c "import sqlite3; print(sqlite3.sqlite_version)"</code>
            </pre>
          </div>
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <p className="text-gray-700 text-sm sm:text-base md:text-lg"><strong>If you need to install it manually:</strong></p>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>pip install sqlite3</code>
            </pre>
          </div>
        </section>

        {/* SQLite Data Types */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            📌 SQLite Data Types
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            SQLite supports the following <strong>storage classes</strong>:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
            <li><strong>INTEGER</strong> - Whole numbers.</li>
            <li><strong>TEXT</strong> - Strings and text data.</li>
            <li><strong>REAL</strong> - Floating-point numbers.</li>
            <li><strong>BLOB</strong> - Binary data (images, files).</li>
            <li><strong>NULL</strong> - Represents missing values.</li>
          </ul>
        </section>

        {/* Table Relations */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            🔗 Table Relations
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            SQLite supports <strong>one-to-one, one-to-many, and many-to-many</strong> relationships using <strong>foreign keys</strong>.
          </p>
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-2">
              Example: A <strong>Users table</strong> linked to an <strong>Orders table</strong>:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`CREATE TABLE Users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE
);

CREATE TABLE Orders (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    product TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);`}
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
            CRUD stands for <strong>Create, Read, Update, and Delete</strong>. These are the fundamental operations performed on a database. Every modern application that interacts with a database follows the CRUD paradigm to manage data efficiently.
          </p>

          <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">1️⃣ Creating a Database & Table</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">
              Before storing data, we need to create a database and define a table structure. Below is an example using SQLite to create a <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Users</code> table.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`import sqlite3

# Connect to SQLite database (or create it if it doesn't exist)
conn = sqlite3.connect("app.db")
cursor = conn.cursor()

# Create a Users table with columns: id, name, and email
cursor.execute('''CREATE TABLE IF NOT EXISTS Users (
                    id INTEGER PRIMARY KEY,
                    name TEXT NOT NULL,
                    email TEXT UNIQUE)''')

conn.commit()
conn.close()`}
              </code>
            </pre>
          </div>

          <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">2️⃣ Inserting Data</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">
              Once the table is created, we can insert records into it. Here’s an example of adding a new user to the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Users</code> table.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`conn = sqlite3.connect("app.db")
cursor = conn.cursor()

# Insert a new user with name and email
cursor.execute("INSERT INTO Users (name, email) VALUES (?, ?)", 
               ("John Doe", "john@example.com"))

conn.commit()
conn.close()`}
              </code>
            </pre>
          </div>

          <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">3️⃣ Reading Data</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">
              Reading data allows us to retrieve stored information from the database. Below is a query to fetch all user records.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`conn = sqlite3.connect("app.db")
cursor = conn.cursor()

# Select all users from the table
cursor.execute("SELECT * FROM Users")
users = cursor.fetchall()

# Print each user record
for user in users:
    print(user)

conn.close()`}
              </code>
            </pre>
          </div>

          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">4️⃣ Updating & Deleting Data</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">
              Updating data modifies existing records, while deleting removes records permanently from the database.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`conn = sqlite3.connect("app.db")
cursor = conn.cursor()

# Update user with ID 1, changing their name
cursor.execute("UPDATE Users SET name = ? WHERE id = ?", ("Jane Doe", 1))

# Delete user with ID 1 from the database
cursor.execute("DELETE FROM Users WHERE id = ?", (1,))

conn.commit()
conn.close()`}
              </code>
            </pre>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
              These CRUD operations form the backbone of any database-driven application, allowing seamless data management and interaction.
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
            Try creating a <strong>Bookstore Database</strong> with SQLite:
          </p>
          <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
            <li>Create a <strong>Books</strong> table with <strong>title, author, price</strong>.</li>
            <li>Add 3 books into the table.</li>
            <li>Write a query to fetch all books.</li>
            <li>Update the price of one book.</li>
            <li>Delete one book from the table.</li>
          </ol>
        </section>

        {/* Resources */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaLink className="mr-2 text-indigo-600" />
            📚 Additional Resources
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
            <li>
              <a href="https://www.sqlite.org/docs.html" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-indigo-600 hover:underline">
                SQLite Official Documentation
              </a>
            </li>
            <li>
              <a href="https://www.sqlitetutorial.net/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-indigo-600 hover:underline">
                SQLite Tutorial
              </a>
            </li>
            <li>
              <a href="https://realpython.com/python-sqlite/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-indigo-600 hover:underline">
                Real Python: SQLite Guide
              </a>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Dey8;