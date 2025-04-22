import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCode,
  FaNetworkWired,
  FaLayerGroup,
  FaServer,
  FaLaptopCode,
  FaTools,
  FaCheckCircle,
  FaRocket,
  FaLink,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Det6: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 19,
    userId: userData?.userDetails.id ?? "",
    reportUrl: "",
  });

  // Handle URL input change
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        alert("Assignment report URL submitted successfully!");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting URL:", error);
      alert("Failed to submit. Please try again later.");
    }
  };

  return (
    <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-8 mx-auto max-w-5xl">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105 p-2"
      >
        <FaArrowLeft className="mr-2 text-lg" />
        Back
      </button>

      {/* Title */}
      <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center justify-center">
        <FaNetworkWired className="mr-3 text-2xl" />
        <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Networking 101: Foundations for Cybersecurity</h1>
      </div>

      <div className="p-4 sm:p-6">
        {/* Introduction */}
        <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
            <FaLaptopCode className="mr-2 text-indigo-600" />
            Why Networking Matters
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Networking is the backbone of modern IT systems and a critical area for cybersecurity professionals. Understanding how devices communicate via networks enables you to secure systems, detect intrusions, and analyze threats. This module covers TCP/IP, the OSI model, IP addresses, and subnets, equipping you with foundational knowledge for Week 2’s networking labs and tools like Wireshark and Nmap.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
            Networking 101 is essential for tasks like configuring firewalls, scanning for vulnerabilities, and conducting the Week 4 network security audit. By mastering these concepts, you’ll build a strong foundation for advanced cybersecurity topics like ethical hacking and incident response, as outlined in the course syllabus.
          </p>
        </section>

        {/* OSI Model */}
        <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
            <FaLayerGroup className="mr-2 text-indigo-600" />
            OSI Model
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            The OSI (Open Systems Interconnection) model standardizes network functions into seven layers, providing a framework for understanding data communication and securing networks.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
            <li>
              <strong>Layer 1 - Physical:</strong> Handles hardware (cables, hubs); secure physical access to prevent tampering.
            </li>
            <li>
              <strong>Layer 2 - Data Link:</strong> Manages device-to-device communication (MAC addresses, Ethernet); vulnerable to ARP spoofing.
            </li>
            <li>
              <strong>Layer 3 - Network:</strong> Routes data using IP addresses; focus of IP and subnet studies.
            </li>
            <li>
              <strong>Layer 4 - Transport:</strong> Ensures reliable data transfer (TCP, UDP); firewalls filter ports here.
            </li>
            <li>
              <strong>Layer 5 - Session:</strong> Maintains connections; attacks like session hijacking target this layer.
            </li>
            <li>
              <strong>Layer 6 - Presentation:</strong> Formats and encrypts data (SSL/TLS); critical for secure communication.
            </li>
            <li>
              <strong>Layer 7 - Application:</strong> Supports user applications (HTTP, DNS); prone to phishing and SQL injection.
            </li>
          </ul>
          <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            Cybersecurity Applications
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Each OSI layer has specific security implications. For example, encrypting data at Layer 6 (e.g., using HTTPS) protects against eavesdropping, while filtering ports at Layer 4 prevents unauthorized access. In Week 2 labs, you’ll analyze packets at different layers using Wireshark.
          </p>
        </section>

        {/* TCP/IP Model */}
        <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
            <FaServer className="mr-2 text-indigo-600" />
            TCP/IP Model
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            The TCP/IP model is a practical framework for Internet communication, simplifying the OSI model into four layers. It’s widely used in cybersecurity for analyzing network traffic.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
            <li>
              <strong>Link Layer:</strong> Combines OSI’s Physical and Data Link layers (Ethernet, Wi-Fi); handles hardware-level communication.
            </li>
            <li>
              <strong>Internet Layer:</strong> Matches OSI’s Network layer (IP, ICMP); manages addressing and routing.
            </li>
            <li>
              <strong>Transport Layer:</strong> Aligns with OSI’s Transport layer (TCP, UDP); ensures reliable data delivery.
            </li>
            <li>
              <strong>Application Layer:</strong> Combines OSI’s Session, Presentation, and Application layers (HTTP, DNS); supports user interactions.
            </li>
          </ul>
          <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            Key Protocols
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            TCP ensures reliable, connection-oriented communication, while UDP is faster but connectionless. IP handles addressing, and DNS resolves domain names. In labs, you’ll use Nmap to scan TCP/UDP ports and Wireshark to inspect protocol headers.
          </p>
        </section>

        {/* IP Addresses */}
        <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
            <FaLaptopCode className="mr-2 text-indigo-600" />
            IP Addresses
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            IP addresses uniquely identify devices on a network, enabling communication. Understanding their structure is essential for tasks like network scanning and firewall configuration.
          </p>
          <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
            <li>
              <span className="font-semibold">IPv4:</span> 32-bit addresses (e.g., <code className="bg-gray-200 px-2 py-1 rounded">192.168.1.1</code>), split into four octets; limited to 4.3 billion addresses.
            </li>
            <li>
              <span className="font-semibold">IPv6:</span> 128-bit addresses (e.g., <code className="bg-gray-200 px-2 py-1 rounded">2001:0db8::1</code>), designed for vast address space.
            </li>
            <li>
              <span className="font-semibold">Private vs. Public:</span> Private ranges (e.g., <code className="bg-gray-200 px-2 py-1 rounded">192.168.0.0/16</code>) for LANs; public addresses for Internet routing.
            </li>
            <li>
              <span className="font-semibold">Classes:</span> IPv4 classes (A, B, C) define network/host portions; Class C is common for small networks.
            </li>
          </ol>
          <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            Practical Example
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Assign <code className="bg-gray-200 px-2 py-1 rounded">192.168.1.10</code> to a Kali Linux VM in a lab. Use Nmap to scan the range <code className="bg-gray-200 px-2 py-1 rounded">192.168.1.0/24</code> to identify active devices, a task you’ll practice in Week 2.
          </p>
        </section>

        {/* Subnets */}
        <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
            <FaServer className="mr-2 text-indigo-600" />
            Subnets
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            Subnetting divides networks into smaller segments, enhancing security and efficiency. It’s a key skill for designing secure networks and analyzing traffic.
          </p>
          <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
            <li>
              <span className="font-semibold">Subnet Masks:</span> Define network/host portions (e.g., <code className="bg-gray-200 px-2 py-1 rounded">255.255.255.0</code> for /24, 256 addresses).
            </li>
            <li>
              <span className="font-semibold">CIDR Notation:</span> Compact format (e.g., <code className="bg-gray-200 px-2 py-1 rounded">192.168.1.0/24</code>); /24 indicates 24 network bits.
            </li>
            <li>
              <span className="font-semibold">Subnetting Example:</span> Split <code className="bg-gray-200 px-2 py-1 rounded">192.168.1.0/24</code> into <code className="bg-gray-200 px-2 py-1 rounded">192.168.1.0/25</code> and <code className="bg-gray-200 px-2 py-1 rounded">192.168.1.128/25</code>, each with 128 addresses.
            </li>
          </ol>
          <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            Security Benefits
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Subnets isolate sensitive systems, reducing attack surfaces. For example, placing servers in a separate subnet with strict firewall rules enhances security, a concept you’ll apply in the Week 4 audit.
          </p>
        </section>

        {/* Practical Networking Tools */}
        <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
            <FaTools className="mr-2 text-indigo-600" />
            Practical Networking Tools
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            Tools like Wireshark and Nmap apply networking concepts to cybersecurity tasks. Select a tool to learn its basic usage:
          </p>
          <div className="flex flex-col items-center">
            <select
              onChange={(e) => setSelectedTool(e.target.value)}
              className="p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a tool</option>
              <option value="wireshark">Wireshark</option>
              <option value="nmap">Nmap</option>
            </select>

            {selectedTool && (
              <div className="mt-4 p-3 bg-indigo-100 text-indigo-800 rounded-lg shadow">
                {selectedTool === "wireshark" && (
                  <p>
                    🛠️ Use Wireshark: Install via <code className="bg-gray-200 px-2 py-1 rounded">apt install wireshark</code> on Kali Linux, capture packets, and filter by protocol (e.g., TCP).
                  </p>
                )}
                {selectedTool === "nmap" && (
                  <p>
                    🔍 Use Nmap: Run <code className="bg-gray-200 px-2 py-1 rounded">nmap 192.168.1.0/24</code> to scan for active hosts and open ports in your lab network.
                  </p>
                )}
              </div>
            )}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            Tool Setup Tips
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Ensure tools are used in a secure lab environment (VirtualBox, Host-Only mode) as per the Getting Started guide. Follow the Student Handbook’s ethical use policies to avoid unauthorized scanning.
          </p>
        </section>

        {/* Networking Assignment */}
        <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
            <FaRocket className="mr-2 text-indigo-600" />
            Networking Assignment: Build and Analyze a Virtual Network
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            Apply your Networking 101 knowledge by setting up a virtual network, assigning IP addresses, and analyzing traffic. Follow these steps in your Kali Linux lab environment:
          </p>
          <pre className="bg-gray-800 text-white text-sm sm:text-base p-4 rounded-lg shadow-md overflow-x-auto">
            <code>
              {`# 1. Set up VirtualBox environment (from Getting Started guide)
# Ensure Host-Only network is configured

# 2. Create two VMs in VirtualBox
# VM1: Kali Linux (attacker), VM2: Ubuntu (target)

# 3. Assign IP addresses
# VM1: 192.168.56.10/24
# VM2: 192.168.56.20/24
# Command in Kali: sudo ip addr add 192.168.56.10/24 dev eth0
# Command in Ubuntu: sudo ip addr add 192.168.56.20/24 dev eth0

# 4. Capture traffic with Wireshark
# Start Wireshark: sudo wireshark &
# Filter for traffic between 192.168.56.10 and 192.168.56.20

# 5. Generate traffic
# From VM1, ping VM2: ping 192.168.56.20

# 6. Save a screenshot of Wireshark capture or write a brief report
# Upload to Google Drive and get a shareable URL`}
            </code>
          </pre>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3">
            💡 <strong>Task:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2 mb-4">
            <li>Set up the virtual network as described, ensuring proper subnet configuration.</li>
            <li>Capture and analyze ping traffic using Wireshark, noting TCP/IP protocols involved.</li>
            <li>Submit a shareable URL to a screenshot of your Wireshark capture or a brief report (e.g., 200 words) summarizing your findings.</li>
          </ul>

          {/* Submission Field */}
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <FaLink className="mr-2 text-indigo-600" />
              Submit Your Assignment
            </h3>
            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
              Paste the URL to your Wireshark screenshot or report (e.g., Google Drive link) below:
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="reportUrl"
                value={form.reportUrl}
                onChange={handleUrlChange}
                placeholder="e.g., https://drive.google.com/your-report"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
              />
              <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Submit URL
              </button>
            </form>
            {submitted && (
              <p className="mt-4 text-green-600 font-medium flex items-center">
                <FaCheckCircle className="mr-2" />
                Your assignment report URL has been submitted successfully!
              </p>
            )}
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            Troubleshooting Tips
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Common issues and fixes for the assignment:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
            <li>
              <strong>No Traffic Captured:</strong> Ensure VMs are on the same Host-Only network and Wireshark is filtering correctly.
            </li>
            <li>
              <strong>IP Assignment Errors:</strong> Verify IP addresses with <code className="bg-gray-200 px-2 py-1 rounded">ip addr</code> and check subnet masks.
            </li>
            <li>
              <strong>Permission Issues:</strong> Run Wireshark and network commands with <code className="bg-gray-200 px-2 py-1 rounded">sudo</code>.
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
            <FaCheckCircle className="mr-2 text-indigo-600" />
            Conclusion
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Networking 101 provides the foundation for securing and analyzing networks in cybersecurity. By mastering the OSI model, TCP/IP, IP addresses, and subnets, you’re equipped to tackle Week 2 labs and the Week 4 network security audit. Use tools like <strong>Wireshark</strong> and <strong>Nmap</strong> to apply these concepts, and engage with Morgan-LMS resources to deepen your understanding. Keep practicing, and you’ll be ready for advanced topics like ethical hacking and incident response!
          </p>
        </section>
      </div>
    </section>
  );
};

export default Det6;