import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaLink, FaEdit, FaCheckCircle, FaRocket } from "react-icons/fa";
import { useAuth } from "../../../context/authContext";

const Date10: React.FC = () => {
    const navigate = useNavigate();
    const { userData, userToken } = useAuth();
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

    // State for submission field
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        assignmentId: 10,
        userId: userData?.userDetails.id ?? "",
        deployedUrl: "",
    });

    // Handle URL input change
    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
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
                alert("Deployment URL submitted successfully!");
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error submitting URL:", error);
            alert("Failed to submit. Please try again later.");
        }
    };

    return (
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
                <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Deployment of React Apps</h1>
            </div>

            <div className="p-4 sm:p-6">
                {/* Introduction */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaEdit className="mr-2 text-indigo-600" />
                        Why is Deployment Important?
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        Deploying a React app makes it accessible to users over the internet. Whether hosting a personal project, business website, or a full-stack application, choosing the right deployment strategy ensures performance, security, and scalability.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                        Deployment bridges the gap between development and production, allowing you to share your work with the world. It involves packaging your app into an optimized form, hosting it on a server, and ensuring it performs well under real-world conditions. Proper deployment also sets the stage for continuous updates and user feedback integration.
                    </p>
                </section>

                {/* Deployment Platforms */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaList className="mr-2 text-indigo-600" />
                        Common Deployment Platforms
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
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

                    {/* Additional Subtopic: Platform Features */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Platform Features Overview
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Each platform offers unique features to enhance deployment:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li><strong>Vercel:</strong> Automatic scaling, domain management, preview deployments.</li>
                        <li><strong>Netlify:</strong> Form handling, serverless functions, custom domains.</li>
                        <li><strong>GitHub Pages:</strong> Free hosting, simple static site deployment.</li>
                        <li><strong>Firebase:</strong> Real-time database integration, analytics.</li>
                        <li><strong>Render:</strong> Full-stack support, Docker integration.</li>
                    </ul>
                </section>

                {/* Steps for Deployment */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaList className="mr-2 text-indigo-600" />
                        Steps to Deploy a React App
                    </h2>
                    <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
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

                    {/* Additional Subtopic: Optimizing the Build */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Optimizing the Build
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Before deployment, optimize your build for performance:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li><strong>Minification:</strong> Ensure assets are minified (handled by default in <code>npm run build</code>).</li>
                        <li><strong>Environment Variables:</strong> Use `.env` files for API keys or configurations.</li>
                        <li><strong>Code Splitting:</strong> Implement lazy loading with <code>React.lazy</code>.</li>
                    </ul>
                    <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto mt-2">
                        {`// Example: Lazy Loading
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </React.Suspense>
    );
}`}
                    </pre>
                </section>

                {/* Platform-Specific Deployment Guides */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Platform-Specific Deployment Guides
                    </h2>
                    <div className="flex flex-col items-center">
                        <select
                            onChange={(e) => setSelectedPlatform(e.target.value)}
                            className="p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="">Select a platform</option>
                            <option value="vercel">Vercel</option>
                            <option value="netlify">Netlify</option>
                            <option value="github">GitHub Pages</option>
                            <option value="firebase">Firebase</option>
                            <option value="render">Render</option>
                        </select>

                        {selectedPlatform && (
                            <div className="mt-4 p-3 bg-indigo-100 text-indigo-800 rounded-lg shadow">
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

                    {/* Additional Subtopic: Custom Domains */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Adding Custom Domains
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Most platforms support custom domains for a professional touch:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li><strong>Vercel:</strong> Add via dashboard, configure DNS.</li>
                        <li><strong>Netlify:</strong> Link domain in settings, update DNS records.</li>
                        <li><strong>Firebase:</strong> Use <code>firebase.json</code> for domain setup.</li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-2">
                        Example DNS setup: Point an A record to the platform’s IP and a CNAME for subdomains.
                    </p>
                </section>

                {/* Practical Exercise */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaRocket className="mr-2 text-indigo-600" />
                        Practical Exercise: Deploy a React App
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                        Follow these steps to deploy a sample React app:
                    </p>
                    <pre className="bg-gray-800 text-white text-sm sm:text-base p-4 rounded-lg shadow-md overflow-x-auto">
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
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3">
                        💡 <strong>Task:</strong>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2 mb-4">
                        <li>Deploy your React app using <strong>Vercel</strong> or <strong>Netlify</strong>.</li>
                        <li>Share the live URL of your deployed site by submitting it below.</li>
                    </ul>

                    {/* Submission Field */}
                    <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FaLink className="mr-2 text-indigo-600" />
                            Submit Your Deployed URL
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            After deploying your app, paste the live URL here to share your work:
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="deployedUrl"
                                value={form.deployedUrl}
                                onChange={handleUrlChange}
                                placeholder="e.g., https://my-app.vercel.app"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                            />
                            <button
                                type="submit"
                                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105"
                            >
                                Submit URL
                            </button>
                        </form>
                        {submitted && (
                            <p className="mt-4 text-green-600 font-medium flex items-center">
                                <FaCheckCircle className="mr-2" />
                                Your deployed URL has been submitted successfully!
                            </p>
                        )}
                    </div>

                    {/* Additional Subtopic: Troubleshooting Deployment */}
                    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2 flex items-center">
                        <FaCode className="mr-2 text-indigo-600" />
                        Troubleshooting Deployment Issues
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        Common issues and fixes during deployment:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                        <li><strong>404 Errors:</strong> Ensure correct routing setup (e.g., <code>_redirects</code> for Netlify).</li>
                        <li><strong>Build Failures:</strong> Check dependency versions and build scripts in <code>package.json</code>.</li>
                        <li><strong>CORS Issues:</strong> Verify API endpoints are accessible from the deployed domain.</li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                        <FaCheckCircle className="mr-2 text-indigo-600" />
                        Conclusion
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        Deploying a React app is an essential step in making your project accessible to users. With platforms like <strong>Vercel, Netlify, GitHub Pages, Firebase, and Render</strong>, deployment is easier than ever. Experiment with different hosting solutions and optimize your app for performance and scalability!
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Date10;