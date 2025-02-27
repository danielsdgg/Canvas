import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBookOpen, FaUsers, FaShieldAlt, FaBriefcase, FaHeartbeat, FaGraduationCap, FaClock, FaCode } from "react-icons/fa";

const Day5: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Student Handbook Section */}
      <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-8 mx-auto max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        {/* Section Heading */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaBookOpen className="mr-3 text-2xl" />
          <h2 className="text-2xl sm:text-3xl font-semibold">Student Handbook: Guidelines & Professionalism in Learning</h2>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Welcome to Morgan Technical Training’s Student Handbook! This guide outlines the expectations, policies, and resources designed to support your journey through our frontend development course. As a student, you’re part of a community committed to excellence, collaboration, and growth. The following sections detail the standards of conduct, academic integrity, and professional development practices that will help you succeed in this program and beyond.
          </p>

          {/* 1. Code of Conduct */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaUsers className="mr-2 text-indigo-600" />
              1. Code of Conduct
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              At Morgan Technical Training, we foster a respectful and inclusive learning environment. All students are expected to uphold the highest standards of integrity and professionalism, both in-person and online. Adhering to our code of conduct ensures a positive experience for everyone:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li className="flex items-start">
                <FaShieldAlt className="mr-2 mt-1 text-indigo-600" />
                <strong>Respect:</strong> Treat instructors, peers, and staff with courtesy and dignity, valuing diverse perspectives.
              </li>
              <li className="flex items-start">
                <FaShieldAlt className="mr-2 mt-1 text-indigo-600" />
                <strong>Honesty:</strong> Engage in ethical behavior, submitting original work and acknowledging contributions from others.
              </li>
              <li className="flex items-start">
                <FaShieldAlt className="mr-2 mt-1 text-indigo-600" />
                <strong>Punctuality:</strong> Attend all sessions on time and submit assignments by deadlines to maintain course momentum.
              </li>
              <li className="flex items-start">
                <FaShieldAlt className="mr-2 mt-1 text-indigo-600" />
                <strong>Communication:</strong> Use respectful language in discussions, emails, and Morgan-LMS interactions.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Violations may result in warnings, grade penalties, or removal from the course, depending on severity, as determined by the instructors and administration.
            </p>
          </div>

          {/* 2. Classroom Etiquette */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaUsers className="mr-2 text-indigo-600" />
              2. Classroom Etiquette
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Whether in a physical classroom or a virtual Zoom session, professional behavior enhances learning for all. Our etiquette guidelines ensure a focused and respectful environment:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                <strong>Minimize Distractions:</strong> Keep phones on silent, avoid side conversations, and mute microphones when not speaking in virtual settings.
              </li>
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                <strong>Participation:</strong> Raise your hand (physically or via Zoom’s feature) before speaking to maintain order during discussions.
              </li>
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                <strong>Engagement:</strong> Contribute constructively to conversations, ask questions, and provide feedback respectfully.
              </li>
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                <strong>Preparation:</strong> Come prepared with completed assignments and reviewed materials to actively participate.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Following these guidelines helps create a collaborative space where everyone can thrive, mirroring the teamwork you’ll experience in professional development roles.
            </p>
          </div>

          {/* 3. Academic Integrity */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaShieldAlt className="mr-2 text-indigo-600" />
              3. Academic Integrity
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Academic integrity is the cornerstone of your education at Morgan Technical Training. It ensures that your skills and achievements are genuinely earned. Key principles and violations include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                <strong>Plagiarism:</strong> Submitting others’ code, ideas, or content (e.g., from Stack Overflow, GitHub) without proper citation is prohibited. Always credit sources in comments or documentation.
              </li>
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                <strong>Cheating:</strong> Using unauthorized resources (e.g., hidden notes, peers’ work) during quizzes or assignments undermines your learning and is not tolerated.
              </li>
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                <strong>Fabrication:</strong> Falsifying data, project results, or participation records violates trust and program standards.
              </li>
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                <strong>Collaboration:</strong> Work independently on individual assignments unless collaboration is explicitly allowed by instructors.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Consequences range from grade deductions to course dismissal, depending on the offense. Report any concerns via Morgan-LMS’s Inbox feature or directly to instructors.
            </p>
          </div>

          {/* 4. Professional Development */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaBriefcase className="mr-2 text-indigo-600" />
              4. Professional Development
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Beyond technical skills, Morgan Technical Training emphasizes professional growth to prepare you for a career in frontend development. Engage in these activities to build your profile:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li className="flex items-start">
                <FaUsers className="mr-2 mt-1 text-indigo-600" />
                <strong>Networking:</strong> Connect with peers, instructors, and industry pros via Morgan-LMS forums, Slack channels, or local tech meetups.
              </li>
              <li className="flex items-start">
                <FaBriefcase className="mr-2 mt-1 text-indigo-600" />
                <strong>Portfolio:</strong> Build a professional portfolio on GitHub showcasing your projects (e.g., a responsive website) to impress future employers.
              </li>
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                <strong>Workshops:</strong> Attend Morgan-hosted webinars, coding bootcamps, or online sessions (e.g., React workshops) to expand your skills.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Open Source:</strong> Contribute to open-source projects to gain real-world experience and visibility in the developer community.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Start a LinkedIn profile to document your progress, share certificates from this course, and connect with the Morgan Technical Training alumni network.
            </p>
          </div>

          {/* 5. Mental Health and Well-being */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaHeartbeat className="mr-2 text-indigo-600" />
              5. Mental Health and Well-being
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Frontend development can be demanding, and maintaining mental well-being is essential for long-term success. Morgan Technical Training supports your health with these recommendations:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li className="flex items-start">
                <FaHeartbeat className="mr-2 mt-1 text-indigo-600" />
                <strong>Balance:</strong> Maintain a healthy work-life balance by scheduling breaks, exercise, and personal time outside of coding.
              </li>
              <li className="flex items-start">
                <FaUsers className="mr-2 mt-1 text-indigo-600" />
                <strong>Support:</strong> Reach out to instructors, peers, or Morgan’s counseling services via Morgan-LMS if you’re feeling overwhelmed or need guidance.
              </li>
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                <strong>Mindfulness:</strong> Practice relaxation techniques like deep breathing, meditation, or short walks to manage stress during intense coding sessions.
              </li>
              <li className="flex items-start">
                <FaClock className="mr-2 mt-1 text-indigo-600" />
                <strong>Time Management:</strong> Use tools like calendars or Pomodoro timers to break tasks into manageable chunks, avoiding burnout.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Your well-being is a priority. Morgan Technical Training offers resources like weekly check-ins and a dedicated support channel on Morgan-LMS to help you stay on track.
            </p>
          </div>

          {/* Final Thoughts */}
          <div>
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaGraduationCap className="mr-2 text-indigo-600" />
              Final Thoughts
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Your success in this frontend development course hinges on discipline, dedication, and a proactive approach to learning. By adhering to these guidelines, you’ll not only excel in your technical skills but also develop the professionalism and resilience needed for a career in tech. Morgan Technical Training is committed to your growth—embrace the challenges, collaborate with your peers, and strive for excellence every step of the way.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-semibold">
              Keep this handbook as your guide throughout the course. Refer to it as needed, and don’t hesitate to reach out to our team via Morgan-LMS for clarification or support. Let’s build your future in frontend development together!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Day5;