import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";
import { FaArrowLeft } from "react-icons/fa";

const Lesoon4:React.FC = () => {
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
            Cloud & Mobile Security
          </h1>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            Cloud and mobile security involves safeguarding cloud-based infrastructures and mobile devices from cyber threats and unauthorized access. This course introduces you to securing cloud environments, such as AWS and Azure, and protecting mobile applications against vulnerabilities like insecure APIs and data leakage.
          </p>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            By the end of this module, you’ll gain practical skills in assessing cloud and mobile security postures, identifying misconfigurations, and implementing robust defenses to ensure data integrity and user privacy.
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
              Week 1: Cloud Security Fundamentals
            </div>
            <div
              onClick={() => toggleDropdown(2)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-sm sm:text-lg font-medium ${
                openWeek === 2
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              Week 2: Mobile Security Fundamentals
            </div>
            <div
              onClick={() => toggleDropdown(3)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 text-center text-sm sm:text-lg font-medium ${
                openWeek === 3
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              Week 3: Assessment on Cloud & Mobile Security
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
                      to="/csl4day1"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 1: Introduction to cloud security
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Study cloud models (IaaS, PaaS, SaaS), shared responsibility model, and major providers (AWS, Azure, GCP).
                  </p>
                </div>
                {/* Day 2 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl4day2"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 2: Cloud Misconfigurations
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Explore common issues (open S3 buckets, exposed APIs) using ScoutSuite.
                  </p>
                </div>
                {/* Day 3 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl4day3"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 3: Identity & Access Management(IAM)
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Configure secure IAM policies, analyze overly permissive roles.
                  </p>
                </div>
                {/* Day 4 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl4day4"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 4: Cloud network security
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Secure VPCs, security groups, and NACLs; analyze traffic with CloudTrail.
                  </p>
                </div>
                {/* Day 5 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl4day5"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 5: Cloud security lab
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Combine misconfiguration scanning and hardening in a TryHackMe cloud lab.
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
                      to="/csl4day6"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 6: Introduction to mobile security
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Study iOS/Android architectures, app security models, and threat vectors.
                  </p>
                </div>
                {/* Day 7 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl4day7"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 7: Mobile app analysis
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Use MobSF to analyze a vulnerable Android/iOS app for weaknesses.
                  </p>
                </div>
                {/* Day 8 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl4day8"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 8: Mobile Network Attacks
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Intercept mobile app traffic with Burp Suite, test insecure APIs.
                  </p>
                </div>
                {/* Day 9 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl4day9"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 9: Secure Mobile Development
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Learn secure coding for mobile (e.g., input validation, secure storage).
                  </p>
                </div>
                {/* Day 10 */}
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200 hover:bg-gray-100 transition duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 underline">
                    <Link
                      to="/csl4day10"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 10: Mobile Penetration Testing Lab
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Test a vulnerable mobile app in a lab (e.g., TryHackMe’s mobile security room).
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
                      to="/csl4day11"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Day 11: Lesson 4 Project - Cloud & Mobile Security Audit
                    </Link>
                  </h3>
                  <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
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
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Lesoon4
