import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaLaptopCode,
  FaTools,
  FaServer,
  FaDownload,
  FaShieldAlt,
  FaExclamationTriangle,
  FaCog,
  FaBook,
} from "react-icons/fa";

const Det2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Main Section */}
      <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-8 mx-auto max-w-full sm:max-w-4xl lg:max-w-6xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105 p-2 rounded-md"
        >
          <FaArrowLeft className="mr-2 text-lg" />
          Back
        </button>

        {/* Section Heading */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaLaptopCode className="mr-3 text-xl sm:text-2xl" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            Getting Started: Setting Up Your Environment
          </h2>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4">
            Welcome to the Morgan Technical Training Cybersecurity Course! To embark on your journey to becoming a cybersecurity professional, you’ll need a properly configured environment with the right tools and settings. This guide walks you through the essential steps to set up your workspace, install key software, and prepare for hands-on learning. Whether you’re a beginner or an experienced learner, a well-prepared environment is critical for success in mastering cybersecurity concepts like network security, vulnerability assessment, and threat detection.
          </p>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4">
            By the end of this guide, you’ll have a fully functional cybersecurity lab, equipped with industry-standard tools like Wireshark, Kali Linux, and VirtualBox, ready to tackle the course’s practical exercises.
          </p>

          {/* System Requirements */}
          <div className="bg-indigo-600 text-white py-3 px-6 rounded-lg mt-8 flex items-center">
            <FaServer className="mr-3 text-xl sm:text-2xl" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">System Requirements</h3>
          </div>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mt-4 mb-4">
            Before setting up your environment, ensure your system meets the minimum requirements to run cybersecurity tools efficiently. Here’s what you’ll need:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <FaTools className="mt-1 text-indigo-600 text-lg" />
              <strong>Operating System:</strong> Windows 10/11 (64-bit), macOS (Big Sur or later), or a Linux distribution (e.g., Ubuntu 20.04 or later).
            </li>
            <li className="flex items-start gap-2">
              <FaServer className="mt-1 text-indigo-600 text-lg" />
              <strong>Hardware:</strong> Minimum 8GB RAM (16GB recommended), 4-core CPU, 50GB free disk space for virtual machines and tools.
            </li>
            <li className="flex items-start gap-2">
              <FaDownload className="mt-1 text-indigo-600 text-lg" />
              <strong>Internet:</strong> Stable broadband connection for downloading tools and accessing Morgan-LMS resources.
            </li>
            <li className="flex items-start gap-2">
              <FaShieldAlt className="mt-1 text-indigo-600 text-lg" />
              <strong>Permissions:</strong> Administrator/root access to install software and configure system settings.
            </li>
          </ul>

          {/* Setting Up Your Environment */}
          <div className="bg-indigo-600 text-white py-3 px-6 rounded-lg mt-8 flex items-center">
            <FaCog className="mr-3 text-xl sm:text-2xl" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Setting Up Your Environment</h3>
          </div>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mt-4 mb-4">
            Follow these steps to configure your cybersecurity lab environment. This setup ensures you can safely experiment with tools and techniques without risking your primary system.
          </p>
          <ul className="list-decimal pl-6 text-gray-700 text-base md:text-lg space-y-4 mb-6">
            <li className="flex items-start gap-2">
              <FaDownload className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Install a Virtualization Platform:</strong> Download and install <strong>VirtualBox</strong> (free) or <strong>VMware Workstation Player</strong> to run virtual machines. Virtual machines allow you to create isolated environments for testing.
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Visit <a href="https://www.virtualbox.org" className="text-indigo-600 hover:underline">virtualbox.org</a> and follow the installation instructions for your OS.</li>
                  <li>Ensure virtualization (e.g., Intel VT-x or AMD-V) is enabled in your BIOS settings.</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaTools className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Set Up Kali Linux:</strong> Kali Linux is a specialized distribution for cybersecurity professionals, preloaded with tools for network analysis and penetration testing.
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Download the Kali Linux ISO from <a href="https://www.kali.org" className="text-indigo-600 hover:underline">kali.org</a>.</li>
                  <li>Create a new virtual machine in VirtualBox, allocate 4GB RAM and 20GB disk space, and load the Kali ISO.</li>
                  <li>Follow the on-screen prompts to install Kali Linux and set a strong password.</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaCog className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Configure Networking:</strong> Set up a safe network environment for testing.
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Use VirtualBox’s “NAT” or “Host-Only” network mode to isolate your virtual machines from your main network.</li>
                  <li>Install a second virtual machine (e.g., Ubuntu or Windows) to simulate a target system for practice.</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaBook className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Access Morgan-LMS:</strong> Log in to Morgan-LMS to download course-specific resources and scripts.
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Visit Morgan-LMS via the course portal and use your credentials to log in.</li>
                  <li>Download setup scripts or configuration files provided in the “Getting Started” module.</li>
                </ul>
              </div>
            </li>
          </ul>

          {/* Recommended Tools */}
          <div className="bg-indigo-600 text-white py-3 px-6 rounded-lg mt-8 flex items-center">
            <FaTools className="mr-3 text-xl sm:text-2xl" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Recommended Tools</h3>
          </div>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mt-4 mb-4">
            The following tools are essential for the cybersecurity course and will be used throughout the four-week program. Most are pre-installed in Kali Linux, but you may need to install them on other systems.
          </p>
          <ul className="list-disc pl-6 text-gray-700 text-base md:text-lg space-y-4 mb-6">
            <li className="flex items-start gap-2">
              <FaLaptopCode className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Wireshark:</strong> A powerful tool for packet analysis and network troubleshooting.
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Download from <a href="https://www.wireshark.org" className="text-indigo-600 hover:underline">wireshark.org</a> or use the pre-installed version in Kali Linux.</li>
                  <li>Learn to capture and filter network traffic during Week 2’s network basics module.</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaShieldAlt className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Nmap:</strong> A network scanning tool for discovering hosts and services.
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Available in Kali Linux or install via <code>sudo apt install nmap</code> on Linux systems.</li>
                  <li>Used in Week 3 for vulnerability scanning exercises.</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaTools className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Metasploit:</strong> A penetration testing framework for simulating attacks.
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Pre-installed in Kali Linux or install via <code>sudo apt install metasploit-framework</code>.</li>
                  <li>Explore its features during the Week 3 networking lab.</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaDownload className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Burp Suite:</strong> A tool for web application security testing.
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Download the Community Edition from <a href="https://portswigger.net/burp" className="text-indigo-600 hover:underline">portswigger.net</a>.</li>
                  <li>Optional for advanced learners preparing for web security topics.</li>
                </ul>
              </div>
            </li>
          </ul>

          {/* Best Practices */}
          <div className="bg-indigo-600 text-white py-3 px-6 rounded-lg mt-8 flex items-center">
            <FaShieldAlt className="mr-3 text-xl sm:text-2xl" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Best Practices for Your Environment</h3>
          </div>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mt-4 mb-4">
            To ensure a secure and efficient learning experience, follow these best practices when setting up and using your cybersecurity environment:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <FaShieldAlt className="mt-1 text-indigo-600 text-lg" />
              Use virtual machines to isolate testing environments and avoid damaging your host system.
            </li>
            <li className="flex items-start gap-2">
              <FaCog className="mt-1 text-indigo-600 text-lg" />
              Regularly update your tools and operating systems to patch vulnerabilities.
            </li>
            <li className="flex items-start gap-2">
              <FaExclamationTriangle className="mt-1 text-indigo-600 text-lg" />
              Avoid running untrusted scripts or tools outside of isolated environments.
            </li>
            <li className="flex items-start gap-2">
              <FaBook className="mt-1 text-indigo-600 text-lg" />
              Back up your virtual machines and course progress regularly to Morgan-LMS or an external drive.
            </li>
          </ul>

          {/* Troubleshooting */}
          <div className="bg-indigo-600 text-white py-3 px-6 rounded-lg mt-8 flex items-center">
            <FaExclamationTriangle className="mr-3 text-xl sm:text-2xl" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Troubleshooting Common Issues</h3>
          </div>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mt-4 mb-4">
            Encountering issues during setup is normal. Here are solutions to common problems:
          </p>
          <ul className="list-disc pl-6 text-gray-700 text-base md:text-lg space-y-4 mb-6">
            <li className="flex items-start gap-2">
              <FaExclamationTriangle className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>VirtualBox Fails to Start:</strong> Ensure virtualization is enabled in your BIOS and that Hyper-V (Windows) is disabled.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaExclamationTriangle className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Kali Linux Installation Hangs:</strong> Verify the ISO file’s integrity using a checksum and allocate sufficient RAM (at least 4GB).
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaExclamationTriangle className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Wireshark Can’t Capture Packets:</strong> Install Npcap (Windows) or ensure you have root privileges on Linux.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaExclamationTriangle className="mt-1 text-indigo-600 text-lg" />
              <div>
                <strong>Network Issues in VMs:</strong> Switch between NAT, Host-Only, or Bridged modes in VirtualBox settings to resolve connectivity problems.
              </div>
            </li>
          </ul>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            For additional support, contact your instructor via Morgan-LMS or refer to the course’s FAQ section. With your environment set up, you’re ready to dive into Week 1’s introduction and start your cybersecurity journey with confidence!
          </p>
        </div>
      </section>
    </>
  );
};

export default Det2;