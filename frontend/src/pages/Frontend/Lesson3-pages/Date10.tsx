import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Date10: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  return (
    <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <FaArrowLeft className="mr-2" />
        Back
      </button>

      {/* Title */}
      <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
        Deployment of React Apps
      </h1>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Why is Deployment Important?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Deploying a React app makes it accessible to users over the internet. 
          Whether hosting a personal project, business website, or a full-stack application, 
          choosing the right deployment strategy ensures performance, security, and scalability.
        </p>
      </section>

      {/* Deployment Platforms */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Common Deployment Platforms
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            <span className="font-semibold">Vercel:</span> Best for seamless deployment with Git integration.
          </li>
          <li>
            <span className="font-semibold">Netlify:</span> Great for frontend apps with easy CI/CD.
          </li>
          <li>
            <span className="font-semibold">GitHub Pages:</span> Free option for hosting static React sites.
          </li>
          <li>
            <span className="font-semibold">Firebase Hosting:</span> Good for real-time apps with Firestore.
          </li>
          <li>
            <span className="font-semibold">Render:</span> Flexible for frontend and backend deployment.
          </li>
        </ul>
      </section>

      {/* Steps for Deployment */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Steps to Deploy a React App
        </h2>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed">
          <li>
            <span className="font-semibold">Build the App:</span> Run <code>npm run build</code> to create an optimized production build.
          </li>
          <li>
            <span className="font-semibold">Choose a Hosting Platform:</span> Select from Vercel, Netlify, Firebase, etc.
          </li>
          <li>
            <span className="font-semibold">Upload or Connect to Git:</span> Push your project to GitHub, GitLab, or Bitbucket.
          </li>
          <li>
            <span className="font-semibold">Deploy:</span> Use the platform's CLI or web interface to deploy.
          </li>
          <li>
            <span className="font-semibold">Test the Deployment:</span> Verify that your site works as expected.
          </li>
        </ol>
      </section>

      {/* Deployment Guides */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Platform-Specific Deployment Guides
        </h2>
        <div className="flex flex-col items-center">
          <select
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="p-2 border rounded-lg text-gray-700"
          >
            <option value="">Select a platform</option>
            <option value="vercel">Vercel</option>
            <option value="netlify">Netlify</option>
            <option value="github">GitHub Pages</option>
            <option value="firebase">Firebase</option>
            <option value="render">Render</option>
          </select>

          {selectedPlatform && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg shadow">
              {selectedPlatform === "vercel" && (
                <p>
                  🚀 Deploy on Vercel: Install Vercel CLI, run <code>vercel</code>, and follow the steps.
                </p>
              )}
              {selectedPlatform === "netlify" && (
                <p>
                  🌍 Deploy on Netlify: Use Netlify CLI or drag & drop your build folder on netlify.com.
                </p>
              )}
              {selectedPlatform === "github" && (
                <p>
                  🔥 Deploy on GitHub Pages: Run <code>npm install gh-pages</code> and set up <code>homepage</code> in package.json.
                </p>
              )}
              {selectedPlatform === "firebase" && (
                <p>
                  ⚡ Deploy on Firebase: Use <code>firebase init</code> and <code>firebase deploy</code>.
                </p>
              )}
              {selectedPlatform === "render" && (
                <p>
                  🌐 Deploy on Render: Push your repo to GitHub and link it to render.com for automatic builds.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Practical Exercise */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Practical Exercise: Deploy a React App
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Follow these steps to deploy a sample React app:
        </p>
        <pre className="bg-gray-800 text-white text-sm p-4 rounded-lg overflow-auto">
          <code>
            {`# 1. Create a new React app
npx create-react-app my-app --template typescript

# 2. Navigate into the project folder
cd my-app

# 3. Build the project for production
npm run build

# 4. Deploy using Vercel (example)
npm install -g vercel
vercel`}
          </code>
        </pre>
        <p className="text-gray-700 leading-relaxed mt-3">
          💡 **Task:**  
          - Deploy your React app using **Vercel** or **Netlify**.  
          - Share the live URL of your deployed site.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">
          Deploying a React app is an essential step in making your project accessible to users. 
          With platforms like **Vercel, Netlify, GitHub Pages, Firebase, and Render**, 
          deployment is easier than ever. Experiment with different hosting solutions and optimize your 
          app for performance and scalability!
        </p>
      </section>
    </section>
  );
};

export default Date10;
