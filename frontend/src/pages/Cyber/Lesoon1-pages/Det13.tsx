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
  FaShieldAlt,
  FaLock,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Det13: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    assignmentId: 26,
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
          <FaShieldAlt className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Patching & Hardening</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Welcome to Day 13 of Morgan Technical Training’s Cybersecurity Course! Today, we explore patching and hardening, critical practices for securing systems against vulnerabilities. Patching addresses known flaws by applying updates, while hardening minimizes attack surfaces through secure configurations. These skills build on vulnerability scanning from <code>Det12</code> and CVE analysis from <code>Det11</code>, preparing you for Week 4’s network security audit.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            In this lesson, you’ll learn to patch Linux and Windows systems, implement hardening measures, and follow best practices. Using a VirtualBox lab (from <code>Det2</code>), you’ll practice these techniques and submit your work via Morgan-LMS, mirroring real-world system administration workflows.
          </p>

          {/* Why Patch & Harden Systems? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Why Patch & Harden Systems?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Patching and hardening are essential for protecting systems from exploits and ensuring compliance. Their key benefits include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Mitigate Vulnerabilities:</strong> Patches fix CVEs (from <code>Det11</code>) identified by tools like OpenVAS (<code>Det12</code>).
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Reduce Attack Surface:</strong> Hardening disables unnecessary services and secures configurations.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Compliance:</strong> Aligns with standards like NIST and CIS for secure system management.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Proactive Defense:</strong> Prevents exploits before they occur, complementing firewalls and IDS (<code>Det10</code>).
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              At Morgan Technical Training, you’ll apply these techniques in a lab environment, submitting reports via Morgan-LMS to demonstrate secure system administration.
            </p>
          </div>

          {/* What is Patching? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              What is Patching?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Patching involves applying software updates to fix security vulnerabilities, bugs, or performance issues. Patches address CVEs (from <code>Det11</code>) identified in vulnerability scans (<code>Det12</code>), ensuring systems remain secure.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              For example, a patch for Apache might fix a remote code execution vulnerability (e.g., CVE-2023-12345). Patching is critical for both operating systems (e.g., Ubuntu, Windows) and applications (e.g., web servers, browsers).
            </p>
          </div>

          {/* What is System Hardening? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              What is System Hardening?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              System hardening reduces a system’s attack surface by removing unnecessary services, securing configurations, and enforcing strong access controls. It complements patching by proactively securing systems against exploits.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Hardening includes disabling unused ports, enforcing strong passwords, and configuring firewalls (from <code>Det10</code>). Standards like CIS Benchmarks provide detailed hardening guidelines for Linux and Windows.
            </p>
          </div>

          {/* Patching Systems */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Patching Systems
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply patches to keep systems secure. Below are steps for patching Linux (Ubuntu) and Windows in a VirtualBox lab (from <code>Det2</code>).
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Linux (Ubuntu)
sudo apt update
sudo apt upgrade -y
# Check for security updates
sudo apt list --upgradable
# Example: Patch Apache
sudo apt install apache2

# Windows
# Open Settings > Windows Update
# Click "Check for updates"
# Install all available updates
# Example: Install specific KB patch
wusa.exe <patch>.msu`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Key steps include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Check for Updates:</strong> Use package managers (Linux) or Windows Update (Windows) to identify patches.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Apply Patches:</strong> Install updates for the OS and applications (e.g., Apache, browsers).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Verify Updates:</strong> Confirm patches are applied (e.g., check software versions).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Reboot if Needed:</strong> Restart the system to apply kernel or system-level updates.
              </li>
            </ul>
          </div>

          {/* Hardening Linux Configurations */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaList className="mr-2 text-indigo-600" />
              Hardening Linux Configurations
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Secure Linux systems (e.g., Ubuntu) by applying hardening measures. Below are key configurations:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Disable unused services
sudo systemctl disable apache2
# Secure SSH
sudo nano /etc/ssh/sshd_config
# Set: PermitRootLogin no
# Set: PasswordAuthentication no
sudo systemctl restart sshd

# Configure firewall (ufw)
sudo ufw enable
sudo ufw allow 22/tcp
sudo ufw deny 80/tcp

# Update user passwords
sudo passwd user1
# Enforce strong passwords
sudo nano /etc/security/pwquality.conf
# Set: minlen=12`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Common hardening steps:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLock className="mr-2 mt-1 text-indigo-600" />
                <strong>Disable Services:</strong> Stop unused services (e.g., Apache, FTP) to reduce attack vectors.
              </li>
              <li className="flex items-start">
                <FaLock className="mr-2 mt-1 text-indigo-600" />
                <strong>Secure SSH:</strong> Disable root login and password authentication, use key-based auth.
              </li>
              <li className="flex items-start">
                <FaLock className="mr-2 mt-1 text-indigo-600" />
                <strong>Firewall Rules:</strong> Use <code>ufw</code> to restrict ports (from <code>Det10</code>).
              </li>
              <li className="flex items-start">
                <FaLock className="mr-2 mt-1 text-indigo-600" />
                <strong>Strong Passwords:</strong> Enforce complex passwords via <code>pwquality</code>.
              </li>
            </ul>
          </div>

          {/* Hardening Windows Configurations */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaList className="mr-2 text-indigo-600" />
              Hardening Windows Configurations
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Secure Windows systems (e.g., Windows 10/11) with these hardening measures:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# Disable unnecessary services
sc config wuauserv start= disabled
# Configure Windows Firewall
netsh advfirewall set allprofiles state on
netsh advfirewall firewall add rule name="Block RDP" dir=in action=block protocol=TCP localport=3389

# Enforce strong passwords
net accounts /minpwlen:12 /maxpwage:90
# Disable Guest account
net user Guest /active:no

# Enable Windows Defender
Set-MpPreference -DisableRealtimeMonitoring $false`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 mt-4">
              Common hardening steps:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLock className="mr-2 mt-1 text-indigo-600" />
                <strong>Disable Services:</strong> Stop unused services (e.g., Windows Update if managed externally).
              </li>
              <li className="flex items-start">
                <FaLock className="mr-2 mt-1 text-indigo-600" />
                <strong>Firewall Rules:</strong> Block unnecessary ports (e.g., RDP) using Windows Firewall (<code>Det10</code>).
              </li>
              <li className="flex items-start">
                <FaLock className="mr-2 mt-1 text-indigo-600" />
                <strong>User Accounts:</strong> Disable Guest accounts and enforce strong passwords.
              </li>
              <li className="flex items-start">
                <FaLock className="mr-2 mt-1 text-indigo-600" />
                <strong>Antivirus:</strong> Ensure Windows Defender is enabled and updated.
              </li>
            </ul>
          </div>

          {/* Best Practices for Patching & Hardening */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-indigo-600" />
              Best Practices for Patching & Hardening
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Follow these guidelines to ensure effective system security:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                <strong>Regular Patching:</strong> Schedule monthly updates to address new CVEs.
              </li>
              <li className="flex items-start">
                <FaLock className="mr-2 mt-1 text-indigo-600" />
                <strong>Minimal Services:</strong> Disable all non-essential services and ports.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Backup Systems:</strong> Create snapshots in VirtualBox before changes.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                <strong>Follow Standards:</strong> Use CIS Benchmarks or NIST guidelines for configurations.
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
              Hands-on practice is key to mastering patching and hardening. Complete these exercises in a VirtualBox lab and submit a PDF report via Morgan-LMS:
            </p>
            <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Set up a Linux (Ubuntu) or Windows VM in VirtualBox (from <code>Det2</code>).
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                Apply all available patches to the OS and one application (e.g., Apache on Linux, Notepad++ on Windows).
              </li>
              <li className="flex items-start">
                <FaLock className="mr-2 mt-1 text-indigo-600" />
                Harden the system by disabling one unused service, securing SSH (Linux) or RDP (Windows), and adding a firewall rule.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                Verify changes using Nmap (from <code>Det9</code>) to confirm closed ports.
              </li>
              <li className="flex items-start">
                <FaEdit className="mr-2 mt-1 text-indigo-600" />
                Write a PDF report (300–500 words) detailing the patches applied, hardening measures, and verification results.
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
1. Set up VM:
   - Ubuntu or Windows 10/11 in VirtualBox
2. Patch system:
   - Linux: sudo apt update && sudo apt upgrade
   - Windows: Settings > Windows Update
3. Harden system:
   - Linux: Disable Apache, secure SSH, enable ufw
   - Windows: Disable RDP, enable Defender, add firewall rule
4. Verify with Nmap:
   nmap 192.168.56.20
5. Document in report:
   - Patches applied (e.g., Apache 2.4.58)
   - Hardening steps (e.g., SSH config)
   - Nmap results (e.g., port 80 closed)
6. Export as PDF
7. Upload below`}
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
                  href="https://www.cisecurity.org/cis-benchmarks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  CIS Benchmarks
                </a>
                — Hardening guidelines for Linux and Windows.
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
                — Security controls for system hardening.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://docs.microsoft.com/en-us/windows/security/threat-protection/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Microsoft Security Guidance
                </a>
                — Windows hardening and patching best practices.
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://ubuntu.com/security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Ubuntu Security
                </a>
                — Linux patching and hardening resources.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              By the end of Day 13, you’ll have a solid grasp of patching and hardening techniques. Experiment in your lab, document your work, and submit your report via Morgan-LMS to strengthen your cybersecurity skills!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Det13;