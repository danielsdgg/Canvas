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
  FaBug,
  FaDatabase,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Det11: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    assignmentId: 24,
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
    formData.append("userId", form.userId.toString()); // Fix: Convert userId to string
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
          <FaBug className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Introduction to Vulnerabilities</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction to Vulnerabilities */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to Vulnerabilities
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Vulnerabilities are weaknesses in systems or software that attackers can exploit to compromise security. Common Vulnerabilities and Exposures (CVEs) catalog these issues, while the Common Vulnerability Scoring System (CVSS) quantifies their severity. Vulnerability databases like NIST’s National Vulnerability Database (NVD) provide critical data for risk assessment. This module introduces these concepts, building skills for Week 2’s security labs.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Mastering CVEs, CVSS, and vulnerability databases enables you to identify and prioritize risks, preparing you for the Week 4 network security audit, as outlined in the course roadmap. By researching vulnerabilities, you’ll gain insights essential for ethical hacking and threat assessment.
            </p>
          </div>

          {/* Understanding CVEs */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding CVEs
            </h2>
            <div className="space-y-6">
              {/* What is a CVE? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What is a CVE?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  A CVE is a unique identifier for a vulnerability, managed by MITRE, providing a standardized reference for security flaws.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example CVE
CVE-2023-12345: Apache HTTP Server Remote Code Execution`}
                </pre>
              </div>

              {/* CVE Structure */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. CVE Structure
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  CVE IDs follow the format CVE-YYYY-NNNNN, where YYYY is the year and NNNNN is a unique number.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example
CVE-2023-12345
# Year: 2023, ID: 12345`}
                </pre>
              </div>

              {/* Accessing CVE Data */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Accessing CVE Data
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Use databases like NIST NVD to find CVE details, including descriptions, affected software, and CVSS scores.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Search NVD
Visit: https://nvd.nist.gov/vuln/detail/CVE-2023-12345`}
                </pre>
              </div>

              {/* CVE Use Cases */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. CVE Use Cases
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  CVEs help identify vulnerabilities in systems scanned with Nmap (from <code>Det9</code>) or analyzed with Wireshark (from <code>Det8</code>).
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example: Check for CVE in scan results
nmap -sV 192.168.56.20
# Cross-reference service versions with NVD`}
                </pre>
              </div>
            </div>
          </div>

          {/* Understanding CVSS Scores */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaList className="mr-2 text-indigo-600" />
              Understanding CVSS Scores
            </h2>
            <div className="space-y-6">
              {/* What is CVSS? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What is CVSS?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  CVSS is a standardized framework for assessing vulnerability severity, providing scores from 0.0 to 10.0.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example CVSS Score
CVE-2023-12345: CVSS 3.1 Score: 7.5 (High)`}
                </pre>
              </div>

              {/* Base Metrics */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Base Metrics
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Base metrics (e.g., Attack Vector, Impact) determine the inherent severity of a vulnerability.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example Base Metrics
Attack Vector: Network
Confidentiality Impact: High
CVSS Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N`}
                </pre>
              </div>

              {/* Temporal and Environmental Metrics */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Temporal and Environmental Metrics
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Temporal metrics (e.g., Exploitability) and environmental metrics (e.g., Security Requirements) adjust scores based on context.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example Temporal Metric
Exploit Code Maturity: High
# Example Environmental Metric
Modified Confidentiality: Low`}
                </pre>
              </div>

              {/* Interpreting CVSS Scores */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Interpreting CVSS Scores
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Scores are categorized as Low (0.1–3.9), Medium (4.0–6.9), High (7.0–8.9), or Critical (9.0–10.0).
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example Interpretation
CVSS Score: 7.5
Severity: High
Action: Prioritize mitigation`}
                </pre>
              </div>
            </div>
          </div>

          {/* Using Vulnerability Databases */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaDatabase className="mr-2 text-indigo-600" />
              Using Vulnerability Databases
            </h2>
            <div className="space-y-6">
              {/* NIST NVD */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. NIST NVD
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  The National Vulnerability Database (NVD) provides detailed CVE information, CVSS scores, and references.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Search NVD
URL: https://nvd.nist.gov/vuln/search
Enter: CVE-2023-12345`}
                </pre>
              </div>

              {/* Other Databases */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Other Databases
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Additional databases include CVE Details, VulnDB, and Exploit-DB for broader vulnerability research.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example: CVE Details
URL: https://www.cvedetails.com/cve/CVE-2023-12345`}
                </pre>
              </div>

              {/* Searching and Filtering */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Searching and Filtering
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Filter by software, severity, or date to find relevant CVEs for your systems.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# NVD Advanced Search
Filter: Apache, CVSS >= 7.0, 2023`}
                </pre>
              </div>

              {/* Applying Findings */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Applying Findings
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Use CVE data to patch systems, configure firewalls (from <code>Det10</code>), or prioritize vulnerabilities.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example: Mitigate CVE
sudo apt update
sudo apt upgrade apache2`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Researching Vulnerabilities
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply your knowledge by researching vulnerabilities using NIST NVD. You’ll analyze CVEs, their CVSS scores, and document your findings in a PDF report.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Visit NIST NVD (<code>https://nvd.nist.gov/vuln/search</code>) and select three CVEs from 2023 related to web servers (e.g., Apache, Nginx).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                For each CVE, note the ID, description, affected software, CVSS score, and severity rating.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Research mitigation strategies (e.g., patches, firewall rules from <code>Det10</code>) for each vulnerability.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Write a PDF report (300–500 words) summarizing the CVEs, their impact, CVSS analysis, and mitigation steps.
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
1. Go to https://nvd.nist.gov/vuln/search
2. Search for CVEs:
   - Keyword: Apache
   - Year: 2023
   - CVSS Severity: High or Critical
3. Select three CVEs (e.g., CVE-2023-12345, CVE-2023-67890, CVE-2023-54321)
4. Document details:
   - CVE ID
   - Description
   - CVSS Score (e.g., 7.5)
   - Affected Software
   - Mitigation (e.g., upgrade to Apache 2.4.58)
5. Write report in a text editor (e.g., LibreOffice)
6. Export as PDF
7. Upload PDF below`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 italic">
              Complete the research, create your PDF report, and upload it below!
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

          {/* Vulnerability Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Vulnerability Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Deepen your understanding with these resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
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
                  href="https://www.first.org/cvss/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  FIRST - CVSS Documentation
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
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.cvedetails.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  CVE Details
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Det11;