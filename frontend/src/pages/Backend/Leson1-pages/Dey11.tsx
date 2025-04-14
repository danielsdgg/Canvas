import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from 'react-icons/fa';

const Dey11: React.FC = () => {
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
          SQLAlchemy Relationships
        </h1>
      </div>

      <div className="p-4 sm:p-6">
        {/* Introduction */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaEdit className="mr-2 text-indigo-600" />
            🔍 Introduction to SQLAlchemy Relationships
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            In relational databases, <strong>relationships</strong> define how tables are interconnected, enabling complex data structures like user profiles, blog posts, or student enrollments. SQLAlchemy, a powerful Python ORM, provides robust tools to model these relationships using the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">relationship()</code> function and <code className="bg-gray-800 text-white px-1 py-0.5 rounded">ForeignKey</code> constraints. Relationships allow developers to represent real-world associations (e.g., a user having multiple posts) as Python objects, abstracting raw SQL joins into intuitive object-oriented syntax.
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            SQLAlchemy supports three primary relationship types: <strong>one-to-one</strong>, <strong>one-to-many</strong>, and <strong>many-to-many</strong>. These relationships leverage foreign keys and association tables to maintain data integrity and enable efficient querying. This lesson dives deep into each type, offering detailed explanations, practical examples, and best practices to help you design effective database architectures with SQLAlchemy.
          </p>
        </section>

        {/* One-to-One Relationship */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            1️⃣ One-to-One Relationship
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            A <strong>one-to-one relationship</strong> links a single record in one table to exactly one record in another table. This is useful for splitting data across tables for normalization or extending entities (e.g., a user and their profile). In SQLAlchemy, the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">uselist=False</code> argument ensures a one-to-one mapping.
          </p>
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Example: User and Profile</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship, declarative_base, sessionmaker

Base = declarative_base()
engine = create_engine('sqlite:///example.db')
Session = sessionmaker(bind=engine)
session = Session()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    profile = relationship("UserProfile", back_populates="user", uselist=False)

class UserProfile(Base):
    __tablename__ = 'user_profiles'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), unique=True)
    bio = Column(String)
    user = relationship("User", back_populates="profile")

# Create tables
Base.metadata.create_all(engine)

# Adding data
user = User(name="Alice")
profile = UserProfile(bio="Python enthusiast", user=user)
session.add_all([user, profile])
session.commit()

# Querying
print(f"User: {user.name}, Bio: {user.profile.bio}")`}
              </code>
            </pre>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
              Output: <code className="bg-gray-800 text-white p-2 rounded-md">User: Alice, Bio: Python enthusiast</code>
            </p>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
              Note: The <code className="bg-gray-800 text-white px-1 py-0.5 rounded">unique=True</code> constraint on <code className="bg-gray-800 text-white px-1 py-0.5 rounded">user_id</code> ensures only one profile per user.
            </p>
          </div>
        </section>

        {/* One-to-Many Relationship */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            2️⃣ One-to-Many Relationship
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            A <strong>one-to-many relationship</strong> allows a single record in one table to be linked to multiple records in another table. This is common in scenarios like a user authoring multiple blog posts. SQLAlchemy uses a foreign key in the "many" table to reference the "one" table.
          </p>
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Example: User and Posts</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    posts = relationship("Post", back_populates="user")

class Post(Base):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship("User", back_populates="posts")

# Create tables
Base.metadata.create_all(engine)

# Adding data
user = User(name="Bob")
post1 = Post(title="First Post", user=user)
post2 = Post(title="Second Post", user=user)
session.add_all([user, post1, post2])
session.commit()

# Querying
print(f"User: {user.name}")
for post in user.posts:
    print(f"  Post: {post.title}")`}
              </code>
            </pre>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
              Output: <br />
              <code className="bg-gray-800 text-white p-2 rounded-md">User: Bob<br />  Post: First Post<br />  Post: Second Post</code>
            </p>
          </div>
        </section>

        {/* Many-to-Many Relationship */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            3️⃣ Many-to-Many Relationship
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            A <strong>many-to-many relationship</strong> connects multiple records in one table to multiple records in another, requiring an <strong>association table</strong>. This is ideal for scenarios like students enrolled in multiple courses. SQLAlchemy uses the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">secondary</code> argument to define this relationship.
          </p>
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Example: Students and Courses</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`from sqlalchemy import Table

association_table = Table('enrollments', Base.metadata,
    Column('student_id', Integer, ForeignKey('students.id')),
    Column('course_id', Integer, ForeignKey('courses.id'))
)

class Student(Base):
    __tablename__ = 'students'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    courses = relationship("Course", secondary=association_table, back_populates="students")

class Course(Base):
    __tablename__ = 'courses'
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    students = relationship("Student", secondary=association_table, back_populates="courses")

# Create tables
Base.metadata.create_all(engine)

# Adding data
student1 = Student(name="Charlie")
student2 = Student(name="Dana")
course1 = Course(title="Python Basics")
course2 = Course(title="Advanced SQL")
student1.courses = [course1, course2]
student2.courses = [course1]
session.add_all([student1, student2, course1, course2])
session.commit()

# Querying
for student in session.query(Student).all():
    print(f"Student: {student.name}")
    for course in student.courses:
        print(f"  Course: {course.title}")`}
              </code>
            </pre>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
              Output: <br />
              <code className="bg-gray-800 text-white p-2 rounded-md">Student: Charlie<br />  Course: Python Basics<br />  Course: Advanced SQL<br />Student: Dana<br />  Course: Python Basics</code>
            </p>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            ⚙️ Advanced Relationship Features
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            SQLAlchemy offers advanced options to customize relationships, such as lazy loading, cascading deletes, and backrefs.
          </p>
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Lazy Loading</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">
              By default, relationships use <code className="bg-gray-800 text-white px-1 py-0.5 rounded">lazy='select'</code>, but you can configure dynamic loading:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    posts = relationship("Post", lazy='dynamic')

# Querying dynamically
user = session.query(User).first()
posts_query = user.posts  # Returns a query object
for post in posts_query:
    print(post.title)`}
              </code>
            </pre>
          </div>
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Cascading Deletes</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2">
              Use <code className="bg-gray-800 text-white px-1 py-0.5 rounded">cascade='all, delete-orphan'</code> to automatically delete related records:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    posts = relationship("Post", back_populates="user", cascade="all, delete-orphan")

# Deleting a user will also delete their posts
user = session.query(User).first()
session.delete(user)
session.commit()`}
              </code>
            </pre>
          </div>
        </section>

        {/* Practical Example */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center justify-center mb-4">
            <FaLaptopCode className="mr-3 text-2xl" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase text-center">
              🎯 Practical Example: E-Commerce System
            </h2>
          </div>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Let’s build an e-commerce system with relationships: Customers (one-to-many with Orders), Orders (many-to-many with Products).
          </p>
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
          <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
  <code>
    {`from sqlalchemy import Table, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

order_products = Table('order_products', Base.metadata,
    Column('order_id', Integer, ForeignKey('orders.id')),
    Column('product_id', Integer, ForeignKey('products.id'))
)

class Customer(Base):
    __tablename__ = 'customers'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    orders = relationship("Order", back_populates="customer")

class Order(Base):
    __tablename__ = 'orders'
    id = Column(Integer, primary_key=True)
    customer_id = Column(Integer, ForeignKey('customers.id'))
    customer = relationship("Customer", back_populates="orders")
    products = relationship("Product", secondary=order_products, back_populates="orders")

class Product(Base):
    __tablename__ = 'products'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    price = Column(Integer, nullable=False)
    orders = relationship("Order", secondary=order_products, back_populates="products")

# Create tables
Base.metadata.create_all(engine)

# Adding data
customer = Customer(name="Eve")
product1 = Product(name="Laptop", price=1000)
product2 = Product(name="Mouse", price=20)
order = Order(customer=customer, products=[product1, product2])
session.add_all([customer, product1, product2, order])
session.commit()

# Querying
for customer in session.query(Customer).all():
    print(f"Customer: {customer.name}")
    for order in customer.orders:
        print(f"  Order ID: {order.id}")
        for product in order.products:  # Fix: Now inside a properly formatted string
            print(f"    Product: {product.name} (${'{product.price}'})")`}
  </code>
</pre>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
              Output: <br />
              <code className="bg-gray-800 text-white p-2 rounded-md">Customer: Eve<br />  Order ID: 1<br />    Product: Laptop ($1000)<br />    Product: Mouse ($20)</code>
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCheckCircle className="mr-2 text-indigo-600" />
            📌 Conclusion
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            SQLAlchemy relationships provide a structured, intuitive way to model database connections, from simple one-to-one links to complex many-to-many associations. By leveraging <code className="bg-gray-800 text-white px-1 py-0.5 rounded">relationship()</code>, foreign keys, and association tables, you can design efficient, scalable database architectures. Advanced features like lazy loading and cascading enhance flexibility, making SQLAlchemy a vital tool for modern Python applications.
          </p>
        </section>

        {/* Resources */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaLink className="mr-2 text-indigo-600" />
            📚 Further Reading & Resources
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
            <li>
              <a href="https://docs.sqlalchemy.org/en/20/orm/relationships.html" 
                 className="text-indigo-600 hover:underline" 
                 target="_blank" 
                 rel="noopener noreferrer">
                SQLAlchemy Relationships Documentation
              </a>
            </li>
            <li>
              <a href="https://realpython.com/sqlalchemy-orm-python/" 
                 className="text-indigo-600 hover:underline" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Real Python - SQLAlchemy ORM
              </a>
            </li>
            <li>
              <a href="https://www.tutorialspoint.com/sqlalchemy/sqlalchemy_orm_relationships.htm" 
                 className="text-indigo-600 hover:underline" 
                 target="_blank" 
                 rel="noopener noreferrer">
                TutorialsPoint - SQLAlchemy Relationships
              </a>
            </li>
            <li>
              <a href="https://overiq.com/sqlalchemy-101/defining-relationships/" 
                 className="text-indigo-600 hover:underline" 
                 target="_blank" 
                 rel="noopener noreferrer">
                OverIQ - SQLAlchemy Relationships Guide
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=sO3Vz0NkhLU" 
                 className="text-indigo-600 hover:underline" 
                 target="_blank" 
                 rel="noopener noreferrer">
                YouTube - SQLAlchemy Relationships Tutorial
              </a>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Dey11;