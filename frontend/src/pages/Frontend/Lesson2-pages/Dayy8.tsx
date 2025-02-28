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
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Dayy8: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for file upload
  const [submitted, setSubmitted] = useState(false);
  const [submissionForm, setSubmissionForm] = useState({
    assignmentId: 8,
    userId: userData?.userDetails.id ?? "", // Fallback to empty string if undefined
    fileUrl: "",
  });

  // Handle input changes for contact form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle input changes for submission form
  const handleFileChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSubmissionForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle contact form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been submitted.`);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  // Handle GitHub submission
  const handleGitSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Data:", submissionForm);

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
        body: JSON.stringify(submissionForm),
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
      <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-8 mx-auto max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        {/* Section Heading */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaLaptopCode className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Working with Forms & User Input</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Forms are the lifeblood of user interaction on the web, enabling everything from logins to searches to feedback. They collect user input—text, selections, or clicks—and allow applications to process or send that data. Mastering forms means mastering how users communicate with your site.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Building on events from Day 7, forms combine HTML structure with JavaScript handling to manage input dynamically. Whether it’s validating an email, submitting a message, or syncing with a server, forms are a cornerstone of web development that we’ll explore in depth today.
            </p>
          </div>

          {/* Forms and User Input Essentials */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Forms and User Input Essentials
            </h2>
            <div className="space-y-6">
              {/* What Are Forms? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What Are Forms?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  A form is an HTML structure that gathers user data through input elements like text fields, checkboxes, or buttons, typically wrapped in a <code>&lt;form&gt;</code> tag.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`<form>
  <input type="text" name="username" />
  <button type="submit">Submit</button>
</form>`}
                </pre>
              </div>

              {/* Form Elements */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Form Elements
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Forms use various input types to collect diverse data—text, emails, selections, and more.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`<input type="text" placeholder="Name" />
<input type="email" placeholder="Email" />
<select>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
<input type="checkbox" /> Agree`}
                </pre>
              </div>

              {/* Controlled Inputs */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Controlled Inputs
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  In React, inputs are “controlled” by tying their values to state, ensuring real-time updates and control.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const [value, setValue] = useState("");
<input
  type="text"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
                </pre>
              </div>

              {/* Handling Form Submission */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Handling Form Submission
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Use the <code>onSubmit</code> event to process form data, often preventing default submission to handle it client-side.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`<form onSubmit={(e) => {
  e.preventDefault();
  console.log("Submitted!");
}}>
  <input type="text" />
  <button type="submit">Send</button>
</form>`}
                </pre>
              </div>

              {/* Form Validation */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  5. Form Validation
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Validate input before submission—check for required fields, email formats, or custom rules.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const handleSubmit = (e) => {
  e.preventDefault();
  if (!form.email.includes("@")) {
    alert("Invalid email!");
    return;
  }
  console.log("Valid submission!");
};`}
                </pre>
              </div>

              {/* Uncontrolled Inputs */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  6. Uncontrolled Inputs
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Uncontrolled inputs use refs instead of state, useful for simple forms or integrating with libraries.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`const inputRef = useRef(null);
<form onSubmit={(e) => {
  e.preventDefault();
  console.log(inputRef.current.value);
}}>
  <input type="text" ref={inputRef} />
</form>`}
                </pre>
              </div>

              {/* FormData API */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  7. FormData API
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  The <code>FormData</code> API simplifies gathering form data for submission to a server.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`<form onSubmit={(e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  console.log(data.get("name"));
}}>
  <input type="text" name="name" />
</form>`}
                </pre>
              </div>

              {/* Real-World Use Cases */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  8. Real-World Use Cases
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Forms power login pages, search bars, checkout processes, and more—each requiring tailored handling.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`// Login form example
const [credentials, setCredentials] = useState({ email: "", password: "" });
<form onSubmit={(e) => {
  e.preventDefault();
  fetch("/login", { method: "POST", body: JSON.stringify(credentials) });
}}>
  <input
    type="email"
    value={credentials.email}
    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
  />
</form>`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Create a simple contact form that:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Collects a user's <strong>name, email, and message</strong>.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Updates the input fields as the user types.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Displays an alert with the user's name after submitting.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Below is an example implementation—test it out!
            </p>
            <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-md bg-green-400 mt-4">
              <h2 className="text-xl text-center underline py-2 font-semibold text-gray-700">Contacts' Form</h2>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* GitHub Submission */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaLink className="mr-2 text-indigo-600" />
              Submit Your Work
            </h2>
            <form onSubmit={handleGitSubmit} className="space-y-4">
              <label
                className="block text-gray-800 text-sm sm:text-base font-semibold mb-2"
                htmlFor="fileUrl"
              >
                Paste Your GitHub Repository Link:
              </label>
              <textarea
                name="fileUrl"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                rows={4}
                placeholder="e.g., https://github.com/username/repo"
                value={submissionForm.fileUrl}
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
        </div>
      </section>
    </>
  );
};

export default Dayy8;