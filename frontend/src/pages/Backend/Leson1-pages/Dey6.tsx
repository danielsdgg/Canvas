import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from 'react-icons/fa';

const Dey6: React.FC = () => {
  const navigate = useNavigate();

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
          Object Inheritance in Python
        </h1>
      </div>

      <div className="p-4 sm:p-6">
        {/* Introduction */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaEdit className="mr-2 text-indigo-600" />
            Introduction to Object Inheritance
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Inheritance is a cornerstone of Object-Oriented Programming (OOP) in Python, enabling a class (known as a <strong>child class</strong> or <strong>subclass</strong>) to inherit attributes and methods from another class (known as a <strong>parent class</strong> or <strong>superclass</strong>). This mechanism promotes <strong>code reuse</strong>, enhances <strong>modularity</strong>, and establishes hierarchical relationships between classes, making it easier to manage and scale complex software systems.
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Through inheritance, Python allows developers to create specialized classes that build upon the functionality of more general ones, reducing redundancy and fostering a logical structure. For instance, a <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Dog</code> class can inherit from an <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Animal</code> class, inheriting its properties while adding or modifying behaviors specific to dogs. This lesson explores inheritance in depth, including its types, practical applications, and related concepts like composition and method resolution order (MRO).
          </p>
        </section>

        {/* Understanding Inheritance */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            Understanding Inheritance
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Inheritance establishes an "IS-A" relationship between classes. For example, a <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Dog</code> IS-A <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Animal</code>. The child class gains access to all non-private attributes and methods of the parent class and can either use them as-is, <strong>override</strong> them to provide custom behavior, or <strong>extend</strong> them by adding new functionality.
          </p>
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Basic Inheritance Example</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "Some generic sound"

class Dog(Animal):
    def speak(self):
        return "Bark"

dog = Dog("Buddy")
print(dog.name)      # Output: Buddy
print(dog.speak())   # Output: Bark`}
              </code>
            </pre>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
              Here, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Dog</code> inherits the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">name</code> attribute from <code className="bg-gray-800 text-white px-1 py-0.5 rounded">Animal</code> and overrides the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">speak()</code> method.
            </p>
          </div>
        </section>

        {/* Types of Inheritance */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            Types of Inheritance in Python
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Python supports multiple forms of inheritance, each suited to different design needs. Understanding these types helps in structuring class hierarchies effectively.
          </p>

          {/* Single Inheritance */}
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Single Inheritance</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              A child class inherits from a single parent class.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`class Vehicle:
    def __init__(self, brand):
        self.brand = brand

    def describe(self):
        return f"This is a {self.brand} vehicle"

class Car(Vehicle):
    def describe(self):
        return f"This is a {self.brand} car"

car = Car("Toyota")
print(car.describe())  # Output: This is a Toyota car`}
              </code>
            </pre>
          </div>

          {/* Multiple Inheritance */}
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Multiple Inheritance</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              A child class inherits from more than one parent class, combining their functionalities.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`class Flyer:
    def fly(self):
        return "Flying high"

class Swimmer:
    def swim(self):
        return "Swimming fast"

class Duck(Flyer, Swimmer):
    def quack(self):
        return "Quack!"

duck = Duck()
print(duck.fly())    # Output: Flying high
print(duck.swim())   # Output: Swimming fast
print(duck.quack())  # Output: Quack!`}
              </code>
            </pre>
          </div>

          {/* Multilevel Inheritance */}
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Multilevel Inheritance</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              A class inherits from a parent class, which itself inherits from another class, forming a chain.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`class Animal:
    def eat(self):
        return "Eating"

class Mammal(Animal):
    def walk(self):
        return "Walking"

class Dog(Mammal):
    def bark(self):
        return "Bark"

dog = Dog()
print(dog.eat())   # Output: Eating
print(dog.walk())  # Output: Walking
print(dog.bark())  # Output: Bark`}
              </code>
            </pre>
          </div>

          {/* Hierarchical Inheritance */}
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Hierarchical Inheritance</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              Multiple child classes inherit from a single parent class.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`class Shape:
    def __init__(self, color):
        self.color = color

class Circle(Shape):
    def draw(self):
        return f"Drawing a {self.color} circle"

class Square(Shape):
    def draw(self):
        return f"Drawing a {self.color} square"

circle = Circle("Red")
square = Square("Blue")
print(circle.draw())  # Output: Drawing a Red circle
print(square.draw())  # Output: Drawing a Blue square`}
              </code>
            </pre>
          </div>

          {/* Hybrid Inheritance */}
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Hybrid Inheritance</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              A combination of multiple inheritance types, often requiring careful design to avoid ambiguity.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`class LivingThing:
    def breathe(self):
        return "Breathing"

class Animal(LivingThing):
    def move(self):
        return "Moving"

class Bird(Animal):
    def fly(self):
        return "Flying"

class Parrot(Bird, LivingThing):
    def speak(self):
        return "Hello!"

parrot = Parrot()
print(parrot.breathe())  # Output: Breathing
print(parrot.fly())      # Output: Flying
print(parrot.speak())    # Output: Hello!`}
              </code>
            </pre>
          </div>
        </section>

        {/* Superclass, Subclass, and super() */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            Superclass, Subclass, and super()
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            - A <strong>Superclass</strong> (or Parent class) is the class being inherited from.  
            - A <strong>Subclass</strong> (or Child class) is the class that inherits.  
            - The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">super()</code> function allows the subclass to call methods or the constructor of the superclass, ensuring proper initialization and extension.
          </p>
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Using super()</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`class Person:
    def __init__(self, name):
        self.name = name
        self.type = "Human"

    def introduce(self):
        return f"Hi, I'm {self.name}"

class Student(Person):
    def __init__(self, name, grade):
        super().__init__(name)  # Calls Person's __init__
        self.grade = grade

    def introduce(self):
        return f"{super().introduce()}, a {self.grade}-grade student"

student = Student("Alice", 10)
print(student.name)       # Output: Alice
print(student.type)       # Output: Human
print(student.introduce()) # Output: Hi, I'm Alice, a 10-grade student`}
              </code>
            </pre>
          </div>
        </section>

        {/* Method Resolution Order (MRO) */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            Method Resolution Order (MRO)
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            In multiple inheritance scenarios, Python uses the <strong>Method Resolution Order (MRO)</strong> to determine the order in which classes are searched for a method or attribute. The MRO follows the C3 linearization algorithm, accessible via the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">__mro__</code> attribute or <code className="bg-gray-800 text-white px-1 py-0.5 rounded">mro()</code> method.
          </p>
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">MRO Example</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`class A:
    def speak(self):
        return "A speaks"

class B(A):
    def speak(self):
        return "B speaks"

class C(A):
    def speak(self):
        return "C speaks"

class D(B, C):
    pass

d = D()
print(d.speak())        # Output: B speaks
print(D.__mro__)        # Output: (<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>)`}
              </code>
            </pre>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
              Here, <code className="bg-gray-800 text-white px-1 py-0.5 rounded">D</code> checks <code className="bg-gray-800 text-white px-1 py-0.5 rounded">B</code> first, then <code className="bg-gray-800 text-white px-1 py-0.5 rounded">C</code>, then <code className="bg-gray-800 text-white px-1 py-0.5 rounded">A</code>.
            </p>
          </div>
        </section>

        {/* Composition vs. Inheritance */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            Composition vs. Inheritance
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            While inheritance defines an "IS-A" relationship, <strong>composition</strong> defines a "HAS-A" relationship, where one class contains an instance of another. Composition is often favored for flexibility and loose coupling over deep inheritance hierarchies.
          </p>
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Composition Example</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`class Engine:
    def __init__(self, horsepower):
        self.horsepower = horsepower

    def start(self):
        return f"Engine with {self.horsepower} HP started"

class Car:
    def __init__(self, brand):
        self.brand = brand
        self.engine = Engine(200)  # Composition

    def start(self):
        return f"{self.brand}: {self.engine.start()}"

car = Car("Ford")
print(car.start())  # Output: Ford: Engine with 200 HP started`}
              </code>
            </pre>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            Practical Examples of Inheritance
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Below are real-world-inspired examples showcasing inheritance in action.
          </p>

          {/* Example 1: Employee Hierarchy */}
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Employee Hierarchy</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`class Employee:
    def __init__(self, name, id):
        self.name = name
        self.id = id

    def get_details(self):
        return f"ID: {self.id}, Name: {self.name}"

class Manager(Employee):
    def __init__(self, name, id, team_size):
        super().__init__(name, id)
        self.team_size = team_size

    def get_details(self):
        return f"{super().get_details()}, Managing {self.team_size} employees"

class Developer(Employee):
    def __init__(self, name, id, language):
        super().__init__(name, id)
        self.language = language

    def get_details(self):
        return f"{super().get_details()}, Codes in {self.language}"

manager = Manager("Alice", "M001", 5)
developer = Developer("Bob", "D001", "Python")
print(manager.get_details())    # Output: ID: M001, Name: Alice, Managing 5 employees
print(developer.get_details())  # Output: ID: D001, Name: Bob, Codes in Python`}
              </code>
            </pre>
          </div>

          {/* Example 2: Bank Accounts */}
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Bank Accounts</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`class Account:
    def __init__(self, account_number, balance):
        self.account_number = account_number
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self.balance

class SavingsAccount(Account):
    def __init__(self, account_number, balance, interest_rate):
        super().__init__(account_number, balance)
        self.interest_rate = interest_rate

    def add_interest(self):
        interest = self.balance * self.interest_rate
        self.balance += interest
        return self.balance

class CheckingAccount(Account):
    def __init__(self, account_number, balance, overdraft_limit):
        super().__init__(account_number, balance)
        self.overdraft_limit = overdraft_limit

    def withdraw(self, amount):
        if self.balance - amount >= -self.overdraft_limit:
            self.balance -= amount
            return self.balance
        return "Insufficient funds"

savings = SavingsAccount("S123", 1000, 0.05)
checking = CheckingAccount("C456", 500, 200)
savings.deposit(500)
savings.add_interest()
print(savings.balance)       # Output: 1575.0
checking.withdraw(600)
print(checking.balance)      # Output: -100`}
              </code>
            </pre>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCheckCircle className="mr-2 text-indigo-600" />
            Conclusion
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Inheritance in Python is a powerful tool for creating hierarchical class structures, enabling <strong>code reuse</strong>, <strong>extensibility</strong>, and <strong>organization</strong>. By leveraging single, multiple, multilevel, hierarchical, and hybrid inheritance, developers can model complex real-world relationships. The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">super()</code> function enhances initialization and method calls, while understanding MRO resolves ambiguity in multiple inheritance. Complementing inheritance with composition offers flexibility, making Python OOP versatile for building robust applications.
          </p>
        </section>

        {/* Resources */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaLink className="mr-2 text-indigo-600" />
            📚 Resources for Further Learning
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Deepen your knowledge of object inheritance with these curated resources:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
            <li>
              <a href="https://docs.python.org/3/tutorial/classes.html#inheritance" 
                 className="text-indigo-600 hover:underline" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Python Official Docs – Inheritance
              </a>
            </li>
            <li>
              <a href="https://realpython.com/inheritance-composition-python/" 
                 className="text-indigo-600 hover:underline" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Real Python – Inheritance and Composition
              </a>
            </li>
            <li>
              <a href="https://www.geeksforgeeks.org/inheritance-in-python/" 
                 className="text-indigo-600 hover:underline" 
                 target="_blank" 
                 rel="noopener noreferrer">
                GeeksforGeeks – Inheritance in Python
              </a>
            </li>
            <li>
              <a href="https://www.programiz.com/python-programming/inheritance" 
                 className="text-indigo-600 hover:underline" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Programiz – Python Inheritance Tutorial
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=RSl87lqOXDE" 
                 className="text-indigo-600 hover:underline" 
                 target="_blank" 
                 rel="noopener noreferrer">
                YouTube – Corey Schafer: Python OOP Inheritance
              </a>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Dey6;