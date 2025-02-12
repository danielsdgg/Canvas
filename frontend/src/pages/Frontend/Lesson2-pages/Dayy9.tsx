import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dayy9: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      {/* Main Container */}
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
          Asynchronous JavaScript - Fetching Data from an API
        </h1>

        {/* Introduction */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">📌 Introduction</h2>
          <p className="text-gray-700 mt-2">
            In JavaScript, **asynchronous programming** is crucial for handling operations that take time to complete, such as **fetching data from an API, reading files, or interacting with a database**. Instead of blocking code execution, JavaScript uses **Promises** and `async/await` to handle asynchronous tasks smoothly.
          </p>
        </section>

        {/* Understanding Asynchronous JavaScript */}
        <section className="mb-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">⏳ Understanding Asynchronous JavaScript</h2>
          <p className="text-gray-700 mt-2">
            JavaScript is **single-threaded**, meaning it executes code line by line. However, **asynchronous programming** allows certain tasks (like fetching data from a server) to happen in the background while the rest of the script continues running.
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2">
            <li>🔹 **Callbacks:** Older method of handling async operations.</li>
            <li>🔹 **Promises:** Modern approach using `.then()` and `.catch()`.</li>
            <li>🔹 **Async/Await:** Cleaner, more readable syntax for handling async operations.</li>
          </ul>
        </section>

        {/* What are Promises? */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">🔄 What are Promises?</h2>
          <p className="text-gray-700 mt-2">
            A **Promise** is an object representing the **eventual completion or failure** of an asynchronous operation.
          </p>
          <p className="text-gray-700 mt-2">
            A Promise has three states:
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>✅ **Pending:** The async operation is in progress.</li>
            <li>✅ **Fulfilled:** The operation completed successfully.</li>
            <li>✅ **Rejected:** The operation failed.</li>
          </ul>
          <pre className="bg-gray-800 text-white p-4 rounded-md mt-4 text-sm overflow-x-auto">
{`const fetchData = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve("Data retrieved successfully! ✅");
    } else {
      reject("Error fetching data ❌");
    }
  }, 2000);
});

fetchData
  .then(response => console.log(response))
  .catch(error => console.error(error));`}
          </pre>
        </section>

        {/* Fetching Data from an API */}
        <section className="mb-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">🌐 Fetching Data from an API</h2>
          <p className="text-gray-700 mt-2">
            The **Fetch API** allows you to retrieve data from a server using `fetch()`. The response is returned as a **Promise**.
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded-md mt-4 text-sm overflow-x-auto">
{`fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // Convert response to JSON
  .then(data => console.log(data))   // Handle the data
  .catch(error => console.error("Error:", error));`}
          </pre>
        </section>

        {/* Using Async/Await for Fetch */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">🚀 Using Async/Await for Fetch</h2>
          <p className="text-gray-700 mt-2">
            The **async/await** syntax simplifies working with Promises, making the code more readable.
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded-md mt-4 text-sm overflow-x-auto">
{`const getPost = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

getPost();`}
          </pre>
        </section>

        {/* CRUD Operations with Practical Examples */}
<section className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
  <h2 className="text-xl font-semibold text-gray-700 text-center py-2 bg-blue-100">🔄 CRUD Operations with Async/Await</h2>
  <p className="text-gray-700 mt-2">
  CRUD, which stands for **Create, Read, Update, and Delete**, represents the four fundamental operations used to manage data in web applications. These operations form the backbone of how applications interact with databases and APIs, allowing users to perform actions such as adding new records, retrieving existing data, modifying information, and removing records.

  <br /><br />

  <b>**How CRUD Works in Web Development:**</b>
  - **Create (C)** – This operation is used to add new data to a database or system. In a web application, it typically involves a **POST** request, where the client sends data to the server to be stored.
  - **Read (R)** – The read operation retrieves existing data from the database. This is commonly done using a **GET** request, allowing applications to display information such as user profiles, product listings, or blog posts.
  - **Update (U)** – Updating modifies existing records. This is usually achieved using a **PUT** or **PATCH** request, where the client sends updated information to the server.
  - **Delete (D)** – This operation removes existing records from the system, typically executed via a **DELETE** request.

  <br /> <br/>

  <b>**Why CRUD is Important:**</b>
  - CRUD operations provide **structured data manipulation** in applications.
  - They ensure **consistency and integrity** of data across different platforms.
  - Used in **databases (SQL, NoSQL), RESTful APIs, GraphQL**, and various data storage systems.
  - Essential for building interactive applications like **social media platforms, e-commerce sites, dashboards, and CMS**.

  <br />

  CRUD operations are implemented through **backend services (Node.js, Flask, Django, etc.)** that interact with a database (e.g., **MongoDB, MySQL, PostgreSQL**) and **frontend frameworks (React, Vue, Angular)** that make API calls to perform these actions. Below are practical examples demonstrating CRUD operations using **async/await** with the Fetch API.
</p>

  {/* Create (POST) */}
  <h3 className="text-lg font-semibold text-gray-700 mt-4">📝 Create (POST)</h3>
  <p className="text-gray-700">
    To create a new resource, we send a **POST** request with the data in the request body.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
{`async function createUser() {
  const newUser = {
    name: "John Doe",
    email: "johndoe@example.com"
  };

  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser)
  });

  const data = await response.json();
  console.log('User Created:', data);
}`}
  </pre>

  {/* Read (GET) */}
  <h3 className="text-lg font-semibold text-gray-700 mt-4">📖 Read (GET)</h3>
  <p className="text-gray-700">
    Fetching data from an API is done using a **GET** request.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
{`async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log('Users:', users);
}

fetchUsers();`}
  </pre>

  {/* Update (PUT) */}
  <h3 className="text-lg font-semibold text-gray-700 mt-4">✏️ Update (PUT)</h3>
  <p className="text-gray-700">
    Updating a resource requires a **PUT** or **PATCH** request.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
{`async function updateUser(userId) {
  const updatedData = {
    name: "John Updated",
    email: "updatedemail@example.com"
  };

  const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData)
  });

  const data = await response.json();
  console.log('User Updated:', data);
}

updateUser(1);`}
  </pre>

  {/* Delete (DELETE) */}
  <h3 className="text-lg font-semibold text-gray-700 mt-4">🗑️ Delete (DELETE)</h3>
  <p className="text-gray-700">
    Deleting a resource is done using a **DELETE** request.
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
{`async function deleteUser(userId) {
  const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`, {
    method: 'DELETE'
  });

  if (response.ok) {
    console.log(\`User with ID \${userId} deleted\`);
  } else {
    console.error('Failed to delete user');
  }
}

deleteUser(1);`}
  </pre>

  <p className="text-gray-700 mt-4">
    These examples demonstrate how to **interact with APIs** using async/await while performing CRUD operations. Try implementing these in a project to get hands-on experience! 🚀
  </p>
</section>


        {/* Practical Exercise */}
        <section className="mb-6 bg-gray-100 p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold text-gray-700 text-center py-2 bg-blue-200 uppercase">🚀 Practical Exercise</h2>
  <p className="text-gray-700 mt-2">
    Build an interactive webpage that fetches and displays random dog images from an API.
  </p>
  <ul className="list-disc ml-6 text-gray-700">
    <li>📌 Use <code>fetch()</code> or <code>async/await</code> to request random dog images from <code>https://dog.ceo/api/breeds/image/random</code>.</li>
    <li>📌 Display the retrieved dog images dynamically in the UI.</li>
    <li>📌 Implement a "Fetch New Dog" button that allows users to load a new random dog image.</li>
    <li>📌 Show a loading indicator while fetching data.</li>
    <li>📌 Handle errors gracefully (e.g., display an error message if the API request fails).</li>
    <li>📌 Use Tailwind CSS to style the webpage neatly.</li>
    <li>📌 (Bonus) Allow users to fetch images by dog breed using <code>https://dog.ceo/api/breed/{}/images/random</code>.</li>
  </ul>
  <p className="text-gray-700 mt-4 font-medium">🔹 Expected Outcome:</p>
  <ul className="list-disc ml-6 text-gray-700">
    <li>✅ A visually appealing page with a dog image displayed dynamically.</li>
    <li>✅ Clicking the "Fetch New Dog" button loads a new image.</li>
    <li>✅ A loading spinner appears while fetching.</li>
    <li>✅ Error messages are displayed when necessary.</li>
  </ul>
</section>


        {/* Resources for Further Study */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-700 text-center uppercase bg-blue-200 py-2">📖 Resources for Further Study</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>
              📌 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" className="text-blue-600 hover:underline">
                MDN: JavaScript Promises
              </a>
            </li>
            <li>
              📌 <a href="https://javascript.info/promise-basics" className="text-blue-600 hover:underline">
                JavaScript.info: Promises & Async/Await
              </a>
            </li>
            <li>
              📌 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" className="text-blue-600 hover:underline">
                MDN: Fetch API
              </a>
            </li>
          </ul>
        </section>

      </section>
    </>
  );
};

export default Dayy9;
