import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";
import { FaArrowLeft } from "react-icons/fa";

const Lesoon2: React.FC = () => {
  const navigate = useNavigate();
  const [openWeek, setOpenWeek] = useState<number | null>(null);

  useEffect(() => {
    const savedWeek = localStorage.getItem("openWeek");
    if (savedWeek) {
      setOpenWeek(Number(savedWeek));
    }
  }, []);

  const toggleDropdown = (week: number) => {
    const newWeek = openWeek === week ? null : week;
    setOpenWeek(newWeek);
    localStorage.setItem("openWeek", newWeek?.toString() || "");
  };

  return (
    <>
      <SideNav />
      <section className="min-h-screen bg-white text-black p-4 sm:p-6 md:p-8 flex flex-col items-center">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6 sm:mb-8 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back to Course
        </button>

        {/* Lesson Description */}
        <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-8">
          <h1 className="underline text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 uppercase tracking-wide">
            Ethical Hacking & Penetration Testing
          </h1>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            Ethical hacking involves legally testing systems and networks to identify vulnerabilities before malicious hackers exploit them. This course introduces you to penetration testing methodologies, teaching you how to perform reconnaissance, scan for vulnerabilities, and report findings responsibly.
          </p>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            By the end of this module, you’ll gain hands-on skills in offensive security, enabling you to conduct ethical hacks, prioritize vulnerabilities, and deliver professional reports to enhance system security.
          </p>
        </div>

        {/* Weeks Section */}
        <div className="max-w-4xl w-full mx-auto bg-gray-50 shadow-lg rounded-lg p-6 sm:p-8 border border-gray-200 transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col sm:flex-row justify-around mb-6 gap-4 sm:gap-6">
            <div
              onClick={() => toggleDropdown(1)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-sm sm:text-lg font-medium ${
                openWeek === 1
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              Week 1: Reconnaissance & Scanning
            </div>
            <div
              onClick={() => toggleDropdown(2)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-sm sm:text-lg font-medium ${
                openWeek === 2
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              Week 2: Reconnaissance & Scanning Part 2
            </div>
            <div
              onClick={() => toggleDropdown(3)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-sm sm:text-lg font-medium ${
                openWeek === 3
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              Week 3: Vulnerability Assessment
            </div>
          </div>

          {/* Week Content */}
          <div>
            {openWeek === 1 && (
              <div className="space-y-6">
                {/* Day 1 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl2day1"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 1: Ethical Hacking Overview
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Learn pentest phases, legal boundaries, CTF basics.
                  </p>
                </div>
                {/* Day 2 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl2day2"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 2: Passive Reconnaissance
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Learn OSINT techniques using tools like Maltego and Shodan for gathering public information.
                  </p>
                </div>
                {/* Day 3 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl2day3"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 3: Active Reconnaissance
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Use Nmap for host discovery and service enumeration (e.g., scan types, TCP/UDP).
                  </p>
                </div>
                {/* Day 4 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl2day4"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 4: Advanced Network Scanning
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Explore advanced Nmap scripts for OS detection and service versioning.
                  </p>
                </div>
                {/* Day 5 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl2day5"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 5: Vulnerability Mapping
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Map vulnerabilities to exploits using Nessus/Metasploit.
                  </p>
                </div>
              </div>
            )}

            {openWeek === 2 && (
              <div className="space-y-6">
                {/* Day 6 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl2day6"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 6: Exploitation Basics
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Use Metasploit to exploit vulnerabilities (e.g., FTP flaws).
                  </p>
                </div>
                {/* Day 7 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl2day7"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 7: Password Attacks
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Crack passwords with John the Ripper, Hydra.
                  </p>
                </div>
                {/* Day 8 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl2day8"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 8: Privilege Escalation
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Escalate privileges on Linux/Windows (e.g., kernel exploits).
                  </p>
                </div>
                {/* Day 9 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl2day9"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 9: Persistence Techniques
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Create backdoors, scheduled tasks (ethical scope).
                  </p>
                </div>
                {/* Day 10 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl2day10"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 10: Pentest Reporting
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Write professional reports (findings, remediation).
                  </p>
                </div>
              </div>
            )}

            {openWeek === 3 && (
              <div className="space-y-6">
                {/* Day 11 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link to="/csl2day11"
                    className="text-indigo-600 hover:text-indigo-800 transition duration-200">
                        Day 11: Lesson 2 Project - Vulnerability Assessment and Reporting Challenge
                      </Link>
                    </h3>
                    <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
                      <p>
                        <strong>Objective:</strong> Perform a comprehensive vulnerability assessment on a virtual environment (e.g., TryHackMe room like “Blue”).
                      </p>
                      <div>
                        <strong>Tasks:</strong>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Conduct reconnaissance (passive and active) to identify targets, such as gathering OSINT or scanning network ranges.</li>
                          <li>Scan with Nmap and Nessus to map vulnerabilities, identifying open ports, services, and potential weaknesses.</li>
                          <li>Analyze findings and prioritize vulnerabilities based on CVSS scores to focus on high-impact issues.</li>
                          <li>Write a professional report with recommendations for remediation, tailored for both technical and non-technical audiences.</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Deliverables:</strong>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>
                            <strong>GitHub repo:</strong> Include scripts (e.g., Nmap commands, Python automation), reconnaissance data (e.g., OSINT notes), and a detailed write-up of the assessment process.
                          </li>
                          <li>
                            <strong>LMS upload:</strong> Submit a PDF report (3–5 pages) with findings, prioritized vulnerabilities (including CVSS scores), impact analysis, and actionable remediation steps.
                          </li>
                          <li>
                            <strong>LMS text field:</strong> Provide any flag captured from the lab (if applicable, e.g., a CTF flag from TryHackMe’s “Blue” room).
                          </li>
                        </ul>
                      </div>
                      <p>
                        <strong>Bonus:</strong> Automate part of the scanning process with a Python script (e.g., using <code>nmap</code> or <code>python-nmap</code> to streamline port scanning).
                      </p>
                      <p>
                        <strong>Purpose:</strong> Develop hands-on offensive security skills through a beginner-friendly project focusing on reconnaissance, vulnerability scanning, and professional reporting. This challenge builds foundational skills for ethical hacking and prepares students for real-world penetration testing engagements.
                      </p>
                    </div>
                  </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Lesoon2;