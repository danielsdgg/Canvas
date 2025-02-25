import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Dey5: React.FC = () => {
    const navigate = useNavigate();
const { userData, userToken } = useAuth();

  // State for file upload
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    assignmentId: 1,
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
                <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
                    Object-Oriented Programming (OOP) in Python
                </h1>

                {/* Introduction */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Introduction to OOP</h2>
                    <p className="text-gray-700">
                        Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects and classes.
                        It helps in structuring complex software efficiently by using principles like **encapsulation, inheritance, and polymorphism**.
                    </p>
                </div>

                {/* Classes and Objects */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Classes and Objects</h2>
                    <p className="text-gray-700">
                        A **class** is a blueprint for creating objects, while an **object** is an instance of a class.
                    </p>
                    <pre className="bg-gray-800 p-4 rounded-md text-sm text-white mt-2">
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

                {/* Inheritance */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Inheritance</h2>
                    <p className="text-gray-700">
                        Inheritance allows a class to inherit properties and methods from another class.
                    </p>
                    <pre className="bg-gray-800 p-4 rounded-md text-sm text-white mt-2">
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

                {/* Polymorphism */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Polymorphism</h2>
                    <p className="text-gray-700">
                        Polymorphism allows different classes to be treated as instances of the same class through method overriding.
                    </p>
                    <pre className="bg-gray-800 p-4 rounded-md text-sm text-white mt-2">
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

                {/* Encapsulation */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Encapsulation</h2>
                    <p className="text-gray-700">
                        Encapsulation restricts direct access to variables and allows controlled modification.
                    </p>
                    <pre className="bg-gray-800 p-4 rounded-md text-sm text-white mt-2">
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

                <div className="mb-6">
                {/* Title */}
                <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
                    Practical Exercise: Python Fundamentals
                </h1>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                    This exercise will help you apply your knowledge of Python <strong>variables, conditional statements, loops, functions, and modules</strong> in a structured, real-world problem-solving approach.
                </p>

                {/* Instructions */}
                <h2 className="text-xl font-bold text-gray-800 mb-4">📝 Instructions:</h2>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                    <li>Take user input for a student's name and scores in three subjects.</li>
                    <li>Calculate the <strong>average score</strong> and determine the grade.</li>
                    <li>Use functions to organize the logic for better readability.</li>
                    <li>Use loops to allow multiple students to be graded.</li>
                    <li>Utilize a separate module to handle grading logic.</li>
                </ul>

                {/* Steps Breakdown */}
                <h2 className="text-xl font-bold text-gray-800 mb-4">🚀 Task Breakdown:</h2>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700">1️⃣ Define Variables</h3>
                    <p className="text-gray-700">Create variables for student name and scores, using <code className="bg-gray-200 px-1 rounded">input()</code> to collect data.</p>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700">2️⃣ Implement Conditions to Assign Grades</h3>
                    <p className="text-gray-700">Use <code className="bg-gray-200 px-1 rounded">if-elif-else</code> conditions to determine grades based on the average score.</p>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700">3️⃣ Use Functions</h3>
                    <p className="text-gray-700">Define <code className="bg-gray-200 px-1 rounded">calculate_grade()</code> and <code className="bg-gray-200 px-1 rounded">get_student_details()</code> functions for modularity.</p>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700">4️⃣ Use a Loop for Multiple Students</h3>
                    <p className="text-gray-700">Allow multiple students to be graded using a <code className="bg-gray-200 px-1 rounded">while</code> loop.</p>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700">5️⃣ Use a Separate Module</h3>
                    <p className="text-gray-700">Create a module to handle grading logic separately.</p>
                </div>

                {/* Expected Output */}
                <h2 className="text-xl font-bold text-gray-800 mb-4">🖥️ Expected Output:</h2>
                <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-6">
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

                {/* Code Implementation */}
                <h2 className="text-xl font-bold text-gray-800 mb-4">💻 Code Implementation:</h2>

                {/* Module Code */}
                <h3 className="text-lg font-semibold text-gray-700 mb-2">1️⃣ Create the Module (grading_module.py)</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-6">
                    def calculate_grade(average):{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;if average &gt;= 90:{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "A"{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;elif average &gt;= 80:{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "B"{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;elif average &gt;= 70:{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "C"{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;elif average &gt;= 60:{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "D"{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;else:{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "F"
                </pre>

                {/* Main Script Code */}
                <h3 className="text-lg font-semibold text-gray-700 mb-2">2️⃣ Create the Main Script (grading_system.py)</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-6">
                    import grading_module{"\n"}{"\n"}
                    def get_student_details():{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;name = input("Enter student name: "){"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;math = float(input("Enter Math score: ")){"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;science = float(input("Enter Science score: ")){"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;english = float(input("Enter English score: ")){"\n"}{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;average = (math + science + english) / 3{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;grade = grading_module.calculate_grade(average){"\n"}{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;print("\nStudent Name:", name){"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;print("Average Score:", round(average, 2)){"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;print("Grade:", grade){"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;print("-" * 30){"\n"}{"\n"}
                    while True:{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;get_student_details(){"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;if input("Do you want to enter another student? (yes/no): ").strip().lower() != "yes":{"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break
                </pre>
                <p className="text-gray-700 mb-2">
                    Once you complete the above exercise, create a repository link for your work and paste your url below.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                        name = 'fileUrl'
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={6}
                        placeholder="Paste your github link"
                        value={form.fileUrl}
                        onChange={handleFileChange}
                    />
                    <button 
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
                    >
                        Submit Exercise
                    </button>
                </form>
                {submitted && (
                    <p className="text-green-600 font-medium">Your exercise has been submitted successfully!</p>
                )}

                {/* Bonus Challenge */}
                <h2 className="text-xl font-bold text-gray-800 mt-2 mb-4">📢 Bonus Challenge:</h2>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>Store student records in a list and display all scores at the end.</li>
                    <li>Calculate class statistics (highest score, lowest score, average).</li>
                    <li>Use dictionaries instead of multiple variables.</li>
                </ul>
                </div>


                {/* Conclusion */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Conclusion</h2>
                    <p className="text-gray-700">
                        OOP in Python enhances **code reusability, organization, and maintainability**. By understanding
                        **classes, objects, inheritance, polymorphism, and encapsulation**, you can write efficient and
                        scalable Python programs.
                    </p>
                </div>

                {/* Further Resources */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Further Resources</h2>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>
                            <a href="https://realpython.com/python3-object-oriented-programming/" 
                               className="text-blue-600 hover:underline" target="_blank" rel='noreferrer'>
                               Real Python - OOP in Python
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.python.org/3/tutorial/classes.html" 
                               className="text-blue-600 hover:underline" target="_blank" rel='noreferrer'>
                               Python Official Documentation - Classes
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Dey5;
