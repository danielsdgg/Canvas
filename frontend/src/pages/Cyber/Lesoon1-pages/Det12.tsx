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
  FaSearch,
  
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Det12: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    assignmentId: 25,
    userId: userData?.userDetails.id ?? "",
    fileName: "",
  });

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setForm((prev) => ({
        ...prev,
        fileName: selectedFile.name,
      }));
    } else {
      alert("Please upload a valid PDF file.");
      setFile(null);
      setForm((prev) => ({
        ...prev,
        fileName: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a PDF file to submit.");
      return;
    }

    if (!userToken) {
      alert("Authentication error. Please log in again.");
      return;
    }

    const formData = new FormData();
    formData.append("assignmentId", form.assignmentId.toString());
    formData.append("userId", form.userId.toString()); // Ensure string type to prevent TS2345
    formData.append("file", file);

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
          className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105 p-2"
        >
          <FaArrowLeft className="mr-2 text-lg" />
          Back
        </button>

        {/* Section Heading */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaSearch className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Vulnerability Scanning</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction to Vulnerability Scanning */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to Vulnerability Scanning
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Vulnerability scanning identifies weaknesses in systems, networks, or applications that attackers could exploit. OpenVAS, an open-source vulnerability scanner, automates the detection of known vulnerabilities, including those cataloged as CVEs (from <code>Det11</code>). This module teaches you how to use OpenVAS to scan for vulnerabilities, building on Nmap skills from <code>Det9</code> and preparing you for Week 4’s network security audit.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              By mastering vulnerability scanning, you’ll learn to detect and prioritize risks, complementing firewall and IDS configurations from <code>Det10</code>. This hands-on practice in a VirtualBox lab (from <code>Det2</code>) equips you with practical skills for ethical hacking and threat assessment.
            </p>
          </div>

          {/* Setting Up OpenVAS */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Setting Up OpenVAS
            </h2>
            <div className="space-y-6">
              {/* Prerequisites */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. Prerequisites
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Set up a VirtualBox lab (from <code>Det2</code>) with a Linux VM (e.g., Kali Linux or Ubuntu) to install OpenVAS.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Ensure VirtualBox is installed
# Download Kali Linux ISO: https://www.kali.org/get-kali/
# Create a VM with 4GB RAM, 20GB storage`}
                </pre>
              </div>

              {/* Installing OpenVAS */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Installing OpenVAS
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Install OpenVAS (Greenbone Vulnerability Management) on your Linux VM.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# On Kali Linux
sudo apt update
sudo apt install gvm
sudo gvm-setup
# Follow prompts to set admin password`}
                </pre>
              </div>

              {/* Configuring OpenVAS */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Configuring OpenVAS
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Start OpenVAS services and access the web interface.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Start services
sudo gvm-start
# Access web interface
Open browser: https://127.0.0.1:9392
# Log in with admin credentials from gvm-setup`}
                </pre>
              </div>

              {/* Verifying Setup */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Verifying Setup
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Ensure OpenVAS is running and updated with the latest vulnerability feeds.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Update feeds
sudo gvm-feed-update
# Check services
sudo gvm-check-setup`}
                </pre>
              </div>
            </div>
          </div>

          {/* Performing a Scan with OpenVAS */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaSearch className="mr-2 text-indigo-600" />
              Performing a Scan with OpenVAS
            </h2>
            <div className="space-y-6">
              {/* Creating a Target */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. Creating a Target
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Define the target system (e.g., a VM or local IP) to scan.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# In OpenVAS web interface
1. Go to Configuration > Targets
2. Create New Target
3. Enter IP (e.g., 192.168.56.20)
4. Save`}
                </pre>
              </div>

              {/* Configuring a Scan Task */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Configuring a Scan Task
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Set up a scan task to run against the target.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# In OpenVAS web interface
1. Go to Scans > Tasks
2. Create New Task
3. Select Target
4. Choose Scan Config (e.g., Full and Fast)
5. Save`}
                </pre>
              </div>

              {/* Running the Scan */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Running the Scan
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Start the scan and monitor its progress.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# In OpenVAS web interface
1. Go to Scans > Tasks
2. Click Start (play icon) for your task
3. Wait for scan to complete (may take 10-30 minutes)`}
                </pre>
              </div>

              {/* Exporting Results */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Exporting Results
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Export the scan report for analysis.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# In OpenVAS web interface
1. Go to Scans > Reports
2. Select your scan report
3. Export as PDF`}
                </pre>
              </div>
            </div>
          </div>

          {/* Analyzing Scan Results */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaList className="mr-2 text-indigo-600" />
              Analyzing Scan Results
            </h2>
            <div className="space-y-6">
              {/* Understanding the Report */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. Understanding the Report
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  OpenVAS reports list vulnerabilities with CVSS scores (from <code>Det11</code>), severity, and affected systems.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example Report Entry
Vulnerability: CVE-2023-12345
CVSS Score: 7.5 (High)
Affected: Apache 2.4.49
Recommendation: Upgrade to 2.4.58`}
                </pre>
              </div>

              {/* Prioritizing Vulnerabilities */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Prioritizing Vulnerabilities
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Focus on high and critical vulnerabilities (CVSS 7.0–10.0) for immediate mitigation.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Prioritization Example
1. Critical (9.0–10.0): Patch immediately
2. High (7.0–8.9): Schedule patching
3. Medium/Low: Monitor`}
                </pre>
              </div>

              {/* Cross-Referencing CVEs */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Cross-Referencing CVEs
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Use NIST NVD (from <code>Det11</code>) to verify vulnerabilities and find mitigation details.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Search NVD for CVE
URL: https://nvd.nist.gov/vuln/detail/CVE-2023-12345`}
                </pre>
              </div>

              {/* Mitigation Strategies */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Mitigation Strategies
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Apply patches, configure firewalls (from <code>Det10</code>), or disable vulnerable services.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example Mitigation
sudo apt update
sudo apt upgrade apache2
# Add firewall rule
sudo ufw deny 80`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Scanning with OpenVAS
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply your knowledge by setting up OpenVAS and scanning a target system. You’ll analyze the results and document your findings in a PDF report.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up OpenVAS in a VirtualBox lab (from <code>Det2</code>) using Kali Linux or Ubuntu.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Configure a scan task for a target system (e.g., a provided VM or local IP like 192.168.56.20).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Run a vulnerability scan and export the report as a PDF.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Analyze the report, noting at least three vulnerabilities, their CVSS scores (from <code>Det11</code>), and recommended mitigations.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Write a PDF report (300–500 words) summarizing the scan results, vulnerabilities, CVSS analysis, and mitigation steps.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Upload the PDF report using the form below.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter guide for the assignment:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Step-by-step process
1. Install OpenVAS:
   sudo apt install gvm
   sudo gvm-setup
2. Start services:
   sudo gvm-start
3. Access web interface:
   https://127.0.0.1:9392
4. Create Target:
   IP: 192.168.56.20
5. Create and run Scan Task:
   Scan Config: Full and Fast
6. Export report as PDF
7. Analyze vulnerabilities:
   - CVE ID, CVSS Score, Severity
   - Mitigation (e.g., patch, firewall rule)
8. Write report (300–500 words)
9. Export as PDF
10. Upload below`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 italic">
              Complete the scan, create your PDF report, and upload it below!
            </p>
          </div>

          {/* PDF Submission */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaLink className="mr-2 text-indigo-600" />
              Submit Your Work
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label
                className="block text-gray-800 text-sm sm:text-base font-semibold mb-2"
                htmlFor="file"
              >
                Upload Your PDF Report:
              </label>
              <input
                type="file"
                name="file"
                accept="application/pdf"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                onChange={handleFileChange}
              />
              {file && (
                <p className="text-gray-700 text-sm sm:text-base">
                  Selected file: {form.fileName}
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

          {/* Vulnerability Scanning Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Vulnerability Scanning Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Deepen your understanding with these resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://greenbone.github.io/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Greenbone OpenVAS Documentation
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://nvd.nist.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  NIST National Vulnerability Database
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.kali.org/docs/tools/openvas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Kali Linux - OpenVAS Setup Guide
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://cve.mitre.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  MITRE CVE Database
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Det12;