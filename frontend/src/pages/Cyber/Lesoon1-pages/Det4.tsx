import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBookOpen,
  FaUsers,
  FaShieldAlt,
  FaBriefcase,
  FaHeartbeat,
  FaGraduationCap,
  FaClock,
  FaLock,
} from "react-icons/fa";

const Det4: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Student Handbook Section */}
      <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-8 mx-auto max-w-full sm:max-w-4xl lg:max-w-6xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105 p-2 rounded-md"
        >
          <FaArrowLeft className="mr-2 text-lg" />
          Back
        </button>

        {/* Section Heading */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaBookOpen className="mr-3 text-xl sm:text-2xl" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Student Handbook: Cybersecurity Course Guidelines</h2>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6">
            Welcome to the Student Handbook for Morgan Technical Training’s Cybersecurity Course! This guide serves as your roadmap to success, outlining the expectations, policies, and resources that will support you throughout this program. As a cybersecurity student, you’re joining a community dedicated to excellence, ethical practice, and professional growth. The following sections detail the standards of conduct, academic integrity, and course-specific guidelines to help you thrive in this dynamic field and prepare for a rewarding career.
          </p>

          {/* 1. Code of Conduct */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaUsers className="mr-2 text-indigo-600 text-lg" />
              1. Code of Conduct
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Morgan Technical Training fosters a professional and inclusive environment for learning cybersecurity. All students are expected to adhere to our code of conduct to ensure a respectful and productive experience:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li className="flex items-start gap-2">
                <FaShieldAlt className="mt-1 text-indigo-600 text-lg" />
                <strong>Respect:</strong> Treat instructors, peers, and staff with courtesy, embracing diverse perspectives in discussions and labs.
              </li>
              <li className="flex items-start gap-2">
                <FaShieldAlt className="mt-1 text-indigo-600 text-lg" />
                <strong>Ethics:</strong> Use cybersecurity tools (e.g., Kali Linux, Metasploit) responsibly and only in authorized lab environments.
              </li>
              <li className="flex items-start gap-2">
                <FaShieldAlt className="mt-1 text-indigo-600 text-lg" />
                <strong>Punctuality:</strong> Attend all sessions and submit assignments on time via Morgan-LMS to stay on track with the course roadmap.
              </li>
              <li className="flex items-start gap-2">
                <FaShieldAlt className="mt-1 text-indigo-600 text-lg" />
                <strong>Professional Communication:</strong> Use respectful and professional language in Morgan-LMS, emails, and virtual classrooms.
              </li>
            </ul>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
              Violations, such as unauthorized hacking or disrespectful behavior, may result in warnings, grade penalties, or removal from the course, as determined by instructors and administration.
            </p>
          </div>

          {/* 2. Classroom Etiquette */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaUsers className="mr-2 text-indigo-600 text-lg" />
              2. Classroom Etiquette
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Whether participating in virtual sessions or hands-on labs, professional etiquette ensures a focused and collaborative learning environment. These guidelines apply to all course interactions:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Minimize Distractions:</strong> Silence phones, avoid side conversations, and mute microphones during virtual sessions to maintain focus.
              </li>
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Active Participation:</strong> Engage in discussions and labs by asking questions and sharing insights, using Zoom’s raise-hand feature when needed.
              </li>
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Lab Safety:</strong> Follow instructor guidance when using tools like Wireshark or Nmap to ensure safe and ethical practice in lab environments.
              </li>
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Preparation:</strong> Review Morgan-LMS materials and complete pre-lab setups (e.g., Kali Linux configuration) before sessions.
              </li>
            </ul>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
              Adhering to these guidelines creates a collaborative space that mirrors the teamwork and professionalism required in cybersecurity roles.
            </p>
          </div>

          {/* 3. Academic Integrity */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaShieldAlt className="mr-2 text-indigo-600 text-lg" />
              3. Academic Integrity
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Academic integrity is fundamental to your growth as a cybersecurity professional. It ensures your skills are authentically developed and prepares you for ethical practice in the field. Key principles and violations include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Plagiarism:</strong> Submitting others’ reports, scripts, or findings (e.g., from online forums or peers) without citation is prohibited. Always credit sources in project documentation.
              </li>
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Cheating:</strong> Using unauthorized tools or resources during assessments (e.g., hacking quizzes) undermines your learning and is not tolerated.
              </li>
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Misuse of Tools:</strong> Using cybersecurity tools (e.g., Metasploit) outside authorized lab environments violates course policies and ethical standards.
              </li>
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Collaboration:</strong> Complete individual assignments (e.g., network security audit) independently unless group work is explicitly permitted.
              </li>
            </ul>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
              Consequences may include grade deductions, project resubmission, or course dismissal. Report integrity concerns via Morgan-LMS’s messaging feature or to instructors directly.
            </p>
          </div>

          {/* 4. Professional Development */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaBriefcase className="mr-2 text-indigo-600 text-lg" />
              4. Professional Development
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Morgan Technical Training prepares you for a cybersecurity career by fostering professional skills alongside technical expertise. Engage in these activities to build your professional profile:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li className="flex items-start gap-2">
                <FaUsers className="mt-1 text-indigo-600 text-lg" />
                <strong>Networking:</strong> Connect with peers, instructors, and cybersecurity professionals via Morgan-LMS forums, LinkedIn, or industry events like DEF CON.
              </li>
              <li className="flex items-start gap-2">
                <FaBriefcase className="mt-1 text-indigo-600 text-lg" />
                <strong>Portfolio:</strong> Document your projects (e.g., Week 4’s network security audit) on GitHub or a personal website to showcase your skills to employers.
              </li>
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Certifications:</strong> Prepare for certifications like CompTIA Security+, CEH, or OSCP using course materials and Morgan-hosted study groups.
              </li>
              <li className="flex items-start gap-2">
                <FaLock className="mt-1 text-indigo-600 text-lg" />
                <strong>CTF Challenges:</strong> Participate in Capture The Flag (CTF) competitions on platforms like Hack The Box to gain practical experience and visibility.
              </li>
            </ul>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
              Create a LinkedIn profile to share your course achievements, connect with the Morgan Technical Training alumni network, and explore cybersecurity job opportunities.
            </p>
          </div>

          {/* 5. Mental Health and Well-being */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaHeartbeat className="mr-2 text-indigo-600 text-lg" />
              5. Mental Health and Well-being
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Cybersecurity training can be intense, with complex labs and tight deadlines. Morgan Technical Training prioritizes your mental health to ensure sustainable success:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li className="flex items-start gap-2">
                <FaHeartbeat className="mt-1 text-indigo-600 text-lg" />
                <strong>Balance:</strong> Schedule breaks, physical activity, and personal time to recharge outside of lab sessions and coursework.
              </li>
              <li className="flex items-start gap-2">
                <FaUsers className="mt-1 text-indigo-600 text-lg" />
                <strong>Support:</strong> Contact instructors or Morgan’s support team via Morgan-LMS if you feel overwhelmed or need guidance.
              </li>
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Stress Management:</strong> Use techniques like mindfulness, meditation, or short walks to cope with the demands of technical labs.
              </li>
              <li className="flex items-start gap-2">
                <FaClock className="mt-1 text-indigo-600 text-lg" />
                <strong>Time Management:</strong> Break tasks into manageable chunks using tools like Trello or Pomodoro timers to avoid burnout.
              </li>
            </ul>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
              Your well-being matters. Access Morgan’s mental health resources, including weekly check-ins and a dedicated support channel on Morgan-LMS, to stay balanced and focused.
            </p>
          </div>

          {/* 6. Course Policies */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaLock className="mr-2 text-indigo-600 text-lg" />
              6. Course Policies
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              The cybersecurity course has specific policies to ensure a safe, effective, and structured learning experience. Familiarize yourself with these rules:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li className="flex items-start gap-2">
                <FaShieldAlt className="mt-1 text-indigo-600 text-lg" />
                <strong>Lab Safety:</strong> Use tools like Nmap and Metasploit only in designated virtual environments (e.g., VirtualBox setups) to avoid legal or system risks.
              </li>
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Attendance:</strong> Attend all mandatory sessions (virtual) unless excused, as labs and discussions are critical to your learning.
              </li>
              <li className="flex items-start gap-2">
                <FaClock className="mt-1 text-indigo-600 text-lg" />
                <strong>Assignments:</strong> Submit assignments, including the Week 4 network security audit, via Morgan-LMS by the specified deadlines.
              </li>
              <li className="flex items-start gap-2">
                <FaUsers className="mt-1 text-indigo-600 text-lg" />
                <strong>Feedback:</strong> Provide constructive feedback on course content and labs through Morgan-LMS surveys to help improve the program.
              </li>
            </ul>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
              Non-compliance may result in penalties, such as restricted lab access or grade deductions. Contact instructors via Morgan-LMS for clarification on any policy.
            </p>
          </div>

          {/* Final Thoughts */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaGraduationCap className="mr-2 text-indigo-600 text-lg" />
              Final Thoughts
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Your journey in the Morgan Technical Training Cybersecurity Course is an opportunity to develop cutting-edge skills and a professional mindset. By following this handbook’s guidelines, you’ll master technical concepts, uphold ethical standards, and prepare for a successful career in cybersecurity. Embrace the challenges of labs, collaborate with your peers, and leverage Morgan-LMS resources to excel.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-semibold">
              Keep this handbook as your guide throughout the course. Refer to it for clarity on policies, seek support when needed, and strive for excellence in every task. Let’s build your future as a cybersecurity professional together!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Det4;