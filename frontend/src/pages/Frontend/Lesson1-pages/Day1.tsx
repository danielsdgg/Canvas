import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Day1:React.FC = () => {
    const navigate = useNavigate();
  return (
    <>
    {/* Welcome Section */}
    <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
    {/* Back Button */}
    <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
        <FaArrowLeft className="mr-2" />
        Back
    </button>
  {/* Section Heading */}
  <div className="bg-gray-800 text-white py-4 px-6 rounded-t-lg">
    <h2 className="text-3xl font-semibold">Welcome to Morgan Technical Training</h2>
  </div>

  <div className="p-6">
    {/* Introduction */}
    <p className="text-gray-700 leading-relaxed mb-4">
      At Morgan Technical Training, we prioritize excellence and hands-on experience. This course is designed to empower you with the skills needed to excel in web development.
    </p>
    <p className="text-gray-700 mb-4">
      Here are some key features of this Learning Management System (LMS), powered by Morgan Technical Training:
    </p>

    {/* Key Features List */}
    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
      <li>Attendance is mandatory for all sessions unless otherwise excused.</li>
      <li>Respect and professionalism are expected at all times.</li>
      <li>Weekly assignments must be submitted on time.</li>
    </ul>

    {/* Canvas Overview */}
    <p className="text-gray-700 leading-relaxed mb-4">
      Our Learning Management System, Canvas, is your hub for all course-related activities:
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
      <li>Access lecture materials and resources.</li>
      <li>Submit assignments and track your progress.</li>
      {/* <li>
        Use the <strong>Inbox</strong> feature to communicate directly with instructors
        and fellow students.
      </li> */}
    </ul>

    <p className="text-gray-700 leading-relaxed">
      We believe that every learner deserves the best tools and guidance to succeed.
    </p>
  </div>
  {/* canvas */}
  <div className="bg-gray-800 text-white py-4 px-6 rounded-lg mt-8">
    <h2 className="text-3xl sm:text-4xl font-semibold">
      Canvas
    </h2>
  </div>
  {/* Navigation & LMS Section */}
  <p className="text-sm sm:text-base text-gray-700 mt-8 mb-6">
    <strong>Navigation & Use of Canvas (LMS):</strong> A well-structured Learning Management System (LMS) enhances the learning experience by providing an intuitive interface for students to access course materials and track their progress.
  </p>

  <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 space-y-4 mb-6">
    <li>
      <strong>Dashboard:</strong> The first thing students see after logging in is the dashboard. This serves as the central hub, displaying recent activity, course progress, and upcoming assignments.
    </li>
    <li>
      <strong>Side Navigation (SideNav):</strong> A vertical navigation bar allows students to easily move between different sections of the LMS, including:
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Account Profile:</strong> View and edit personal details and settings.</li>
        <li><strong>Courses:</strong> Access a list of enrolled courses with detailed content.</li>
        <li><strong>Course Details & Contents:</strong> Navigate through lessons of the course and complete the assignments given in each week .</li>
      </ul>
    </li>
  </ul>

  <p className="text-sm sm:text-base text-gray-700">
    By understanding and utilizing the navigation features within this LMS, students can effectively manage their learning experience and stay organized throughout the course.
  </p>

  {/* Frontend Developer Roadmap */}
  <div className="bg-gray-800 text-white py-4 px-6 rounded-lg mt-8">
    <h2 className="text-3xl sm:text-4xl font-semibold">
      Becoming a Frontend Developer: The Roadmap
    </h2>
  </div>

  <div className="p-6">
  <p className="text-sm sm:text-base text-gray-700 mb-6">
    Frontend development is an exciting field where you bring digital designs to life on the web. A frontend developer ensures that websites are visually appealing, interactive, and user-friendly. You’ll work on crafting responsive interfaces, optimizing performance, and implementing modern web standards.
  </p>
  <p className="text-sm sm:text-base text-gray-700 mb-6">
    In this lesson, you will begin by learning about three core technologies: <strong>HTML, CSS, and Tailwind CSS</strong>. These foundational tools are essential for creating, styling, and managing web projects. Over the next three weeks, you will:
  </p>

  {/* Roadmap List */}
  <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 space-y-4 mb-6">
    <li>
      <strong>Week 1 - Introduction:</strong> Get started with the basics of web development and understand the role of a frontend developer. Learn about the mode of learning used, the difference between frontend and backend, and the importance of responsive design.
    </li>
    <li>
      <strong>Week 2 - Html & CSS:</strong> Understand the structure of a webpage and learn how to use <strong>HTML</strong> to build content. You will cover elements, attributes, forms, tables, and semantic markup. Explore <strong>CSS</strong> to design visually appealing and responsive layouts. You will also be introduced to <strong>Tailwind CSS</strong>, a utility-first framework that speeds up styling with pre-defined classes.
    </li>
    <li>
      <strong>Week 3 - Tailwindcss:</strong> Learn basics and fundamentals of Tailwind CSS, a utility-first CSS framework that helps you build custom designs without leaving your HTML. You will explore utility classes, responsive design, and custom configurations.
    </li>
    <li>
      <strong>Week 4 - Project Implementation:</strong> Apply your HTML and CSS knowledge by building a real-world project using <strong>Tailwind CSS</strong>. You will also learn how to organize files, optimize images, and improve website performance.
    </li>
  </ul>

  <p className="text-sm sm:text-base text-gray-700 mb-6">
    <strong>Final Project:</strong> By the end of the four weeks, you will build a fully responsive personal portfolio website. This project will include multiple sections such as:
  </p>

  <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 space-y-4 mb-6">
    <li>A structured homepage with an introduction and navigation.</li>
    <li>An "About Me" section with a short bio.</li>
    <li>A "Projects" section displaying work with images and descriptions.</li>
    <li>A contact form styled using Tailwind CSS.</li>
    <li>Responsiveness for both mobile and desktop views.</li>
  </ul>

  <p className="text-sm sm:text-base text-gray-700">
    By completing this project, you’ll have a strong foundation in frontend development and be ready to explore more advanced topics like JavaScript and React.
  </p>
  
</div>
</section>
    </>
    
  )
}

export default Day1
