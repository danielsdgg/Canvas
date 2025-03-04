import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCode,
  FaLaptopCode,
  FaList,
  FaLink,
  FaEdit,
  FaCheckCircle,
  FaRocket,
  FaBookOpen
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Dayy9: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for file upload
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 11,
    userId: userData?.userDetails.id ?? "", // Ensuring a valid initial state
    fileUrl: "",
  });

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Data:", form);

    if (!userToken) {
      alert("Authentication error. Please log in again.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/v1/assignments/submit", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
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
      {/* Main Container */}
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
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaLaptopCode className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Fetching Data from APIs</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Fetching data from APIs (Application Programming Interfaces) is a fundamental skill in modern web development. APIs allow your application to communicate with external servers, retrieving or sending data like user profiles, weather updates, or product listings. This process relies on asynchronous JavaScript, enabling non-blocking operations that keep your app responsive.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Building on forms from Day 8, APIs take user interaction to the next level by connecting it to real-world data sources. Whether it’s displaying live tweets, fetching dog images, or updating a database, mastering API integration transforms static pages into dynamic, data-driven experiences.
            </p>
          </div>

          {/* Understanding APIs and Fetching Data */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding APIs and Fetching Data
            </h2>
            <div className="space-y-6">
              {/* What is an API? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What is an API?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  An API is a set of rules allowing programs to communicate. In web development, RESTful APIs use HTTP requests (GET, POST, etc.) to exchange JSON data between client and server.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// Example API endpoint
// GET https://api.example.com/users
// Returns: {"id": 1, "name": "John"}`}
                </pre>
              </div>

              {/* Why Fetch Data? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Why Fetch Data?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Fetching data enables real-time updates, personalization, and scalability—connecting your app to external services like weather APIs, social media, or e-commerce platforms.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`fetch("https://api.weather.com/current")
  .then(res => res.json())
  .then(data => console.log(data.temp));`}
                </pre>
              </div>

              {/* Asynchronous JavaScript Basics */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Asynchronous JavaScript Basics
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  JavaScript’s single-threaded nature requires asynchronous handling for tasks like API calls, using callbacks, Promises, or async/await to avoid blocking execution.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`setTimeout(() => console.log("Delayed"), 1000);
console.log("Immediate"); // Runs first`}
                </pre>
              </div>

              {/* Promises Explained */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Promises Explained
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Promises represent future values with states: pending, fulfilled, or rejected. They’re foundational for API fetching.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data received!"), 2000);
});
fetchData.then(data => console.log(data));`}
                </pre>
              </div>
            </div>
          </div>

          {/* Fetching Data Techniques */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaList className="mr-2 text-indigo-600" />
              Fetching Data Techniques
            </h2>
            <div className="space-y-6">
              {/* The Fetch API */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. The Fetch API
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  The <code>fetch()</code> method is a modern, Promise-based way to make HTTP requests, replacing older XMLHttpRequest.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));`}
                </pre>
              </div>

              {/* Async/Await with Fetch */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Async/Await with Fetch
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Async/await simplifies Promise handling, making code cleaner and easier to debug.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
getPost();`}
                </pre>
              </div>

              {/* Handling Errors */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Handling Errors
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Proper error handling ensures robustness—check response status and catch network errors.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) throw new Error(\`HTTP error! Status: \${response.status}\`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}
fetchData();`}
                </pre>
              </div>

              {/* CRUD Operations */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. CRUD Operations
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  APIs support Create (POST), Read (GET), Update (PUT/PATCH), and Delete (DELETE) operations—key for data management.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// POST (Create)
async function createPost() {
  const post = { title: "New Post", body: "Content" };
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  console.log(await res.json());
}

// GET (Read)
async function readPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(await res.json());
}

// PUT (Update)
async function updatePost(id) {
  const updated = { title: "Updated Post" };
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updated),
  });
  console.log(await res.json());
}

// DELETE
async function deletePost(id) {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`, {
    method: "DELETE",
  });
  console.log(res.ok ? "Deleted" : "Failed");
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Build an interactive webpage that fetches and displays random dog images from an API.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Use <code className="mr-1">fetch()</code> or <code className="ml-1 px-1">async/await</code> to request random dog images from{" "}
                <code className="ml-1">https://dog.ceo/api/breeds/image/random</code>.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Display the retrieved dog images dynamically in the UI.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Implement a "Fetch New Dog" button that allows users to load a new random dog image.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                Show a loading indicator while fetching data.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Handle errors gracefully (e.g., display an error message if the API request fails).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Use Tailwind CSS to style the webpage neatly.
              </li>
              <li className="flex items-start">
                <FaRocket className="mr-2 mt-1 text-indigo-600" />
                (Bonus) Allow users to fetch images by dog breed using{" "}
                <code>https://dog.ceo/api/breed/{"{breed}"}/images/random</code>.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 font-medium">
              Expected Outcome:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                A visually appealing page with a dog image displayed dynamically.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Clicking the "Fetch New Dog" button loads a new image.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                A loading spinner appears while fetching.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Error messages are displayed when necessary.
              </li>
            </ul>
          </div>

          {/* GitHub Submission */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaLink className="mr-2 text-indigo-600" />
              Submit Your Work
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2">
                Create a GitHub repository for your work and submit your GitHub link below after completing the task.
              </p>
              <label
                className="block text-gray-800 text-sm sm:text-base font-semibold mb-2"
                htmlFor="fileUrl"
              >
                Paste Your GitHub Repository Link:
              </label>
              <textarea
                name="fileUrl"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                rows={6}
                placeholder="e.g., https://github.com/username/repo"
                value={form.fileUrl}
                onChange={handleFileChange}
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Submit Exercise
              </button>
            </form>
            {submitted && (
              <p className="mt-4 text-green-600 font-medium flex items-center">
                <FaCheckCircle className="mr-2" />
                Your exercise has been submitted successfully!
              </p>
            )}
          </div>

          {/* Resources for Further Study */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Resources for Further Study
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
                  className="text-indigo-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MDN: JavaScript Promises
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://javascript.info/promise-basics"
                  className="text-indigo-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JavaScript.info: Promises & Async/Await
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
                  className="text-indigo-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MDN: Fetch API
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dayy9;