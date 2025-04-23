import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCode,
  FaList,
  FaLink,
  FaEdit,
  FaCheckCircle,
  FaBookOpen,
  FaRocket,
  FaUserSecret,
  FaEnvelope,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Det14: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [githubUrl, setGithubUrl] = useState("");
  const [form, setForm] = useState({
    assignmentId: 27,
    userId: userData?.userDetails.id ?? "",
    githubUrl: "",
  });

  // Handle GitHub URL input change
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setGithubUrl(url);
    setForm((prev) => ({
      ...prev,
      githubUrl: url,
    }));
  };

  // Validate GitHub URL
  const isValidGithubUrl = (url: string): boolean => {
    const githubRegex = /^https:\/\/github\.com\/[\w-]+\/[\w-]+(\/)?$/;
    return githubRegex.test(url);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!githubUrl) {
      alert("Please enter a GitHub repository URL.");
      return;
    }

    if (!isValidGithubUrl(githubUrl)) {
      alert("Please enter a valid GitHub repository URL (e.g., https://github.com/username/repo).");
      return;
    }

    if (!userToken) {
      alert("Authentication error. Please log in again.");
      return;
    }

    const formData = new FormData();
    formData.append("assignmentId", form.assignmentId.toString());
    formData.append("userId", form.userId.toString()); // Ensure string type to prevent TS2345
    formData.append("githubUrl", githubUrl);

    try {
      const response = await fetch("http://localhost:8080/api/v1/assignments/submit", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        alert("Assignment submitted successfully!");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Submission failed."}`);
      }
    } catch (error) {
      console.error("Error submitting assignment:", error);
      alert("Failed to submit. Please try again later.");
    }
  };

  return (
    <>
      <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-8 mx-auto max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        {/* Section Heading */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaUserSecret className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Social Engineering Awareness</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Welcome to Day 14 of Morgan Technical Training’s Cybersecurity Course! Today, we explore social engineering, a critical threat that exploits human psychology rather than technical vulnerabilities. Focusing on phishing and pretexting, you’ll analyze real-world examples to understand these tactics, building on vulnerability awareness from <code>Det11</code>–<code>Det13</code> and preparing for Week 4’s network security audit.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            In this lesson, you’ll learn to recognize phishing and pretexting, study notable incidents, and develop defense strategies. You’ll research social engineering attacks and submit a markdown report via a GitHub URL through Morgan-LMS, mirroring real-world cybersecurity analysis workflows.
          </p>

          {/* Why Learn Social Engineering Awareness? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Why Learn Social Engineering Awareness?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Social engineering exploits human trust, bypassing technical defenses like firewalls (<code>Det10</code>) or patches (<code>Det13</code>). Understanding these tactics is crucial for:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Preventing Breaches:</strong> Recognize phishing emails or pretexting calls to avoid data leaks.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>User Training:</strong> Educate teams to reduce human vulnerabilities (from <code>Det11</code>).
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Compliance:</strong> Meet standards like NIST requiring employee awareness training.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Holistic Defense:</strong> Complement technical measures with human vigilance.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              At Morgan Technical Training, you’ll analyze real-world incidents and document findings in a GitHub repository, preparing you for cybersecurity roles.
            </p>
          </div>

          {/* What is Social Engineering? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              What is Social Engineering?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Social engineering manipulates individuals into divulging sensitive information or performing actions that compromise security. Unlike technical exploits, it targets human behavior, exploiting trust, fear, or curiosity.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Common forms include phishing (fraudulent emails or texts) and pretexting (fabricated scenarios to gain trust). These tactics often initiate attacks, delivering malware or stealing credentials.
            </p>
          </div>

          {/* Phishing Attacks */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEnvelope className="mr-2 text-indigo-600" />
              Phishing Attacks
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Phishing involves fraudulent communications (e.g., emails, texts) that appear legitimate, tricking users into sharing credentials, clicking malicious links, or downloading malware. Phishing often exploits email protocols like SMTP (from <code>Det7</code>).
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Example Phishing Email
From: support@bank.com
Subject: Urgent: Verify Your Account
Body: Click here to update your password: https://fakebank.com/login
# Indicators: Urgent tone, suspicious URL`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Key characteristics:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Spoofed Sender:</strong> Fake email addresses mimicking trusted sources.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Urgency:</strong> Prompts immediate action (e.g., “Account locked!”).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Malicious Links/Attachments:</strong> Lead to fake sites or malware.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Detection:</strong> Check sender domain, hover over links, use email filters (<code>Det10</code>).
              </li>
            </ul>
          </div>

          {/* Pretexting Attacks */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaUserSecret className="mr-2 text-indigo-600" />
              Pretexting Attacks
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Pretexting involves creating a fabricated scenario to gain trust and extract information. Attackers pose as authority figures (e.g., IT staff, executives) to deceive victims.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Example Pretexting Scenario
Call: "Hi, this is IT. We’re updating systems. Please provide your login."
# Indicators: Unsolicited request, unverifiable identity`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Key characteristics:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Impersonation:</strong> Posing as a trusted entity (e.g., manager, vendor).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Credible Story:</strong> Detailed, believable pretext to lower suspicion.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Sensitive Requests:</strong> Asking for passwords, access, or data.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Detection:</strong> Verify identity, use official channels, avoid unsolicited requests.
              </li>
            </ul>
          </div>

          {/* Real-World Examples */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaList className="mr-2 text-indigo-600" />
              Real-World Examples
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Analyzing real-world incidents highlights social engineering’s impact. Here are two notable cases:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>2016 DNC Phishing Attack:</strong> Spear-phishing emails tricked staff into revealing email credentials, leading to a major data breach.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>2020 Twitter CEO Fraud:</strong> Pretexting via phone calls impersonating executives tricked employees into transferring funds.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              These incidents underscore the need for awareness and training to mitigate human vulnerabilities.
            </p>
          </div>

          {/* Defending Against Social Engineering */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-indigo-600" />
              Defending Against Social Engineering
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Effective defenses combine user training, technical controls, and policies:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Example Email Filter (Postfix)
sudo nano /etc/postfix/main.cf
# Add: smtpd_sender_restrictions = check_sender_access hash:/etc/postfix/sender_access
sudo postmap /etc/postfix/sender_access
sudo systemctl restart postfix`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Key strategies:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>User Training:</strong> Educate staff to recognize phishing and pretexting (from <code>Det13</code>).
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Email Filters:</strong> Use spam filters and DMARC to block phishing emails (<code>Det10</code>).
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Verification Processes:</strong> Require identity checks for sensitive requests.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Multi-Factor Authentication (MFA):</strong> Prevent credential theft from phishing.
              </li>
            </ul>
          </div>

          {/* Best Practices for Social Engineering Awareness */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-indigo-600" />
              Best Practices for Social Engineering Awareness
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Stay vigilant with these guidelines:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Regular Training:</strong> Conduct quarterly awareness sessions.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Simulated Attacks:</strong> Run phishing simulations in a lab (from <code>Det2</code>).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Incident Reporting:</strong> Encourage reporting of suspicious activity.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Policy Enforcement:</strong> Implement strict verification protocols.
              </li>
            </ul>
          </div>

          {/* Practice Exercises */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practice Exercises
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Hands-on analysis is key to understanding social engineering. Complete these exercises and submit a GitHub URL for your markdown report via Morgan-LMS:
            </p>
            <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                Research two real-world social engineering incidents (e.g., phishing, pretexting) from 2015–2025.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                Analyze each incident’s tactics (e.g., phishing email, pretexting call), targets, and impacts.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Propose two defense strategies (e.g., training, email filters) for each incident.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Create a markdown report (300–500 words) in a GitHub repository, summarizing your findings.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                Submit the GitHub repository URL using the form below.
              </li>
            </ol>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter guide for the assignment:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Step-by-step process
1. Research incidents:
   - Example: 2016 DNC phishing, 2020 Twitter pretexting
   - Sources: News articles, security blogs (e.g., KrebsOnSecurity)
2. Analyze each incident:
   - Tactics: Spoofed email, impersonation
   - Impact: Data breach, financial loss
3. Propose defenses:
   - Training: Phishing awareness
   - Technical: DMARC, MFA
4. Create markdown report:
   - File: README.md
   - Sections: Introduction, Incident 1, Incident 2, Defenses
5. Push to GitHub:
   git init
   git add README.md
   git commit -m "Social engineering report"
   git push origin main
6. Submit URL (e.g., https://github.com/username/repo)`}
            </pre>
          </div>

          {/* GitHub URL Submission */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaLink className="mr-2 text-indigo-600" />
              Submit Your Work
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label
                className="block text-gray-800 text-sm sm:text-base font-semibold mb-2"
                htmlFor="githubUrl"
              >
                Enter Your GitHub Repository URL:
              </label>
              <input
                type="text"
                name="githubUrl"
                placeholder="https://github.com/username/repo"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                value={githubUrl}
                onChange={handleUrlChange}
              />
              {githubUrl && (
                <p className="text-gray-700 text-sm sm:text-base">
                  Entered URL: {githubUrl}
                </p>
              )}
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
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
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Resources for Further Learning
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Expand your knowledge with these trusted resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.knowbe4.com/resources"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  KnowBe4 Resources
                </a>
                — Phishing and social engineering training.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.sans.org/security-awareness-training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  SANS Security Awareness
                </a>
                — Guides on social engineering defenses.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.ftc.gov/tips-advice/business-center/guidance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  FTC Cybersecurity Guidance
                </a>
                — Tips for phishing prevention.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://krebsonsecurity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Krebs on Security
                </a>
                — Real-world social engineering case studies.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              By the end of Day 14, you’ll understand social engineering tactics and defenses. Research incidents, document your findings, and submit your GitHub URL via Morgan-LMS to strengthen your cybersecurity awareness!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Det14;