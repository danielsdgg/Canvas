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
  FaExclamationTriangle,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Dett5: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 5,
    userId: userData?.userDetails.id ?? "",
    fileUrl: "",
  });

  // Handle file upload for PDF submissions
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      // Simulate file upload to a server (replace with actual upload logic)
      const fileUrl = URL.createObjectURL(file); // Temporary URL for demo
      setForm((prev) => ({
        ...prev,
        fileUrl: fileUrl,
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
          <FaExclamationTriangle className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Vulnerability Mapping</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction to Vulnerability Mapping */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to Vulnerability Mapping
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Vulnerability mapping is a critical phase in penetration testing where identified vulnerabilities are analyzed and mapped to potential exploits to assess their impact. Tools like Nessus and Metasploit enable ethical hackers to scan systems for vulnerabilities and test exploits in a controlled environment. This module builds on network scanning techniques from <code>Dett3</code> and <code>Dett4</code>, focusing on using Nessus for vulnerability scanning and Metasploit for exploit development. These skills are essential for Week 3’s vulnerability assessment labs and the Week 4 network security audit.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Mastering vulnerability mapping allows ethical hackers to prioritize risks, develop mitigation strategies, and simulate real-world attacks responsibly. This process requires explicit permission to avoid legal issues, ensuring all actions align with ethical hacking principles.
            </p>
          </div>

          {/* Understanding Vulnerability Mapping */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding Vulnerability Mapping
            </h2>
            <div className="space-y-6">
              {/* What is Vulnerability Mapping? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What is Vulnerability Mapping?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Vulnerability mapping involves identifying weaknesses in a system (e.g., outdated software, misconfigurations) and correlating them with known exploits to evaluate potential risks. This process bridges reconnaissance and exploitation phases in penetration testing.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Example: A Nessus scan reveals an outdated Apache version, which Metasploit maps to a known exploit for remote code execution.
                </p>
              </div>

              {/* Nessus: Vulnerability Scanning */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Nessus: Vulnerability Scanning
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Nessus is a powerful vulnerability scanner that identifies security issues like missing patches, weak configurations, and known vulnerabilities (CVEs). It generates detailed reports for analysis.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Install Nessus on Kali Linux (requires download from Tenable)
# Download from: https://www.tenable.com/downloads/nessus
sudo dpkg -i Nessus-<version>.deb
sudo /bin/systemctl start nessusd.service
# Access Nessus at: https://localhost:8834`}
                </pre>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Steps: Configure a scan policy, select a target (e.g., <code>192.168.56.20</code>), and review the report for CVEs and remediation steps.
                </p>
              </div>

              {/* Metasploit: Exploit Mapping */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Metasploit: Exploit Mapping
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Metasploit is an exploitation framework that maps vulnerabilities to exploits, allowing testers to simulate attacks. It integrates with Nessus to import scan results and select relevant exploits.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Start Metasploit
msfconsole
# Search for an exploit
search apache
# Use an exploit
use exploit/multi/http/apache_mod_cgi_bash_env_exec
# Set target
set RHOSTS 192.168.56.20
# Run exploit
exploit`}
                </pre>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Example: Use Metasploit to test a CVE identified by Nessus, ensuring a controlled environment.
                </p>
              </div>

              {/* Best Practices */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Best Practices
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Effective vulnerability mapping requires careful planning and ethical considerations:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li>
                    <strong>Authorization:</strong> Obtain explicit permission before scanning or exploiting systems.
                  </li>
                  <li>
                    <strong>Scope:</strong> Limit scans and exploits to approved targets to avoid unintended damage.
                  </li>
                  <li>
                    <strong>Reporting:</strong> Document vulnerabilities, exploits tested, and remediation recommendations in a clear report.
                  </li>
                  <li>
                    <strong>Safe Testing:</strong> Use isolated lab environments to prevent impact on live systems.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Vulnerability Mapping with Nessus and Metasploit
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply vulnerability mapping skills by scanning a target system with Nessus and mapping vulnerabilities to exploits using Metasploit in a safe lab environment. Submit a PDF report summarizing your findings.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up two VMs in VirtualBox (Kali Linux: <code>192.168.56.10/24</code>, Ubuntu: <code>192.168.56.20/24</code>) using a Host-Only network (from <code>Dett3</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Install Nessus and Metasploit on the Kali VM.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                On the Ubuntu VM, start an HTTP server on port 80 and an SSH server on port 22.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Use Nessus to scan <code>192.168.56.20</code> for vulnerabilities, focusing on ports 22 and 80.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Import Nessus scan results into Metasploit and identify a relevant exploit for a discovered vulnerability.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Test the exploit in Metasploit (e.g., for an outdated service version) in the lab environment.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Create a PDF report (200–300 words) summarizing vulnerabilities, exploit attempts, and remediation recommendations.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter guide for the lab:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# On Ubuntu VM (192.168.56.20)
# Start HTTP server
sudo python3 -m http.server 80
# Start SSH server
sudo systemctl start ssh

# On Kali VM (192.168.56.10)
# Install Nessus (download from Tenable)
sudo dpkg -i Nessus-<version>.deb
sudo /bin/systemctl start nessusd.service

# Install Metasploit
sudo apt update
sudo apt install metasploit-framework

# Start Nessus scan
# Access Nessus at https://localhost:8834, configure scan for 192.168.56.20

# Start Metasploit
msfconsole
# Import Nessus scan
db_import nessus_scan.xml
# Search for exploits
search type:exploit apache
# Use an exploit
use exploit/multi/http/apache_mod_cgi_bash_env_exec
set RHOSTS 192.168.56.20
exploit

# Export Nessus report as PDF
# Use Nessus web interface to save report as PDF
`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 italic">
              Complete the exercise, test your setup, and submit your PDF report below!
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
                htmlFor="fileUrl"
              >
                Upload Your PDF Report:
              </label>
              <input
                type="file"
                name="fileUrl"
                accept="application/pdf"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                onChange={handleFileUpload}
              />
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

          {/* Vulnerability Mapping Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Vulnerability Mapping Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Enhance your vulnerability mapping skills with these resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.tenable.com/products/nessus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Tenable Nessus - Official Documentation
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://docs.metasploit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Metasploit Framework Documentation
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.hackingarticles.in/a-detailed-guide-on-nessus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Hacking Articles - Guide to Nessus
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.offensive-security.com/metasploit-unleashed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Offensive Security - Metasploit Unleashed
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dett5;