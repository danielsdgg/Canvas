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
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Det16: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    assignmentId: 29,
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
        alert("Project submitted successfully!");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Submission failed."}`);
      }
    } catch (error) {
      console.error("Error submitting project:", error);
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
          <FaSearch className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Network Security Audit Project</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Welcome to Det16, the capstone project for Lesson 1: Introduction to Cybersecurity & Networking Fundamentals at Morgan Technical Training! This Network Security Audit Project challenges you to audit a virtual network in a TryHackMe room, integrating skills from Weeks 1–4: networking (<code>Day6</code>–<code>Day7</code>), scanning (<code>Day9</code>, <code>Day12</code>), packet analysis (<code>Day8</code>), hardening (<code>Day13</code>), and social engineering (<code>Day14</code>). This project fulfills Week 4’s audit goal from <code>Day1</code>.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            You’ll set up a TryHackMe environment, perform a comprehensive audit, and submit a detailed PDF report (500–800 words) via Morgan-LMS, mirroring professional cybersecurity audits. This project showcases your ability to identify vulnerabilities, propose mitigations, and document findings like a cybersecurity professional.
          </p>

          {/* Why Conduct a Network Security Audit? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Why Conduct a Network Security Audit?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Network security audits identify vulnerabilities, ensure compliance, and strengthen defenses. Key benefits include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Vulnerability Management:</strong> Detect CVEs (<code>Day11</code>) and misconfigurations.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Proactive Defense:</strong> Mitigate risks before exploitation, using hardening (<code>Day13</code>).
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Compliance:</strong> Align with standards like NIST and CIS (<code>Day13</code>).
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Holistic Security:</strong> Address technical and human vulnerabilities (<code>Day14</code>).
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              This project prepares you for roles like security analyst by simulating real-world audits in a safe, ethical environment (<code>Day4</code>).
            </p>
          </div>

          {/* What is a Network Security Audit? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              What is a Network Security Audit?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              A network security audit systematically evaluates a network’s security posture, identifying vulnerabilities, misconfigurations, and risks. It involves discovery, scanning, analysis, hardening, and reporting, integrating skills from <code>Day8</code>–<code>Day15</code>.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              In this project, you’ll audit a TryHackMe room, assessing technical (e.g., open ports, CVEs) and human (e.g., phishing risks) vulnerabilities, then proposing mitigations in a professional report.
            </p>
          </div>

          {/* Setting Up the TryHackMe Audit Environment */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaShieldAlt className="mr-2 text-indigo-600" />
              Setting Up the TryHackMe Audit Environment
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Configure a TryHackMe environment using a Kali Linux VM (from <code>Day2</code>) with Nmap, OpenVAS, and Wireshark installed.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Sign up for TryHackMe
1. Visit: https://tryhackme.com/signup
2. Create account with email

# Set up OpenVPN
sudo apt update
sudo apt install openvpn
sudo openvpn tryhackme.ovpn

# Install tools
sudo apt install nmap openvas wireshark

# Join audit room (e.g., VulnNet or Blue)
1. Go to: https://tryhackme.com/room/vulnnet
2. Click "Join Room" and "Start Machine"
3. Note target IP (e.g., 10.10.10.20)`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Key steps:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Account Setup:</strong> Register on TryHackMe for room access.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>VPN Connection:</strong> Use OpenVPN to connect to the lab network.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Room Selection:</strong> Choose a room like “VulnNet” or “Blue” for auditing.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Tool Installation:</strong> Ensure Nmap, OpenVAS, and Wireshark are ready.
              </li>
            </ul>
          </div>

          {/* Step 1: Network Discovery and Scanning */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaSearch className="mr-2 text-indigo-600" />
              Step 1: Network Discovery and Scanning
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Use Nmap (from <code>Day9</code>) to discover devices and scan for open ports and services in the TryHackMe room.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Discover hosts
nmap -sn 10.10.10.0/24
# Scan target
nmap -sV -O 10.10.10.20
# Example output
PORT    STATE SERVICE  VERSION
80/tcp  open  http     Apache 2.4.29
445/tcp open  smb      Samba 4.7.6
OS: Windows 10`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Key tasks:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Host Discovery:</strong> Identify active devices with <code>nmap -sn</code>.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Port Scanning:</strong> Detect open ports and services with <code>nmap -sV</code>.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>OS Detection:</strong> Use <code>-O</code> to identify operating systems.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Save Results:</strong> Export scans with <code>nmap -oN scan.txt</code>.
              </li>
            </ul>
          </div>

          {/* Step 2: Vulnerability Scanning */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaSearch className="mr-2 text-indigo-600" />
              Step 2: Vulnerability Scanning
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Use OpenVAS (from <code>Day12</code>) to identify vulnerabilities like CVEs (<code>Day11</code>) on the target system.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Start OpenVAS
sudo openvas-start
# Access: http://localhost:9392
# Create scan task
Target: 10.10.10.20
# Run scan
# Example output
Vulnerability: CVE-2017-0144 (SMBv1 EternalBlue)
Severity: High
Port: 445/tcp`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Key tasks:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Setup OpenVAS:</strong> Configure and start the scanner.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Run Scan:</strong> Target the lab IP and execute a full scan.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Analyze Results:</strong> Identify CVEs and prioritize by severity.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Export Report:</strong> Save scan results for inclusion in the audit report.
              </li>
            </ul>
          </div>

          {/* Step 3: Packet Analysis */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaSearch className="mr-2 text-indigo-600" />
              Step 3: Packet Analysis
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Use Wireshark (from <code>Day8</code>) to capture and analyze network traffic, identifying protocols and risks.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Start Wireshark
wireshark &
# Capture on lab interface (e.g., tun0)
# Filter for HTTP
http
# Filter for SMB
smb
# Example output
Packet 1: HTTP GET /login.php
Packet 2: SMBv1 Session Setup
Issue: Unencrypted SMBv1 traffic`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Key tasks:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Capture Traffic:</strong> Monitor lab traffic on the VPN interface.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Apply Filters:</strong> Analyze protocols like HTTP or SMB (<code>Day7</code>).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Identify Risks:</strong> Detect unencrypted traffic or suspicious payloads.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Save Captures:</strong> Export packets as <code>.pcap</code> for reporting.
              </li>
            </ul>
          </div>

          {/* Step 4: System Hardening */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaShieldAlt className="mr-2 text-indigo-600" />
              Step 4: System Hardening
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply hardening measures (from <code>Det13</code>) to mitigate vulnerabilities identified in scans and packet analysis.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Linux Hardening
# Patch system
sudo apt update
sudo apt upgrade
# Disable SMBv1
sudo nano /etc/samba/smb.conf
# Set: min protocol = SMB2
sudo systemctl restart smbd
# Firewall
sudo ufw deny 445/tcp

# Windows Hardening
# Apply patches
wusa.exe KB123456.msu
# Disable SMBv1
Set-SmbServerConfiguration -EnableSMB1Protocol $false
# Firewall
netsh advfirewall firewall add rule name="Block SMB" dir=in action=block protocol=TCP localport=445`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Key tasks:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Patch Systems:</strong> Update OS and services to address CVEs.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Secure Protocols:</strong> Disable vulnerable protocols (e.g., SMBv1).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Firewall Rules:</strong> Block risky ports using <code>ufw</code> or Windows Firewall (<code>Day10</code>).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Verify:</strong> Re-scan with Nmap to confirm mitigations.
              </li>
            </ul>
          </div>

          {/* Step 5: Social Engineering Assessment */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaSearch className="mr-2 text-indigo-600" />
              Step 5: Social Engineering Assessment
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Evaluate human vulnerabilities (from <code>Day14</code>) that could compromise the network, such as phishing or pretexting risks.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Simulate phishing (in lab only)
# Example: Analyze email headers in Wireshark
smtp
# Output: Spoofed sender detected

# Document assessment
- Risk: Users clicking phishing links
- Mitigation: Implement email filters, train users`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Key tasks:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Identify Risks:</strong> Assess phishing or pretexting vulnerabilities (e.g., weak email filters).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Analyze Traffic:</strong> Use Wireshark to detect phishing attempts (SMTP).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Propose Mitigations:</strong> Recommend training and email filtering (<code>Day10</code>).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Document:</strong> Include findings in the audit report.
              </li>
            </ul>
          </div>

          {/* Step 6: Reporting Findings */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Step 6: Reporting Findings
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Create a professional audit report summarizing all findings and mitigations. Include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Executive Summary:</strong> Overview of the audit and key findings.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Network Discovery:</strong> Nmap results (e.g., open ports, services).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Vulnerability Scan:</strong> OpenVAS findings (e.g., CVEs, severity).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Packet Analysis:</strong> Wireshark results (e.g., protocols, risks).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Hardening Measures:</strong> Applied configurations (e.g., firewall rules).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Social Engineering:</strong> Human vulnerability assessment.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Screenshots:</strong> At least four textual descriptions (e.g., “Nmap scan showing port 445 closed”).
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Use LibreOffice or Google Docs to write the report, export as PDF, and ensure clarity and professionalism.
            </p>
          </div>

          {/* Best Practices for Network Security Audits */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-indigo-600" />
              Best Practices for Network Security Audits
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Follow these guidelines for effective and ethical audits:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Ethical Practices:</strong> Only audit authorized systems (<code>Day4</code>).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Comprehensive Scanning:</strong> Use multiple tools (Nmap, OpenVAS) for thoroughness.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Detailed Reporting:</strong> Document all findings with evidence.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Verify Mitigations:</strong> Re-scan to confirm fixes (<code>Day15</code>).
              </li>
            </ul>
          </div>

          {/* Project Assignment */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Project Assignment
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Conduct a comprehensive network security audit in a TryHackMe room and submit a PDF report via Morgan-LMS:
            </p>
            <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaShieldAlt className="mr-2 mt-1 text-indigo-600" />
                Set up a TryHackMe account and join a room (e.g., “VulnNet” or “Blue”).
              </li>
              <li className="flex items-start">
                <FaSearch className="mr-2 mt-1 text-indigo-600" />
                Perform network discovery and scanning with Nmap, identifying at least three open ports/services.
              </li>
              <li className="flex items-start">
                <FaSearch className="mr-2 mt-1 text-indigo-600" />
                Run a vulnerability scan with OpenVAS, identifying at least two CVEs.
              </li>
              <li className="flex items-start">
                <FaSearch className="mr-2 mt-1 text-indigo-600" />
                Analyze traffic with Wireshark, identifying one protocol and any risks.
              </li>
              <li className="flex items-start">
                <FaShieldAlt className="mr-2 mt-1 text-indigo-600" />
                Harden the system with at least three measures (e.g., patch CVE, block port, disable service).
              </li>
              <li className="flex items-start">
                <FaSearch className="mr-2 mt-1 text-indigo-600" />
                Assess social engineering risks (e.g., phishing potential) and propose mitigations.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                Write a PDF report (500–800 words) detailing the audit process, findings, mitigations, and four textual screenshot descriptions.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                Upload the PDF report using the form below.
              </li>
            </ol>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter guide for the project:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Step-by-step process
1. Set up TryHackMe:
   - Join room: VulnNet
   - Connect VPN: sudo openvpn tryhackme.ovpn
2. Network discovery:
   nmap -sn 10.10.10.0/24
   nmap -sV 10.10.10.20
   # Save: nmap -oN scan.txt
3. Vulnerability scan:
   sudo openvas-start
   # Scan: 10.10.10.20
   # Save report
4. Packet analysis:
   wireshark &
   # Filter: http or smb
   # Save: capture.pcap
5. Harden system:
   # Patch: sudo apt upgrade
   # Disable SMBv1
   sudo nano /etc/samba/smb.conf
   # Firewall: sudo ufw deny 445
6. Social engineering:
   # Assess: Phishing risks
   # Mitigate: Email filters, training
7. Write report:
   - Executive summary
   - Discovery: Ports, services
   - Vulnerabilities: CVEs
   - Packet analysis: Protocols
   - Hardening: Configs
   - Social engineering: Risks
   - Screenshots: Describe 4 outputs
8. Export as PDF
9. Upload below`}
            </pre>
          </div>

          {/* PDF Submission */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaLink className="mr-2 text-indigo-600" />
              Submit Your Project
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
                Submit Project
              </button>
            </form>
            {submitted && (
              <p className="mt-4 text-green-600 font-medium flex items-center">
                <FaCheckCircle className="mr-2" />
                Your project has been submitted successfully!
              </p>
            )}
          </div>

          {/* Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Resources for Further Learning
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Deepen your audit skills with these trusted resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://tryhackme.com/resources"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  TryHackMe Resources
                </a>
                — Audit-focused lab tutorials.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://owasp.org/www-project-top-ten/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  OWASP Top Ten
                </a>
                — Common vulnerabilities to audit.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://nvd.nist.gov/800-53"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  NIST SP 800-53
                </a>
                — Audit and compliance guidelines.
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
                — Social engineering audit tips.
              </li>
            </ul>
          </div>

          {/* Words of Encouragement */}
          <section className="mb-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center justify-center">
              <FaCheckCircle className="mr-2 text-indigo-600" />
              Congratulations!
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
              You’ve built a robust foundation in cybersecurity over the past four weeks! From mastering networking fundamentals (<code>Day6</code>–<code>Day7</code>) to scanning networks (<code>Day9</code>), analyzing packets (<code>Day8</code>), hardening systems (<code>Day13</code>), and tackling social engineering (<code>Day14</code>), you’ve developed skills that power real-world security. This audit project is your chance to shine—apply your expertise confidently to secure a virtual network. In Lesson 2, we’ll dive into <b>Advanced Cybersecurity</b>, exploring ethical hacking & penetration testing. Keep practicing, stay curious, and get ready for an exciting journey in protecting the digital world! 🚀
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

export default Det16;