import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Dayy11: React.FC = () => {
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
                <h1 className="uppercase text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
                    Introduction to Object Orientation and Context in JavaScript
                </h1>

                {/* Introduction Section */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">📌 What is Object-Oriented Programming (OOP)?</h2>
                    <p className="text-gray-600 mt-2">
                        Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to 
                        structure and organize code. JavaScript, while originally a prototype-based language, 
                        supports OOP through **classes**, **constructors**, and **prototypes**.
                    </p>
                    <p className="text-gray-600 mt-2">
                        In JavaScript, objects allow us to model real-world entities using properties (data) and methods (behavior).
                        OOP makes code **more reusable, scalable, and maintainable**.
                    </p>
                </section>

                {/* Core OOP Concepts Section */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">🔹 Core OOP Concepts in JavaScript</h2>
                    <ul className="list-disc ml-6 text-gray-600">
                        <li><b>Classes:</b> Templates for creating objects.</li>
                        <li><b>Objects:</b> Instances of a class.</li>
                        <li><b>Encapsulation:</b> Bundling data and methods together.</li>
                        <li><b>Inheritance:</b> Creating new classes from existing ones.</li>
                        <li><b>Polymorphism:</b> Methods behaving differently in different contexts.</li>
                        <li><b>Abstraction:</b> Hiding implementation details and showing only the necessary parts.</li>
                    </ul>
                </section>

                {/* Example of OOP in JavaScript */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">📌 Example: Using Classes in JavaScript</h2>
                    <p className="text-gray-600 mt-2">Let's see how OOP works in JavaScript using ES6 classes:</p>

                    <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto mt-2">
                        <code>
{`class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(\`\${this.name} says \${this.sound}!\`);
    }
}

// Creating an instance
const dog = new Animal("Dog", "Woof");
dog.makeSound();  // Output: Dog says Woof!`}
                        </code>
                    </pre>

                    <p className="text-gray-600 mt-2">
                        Here, **Animal** is a class, and we create an instance (**dog**) with a `name` and a `sound`.
                    </p>
                </section>

                {/* Understanding 'this' Keyword */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">🔹 Understanding <code>this</code> in JavaScript</h2>
                    <p className="text-gray-600 mt-2">
                        The <code>this</code> keyword in JavaScript refers to the object it belongs to.
                        Its value depends on **where and how** a function is called.
                    </p>

                    <h3 className="text-lg font-semibold text-blue-600 mt-4">Different Contexts of <code>this</code></h3>
                    <ul className="list-disc ml-6 text-gray-600">
                        <li>**Global Context:** In the global scope, <code>this</code> refers to the global object (`window` in browsers, `global` in Node.js).</li>
                        <li>**Object Methods:** Inside an object method, <code>this</code> refers to the object itself.</li>
                        <li>**Arrow Functions:** Arrow functions do not have their own `this`; they inherit `this` from the surrounding scope.</li>
                        <li>**Event Listeners:** In an event handler, <code>this</code> refers to the element that triggered the event.</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-blue-600 mt-4">Example of `this` in Different Contexts</h3>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto mt-2">
                        <code>
{`const person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet();  // Output: Hello, Alice

const greetFunction = person.greet;
greetFunction();  // Output: Hello, undefined (this is lost)`}  
                        </code>
                    </pre>

                    <p className="text-gray-600 mt-2">
                        To avoid losing `this`, we can use **bind()**, **call()**, or **arrow functions**.
                    </p>
                </section>

                {/* Best Practices */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">✅ Best Practices in Object-Oriented JavaScript</h2>
                    <ul className="list-disc ml-6 text-gray-600">
                        <li>Use **ES6 Classes** instead of constructor functions.</li>
                        <li>Use **getter and setter methods** to control access to properties.</li>
                        <li>Minimize global variables and encapsulate logic inside classes.</li>
                        <li>Use **arrow functions** to avoid issues with `this` in callbacks.</li>
                        <li>Follow **Single Responsibility Principle (SRP)** – keep classes small and focused.</li>
                    </ul>
                </section>

                {/* Conclusion Section */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 flex items-center">
                        🎯 Final Words of Encouragement
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Understanding Object-Oriented Programming and **context (`this`)** is essential in JavaScript. These concepts 
                        form the backbone of frameworks like **React, Angular, and Vue**. Mastering them will make you a **better developer**.
                    </p>

                    <h3 className="text-lg font-semibold text-blue-600 mt-4">📚 Recommended Resources</h3>
                    <ul className="list-disc ml-6 text-gray-600">
                        <li><b>Eloquent JavaScript</b> – by Marijn Haverbeke.</li>
                        <li><b>You Don’t Know JS</b> – by Kyle Simpson.</li>
                        <li><b>MDN Web Docs</b> – <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="text-blue-600">JavaScript Guide</a>.</li>
                    </ul>

                    <p className="text-gray-600 mt-2">
                        Soon, we will **dive into React**, one of the most popular JavaScript libraries. 
                        Stay curious and keep coding! 🚀
                    </p>
                </section>
            </section>
        </>
    );
};

export default Dayy11;
