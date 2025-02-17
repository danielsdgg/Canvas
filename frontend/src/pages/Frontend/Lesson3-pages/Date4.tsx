import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Date4: React.FC = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddItem = () => {
        if (inputValue.trim()) {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };

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
                    Lists, Keys & Forms
                </h1>

                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">📌 Understanding Lists, Keys & Forms in React</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        React simplifies the process of handling **lists, keys, and forms**. Lists help in rendering multiple elements dynamically, keys optimize re-rendering, and forms manage user input efficiently.
                    </p>
                </section>

                {/* 📖 Introduction to Key Concepts */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">📖 Key Concepts</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        To effectively manage dynamic content and user input in React, you need to understand how to use `.map()`, pass events into functions, and prevent default behavior in form submissions. Let's explore each of these concepts in detail.
                    </p>

                    {/* 🔄 The .map() Method */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">🔄 The .map() Method</h3>
                        <p className="text-gray-700">
                            The `.map()` function is used to iterate over an array and transform each item into JSX elements, which is extremely useful when rendering lists of data. This method returns a new array based on the results of applying a function to each item in the array.
                        </p>
                        <p className="text-gray-700 mt-2">
                            Example: Rendering a list of items dynamically:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-gray-800 shadow-md">
                            {`items.map((item, index) => (
    <li key={index}>{item}</li>
));`}
                        </pre>
                        <p className="text-gray-700 mt-2">
                            **Key Point:** Each item in a list must have a unique "key" prop to help React identify which items have changed, been added, or removed.
                        </p>
                    </div>

                    {/* 🏗 Event Passing in Functions */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">🏗 Event Passing in Functions</h3>
                        <p className="text-gray-700">
                            When handling events in React, it's important to pass the **event object** into the function that handles the event. This gives you access to information about the event, such as user input or other details.
                        </p>
                        <p className="text-gray-700 mt-2">
                            Example: Handling user input with `onChange`:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-gray-800 shadow-md">
                            {`const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
};`}
                        </pre>
                        <p className="text-gray-700 mt-2">
                            In the example above, the **event object** provides access to the input field's current value via `event.target.value`.
                        </p>
                    </div>

                    {/* 🚫 e.preventDefault() */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">🚫 e.preventDefault()</h3>
                        <p className="text-gray-700">
                            The `event.preventDefault()` method is crucial when dealing with forms. It prevents the default behavior associated with an event from occurring. For example, in form submissions, calling this method will prevent the form from refreshing the page, which is the default behavior.
                        </p>
                        <p className="text-gray-700 mt-2">
                            Example: Handling form submission without page reload:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-gray-800 shadow-md">
                            {`const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Form submitted!');
};`}
                        </pre>
                        <p className="text-gray-700 mt-2">
                            Without `preventDefault()`, the form would reload the page after submission, which we don't want in a single-page application (SPA).
                        </p>
                    </div>
                </section>

                {/* Lists & Keys */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">📋 Working with Lists & Keys</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Rendering lists in React is done using the `.map()` method. Each item in the list should have a **unique key** to help React efficiently update the UI.
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-gray-800 shadow-md mb-4">
                        {`const items = ['Apple', 'Banana', 'Orange'];

return (
    <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);`}
                    </pre>
                </section>

                {/* Forms in React */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">📝 Handling Forms in React</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Forms in React are controlled components, meaning their values are managed via state.
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-gray-800 shadow-md mb-4">
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
                </section>

                {/* 🚀 Practical Exercise */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">🚀 Practical</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Try this interactive exercise! Enter a task in the input box below and click "Add Item" to see it added to the list dynamically.
                    </p>

                    {/* Interactive Exercise */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Enter an item..."
                            className="p-2 border rounded-md w-full mb-4"
                        />
                        <button
                            onClick={handleAddItem}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
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
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Now try creating something similar to the above exercise for good practices..!
                    </p>
                </section>

                {/* Further Resources */}
                <section className="mb-12">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">📚 Further Resources</h2>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li>
                            <a href="https://react.dev/learn/rendering-lists" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                React Docs - Rendering Lists
                            </a>
                        </li>
                        <li>
                            <a href="https://react.dev/learn/forms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                React Docs - Forms in React
                            </a>
                        </li>
                        <li>
                            <a href="https://developer.mozilla.org/en-US/docs/Learn/Forms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                MDN Web Docs - Forms
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=IKj22WjP5kY" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                YouTube: Handling Forms in React (Video Tutorial)
                            </a>
                        </li>
                    </ul>
                </section>
            </section>
        </>
    );
};

export default Date4;
