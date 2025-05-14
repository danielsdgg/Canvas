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

const Deet2: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth() as AuthContext;
  const inputRef = useRef<HTMLInputElement>(null);

  // State for submission field
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    assignmentId: 2, // Unique for Deet2
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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">OWASP Top 10 Overview</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to OWASP Top 10
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              The OWASP Top 10 is a globally recognized standard that identifies the most critical web application security risks. Published by the Open Web Application Security Project (OWASP), it guides developers, security professionals, and organizations in securing applications against common vulnerabilities. This module explores four key vulnerabilities from the OWASP Top 10: <strong>SQL Injection</strong>, <strong>Cross-Site Scripting (XSS)</strong>, <strong>Cross-Site Request Forgery (CSRF)</strong>, and <strong>Broken Authentication</strong>. Understanding these threats is essential for protecting web applications and preparing for advanced cybersecurity topics like vulnerability scanning (<code>Dett5</code>) and exploitation (<code>Dett6</code>).
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Designed for beginners, this module combines theoretical explanations, real-world examples, and a practical exercise to analyze vulnerabilities in a test environment. By mastering these concepts, you’ll gain skills to identify, exploit, and mitigate risks, enhancing your readiness for Capture The Flag (CTF) challenges and real-world security assessments.
            </p>
          </div>

          {/* Understanding OWASP Top 10 */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding OWASP Top 10 Vulnerabilities
            </h2>
            <div className="space-y-6">
              {/* SQL Injection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. SQL Injection
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  SQL Injection occurs when attackers insert malicious SQL code into input fields (e.g., login forms) to manipulate a database. This can lead to unauthorized data access, modification, or deletion.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Impact:</strong> Exposure of sensitive data (e.g., user credentials), database corruption.</li>
                  <li><strong>Example:</strong> Entering <code>' OR '1'='1</code> in a login field to bypass authentication.</li>
                  <li><strong>Mitigation:</strong> Use prepared statements, input validation, and ORM frameworks.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable SQL Query
SELECT * FROM users WHERE username = 'user' AND password = 'pass' OR '1'='1';

# Attack Input
username: ' OR '1'='1
password: anything

# Secure Query (Prepared Statement)
const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
db.execute(query, [username, password]);`}
                </pre>
              </div>

              {/* Cross-Site Scripting (XSS) */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Cross-Site Scripting (XSS)
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  XSS allows attackers to inject malicious scripts into webpages viewed by other users, stealing data (e.g., cookies) or performing actions on their behalf.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Types:</strong> Reflected (via URL), Stored (in database), DOM-based (client-side).</li>
                  <li><strong>Impact:</strong> Session hijacking, defacement, phishing.</li>
                  <li><strong>Mitigation:</strong> Escape user input, use Content Security Policy (CSP), sanitize HTML.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable Code
<div>{userInput}</div>

# Attack Input
<script>alert('Hacked!');</script>

# Secure Code
import { sanitize } from 'dompurify';
<div>{sanitize(userInput)}</div>`}
                </pre>
              </div>

              {/* Cross-Site Request Forgery (CSRF) */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Cross-Site Request Forgery (CSRF)
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  CSRF tricks authenticated users into performing unintended actions (e.g., transferring funds) by submitting malicious requests via trusted sites.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Impact:</strong> Unauthorized actions, data manipulation.</li>
                  <li><strong>Example:</strong> Malicious link submits a form to change a user’s email.</li>
                  <li><strong>Mitigation:</strong> Use CSRF tokens, SameSite cookies, validate HTTP methods.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable Form
<form action="/update-email" method="POST">
  <input type="email" name="email">
</form>

# Attack Link
<img src="http://bank.com/update-email?email=attacker@evil.com">

# Secure Form
<form action="/update-email" method="POST">
  <input type="hidden" name="_csrf" value="unique-token">
  <input type="email" name="email">
</form>`}
                </pre>
              </div>

              {/* Broken Authentication */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Broken Authentication
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Broken Authentication occurs when authentication mechanisms are flawed, allowing attackers to impersonate users by exploiting weak passwords, session mismanagement, or credential stuffing.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Impact:</strong> Unauthorized access, account takeover.</li>
                  <li><strong>Example:</strong> Predictable session IDs or no password complexity rules.</li>
                  <li><strong>Mitigation:</strong> Enforce strong passwords, use multi-factor authentication (MFA), secure session management.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable Session Management
Cookie: sessionID=12345

# Attack: Guess or steal sessionID

# Secure Session Management
Set-Cookie: sessionID=secureRandomUUID; Secure; HttpOnly; SameSite=Strict

# Enable MFA
const login = async (user, pass, otp) => {
  if (verifyOTP(otp)) {
    // Authenticate user
  }
};`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Analyze OWASP Top 10 Vulnerabilities
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply your knowledge by analyzing vulnerabilities in a test web application (e.g., <code>http://testphp.vulnweb.com</code>) using browser tools and Burp Suite Community Edition. Document your findings in a PDF report (2–3 pages), focusing on one vulnerability (e.g., SQL Injection or XSS). Optionally, submit a GitHub repository with scripts (e.g., to detect XSS) or logs if you automate any steps.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up your environment: Install Burp Suite Community Edition and configure your browser to use it as a proxy (e.g., FoxyProxy, 127.0.0.1:8080).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Visit <code>http://testphp.vulnweb.com</code> and explore the site (e.g., login forms, search fields, comment sections).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Test for one vulnerability (choose one):
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li><strong>SQL Injection:</strong> Input <code>' OR '1'='1</code> in a login or search field, capture requests in Burp Suite.</li>
                  <li><strong>XSS:</strong> Inject <code>&lt;script&gt;alert('XSS');&lt;/script&gt;</code> in a comment or input field, check if it executes.</li>
                  <li><strong>CSRF:</strong> Check forms for missing CSRF tokens using Burp Suite’s repeater.</li>
                  <li><strong>Broken Authentication:</strong> Test weak passwords or session cookie attributes (e.g., missing <code>Secure</code>).</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Capture evidence: Take screenshots of Burp Suite (e.g., request/response) and browser (e.g., alert for XSS).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Write a 2–3 page PDF report including:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Introduction: Explain the chosen vulnerability and its OWASP Top 10 ranking.</li>
                  <li>Findings: Describe the test (e.g., input used, response observed) with screenshots.</li>
                  <li>Impact: Discuss potential consequences (e.g., data theft).</li>
                  <li>Mitigation: Recommend fixes (e.g., prepared statements for SQL Injection).</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Optional: Create a GitHub repository with a script (e.g., Python to detect XSS) or Burp Suite logs, including a <code>README.md</code> explaining your approach.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter guide for the exercise:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Install Burp Suite (Kali Linux)
sudo apt update
sudo apt install burpsuite

# Start Burp Suite
burpsuite &

# Configure Browser Proxy
# Firefox: Preferences > Network Settings > Manual Proxy
# Host: 127.0.0.1, Port: 8080

# Test SQL Injection in Burp Suite
# Capture login request, send to Repeater
# Input: username=' OR '1'='1, password=anything

# Test XSS
# Input in comment field: <script>alert('XSS');</script>
# Check browser for alert

# Save Burp Suite evidence
# Right-click request > Save item

# Create report (e.g., in Word/Google Docs)
# Export as PDF
`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 italic">
              Complete the exercise, test your setup, and submit your work below!
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
                    placeholder="e.g., https://github.com/username/owasp-vulnerability-analysis"
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
              OWASP Top 10 Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Enhance your skills with these recommended resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://owasp.org/www-project-top-ten/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  OWASP Top Ten - Official Documentation
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://tryhackme.com/room/owasptop10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  TryHackMe - OWASP Top 10 Walkthrough
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://portswigger.net/web-security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  PortSwigger Web Security Academy - Practical Labs
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.hacksplaining.com/exercises"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Hacksplaining - Interactive Security Training
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deet2;