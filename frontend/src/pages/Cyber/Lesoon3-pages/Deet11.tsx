import React, { useState, useCallback, useRef } from "react";
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
} from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

interface UserDetails {
  id: string;
}

interface UserData {
  userDetails: UserDetails;
}

interface AuthContext {
  userData: UserData | null;
  userToken: string | null;
}

interface FormState {
  assignmentId: number;
  userId: string;
  submissionUrl: string;
  submissionType: "github" | "pdf";
  githubUrl: string;
  flag: string;
}

const Deet11: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth() as AuthContext;
  const inputRef = useRef<HTMLInputElement>(null);

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    assignmentId: 11,
    userId: String(userData?.userDetails.id ?? ""),
    submissionUrl: "",
    submissionType: "pdf",
    githubUrl: "",
    flag: "",
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      alert("No file selected. Please choose a file.");
      return;
    }
    if (file.type !== "application/pdf") {
      alert("Please upload a valid PDF file.");
      return;
    }
    const fileUrl = URL.createObjectURL(file);
    setForm((prev) => ({
      ...prev,
      submissionUrl: fileUrl,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (form.submissionType === "pdf" && !form.submissionUrl) {
        alert("Please upload a PDF report.");
        return;
      }
      if (!form.githubUrl) {
        alert("Please provide a GitHub repository link.");
        return;
      }
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

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Submission failed.");
        }

        setSubmitted(true);
        alert("Assignment submitted successfully!");
      } catch (error) {
        console.error("Submission error:", error);
        alert(`Failed to submit: ${error instanceof Error ? error.message : "Unknown error"}`);
      }
    },
    [form, userToken]
  );

  return (
    <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-8 mx-auto max-w-5xl">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105 p-2"
        aria-label="Go back"
      >
        <FaArrowLeft className="mr-2 text-lg" /> Back
      </button>

      <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center">
        <FaShieldAlt className="mr-3 text-2xl" />
        <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">
          Web Application Penetration Testing Assessment
        </h1>
      </div>

      <div className="p-4 sm:p-6">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaEdit className="mr-2 text-indigo-600" />
            Introduction to Web Application Penetration Testing
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            Web application penetration testing identifies and exploits vulnerabilities in web applications, such as XSS, SQL injection, and file inclusion, aligning with the OWASP Top 10...
          </p>
        </div>

        <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            Understanding Web Application Penetration Testing
          </h2>

          {/* Reconnaissance */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <FaCode className="mr-2 text-indigo-600" /> 1. Reconnaissance
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                Reconnaissance gathers information about the target...
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                <li><strong>Passive Recon:</strong> Use OSINT tools (e.g., <code>whois</code>)...</li>
                <li><strong>Active Recon:</strong> Use Nmap to identify ports...</li>
              </ul>
              <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm">
{`# Passive Recon
whois dvwa.local
nmap -sV -p- dvwa.local`}
              </pre>
            </div>

            {/* Add other sections such as Scanning, Prioritization, etc., here... */}
          </div>
        </div>

        {/* Submission Form */}
        <form onSubmit={handleSubmit} className="bg-white mt-10 border-t border-gray-200 pt-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaRocket className="mr-2 text-indigo-600" /> Submit Your Work
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="githubUrl">
              GitHub Repository URL
            </label>
            <input
              type="url"
              name="githubUrl"
              id="githubUrl"
              required
              value={form.githubUrl}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="https://github.com/username/repo"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload PDF Report
            </label>
            <input
              ref={inputRef}
              type="file"
              accept="application/pdf"
              onChange={handleFileUpload}
              className="w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="flag" className="block text-sm font-medium text-gray-700 mb-1">
              Optional Flag (if applicable)
            </label>
            <input
              type="text"
              name="flag"
              id="flag"
              value={form.flag}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter flag if you captured one"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <FaCheckCircle className="mr-2" /> Submit Assignment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Deet11;
