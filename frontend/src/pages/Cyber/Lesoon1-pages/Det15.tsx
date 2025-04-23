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
  FaNetworkWired,
  FaTools,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Det15: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    assignmentId: 28,
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
          className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        {/* Section Heading */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaNetworkWired className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Networking Lab</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Welcome to Day 15 of Morgan Technical Training’s Cybersecurity Course! Today, you’ll dive into a hands-on Networking Lab using TryHackMe, combining network scanning (<code>Det9</code>), packet analysis (<code>Det8</code>), and system hardening (<code>Det13</code>). This lab integrates skills from Weeks 1–2, preparing you for Week 4’s network security audit and real-world cybersecurity challenges.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            In this lesson, you’ll set up a TryHackMe lab, perform Nmap scans, analyze packets with Wireshark, and harden systems against vulnerabilities. You’ll document your findings in a detailed PDF report, submitted via Morgan-LMS, mirroring professional penetration testing workflows.
          </p>

          {/* Why Conduct a Networking Lab? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Why Conduct a Networking Lab?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Hands-on labs like TryHackMe bridge theory and practice, enabling you to apply cybersecurity skills in realistic scenarios. Key benefits include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Practical Experience:</strong> Combine scanning, analysis, and hardening for holistic security.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Real-World Simulation:</strong> TryHackMe mimics enterprise networks, preparing you for pentesting roles.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Skill Integration:</strong> Apply Nmap (<code>Det9</code>), Wireshark (<code>Det8</code>), and hardening (<code>Det13</code>) together.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Ethical Hacking:</strong> Practice safely in a controlled environment, adhering to policies (<code>Det4</code>).
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              At Morgan Technical Training, you’ll use TryHackMe to simulate network attacks and defenses, submitting detailed reports via Morgan-LMS to demonstrate your skills.
            </p>
          </div>

          {/* What is TryHackMe? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              What is TryHackMe?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              TryHackMe is an online platform offering interactive cybersecurity labs, or “rooms,” where users practice hacking and defense techniques in virtual environments. Rooms like “Blue” or “Network Fundamentals” simulate real networks, allowing you to scan, analyze, and secure systems.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              TryHackMe provides a browser-based interface or OpenVPN connection to access lab machines, integrating tools like Nmap, Wireshark, and Linux/Windows systems. It’s ideal for beginners and aligns with skills from <code>Det2</code> (lab setup) and <code>Det6</code> (networking).
            </p>
          </div>

          {/* Setting Up the TryHackMe Lab */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaTools className="mr-2 text-indigo-600" />
              Setting Up the TryHackMe Lab
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Configure your TryHackMe environment to begin the lab. Use a VirtualBox VM (from <code>Det2</code>) with Kali Linux for tools like Nmap and Wireshark.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Create TryHackMe account
1. Visit: https://tryhackme.com/signup
2. Sign up with email and create a profile

# Set up OpenVPN
1. Download OpenVPN config: https://tryhackme.com/access
2. Install OpenVPN on Kali
sudo apt update
sudo apt install openvpn
3. Connect to TryHackMe
sudo openvpn tryhackme.ovpn

# Join a room (e.g., Blue)
1. Go to: https://tryhackme.com/room/blue
2. Click "Join Room" and "Start Machine"
3. Note target IP (e.g., 10.10.10.10)`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Key steps:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Create Account:</strong> Register on TryHackMe for access to rooms.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Connect VPN:</strong> Use OpenVPN to access lab networks.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Join Room:</strong> Select a beginner-friendly room like “Blue” or “Network Fundamentals.”
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Prepare Tools:</strong> Ensure Nmap and Wireshark are installed on Kali.
              </li>
            </ul>
          </div>

          {/* Network Scanning in TryHackMe */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaNetworkWired className="mr-2 text-indigo-600" />
              Network Scanning in TryHackMe
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Use Nmap (from <code>Det9</code>) to identify open ports, services, and vulnerabilities in the TryHackMe lab. Scan the target machine provided in the room.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Basic Nmap scan
nmap 10.10.10.10
# Detailed scan with service detection
nmap -sV -O 10.10.10.10
# Aggressive scan for vulnerabilities
nmap --script vuln 10.10.10.10

# Example output
Starting Nmap 7.94
Nmap scan report for 10.10.10.10
PORT    STATE SERVICE  VERSION
80/tcp  open  http     Apache 2.4.29
445/tcp open  smb      Samba 4.7.6
OS: Windows 10`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Key techniques:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Port Scanning:</strong> Identify open ports (e.g., 80, 445) using <code>nmap 10.10.10.10</code>.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Service Detection:</strong> Use <code>-sV</code> to detect service versions (e.g., Apache 2.4.29).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Vulnerability Scanning:</strong> Run <code>--script vuln</code> to identify CVEs (from <code>Det11</code>).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Documentation:</strong> Save scan results (e.g., <code>nmap -oN scan.txt</code>) for reporting.
              </li>
            </ul>
          </div>

          {/* Packet Analysis in TryHackMe */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaTools className="mr-2 text-indigo-600" />
              Packet Analysis in TryHackMe
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Use Wireshark (from <code>Det8</code>) to capture and analyze network traffic in the TryHackMe lab, identifying protocols and potential threats.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Start Wireshark
wireshark &
# Capture traffic on lab interface (e.g., tun0)
# Apply filter for HTTP
http
# Example filter for SMB
smb

# Example output
Packet 1: HTTP GET /index.html
Packet 2: SMB Session Setup
# Suspicious: Unencrypted SMBv1 traffic`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Key techniques:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Capture Traffic:</strong> Use Wireshark to monitor lab network activity (e.g., tun0 interface).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Apply Filters:</strong> Filter for protocols like HTTP or SMB (from <code>Det7</code>).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Identify Threats:</strong> Look for unencrypted traffic or suspicious payloads.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Export Data:</strong> Save packet captures (e.g., <code>.pcap</code>) for analysis.
              </li>
            </ul>
          </div>

          {/* System Hardening in TryHackMe */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaTools className="mr-2 text-indigo-600" />
              System Hardening in TryHackMe
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply hardening techniques (from <code>Det13</code>) to secure lab systems, addressing vulnerabilities found in scans or packet analysis.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Linux Hardening
# Disable unused services
sudo systemctl disable apache2
# Secure SMB
sudo nano /etc/samba/smb.conf
# Set: min protocol = SMB2
sudo systemctl restart smbd

# Configure firewall
sudo ufw enable
sudo ufw deny 445/tcp

# Windows Hardening
# Disable SMBv1
Set-SmbServerConfiguration -EnableSMB1Protocol $false
# Enable firewall
netsh advfirewall set allprofiles state on
# Block HTTP
netsh advfirewall firewall add rule name="Block HTTP" dir=in action=block protocol=TCP localport=80`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Key techniques:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Disable Services:</strong> Stop unnecessary services (e.g., Apache, SMBv1).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Secure Protocols:</strong> Enforce SMBv2 or higher, disable HTTP if unused.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Firewall Rules:</strong> Block vulnerable ports (e.g., 445, 80) using <code>ufw</code> or Windows Firewall (<code>Det10</code>).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Verify Changes:</strong> Re-run Nmap to confirm closed ports.
              </li>
            </ul>
          </div>

          {/* Combining Skills in the Lab */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaNetworkWired className="mr-2 text-indigo-600" />
              Combining Skills in the Lab
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Integrate scanning, packet analysis, and hardening in a cohesive workflow to secure the TryHackMe lab environment.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Workflow
1. Scan with Nmap
nmap -sV 10.10.10.10
# Output: Open port 445 (SMB), Apache 2.4.29

2. Analyze with Wireshark
wireshark &
# Filter: smb
# Output: SMBv1 traffic detected

3. Harden system
# Disable SMBv1
sudo nano /etc/samba/smb.conf
# Set: min protocol = SMB2
sudo systemctl restart smbd
# Block port 445
sudo ufw deny 445/tcp

4. Verify with Nmap
nmap 10.10.10.10
# Output: Port 445 closed`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Workflow steps:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Scan:</strong> Identify open ports and services with Nmap.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Analyze:</strong> Use Wireshark to inspect traffic for vulnerabilities.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Harden:</strong> Apply patches or configs to mitigate risks.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Verify:</strong> Re-scan to confirm security improvements.
              </li>
            </ul>
          </div>

          {/* Documenting Lab Results */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Documenting Lab Results
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Effective documentation is critical for cybersecurity reporting. Include the following in your PDF report:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Lab Overview:</strong> Describe the TryHackMe room and objectives.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Scan Results:</strong> Include Nmap outputs (e.g., open ports, services).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Packet Analysis:</strong> Summarize Wireshark findings (e.g., protocols, issues).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Hardening Steps:</strong> Detail configurations applied (e.g., firewall rules).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Screenshots:</strong> Include textual descriptions of Nmap/Wireshark outputs and configs (e.g., “Nmap scan showing port 445 closed”).
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Use tools like LibreOffice or Google Docs to create the report, export as PDF, and include at least three textual screenshot descriptions.
            </p>
          </div>

          {/* Best Practices for Networking Labs */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-indigo-600" />
              Best Practices for Networking Labs
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Follow these guidelines for effective and ethical lab work:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Ethical Hacking:</strong> Only scan or modify authorized TryHackMe systems (<code>Det4</code>).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Backup Systems:</strong> Take VirtualBox snapshots before changes (<code>Det2</code>).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Detailed Notes:</strong> Log all commands and outputs for reporting.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Verify Results:</strong> Re-scan to confirm hardening measures.
              </li>
            </ul>
          </div>

          {/* Practice Exercises */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practice Exercises
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Hands-on practice in TryHackMe is key to mastering cybersecurity. Complete these exercises and submit a PDF report via Morgan-LMS:
            </p>
            <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaTools className="mr-2 mt-1 text-indigo-600" />
                Set up a TryHackMe account and join a beginner room (e.g., “Blue” or “Network Fundamentals”).
              </li>
              <li className="flex items-start">
                <FaNetworkWired className="mr-2 mt-1 text-indigo-600" />
                Perform an Nmap scan on the target machine, identifying at least three open ports and services.
              </li>
              <li className="flex items-start">
                <FaTools className="mr-2 mt-1 text-indigo-600" />
                Capture and analyze traffic with Wireshark, identifying one protocol (e.g., HTTP, SMB) and any vulnerabilities.
              </li>
              <li className="flex items-start">
                <FaTools className="mr-2 mt-1 text-indigo-600" />
                Harden the system by applying at least two measures (e.g., disable SMBv1, block port 80).
              </li>
              <li className="flex items-start">
                <FaNetworkWired className="mr-2 mt-1 text-indigo-600" />
                Verify hardening with a follow-up Nmap scan, confirming closed ports.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                Write a PDF report (400–600 words) detailing the lab setup, scan results, packet analysis, hardening steps, and verification. Include three textual screenshot descriptions (e.g., “Wireshark showing SMB traffic”).
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                Upload the PDF report using the form below.
              </li>
            </ol>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter guide for the assignment:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Step-by-step process
1. Set up TryHackMe:
   - Sign up: https://tryhackme.com
   - Join room: Blue
   - Connect VPN: sudo openvpn tryhackme.ovpn
2. Scan with Nmap:
   nmap -sV 10.10.10.10
   # Save: nmap -oN scan.txt
3. Analyze with Wireshark:
   wireshark &
   # Filter: http or smb
   # Save: capture.pcap
4. Harden system:
   # Linux: Disable SMBv1, add ufw rule
   sudo nano /etc/samba/smb.conf
   sudo ufw deny 445
   # Windows: Disable HTTP, enable firewall
   netsh advfirewall firewall add rule name="Block HTTP" dir=in action=block protocol=TCP localport=80
5. Verify with Nmap:
   nmap 10.10.10.10
6. Write report:
   - Lab setup: Room, tools
   - Scan results: Ports, services
   - Packet analysis: Protocols, issues
   - Hardening: Configs applied
   - Verification: Closed ports
   - Screenshots: Describe 3 outputs
7. Export as PDF
8. Upload below`}
            </pre>
          </div>

          {/* PDF Submission */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
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

          {/* Resources */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Resources for Further Learning
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Expand your knowledge with these trusted resources:
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
                — Guides and tutorials for lab rooms.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://nmap.org/book/man.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Nmap Documentation
                </a>
                — Comprehensive Nmap scanning guide.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.wireshark.org/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Wireshark Documentation
                </a>
                — Packet analysis tutorials.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.cisecurity.org/cis-benchmarks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  CIS Benchmarks
                </a>
                — Hardening guidelines for systems.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              By the end of Day 15, you’ll have mastered integrating scanning, packet analysis, and hardening in a TryHackMe lab. Complete the lab, document your findings, and submit your PDF report via Morgan-LMS to solidify your cybersecurity skills!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Det15;