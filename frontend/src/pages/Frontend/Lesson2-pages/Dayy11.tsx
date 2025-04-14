import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaLink, FaEdit, FaCheckCircle, FaRocket } from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Dayy11: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();

    // State for file upload
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        assignmentId: 12,
        userId: userData?.userDetails.id ?? "", 
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
                    <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">
                        Introduction to Object Orientation and Context in JavaScript
                    </h1>
                </div>

                <div className="p-4 sm:p-6">
                    {/* Introduction Section */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaEdit className="mr-2 text-indigo-600" />
                            What is Object-Oriented Programming (OOP)?
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                            Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure and organize code. JavaScript, while originally a prototype-based language, supports OOP through <b>classes</b>, <b>constructors</b>, and <b>prototypes</b>. This approach models real-world entities with properties (data) and methods (behavior), making code more intuitive and aligned with how we think about systems.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            In JavaScript, OOP enhances <b>reusability</b>, <b>scalability</b>, and <b>maintainability</b>. It’s foundational for understanding modern frameworks like React, where components often resemble objects with state and behavior, and mastering it prepares you for complex application development.
                        </p>
                    </section>

                    {/* Core OOP Concepts Section */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaList className="mr-2 text-indigo-600" />
                            Core OOP Concepts in JavaScript
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Classes:</b> Templates for creating objects, defining their structure and behavior.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Objects:</b> Instances of a class, representing specific entities with data and methods.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Encapsulation:</b> Bundling data and methods together, often hiding internal details for controlled access.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Inheritance:</b> Creating new classes from existing ones, promoting code reuse.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Polymorphism:</b> Allowing methods to behave differently in different contexts or subclasses.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Abstraction:</b> Hiding implementation details and exposing only essential functionalities.
                            </li>
                        </ul>
                    </section>

                    {/* Example of OOP in JavaScript */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Example: Using Classes in JavaScript
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2">
                            Let's see how OOP works in JavaScript using ES6 classes:
                        </p>
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
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                            Here, <b>Animal</b> is a class, and we create an instance (<b>dog</b>) with a <code>name</code> and a <code>sound</code>. This demonstrates encapsulation and object instantiation.
                        </p>
                    </section>

                    {/* Understanding 'this' Keyword */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Understanding <code className="px-2">this</code> in JavaScript
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2">
                            The <code>this</code> keyword in JavaScript refers to the object it belongs to. Its value depends on <b>where and how</b> a function is called, making it a critical concept in OOP and context management.
                        </p>
                        <h3 className="text-lg font-semibold text-indigo-700 mt-4">Different Contexts of <code>this</code></h3>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Global Context:</b> In the global scope, <code>this</code> refers to the global object (<code>window</code> in browsers, <code>global</code> in Node.js).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Object Methods:</b> Inside an object method, <code>this</code> refers to the object itself.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Arrow Functions:</b> Arrow functions do not have their own <code>this</code>; they inherit <code>this</code> from the surrounding scope.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Event Listeners:</b> In an event handler, <code>this</code> refers to the element that triggered the event.
                            </li>
                        </ul>
                        <h3 className="text-lg font-semibold text-indigo-700 mt-4">Example of <code>this</code> in Different Contexts</h3>
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
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                            To avoid losing <code>this</code>, we can use <b>bind()</b>, <b>call()</b>, or <b>arrow functions</b>. For example, <code>person.greet.bind(person)()</code> ensures <code>this</code> remains the <code>person</code> object.
                        </p>
                    </section>

                    {/* Best Practices */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaCheckCircle className="mr-2 text-indigo-600" />
                            Best Practices in Object-Oriented JavaScript
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Use <b>ES6 Classes</b> instead of constructor functions for cleaner syntax and better readability.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Use <b>getter and setter methods</b> to control access to properties, enhancing encapsulation.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Minimize global variables and encapsulate logic inside classes to reduce namespace pollution.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Use <b>arrow functions</b> to avoid issues with <code>this</code> in callbacks, ensuring consistent context.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Follow <b>Single Responsibility Principle (SRP)</b> – keep classes small and focused on one task.
                            </li>
                        </ul>
                    </section>

                    {/* Practical Exercise */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaRocket className="mr-2 text-indigo-600" />
                            Practical Exercise: OOP & Context in JavaScript
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                            Build an interactive library management system to explore object-oriented programming and the use of <code>this</code> in JavaScript. This exercise will test your understanding of classes, inheritance, encapsulation, and context management.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
                            <li className="flex items-start">
                                <FaList className="mr-2 mt-1 text-indigo-600" />
                                Create a <b>Book</b> class with properties like <code>title</code>, <code>author</code>, and <code>isBorrowed</code>.
                            </li>
                            <li className="flex items-start">
                                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                                Add methods to <b>borrow</b> and <b>return</b> the book, using <code>this</code> to manage state.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Extend <b>Book</b> into a <b>LibraryBook</b> class that adds a <code>dueDate</code> property and an <code>isOverdue</code> method.
                            </li>
                            <li className="flex items-start">
                                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                                Create a <b>Library</b> class to manage a collection of books with methods to add books, list borrowed books, and count overdue books.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Use an arrow function in one method to demonstrate context binding differences with <code>this</code>.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Implement a simple UI with buttons to interact with the library (e.g., borrow/return books).
                            </li>
                            <li className="flex items-start">
                                <FaRocket className="mr-2 mt-1 text-indigo-600" />
                                (Bonus) Add a <b>Librarian</b> class that can override book status manually.
                            </li>
                        </ul>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 font-medium">
                            Expected Outcome:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
                            <li className="flex items-start">
                                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                                A functional library system with books that can be borrowed and returned via UI buttons.
                            </li>
                            <li className="flex items-start">
                                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                                Correct use of <code>this</code> to track book states, with arrow function context demonstrated.
                            </li>
                            <li className="flex items-start">
                                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                                Inheritance shown through <b>LibraryBook</b> extending <b>Book</b>.
                            </li>
                            <li className="flex items-start">
                                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                                A <b>Library</b> class managing a collection with dynamic updates.
                            </li>
                        </ul>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
                            Here’s a starter code to build upon:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto mt-2">
                            <code>
{`<!DOCTYPE html>
<html>
<head>
    <title>Library System</title>
    <style>
        .book { margin: 10px; padding: 10px; border: 1px solid #ccc; }
        .borrowed { background-color: #f0f0f0; }
        button { margin-left: 5px; background-color: #4b5e9e; color: white; padding: 5px 10px; border: none; cursor: pointer; }
        button:hover { background-color: #3b4a7e; }
    </style>
</head>
<body>
    <div id="library"></div>
    <script>
        class Book {
            constructor(title, author) {
                this.title = title;
                this.author = author;
                this.isBorrowed = false;
            }

            borrow() {
                if (!this.isBorrowed) {
                    this.isBorrowed = true;
                    console.log(\`\${this.title} has been borrowed.\`);
                } else {
                    console.log(\`\${this.title} is already borrowed.\`);
                }
            }

            returnBook = () => {
                if (this.isBorrowed) {
                    this.isBorrowed = false;
                    console.log(\`\${this.title} has been returned.\`);
                } else {
                    console.log(\`\${this.title} is not borrowed.\`);
                }
            };
        }

        class LibraryBook extends Book {
            constructor(title, author, dueDate) {
                super(title, author);
                this.dueDate = new Date(dueDate);
            }

            isOverdue() {
                const today = new Date();
                return this.isBorrowed && today > this.dueDate;
            }
        }

        class Library {
            constructor() {
                this.books = [];
            }

            addBook(book) {
                this.books.push(book);
                console.log(\`\${book.title} added to library.\`);
            }

            listBorrowedBooks() {
                return this.books.filter(book => book.isBorrowed);
            }

            countOverdueBooks() {
                return this.books.filter(book => book.isOverdue()).length;
            }

            render() {
                const libraryDiv = document.getElementById("library");
                libraryDiv.innerHTML = "";
                this.books.forEach(book => {
                    const div = document.createElement("div");
                    div.className = "book" + (book.isBorrowed ? " borrowed" : "");
                    div.innerHTML = \`\${book.title} by \${book.author} \${book instanceof LibraryBook && book.isOverdue() ? "(Overdue)" : ""}\`;
                    const borrowBtn = document.createElement("button");
                    borrowBtn.textContent = "Borrow";
                    borrowBtn.onclick = () => { book.borrow(); this.render(); };
                    const returnBtn = document.createElement("button");
                    returnBtn.textContent = "Return";
                    returnBtn.onclick = () => { book.returnBook(); this.render(); };
                    div.appendChild(borrowBtn);
                    div.appendChild(returnBtn);
                    libraryDiv.appendChild(div);
                });
                const overdueCount = document.createElement("p");
                overdueCount.textContent = \`Overdue Books: \${this.countOverdueBooks()}\`;
                libraryDiv.appendChild(overdueCount);
            }
        }

        // Test the system
        const library = new Library();
        const book1 = new Book("The Hobbit", "Tolkien");
        const book2 = new LibraryBook("1984", "Orwell", "2025-03-15");
        library.addBook(book1);
        library.addBook(book2);
        library.render();
    </script>
</body>
</html>`}
                            </code>
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2 italic">
                            Create a GitHub repository with this code, test it in a browser, and submit your link below after completing the task. Enhance it with features like a checkout limit or visual overdue indicators!
                        </p>
                    </section>

                    {/* GitHub Submission */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaLink className="mr-2 text-indigo-600" />
                            Submit Your Work
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
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
                    </section>

                    {/* Conclusion Section */}
                    <section className="mb-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaCheckCircle className="mr-2 text-indigo-600" />
                            Final Words of Encouragement
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2">
                            Understanding Object-Oriented Programming and <b>context (`this`)</b> is essential in JavaScript. These concepts form the backbone of frameworks like <b>React, Angular, and Vue</b>. Mastering them will make you a <b>better developer</b>.
                        </p>
                        <h3 className="text-lg font-semibold text-indigo-700 mt-4">📚 Recommended Resources</h3>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                            <li className="flex items-start">
                                <FaLink className="mr-2 mt-1 text-indigo-600" />
                                <b>Eloquent JavaScript</b> – by Marijn Haverbeke.
                            </li>
                            <li className="flex items-start">
                                <FaLink className="mr-2 mt-1 text-indigo-600" />
                                <b>You Don’t Know JS</b> – by Kyle Simpson.
                            </li>
                            <li className="flex items-start">
                                <FaLink className="mr-2 mt-1 text-indigo-600" />
                                <b>MDN Web Docs</b> –{" "}
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                    className="text-indigo-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    JavaScript Guide
                                </a>.
                            </li>
                        </ul>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                            Soon, we will <b>dive into React</b>, one of the most popular JavaScript libraries. Stay curious and keep coding! 🚀
                        </p>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Dayy11;