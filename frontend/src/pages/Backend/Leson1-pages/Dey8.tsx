import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Dey8: React.FC = () => {
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
          Introduction to SQLite
        </h1>

        {/* Overview */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          SQLite is a **lightweight, file-based relational database** that is
          easy to use and does not require a server. It is widely used in
          mobile apps, desktop software, and embedded systems.
        </p>

        {/* Section: Setting Up SQLite */}
        <h2 className="text-xl font-semibold text-gray-800">🔧 Setting Up SQLite</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          To start using SQLite, you need to install it on your system. Most
          Python installations come with SQLite by default.
        </p>
        <p className="text-gray-700 text-lg"><strong>To check if SQLite is installed, run:</strong></p>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>python -c "import sqlite3; print(sqlite3.sqlite_version)"</code>
        </pre>
        <p className="text-gray-700 text-lg"><strong>If you need to install it manually:</strong></p>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>pip install sqlite3</code>
        </pre>

        {/* Section: SQLite Data Types */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">📌 SQLite Data Types</h2>
        <p className="text-gray-700 text-lg">
          SQLite supports the following **storage classes**:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li><strong>INTEGER</strong> - Whole numbers.</li>
          <li><strong>TEXT</strong> - Strings and text data.</li>
          <li><strong>REAL</strong> - Floating-point numbers.</li>
          <li><strong>BLOB</strong> - Binary data (images, files).</li>
          <li><strong>NULL</strong> - Represents missing values.</li>
        </ul>

        {/* Section: Table Relations */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">🔗 Table Relations</h2>
        <p className="text-gray-700 text-lg">
          SQLite supports **one-to-one, one-to-many, and many-to-many**
          relationships using **foreign keys**.
        </p>
        <p className="text-gray-700 text-lg">
          Example: A **Users table** linked to an **Orders table**:
        </p>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
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

        {/* Section: CRUD Operations */}
<h2 className="text-xl font-semibold text-gray-800 mt-6">📝 CRUD Operations</h2>
<p className="text-gray-700 text-lg">
  CRUD stands for <strong>Create, Read, Update, and Delete</strong>. These are the fundamental operations performed on a database. Every modern application that interacts with a database follows the CRUD paradigm to manage data efficiently.
</p>

<h3 className="text-lg font-semibold text-gray-800 mt-4">1️⃣ Creating a Database & Table</h3>
<p className="text-gray-700">
  Before storing data, we need to create a database and define a table structure. Below is an example using SQLite to create a `Users` table.
</p>
<pre className="bg-gray-800 p-4 rounded-md text-white">
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

<h3 className="text-lg font-semibold text-gray-800 mt-4">2️⃣ Inserting Data</h3>
<p className="text-gray-700">
  Once the table is created, we can insert records into it. Here’s an example of adding a new user to the `Users` table.
</p>
<pre className="bg-gray-800 p-4 rounded-md text-white">
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

<h3 className="text-lg font-semibold text-gray-800 mt-4">3️⃣ Reading Data</h3>
<p className="text-gray-700">
  Reading data allows us to retrieve stored information from the database. Below is a query to fetch all user records.
</p>
<pre className="bg-gray-800 p-4 rounded-md text-white">
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

<h3 className="text-lg font-semibold text-gray-800 mt-4">4️⃣ Updating & Deleting Data</h3>
<p className="text-gray-700">
  Updating data modifies existing records, while deleting removes records permanently from the database.
</p>
<pre className="bg-gray-800 p-4 rounded-md text-white">
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
<p className="text-gray-700">
  These CRUD operations form the backbone of any database-driven application, allowing seamless data management and interaction.
</p>

        {/* Practical Exercise */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">🎯 Practical Exercise</h2>
        <p className="text-gray-700 text-lg">
          Try creating a **Bookstore Database** with SQLite:
        </p>
        <ol className="list-decimal pl-6 text-lg text-gray-700">
          <li>Create a **Books** table with **title, author, price**.</li>
          <li>Add 3 books into the table.</li>
          <li>Write a query to fetch all books.</li>
          <li>Update the price of one book.</li>
          <li>Delete one book from the table.</li>
        </ol>

        {/* Resources Section */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Additional Resources</h2>
        <ul className="list-disc pl-6 text-lg text-blue-600">
          <li><a href="https://www.sqlite.org/docs.html" target="_blank" rel="noopener noreferrer">SQLite Official Documentation</a></li>
          <li><a href="https://www.sqlitetutorial.net/" target="_blank" rel="noopener noreferrer">SQLite Tutorial</a></li>
          <li><a href="https://realpython.com/python-sqlite/" target="_blank" rel="noopener noreferrer">Real Python: SQLite Guide</a></li>
        </ul>
      </section>
    </>
  );
};

export default Dey8;
