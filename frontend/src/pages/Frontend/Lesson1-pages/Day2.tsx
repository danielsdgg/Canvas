import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Day2 = () => {
    const navigate = useNavigate();
  return (
    <>
     <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* Back Button */}
        <button onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaArrowLeft className="mr-2" />
            Back
        </button>
      <h2 className="text-3xl font-semibold bg-gray-800 text-white py-4 px-6 rounded-t-lg">
        Getting Started
      </h2>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        Setting up your development environment is crucial to ensure smooth workflow and productivity.
        Follow these steps to install the necessary tools for web development.
      </p>
      
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">1. Installing Visual Studio Code</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Visual Studio Code (VS Code) is a powerful code editor widely used for frontend development.
        Follow the instructions below to install it on your operating system:
      </p>
      
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>
          <strong>Windows:</strong> Download the installer from
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline ml-1"
          >
            code.visualstudio.com
          </a>
          , run the executable file, and follow the installation instructions.
        </li>
        <li>
          <strong>MacOS:</strong> Download the macOS version from
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline ml-1"
          >
            code.visualstudio.com
          </a>
          , open the downloaded `.zip` file, and move Visual Studio Code to the Applications folder.
        </li>
      </ul>
      
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">2. Essential Tools for Web Development</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        To get started with frontend development, you need the following tools:
      </p>
      
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>
          <strong>Node.js:</strong> Required for running JavaScript outside the browser. Download it from
          <a
            href="https://nodejs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline ml-1"
          >
            nodejs.org
          </a>
          .
        </li>
        <li>
          <strong>Git:</strong> A version control system used for managing code efficiently. Install it from
          <a
            href="https://git-scm.com/downloads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline ml-1"
          >
            git-scm.com
          </a>
          .
        </li>
        <li>
          <strong>Google Chrome:</strong> A powerful browser with developer tools. Download it from
          <a
            href="https://www.google.com/chrome/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline ml-1"
          >
            google.com/chrome
          </a>
          .
        </li>
      </ul>
      
      {/* <h3 className="text-2xl font-semibold text-gray-800 mb-3">3. Setting Up Tailwind CSS</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tailwind CSS is a utility-first CSS framework that helps you build modern designs quickly. Follow these steps to install it:
      </p>
      
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>
          Install Tailwind via npm:
          <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded ml-1">npm install -D tailwindcss</code>
        </li>
        <li>
          Generate the Tailwind configuration file:
          <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded ml-1">npx tailwindcss init</code>
        </li>
        <li>
          Configure Tailwind to scan your project files in <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">tailwind.config.js</code>.
        </li>
      </ul> */}
      
      <p className="text-gray-700 leading-relaxed">
        Once these tools are installed and configured, you are ready to start your journey in web development with HTML & CSS!
      </p>

       {/* git */}
       <div className="bg-white shadow-lg rounded-lg p-6 mb-4">

{/* Overview Section */}
<div className="mb-10">
  <h2 className="text-3xl sm:text-4xl font-semibold bg-gray-800 text-white py-4 px-6 rounded-t-lg">
    What is Git?
  </h2>
  <p className="text-sm sm:text-base text-gray-700 leading-7">
    Git is a distributed version control system that helps developers track changes in their codebase, collaborate with others, and manage project history effectively. Unlike centralized systems, Git allows every developer to have a complete copy of the repository, enabling offline access and seamless collaboration.
  </p>
  <p className="mt-4 text-sm sm:text-base text-gray-700 leading-7">
    Git is essential for modern software development, allowing teams to work together efficiently while maintaining a robust history of changes.
  </p>
</div>


{/* Setting Up Git */}
<div className="mb-3">
  <h2 className="text-2xl font-semibold mb-4">Getting Started with Git</h2>
  <p className="text-gray-700 leading-7">
    To start using Git, follow these steps:
  </p>
  <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-700">
    <li>Download and install Git from the <a href="https://git-scm.com/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">official Git website</a>.</li>
    <li>Configure Git with your name and email:
      <pre className="bg-gray-100 p-4 rounded-md mt-2 text-sm">
        <code>
          git config --global user.name "Your Name"{"\n"}
          git config --global user.email "youremail@example.com"
        </code>
      </pre>
    </li>
    <li>Verify the installation:
      <pre className="bg-gray-100 p-4 rounded-md mt-2 text-sm">
        <code>
          git --version
        </code>
      </pre>
    </li>
  </ol>
</div>

{/* Key Commands */}
<div className="mb-10">
  <h2 className="text-2xl font-semibold mb-4">Essential Git Commands</h2>
  <p className="text-gray-700 leading-7">
    Here are the basic Git commands you'll use frequently:
  </p>
  <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
    <li><strong>Initialize a Repository:</strong> <code>git init</code></li>
    <li><strong>Clone a Repository:</strong> <code>git clone &lt;repository_url&gt;</code></li>
    <li><strong>Check Status:</strong> <code>git status</code></li>
    <li><strong>Stage Changes:</strong> <code>git add &lt;file_name&gt;</code> or <code>git add .</code> to stage all changes</li>
    <li><strong>Commit Changes:</strong> <code>git commit -m "Commit message"</code></li>
    <li><strong>View Commit History:</strong> <code>git log</code></li>
    <li><strong>Create a Branch:</strong> <code>git branch &lt;branch_name&gt;</code></li>
    <li><strong>Switch Branch:</strong> <code>git checkout &lt;branch_name&gt;</code></li>
    <li><strong>Merge Branches:</strong> <code>git merge &lt;branch_name&gt;</code></li>
    <li><strong>Push Changes:</strong> <code>git push origin &lt;branch_name&gt;</code></li>
    <li><strong>Pull Changes:</strong> <code>git pull</code></li>
  </ul>
</div>

{/* Emojis in Commits */}
<div className="mb-10">
  <h2 className="text-2xl font-semibold mb-4">Using Emojis in Commit Messages</h2>
  <p className="text-gray-700 leading-7">
    Emojis make your commit messages more expressive and easier to understand. Here's a list of commonly used emojis:
  </p>
  <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
    <li><code>✨</code> <strong>:sparkles:</strong> - Introducing new features</li>
    <li><code>🐛</code> <strong>:bug:</strong> - Fixing a bug</li>
    <li><code>📝</code> <strong>:memo:</strong> - Updating documentation</li>
    <li><code>🔥</code> <strong>:fire:</strong> - Removing code/files</li>
    <li><code>🚀</code> <strong>:rocket:</strong> - Deploying stuff</li>
    <li><code>🎨</code> <strong>:art:</strong> - Improving structure/format of the code</li>
  </ul>
</div>

{/* Collaboration */}
<div className="mb-10">
  <h2 className="text-2xl font-semibold mb-4">Collaborating with Git</h2>
  <p className="text-gray-700 leading-7">
    Collaboration is one of Git's strengths. To work with others:
  </p>
  <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-700">
    <li>Fork the repository to your GitHub account.</li>
    <li>Clone the forked repository to your local machine:
      <pre className="bg-gray-100 p-4 rounded-md mt-2 text-sm">
        <code>
          git clone &lt;repository_url&gt;
        </code>
      </pre>
    </li>
    <li>Create a new branch for your changes:
      <pre className="bg-gray-100 p-4 rounded-md mt-2 text-sm">
        <code>
          git checkout -b feature/branch-name
        </code>
      </pre>
    </li>
    <li>Make changes and commit them.</li>
    <li>Push your branch and create a pull request.</li>
  </ol>
</div>

{/* External Resources */}
<div className="mb-10">
  <h2 className="text-2xl font-semibold mb-4">Learn More About Git</h2>
  <ul className="list-disc list-inside mt-4 space-y-2 text-blue-600">
    <li><a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">Official Git Documentation</a></li>
    <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
    <li><a href="https://learngitbranching.js.org/" target="_blank" rel="noopener noreferrer">Learn Git Branching (Interactive Tutorial)</a></li>
    <li><a href="https://www.atlassian.com/git/tutorials" target="_blank" rel="noopener noreferrer">Atlassian Git Tutorials</a></li>
  </ul>
</div>
</div>
    </section>
    </>
  )
}

export default Day2
