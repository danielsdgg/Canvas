import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dayy8 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been submitted.`);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <>
      {/* Section Wrapper */}
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
          Working with Forms & User Input
        </h1>

        {/* Introduction */}
<section className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
  <h2 className="text-xl font-semibold text-gray-700">📌 Introduction to Forms & User Input</h2>
  <p className="text-gray-700 mt-2">
    Forms are a fundamental part of web development, allowing users to provide information that can be processed by the application. 
    Whether you're creating a **sign-up form, a search bar, a contact form, or a checkout page**, forms enable user interaction with web applications.
  </p>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">🔹 How Forms Work</h3>
  <p className="text-gray-700 mt-2">
    A form is made up of **input fields**, such as text boxes, radio buttons, checkboxes, and dropdowns. These fields **collect user data**, which can be processed either on the **client-side (browser)** or sent to a **server** for further handling.
  </p>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">🔹 Why Forms Are Important</h3>
  <p className="text-gray-700 mt-2">
    Forms are essential for:
  </p>
  <ul className="list-disc ml-6 text-gray-700">
    <li>🔹 **User authentication** (login and registration forms)</li>
    <li>🔹 **Data collection** (surveys, contact forms, and feedback forms)</li>
    <li>🔹 **Search functionality** (Google, e-commerce product searches)</li>
    <li>🔹 **E-commerce transactions** (checkout and payment forms)</li>
    <li>🔹 **Booking and reservations** (travel sites, appointment scheduling)</li>
  </ul>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">🔹 Key HTML Elements in Forms</h3>
  <p className="text-gray-700 mt-2">
    Forms are built using the <code>{`<form>`}</code> tag, which contains various input fields. Here are some common ones:
  </p>
  <ul className="list-disc ml-6 text-gray-700">
    <li>📌 <code>{`<input type="text">`}</code> - Collects text input</li>
    <li>📌 <code>{`<input type="email">`}</code> - Validates an email format</li>
    <li>📌 <code>{`<input type="password">`}</code> - Hides user input for passwords</li>
    <li>📌 <code>{`<input type="checkbox">`}</code> - Allows multiple selections</li>
    <li>📌 <code>{`<input type="radio">`}</code> - Allows single selection from a group</li>
    <li>📌 <code>{`<select>`}</code> - Provides a dropdown list</li>
    <li>📌 <code>{`<textarea>`}</code> - Collects longer text inputs</li>
    <li>📌 <code>{`<button>`}</code> - Submits the form</li>
  </ul>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">🔹 Handling Forms with JavaScript & React</h3>
  <p className="text-gray-700 mt-2">
    In JavaScript and React, forms are usually **controlled** using state. A controlled form means that the form inputs are managed by the **component’s state**, ensuring real-time updates and validation. But we will look into React on the next lesson after javascript.
  </p>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">⚡ Expected Outcomes from This Lesson</h3>
  <p className="text-gray-700 mt-2">
    By the end of this lesson, you should be able to:
  </p>
  <ul className="list-disc ml-6 text-gray-700">
    <li>✅ Understand the structure and purpose of HTML forms.</li>
    <li>✅ Collect and process user input using JavaScript.</li>
    <li>✅ Implement event handlers like <code>onChange</code> and <code>onSubmit</code>.</li>
    <li>✅ Validate form input before submission.</li>
  </ul>

  <p className="text-gray-700 mt-4">
    Now, let's dive into the **practical exercise** where you'll build a basic **contact form** that handles user input dynamically! 🚀
  </p>
</section>


        {/* Practical Exercise */}
        <section className="mb-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl text-center bg-blue-200 py-2 font-semibold text-gray-700">🚀 Practical Exercise</h2>
          <p className="text-gray-600 mt-2">
            Create a simple contact form that:
          </p>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Collects a user's **name, email, and message**.</li>
            <li>Updates the input fields as the user types.</li>
            <li>Displays an alert with the user's name after submitting.</li>
          </ul>
          <p className="text-gray-600 mt-2">
            Take a look at the form below and design something like that. Make sure it displays an alert with the user's name after submitting
          </p>
          {/* Form Section */}
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
        </section>        

        {/* Conclusion */}
        <section className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl text-center uppercase bg-blue-200 py-2 font-semibold text-gray-700">🎯 Conclusion</h2>
          <p className="text-gray-600 mt-2">
            Forms play a crucial role in web development by enabling user interaction and data collection. **Using event handlers**, we can **validate, process, and submit** data dynamically.
          </p>
          <h3 className="text-lg font-semibold text-gray-700 mt-4">🔹 Key Takeaways</h3>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Use the <code>onChange</code> event to update state in real-time.</li>
            <li>Prevent default form submission using <code>event.preventDefault()</code>.</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Keep practicing and experiment with **form validation, controlled inputs, and form submission handling** to enhance your skills. 🚀
          </p>
        </section>
        {/* Resources for Further Study */}
<section className="bg-gray-100 p-6 rounded-lg shadow-md mt-5 mb-6">
  <h2 className="text-xl font-semibold text-gray-700 text-center bg-blue-200 py-2">📖 Resources for Further Study</h2>
  <p className="text-gray-700 mt-2">
    Learning how to work with forms and user input is crucial for any web developer. Below are some **hand-picked resources** that will help deepen your understanding of form handling, validation, and best practices in both **HTML, JavaScript, and React**.
  </p>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">🔹 Official Documentation</h3>
  <ul className="list-disc ml-6 text-gray-700">
    <li>
      📌 <a href="https://developer.mozilla.org/en-US/docs/Learn/Forms" target="_blank" className="text-blue-600 hover:underline">
        MDN Web Docs: Forms Guide
      </a> - Comprehensive guide on HTML forms and input types.
    </li>
    <li>
      📌 <a href="https://react.dev/reference/react-dom/components/input" target="_blank" className="text-blue-600 hover:underline">
        React Docs: Handling Forms
      </a> - Official documentation on handling forms in React.
    </li>
    <li>
      📌 <a href="https://developer.mozilla.org/en-US/docs/Web/API/FormData" target="_blank" className="text-blue-600 hover:underline">
        MDN Web Docs: FormData API
      </a> - Learn how to work with FormData for form submissions.
    </li>
  </ul>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">🔹 Articles & Tutorials</h3>
  <ul className="list-disc ml-6 text-gray-700">
    <li>
      📌 <a href="https://www.freecodecamp.org/news/form-validation-in-javascript/" target="_blank" className="text-blue-600 hover:underline">
        JavaScript Form Validation Guide (FreeCodeCamp)
      </a> - Learn how to validate user input properly.
    </li>
    <li>
      📌 <a href="https://blog.logrocket.com/handling-forms-react-tutorial-examples/" target="_blank" className="text-blue-600 hover:underline">
        Handling Forms in React (LogRocket)
      </a> - A practical guide to controlled and uncontrolled forms in React.
    </li>
    <li>
      📌 <a href="https://www.smashingmagazine.com/2023/01/best-practices-forms-accessibility/" target="_blank" className="text-blue-600 hover:underline">
        Best Practices for Accessible Forms (Smashing Magazine)
      </a> - Learn how to make your forms accessible to all users.
    </li>
  </ul>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">🔹 Interactive Courses</h3>
  <ul className="list-disc ml-6 text-gray-700">
    <li>
      🎓 <a href="https://www.codecademy.com/learn/learn-html" target="_blank" className="text-blue-600 hover:underline">
        Codecademy: Learn HTML
      </a> - Covers forms and input elements in interactive lessons.
    </li>
    <li>
      🎓 <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank" className="text-blue-600 hover:underline">
        Udemy: React - The Complete Guide
      </a> - A detailed course on React, including form handling.
    </li>
  </ul>

  <h3 className="text-lg font-semibold text-gray-700 mt-4">📌 Next Steps</h3>
  <p className="text-gray-700 mt-2">
    To become proficient in handling forms, **practice building real-world projects** like:
  </p>
  <ul className="list-disc ml-6 text-gray-700">
    <li>✅ **Login & Registration Forms** with validation.</li>
    <li>✅ **Contact Forms** that send user messages via email.</li>
    <li>✅ **Search Forms** with filtering functionality.</li>
    <li>✅ **Multi-step Forms** with state management.</li>
  </ul>

  <p className="text-gray-700 mt-4">
    Keep practicing and exploring these resources to master working with forms and user input! 🚀
  </p>
</section>

      </section>
    </>
  );
};

export default Dayy8;
