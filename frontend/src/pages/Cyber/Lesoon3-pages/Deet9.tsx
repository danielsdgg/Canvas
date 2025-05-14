import React, { useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCode,
  FaList,
  FaLink,
  FaEdit,
  FaCheckCircle,
  FaRocket,
  FaBookOpen,
  FaShieldAlt,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

// Define interfaces for type safety
interface UserDetails {
  id: string; // Ensure id is string to avoid TS2322
}

interface UserData {
  userDetails: UserDetails;
}

interface AuthContext {
  userData: UserData | null;
  userToken: string | null;
}

interface FormState {
  assignmentId: number;
  userId: string;
  submissionUrl: string;
  submissionType: "github" | "pdf";
}

const Deet9: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth() as AuthContext;
  const inputRef = useRef<HTMLInputElement>(null);

  // State for submission field
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    assignmentId: 9, // Unique for Deet9
    userId: String(userData?.userDetails.id ?? ""), // Cast to string to fix TS2322
    submissionUrl: "",
    submissionType: "pdf", // Default to PDF for analytical report
  });

  // Handle input change for submission URL and type
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  // Handle file upload for PDF submissions
  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      alert("No file selected. Please choose a file.");
      return;
    }
    if (file.type !== "application/pdf") {
      alert("Please upload a valid PDF file.");
      return;
    }
    // Simulate file upload (replace with actual backend logic)
    const fileUrl = URL.createObjectURL(file);
    setForm((prev) => ({
      ...prev,
      submissionUrl: fileUrl,
    }));
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!form.submissionUrl) {
        alert(`Please provide a ${form.submissionType === "github" ? "GitHub link" : "PDF file"}.`);
        return;
      }

      if (!userToken) {
        alert("Authentication error. Please log in again.");
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/api/v1/assignments/submit", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Submission failed.");
        }

        setSubmitted(true);
        alert("Assignment submitted successfully!");
      } catch (error) {
        console.error("Submission error:", error);
        alert(`Failed to submit: ${error instanceof Error ? error.message : "Unknown error"}`);
      }
    },
    [form, userToken]
  );

  return (
    <>
      <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-8 mx-auto max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105 p-2"
          aria-label="Go back"
        >
          <FaArrowLeft className="mr-2 text-lg" />
          Back
        </button>

        {/* Section Heading */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaShieldAlt className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Web Scanning Tools</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to Web Scanning Tools
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Web scanning tools like OWASP ZAP and Nikto are essential for identifying vulnerabilities in web applications, such as XSS, SQL injection, and server misconfigurations, many of which are listed in the OWASP Top 10. OWASP ZAP provides comprehensive scanning (active and passive), while Nikto excels at detecting server issues and outdated software. This module covers using these tools to perform automated vulnerability scans, analyze results, and recommend mitigations, building on skills from modules like OWASP Top 10 analysis (<code>Deet2</code>) and penetration testing (<code>Dett6</code>).
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Designed for beginners, this module provides detailed instructions, practical examples, and a hands-on exercise to scan a test web application. By mastering these tools, you’ll learn to automate vulnerability detection, interpret scan results, and prepare for Capture The Flag (CTF) challenges and real-world security assessments.
            </p>
          </div>

          {/* Understanding Web Scanning Tools */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding Web Scanning Tools
            </h2>
            <div className="space-y-6">
              {/* OWASP ZAP */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. OWASP ZAP
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  OWASP ZAP (Zed Attack Proxy) is an open-source web application security scanner that performs passive and active scans to identify vulnerabilities like XSS, SQL injection, and broken authentication.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Features:</strong> Passive scanning (analyzing traffic), active scanning (sending attack payloads), spidering, fuzzing.</li>
                  <li><strong>Use Case:</strong> Detecting XSS by injecting payloads or finding misconfigured headers.</li>
                  <li><strong>Output:</strong> Detailed reports with alerts (e.g., High, Medium, Low severity).</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Install OWASP ZAP (Kali Linux)
sudo apt update
sudo apt install zaproxy

# Start ZAP
zaproxy &

# Basic Active Scan
# In ZAP: Add target (http://testphp.vulnweb.com)
# Tools > Active Scan > Start
# Save report: Report > Generate HTML Report
`}
                </pre>
              </div>

              {/* Nikto */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Nikto
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Nikto is an open-source web server scanner that identifies misconfigurations, outdated software, and known vulnerabilities in web servers and applications.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Features:</strong> Server configuration checks, vulnerability database lookups, file/directory enumeration.</li>
                  <li><strong>Use Case:</strong> Detecting outdated Apache versions or exposed <code>/admin</code> directories.</li>
                  <li><strong>Output:</strong> Terminal output or saved files (e.g., HTML, text).</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Install Nikto (Kali Linux)
sudo apt update
sudo apt install nikto

# Basic Scan
nikto -h http://testphp.vulnweb.com -o scan.html -Format html

# Example Output
+ Server: Apache/2.2.8 (Vulnerable version)
+ /admin/: Directory found
+ OSVDB-877: TRACE method enabled
`}
                </pre>
              </div>

              {/* Analyzing Scan Results */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Analyzing Scan Results
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Effective use of scanning tools requires analyzing results to prioritize vulnerabilities and recommend mitigations based on severity and impact.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>ZAP:</strong> Review alerts (e.g., <code>Cross Site Scripting</code>), check evidence (e.g., injected payload), and verify manually.</li>
                  <li><strong>Nikto:</strong> Identify high-risk issues (e.g., outdated software), cross-reference with CVE databases.</li>
                  <li><strong>Prioritization:</strong> Focus on high-severity issues (e.g., SQL injection) over informational findings.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# ZAP Alert Example
Alert: Cross Site Scripting (Reflected)
URL: http://testphp.vulnweb.com/search.php?query=<script>alert(1)</script>
Risk: High
Recommendation: Sanitize user input

# Nikto Output Example
+ OSVDB-3233: Apache/2.2.8 appears to be outdated (current is 2.4.x)
Recommendation: Update Apache to latest version
`}
                </pre>
              </div>

              {/* Mitigating Vulnerabilities */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Mitigating Vulnerabilities
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Mitigating vulnerabilities found by scanning tools involves applying secure configurations, patching software, and implementing input validation.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Software Updates:</strong> Patch web servers (e.g., Apache) and applications.</li>
                  <li><strong>Input Validation:</strong> Sanitize user inputs to prevent XSS or injection attacks.</li>
                  <li><strong>Server Hardening:</strong> Disable unnecessary methods (e.g., TRACE), secure directories.</li>
                  <li><strong>Monitoring:</strong> Use WAFs and logging to detect attacks.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Secure Apache Configuration
httpd.conf:
<Directory /admin>
  Order deny,allow
  Deny from all
</Directory>
TraceEnable Off

# Sanitize Input (PHP)
$input = htmlspecialchars($_GET['query'], ENT_QUOTES, 'UTF-8');

# Update Apache (Kali Linux)
sudo apt update
sudo apt upgrade apache2
`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Scan with OWASP ZAP and Nikto
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply your knowledge by scanning a test web application (<code>http://testphp.vulnweb.com</code>) using OWASP ZAP and Nikto. Document your process and findings in a PDF report (2–3 pages), including screenshots. Optionally, submit a GitHub repository with scripts (e.g., automating scans) or scan logs and a <code>README.md</code>.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up your environment: Install OWASP ZAP and Nikto on Kali Linux. Configure your browser to use ZAP’s proxy (127.0.0.1:8080).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Scan with OWASP ZAP:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Add <code>http://testphp.vulnweb.com</code> to ZAP’s Sites tree.</li>
                  <li>Run a spider to crawl the site (Tools - Spider).</li>
                  <li>Perform an active scan (Tools - Active Scan) and wait for completion.</li>
                  <li>Export the report (Report - Generate HTML Report) and take screenshots of high-severity alerts (e.g., XSS).</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Scan with Nikto:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Run a Nikto scan: <code>nikto -h http://testphp.vulnweb.com -o scan.html -Format html</code>.</li>
                  <li>Review the output for issues like outdated software or exposed directories.</li>
                  <li>Save the HTML report and take screenshots of critical findings (e.g., vulnerable Apache version).</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Write a 2–3 page PDF report including:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Introduction: Explain web scanning and its importance.</li>
                  <li>ZAP Findings: Describe 2–3 vulnerabilities (e.g., XSS, misconfigured headers) with screenshots and impact.</li>
                  <li>Nikto Findings: Describe 2–3 issues (e.g., outdated software, exposed directories) with screenshots and impact.</li>
                  <li>Mitigation: Recommend fixes (e.g., update software, sanitize inputs).</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Optional: Create a GitHub repository with a script (e.g., Python to automate Nikto scans), ZAP/Nikto logs, or reports, including a <code>README.md</code>.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter guide for the exercise:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Install Tools (Kali Linux)
sudo apt update
sudo apt install zaproxy nikto

# Start OWASP ZAP
zaproxy &

# Configure Browser Proxy (Firefox)
# Preferences > Network Settings > Manual Proxy
# HTTP Proxy: 127.0.0.1, Port: 8080

# ZAP: Spider and Active Scan
# Add target: http://testphp.vulnweb.com
# Tools > Spider > Start
# Tools > Active Scan > Start
# Save report: Report > Generate HTML Report

# Nikto Scan
nikto -h http://testphp.vulnweb.com -o scan.html -Format html

# Save Evidence
# ZAP: Screenshot alerts (e.g., XSS)
# Nikto: Save scan.html, screenshot key findings

# Create Report
# Use Word/Google Docs, include screenshots
# Export as PDF
`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 italic">
              Complete the exercise, test your setup, and submit your work below! Ensure you only scan authorized systems.
            </p>
          </div>

          {/* Submission Section */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaLink className="mr-2 text-indigo-600" />
              Submit Your Work
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-gray-800 text-sm sm:text-base font-semibold mb-2"
                  htmlFor="submissionType"
                >
                  Submission Type:
                </label>
                <select
                  name="submissionType"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                  value={form.submissionType}
                  onChange={handleInputChange}
                  aria-label="Select submission type"
                >
                  <option value="github">GitHub Repository Link</option>
                  <option value="pdf">PDF Report</option>
                </select>
              </div>
              {form.submissionType === "github" ? (
                <div>
                  <label
                    className="block text-gray-800 text-sm sm:text-base font-semibold mb-2"
                    htmlFor="submissionUrl"
                  >
                    Paste Your GitHub Repository Link:
                  </label>
                  <textarea
                    name="submissionUrl"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                    rows={4}
                    placeholder="e.g., https://github.com/username/web-scanning-lab"
                    value={form.submissionUrl}
                    onChange={handleInputChange}
                    aria-label="GitHub repository link"
                  />
                </div>
              ) : (
                <div>
                  <label
                    className="block text-gray-800 text-sm sm:text-base font-semibold mb-2"
                    htmlFor="submissionFile"
                  >
                    Upload Your PDF Report:
                  </label>
                  <input
                    type="file"
                    name="submissionFile"
                    accept="application/pdf"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                    onChange={handleFileUpload}
                    ref={inputRef}
                    aria-label="Upload PDF report"
                  />
                </div>
              )}
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                aria-label="Submit exercise"
              >
                Submit Exercise
              </button>
            </form>
            {submitted && (
              <p className="mt-4 text-green-600 font-medium flex items-center">
                <FaCheckCircle className="mr-2" />
                Your exercise has been submitted successfully!
              </p>
            )}
          </div>

          {/* Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Web Scanning Tools Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Enhance your skills with these recommended resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.zaproxy.org/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  OWASP ZAP - Official Documentation
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://github.com/cirt/nikto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Nikto - Official Documentation
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://portswigger.net/web-security/scanning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  PortSwigger - Web Application Scanning
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://tryhackme.com/room/owaspzap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline effettuoso:text-indigo-800"
                >
                  TryHackMe - OWASP ZAP Walkthrough
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deet9;