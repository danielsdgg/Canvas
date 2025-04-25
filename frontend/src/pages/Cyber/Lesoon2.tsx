import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";

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
      <section className="min-h-screen bg-gray-50 text-gray-900 p-4 sm:p-6 lg:p-8 flex flex-col items-center">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 hover:text-indigo-500 mb-4 sm:mb-6 transition-all duration-300 ease-in-out group self-start"
        >
          <FaArrowLeft className="mr-2 text-sm sm:text-base transition-transform group-hover:-translate-x-1" />
          <span className="text-sm sm:text-base font-medium">Back to Course</span>
        </button>

        {/* Lesson Description */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 lg:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-700 mb-3 sm:mb-4 tracking-tight">
            Ethical Hacking & Penetration Testing
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            Ethical hacking involves legally testing systems and networks to identify vulnerabilities before malicious hackers exploit them. This course introduces you to penetration testing methodologies, teaching you how to perform reconnaissance, scan for vulnerabilities, and report findings responsibly.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mt-3 sm:mt-4">
            By the end of this module, you’ll gain hands-on skills in offensive security, enabling you to conduct ethical hacks, prioritize vulnerabilities, and deliver professional reports to enhance system security.
          </p>
        </div>

        {/* Weeks Section */}
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 lg:p-8 border border-gray-200 transition-all duration-300 hover:shadow-xl">
          {/* Week Toggles */}
          <div className="space-y-3 sm:space-y-4">
            {[
              { week: 1, title: "Reconnaissance & Scanning" },
              { week: 2, title: "Reconnaissance & Scanning Part 2" },
              { week: 3, title: "Vulnerability Assessment and Reporting Challenge" },
            ].map(({ week, title }) => (
              <div
                key={week}
                className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleDropdown(week)}
                  className={`w-full flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 text-left text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-200 ${
                    openWeek === week ? "bg-indigo-600 text-white" : "bg-gray-100 text-indigo-700 hover:bg-indigo-100"
                  } rounded-lg focus:outline-none`}
                >
                  <span>{`Week ${week}: ${title}`}</span>
                  {openWeek === week ? (
                    <FaChevronUp className="text-sm sm:text-base" />
                  ) : (
                    <FaChevronDown className="text-sm sm:text-base" />
                  )}
                </button>
                {openWeek === week && (
                  <div className="p-4 sm:p-5 space-y-4 sm:space-y-5 bg-gray-50 rounded-b-lg">
                    {week === 1 && (
                      <>
                        {/* Day 1 */}
                        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
                          <h3 className="text-base sm:text-lg font-semibold text-indigo-600 mb-2 text-center">
                            <Link
                              to="/csl2day1"
                              className="hover:text-indigo-800 transition-colors duration-200"
                            >
                              Day 1: Ethical Hacking Overview
                            </Link>
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            Learn pentest phases, legal boundaries, CTF basics.
                          </p>
                        </div>
                        {/* Day 2 */}
                        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
                          <h3 className="text-base sm:text-lg font-semibold text-indigo-600 mb-2 text-center">
                            <Link
                              to="/csl2day2"
                              className="hover:text-indigo-800 transition-colors duration-200"
                            >
                              Day 2: Passive Reconnaissance
                            </Link>
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            Learn OSINT techniques using tools like Maltego and Shodan for gathering public information.
                          </p>
                        </div>
                        {/* Day 3 */}
                        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
                          <h3 className="text-base sm:text-lg font-semibold text-indigo-600 mb-2 text-center">
                            <Link
                              to="/csl2day3"
                              className="hover:text-indigo-800 transition-colors duration-200"
                            >
                              Day 3: Active Reconnaissance
                            </Link>
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            Use Nmap for host discovery and service enumeration (e.g., scan types, TCP/UDP).
                          </p>
                        </div>
                        {/* Day 4 */}
                        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
                          <h3 className="text-base sm:text-lg font-semibold text-indigo-600 mb-2 text-center">
                            <Link
                              to="/csl2day4"
                              className="hover:text-indigo-800 transition-colors duration-200"
                            >
                              Day 4: Advanced Network Scanning
                            </Link>
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            Explore advanced Nmap scripts for OS detection and service versioning.
                          </p>
                        </div>
                        {/* Day 5 */}
                        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
                          <h3 className="text-base sm:text-lg font-semibold text-indigo-600 mb-2 text-center">
                            <Link
                              to="/csl2day5"
                              className="hover:text-indigo-800 transition-colors duration-200"
                            >
                              Day 5: Vulnerability mapping
                            </Link>
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            Map vulnerabilities to exploits using Nessus/Metasploit.
                          </p>
                        </div>
                      </>
                    )}
                    {week === 2 && (
                      <>
                        {/* Day 6 */}
                        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
                          <h3 className="text-base sm:text-lg font-semibold text-indigo-600 mb-2 text-center">
                            <Link
                              to="/csl2day6"
                              className="hover:text-indigo-800 transition-colors duration-200"
                            >
                              Day 6: Exploitation Basics
                            </Link>
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          Use Metasploit to exploit vulnerabilities (e.g., FTP flaws).
                          </p>
                        </div>
                        {/* Day 7 */}
                        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
                          <h3 className="text-base sm:text-lg font-semibold text-indigo-600 mb-2 text-center">
                            <Link
                              to="/csl2day7"
                              className="hover:text-indigo-800 transition-colors duration-200"
                            >
                              Day 7: Password Attacks
                            </Link>
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          Crack passwords with John the Ripper, Hydra.
                          </p>
                        </div>
                        {/* Day 8 */}
                        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
                          <h3 className="text-base sm:text-lg font-semibold text-indigo-600 mb-2 text-center">
                            <Link
                              to="/csl2day8"
                              className="hover:text-indigo-800 transition-colors duration-200"
                            >
                              Day 8: Privilege Escalation
                            </Link>
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          Escalate privileges on Linux/Windows (e.g., kernel exploits).
                          </p>
                        </div>
                        {/* Day 9 */}
                        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
                          <h3 className="text-base sm:text-lg font-semibold text-indigo-600 mb-2 text-center">
                            <Link
                              to="/csl2day9"
                              className="hover:text-indigo-800 transition-colors duration-200"
                            >
                              Day 9: Persistence Techniques
                            </Link>
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          Create backdoors, scheduled tasks (ethical scope).
                          </p>
                        </div>
                        {/* Day 10 */}
                        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
                          <h3 className="text-base sm:text-lg font-semibold text-indigo-600 mb-2 text-center">
                            <Link
                              to="/csl2day10"
                              className="hover:text-indigo-800 transition-colors duration-200"
                            >
                              Day 10: Pentest Reporting
                            </Link>
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          Write professional reports (findings, remediation).
                          </p>
                        </div>
                      </>
                    )}
                    {week === 3 && (
                      <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
                        <h3 className="text-base sm:text-lg font-semibold text-indigo-600 mb-2 text-center">
                          <Link
                            to="/csl2day11"
                            className="hover:text-indigo-800 transition-colors duration-200"
                          >
                            Day 11: Lesson 2 Project - Vulnerability Assessment and Reporting Challenge
                          </Link>
                        </h3>
                        <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-3">
                          <p>
                            <strong>Objective:</strong> Perform a comprehensive vulnerability assessment on a virtual environment (e.g., TryHackMe room like “Blue”).
                          </p>
                          <div>
                            <strong>Tasks:</strong>
                            <ul className="list-disc list-inside ml-4">
                              <li>Conduct reconnaissance (passive and active) to identify targets.</li>
                              <li>Scan with Nmap and Nessus to map vulnerabilities.</li>
                              <li>Analyze findings and prioritize vulnerabilities based on CVSS scores.</li>
                              <li>Write a professional report with recommendations for remediation.</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Deliverables:</strong>
                            <ul className="list-disc list-inside ml-4">
                              <li>
                                <strong>GitHub repo:</strong> Scripts (e.g., Nmap commands), reconnaissance data, write-up.
                              </li>
                              <li>
                                <strong>LMS upload:</strong> PDF report with findings, prioritized vulnerabilities, and remediation steps.
                              </li>
                              <li>
                                <strong>LMS text field:</strong> Flag from the lab (if applicable).
                              </li>
                            </ul>
                          </div>
                          <p>
                            <strong>Bonus:</strong> Automate part of the scanning process with a Python script.
                          </p>
                          <p>
                            <strong>Purpose:</strong> Hands-on offensive skills, with a beginner-friendly project focusing on recon, scanning, and reporting.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Lesoon2;