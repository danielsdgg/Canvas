import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Day11: React.FC = () => {
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
                
                <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
                    Comprehensive Guide to Tailwind CSS
                </h1>
                
                {/* What is Tailwind CSS? */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">What is Tailwind CSS?</h3>
                <p className="text-gray-800 mb-4 leading-relaxed">
                    Tailwind CSS is a utility-first CSS framework that allows you to rapidly build modern web interfaces.
                    Unlike traditional CSS frameworks like Bootstrap, Tailwind doesn’t provide predefined components. Instead, 
                    it provides low-level utility classes that let you style your elements directly in your markup.
                </p>

                {/* Installation Guide */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">Setting Up Tailwind CSS</h3>
                <p className="text-gray-800 mb-4 leading-relaxed">
                    You can install Tailwind CSS using npm, yarn, or via a CDN. Below are the most common setup methods.
                </p>
                
                {/* Installing via npm */}
                <h4 className="text-lg font-semibold text-gray-800 mb-2">1. Install Tailwind via npm</h4>
                <pre className="bg-gray-800 text-white p-4 rounded mb-4">
                    {`npm install -D tailwindcss
npx tailwindcss init`}
                </pre>
                
                {/* Configuring Tailwind */}
                <h4 className="text-lg font-semibold text-gray-800 mb-2">2. Configure the Tailwind CSS file</h4>
                <p className="text-gray-800 mb-4">Modify <code>tailwind.config.js</code> to include your source files:</p>
                <pre className="bg-gray-800 text-white p-4 rounded mb-4">
                    {`module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};`}
                </pre>
                
                {/* Adding Tailwind to CSS */}
                <h4 className="text-lg font-semibold text-gray-800 mb-2">3. Add Tailwind to your CSS file</h4>
                <p className="text-gray-800 mb-4">Include the following in your main CSS file (e.g., <code>index.css</code>):</p>
                <pre className="bg-gray-800 text-white p-4 rounded mb-4">
                    {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
                </pre>
                
                {/* Running the Development Server */}
                <h4 className="text-lg font-semibold text-gray-800 mb-2">4. Start your development server</h4>
                <pre className="bg-gray-800 text-white p-4 rounded mb-4">
                    {`npm run dev`}
                </pre>
                
                {/* Core Concepts */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">Core Concepts of Tailwind CSS</h3>
                <ul className="list-disc ml-6 mb-4 leading-relaxed">
                    <li><strong>Utility-First:</strong> Build designs using utility classes instead of writing custom CSS.</li>
                    <li><strong>Responsive Design:</strong> Tailwind provides responsive modifiers like <code>md:</code>, <code>lg:</code>, and <code>xl:</code>.</li>
                    <li><strong>Customization:</strong> Tailwind is fully customizable using its configuration file.</li>
                    <li><strong>State Variants:</strong> Add hover, focus, and active states easily using <code>hover:</code> and <code>focus:</code> prefixes.</li>
                </ul>

                <p className="text-gray-800 mb-6 leading-relaxed">
                    Once set up, you can use Tailwind classes directly in your HTML or JSX to style elements quickly and effectively.
                </p>
                
                {/* Example Usage */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">Example: Creating a Button</h3>
                <p className="text-gray-800 mb-4 leading-relaxed">
                    Below is an example of a button styled with Tailwind CSS:
                </p>
                <div className="bg-gray-100 p-4 rounded shadow-lg flex justify-center items-center text-gray-800">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-300">
                        Tailwind Button
                    </button>
                </div>

                {/* Advanced Topics */}
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Advanced Topics</h3>
                <ul className="list-disc ml-6 mb-4 leading-relaxed">
                    <li><strong>Dark Mode:</strong> Enable dark mode by adding <code>dark:</code> prefix to classes.</li>
                    <li><strong>Animations:</strong> Tailwind provides built-in animation classes such as <code>animate-spin</code> and <code>animate-bounce</code>.</li>
                    <li><strong>Customizing Theme:</strong> Extend Tailwind’s default theme by modifying <code>tailwind.config.js</code>.</li>
                    <li><strong>Optimizing for Production:</strong> Use <code>purge</code> in Tailwind to remove unused styles and reduce CSS file size.</li>
                </ul>

                {/* Additional Tailwind Information */}
        <h3 className="text-xl font-bold text-gray-800 text-center mb-4">Why Use Tailwind CSS?</h3>
        <p className="text-gray-800 mb-4 leading-relaxed">
          Tailwind CSS provides a highly customizable, utility-first approach to styling, making development faster and more consistent. Some key benefits include:
        </p>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li>Utility-first approach for rapid UI development.</li>
          <li>Highly customizable with the Tailwind configuration file.</li>
          <li>Responsive design made easy with predefined breakpoints.</li>
          <li>Optimized for performance with PurgeCSS integration.</li>
          <li>Large community support and growing ecosystem.</li>
        </ul>
        
        {/* Code Along Section */}
        <h3 className="text-xl font-bold text-gray-800 mb-4">Code Along: Styling a Card Component</h3>
        <p className="text-gray-800 mb-4 leading-relaxed">
          Let's create a simple card component using Tailwind CSS. Try the following code in your project:
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`<div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  <img className="w-full h-48 object-cover" src="https://via.placeholder.com/150" alt="Example" />
  <div className="p-4">
    <h2 className="text-xl font-bold text-gray-800">Tailwind CSS Card</h2>
    <p className="text-gray-600 mt-2">This is a simple card styled with Tailwind CSS.</p>
    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Learn More</button>
  </div>
</div>`}
        </pre>
        
        {/* Practical Exercise */}
        <h3 className="text-xl font-bold text-gray-800 mb-4">Practical Exercise</h3>
        <p className="text-gray-800 mb-4 leading-relaxed">
          Your task is to create a responsive navigation bar using Tailwind CSS. Ensure it includes a logo, menu items, and a call-to-action button. Once completed, submit your GitHub repository link below.
        </p>
        
        {/* GitHub Submission Input */}
        <div className="mt-6">
          <label className="block text-gray-800 font-semibold mb-2" htmlFor="github-link">Submit Your GitHub Repository Link:</label>
          <input id="github-link" type="url" placeholder="https://github.com/your-repo" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Submit</button>
        </div>
            </section>
        </>
    );
};

export default Day11;
