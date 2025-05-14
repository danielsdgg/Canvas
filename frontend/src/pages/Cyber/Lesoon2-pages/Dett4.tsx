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
  FaNetworkWired,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Dett4: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 4,
    userId: userData?.userDetails.id ?? "",
    fileUrl: "",
  });

  // Handle URL input change
  const handleFileChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
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
          <FaNetworkWired className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Advanced Network Scanning</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction to Advanced Network Scanning */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to Advanced Network Scanning
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Advanced network scanning builds on basic Nmap techniques (from <code>Dett3</code>) by leveraging Nmap’s scripting engine (NSE) for tasks like operating system (OS) detection and service versioning. These advanced methods provide deeper insights into a target’s infrastructure, identifying specific software versions and potential vulnerabilities. This module focuses on using Nmap scripts to enhance reconnaissance, a critical skill for Week 3’s vulnerability assessment labs and the Week 4 network security audit.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Mastering advanced Nmap scripts equips ethical hackers to gather precise intelligence for penetration testing, ensuring thorough reconnaissance while adhering to legal permissions. This module prepares you for real-world security assessments and Capture The Flag (CTF) challenges requiring detailed system profiling.
            </p>
          </div>

          {/* Understanding Advanced Network Scanning */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding Advanced Network Scanning
            </h2>
            <div className="space-y-6">
              {/* Nmap Scripting Engine (NSE) */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. Nmap Scripting Engine (NSE)
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  The Nmap Scripting Engine (NSE) extends Nmap’s capabilities with Lua-based scripts for advanced tasks like OS detection, service versioning, and vulnerability scanning. Scripts are categorized as safe, intrusive, or aggressive.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# List available NSE scripts
ls /usr/share/nmap/scripts/
# Run a specific script
nmap --script=http-title 192.168.56.20`}
                </pre>
              </div>

              {/* OS Detection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. OS Detection
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Nmap’s OS detection (-O) analyzes TCP/IP stack characteristics to identify a target’s operating system and version, aiding in vulnerability identification.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Basic OS detection
nmap -O 192.168.56.20
# Combine with scripts
nmap --script=smb-os-discovery 192.168.56.20`}
                </pre>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Example output: <code>OS: Linux 4.15 - 5.4</code>
                </p>
              </div>

              {/* Service Versioning */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Service Versioning
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Service versioning (-sV) identifies the software and version running on open ports, enabling targeted vulnerability research. NSE scripts enhance this with protocol-specific probes.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Basic service versioning
nmap -sV -p 22,80 192.168.56.20
# Use specific script for HTTP
nmap --script=http-server-header 192.168.56.20`}
                </pre>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Example output: <code>80/tcp open http Apache/2.4.41</code>
                </p>
              </div>

              {/* Common NSE Scripts */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Common NSE Scripts
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Popular NSE scripts for advanced scanning include:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li>
                    <strong>http-enum:</strong> Enumerates web directories and files.
                  </li>
                  <li>
                    <strong>smb-vuln-*:</strong> Detects vulnerabilities in SMB services.
                  </li>
                  <li>
                    <strong>dns-zone-transfer:</strong> Attempts to retrieve DNS zone data.
                  </li>
                  <li>
                    <strong>ssl-cert:</strong> Retrieves SSL certificate details.
                  </li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Run multiple scripts
nmap --script=http-enum,ssl-cert -p 80,443 192.168.56.20
# Check for vulnerabilities
nmap --script=smb-vuln-ms17-010 192.168.56.20`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Advanced Network Scanning with Nmap Scripts
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply advanced Nmap scripting skills by performing OS detection and service versioning in a safe lab environment. Document your findings and scripts in a GitHub repository, ensuring you have permission to scan the target network.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up two VMs in VirtualBox (Kali Linux: <code>192.168.56.10/24</code>, Ubuntu: <code>192.168.56.20/24</code>) using a Host-Only network (from <code>Dett3</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                On the Ubuntu VM, start an HTTP server on port 80 and an SSH server on port 22.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                From the Kali VM, perform OS detection on <code>192.168.56.20</code> using Nmap’s <code>-O</code> option.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Conduct service versioning on ports 22 and 80 using <code>-sV</code> and the <code>http-server-header</code> script.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Run additional NSE scripts (e.g., <code>http-enum</code>, <code>ssl-cert</code>) to gather more details.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Create a GitHub repository with a 200–300-word report or screenshots summarizing OS details, service versions, and script outputs.
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
# Install Nmap
sudo apt update
sudo apt install nmap

# OS detection
nmap -O 192.168.56.20

# Service versioning
nmap -sV -p 22,80 192.168.56.20

# Run NSE scripts
nmap --script=http-server-header,http-enum -p 80 192.168.56.20
nmap --script=ssl-cert -p 443 192.168.56.20

# Save output
nmap -oN advanced_scan.txt 192.168.56.20

# Push report to GitHub
echo "# Advanced Network Scanning Report" > report.md
`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 italic">
              Complete the exercise, test your setup, and submit your GitHub link below!
            </p>
          </div>

          {/* GitHub Submission */}
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
                Paste Your GitHub Repository Link:
              </label>
              <textarea
                name="fileUrl"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                rows={4}
                placeholder="e.g., https://github.com/username/advanced-network-scanning"
                value={form.fileUrl}
                onChange={handleFileChange}
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

          {/* Advanced Network Scanning Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Advanced Network Scanning Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Enhance your Nmap scripting skills with these resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://nmap.org/nsedoc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Nmap NSE Documentation
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.stationx.net/nmap-cheat-sheet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  StationX - Nmap Cheat Sheet
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.hackingarticles.in/nmap-scripting-engine-nse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Hacking Articles - Guide to Nmap Scripting Engine
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.cyberciti.biz/networking/nmap-command-examples-tutorials/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  nixCraft - Nmap Command Examples
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dett4;