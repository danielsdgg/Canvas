import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaLink, FaEdit, FaCheckCircle, FaRocket } from "react-icons/fa";

const Date9: React.FC = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState<string>("");

    // Example function with TypeScript types
    const greetUser = (name: string): string => {
        return `Hello, ${name}! Welcome to React with TypeScript.`;
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
                <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">React with TypeScript (TSX)</h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        Why Use TypeScript with React?
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        TypeScript is a powerful superset of JavaScript that introduces static typing, improving code quality, maintainability, and developer productivity. When used with React, TypeScript helps catch errors early and enhances code readability.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                        By adding type safety to React projects, TypeScript reduces runtime errors, improves tooling support (e.g., IntelliSense), and makes large-scale applications easier to manage. It’s widely adopted in the industry, with companies like Microsoft, Airbnb, and Slack using it in their React stacks.
                    </p>
                </section>

                {/* Benefits of TypeScript in React */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        Key Benefits of TypeScript in React
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li>
                            <span className="font-semibold">Static Typing:</span> Detects errors during development instead of runtime.
                        </li>
                        <li>
                            <span className="font-semibold">Better Code Completion:</span> Helps with auto-suggestions and IntelliSense.
                        </li>
                        <li>
                            <span className="font-semibold">Improved Documentation:</span> Clearly defines expected data structures.
                        </li>
                        <li>
                            <span className="font-semibold">Enhanced Refactoring:</span> Makes it easier to update code safely.
                        </li>
                    </ul>

                    {/* Additional Subtopic: Why TypeScript Matters */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Why TypeScript Matters
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        TypeScript’s benefits extend beyond error prevention:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li><strong>Scalability:</strong> Ensures consistency in large codebases.</li>
                        <li><strong>Team Collaboration:</strong> Types act as self-documenting code, aiding team understanding.</li>
                        <li><strong>Integration:</strong> Works seamlessly with modern libraries and frameworks.</li>
                    </ul>
                </section>

                {/* TypeScript Basics for React */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaList className="mr-2 text-indigo-600" />
                        TypeScript Basics in React
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li>
                            <span className="font-semibold">Type Annotations:</span> Explicitly defining variable types.
                        </li>
                        <li>
                            <span className="font-semibold">Interfaces:</span> Defining the shape of objects and components.
                        </li>
                        <li>
                            <span className="font-semibold">Props & State:</span> Adding type safety to component props and state.
                        </li>
                        <li>
                            <span className="font-semibold">Hooks with TypeScript:</span> Ensuring proper types with useState, useEffect, etc.
                        </li>
                    </ul>

                    {/* Additional Subtopic: Typing Common Patterns */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Typing Common Patterns
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Here are examples of typing common React patterns:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                        {`// Event Handler
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
};

// Array of Objects
interface Item {
    id: number;
    name: string;
}
const items: Item[] = [{ id: 1, name: "Item 1" }];

// Optional Props
interface CardProps {
    title: string;
    subtitle?: string;
}
const Card: React.FC<CardProps> = ({ title, subtitle }) => (
    <div>{title} {subtitle}</div>
);`}
                    </pre>
                </section>

                {/* Code Example */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Code Example: TypeScript in a React Component
                    </h2>
                    <pre className="bg-gray-800 text-white text-sm sm:text-base p-4 rounded-lg shadow-md overflow-x-auto">
                        <code>
                            {`import React, { useState } from 'react';

interface UserProps {
  name: string;
}

const Welcome: React.FC<UserProps> = ({ name }) => {
  return <h2>Welcome, {name}!</h2>;
};

const App: React.FC = () => {
  const [user, setUser] = useState<string>('Daniel');

  return <Welcome name={user} />;
};

export default App;`}
                        </code>
                    </pre>

                    {/* Additional Subtopic: Advanced Typing */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Advanced Typing with TSX
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        TypeScript supports advanced patterns like generics and union types:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                        {`// Generics
function List<T>({ items }: { items: T[] }) {
    return <ul>{items.map((item, i) => <li key={i}>{String(item)}</li>)}</ul>;
}

// Union Types
type Status = 'loading' | 'success' | 'error';
const [status, setStatus] = useState<Status>('loading');

// Type Assertions
const data = { id: "1" } as const;`}
                    </pre>
                </section>

                {/* Practical Exercise */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaRocket className="mr-2 text-indigo-600" />
                        Practical Exercise: Build a Typed Counter
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                        Create a simple counter application using React with TypeScript. Below is a starter code with errors. Your task is to fix the type issues and enhance it with additional features.
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                        <code>
                            {`import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Missing type
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;`}
                        </code>
                    </pre>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3">
                        💡 <strong>Tasks:</strong>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li>Fix the missing type for <code>useState</code>.</li>
                        <li>Add an interface for optional props (e.g., <code>initialCount</code>).</li>
                        <li>Implement a reset button with proper typing.</li>
                        <li>Style it using Tailwind CSS.</li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3">
                        💡 <strong>Solution Hint:</strong> Use <code>number</code> for <code>useState</code>, define a props interface, and ensure event handlers are typed correctly.
                    </p>
                </section>

                {/* Interactive Message */}
                <div className="mt-6 flex flex-col items-center">
                    <button
                        onClick={() => setMessage(greetUser("Daniel"))}
                        className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-lg hover:bg-indigo-600 transition-all duration-300"
                    >
                        Click to See a TypeScript Greeting
                    </button>
                    {message && (
                        <p className="mt-4 p-3 bg-green-200 text-green-800 rounded-lg shadow">
                            {message}
                        </p>
                    )}
                </div>

                {/* Conclusion */}
                <section className="mt-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        Conclusion
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        React with TypeScript provides a powerful way to build scalable, error-free applications. By using TypeScript's type safety, you can prevent common runtime errors and improve code maintainability. Start by adding types to your props, state, and functions, and gradually refactor your code to be fully type-safe!
                    </p>
                </section>

                {/* Resources for Further Study */}
                <section className="mt-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        Resources for Further Study
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Explore these resources to deepen your understanding of React with TypeScript:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li>
                            <a
                                href="https://react-typescript-cheatsheet.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                React + TypeScript Cheatsheet
                            </a> – A comprehensive guide to TypeScript in React.
                        </li>
                        <li>
                            <a
                                href="https://www.typescriptlang.org/docs/handbook/react.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                TypeScript Docs - Using TypeScript with React
                            </a> – Official documentation on TSX integration.
                        </li>
                        <li>
                            <a
                                href="https://react.dev/learn/typescript"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                React Docs - TypeScript
                            </a> – React’s official TypeScript guide.
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/watch?v=Z5iWr6Srsj8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                YouTube: React with TypeScript Tutorial
                            </a> – A video walkthrough for beginners.
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default Date9;