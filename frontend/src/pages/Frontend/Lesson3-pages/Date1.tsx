import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaEdit, FaCheckCircle, FaRocket, FaLink } from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Date1: React.FC = () => {
    const navigate = useNavigate();
      const { userData, userToken } = useAuth();
  
      // State for file upload
      const [submitted, setSubmitted] = useState(false);
      const [form, setForm] = useState({
          assignmentId: 8,
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
                    <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Introduction to React</h1>
                </div>

                <div className="p-4 sm:p-6">
                    {/* Intro Section */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaRocket className="mr-2 text-indigo-600" />
                            React
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            React is a powerful and widely used JavaScript library for building modern, interactive user interfaces. Developed by Facebook, it allows developers to create fast, scalable, and maintainable web applications by breaking down the UI into reusable and modular components.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Unlike traditional approaches where entire pages reload after every user interaction, React employs a virtual DOM (Document Object Model) to efficiently update only the necessary parts of the UI. This results in a smoother and more dynamic user experience.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Throughout this lesson, we’ll explore key React concepts, starting from installation and understanding JSX, to working with state, props, event handling, and advanced topics like hooks and state management. By the end of this course, you’ll be able to build fully functional and dynamic React applications.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Get ready to dive into React and transform the way you build web applications! 🚀
                        </p>
                    </section>

                    {/* Getting Started */}
                    <div className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                            <FaEdit className="mr-2 text-indigo-600" />
                            Getting Started with React
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                            Welcome to your journey with React! On Day 1, we’ll set up your development environment and explore the basics of React. React is a powerful JavaScript library for building dynamic and reusable user interfaces efficiently. By learning React, you'll gain the ability to create scalable applications with a component-based structure.
                        </p>

                        {/* Step 1: Installing Node.js */}
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Step 1: Installing Node.js
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Before we start with React, we need to install <strong>Node.js</strong>, which comes bundled with <strong>npm (Node Package Manager)</strong>. npm is essential for managing the dependencies required for React development.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            You can download Node.js from the official website:
                            <a
                                href="https://nodejs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline ml-1"
                            >
                                https://nodejs.org/
                            </a>.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4 text-sm sm:text-base overflow-x-auto">
                            {`# Check if Node.js and npm are installed
node -v   # Displays Node.js version
npm -v    # Displays npm version

# If not installed, download from https://nodejs.org/
`}
                        </pre>

                        {/* Step 2: Setting Up a New React Application */}
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Step 2: Setting Up a New React Application
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Once Node.js and npm are installed, you can create a new React application from your terminal using <code>create-react-app</code>. This command sets up all the necessary files, dependencies, and configurations for you.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4 text-sm sm:text-base overflow-x-auto">
                            {`# Create a new React application
npx create-react-app my-react-app

# Navigate into the project folder
cd my-react-app

# Start the development server
npm start
`}
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            After running <code>npm start</code>, your default web browser will open at:
                            <code className="bg-gray-200 p-1 rounded"> http://localhost:3000 </code>,
                            displaying the default React app.
                        </p>

                        {/* Understanding Project Structure */}
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaList className="mr-2 text-indigo-600" />
                            📁 Understanding the Project Structure
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Let’s take a quick look at the key folders and files generated by <code>create-react-app</code>:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-6 space-y-2">
                            <li>
                                <strong><code>src/</code></strong> – Contains your application code, including React components and styles.
                            </li>
                            <li>
                                <strong><code>public/</code></strong> – Stores static assets like images and the <code>index.html</code> file.
                            </li>
                            <li>
                                <strong><code>package.json</code></strong> – Includes project metadata and a list of dependencies.
                            </li>
                            <li>
                                <strong><code>node_modules/</code></strong> – Contains all installed npm packages (you don't need to modify this).
                            </li>
                        </ul>

                        {/* Step 3: Editing Your First Component */}
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaEdit className="mr-2 text-indigo-600" />
                            🛠️ Step 3: Editing Your First React Component
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Now, let's edit our first React component! Open the <code>src/App.js</code> file in your favorite code editor (e.g.,{" "}
                            <a
                                href="https://code.visualstudio.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                VS Code
                            </a>
                            ).
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4 text-sm sm:text-base overflow-x-auto">
                            {`function App() {
  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold">🚀 Welcome to My React App!</h1>
      <p className="text-gray-600">This is your first React project. Modify it and see the changes live!</p>
    </div>
  );
}

export default App;
`}
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Save the file and notice how the browser refreshes automatically, thanks to React’s hot-reloading feature.
                        </p>

                        {/* Tips for Success */}
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCheckCircle className="mr-2 text-indigo-600" />
                            💡 Tips for Success
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-6 space-y-2">
                            <li>
                                Use{" "}
                                <a
                                    href="https://code.visualstudio.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    VS Code
                                </a>{" "}
                                for a smoother development experience.
                            </li>
                            <li>Install useful extensions like <strong>ESLint</strong> and <strong>Prettier</strong> to format and lint your code.</li>
                            <li>
                                Refer to the official React documentation for deeper understanding:{" "}
                                <a
                                    href="https://reactjs.org/docs/getting-started.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    React Docs
                                </a>.
                            </li>
                            <li>Experiment with modifying components and styles to understand how React works.</li>
                            <li>Keep your components small and reusable to make your codebase maintainable.</li>
                        </ul>

                        {/* Conclusion */}
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            🎉 Congratulations! You have successfully set up your React development environment and built your first React component. You're now ready to dive deeper into React and start building powerful web applications.
                        </p>
                    </div>

                    {/* Understanding JSX */}
                    <div className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Understanding JSX
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML elements directly in your JavaScript/React code. JSX makes it easier to create and visualize the UI structure while keeping the component logic concise.
                        </p>

                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaList className="mr-2 text-indigo-600" />
                            Why Use JSX?
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4 space-y-2">
                            <li>JSX provides a clear and readable syntax for defining UI components.</li>
                            <li>It allows embedding JavaScript expressions using curly braces <code>{`{}`}</code>.</li>
                            <li>JSX prevents injection attacks as it automatically escapes any inserted values.</li>
                            <li>JSX compiles down to <code>React.createElement()</code> calls using Babel.</li>
                        </ul>

                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Basic JSX Example
                        </h4>
                        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4 text-sm sm:text-base overflow-x-auto">
                            {`// Basic JSX component
function Welcome() {
  return <h1>Hello, world!</h1>;
}`}
                        </pre>

                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Using JSX with JavaScript Expressions
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base mb-2 leading-relaxed">
                            JSX allows embedding JavaScript expressions inside curly braces:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4 text-sm sm:text-base overflow-x-auto">
                            {`function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Example usage
<Greeting name="Alice" />`}
                        </pre>

                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Rendering JSX in the DOM
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base mb-2 leading-relaxed">
                            JSX must be rendered using <code>ReactDOM.render()</code> in a root element.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4 text-sm sm:text-base overflow-x-auto">
                            {`ReactDOM.render(<Greeting name="Alice" />, document.getElementById('root'));`}
                        </pre>

                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            JSX with Conditional Rendering
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base mb-2 leading-relaxed">
                            You can use JavaScript conditions within JSX to render elements dynamically:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4 text-sm sm:text-base overflow-x-auto">
                            {`function UserStatus(props) {
  return (
    <div>
      {props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in</h1>}
    </div>
  );
}

// Example usage
<UserStatus isLoggedIn={true} />`}
                        </pre>

                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            JSX with Mapping Lists
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base mb-2 leading-relaxed">
                            JSX allows mapping arrays to generate dynamic lists:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4 text-sm sm:text-base overflow-x-auto">
                            {`const items = ['Apple', 'Banana', 'Cherry'];

function ItemList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// Example usage
<ItemList />`}
                        </pre>
                    </div>

                    {/* Practical Exercise */}
                    <div className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                            <FaRocket className="mr-2 text-indigo-600" />
                            📝 Practical Exercise: Introduction to React & JSX
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Now that you've learned the basics of React and JSX, it's time to apply your knowledge! Follow the instructions below to complete the exercise.
                        </p>

                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaList className="mr-2 text-indigo-600" />
                            Exercise Instructions
                        </h4>
                        <ul className="list-decimal list-inside text-gray-700 text-sm sm:text-base mb-4 space-y-2">
                            <li>Create a new React component called <code>ProfileCard</code>.</li>
                            <li>The component should display a user’s name, age, and a short bio.</li>
                            <li>Use JSX to embed JavaScript expressions (e.g., display a dynamic name).</li>
                            <li>Render the <code>ProfileCard</code> component inside <code>App.js</code>.</li>
                            <li>Ensure all elements are properly styled using Tailwind CSS.</li>
                        </ul>

                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            💡 Example Solution
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base mb-2 leading-relaxed">
                            Use the following code as a reference or starting point:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4 text-sm sm:text-base overflow-x-auto">
                            {`function ProfileCard() {
  const user = {
    name: "Alice Johnson",
    age: 25,
    bio: "Frontend Developer and tech enthusiast."
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white text-gray-800">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">Age: {user.age}</p>
      <p className="mt-2">{user.bio}</p>
    </div>
  );
}

// Rendering the component inside App.js
function App() {
  return (
    <div className="flex justify-center mt-10">
      <ProfileCard />
    </div>
  );
}

export default App;`}
                        </pre>

                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaRocket className="mr-2 text-indigo-600" />
                            🎯 Challenge Yourself!
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base mb-2 leading-relaxed">
                            Try modifying the component to include:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4 space-y-2">
                            <li>An image of the user.</li>
                            <li>A button that changes the background color when clicked.</li>
                            <li>Additional details such as location and interests.</li>
                        </ul>

                        {/* GitHub Submission */}
                        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaLink className="mr-2 text-indigo-600" />
                            Submit Your Work
                          </h2>
                          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                            Once you complete the exercise, create a GitHub repository, push your code, and submit the link below for grading.
                          </p>
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <label className="block text-gray-800 text-sm sm:text-base font-semibold mb-2" htmlFor="fileUrl">
                              Paste Your GitHub Repository Link:
                            </label>
                            <textarea name="fileUrl" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                            rows={6} placeholder="e.g., https://github.com/username/repo" value={form.fileUrl} onChange={handleFileChange}/>
                            <button type="submit" className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105">
                              Submit
                            </button>
                            </form>
                            {submitted && (
                              <p className="mt-4 text-green-600 font-medium flex items-center">
                                <FaCheckCircle className="mr-2" />
                                Thank you! Your Exercise has been submitted successfully!
                              </p>
                              )}
                        </section>
                    </div>

                    {/* Conclusion */}
                    <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                            <FaCheckCircle className="mr-2 text-indigo-600" />
                            📌 Conclusion
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            JSX is an essential part of React, making UI development simpler and more readable. By understanding JSX and how it works with JavaScript expressions, you can create dynamic and interactive components with ease.
                        </p>

                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaList className="mr-2 text-indigo-600" />
                            🔑 Key Takeaways
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4 space-y-2">
                            <li>JSX allows writing HTML-like syntax inside JavaScript.</li>
                            <li>JSX must be enclosed in a single parent element.</li>
                            <li>Curly braces <code>{`{}`}</code> allow embedding JavaScript expressions.</li>
                            <li>React components can be functional or class-based.</li>
                            <li>JSX compiles to <code>React.createElement()</code> under the hood.</li>
                        </ul>

                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Now that you have a solid understanding of JSX, you’re ready to explore more advanced React topics like state, props, and component lifecycle. Keep experimenting and building more components!
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Date1;