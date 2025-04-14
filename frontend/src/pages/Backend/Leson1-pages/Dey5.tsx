import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Dey5: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();

    // State for file upload
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        assignmentId: 21,
        userId: userData?.userDetails.id, // Ensuring a valid initial state
        fileUrl: "",
    });

    // Handle file selection
    const handleFileChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        console.log("Form Data:", form);
        // console.log("User Token:", userToken);
    
        if (!userToken) {
            alert("Authentication error. Please log in again.");
            return;
        }
    
        try {
            const response = await fetch("http://localhost:8080/api/v1/assignments/submit", {
                method: "POST",
                headers: { 
                    'Authorization': `Bearer ${userToken}`,
                    'Content-Type': 'application/json' 
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
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-center">
                    Object-Oriented Programming (OOP) in Python
                </h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        Introduction to OOP
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects and classes.
                        It helps in structuring complex software efficiently by using principles like <strong>encapsulation, inheritance, and polymorphism</strong>.
                    </p>
                </section>

                {/* Classes and Objects */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Classes and Objects
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        A <strong>class</strong> is a blueprint for creating objects, while an <strong>object</strong> is an instance of a class.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`# Example: Creating a class and an object
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def display_info(self):
        return f"Car: {self.brand} {self.model}"

# Creating an object
my_car = Car("Toyota", "Corolla")
print(my_car.display_info())  # Output: Car: Toyota Corolla`}
                            </code>
                        </pre>
                    </div>
                </section>

                {/* Inheritance */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Inheritance
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Inheritance allows a class to inherit properties and methods from another class.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`# Example: Inheritance
class ElectricCar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(brand, model)
        self.battery_size = battery_size

    def battery_info(self):
        return f"Battery size: {self.battery_size} kWh"

# Creating an object
my_tesla = ElectricCar("Tesla", "Model S", 100)
print(my_tesla.display_info())  # Output: Car: Tesla Model S
print(my_tesla.battery_info())  # Output: Battery size: 100 kWh`}
                            </code>
                        </pre>
                    </div>
                </section>

                {/* Polymorphism */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Polymorphism
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Polymorphism allows different classes to be treated as instances of the same class through method overriding.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`# Example: Polymorphism
class Animal:
    def make_sound(self):
        return "Some sound"

class Dog(Animal):
    def make_sound(self):
        return "Bark"

class Cat(Animal):
    def make_sound(self):
        return "Meow"

animals = [Dog(), Cat()]
for animal in animals:
    print(animal.make_sound())  # Output: Bark Meow`}
                            </code>
                        </pre>
                    </div>
                </section>

                {/* Encapsulation */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Encapsulation
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        Encapsulation restricts direct access to variables and allows controlled modification.
                    </p>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            <code>
{`# Example: Encapsulation
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private variable

    def deposit(self, amount):
        self.__balance += amount
        return self.__balance

    def get_balance(self):
        return self.__balance

# Creating an object
account = BankAccount(1000)
print(account.get_balance())  # Output: 1000
account.deposit(500)
print(account.get_balance())  # Output: 1500`}
                            </code>
                        </pre>
                    </div>
                </section>

                {/* Practical Exercise */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center justify-center mb-4">
                        <FaLaptopCode className="mr-3 text-2xl" />
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-center">
                            Practical Exercise: Python Fundamentals
                        </h1>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                        This exercise will help you apply your knowledge of Python <strong>variables, conditional statements, loops, functions, and modules</strong> in a structured, real-world problem-solving approach.
                    </p>

                    {/* Instructions */}
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        📝 Instructions:
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 space-y-2">
                        <li>Take user input for a student's name and scores in three subjects.</li>
                        <li>Calculate the <strong>average score</strong> and determine the grade.</li>
                        <li>Use functions to organize the logic for better readability.</li>
                        <li>Use loops to allow multiple students to be graded.</li>
                        <li>Utilize a separate module to handle grading logic.</li>
                    </ul>

                    {/* Steps Breakdown */}
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        🚀 Task Breakdown:
                    </h2>
                    <div className="space-y-6">
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">1️⃣ Define Variables</h3>
                            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                Create variables for student name and scores, using <code className="bg-gray-800 text-white px-1 py-0.5 rounded">input()</code> to collect data.
                            </p>
                        </div>
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">2️⃣ Implement Conditions to Assign Grades</h3>
                            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                Use <code className="bg-gray-800 text-white px-1 py-0.5 rounded">if-elif-else</code> conditions to determine grades based on the average score.
                            </p>
                        </div>
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">3️⃣ Use Functions</h3>
                            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                Define <code className="bg-gray-800 text-white px-1 py-0.5 rounded">calculate_grade()</code> and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">get_student_details()</code> functions for modularity.
                            </p>
                        </div>
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">4️⃣ Use a Loop for Multiple Students</h3>
                            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                Allow multiple students to be graded using a <code className="bg-gray-800 text-white px-1 py-0.5 rounded">while</code> loop.
                            </p>
                        </div>
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">5️⃣ Use a Separate Module</h3>
                            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                Create a module to handle grading logic separately.
                            </p>
                        </div>
                    </div>

                    {/* Expected Output */}
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center mt-6">
                        <FaCode className="mr-2 text-indigo-600" />
                        🖥️ Expected Output:
                    </h2>
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                            Enter student name: Alice
                            <br />
                            Enter Math score: 85
                            <br />
                            Enter Science score: 78
                            <br />
                            Enter English score: 90
                            <br /><br />
                            Student Name: Alice
                            <br />
                            Average Score: 84.33
                            <br />
                            Grade: B
                            <br /><br />
                            Do you want to enter another student? (yes/no): yes
                        </pre>
                    </div>

                    {/* Code Implementation */}
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        💻 Code Implementation:
                    </h2>
                    <div className="space-y-6">
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">1️⃣ Create the Module (grading_module.py)</h3>
                            <pre className="bg-indigo-800/50 p-4 rounded-md text-sm text-gray-100 overflow-x-auto font-mono">
    {`def calculate_grade(average):
    if average >= 90:
        return "A"
    elif average >= 80:
        return "B"
    elif average >= 70:
        return "C"
    elif average >= 60:
        return "D"
    else:
        return "F"
    `}
</pre>

                        </div>
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">2️⃣ Create the Main Script (grading_system.py)</h3>
                            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
                                import grading_module{"\n"}{"\n"}
                                def get_student_details():{"\n"}
                                    name = input("Enter student name: "){"\n"}
                                    math = float(input("Enter Math score: ")){"\n"}
                                    science = float(input("Enter Science score: ")){"\n"}
                                    english = float(input("Enter English score: ")){"\n"}{"\n"}
                                    average = (math + science + english) / 3{"\n"}
                                    grade = grading_module.calculate_grade(average){"\n"}{"\n"}
                                    print("\nStudent Name:", name){"\n"}
                                    print("Average Score:", round(average, 2)){"\n"}
                                    print("Grade:", grade){"\n"}
                                    print("-" * 30){"\n"}{"\n"}
                                while True:{"\n"}
                                    get_student_details(){"\n"}
                                    if input("Do you want to enter another student? (yes/no): ").strip().lower() != "yes":{"\n"}
                                        break
                            </pre>
                        </div>
                    </div>

                    {/* Form */}
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 mt-6">
                        Once you complete the above exercise, create a repository link for your work and paste your URL below.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <textarea
                            name="fileUrl"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 placeholder-gray-400"
                            rows={6}
                            placeholder="Paste your GitHub link"
                            value={form.fileUrl}
                            onChange={handleFileChange}
                        />
                        <button 
                            type="submit"
                            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-md"
                        >
                            Submit Exercise
                        </button>
                    </form>
                    {submitted && (
                        <p className="text-indigo-600 font-medium mt-4 flex items-center">
                            <FaCheckCircle className="mr-2" />
                            Your exercise has been submitted successfully!
                        </p>
                    )}

                    {/* Bonus Challenge */}
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        📢 Bonus Challenge:
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>Store student records in a list and display all scores at the end.</li>
                        <li>Calculate class statistics (highest score, lowest score, average).</li>
                        <li>Use dictionaries instead of multiple variables.</li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        Conclusion
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        OOP in Python enhances <strong>code reusability, organization, and maintainability</strong>. By understanding
                        <strong> classes, objects, inheritance, polymorphism, and encapsulation</strong>, you can write efficient and
                        scalable Python programs.
                    </p>
                </section>

                {/* Further Resources */}
                <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <FaLink className="mr-2 text-indigo-600" />
                        Further Resources
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
                        <li>
                            <a href="https://realpython.com/python3-object-oriented-programming/" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noreferrer">
                               Real Python - OOP in Python
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.python.org/3/tutorial/classes.html" 
                               className="text-indigo-600 hover:underline" 
                               target="_blank" 
                               rel="noreferrer">
                               Python Official Documentation - Classes
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    );
}

export default Dey5;