import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaLaptopCode,
  FaShieldAlt,
  FaNetworkWired,
  FaLock,
  FaCloud,
  FaSearch,
  FaExclamationTriangle,
  FaRocket,
  FaCode,
  FaProjectDiagram,
} from "react-icons/fa";

const Det3: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Course Outline */}
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
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Cybersecurity Course Outline</h2>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6">
            Welcome to the Cybersecurity Course at Morgan Technical Training! This comprehensive program is designed to transform you into a skilled cybersecurity professional, equipped to protect systems, networks, and data from digital threats. The course is structured around six core lessons, each building on the previous to provide a holistic understanding of cybersecurity. From foundational networking concepts to advanced incident response, you’ll gain hands-on experience with industry-standard tools like Wireshark, Kali Linux, and Metasploit. Below is the detailed outline of the lessons you’ll explore over the four-week program.
          </p>

          {/* 1. Introduction to Cybersecurity & Networking Fundamentals */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaNetworkWired className="mr-2 text-indigo-600 text-lg" />
              1. Introduction to Cybersecurity & Networking Fundamentals
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              This lesson lays the groundwork for your cybersecurity journey by introducing core concepts and networking fundamentals. You’ll explore the principles that underpin secure systems and learn how networks operate.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li>Understanding the CIA triad: Confidentiality, Integrity, and Availability.</li>
              <li>Overview of cybersecurity threats: malware, phishing, DDoS attacks, and more.</li>
              <li>Networking basics: IP addresses, subnets, OSI model, and TCP/IP protocols.</li>
              <li>Hands-on setup of a lab environment using VirtualBox and Kali Linux (as covered in Getting Started).</li>
            </ul>
          </div>

          {/* 2. Ethical Hacking & Penetration Testing */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaShieldAlt className="mr-2 text-indigo-600 text-lg" />
              2. Ethical Hacking & Penetration Testing
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Learn the art of ethical hacking to identify and exploit vulnerabilities before malicious actors do. This lesson introduces penetration testing methodologies and tools for assessing system security.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li>Penetration testing phases: reconnaissance, scanning, exploitation, and reporting.</li>
              <li>Using tools like <code className="bg-gray-200 px-2 py-1 rounded">Nmap</code> and <code className="bg-gray-200 px-2 py-1 rounded">Metasploit</code> for vulnerability scanning and exploitation.</li>
              <li>Performing network scans and analyzing results with Wireshark.</li>
              <li>Best practices for ethical hacking and legal considerations.</li>
            </ul>
          </div>

          {/* 3. Web Application Security */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaLock className="mr-2 text-indigo-600 text-lg" />
              3. Web Application Security
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Web applications are common targets for cyberattacks. This lesson focuses on securing web apps by identifying and mitigating vulnerabilities like SQL injection and cross-site scripting (XSS).
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li>Common web vulnerabilities: OWASP Top 10 (e.g., SQL injection, XSS, CSRF).</li>
              <li>Using <code className="bg-gray-200 px-2 py-1 rounded">Burp Suite</code> to intercept and analyze HTTP requests.</li>
              <li>Implementing secure coding practices for web development.</li>
              <li>Performing web app penetration testing in a controlled lab environment.</li>
            </ul>
          </div>

          {/* 4. Cloud & Mobile Security */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaCloud className="mr-2 text-indigo-600 text-lg" />
              4. Cloud & Mobile Security
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              As organizations adopt cloud and mobile technologies, securing these platforms is critical. This lesson explores the unique challenges of cloud and mobile security.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li>Cloud security principles: shared responsibility model, IAM, and encryption.</li>
              <li>Securing mobile apps: secure storage, authentication, and data transmission.</li>
              <li>Analyzing cloud misconfigurations using tools like <code className="bg-gray-200 px-2 py-1 rounded">ScoutSuite</code>.</li>
              <li>Simulating attacks on cloud and mobile environments in a lab setting.</li>
            </ul>
          </div>

          {/* 5. Digital Forensics & Malware Analysis */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaSearch className="mr-2 text-indigo-600 text-lg" />
              5. Digital Forensics & Malware Analysis
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Learn to investigate cyber incidents and analyze malicious software. This lesson covers forensic techniques and tools for uncovering evidence and understanding malware behavior.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li>Digital forensics basics: evidence collection, chain of custody, and disk imaging.</li>
              <li>Analyzing malware with tools like <code className="bg-gray-200 px-2 py-1 rounded">Ghidra</code> and <code className="bg-gray-200 px-2 py-1 rounded">Cuckoo Sandbox</code>.</li>
              <li>Reverse engineering malicious code in a safe environment.</li>
              <li>Documenting findings for forensic reports.</li>
            </ul>
          </div>

          {/* 6. Incident Response & Security Operations */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500 mb-2 flex items-center">
              <FaExclamationTriangle className="mr-2 text-indigo-600 text-lg" />
              6. Incident Response & Security Operations
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Be prepared to respond to security incidents and manage ongoing security operations. This lesson teaches you how to detect, respond to, and recover from cyber threats.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3">
              <li>Incident response lifecycle: preparation, detection, containment, eradication, and recovery.</li>
              <li>Using SIEM tools (e.g., <code className="bg-gray-200 px-2 py-1 rounded">Splunk</code>) for log analysis and threat detection.</li>
              <li>Developing incident response plans and playbooks.</li>
              <li>Simulating a data breach response in a hands-on lab.</li>
            </ul>
          </div>

          {/* Become a Skilled Cybersecurity Professional */}
          <div className="bg-indigo-100 p-4 sm:p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600 text-lg" />
              Become a Skilled Cybersecurity Professional
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Cybersecurity is a dynamic and rewarding field that demands technical expertise, critical thinking, and adaptability. At Morgan Technical Training, this course equips you with the skills to excel:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3 mb-4">
              <li className="flex items-start gap-2">
                <FaCode className="mt-1 text-indigo-600 text-lg" />
                Master practical skills with tools like Wireshark, Nmap, and Burp Suite.
              </li>
              <li className="flex items-start gap-2">
                <FaProjectDiagram className="mt-1 text-indigo-600 text-lg" />
                Build a portfolio with real-world projects, including the Week 4 network security audit.
              </li>
              <li className="flex items-start gap-2">
                <FaShieldAlt className="mt-1 text-indigo-600 text-lg" />
                Develop a proactive mindset for identifying and mitigating threats.
              </li>
              <li className="flex items-start gap-2">
                <FaRocket className="mt-1 text-indigo-600 text-lg" />
                Stay current with evolving threats and technologies in cloud, mobile, and forensics.
              </li>
            </ul>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-semibold">
              Stay committed, practice regularly, and engage with Morgan-LMS resources. By the end of this course, you’ll be prepared to tackle advanced certifications (e.g., CEH, CompTIA Security+) and pursue a career in cybersecurity with confidence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Det3;