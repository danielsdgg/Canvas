import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaSchool, FaChalkboardTeacher, FaTasks, FaBook, FaUserTie, FaLaptopCode, FaCode, FaProjectDiagram } from "react-icons/fa";

const Det1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Welcome Section */}
      <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-8 mx-auto max-w-full sm:max-w-4xl lg:max-w-6xl">
        {/* Back Button - Increased touch target for mobile */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105 p-2 rounded-md"
        >
          <FaArrowLeft className="mr-2 text-lg" />
          Back
        </button>

        {/* Section Heading */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaSchool className="mr-3 text-xl sm:text-2xl" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Welcome to Morgan Technical Training</h2>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4">
            At Morgan Technical Training, we are committed to fostering a learning environment that blends cutting-edge technology with practical, hands-on experience. Our mission is to equip aspiring cybersecurity professionals with the skills, tools, and mindset needed to thrive in the ever-evolving field of digital security. This course introduces you to the essentials of cybersecurity, starting with foundational concepts to protect systems, networks, and data.
          </p>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4">
            Founded with the vision of bridging the gap between education and industry demands, Morgan Technical Training offers a structured curriculum designed by experienced cybersecurity experts. Whether you're a beginner or looking to upskill, our program emphasizes real-world applications, collaboration, and proactive defense strategies.
          </p>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4">
            Here are some key features of our approach at Morgan Technical Training:
          </p>

          {/* Key Features List - Added gap for better spacing */}
          <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <FaChalkboardTeacher className="mt-1 text-indigo-600 text-lg" />
              Attendance is mandatory for all sessions unless otherwise excused, ensuring consistent engagement.
            </li>
            <li className="flex items-start gap-2">
              <FaUserTie className="mt-1 text-indigo-600 text-lg" />
              Respect and professionalism are expected at all times to foster a positive learning community.
            </li>
            <li className="flex items-start gap-2">
              <FaTasks className="mt-1 text-indigo-600 text-lg" />
              All assignments must be submitted on time to reinforce your learning and track progress.
            </li>
          </ul>

          {/* Morgan-LMS Overview */}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4">
            Our Learning Management System, <strong>Morgan-LMS</strong>, is your central hub for all course-related activities:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <FaBook className="mt-1 text-indigo-600 text-lg" />
              Access lecture materials, videos, and additional resources anytime.
            </li>
            <li className="flex items-start gap-2">
              <FaTasks className="mt-1 text-indigo-600 text-lg" />
              Submit assignments and track your progress with real-time feedback.
            </li>
          </ul>

          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            We believe every learner deserves the best tools, guidance, and support to succeed. Morgan-LMS is designed to streamline your learning journey, making it intuitive, engaging, and effective.
          </p>
        </div>

        {/* Morgan-LMS Section */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-lg mt-8 flex items-center">
          <FaLaptopCode className="mr-3 text-xl sm:text-2xl" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Morgan-LMS</h2>
        </div>

        {/* Navigation & LMS Section */}
        <div className="p-4 sm:p-6">
          <p className="text-base md:text-lg text-gray-800 mt-6 mb-4">
            <strong>Navigation & Use of Morgan-LMS:</strong> A well-structured Learning Management System enhances the learning experience by providing an intuitive interface for students to access course materials, manage tasks, and stay connected.
          </p>

          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-4 mb-6">
            <li className="flex items-start gap-2">
              <FaChalkboardTeacher className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Dashboard:</strong> Your central hub after logging in, showcasing recent activity, course progress, and personalized notifications.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaBook className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Side Navigation (SideNav):</strong> A vertical navigation bar for seamless movement between sections, including:
                <ul className="list-disc pl-6 space-y-3 mt-2">
                  <li className="flex items-start gap-2">
                    <FaUserTie className="mt-1 text-indigo-600 text-lg" />
                    <strong className="mr-1">Account Profile:</strong> View and edit personal details, preferences, and settings.
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCode className="mt-1 text-indigo-600 text-lg" />
                    <strong className="mr-1">Courses:</strong> Access a list of enrolled courses with detailed content and schedules.
                  </li>
                  <li className="flex items-start gap-2">
                    <FaTasks className="mt-1 text-indigo-600 text-lg" />
                    <strong>Course Details & Contents:</strong> Navigate through lessons, complete weekly assignments, and review supplementary materials.
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-800">
            Mastering Morgan-LMS’s navigation ensures you stay organized, engaged, and proactive throughout your learning journey.
          </p>
        </div>

        {/* Cybersecurity Roadmap */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-lg mt-8 flex items-center">
          <FaProjectDiagram className="mr-3 text-xl sm:text-2xl" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Becoming a Cybersecurity Professional: The Roadmap</h2>
        </div>

        <div className="p-4 sm:p-6">
          <p className="text-base md:text-lg text-gray-800 mb-4">
            Cybersecurity is the practice of safeguarding systems, networks, and data from digital threats, breaches, and unauthorized access. As a cybersecurity professional, you’ll protect organizations by identifying vulnerabilities, implementing defenses, and responding to incidents using a blend of technical expertise and strategic thinking.
          </p>
          <p className="text-base md:text-lg text-gray-800 mb-4">
            At Morgan Technical Training, our cybersecurity roadmap is designed to take you from beginner to proficient over four weeks. This lesson focuses on foundational technologies and practices—<strong>network security, vulnerability assessment, and practical labs</strong>—and introduces you to the tools and workflows used by industry professionals. Here’s what you’ll cover:
          </p>

          {/* Updated Roadmap List */}
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-4 mb-6">
            <li className="flex items-start gap-2">
              <FaCode className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Week 1 - Introduction:</strong> Get started with an overview of the course, including the course outline, student handbook, and onboarding session. Explore the Morgan Technical Training learning model and key cybersecurity concepts like confidentiality, integrity, and availability (CIA triad).
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaLaptopCode className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Week 2 - Network Basics:</strong> Learn the fundamentals of <strong>networks</strong>, including protocols, ports, and scanning basics. Study <strong>firewalls</strong> and perform <strong>packet analysis</strong> using tools like <strong>Wireshark</strong> to understand network traffic and security.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaTasks className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Week 3 - Vulnerability Assessment:</strong> Explore <strong>vulnerability assessment</strong> techniques, including scanning, patching, and system hardening. Gain awareness of <strong>social engineering</strong> tactics and apply your skills in a hands-on <strong>networking lab</strong>.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaProjectDiagram className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Week 4 - Project Week:</strong> Apply your knowledge in a comprehensive <strong>network security audit</strong> project. Conduct vulnerability scans, analyze network traffic, and propose security improvements for a simulated network environment.
              </div>
            </li>
          </ul>

          <p className="text-base md:text-lg text-gray-800 mb-4">
            <strong>Final Project:</strong> In Week 4, you’ll complete a <strong>network security audit</strong> project. This hands-on exercise involves assessing a simulated network, identifying vulnerabilities, analyzing traffic with tools like Wireshark, and recommending security enhancements.
          </p>

          <p className="text-base md:text-lg text-gray-800">
            Completing this project will give you a tangible portfolio piece and prepare you for advanced topics like ethical hacking, penetration testing, and beyond. At Morgan Technical Training, we’re here to guide you every step of the way toward becoming a skilled cybersecurity professional.
          </p>
        </div>
      </section>
    </>
  );
};

export default Det1;