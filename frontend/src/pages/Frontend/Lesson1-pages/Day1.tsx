import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaSchool, FaChalkboardTeacher, FaTasks, FaBook, FaUserTie, FaLaptopCode, FaCode, FaProjectDiagram, FaEnvelope, FaMobileAlt } from "react-icons/fa";

const Day1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Welcome Section */}
      <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-8 mx-auto max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-teal-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        {/* Section Heading */}
        <div className="bg-teal-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaSchool className="mr-3 text-2xl" />
          <h2 className="text-2xl sm:text-3xl font-semibold">Welcome to Morgan Technical Training</h2>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4">
            At Morgan Technical Training, we are committed to fostering a learning environment that blends cutting-edge technology with practical, hands-on experience. Our mission is to equip aspiring developers with the skills, tools, and mindset needed to thrive in the ever-evolving tech industry. This course introduces you to the world of web development, starting with the essentials of frontend development.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4">
            Founded with the vision of bridging the gap between education and industry demands, Morgan Technical Training offers a structured curriculum designed by experienced professionals. Whether you're a beginner or looking to upskill, our program emphasizes real-world applications, collaboration, and creativity.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4">
            Here are some key features of our approach at Morgan Technical Training:
          </p>

          {/* Key Features List */}
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2 mb-6">
            <li className="flex items-start">
              <FaChalkboardTeacher className="mr-2 mt-1 text-teal-600" />
              Attendance is mandatory for all sessions unless otherwise excused, ensuring consistent engagement.
            </li>
            <li className="flex items-start">
              <FaUserTie className="mr-2 mt-1 text-teal-600" />
              Respect and professionalism are expected at all times to foster a positive learning community.
            </li>
            <li className="flex items-start">
              <FaTasks className="mr-2 mt-1 text-teal-600" />
              All assignments must be submitted on time to reinforce your learning and track progress.
            </li>
          </ul>

          {/* Morgan-LMS Overview */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4">
            Our Learning Management System, <strong>Morgan-LMS</strong>, is your central hub for all course-related activities:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2 mb-6">
            <li className="flex items-start">
              <FaBook className="mr-2 mt-1 text-teal-600" />
              Access lecture materials, videos, and additional resources anytime.
            </li>
            <li className="flex items-start">
              <FaTasks className="mr-2 mt-1 text-teal-600" />
              Submit assignments and track your progress with real-time feedback.
            </li>
            {/* <li className="flex items-start">
              <FaEnvelope className="mr-2 mt-1 text-teal-600" />
              Use the <strong>Inbox</strong> feature to communicate directly with instructors and peers.
            </li> */}
          </ul>

          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            We believe every learner deserves the best tools, guidance, and support to succeed. Morgan-LMS is designed to streamline your learning journey, making it intuitive, engaging, and effective.
          </p>
        </div>

        {/* Morgan-LMS Section */}
        <div className="bg-teal-600 text-white py-4 px-6 rounded-lg mt-8 flex items-center">
          <FaLaptopCode className="mr-3 text-2xl" />
          <h2 className="text-2xl sm:text-3xl font-semibold">Morgan-LMS</h2>
        </div>

        {/* Navigation & LMS Section */}
        <div className="p-4 sm:p-6">
          <p className="text-sm sm:text-base text-gray-800 mt-6 mb-4">
            <strong>Navigation & Use of Morgan-LMS:</strong> A well-structured Learning Management System enhances the learning experience by providing an intuitive interface for students to access course materials, manage tasks, and stay connected.
          </p>

          <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 space-y-4 mb-6">
            <li className="flex items-start">
              <FaChalkboardTeacher className="mr-2 mt-1 text-teal-600" />
              <div>
                <strong>Dashboard:</strong> Your central hub after logging in, showcasing recent activity, course progress and personalized notifications.
              </div>
            </li>
            <li className="flex items-start">
              <FaBook className="mr-2 mt-1 text-teal-600" />
              <div>
                <strong>Side Navigation (SideNav):</strong> A vertical navigation bar for seamless movement between sections, including:
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li className="flex items-start">
                    <FaUserTie className="mr-2 mt-1 text-teal-600" />
                    <strong className="mr-1">Account Profile:</strong> View and edit personal details, preferences, and settings.
                  </li>
                  <li className="flex items-start">
                    <FaCode className="mr-2 mt-1 text-teal-600" />
                    <strong className="mr-1">Courses:</strong> Access a list of enrolled courses with detailed content and schedules.
                  </li>
                  <li className="flex items-start">
                    <FaTasks className="mr-2 mt-1 text-teal-600" />
                    <strong>Course Details & Contents:</strong> Navigate through lessons, complete weekly assignments, and review supplementary materials.
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <p className="text-sm sm:text-base text-gray-800">
            Mastering Morgan-LMS’s navigation ensures you stay organized, engaged, and proactive throughout your learning journey.
          </p>
        </div>

        {/* Frontend Developer Roadmap */}
        <div className="bg-teal-600 text-white py-4 px-6 rounded-lg mt-8 flex items-center">
          <FaProjectDiagram className="mr-3 text-2xl" />
          <h2 className="text-2xl sm:text-3xl font-semibold">Becoming a Frontend Developer: The Roadmap</h2>
        </div>

        <div className="p-4 sm:p-6">
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            Frontend development is the art of creating the user-facing side of web applications—everything a user sees and interacts with on a website or app. As a frontend developer, you’ll transform static designs into dynamic, responsive, and accessible interfaces using a blend of creativity and technical skill.
          </p>
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            At Morgan Technical Training, our frontend roadmap is designed to take you from beginner to proficient over four weeks. This lesson focuses on the foundational technologies—<strong>HTML, CSS, and Tailwind CSS</strong>—and introduces you to the tools and workflows used by professional developers. Here’s what you’ll cover:
          </p>

          {/* Roadmap List */}
          <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 space-y-4 mb-6">
            <li className="flex items-start">
              <FaCode className="mr-2 mt-1 text-teal-600" />
              <div>
                <strong>Week 1 - Introduction:</strong> Start with the basics of web development and the role of a frontend developer. Understand the Morgan Technical Training learning model, explore the difference between frontend and backend development, and learn the importance of responsive design for multiple devices.
              </div>
            </li>
            <li className="flex items-start">
              <FaLaptopCode className="mr-2 mt-1 text-teal-600" />
              <div>
                <strong>Week 2 - HTML & CSS:</strong> Dive into <strong>HTML</strong> to structure web content, covering elements, attributes, forms, tables, and semantic markup for accessibility. Then, explore <strong>CSS</strong> to style layouts, mastering selectors, box model, Flexbox, Grid, and media queries for responsiveness.
              </div>
            </li>
            <li className="flex items-start">
              <FaTasks className="mr-2 mt-1 text-teal-600" />
              <div>
                <strong>Week 3 - Tailwind CSS & Project Implementation:</strong> Learn <strong>Tailwind CSS</strong>, a utility-first framework that accelerates styling with pre-built classes and Apply your skills by building a real-world project now with <strong>HTML, CSS, and Tailwind CSS</strong>. Learn file organization, image optimization, version control with Git, and performance best practices.
              </div>
            </li>
          </ul>

          <p className="text-sm sm:text-base text-gray-800 mb-4">
            <strong>Final Project:</strong> By the end of this three-week module, you’ll create a fully responsive personal portfolio website showcasing your skills. This hands-on project will include:
          </p>

          <ul className="list-disc pl-6 text-sm sm:text-base text-gray-700 space-y-4 mb-6">
            <li className="flex items-start">
              <FaCode className="mr-2 mt-1 text-teal-600" />
              A structured homepage with an introduction and navigation bar.
            </li>
            <li className="flex items-start">
              <FaUserTie className="mr-2 mt-1 text-teal-600" />
              An "About Me" section with a short bio and personal highlights.
            </li>
            <li className="flex items-start">
              <FaProjectDiagram className="mr-2 mt-1 text-teal-600" />
              A "Projects" section displaying your work with images, descriptions, and links.
            </li>
            <li className="flex items-start">
              <FaEnvelope className="mr-2 mt-1 text-teal-600" />
              A contact form styled with Tailwind CSS for user interaction.
            </li>
            <li className="flex items-start">
              <FaMobileAlt className="mr-2 mt-1 text-teal-600" />
              Full responsiveness for seamless viewing on mobile, tablet, and desktop devices.
            </li>
          </ul>

          <p className="text-sm sm:text-base text-gray-800">
            Completing this project will give you a solid portfolio piece and prepare you for advanced topics like JavaScript, React, and beyond. At Morgan Technical Training, we’re here to guide you every step of the way toward becoming a skilled frontend developer.
          </p>
        </div>
      </section>
    </>
  );
};

export default Day1;