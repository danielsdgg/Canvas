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

const Dett3: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 3,
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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Active Reconnaissance</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction to Active Reconnaissance */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to Active Reconnaissance
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Active reconnaissance involves directly interacting with a target system to gather information, such as identifying active hosts, open ports, and running services. Unlike passive reconnaissance, active methods send packets to the target, which may be detected by security systems. This module focuses on using Nmap (Network Mapper) for host discovery and service enumeration, covering scan types like TCP SYN, TCP Connect, and UDP scans. These skills are critical for Week 2’s networking labs and build on the passive reconnaissance techniques learned in <code>Dett2</code>.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Mastering active reconnaissance equips ethical hackers to map network structures and identify potential vulnerabilities, preparing you for advanced penetration testing and the Week 4 network security audit. However, active reconnaissance must be conducted with explicit permission to avoid legal issues.
            </p>
          </div>

          {/* Understanding Active Reconnaissance */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding Active Reconnaissance
            </h2>
            <div className="space-y-6">
              {/* What is Active Reconnaissance? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What is Active Reconnaissance?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Active reconnaissance involves sending probes to a target to collect data about its network, hosts, and services. Tools like Nmap are used to perform host discovery, port scanning, and service enumeration, providing detailed insights into a target’s infrastructure.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Install Nmap on Kali Linux
sudo apt update
sudo apt install nmap`}
                </pre>
              </div>

              {/* Host Discovery */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Host Discovery
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Host discovery identifies active devices on a network using techniques like ping sweeps, ARP scans, or no-ping scans.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li>
                    <strong>Ping Sweep:</strong> Sends ICMP echo requests to detect live hosts.
                  </li>
                  <li>
                    <strong>ARP Scan:</strong> Uses ARP requests for faster discovery on local networks.
                  </li>
                  <li>
                    <strong>No-Ping Scan:</strong> Assumes hosts are up, bypassing ICMP blocks.
                  </li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Ping sweep
nmap -sn 192.168.56.0/24
# ARP scan
nmap -PR 192.168.56.0/24
# No-ping scan
nmap -Pn 192.168.56.20`}
                </pre>
              </div>

              {/* Scan Types */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Scan Types
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Nmap supports various scan types to probe ports and services, each with different characteristics:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li>
                    <strong>TCP SYN Scan (-sS):</strong> Stealthy scan sending SYN packets without completing the TCP handshake.
                  </li>
                  <li>
                    <strong>TCP Connect Scan (-sT):</strong> Completes the TCP handshake, less stealthy but reliable.
                  </li>
                  <li>
                    <strong>UDP Scan (-sU):</strong> Scans for open UDP ports, useful for services like DNS or DHCP.
                  </li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# TCP SYN scan
nmap -sS -p 22,80,443 192.168.56.20
# TCP Connect scan
nmap -sT -p 22,80,443 192.168.56.20
# UDP scan
nmap -sU -p 53,123 192.168.56.20`}
                </pre>
              </div>

              {/* Service Enumeration */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Service Enumeration
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Service enumeration identifies the software and versions running on open ports, aiding in vulnerability identification.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Service detection
nmap -sV -p 22,80 192.168.56.20
# Aggressive scan (includes OS and service detection)
nmap -A 192.168.56.20`}
                </pre>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Example output: <code>22/tcp open ssh OpenSSH 7.6p1</code>
                </p>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Active Reconnaissance with Nmap
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply active reconnaissance skills by performing host discovery and service enumeration in a safe lab environment. Document your findings in a GitHub repository, ensuring you have permission to scan the target network.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up two VMs in VirtualBox (Kali Linux: <code>192.168.56.10/24</code>, Ubuntu: <code>192.168.56.20/24</code>) using a Host-Only network (from <code>Dett2</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                On the Ubuntu VM, start an HTTP server on port 80 and an SSH server on port 22.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                From the Kali VM, perform a ping sweep to discover active hosts in <code>192.168.56.0/24</code>.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Conduct a TCP SYN scan on <code>192.168.56.20</code> for ports 22, 80, and 443.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Perform a UDP scan on <code>192.168.56.20</code> for ports 53 and 123.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Use service enumeration to identify software versions on open ports.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Create a GitHub repository with a 200–300-word report or screenshots summarizing hosts, ports, and services.
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

# Ping sweep
nmap -sn 192.168.56.0/24

# TCP SYN scan
nmap -sS -p 22,80,443 192.168.56.20

# UDP scan
nmap -sU -p 53,123 192.168.56.20

# Service enumeration
nmap -sV -p 22,80 192.168.56.20

# Save output
nmap -oN scan.txt 192.168.56.20

# Push report to GitHub
echo "# Active Reconnaissance Report" > report.md
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
                placeholder="e.g., https://github.com/username/active-reconnaissance"
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

          {/* Active Reconnaissance Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Active Reconnaissance Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Deepen your Nmap skills with these resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://nmap.org/book/man.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Nmap Reference Guide
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
                  href="https://www.hackingarticles.in/comprehensive-guide-on-nmap/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Hacking Articles - Comprehensive Guide on Nmap
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

export default Dett3;