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

const Deet5: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth() as AuthContext;
  const inputRef = useRef<HTMLInputElement>(null);

  // State for submission field
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    assignmentId: 5, // Unique for Deet5
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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Cross-Site Scripting (XSS)</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to Cross-Site Scripting (XSS)
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Cross-Site Scripting (XSS) is a prevalent web application vulnerability, ranked in the OWASP Top 10, that allows attackers to inject malicious scripts into webpages viewed by other users. These scripts can steal sensitive data (e.g., cookies, session tokens), deface websites, or perform unauthorized actions on behalf of users. This module explores three types of XSS attacks—<strong>Reflected</strong>, <strong>Stored</strong>, and <strong>DOM-based</strong>—and teaches you how to test for them using tools like Burp Suite and browser developer tools. Understanding XSS is crucial for cybersecurity modules like OWASP Top 10 analysis (<code>Deet2</code>) and penetration testing (<code>Dett6</code>).
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Designed for beginners, this module provides detailed explanations, practical examples, and a hands-on exercise to test XSS vulnerabilities in a test environment. By mastering these techniques, you’ll learn to identify, exploit, and mitigate XSS risks, preparing you for Capture The Flag (CTF) challenges and real-world security assessments.
            </p>
          </div>

          {/* Understanding XSS */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding Cross-Site Scripting (XSS)
            </h2>
            <div className="space-y-6">
              {/* Reflected XSS */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. Reflected XSS
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Reflected XSS occurs when user input is immediately returned in the server’s response without proper sanitization, allowing malicious scripts to execute in the victim’s browser. It’s typically delivered via URLs or form inputs.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Impact:</strong> Session hijacking, phishing, data theft.</li>
                  <li><strong>Example:</strong> A search query like <code>?q=<script>alert('XSS')</script></code> displays an alert if unsanitized.</li>
                  <li><strong>Mitigation:</strong> Escape user input, use Content Security Policy (CSP).</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable URL
http://testphp.vulnweb.com/search.php?q=<script>alert('XSS')</script>

# Server Response (Vulnerable)
<div>Search: <script>alert('XSS')</script></div>

# Secure Response
<div>Search: &lt;script&gt;alert('XSS')&lt;/script&gt;</div>
`}
                </pre>
              </div>

              {/* Stored XSS */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Stored XSS
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Stored XSS involves injecting malicious scripts that are stored on the server (e.g., in a database) and executed when users view affected pages, such as comments or profiles.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Impact:</strong> Persistent attacks affecting multiple users, account compromise.</li>
                  <li><strong>Example:</strong> Posting <code><script>alert('Hacked')</script></code> in a comment that executes for all viewers.</li>
                  <li><strong>Mitigation:</strong> Sanitize and validate stored input, use libraries like DOMPurify.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable Comment Form
POST /comment.php HTTP/1.1
comment=<script>alert('Hacked')</script>

# Server Stores and Displays
<div><script>alert('Hacked')</script></div>

# Secure Handling
import { sanitize } from 'dompurify';
<div>{sanitize(comment)}</div>
`}
                </pre>
              </div>

              {/* DOM-based XSS */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. DOM-based XSS
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  DOM-based XSS occurs when client-side JavaScript processes user input unsafely, modifying the Document Object Model (DOM) to execute malicious scripts without server interaction.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Impact:</strong> Similar to reflected XSS but harder to detect (client-side).</li>
                  <li><strong>Example:</strong> A script reading URL parameters like <code>#input=<script>alert('XSS')</script></code>.</li>
                  <li><strong>Mitigation:</strong> Avoid dynamic DOM manipulation with unsanitized input, use safe APIs.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable JavaScript
const input = window.location.hash.slice(1);
document.getElementById('output').innerHTML = input;

# Attack URL
http://testphp.vulnweb.com/#<script>alert('XSS')</script>

# Secure JavaScript
const input = window.location.hash.slice(1);
document.getElementById('output').textContent = input;
`}
                </pre>
              </div>

              {/* Mitigating XSS */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Mitigating XSS
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Preventing XSS requires robust input handling and security headers to limit script execution.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Input Sanitization:</strong> Use libraries like DOMPurify to clean HTML.</li>
                  <li><strong>Escaping:</strong> Encode special characters (e.g., <code></code> to <code>&lt;</code>).</li>
                  <li><strong>CSP:</strong> Restrict script sources with Content Security Policy headers.</li>
                  <li><strong>HttpOnly Cookies:</strong> Prevent cookie access by scripts.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable Node.js Response
res.send(\`<div>\${userInput}</div>\`);

# Secure Node.js Response
const sanitizeHtml = require('sanitize-html');
res.send(\`<div>\${sanitizeHtml(userInput)}</div>\`);

# Content Security Policy
Content-Security-Policy: default-src 'self'; script-src 'self';
`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Test XSS Attacks
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply your knowledge by testing for reflected, stored, and DOM-based XSS vulnerabilities on a test web application (<code>http://testphp.vulnweb.com</code>) using Burp Suite and browser developer tools. Document your findings in a PDF report (2–3 pages), including screenshots. Optionally, submit a GitHub repository with scripts (e.g., to automate XSS detection) or logs and a <code>README.md</code>.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up your environment: Install Burp Suite Community Edition and configure your browser to use its proxy (127.0.0.1:8080).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Test for Reflected XSS:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Identify a search or input field (e.g., <code>search.php?q=</code>).</li>
                  <li>Inject a payload like <code><script>alert('Reflected XSS')</script></code> via URL or form.</li>
                  <li>Capture the request/response in Burp Suite and check for script execution (e.g., alert in browser).</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Test for Stored XSS:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Find a comment or profile field that stores input.</li>
                  <li>Inject a payload like <code><script>alert('Stored XSS')</script></code>.</li>
                  <li>Visit the page (e.g., comments section) to confirm the script executes.</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Test for DOM-based XSS:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Inspect JavaScript in the browser (F12 - Sources) for DOM manipulation (e.g., <code>innerHTML</code>).</li>
                  <li>Inject a payload via URL fragment (e.g., <code>#input=<script>alert('DOM XSS')</script></code>).</li>
                  <li>Check for script execution without server interaction.</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Write a 2–3 page PDF report including:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Introduction: Explain XSS and its three types.</li>
                  <li>Findings: Describe one test for each XSS type (payload, request/response, result) with screenshots.</li>
                  <li>Impact: Discuss potential consequences (e.g., session theft).</li>
                  <li>Mitigation: Recommend fixes (e.g., sanitization, CSP).</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Optional: Create a GitHub repository with a script (e.g., Python to detect XSS vulnerabilities) or Burp Suite logs, including a <code>README.md</code>.
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

# Test Reflected XSS
# In Burp: Proxy > Intercept > Turn on
# Visit: http://testphp.vulnweb.com/search.php?q=<script>alert('Reflected XSS')</script>
# Capture request/response, check for alert

# Test Stored XSS
# In comment form, submit: <script>alert('Stored XSS')</script>
# Visit comments page, check for alert

# Test DOM-based XSS
# Visit: http://testphp.vulnweb.com/#<script>alert('DOM XSS')</script>
# Inspect JavaScript (F12 > Sources), check for alert

# Save Evidence
# In Burp: Right-click request > Save item
# Browser: Take screenshot of alert

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
                    placeholder="e.g., https://github.com/username/xss-testing-lab"
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
              XSS Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Enhance your skills with these recommended resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://owasp.org/www-community/attacks/xss/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  OWASP - Cross-Site Scripting (XSS)
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://portswigger.net/web-security/cross-site-scripting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  PortSwigger - XSS Labs
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://tryhackme.com/room/xss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  TryHackMe - XSS Walkthrough
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.hacksplaining.com/exercises/xss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Hacksplaining - XSS Training
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deet5;