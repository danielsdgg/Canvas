import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Dey6: React.FC = () => {
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
        <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
          Object Inheritance in Python
        </h1>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            In Python, **object inheritance** is a fundamental concept of Object-Oriented Programming (OOP) that allows a class (child class) to inherit attributes and methods from another class (parent class). This helps in **code reuse, organization, and scalability**.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">1. Understanding Inheritance</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Inheritance allows a child class to use methods and attributes of a parent class. The child class can also **override** or **extend** functionalities from the parent class.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">Example: Basic Inheritance</h3>
          <pre className="bg-gray-800 p-4 rounded-md text-white">
            <code>
              {`class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "Some sound"

class Dog(Animal):  # Dog class inherits from Animal
    def speak(self):
        return "Bark"

dog = Dog("Buddy")
print(dog.name)   # Output: Buddy
print(dog.speak())  # Output: Bark
`}
            </code>
          </pre>

          <h2 className="text-xl font-semibold text-gray-800">2. Types of Inheritance in Python</h2>
          <ul className="list-disc pl-6">
            <li><strong>Single Inheritance:</strong> A child class inherits from a single parent class.</li>
            <li><strong>Multiple Inheritance:</strong> A child class inherits from more than one parent class.</li>
            <li><strong>Multilevel Inheritance:</strong> A class inherits from another class, which in turn inherits from another class.</li>
            <li><strong>Hierarchical Inheritance:</strong> Multiple classes inherit from a single parent class.</li>
            <li><strong>Hybrid Inheritance:</strong> A combination of more than one type of inheritance.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">Example: Multiple Inheritance</h3>
          <pre className="bg-gray-800 p-4 rounded-md text-white">
            <code>
              {`class Animal:
    def speak(self):
        return "Animal speaks"

class Dog:
    def speak(self):
        return "Dog barks"

class Labrador(Animal, Dog):
    pass

labrador = Labrador()
print(labrador.speak())  # Output: Animal speaks
`}
            </code>
          </pre>

          <h2 className="text-xl font-semibold text-gray-800">3. Subclass, Superclass, Child, Parent, and `super()`</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            - A **Superclass (Parent class)** is the class being inherited from.  
            - A **Subclass (Child class)** is the class that inherits from the superclass.  
            - The **`super()`** function is used to call a method from the parent class.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">Example: Using `super()`</h3>
          <pre className="bg-gray-800 p-4 rounded-md text-white">
            <code>
              {`class Parent:
    def __init__(self, name):
        self.name = name

class Child(Parent):
    def __init__(self, name, age):
        super().__init__(name)  # Calling Parent constructor
        self.age = age

child = Child("Alice", 12)
print(child.name, child.age)  # Output: Alice 12
`}
            </code>
          </pre>

          <h2 className="text-xl font-semibold text-gray-800">4. Composition vs. Inheritance</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            - **Inheritance** defines an "IS-A" relationship (e.g., a Dog IS-A Animal).  
            - **Composition** defines a "HAS-A" relationship (e.g., a Car HAS-A Engine).
          </p>

          <h3 className="text-lg font-semibold text-gray-800">Example: Composition</h3>
          <pre className="bg-gray-800 p-4 rounded-md text-white">
            <code>
              {`class Engine:
    def start(self):
        return "Engine started"

class Car:
    def __init__(self):
        self.engine = Engine()  # Composition

    def start_car(self):
        return self.engine.start()

car = Car()
print(car.start_car())  # Output: Engine started
`}
            </code>
          </pre>

          <h2 className="text-xl font-semibold text-gray-800">5. Decorators in Python</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Decorators are functions that modify the behavior of other functions or methods. They are often used in OOP for logging, authentication, and more.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">Example: Using `@staticmethod` and `@classmethod`</h3>
          <pre className="bg-gray-800 p-4 rounded-md text-white">
            <code>
              {`class MathOperations:
    @staticmethod
    def add(a, b):
        return a + b

    @classmethod
    def info(cls):
        return f"This is {cls.__name__} class"

print(MathOperations.add(5, 3))  # Output: 8
print(MathOperations.info())  # Output: This is MathOperations class
`}
            </code>
          </pre>

          <h2 className="text-xl font-semibold text-gray-800">Conclusion</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Understanding **Inheritance, Composition, Subclassing, `super()`, and Decorators** is crucial in Python OOP.  
            - Inheritance allows **code reuse** and establishes **IS-A relationships**.  
            - Composition is used for **HAS-A relationships** and modular programming.  
            - **Decorators** help modify function behaviors dynamically.  
          </p>
        </div>
         {/* Resources Section */}
         <div className='mt-4'>
             {/* Resources Section */}
          <h2 className="text-xl font-semibold text-gray-800">📚 Resources for Further Learning</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Here are some recommended resources to deepen your understanding of object inheritance in Python:
          </p>
          <ul className="list-disc pl-6 text-lg text-blue-600">
            <li>
              <a
                href="https://docs.python.org/3/tutorial/classes.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Python Official Documentation – Classes and Inheritance
              </a>
            </li>
            <li>
              <a
                href="https://realpython.com/inheritance-composition-python/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Real Python – Inheritance and Composition in Python
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/inheritance-in-python/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GeeksforGeeks – Inheritance in Python
              </a>
            </li>
            <li>
              <a
                href="https://www.w3schools.com/python/python_inheritance.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                W3Schools – Python Inheritance
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=RSl87lqOXDE"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                YouTube – Python OOP and Inheritance Tutorial
              </a>
            </li>
          </ul>
         </div>
      </section>
    </>
  );
};

export default Dey6;
