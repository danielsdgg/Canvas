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

const Deet10: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth() as AuthContext;
  const inputRef = useRef<HTMLInputElement>(null);

  // State for submission field
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    assignmentId: 10, // Unique for Deet10
    userId: String(userData?.userDetails.id ?? ""), // Cast to string to fix TS2322
    submissionUrl: "",
    submissionType: "github", // Default to GitHub for code submission
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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Secure Coding Basics</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to Secure Coding Basics
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Secure coding practices are essential for developing web applications that resist attacks like XSS, SQL injection, and session hijacking, many of which are listed in the OWASP Top 10. This module covers key principles: secure coding practices (e.g., least privilege), input validation (e.g., whitelisting), output encoding (e.g., HTML escaping), and secure session management (e.g., secure cookies). These techniques prevent vulnerabilities seen in modules like XSS (<code>Deet3</code>) and broken authentication (<code>Deet7</code>).
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Designed for beginners, this module provides detailed explanations, practical examples, and a hands-on exercise to build a secure web application. By mastering these practices, you’ll learn to write robust code, test its security, and prepare for secure development in real-world projects and Capture The Flag (CTF) challenges.
            </p>
          </div>

          {/* Understanding Secure Coding Basics */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding Secure Coding Basics
            </h2>
            <div className="space-y-6">
              {/* Secure Coding Practices */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. Secure Coding Practices
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Secure coding involves principles like least privilege, defense-in-depth, and failing securely to minimize vulnerabilities.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Least Privilege:</strong> Run applications with minimal permissions.</li>
                  <li><strong>Defense-in-Depth:</strong> Use multiple security layers (e.g., WAF, input validation).</li>
                  <li><strong>Fail Securely:</strong> Ensure errors don’t expose sensitive data.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable Code (PHP): Exposes Error Details
if (!$db->connect()) {
  die("DB Error: " . $db->error);
}

# Secure Code (PHP): Generic Error
if (!$db->connect()) {
  log_error("DB connection failed");
  die("Internal server error");
}
`}
                </pre>
              </div>

              {/* Input Validation */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Input Validation
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Input validation ensures user inputs meet expected formats, preventing attacks like SQL injection and XSS.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Whitelisting:</strong> Allow only known safe inputs (e.g., alphanumeric).</li>
                  <li><strong>Sanitization:</strong> Remove or escape dangerous characters.</li>
                  <li><strong>Tools:</strong> Use libraries like validator.js or PHP’s <code>filter_var</code>.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable Code (PHP): No Validation
$username = $_POST['username'];
$sql = "SELECT * FROM users WHERE username = '$username'";

# Secure Code (PHP): Whitelisting
$username = preg_replace('/[^a-zA-Z0-9]/', '', $_POST['username']);
if (strlen($username) > 20) {
  die("Invalid username");
}
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
$stmt->execute([$username]);
`}
                </pre>
              </div>

              {/* Output Encoding */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Output Encoding
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Output encoding escapes user inputs before rendering to prevent XSS and other injection attacks.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>HTML Encoding:</strong> Escape <code>{`<`}</code> and <code>{`>`}</code> to prevent script injection.</li>
                  <li><strong>Context-Specific:</strong> Use appropriate encoding for HTML, JavaScript, URLs, etc.</li>
                  <li><strong>Tools:</strong> Use libraries like <code>htmlspecialchars</code> (PHP) or <code>DOMPurify</code> (JavaScript).</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable Code (PHP): No Encoding
echo "<p>Welcome, " . $_GET['name'] . "</p>";

# Secure Code (PHP): HTML Encoding
echo "<p>Welcome, " . htmlspecialchars($_GET['name'], ENT_QUOTES, 'UTF-8') . "</p>";

# Example Attack
# Vulnerable: ?name=<script>alert('XSS')</script>
# Output: <p>Welcome, <script>alert('XSS')</script></p>
# Secure: ?name=<script>alert('XSS')</script>
# Output: <p>Welcome, &lt;script&gt;alert('XSS')&lt;/script&gt;</p>
`}
                </pre>
              </div>

              {/* Secure Session Management */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Secure Session Management
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Secure session management prevents session hijacking and fixation by using strong session IDs, secure cookies, and proper session handling.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Secure Cookies:</strong> Use <code>HttpOnly</code>, <code>Secure</code>, and <code>SameSite</code> attributes.</li>
                  <li><strong>Session IDs:</strong> Generate random, unpredictable IDs.</li>
                  <li><strong>Expiration:</strong> Invalidate sessions on logout or timeout.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable Code (PHP): Insecure Cookie
session_start();
setcookie('sessionID', session_id());

# Secure Code (PHP): Secure Cookie
session_start();
session_regenerate_id(true);
setcookie('sessionID', session_id(), [
  'httponly' => true,
  'secure' => true,
  'samesite' => 'Strict',
  'expires' => time() + 3600
]);

# Logout
session_destroy();
setcookie('sessionID', '', time() - 3600);
`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Build a Secure Login Form
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply secure coding practices by building a login form (in PHP or Node.js) that implements input validation, output encoding, and secure session management. Test it against common attacks (e.g., XSS, SQL injection) and document your code and results. Submit your work via a GitHub repository with a <code>README.md</code> explaining the implementation and tests. Optionally, submit a PDF report (2–3 pages) with code snippets, test results, and screenshots.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up your environment: Use a local web server (e.g., XAMPP for PHP or Node.js with Express). Create a database (e.g., MySQL) with a <code>users</code> table (<code>username</code>, <code>password_hash</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Build the Login Form:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Create a login form (<code>login.php</code> or <code>login.js</code>) with username and password fields.</li>
                  <li>Implement input validation: Allow only alphanumeric usernames, limit length (e.g., 20 characters).</li>
                  <li>Use prepared statements or parameterized queries to prevent SQL injection.</li>
                  <li>Apply output encoding (e.g., <code>htmlspecialchars</code> or <code>res.json</code> escaping) for displayed data.</li>
                  <li>Implement secure session management: Use secure cookies, regenerate session IDs, and invalidate sessions on logout.</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Test the Application:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Test for SQL injection (e.g., <code>' OR '1'='1</code>) and verify it fails.</li>
                  <li>Test for XSS (e.g., <code>{`<script>alert('XSS')</script>`}</code>) and confirm it’s escaped.</li>
                  <li>Test session security: Check cookie attributes (<code>HttpOnly</code>, <code>Secure</code>) and attempt session hijacking with a stolen cookie.</li>
                  <li>Take screenshots of test inputs and outputs (e.g., escaped XSS, failed SQL injection).</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Submit via GitHub:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Create a repository with your code (e.g., <code>login.php</code>, <code>login.js</code>, SQL schema).</li>
                  <li>Include a <code>README.md</code> with: setup instructions, code explanation, test cases, and results.</li>
                  <li>Add test evidence (e.g., screenshots, logs) to the repository.</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Optional: Submit a 2–3 page PDF report including:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Introduction: Explain secure coding principles.</li>
                  <li>Implementation: Share code snippets for validation, encoding, and sessions.</li>
                  <li>Test Results: Describe test cases (e.g., XSS, SQL injection) with screenshots.</li>
                  <li>Conclusion: Discuss the importance of secure coding.</li>
                </ul>
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter guide for the exercise (PHP example):
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Setup (XAMPP, MySQL)
# Create users table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20) UNIQUE,
  password_hash VARCHAR(255)
);

# Install PHP (Kali/Ubuntu)
sudo apt update
sudo apt install php php-mysql apache2

# login.php
<?php
session_start();
session_regenerate_id(true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = preg_replace('/[^a-zA-Z0-9]/', '', $_POST['username']);
  $password = $_POST['password'];
  if (strlen($username) > 20 || strlen($username) < 3) {
    die("Invalid username");
  }

  $pdo = new PDO('mysql:host=localhost;dbname=test', 'root', '');
  $stmt = $pdo->prepare('SELECT password_hash FROM users WHERE username = ?');
  $stmt->execute([$username]);
  $user = $stmt->fetch();

  if ($user && password_verify($password, $user['password_hash'])) {
    $_SESSION['user'] = $username;
    setcookie('sessionID', session_id(), [
      'httponly' => true,
      'secure' => true,
      'samesite' => 'Strict'
    ]);
    echo "<p>Welcome, " . htmlspecialchars($username, ENT_QUOTES, 'UTF-8') . "</p>";
  } else {
    echo "Invalid credentials";
  }
}
?>
<form method="POST">
  Username: <input type="text" name="username">
  Password: <input type="password" name="password">
  <button type="submit">Login</button>
</form>

# Test Attacks
# SQL Injection: username="' OR '1'='1" (Should fail)
# XSS: username="<script>alert('XSS')</script>" (Should be escaped)
# Check cookie: F12 > Application > Cookies (Verify HttpOnly, Secure)

# Save Evidence
# Screenshots: Escaped XSS, failed SQL injection, cookie attributes
# Logs: Apache error logs (optional)

# GitHub Submission
# Files: login.php, schema.sql, README.md, screenshots/
# README.md: Setup, code explanation, test cases
`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 italic">
              Complete the exercise, test your application, and submit your work below! Ensure all code is secure and tested.
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
                    placeholder="e.g., https://github.com/username/secure-login-app"
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
              Secure Coding Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Enhance your skills with these recommended resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  OWASP - Secure Coding Practices
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  OWASP - Input Validation Cheat Sheet
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  OWASP - XSS Prevention Cheat Sheet
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://snyk.io/learn/secure-coding/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Snyk - Secure Coding Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deet10;