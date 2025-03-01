import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaLink, FaEdit,  FaRocket } from "react-icons/fa";

const Date4: React.FC = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddItem = () => {
        if (inputValue.trim()) {
            setItems([...items, inputValue]);
            setInputValue("");
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
                    <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Lists, Keys & Forms</h1>
                </div>

                <div className="p-4 sm:p-6">
                    {/* Introduction */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaEdit className="mr-2 text-indigo-600" />
                            📌 Understanding Lists, Keys & Forms in React
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            React simplifies the process of handling <strong>lists, keys, and forms</strong>. Lists help in rendering multiple elements dynamically, keys optimize re-rendering, and forms manage user input efficiently.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            These concepts are foundational for building interactive and data-driven applications. Lists allow you to display collections of data, keys ensure React tracks changes accurately, and forms enable user interaction through controlled inputs. This lesson dives into each topic with practical examples to solidify your understanding.
                        </p>
                    </section>

                    {/* 📖 Introduction to Key Concepts */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaList className="mr-2 text-indigo-600" />
                            📖 Key Concepts
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            To effectively manage dynamic content and user input in React, you need to understand how to use <code>.map()</code>, pass events into functions, and prevent default behavior in form submissions. Let's explore each of these concepts in detail.
                        </p>

                        {/* 🔄 The .map() Method */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                🔄 The .map() Method
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                The <code>.map()</code> function is used to iterate over an array and transform each item into JSX elements, which is extremely useful when rendering lists of data. This method returns a new array based on the results of applying a function to each item in the array.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mt-2 leading-relaxed">
                                Example: Rendering a list of items dynamically:
                            </p>
                            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                                {`items.map((item, index) => (
    <li key={index}>{item}</li>
));`}
                            </pre>
                            <p className="text-gray-700 text-sm sm:text-base mt-2 leading-relaxed">
                                <strong>Key Point:</strong> Each item in a list must have a unique "key" prop to help React identify which items have changed, been added, or removed.
                            </p>
                        </div>

                        {/* 🏗 Event Passing in Functions */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                🏗 Event Passing in Functions
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                When handling events in React, it’s important to pass the <strong>event object</strong> into the function that handles the event. This gives you access to information about the event, such as user input or other details.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mt-2 leading-relaxed">
                                Example: Handling user input with `onChange`:
                            </p>
                            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                                {`const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
};`}
                            </pre>
                            <p className="text-gray-700 text-sm sm:text-base mt-2 leading-relaxed">
                                In the example above, the <strong>event object</strong> provides access to the input field’s current value via <code>event.target.value</code>.
                            </p>
                        </div>

                        {/* 🚫 e.preventDefault() */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                🚫 e.preventDefault()
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                The <code>event.preventDefault()</code> method is crucial when dealing with forms. It prevents the default behavior associated with an event from occurring. For example, in form submissions, calling this method will prevent the form from refreshing the page, which is the default behavior.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mt-2 leading-relaxed">
                                Example: Handling form submission without page reload:
                            </p>
                            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                                {`const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Form submitted!');
};`}
                            </pre>
                            <p className="text-gray-700 text-sm sm:text-base mt-2 leading-relaxed">
                                Without <code>preventDefault()</code>, the form would reload the page after submission, which we don’t want in a single-page application (SPA).
                            </p>
                        </div>
                    </section>

                    {/* Lists & Keys */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaList className="mr-2 text-indigo-600" />
                            📋 Working with Lists & Keys
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Rendering lists in React is done using the <code>.map()</code> method. Each item in the list should have a <strong>unique key</strong> to help React efficiently update the UI.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`const items = ['Apple', 'Banana', 'Orange'];

return (
    <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);`}
                        </pre>

                        {/* Additional Content: Keys in Depth */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Why Keys Matter
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Keys help React identify which items in a list have changed, been added, or removed. Using the index as a key (as shown above) works but isn’t ideal for lists that might reorder or change dynamically. A unique identifier (e.g., an ID) is preferred:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build project" }
];

return (
    <ul>
        {todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
        ))}
    </ul>
);`}
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            <strong>Note:</strong> Avoid using random keys (e.g., `Math.random()`) as they defeat the purpose of efficient updates.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Filtering and Sorting Lists
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            You can combine <code>.map()</code> with array methods like <code>.filter()</code> or <code>.sort()</code> to dynamically manage list content:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`const numbers = [1, 2, 3, 4, 5];

return (
    <ul>
        {numbers.filter(num => num % 2 === 0).map((num, index) => (
            <li key={index}>{num}</li>
        ))}
    </ul>
); // Renders: 2, 4`}
                        </pre>
                    </section>

                    {/* Forms in React */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            📝 Handling Forms in React
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Forms in React are controlled components, meaning their values are managed via state.
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`const [name, setName] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted: ' + name);
};

return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
        />
        <button type="submit">Submit</button>
    </form>
);`}
                        </pre>

                        {/* Additional Content: Form Handling Techniques */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Controlled vs. Uncontrolled Components
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Controlled components (like above) use state to manage input values. Uncontrolled components use refs instead, offering an alternative for simpler forms:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`const inputRef = useRef(null);

const handleSubmit = (event) => {
    event.preventDefault();
    alert('Submitted: ' + inputRef.current.value);
};

return (
    <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
    </form>
);`}
                        </pre>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Handling Multiple Inputs
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            For forms with multiple fields, use an object in state to manage all inputs efficiently:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`const [formData, setFormData] = useState({ name: '', email: '' });

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
};

return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
        />
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
        />
        <button type="submit">Submit</button>
    </form>
);`}
                        </pre>
                    </section>

                    {/* 🚀 Practical Exercise */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaRocket className="mr-2 text-indigo-600" />
                            🚀 Practical
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Try this interactive exercise! Enter a task in the input box below and click "Add Item" to see it added to the list dynamically.
                        </p>

                        {/* Interactive Exercise */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Enter an item..."
                                className="p-2 border rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button
                                onClick={handleAddItem}
                                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
                            >
                                Add Item
                            </button>

                            {/* Render List */}
                            <ul className="mt-4 list-disc list-inside">
                                {items.map((item, index) => (
                                    <li key={index} className="text-gray-800">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Now try creating something similar to the above exercise for good practices..!
                        </p>
                    </section>

                    {/* Further Resources */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaLink className="mr-2 text-indigo-600" />
                            📚 Further Resources
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                            <li>
                                <a
                                    href="https://react.dev/learn/rendering-lists"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    React Docs - Rendering Lists
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://react.dev/learn/forms"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    React Docs - Forms in React
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Learn/Forms"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    MDN Web Docs - Forms
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/watch?v=IKj22WjP5kY"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    YouTube: Handling Forms in React (Video Tutorial)
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Date4;