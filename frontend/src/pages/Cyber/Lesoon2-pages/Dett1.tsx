import React, { useState } from "react";
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

const Dett1: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 1,
    userId: userData?.userDetails.id ?? "",
    submissionUrl: "",
    submissionType: "github", // Default to GitHub link
  });

  // Handle input change for submission URL and type
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file upload for PDF submissions
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      // Simulate file upload to a server (replace with actual upload logic)
      const fileUrl = URL.createObjectURL(file); // Temporary URL for demo
      setForm((prev) => ({
        ...prev,
        submissionUrl: fileUrl,
      }));
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", form);

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

      if (response.ok) {
        setSubmitted(true);
        alert("Assignment submitted successfully!");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
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
          className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105 p-2"
        >
          <FaArrowLeft className="mr-2 text-lg" />
          Back
        </button>

        {/* Section Heading */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaShieldAlt className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Ethical Hacking Overview</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction to Ethical Hacking */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to Ethical Hacking
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Ethical hacking, also known as penetration testing or white-hat hacking, involves authorized attempts to identify and exploit vulnerabilities in systems, networks, or applications to improve their security. Unlike malicious hacking, ethical hacking is conducted with permission and aims to protect organizations from cyber threats. This module introduces the core concepts of ethical hacking, including the penetration testing phases, legal boundaries, and Capture The Flag (CTF) challenges, setting the foundation for your cybersecurity journey in this course.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              By mastering ethical hacking, you’ll learn to think like an attacker while acting as a defender, equipping you with skills for real-world security assessments and CTF competitions. This module aligns with Week 1’s learning objectives, preparing you for advanced topics like network scanning (Week 2) and vulnerability assessment (Week 3).
            </p>
          </div>

          {/* Understanding Ethical Hacking */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding Ethical Hacking
            </h2>
            <div className="space-y-6">
              {/* What is Ethical Hacking? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What is Ethical Hacking?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Ethical hacking involves legally testing systems for vulnerabilities to enhance security. Ethical hackers use the same tools and techniques as malicious hackers but with explicit permission from system owners.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example tools used in ethical hacking
# Kali Linux: A specialized OS for security testing
sudo apt update
sudo apt install kali-linux-default`}
                </pre>
              </div>

              {/* Penetration Testing Phases */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Penetration Testing Phases
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Penetration testing follows a structured process to identify and mitigate vulnerabilities. The key phases include:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li>
                    <strong>Reconnaissance:</strong> Gathering information about the target (e.g., using WHOIS, Google Dorking).
                  </li>
                  <li>
                    <strong>Scanning:</strong> Identifying open ports and services (e.g., using Nmap).
                  </li>
                  <li>
                    <strong>Gaining Access:</strong> Exploiting vulnerabilities to access systems.
                  </li>
                  <li>
                    <strong>Maintaining Access:</strong> Ensuring persistent access for testing purposes.
                  </li>
                  <li>
                    <strong>Covering Tracks:</strong> Simulating how attackers hide their activities.
                  </li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example: Reconnaissance with WHOIS
whois example.com
# Example: Scanning with Nmap
nmap -sS 192.168.1.1`}
                </pre>
              </div>

              {/* Legal Boundaries */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Legal Boundaries
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Ethical hacking requires strict adherence to legal and ethical guidelines. Always obtain explicit permission before testing systems, and operate within the scope defined by the client or organization.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li>
                    <strong>Authorization:</strong> Obtain written consent (e.g., a contract or Rules of Engagement).
                  </li>
                  <li>
                    <strong>Scope:</strong> Stick to agreed-upon systems and avoid unauthorized access.
                  </li>
                  <li>
                    <strong>Reporting:</strong> Document findings and report vulnerabilities responsibly.
                  </li>
                  <li>
                    <strong>Laws:</strong> Comply with laws like the Computer Fraud and Abuse Act (CFAA) or GDPR.
                  </li>
                </ul>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Violating legal boundaries can lead to severe consequences, including legal action or loss of certifications.
                </p>
              </div>

              {/* Capture The Flag (CTF) Basics */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Capture The Flag (CTF) Basics
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  CTFs are cybersecurity competitions where participants solve challenges to find "flags" (hidden strings). They’re excellent for practicing ethical hacking skills in a safe, legal environment.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li>
                    <strong>Types of CTFs:</strong> Jeopardy-style (solving challenges) and Attack-Defense (hacking and securing systems).
                  </li>
                  <li>
                    <strong>Common Challenges:</strong> Web exploitation, binary exploitation, cryptography, and forensics.
                  </li>
                  <li>
                    <strong>Platforms:</strong> TryHackMe, Hack The Box, OverTheWire, and CTFtime.
                  </li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example: Solving a web challenge
# Inspect a webpage for hidden flags
curl http://example.com | grep "flag{"`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Ethical Hacking Basics
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply your knowledge by setting up a safe lab environment and completing a beginner-friendly CTF challenge or reconnaissance task. Document your process and findings in a report or GitHub repository.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up a Kali Linux VM in VirtualBox with a Host-Only network (IP: <code>192.168.56.10/24</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Visit TryHackMe or Hack The Box and select a beginner-level CTF challenge (e.g., a web or reconnaissance task).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Perform reconnaissance on a target (e.g., use <code>whois</code> or <code>nmap</code> on a permitted system).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Document your process in a 200–300-word report or take screenshots of your findings.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Submit your work as a GitHub repository link or a PDF report.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter guide for the lab:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# On Kali VM (192.168.56.10)
# Install necessary tools
sudo apt update
sudo apt install whois nmap

# Perform WHOIS lookup
whois tryhackme.com

# Perform a basic Nmap scan (on permitted target)
nmap -sS -p 80,443 192.168.56.20

# Save output to a file
nmap -oN recon.txt 192.168.56.20

# Create a report or upload screenshots to GitHub
# Example: Create a Markdown report
echo "# Ethical Hacking Lab Report" > report.md
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
                    placeholder="e.g., https://github.com/username/ethical-hacking-lab"
                    value={form.submissionUrl}
                    onChange={handleInputChange}
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
                  />
                </div>
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

          {/* Ethical Hacking Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Ethical Hacking Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Enhance your skills with these recommended resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.tryhackme.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  TryHackMe - Hands-on Cybersecurity Training
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.hackthebox.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Hack The Box - Penetration Testing Labs
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://owasp.org/www-project-top-ten/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  OWASP Top Ten - Web Application Security Risks
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.eccouncil.org/cybersecurity/ceh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  EC-Council CEH - Certified Ethical Hacker Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dett1;