import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaLaptopCode,
  FaShieldAlt,
  FaLock,
  FaExclamationTriangle,
  FaCloud,
  FaBookOpen,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

const Det5: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Onboarding Session Section */}
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
          <FaLaptopCode className="mr-3 text-xl sm:text-2xl" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Onboarding Session: Starting Your Cybersecurity Journey</h2>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6">
            Welcome to the Onboarding Session for Morgan Technical Training’s Cybersecurity Course! This session is your first step toward becoming a skilled cybersecurity professional. Designed to prepare you for the four-week program, it covers course expectations, the importance of maintaining a secure learning environment, and essential security practices like password management, phishing awareness, and data protection. By establishing a strong foundation, you’ll be ready to dive into Week 1’s introduction and succeed in hands-on labs using tools like Wireshark and Kali Linux. Let’s get started!
          </p>

          {/* 1. Welcome to the Course */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaUsers className="mr-2 text-indigo-600 text-lg" />
              1. Welcome to the Course
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              The onboarding session introduces you to the Morgan Technical Training Cybersecurity Course, setting clear expectations and preparing you for success. Here’s what you’ll learn today and how it fits into the program:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Course Overview:</strong> Explore the four-week roadmap, including lessons on ethical hacking, web security, and others.
              </li>
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Expectations:</strong> Commit to regular attendance, timely assignment submissions, and ethical tool use, as outlined in the Student Handbook.
              </li>
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Morgan-LMS:</strong> Learn to navigate Morgan-LMS for accessing resources, submitting assignments, and communicating with instructors.
              </li>
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Community:</strong> Join a collaborative learning community, engaging with peers and instructors to enhance your experience.
              </li>
            </ul>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
              This session aligns with Week 1’s introduction, ensuring you’re ready to tackle foundational concepts like the CIA triad and networking basics.
            </p>
          </div>

          {/* 2. Setting Up a Secure Environment */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaShieldAlt className="mr-2 text-indigo-600 text-lg" />
              2. Setting Up a Secure Environment
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              A secure lab environment is critical for safely practicing cybersecurity skills. Building on the setup guide, this section emphasizes security measures to protect your system and data during labs.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li className="flex items-start gap-2">
                <FaShieldAlt className="mt-1 text-indigo-600 text-lg" />
                <strong>Virtualization:</strong> Use VirtualBox to create isolated environments for Kali Linux, preventing risks to your host system.
              </li>
              <li className="flex items-start gap-2">
                <FaShieldAlt className="mt-1 text-indigo-600 text-lg" />
                <strong>Network Isolation:</strong> Configure “Host-Only” or “NAT” modes in VirtualBox to ensure lab activities don’t affect external networks.
              </li>
              <li className="flex items-start gap-2">
                <FaShieldAlt className="mt-1 text-indigo-600 text-lg" />
                <strong>Tool Safety:</strong> Run tools like Nmap and Metasploit only in designated lab environments, adhering to the Student Handbook’s policies.
              </li>
              <li className="flex items-start gap-2">
                <FaShieldAlt className="mt-1 text-indigo-600 text-lg" />
                <strong>Updates:</strong> Keep your virtual machines and tools updated to patch vulnerabilities, as recommended in the setup guide.
              </li>
            </ul>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
              A secure environment ensures safe experimentation, preparing you for labs in ethical hacking and vulnerability assessment.
            </p>
          </div>

          {/* 3. Password Management */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaLock className="mr-2 text-indigo-600 text-lg" />
              3. Password Management
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Strong password management is a cornerstone of cybersecurity. This section teaches you how to create and manage secure passwords for your lab accounts and Morgan-LMS.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li className="flex items-start gap-2">
                <FaLock className="mt-1 text-indigo-600 text-lg" />
                <strong>Strong Passwords:</strong> Use complex passwords with at least 12 characters, mixing letters, numbers, and symbols (e.g., <code className="bg-gray-200 px-2 py-1 rounded">X9#kP$2mN7vQ</code>).
              </li>
              <li className="flex items-start gap-2">
                <FaLock className="mt-1 text-indigo-600 text-lg" />
                <strong>Password Managers:</strong> Use tools like LastPass or Bitwarden to securely store and generate passwords for lab VMs and Morgan-LMS.
              </li>
              <li className="flex items-start gap-2">
                <FaLock className="mt-1 text-indigo-600 text-lg" />
                <strong>Unique Passwords:</strong> Avoid reusing passwords across accounts to minimize risks if one is compromised.
              </li>
              <li className="flex items-start gap-2">
                <FaLock className="mt-1 text-indigo-600 text-lg" />
                <strong>Two-Factor Authentication:</strong> Enable 2FA on Morgan-LMS and lab accounts for an extra layer of security.
              </li>
            </ul>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
              Practicing robust password management protects your coursework and prepares you for securing systems in real-world scenarios.
            </p>
          </div>

          {/* 4. Phishing Awareness */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaExclamationTriangle className="mr-2 text-indigo-600 text-lg" />
              4. Phishing Awareness
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Phishing attacks are a common threat that exploit human error. This section trains you to recognize and avoid phishing attempts, a key skill for cybersecurity professionals.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li className="flex items-start gap-2">
                <FaExclamationTriangle className="mt-1 text-indigo-600 text-lg" />
                <strong>Identify Phishing:</strong> Look for red flags like misspelled emails, urgent language, or suspicious links (e.g., <code className="bg-gray-200 px-2 py-1 rounded">login-morganlms.com</code> instead of the official domain).
              </li>
              <li className="flex items-start gap-2">
                <FaExclamationTriangle className="mt-1 text-indigo-600 text-lg" />
                <strong>Verify Sources:</strong> Confirm the sender’s email address and avoid clicking links in unsolicited messages; access Morgan-LMS directly via the official URL.
              </li>
              <li className="flex items-start gap-2">
                <FaExclamationTriangle className="mt-1 text-indigo-600 text-lg" />
                <strong>Simulated Exercises:</strong> Participate in phishing simulation labs (Week 3) to practice identifying and reporting phishing attempts.
              </li>
              <li className="flex items-start gap-2">
                <FaExclamationTriangle className="mt-1 text-indigo-600 text-lg" />
                <strong>Report Incidents:</strong> Notify instructors via Morgan-LMS if you suspect a phishing attempt targeting course accounts.
              </li>
            </ul>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
              Phishing awareness protects your credentials and enhances your ability to educate others, a key skill covered in the course’s social engineering lessons.
            </p>
          </div>

          {/* 5. Data Protection Best Practices */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gr ay-500 mb-2 flex items-center">
              <FaCloud className="mr-2 text-indigo-600 text-lg" />
              5. Data Protection Best Practices
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Protecting data is central to cybersecurity. This section outlines best practices for safeguarding sensitive information in your labs and coursework.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li className="flex items-start gap-2">
                <FaCloud className="mt-1 text-indigo-600 text-lg" />
                <strong>Encryption:</strong> Use encrypted storage (e.g., VeraCrypt) for lab files and ensure data in transit is secured (e.g., HTTPS for Morgan-LMS).
              </li>
              <li className="flex items-start gap-2">
                <FaCloud className="mt-1 text-indigo-600 text-lg" />
                <strong>Backups:</strong> Regularly back up virtual machines and coursework to an external drive or Morgan-LMS to prevent data loss.
              </li>
              <li className="flex items-start gap-2">
                <FaCloud className="mt-1 text-indigo-600 text-lg" />
                <strong>Access Control:</strong> Restrict access to lab VMs with strong passwords and avoid sharing credentials with peers.
              </li>
              <li className="flex items-start gap-2">
                <FaCloud className="mt-1 text-indigo-600 text-lg" />
                <strong>Ethical Use:</strong> Handle sensitive lab data (e.g., simulated network traffic) ethically, following the Student Handbook’s academic integrity policies.
              </li>
            </ul>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
              These practices ensure the integrity of your coursework and prepare you for securing data in professional environments, as covered in lessons like cloud security.
            </p>
          </div>

          {/* 6. Ongoing Security Awareness */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600 text-lg" />
              6. Ongoing Security Awareness
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Cybersecurity threats evolve rapidly, making ongoing awareness essential. Regular refresher courses and updates keep security top of mind throughout the program.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Refresher Courses:</strong> Participate in Morgan-LMS webinars on emerging threats (e.g., ransomware, zero-day exploits) to stay informed.
              </li>
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Security Blogs:</strong> Follow trusted sources like Krebs on Security or Threatpost to stay updated on industry trends.
              </li>
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Community Engagement:</strong> Join Morgan-LMS forums to discuss recent threats and share best practices with peers.
              </li>
              <li className="flex items-start gap-2">
                <FaBookOpen className="mt-1 text-indigo-600 text-lg" />
                <strong>Course Updates:</strong> Review Morgan-LMS announcements for updates to lab tools and security protocols.
              </li>
            </ul>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
              Ongoing awareness ensures you remain vigilant, enhancing your skills for the Week 4 network security audit and beyond.
            </p>
          </div>

          {/* 7. Getting Started */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaRocket className="mr-2 text-indigo-600 text-lg" />
              7. Getting Started
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              With the onboarding session complete, you’re ready to begin your cybersecurity journey. Follow these steps to dive into the course and maintain a secure learning environment:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li className="flex items-start gap-2">
                <FaRocket className="mt-1 text-indigo-600 text-lg" />
                <strong>Access Morgan-LMS:</strong> Log in to Morgan-LMS, review Week 1 materials, and set up your profile.
              </li>
              <li className="flex items-start gap-2">
                <FaRocket className="mt-1 text-indigo-600 text-lg" />
                <strong>Complete Setup:</strong> Finalize your lab environment (VirtualBox, Kali Linux) as per the Getting Started guide, ensuring security measures are in place.
              </li>
              <li className="flex items-start gap-2">
                <FaRocket className="mt-1 text-indigo-600 text-lg" />
                <strong>Review Handbook:</strong> Familiarize yourself with the Student Handbook’s policies on lab safety, academic integrity, and professional conduct.
              </li>
              <li className="flex items-start gap-2">
                <FaRocket className="mt-1 text-indigo-600 text-lg" />
                <strong>Engage with Peers:</strong> Join Morgan-LMS forums or virtual meetups to connect with classmates and instructors.
              </li>
            </ul>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
              These steps set you up for success, ensuring you’re prepared for the course’s hands-on labs and the Week 4 network security audit project.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Det5;