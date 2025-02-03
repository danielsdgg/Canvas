import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Day3:React.FC = () => {
    const navigate = useNavigate();
  return (
    <>
    {/* CLI */}
    <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
            {/* Back Button */}
            <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
                <FaArrowLeft className="mr-2" />
                Back
            </button>
        <h2 className="text-3xl sm:text-4xl font-semibold bg-gray-800 text-white py-4 px-6 rounded-t-lg">
            Getting Started with Command Line Interfaces (CLI)
        </h2>
  
  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
    Command Line Interfaces (CLI) are powerful tools that allow developers to interact
    with their operating system using text commands instead of a graphical interface.
    Learning CLI commands will help you navigate your file system, manage projects, and
    work with various development tools efficiently.
  </p>

  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">Why Learn CLI?</h3>
  <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-2">
    <li>Speeds up workflows by eliminating the need for manual navigation.</li>
    <li>Essential for working with version control systems like Git.</li>
    <li>Used for installing and managing packages efficiently.</li>
  </ul>

  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">Basic CLI Commands</h3>
  <p className="text-sm sm:text-base text-gray-700 mb-2">
    Below are some fundamental commands for Windows (Command Prompt/PowerShell) and macOS/Linux (Terminal):
  </p>
  <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-2">
    <li><code className="bg-gray-200 px-2 py-1 rounded">pwd</code> - Print current directory (macOS/Linux).</li>
    <li><code className="bg-gray-200 px-2 py-1 rounded">cd</code> - Change directory.</li>
    <li><code className="bg-gray-200 px-2 py-1 rounded">ls</code> / <code className="bg-gray-200 px-2 py-1 rounded">dir</code> - List files (macOS/Linux: <code>ls</code>, Windows: <code>dir</code>).</li>
    <li><code className="bg-gray-200 px-2 py-1 rounded">mkdir</code> - Create a new folder.</li>
    <li><code className="bg-gray-200 px-2 py-1 rounded">rm</code> / <code className="bg-gray-200 px-2 py-1 rounded">rmdir</code> - Remove files or directories.</li>
  </ul>

  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
    Code-Along: Creating a New Project Folder
  </h3>
  <p className="text-sm sm:text-base text-gray-700 mb-4">
    Follow these steps to create a new project folder using the CLI:
  </p>
  <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-lg overflow-x-auto">
    <pre className="whitespace-pre-wrap break-words text-sm sm:text-base">
      <code>
        # Open your terminal or command prompt
        <br />
        cd Desktop  # Navigate to the Desktop
        <br />
        mkdir MyProject  # Create a new project folder
        <br />
        cd MyProject  # Move into the folder
      </code>
    </pre>
  </div>

  <p className="text-sm sm:text-base text-gray-700 mt-4">
    After running these commands, you will have a new folder named <code>MyProject</code> on your Desktop,
    and you will be inside it, ready to start your project.
  </p>
</section>
    </>
  )
}

export default Day3
