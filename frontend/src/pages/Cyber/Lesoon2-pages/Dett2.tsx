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

const Dett2: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 2,
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
          <FaSearch className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Passive Reconnaissance</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction to Passive Reconnaissance */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to Passive Reconnaissance
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Passive reconnaissance is the process of gathering information about a target without directly interacting with it, minimizing the risk of detection. This technique, a key part of Open-Source Intelligence (OSINT), involves collecting publicly available data from sources like websites, social media, and search engines. In ethical hacking, passive reconnaissance is the first step in the penetration testing process, providing critical insights for planning further actions. This module introduces OSINT techniques and tools like Maltego and Shodan, equipping you for Week 1’s reconnaissance labs and setting the stage for active reconnaissance in Week 2.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Mastering passive reconnaissance enables ethical hackers to build a detailed picture of a target’s digital footprint while adhering to legal and ethical boundaries. By learning tools like Maltego and Shodan, you’ll develop skills essential for real-world security assessments and Capture The Flag (CTF) challenges.
            </p>
          </div>

          {/* Understanding Passive Reconnaissance */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding Passive Reconnaissance
            </h2>
            <div className="space-y-6">
              {/* What is Passive Reconnaissance? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What is Passive Reconnaissance?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Passive reconnaissance involves collecting information from public sources without sending packets to the target. It leverages OSINT to gather data like domain details, IP addresses, and employee information, ensuring no direct interaction with the target’s systems.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example: Using WHOIS for domain information
whois example.com`}
                </pre>
              </div>

              {/* OSINT Techniques */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. OSINT Techniques
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  OSINT techniques include analyzing public records, social media, and online databases to gather actionable intelligence. Common methods include:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li>
                    <strong>WHOIS Lookup:</strong> Retrieve domain registration details like owner and contact information.
                  </li>
                  <li>
                    <strong>Google Dorking:</strong> Use advanced Google search operators to find exposed data.
                  </li>
                  <li>
                    <strong>Social Media Analysis:</strong> Identify employee roles, technologies, or locations via LinkedIn or Twitter.
                  </li>
                  <li>
                    <strong>Public Databases:</strong> Access data from services like Shodan or Censys for device information.
                  </li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example: Google Dorking for exposed files
site:example.com filetype:pdf`}
                </pre>
              </div>

              {/* Tool: Maltego */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Maltego
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Maltego is a powerful OSINT tool for visualizing relationships between entities (e.g., domains, IPs, people). It uses transforms to map data from public sources, helping ethical hackers identify connections.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Install Maltego on Kali Linux
sudo apt update
sudo apt install maltego
# Launch Maltego
maltego`}
                </pre>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Example: Create a graph to map a domain’s email addresses and associated IPs.
                </p>
              </div>

              {/* Tool: Shodan */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Shodan
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Shodan is a search engine for internet-connected devices, revealing open ports, services, and vulnerabilities. It’s ideal for discovering exposed systems like web servers or IoT devices.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example: Search for web servers in Shodan
# Via Shodan web interface or API
shodan search "port:80 os:linux"
# Using Shodan CLI
shodan host 192.168.1.1`}
                </pre>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Note: Requires a Shodan account for advanced features.
                </p>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Passive Reconnaissance with OSINT
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply passive reconnaissance skills by gathering OSINT on a permitted target (e.g., a public domain or TryHackMe lab). Document your findings in a GitHub repository, ensuring no direct interaction with the target.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up a Kali Linux VM in VirtualBox with a Host-Only network (IP: <code>192.168.56.10/24</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Install Maltego and create a free Shodan account.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Use WHOIS to gather domain details for a public site (e.g., <code>tryhackme.com</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Perform Google Dorking to find public files or subdomains (e.g., <code>site:tryhackme.com filetype:pdf</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Use Maltego to map relationships (e.g., domain to emails or IPs).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Search Shodan for devices on a public IP range (e.g., <code>port:80 city:London</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Create a GitHub repository with a 200–300-word report or screenshots summarizing your findings.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter guide for the lab:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# On Kali VM (192.168.56.10)
# Install necessary tools
sudo apt update
sudo apt install whois maltego

# WHOIS lookup
whois tryhackme.com

# Google Dorking
# Use browser: site:tryhackme.com inurl:login

# Launch Maltego
maltego
# Create a new graph, add domain entity, run transforms

# Install Shodan CLI
pip install shodan
# Initialize Shodan with API key
shodan init YOUR_API_KEY
# Search for devices
shodan search "port:80 os:linux"

# Save findings to a file
echo "# Passive Reconnaissance Report" > report.md
# Push to GitHub repository`}
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
                placeholder="e.g., https://github.com/username/passive-reconnaissance"
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

          {/* Passive Reconnaissance Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Passive Reconnaissance Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Deepen your OSINT skills with these resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://maltego.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Maltego - Official Website and Documentation
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.shodan.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Shodan - Search Engine for Internet-Connected Devices
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://osintframework.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  OSINT Framework - Curated OSINT Tools and Resources
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.hackingarticles.in/a-detailed-guide-on-osint/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Hacking Articles - Comprehensive Guide on OSINT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dett2;