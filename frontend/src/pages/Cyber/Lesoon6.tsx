import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";
import { FaArrowLeft } from "react-icons/fa";


const Lesoon6:React.FC = () => {
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
            Incident Response & Security Operations
          </h1>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            Incident response and security operations focus on detecting, responding to, and recovering from cybersecurity incidents while maintaining robust security monitoring. This course introduces you to incident handling frameworks, threat detection using SIEM tools, and proactive security operations to mitigate risks.
          </p>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            By the end of this module, you’ll gain hands-on skills in managing security incidents, analyzing threats, and optimizing security operations to protect organizations from evolving cyber threats.
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
              Week 1: Incident Response Basics
            </div>
            <div
              onClick={() => toggleDropdown(2)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-sm sm:text-lg font-medium ${
                openWeek === 2
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              Week 2: Blue Team Operations
            </div>
            <div
              onClick={() => toggleDropdown(3)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-sm sm:text-lg font-medium ${
                openWeek === 3
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              Week 3: Incident Response Project
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
                      to="/csl6day1"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 1: Incident Response Lifecycle
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Study preparation, detection, containment, recovery.
                  </p>
                </div>
                {/* Day 2 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl6day2"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 2: Threat Hunting
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Hunt for IOCs (Indicators of Compromise) in logs.
                  </p>
                </div>
                {/* Day 3 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl6day3"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 3: SIEM Introduction
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Use Splunk to analyze security events.
                  </p>
                </div>
                {/* Day 4 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl6day4"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 4: Containment Strategies
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Learn isolation, firewall updates, account lockout.
                  </p>
                </div>
                {/* Day 5 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl6day5"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 5: Eradication & Recovery
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Remove threats, restore systems, verify integrity.
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
                      to="/csl6day6"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 6: Security Monitoring
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Set up alerts for suspicious activity (e.g., IDS).
                  </p>
                </div>
                {/* Day 7 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl6day7"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 7: Endpoint Security
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Use EDR tools, analyze host-based threats.
                  </p>
                </div>
                {/* Day 8 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl6day8"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 8: Security Policies
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Write password policies, access controls.
                  </p>
                </div>
                {/* Day 9 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl6day9"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 9: Red vs Blue Lab
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Simulate attacker (red) vs. defender (blue) in TryHackMe.
                  </p>
                </div>
                {/* Day 10 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl6day10"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 10: Post-Incident Analysis
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Conduct root cause analysis, document lessons learned.
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
                      to="/csl6day11"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 11: Lesson 6 Project - Incident Response Simulation
                    </Link>
                  </h3>
                  <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
                    <p>
                      <strong>Objective:</strong> Respond to a simulated breach (e.g., ransomware attack).
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

export default Lesoon6


