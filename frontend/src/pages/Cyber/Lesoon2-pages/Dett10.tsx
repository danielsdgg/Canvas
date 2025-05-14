import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaLink, FaEdit, FaCheckCircle, FaRocket } from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Dett10: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();
    const [count, setCount] = useState(0);
    const [data, setData] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // State for PDF submission
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        assignmentId: 10,
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

    // 🔄 Simulating component lifecycle with useEffect
    useEffect(() => {
        console.log("Component Mounted ✅");

        // Simulating API call
        setTimeout(() => {
            setData("Loaded pentest reporting resources 📡");
        }, 2000);

        return () => {
            console.log("Component Unmounted ❌");
        };
    }, []);

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
                    <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Penetration Testing Reporting</h1>
                </div>

                <div className="p-4 sm:p-6">
                    {/* 📖 Introduction to Penetration Testing Reporting */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaEdit className="mr-2 text-indigo-600" />
                            📖 Understanding Penetration Testing Reporting
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Penetration testing reporting is the final and critical phase of a pentest, where findings, their impact, and remediation strategies are documented in a professional, clear, and actionable report. A well-crafted report communicates vulnerabilities to technical and non-technical stakeholders, enabling organizations to prioritize and address security weaknesses. This module builds on the technical skills from <code>Dett5</code>–<code>Dett9</code> (vulnerability mapping, exploitation, password attacks, privilege escalation, and persistence), focusing on synthesizing results into a structured document. These skills are essential for Week 6’s comprehensive security audit and prepare students for real-world pentesting engagements.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Ethical hackers must ensure reports are accurate, concise, and tailored to the audience, maintaining confidentiality and adhering to engagement scope. Reports not only demonstrate the value of the pentest but also guide organizations in strengthening their security posture.
                        </p>
                    </section>

                    {/* 📝 Key Elements of a Pentest Report */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            📝 Key Elements of a Pentest Report
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            A professional pentest report typically includes several standardized sections to ensure clarity and utility. Below are the essential components:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                            <li>
                                <strong>Executive Summary:</strong> A high-level overview for non-technical stakeholders, summarizing key findings, risks, and recommendations.
                            </li>
                            <li>
                                <strong>Scope and Methodology:</strong> Details the systems tested, tools used, and testing approach (e.g., black-box, white-box).
                            </li>
                            <li>
                                <strong>Findings and Vulnerabilities:</strong> Lists identified vulnerabilities, their severity (e.g., CVSS scores), and evidence (e.g., screenshots, logs).
                            </li>
                            <li>
                                <strong>Impact Assessment:</strong> Explains the potential consequences of each vulnerability if exploited.
                            </li>
                            <li>
                                <strong>Remediation Recommendations:</strong> Provides actionable steps to mitigate each vulnerability (e.g., apply patches, configure firewalls).
                            </li>
                            <li>
                                <strong>Conclusion:</strong> Summarizes the overall security posture and next steps.
                            </li>
                            <li>
                                <strong>Appendices:</strong> Includes technical details, raw data, or additional resources (e.g., tool outputs).
                            </li>
                        </ul>
                        <p className="text-gray-700 text-sm sm:text-base mt-4 leading-relaxed">
                            Example: A report might document a privilege escalation vulnerability (<code>Dett8</code>), its CVSS score, proof of exploitation, and recommend kernel updates.
                        </p>
                    </section>

                    {/* 🚀 Writing Professional Pentest Reports */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaRocket className="mr-2 text-indigo-600" />
                            🚀 Writing Professional Pentest Reports
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Writing a professional pentest report involves structuring findings clearly, prioritizing vulnerabilities, and tailoring content to the audience. Below are detailed guidelines and examples to create effective reports, along with a practical demonstration of key reporting techniques.
                        </p>

                        {/* 1️⃣ Structuring the Report */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                📑 Structuring the Report
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                A well-structured report follows a logical flow, ensuring all stakeholders can understand and act on the findings. Use tools like Microsoft Word, LaTeX, or templates from OWASP for consistency.
                            </p>
                            <p className="text-gray-800 text-sm sm:text-base mb-3">Report Section Counter: {count}</p>
                            <button
                                onClick={() => setCount(count + 1)}
                                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
                            >
                                Add Section
                            </button>
                            <pre className="bg-gray-900 text-white p-4 rounded-md mt-4 text-sm sm:text-base overflow-x-auto">
                                {`# Example Report Structure
1. Executive Summary
   - High-level findings
   - Business impact
2. Scope and Methodology
   - Target systems (e.g., 192.168.56.20)
   - Tools (e.g., Nmap, Metasploit)
3. Findings
   - Vulnerability: Weak FTP Password
   - Severity: High (CVSS 7.5)
   - Evidence: Screenshot of Hydra output
4. Remediation
   - Enforce strong passwords
   - Enable MFA`}
                            </pre>
                        </div>

                        {/* 2️⃣ Documenting Findings */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                🔍 Documenting Findings
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Each finding should include a description, severity rating (e.g., CVSS or High/Medium/Low), evidence, and reproduction steps. This ensures credibility and repeatability.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mb-4">{data || "Loading..."}</p>

                            {/* Why Detailed Findings Matter */}
                            <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                                <FaList className="mr-2 text-indigo-600" />
                                🛠 Why Detailed Findings Matter
                            </h4>
                            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed mb-4 space-y-2">
                                <li>Enables technical teams to verify and reproduce issues.</li>
                                <li>Provides evidence to justify remediation efforts.</li>
                                <li>Supports compliance with standards like PCI DSS or ISO 27001.</li>
                            </ul>

                            {/* Example: Documenting a Password Attack */}
                            <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                🌍 Example: Documenting a Password Attack
                            </h4>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                Below is an example of documenting a weak password vulnerability found using Hydra (<code>Dett7</code>).
                            </p>
                            <pre className="bg-gray-900 text-white p-4 rounded-md mt-3 text-sm sm:text-base overflow-x-auto">
                                {`**Vulnerability**: Weak FTP Password
**Severity**: High (CVSS 7.5)
**Description**: The FTP service on 192.168.56.20 uses a weak password ("password123").
**Evidence**:
- Command: hydra -l testuser -P rockyou.txt ftp://192.168.56.20
- Output: [21][ftp] host: 192.168.56.20 login: testuser password: password123
- Screenshot: [Attached]
**Reproduction Steps**:
1. Run Hydra with rockyou.txt wordlist.
2. Target FTP service on 192.168.56.20.
3. Confirm credentials.
**Impact**: Unauthorized access to sensitive files.
**Remediation**:
- Enforce complex passwords (12+ characters, mixed case).
- Implement multi-factor authentication (MFA).`}
                            </pre>
                        </div>

                        {/* 3️⃣ Providing Remediation Recommendations */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                🛠 Providing Remediation Recommendations
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Remediation recommendations should be specific, actionable, and prioritized based on severity. Use frameworks like NIST SP 800-53 or OWASP Top Ten to align with industry standards.
                            </p>
                            <pre className="bg-gray-900 text-white p-4 rounded-md mt-4 text-sm sm:text-base overflow-x-auto">
                                {`**Vulnerability**: Unpatched Kernel (Dirty COW, CVE-2016-5195)
**Remediation**:
1. Update kernel to version 4.8 or higher:
   sudo apt update && sudo apt upgrade linux-kernel
2. Apply security patches regularly.
3. Restrict root access to authorized users only.
4. Monitor system logs for unauthorized privilege escalation attempts.`}
                            </pre>
                        </div>

                        {/* 4️⃣ Tailoring to Stakeholders */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                🎯 Tailoring to Stakeholders
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Reports must address both technical and non-technical audiences. Use clear language for executives and detailed technical data for IT teams. Below is an example of an executive summary.
                            </p>
                            <pre className="bg-gray-900 text-white p-4 rounded-md mt-4 text-sm sm:text-base overflow-x-auto">
                                {`**Executive Summary**
During the penetration test conducted from May 1–5, 2025, our team identified critical vulnerabilities, including weak credentials and an unpatched kernel. These issues could allow unauthorized access and system compromise, posing significant risks to data confidentiality and integrity. We recommend immediate remediation, including enforcing strong password policies, applying patches, and enabling multi-factor authentication. Full details and technical findings are provided in the report.`}
                            </pre>
                        </div>

                        {/* 5️⃣ Using Report Templates */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                📄 Using Report Templates
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Leverage templates from OWASP, SANS, or tools like Dradis to streamline report creation. Below is a sample template structure.
                            </p>
                            <pre className="bg-gray-900 text-white p-4 rounded-md mt-4 text-sm sm:text-base overflow-x-auto">
                                {`# Penetration Test Report
## 1. Executive Summary
## 2. Introduction
   - Objectives
   - Scope
## 3. Methodology
   - Tools Used
   - Testing Phases
## 4. Findings
   - Vulnerability 1
     - Description
     - Severity
     - Evidence
     - Remediation
## 5. Conclusion
## 6. Appendices`}
                            </pre>
                        </div>
                    </section>

                    {/* 🧑‍💻 Practical Exercise: Write a Pentest Report */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                            <FaRocket className="mr-2 text-indigo-600" />
                            🧑‍💻 Practical Exercise: Write a Penetration Test Report
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            In this exercise, you’ll create a professional penetration test report based on simulated findings from previous modules (<code>Day7</code>–<code>Day9</code>). The report will document vulnerabilities, their impact, and remediation strategies, using a structured format. Submit your report as a PDF file.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                            Follow the step-by-step guide below to create the report. Test your formatting and content for clarity, and submit your PDF once complete. Your instructor will review your work and provide feedback.
                        </p>

                        {/* Step 1 - Define Scope and Methodology */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                Step 1: Define Scope and Methodology
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Outline the scope of the simulated pentest (e.g., Ubuntu VM at <code>192.168.56.20</code>) and the methodology, including tools used (e.g., Hydra, Metasploit, LinPEAS) and testing phases (e.g., reconnaissance, exploitation, post-exploitation).
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                <strong>Goal:</strong> Establish the context and approach of the pentest.
                            </p>
                        </div>

                        {/* Step 2 - Document Findings */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                Step 2: Document Findings
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Document three vulnerabilities from previous labs: a weak FTP password (<code>Day7</code>), a kernel privilege escalation (<code>Day8</code>), and a cron job persistence mechanism (<code>Day9</code>). For each, include description, severity, evidence, and reproduction steps.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                <strong>Goal:</strong> Clearly articulate vulnerabilities with supporting evidence.
                            </p>
                        </div>

                        {/* Step 3 - Assess Impact */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                Step 3: Assess Impact
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Explain the potential impact of each vulnerability if exploited (e.g., data theft, system compromise, persistent access). Use business context to highlight risks (e.g., financial loss, reputational damage).
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                <strong>Goal:</strong> Demonstrate the real-world consequences of vulnerabilities.
                            </p>
                        </div>

                        {/* Step 4 - Provide Remediation Recommendations */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                Step 4: Provide Remediation Recommendations
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Offer specific, actionable remediation steps for each vulnerability (e.g., enforce strong passwords, update kernel, audit cron jobs). Prioritize based on severity.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                <strong>Goal:</strong> Enable stakeholders to address vulnerabilities effectively.
                            </p>
                        </div>

                        {/* Step 5 - Write Executive Summary and Conclusion */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                Step 5: Write Executive Summary and Conclusion
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Create an executive summary for non-technical stakeholders, summarizing key findings and risks. Conclude with an overall assessment of the system’s security posture and next steps.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                <strong>Goal:</strong> Communicate effectively to diverse audiences.
                            </p>
                        </div>

                        {/* Example Solution */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaCode className="mr-2 text-indigo-600" />
                                Example Solution
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                Here’s a sample report excerpt to guide you. Build upon it to meet all requirements:
                            </p>
                            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base overflow-x-auto mb-4">
                                {`# Penetration Test Report
## Executive Summary
The penetration test conducted on May 14, 2025, identified critical vulnerabilities in the Ubuntu server (192.168.56.20), including weak credentials, an unpatched kernel, and unauthorized persistence mechanisms. These issues could lead to unauthorized access, data breaches, and persistent system control. Immediate remediation is recommended.

## Scope and Methodology
- **Target**: Ubuntu VM (192.168.56.20)
- **Tools**: Hydra, Metasploit, LinPEAS, Netcat
- **Phases**: Reconnaissance, exploitation, privilege escalation, persistence

## Findings
### 1. Weak FTP Password
- **Severity**: High (CVSS 7.5)
- **Description**: The FTP service uses a weak password ("password123").
- **Evidence**: Hydra output, screenshot
- **Impact**: Unauthorized file access
- **Remediation**: Enforce strong passwords, enable MFA

### 2. Kernel Privilege Escalation (Dirty COW)
- **Severity**: Critical (CVSS 9.8)
- **Description**: Vulnerable kernel (4.4) allows root access via Dirty COW exploit.
- **Evidence**: Exploit output, root shell screenshot
- **Impact**: Full system compromise
- **Remediation**: Update kernel, restrict root access

### 3. Cron Job Persistence
- **Severity**: Medium (CVSS 5.5)
- **Description**: Unauthorized cron job executes a reverse shell.
- **Evidence**: Cron configuration, Netcat connection
- **Impact**: Persistent attacker access
- **Remediation**: Audit cron jobs, remove unauthorized tasks

## Conclusion
The system exhibits significant security weaknesses requiring urgent attention. Implementing the recommended remediations will enhance security.

## Appendices
- Tool outputs
- Screenshots`}
                            </pre>
                        </div>

                        {/* Submission Field */}
                        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FaLink className="mr-2 text-indigo-600" />
                                Submit Your Work
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                                After completing the pentest report, export it as a PDF and submit it below. Ensure your report includes:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4 space-y-2">
                                <li>Executive summary for non-technical stakeholders.</li>
                                <li>Scope and methodology of the pentest.</li>
                                <li>Three documented vulnerabilities with severity, evidence, and reproduction steps.</li>
                                <li>Impact assessment for each vulnerability.</li>
                                <li>Actionable remediation recommendations.</li>
                                <li>Conclusion summarizing the security posture.</li>
                                <li>Appendices with supporting evidence (e.g., screenshots).</li>
                            </ul>
                            <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                                Test your report for clarity, professionalism, and completeness before submitting.
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="file"
                                    name="fileUrl"
                                    accept="application/pdf"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    ref={inputRef}
                                    onChange={handleFileUpload}
                                />
                                <button
                                    type="submit"
                                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
                                >
                                    Submit Report
                                </button>
                                <button
                                    type="button"
                                    onClick={() => inputRef.current?.click()}
                                    className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
                                >
                                    Select File
                                </button>
                            </form>
                            {submitted && (
                                <p className="mt-4 text-green-600 font-medium flex items-center">
                                    <FaCheckCircle className="mr-2" />
                                    Your report has been submitted successfully!
                                </p>
                            )}
                        </div>
                    </section>

                    {/* 📚 Further Resources */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                            <FaLink className="mr-2 text-indigo-600" />
                            📚 Further Resources
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                            <li>
                                <a
                                    href="https://owasp.org/www-project-pentest-report/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    OWASP - Penetration Testing Report Template
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.sans.org/reading-room/whitepapers/testing/writing-penetration-testing-report-33343"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    SANS - Writing a Penetration Testing Report
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.offensive-security.com/reports/sample-penetration-testing-report.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    Offensive Security - Sample Pentest Report
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://dradisframework.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    Dradis - Reporting Framework
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://tryhackme.com/room/reportwriting"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    TryHackMe - Report Writing for Penetration Testers
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Dett10;