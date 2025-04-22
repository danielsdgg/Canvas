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
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Det10: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 23,
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
          <FaShieldAlt className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Firewall and IDS Basics</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction to Firewalls and IDS */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to Firewalls and IDS
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Firewalls and Intrusion Detection Systems (IDS) are essential defenses in cybersecurity. Firewalls filter network traffic based on predefined rules, while IDS monitor traffic for suspicious activity, alerting administrators to potential threats. This module introduces these technologies, focusing on their setup and monitoring to build hands-on skills for Week 2’s security labs.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Understanding firewalls and IDS equips you to secure networks, detect intrusions, and prepare for the Week 4 network security audit, as outlined in the course roadmap. By mastering tools like iptables and Snort, you’ll gain practical experience in protecting and monitoring networks.
            </p>
          </div>

          {/* Understanding Firewalls */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding Firewalls
            </h2>
            <div className="space-y-6">
              {/* What is a Firewall? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What is a Firewall?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  A firewall is a network security device or software that filters incoming and outgoing traffic based on rules, protecting networks from unauthorized access.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example: Block incoming traffic on port 80
sudo iptables -A INPUT -p tcp --dport 80 -j DROP`}
                </pre>
              </div>

              {/* Types of Firewalls */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Types of Firewalls
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Firewalls include packet-filtering (e.g., iptables), stateful inspection, and application-layer firewalls, each operating at different OSI layers (from <code>Det6</code>).
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Stateful rule example
sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT`}
                </pre>
              </div>

              {/* Firewall Rules */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Firewall Rules
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Rules specify actions (ACCEPT, DROP) based on criteria like IP, port, or protocol (from <code>Det7</code>).
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Allow SSH (port 22)
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT`}
                </pre>
              </div>

              {/* Tools for Firewalls */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Tools for Firewalls
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Common tools include iptables (Linux), pf (BSD), and Windows Firewall for rule management.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# View iptables rules
sudo iptables -L -v -n`}
                </pre>
              </div>
            </div>
          </div>

          {/* Understanding IDS */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaExclamationTriangle className="mr-2 text-indigo-600" />
              Understanding IDS
            </h2>
            <div className="space-y-6">
              {/* What is an IDS? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What is an IDS?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  An IDS monitors network traffic for suspicious activity, generating alerts for potential threats like attacks or policy violations.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Install Snort on Ubuntu
sudo apt update
sudo apt install snort`}
                </pre>
              </div>

              {/* Types of IDS */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Types of IDS
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  IDS types include network-based (NIDS, e.g., Snort) and host-based (HIDS, e.g., OSSEC), focusing on different scopes.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Run Snort in IDS mode
sudo snort -A console -i eth0 -c /etc/snort/snort.conf`}
                </pre>
              </div>

              {/* Detection Methods */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Detection Methods
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  IDS use signature-based (known patterns) and anomaly-based (unusual behavior) detection to identify threats.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Example Snort rule
alert tcp any any -> any 80 (msg:"HTTP GET detected"; content:"GET"; sid:1000001;)`}
                </pre>
              </div>

              {/* Tools for IDS */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Tools for IDS
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Popular IDS tools include Snort, Suricata, and Zeek for network monitoring and alerting.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# View Snort alerts
sudo cat /var/log/snort/alert`}
                </pre>
              </div>
            </div>
          </div>

          {/* Configuring and Monitoring */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaList className="mr-2 text-indigo-600" />
              Configuring and Monitoring
            </h2>
            <div className="space-y-6">
              {/* Configuring Firewall Rules */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. Configuring Firewall Rules
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Set up iptables rules to allow or block traffic based on ports, IPs, or protocols.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Allow HTTP and SSH, drop others
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo iptables -A INPUT -j DROP`}
                </pre>
              </div>

              {/* Setting Up IDS */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Setting Up IDS
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Configure Snort with rules to monitor traffic and generate alerts for suspicious activity.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Edit Snort configuration
sudo nano /etc/snort/snort.conf
# Start Snort
sudo snort -A console -i eth0 -c /etc/snort/snort.conf`}
                </pre>
              </div>

              {/* Simulating Attacks */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Simulating Attacks
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Use Nmap (from <code>Det9</code>) to simulate port scans and trigger IDS alerts.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Perform port scan
nmap -sS -p 1-1000 192.168.56.20`}
                </pre>
              </div>

              {/* Monitoring Alerts */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Monitoring Alerts
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Check firewall logs and IDS alerts to verify rules and detect threats.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# View iptables logs
sudo cat /var/log/kern.log
# View Snort alerts
sudo cat /var/log/snort/alert`}
                </pre>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Firewall and IDS Configuration
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply your skills by configuring a firewall and IDS in a virtual lab. You’ll set up iptables rules, install Snort, simulate attacks, and document your findings.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up two VMs (Kali Linux, Ubuntu) in VirtualBox with IPs <code>192.168.56.10/24</code> and <code>192.168.56.20/24</code> (from <code>Det6</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                On Ubuntu, configure iptables to allow HTTP (port 80) and SSH (port 22), dropping all other traffic.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Install Snort on Ubuntu and add a rule to detect port scans.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                From Kali, perform a port scan (<code>nmap -sS</code>) on <code>192.168.56.20</code> to trigger Snort alerts.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Create a GitHub repository with a report (200–300 words) or screenshot of iptables rules and Snort alerts.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter guide for the lab:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# On Ubuntu VM (192.168.56.20)
# Configure iptables
sudo iptables -F
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo iptables -A INPUT -j DROP
sudo iptables -L -v -n

# Install Snort
sudo apt update
sudo apt install snort
sudo nano /etc/snort/rules/local.rules
# Add rule
alert tcp any any -> any any (msg:"Port scan detected"; flags:S; sid:1000002;)

# Start Snort
sudo snort -A console -i eth0 -c /etc/snort/snort.conf

# On Kali VM (192.168.56.10)
# Perform port scan
nmap -sS -p 1-1000 192.168.56.20

# On Ubuntu, check alerts
sudo cat /var/log/snort/alert

# Push report or screenshot to GitHub repository`}
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
                placeholder="e.g., https://github.com/username/firewall-ids"
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

          {/* Firewall and IDS Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Firewall and IDS Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Deepen your understanding with these resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.netfilter.org/documentation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Netfilter/iptables Documentation
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.snort.org/documents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Snort Official Documentation
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.techtarget.com/searchsecurity/definition/firewall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  TechTarget - What is a Firewall?
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.cisco.com/c/en/us/products/security/what-is-intrusion-detection-system.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Cisco - What is an Intrusion Detection System?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Det10;