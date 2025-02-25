import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Dey11: React.FC = () => {
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
          SQLAlchemy Relationships
        </h1>

        {/* Introduction */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">🔍 Understanding Relationships</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          In relational databases, relationships define how different tables connect with each other. SQLAlchemy provides powerful tools for modeling relationships between tables using the <code>relationship()</code> and <code>foreign key</code> concepts.
        </p>

        {/* One-to-One Relationship */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">1️⃣ One-to-One Relationship</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          A one-to-one relationship means each record in one table is linked to a single record in another table. This is useful for extending user profiles.
        </p>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship, declarative_base, sessionmaker

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    profile = relationship("UserProfile", back_populates="user", uselist=False)

class UserProfile(Base):
    __tablename__ = 'user_profiles'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    bio = Column(String)
    user = relationship("User", back_populates="profile")
    
engine = create_engine('sqlite:///example.db')
Base.metadata.create_all(engine)`}
          </code>
        </pre>

        {/* One-to-Many Relationship */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">2️⃣ One-to-Many Relationship</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          In a one-to-many relationship, a single record in one table can be associated with multiple records in another table. This is commonly used in blog posts where a user has multiple posts.
        </p>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`class Post(Base):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship("User", back_populates="posts")

User.posts = relationship("Post", back_populates="user")`}
          </code>
        </pre>

        {/* Many-to-Many Relationship */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">3️⃣ Many-to-Many Relationship</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          In a many-to-many relationship, multiple records in one table are associated with multiple records in another table. This is common in student-course relationships.
        </p>
        <pre className="bg-gray-800 p-4 rounded-md text-white">
          <code>
{`association_table = Table('association', Base.metadata,
    Column('student_id', Integer, ForeignKey('students.id')),
    Column('course_id', Integer, ForeignKey('courses.id'))
)

class Student(Base):
    __tablename__ = 'students'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    courses = relationship("Course", secondary=association_table, back_populates="students")

class Course(Base):
    __tablename__ = 'courses'
    id = Column(Integer, primary_key=True)
    title = Column(String)
    students = relationship("Student", secondary=association_table, back_populates="courses")`}
          </code>
        </pre>

        {/* Conclusion */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">📌 Conclusion</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          SQLAlchemy relationships provide a structured way to model database connections efficiently. Understanding one-to-one, one-to-many, and many-to-many relationships helps in designing better database architectures for real-world applications.
        </p>

        {/* Resources */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">📚 Further Reading & Resources</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li><a href="https://docs.sqlalchemy.org/en/20/orm/relationships.html" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">SQLAlchemy Relationships Documentation</a></li>
          <li><a href="https://realpython.com/sqlalchemy-orm-python/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Real Python - SQLAlchemy ORM</a></li>
        </ul>
      </section>
    </>
  );
};

export default Dey11;
