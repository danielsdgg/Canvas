import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCode,
  FaLaptopCode,
  FaList,
  FaLink,
  FaEdit,
  FaCheckCircle,
  FaRocket,
  FaBookOpen,
  FaNetworkWired,
  FaLock,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Det7: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 20,
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
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Protocols & Ports</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction to Protocols & Ports */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to Protocols & Ports
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Network protocols and ports are the foundation of device communication in cybersecurity. Protocols like HTTP, FTP, and SSH define how data is exchanged, while ports (e.g., 80, 22) act as doorways for network traffic. Understanding these concepts is critical for analyzing network behavior, securing systems, and detecting threats.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              This module explores key protocols and their associated ports, equipping you for Week 2’s networking labs using tools like Wireshark and Nmap. You’ll learn to identify protocol traffic, secure ports, and apply these skills in the Week 4 network security audit, as outlined in the course roadmap.
            </p>
          </div>

          {/* Understanding Protocols & Ports */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding Protocols & Ports
            </h2>
            <div className="space-y-6">
              {/* What are Protocols? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What are Protocols?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Protocols are standardized rules for data exchange in networks. They operate at various OSI layers (from <code>Det6</code>), ensuring reliable communication.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example: HTTP Request
GET /index.html HTTP/1.1
Host: example.com

# Response
HTTP/1.1 200 OK
Content-Type: text/html`}
                </pre>
              </div>

              {/* What are Ports? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. What are Ports?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Ports are logical endpoints (0–65535) that direct traffic to specific services. Well-known ports (e.g., 80 for HTTP) are standardized by IANA.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example: Port in a URL
http://example.com:80  # Port 80 (HTTP)
ssh user@server:22     # Port 22 (SSH)`}
                </pre>
              </div>

              {/* Protocol-Port Relationships */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Protocol-Port Relationships
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Each protocol is typically associated with specific ports, enabling services to listen for incoming traffic.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Common Protocol-Port Pairs
HTTP  -> Port 80
HTTPS -> Port 443
FTP   -> Ports 20, 21
SSH   -> Port 22`}
                </pre>
              </div>

              {/* TCP vs. UDP */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. TCP vs. UDP
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Protocols use TCP (reliable, connection-oriented) or UDP (fast, connectionless). HTTP and SSH use TCP; DNS often uses UDP.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# TCP Example (HTTP)
curl http://example.com

# UDP Example (DNS)
dig example.com`}
                </pre>
              </div>
            </div>
          </div>

          {/* Common Protocols in Depth */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaList className="mr-2 text-indigo-600" />
              Common Protocols in Depth
            </h2>
            <div className="space-y-6">
              {/* HTTP */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. HTTP (Hypertext Transfer Protocol)
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  HTTP enables web browsing, operating at OSI Layer 7. It uses port 80 (unencrypted) and is vulnerable to interception without HTTPS (port 443).
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Capture HTTP traffic
wireshark -f "tcp port 80"`}
                </pre>
              </div>

              {/* FTP */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. FTP (File Transfer Protocol)
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  FTP transfers files, using ports 20 (data) and 21 (control). It’s insecure unless paired with FTPS or SFTP due to plain-text credentials.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Connect to FTP server
ftp ftp.example.com 21`}
                </pre>
              </div>

              {/* SSH */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. SSH (Secure Shell)
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  SSH provides secure remote access, using port 22. It encrypts traffic, making it ideal for managing servers securely.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Connect to a server via SSH
ssh user@192.168.1.100 -p 22`}
                </pre>
              </div>

              {/* Other Common Ports */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Other Common Ports
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Additional protocols and ports include DNS (port 53, UDP), SMTP (port 25, TCP), and HTTPS (port 443, TCP).
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Scan common ports
nmap -p 22,80,443 192.168.1.100`}
                </pre>
              </div>
            </div>
          </div>

          {/* Port Management & Security */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaLock className="mr-2 text-indigo-600" />
              Port Management & Security
            </h2>
            <div className="space-y-6">
              {/* Port States */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. Port States
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Ports can be open (accepting connections), closed (no service), or filtered (blocked by a firewall).
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Check port status
nmap 192.168.1.100 -p 80`}
                </pre>
              </div>

              {/* Port Scanning */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Port Scanning
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Tools like Nmap identify open ports and services, aiding vulnerability assessments.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Basic Nmap scan
nmap -sS 192.168.1.0/24 -p 22,80`}
                </pre>
              </div>

              {/* Securing Ports */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Securing Ports
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Close unnecessary ports, use firewalls (e.g., iptables), and enable encryption (e.g., HTTPS, SSH).
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Block port 21 with iptables
sudo iptables -A INPUT -p tcp --dport 21 -j DROP`}
                </pre>
              </div>

              {/* Monitoring Traffic */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Monitoring Traffic
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Use Wireshark to capture and analyze protocol traffic, identifying suspicious activity.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Filter SSH traffic
wireshark -f "tcp port 22"`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Protocol & Port Analysis
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Test your understanding by analyzing protocols and ports in a virtual lab. You’ll capture HTTP and SSH traffic with Wireshark, scan ports with Nmap, and document your findings.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up two VMs (Kali Linux, Ubuntu) in VirtualBox with IPs <code>192.168.56.10/24</code> and <code>192.168.56.20/24</code>.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                On Ubuntu, run a simple HTTP server (port 80) and SSH server (port 22).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                From Kali, capture HTTP traffic (e.g., <code>curl http://192.168.56.20</code>) and SSH traffic (e.g., <code>ssh user@192.168.56.20</code>) using Wireshark.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Scan ports 22, 80, and 443 on <code>192.168.56.20</code> using Nmap.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Create a GitHub repository with a report (200–300 words) or Wireshark screenshot summarizing protocols and port states.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter guide for the lab:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# On Ubuntu VM (192.168.56.20)
# Start HTTP server
sudo python3 -m http.server 80

# Ensure SSH server is running
sudo systemctl start ssh

# On Kali VM (192.168.56.10)
# Install Wireshark and Nmap
sudo apt update
sudo apt install wireshark nmap

# Capture traffic
sudo wireshark -f "tcp port 80 or tcp port 22" &

# Generate HTTP traffic
curl http://192.168.56.20

# Connect via SSH
ssh user@192.168.56.20

# Scan ports
nmap -p 22,80,443 192.168.56.20

# Save Wireshark capture or write report
# Push to GitHub repository`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4 italic">
              Implement this in your lab, test it, and submit your GitHub link below!
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
                placeholder="e.g., https://github.com/username/protocol-port-analysis"
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

          {/* Protocols & Ports Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Protocols & Ports Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Deepen your understanding with these resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  IANA - Service Names and Port Numbers
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.wireshark.org/docs/wsug_html_chunked/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Wireshark User’s Guide
                </a>
              </li>
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
                  href="https://www.cloudflare.com/learning/network-layer/what-is-a-computer-port/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Cloudflare - What is a Computer Port?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Det7;