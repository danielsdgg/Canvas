import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaTerminal, FaRocket, FaCode, FaFolderPlus, FaLaptopCode, FaGitAlt, FaTools } from "react-icons/fa";

const Day3: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* CLI Section */}
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
          <FaTerminal className="mr-3 text-2xl" />
          <h2 className="text-2xl sm:text-3xl font-semibold">Getting Started with Command Line Interfaces (CLI)</h2>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4">
            Command Line Interfaces (CLI) are text-based tools that let you interact directly with your operating system and development environment. Unlike graphical interfaces, CLIs rely on typed commands, offering speed, precision, and control—key skills for any frontend developer at Morgan Technical Training.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Mastering the CLI is foundational for managing files, installing tools, and working with version control systems like Git—all critical for your frontend development journey. This lesson will introduce you to CLI basics, practical commands, and how they fit into your workflow.
          </p>

          {/* Why Learn CLI? */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaRocket className="mr-2 text-teal-600" />
              1. Why Learn CLI?
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              The CLI might seem intimidating at first, but it’s a game-changer for developers. Here’s why it’s worth learning:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-teal-600" />
                <strong>Boosts Efficiency:</strong> Execute tasks faster than clicking through menus—e.g., creating folders or installing packages in seconds.
              </li>
              <li className="flex items-start">
                <FaGitAlt className="mr-2 mt-1 text-teal-600" />
                <strong>Essential for Git:</strong> Manage version control (e.g., committing, pushing) directly from the terminal.
              </li>
              <li className="flex items-start">
                <FaTools className="mr-2 mt-1 text-teal-600" />
                <strong>Tool Integration:</strong> Run development tools like Node.js, npm, and Tailwind CSS without leaving your workflow.
              </li>
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <strong>Automation:</strong> Script repetitive tasks (e.g., file cleanup, project setup) to save time.
              </li>
            </ul>
          </div>

          {/* Accessing the CLI */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaLaptopCode className="mr-2 text-teal-600" />
              2. Accessing the CLI
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Depending on your operating system, here’s how to open your CLI:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <strong>Windows:</strong> Use Command Prompt (search "cmd" in Start) or PowerShell (right-click Start &gt; "Windows PowerShell"). For a better experience, install Windows Terminal from the Microsoft Store.
              </li>
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <strong>macOS:</strong> Open Terminal from Applications &gt; Utilities, or search "Terminal" via Spotlight (Cmd + Space).
              </li>
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <strong>Linux:</strong> Open Terminal from your applications menu (e.g., Ctrl + Alt + T on Ubuntu).
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Tip: In VS Code, use the integrated terminal (View &gt; Terminal) to run CLI commands alongside your code editor.
            </p>
          </div>

          {/* Basic CLI Commands */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-teal-600" />
              3. Basic CLI Commands
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Below are essential commands for navigating and managing files. Commands differ slightly between Windows (Command Prompt/PowerShell) and macOS/Linux (Terminal):
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <strong>Print Current Directory:</strong> <code className="bg-gray-200 px-2 py-1 rounded">/pwd</code> (macOS/Linux) or <code className="bg-gray-200 px-2 py-1 rounded">cd</code> (Windows, displays path in prompt).
              </li>
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <strong>Change Directory:</strong> <code className="bg-gray-200 px-2 py-1 rounded">cd &lt;path&gt;</code> (e.g., <code className="bg-gray-200 px-2 py-1 rounded">cd Documents</code>)—works on all systems.
              </li>
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <strong>List Files:</strong> <code className="bg-gray-200 px-2 py-1 rounded">ls</code> (macOS/Linux) or <code className="bg-gray-200 px-2 py-1 rounded">dir</code> (Windows).
              </li>
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <strong>Create Folder:</strong> <code className="bg-gray-200 px-2 py-1 rounded">mkdir &lt;name&gt;</code> (e.g., <code className="bg-gray-200 px-2 py-1 rounded">mkdir project</code>)—works on all systems.
              </li>
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <strong>Remove Files/Directories:</strong> <code className="bg-gray-200 px-2 py-1 rounded">rm -r &lt;name&gt;</code> (macOS/Linux) or <code className="bg-gray-200 px-2 py-1 rounded">rmdir &lt;name&gt;</code> (Windows, for empty directories).
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Tip: Use <code className="bg-gray-200 px-2 py-1 rounded">cd ..</code> to move up one directory level, and <code className="bg-gray-200 px-2 py-1 rounded">cd</code> alone (Windows) or <code className="bg-gray-200 px-2 py-1 rounded">cd ~</code> (macOS/Linux) to return to your home directory.
            </p>
          </div>

          {/* Code-Along: Creating a New Project Folder */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaFolderPlus className="mr-2 text-teal-600" />
              4. Code-Along: Creating a New Project Folder
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Let’s practice by creating a new project folder using the CLI. Follow these steps:
            </p>
            <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-lg overflow-x-auto">
              <pre className="whitespace-pre-wrap break-words text-sm sm:text-base">
                <code>
                  # Open your terminal or command prompt
                  {'\n'}
                  cd Desktop  # Navigate to the Desktop
                  {'\n'}
                  mkdir MyProject  # Create a new project folder
                  {'\n'}
                  cd MyProject  # Move into the folder
                  {'\n'}
                  echo "Hello, World!" &gt; index.html  # Create a simple HTML file (macOS/Linux)
                  {'\n'}
                  # On Windows, use: echo ECHO is on. &gt; index.html (minimal example)
                </code>
              </pre>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              After running these commands, you’ll have a folder named <code>MyProject</code> on your Desktop containing an <code>index.html</code> file. Open it in VS Code with <code className="bg-gray-200 px-2 py-1 rounded">code .</code> (if VS Code is in your PATH) to start editing.
            </p>
          </div>

          {/* Practical Tips for Frontend Developers */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaLaptopCode className="mr-2 text-teal-600" />
              5. Practical Tips for Frontend Developers
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              As you progress in Morgan Technical Training’s frontend roadmap, here’s how CLI skills will support you:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-teal-600" />
                <strong>Project Setup:</strong> Use <code className="bg-gray-200 px-2 py-1 rounded">npm init</code> and <code className="bg-gray-200 px-2 py-1 rounded">npm install</code> to set up Node.js projects.
              </li>
              <li className="flex items-start">
                <FaGitAlt className="mr-2 mt-1 text-teal-600" />
                <strong>Version Control:</strong> Combine CLI with Git commands (e.g., <code>git add .</code>) to manage your codebase.
              </li>
              <li className="flex items-start">
                <FaTerminal className="mr-2 mt-1 text-teal-600" />
                <strong>Tailwind CSS:</strong> Later, you’ll use CLI to initialize Tailwind with <code className="bg-gray-200 px-2 py-1 rounded">npx tailwindcss init</code>.
              </li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              Practice these commands regularly—they’ll become second nature and empower you to work faster and smarter as you build your frontend skills.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Day3;