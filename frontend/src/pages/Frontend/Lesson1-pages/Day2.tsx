import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaLaptopCode, FaTools, FaCode, FaGitAlt, FaUsers, FaBookOpen, FaTerminal } from "react-icons/fa";

const Day2 = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-8 mx-auto max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-teal-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        {/* Section Heading */}
        <div className="bg-teal-600 text-white py-4 px-6 rounded-t-lg flex items-center">
          <FaLaptopCode className="mr-3 text-2xl" />
          <h2 className="text-2xl sm:text-3xl font-semibold">Getting Started</h2>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4">
            Setting up your development environment is the first step toward becoming a productive frontend developer. A well-configured setup ensures a smooth workflow, efficient collaboration, and the ability to build modern web applications. In this lesson, you’ll install essential tools, configure your code editor, and learn the basics of version control with Git.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            This guide is designed to get you ready for the Morgan Technical Training frontend roadmap by equipping you with the foundational tools and practices used by professionals in the industry.
          </p>

          {/* Essential Tools for Web Development */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaTools className="mr-2 text-teal-600" />
              1. Essential Tools for Web Development
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              To begin frontend development, you’ll need the following core tools installed on your system:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3 mb-6">
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <div>
                  <strong>Node.js:</strong> A runtime environment for executing JavaScript outside the browser, essential for tools like npm (Node Package Manager). Download the LTS version from
                  <a
                    href="https://nodejs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 underline hover:text-teal-800 ml-1"
                  >
                    nodejs.org
                  </a>
                  and verify installation with <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">node -v</code>.
                </div>
              </li>
              <li className="flex items-start">
                <FaGitAlt className="mr-2 mt-1 text-teal-600" />
                <div>
                  <strong>Git:</strong> A distributed version control system for tracking code changes and collaborating with teams. Install it from
                  <a
                    href="https://git-scm.com/downloads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 underline hover:text-teal-800 ml-1"
                  >
                    git-scm.com
                  </a>
                  and check with <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">git --version</code>.
                </div>
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-teal-600" />
                <div>
                  <strong>Google Chrome:</strong> A modern browser with robust developer tools for testing and debugging. Download it from
                  <a
                    href="https://www.google.com/chrome/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 underline hover:text-teal-800 ml-1"
                  >
                    google.com/chrome
                  </a>
                  .
                </div>
              </li>
            </ul>
          </div>

          {/* Installing Visual Studio Code */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaLaptopCode className="mr-2 text-teal-600" />
              2. Installing Visual Studio Code
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Visual Studio Code (VS Code) is a lightweight, extensible code editor favored by developers for its support for JavaScript, HTML, CSS, and more. Here’s how to install it:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3 mb-6">
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-teal-600" />
                <div>
                  <strong>Windows:</strong> Download the installer from
                  <a
                    href="https://code.visualstudio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 underline hover:text-teal-800 ml-1"
                  >
                    code.visualstudio.com
                  </a>
                  , run the `.exe` file, and follow the prompts. Add VS Code to your PATH during setup for easy terminal access.
                </div>
              </li>
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-teal-600" />
                <div>
                  <strong>macOS:</strong> Download the macOS version from
                  <a
                    href="https://code.visualstudio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 underline hover:text-teal-800 ml-1"
                  >
                    code.visualstudio.com
                  </a>
                  , extract the `.zip` file, and drag Visual Studio Code to your Applications folder.
                </div>
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              After installation, open VS Code and install recommended extensions like “Prettier” (for code formatting), “ESLint” (for JavaScript linting), and “Live Server” (for live previewing HTML files).
            </p>
          </div>

          {/* What is Git? */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaGitAlt className="mr-2 text-teal-600" />
              3. Understanding Git
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Git is a distributed version control system that tracks changes in your codebase, enabling collaboration, version history, and rollback capabilities. It’s a cornerstone of modern development workflows, especially in frontend projects where multiple developers contribute.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Key benefits of Git include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2 mb-6">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-teal-600" />
                Offline work with a local repository copy.
              </li>
              <li className="flex items-start">
                <FaUsers className="mr-2 mt-1 text-teal-600" />
                Seamless team collaboration via branching and merging.
              </li>
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-teal-600" />
                Detailed history tracking for auditing and debugging.
              </li>
            </ul>
          </div>

          {/* Setting Up Git */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaTools className="mr-2 text-teal-600" />
              4. Setting Up Git
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              To start using Git, follow these steps to install and configure it:
            </p>
            <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base space-y-3 mb-6">
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-teal-600" />
                <div>
                  Download and install Git from
                  <a
                    href="https://git-scm.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 underline hover:text-teal-800 ml-1"
                  >
                    git-scm.com
                  </a>
                  .
                </div>
              </li>
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <div>
                  Configure Git with your identity:
                  <pre className="bg-gray-100 p-3 rounded-md mt-2 text-sm overflow-x-auto">
                    <code>
                      git config --global user.name "Your Name"{"\n"}
                      git config --global user.email "youremail@example.com"
                    </code>
                  </pre>
                </div>
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-teal-600" />
                <div>
                  Verify installation:
                  <pre className="bg-gray-100 p-3 rounded-md mt-2 text-sm overflow-x-auto">
                    <code>git --version</code>
                  </pre>
                </div>
              </li>
            </ol>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Optionally, set up a Git GUI like GitKraken or SourceTree for a visual interface, though the command line is recommended for learning.
            </p>
          </div>

          {/* Essential Git Commands */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-teal-600" />
              5. Essential Git Commands
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Here are the fundamental Git commands you’ll use as a frontend developer:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3 mb-6">
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <strong>Initialize a Repository:</strong> <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">git init</code>
              </li>
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <strong>Clone a Repository:</strong> <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">git clone &lt;repository_url&gt;</code>
              </li>
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <strong>Check Status:</strong> <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">git status</code>
              </li>
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <strong>Stage Changes:</strong> <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">git add &lt;file_name&gt;</code> or <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">git add .</code>
              </li>
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <strong>Commit Changes:</strong> <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">git commit -m "Commit message"</code>
              </li>
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <strong>Push Changes:</strong> <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">git push origin &lt;branch_name&gt;</code>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              With these tools—VS Code, Node.js, Git, and Google Chrome—installed and configured, you’re ready to dive into frontend development with HTML, CSS, and Tailwind CSS. In upcoming lessons, you’ll use this setup to create projects, manage code with Git, and collaborate effectively as part of the Morgan Technical Training community.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Day2;