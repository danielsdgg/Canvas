import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";
import { FaArrowLeft } from "react-icons/fa";


const Lesoon3:React.FC = () => {
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
            Web Application Security
          </h1>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            Web application security focuses on protecting web-based systems from threats and vulnerabilities exploited by malicious actors. This course introduces you to techniques for identifying and mitigating common web vulnerabilities, such as SQL injection, cross-site scripting (XSS), and insecure authentication mechanisms.
          </p>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            By the end of this module, you’ll gain hands-on skills in assessing web applications, exploiting vulnerabilities ethically, and implementing secure coding practices to strengthen web system defenses.
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
              Week 1: Web fundamentals & vulnerabilities part 1
            </div>
            <div
              onClick={() => toggleDropdown(2)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-sm sm:text-lg font-medium ${
                openWeek === 2
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              Week 2: Web fundamentals & vulnerabilities part 2
            </div>
            <div
              onClick={() => toggleDropdown(3)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-sm sm:text-lg font-medium ${
                openWeek === 3
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              Week 3: Web App pentest
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
                      to="/csl3day1"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 1: How Web App Works
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Study HTTP, cookies, sessions, client-server model.
                  </p>
                </div>
                {/* Day 2 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl3day2"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 2: OWASP Top 10 Overview
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Explore SQL injection, XSS, CSRF, broken authentication.
                  </p>
                </div>
                {/* Day 3 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl3day3"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 3: Setting up Burp Suite
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Configure Burp Suite for intercepting HTTP traffic.
                  </p>
                </div>
                {/* Day 4 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl3day4"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 4: SQL Injection Basics
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Exploit SQL injection manually and with sqlmap.
                  </p>
                </div>
                {/* Day 5 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl3day5"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 5: Cross-Site Scripting(XSS)
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Test reflected, stored, DOM-based XSS attacks.
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
                      to="/csl3day6"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 6: Cross-Site Request Forgery (CSRF)
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Craft CSRF attacks, test mitigations.
                  </p>
                </div>
                {/* Day 7 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl3day7"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 7: Broken Authentication
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Exploit weak passwords, session flaws.
                  </p>
                </div>
                {/* Day 8 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl3day8"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 8: File Inclusion & Command Injection
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Test LFI/RFI, command injection vulnerabilities.
                  </p>
                </div>
                {/* Day 9 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl3day9"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 9: Web Scanning Tools
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Use OWASP ZAP, Nikto for automated scanning.
                  </p>
                </div>
                {/* Day 10 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl3day10"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 10: Secure Coding Basics
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Learn input validation, secure session management.
                  </p>
                </div>
              </div>
            )}

            {openWeek === 3 && (
              <div className="space-y-6">
                {/* Day 11 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl3day11"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 11: Lesson 3 Project - Web App Pentest Assessment
                    </Link>
                  </h3>
                  <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
                    <p>
                      <strong>Objective:</strong> Pentest a vulnerable web app (e.g., DVWA, WebGoat).
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
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Lesoon3
