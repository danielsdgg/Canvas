import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaList, FaLink, FaEdit, FaBars, FaTimes } from "react-icons/fa";

const Date6: React.FC = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                    <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">React Router & Navigation</h1>
                </div>

                <div className="p-4 sm:p-6">
                    {/* Detailed Explanation Section */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaEdit className="mr-2 text-indigo-600" />
                            What is React Router?
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            React Router is a powerful routing library for React applications that enables navigation between different views or pages, and it keeps the UI in sync with the URL. It allows you to define URL paths and map them to specific React components, enabling users to interact with your application via the URL.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            With React Router, your application behaves like a Single Page Application (SPA), where the page doesn’t reload on navigation. Instead, only the content that changes (the components) is updated dynamically, improving performance and providing a smoother user experience.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            React Router leverages the browser's History API to manage navigation without full page refreshes, making it ideal for modern web apps. It’s widely used in production applications by companies like Facebook, Netflix, and Airbnb, showcasing its reliability and scalability.
                        </p>
                    </section>

                    {/* Core Concepts */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaList className="mr-2 text-indigo-600" />
                            Core Concepts of React Router
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Some important concepts in React Router that you'll work with are:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4 space-y-2">
                            <li>
                                <strong>Routes:</strong> Define which component should render based on the URL path.
                            </li>
                            <li>
                                <strong>Links:</strong> Components that allow navigation by changing the URL, without reloading the page.
                            </li>
                            <li>
                                <strong>useNavigate:</strong> A hook that allows you to programmatically navigate to different routes in your app.
                            </li>
                            <li>
                                <strong>useParams:</strong> A hook to access the parameters of a route (useful for dynamic routes).
                            </li>
                            <li>
                                <strong>useLocation:</strong> A hook to access the current location object, which includes the URL and state.
                            </li>
                        </ul>

                        {/* Additional Subtopic: Router Components */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Router Components
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            React Router provides several router components to suit different environments:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mb-4 space-y-2">
                            <li>
                                <strong>BrowserRouter:</strong> Uses the HTML5 History API for clean URLs (e.g., `/about`).
                            </li>
                            <li>
                                <strong>HashRouter:</strong> Uses the URL hash for routing (e.g., `#/about`), useful for static sites.
                            </li>
                            <li>
                                <strong>MemoryRouter:</strong> Keeps routing state in memory, ideal for testing or non-browser environments.
                            </li>
                        </ul>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}`}
                        </pre>
                    </section>

                    {/* Code Along Example */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Code Along Example: Basic Routing
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Let’s start by setting up a new React app and also setting up basic routing in a React application using React Router. First, install React Router DOM using the command:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`npm install react-router-dom`}
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Now, create two files namely: <b>Home & About</b> in your src folder, style them neatly and add some features and define routes to navigate between them. Here’s an example:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;`}
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base mb-2 leading-relaxed">
                            Now you've got it..! You should be able to navigate to different pages, i.e., home and about page.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            You can also use <code>useNavigate</code> to navigate to a specific route, for example:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`const navigate = useNavigate();

// Navigate to a new route programmatically
navigate('/about');`}
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            You can also pass additional state and query parameters while navigating, for example:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`navigate('/about', { state: { from: 'home' } });`}
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            This way, the navigation is flexible, and you can pass context or data that may be required for the target route.
                        </p>

                        {/* Additional Subtopic: Nested Routes */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Nested Routes
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            React Router supports nested routes, allowing you to render child components within a parent route. This is useful for layouts with shared UI (e.g., a sidebar).
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`import { Routes, Route, Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <h1>Dashboard</h1>
    <Outlet /> {/* Renders child routes */}
  </div>
);

const App = () => (
  <Routes>
    <Route path="/dashboard" element={<Layout />}>
      <Route path="tasks" element={<Tasks />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  </Routes>
);`}
                        </pre>
                    </section>

                    {/* Handling Dynamic Routes */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Handling Dynamic Routes
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Dynamic routes in React Router allow you to create paths that include variables or parameters. For example, consider a blog application where each post has a unique ID. You can define a route like this:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`<Route path="/post/:id" element={<Post />} />`}
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            In the <code>Post</code> component, you can access the post ID using the <code>useParams</code> hook:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`import { useParams } from 'react-router-dom';

function Post() {
    const { id } = useParams();
    return <h2>Post ID: {id}</h2>;
}`}
                        </pre>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            This allows you to create routes for dynamic content that changes based on the URL.
                        </p>

                        {/* Additional Subtopic: Route Parameters and Query Strings */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Route Parameters and Query Strings
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Beyond basic parameters, you can use the <code>useLocation</code> hook to access query strings:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`import { useLocation } from 'react-router-dom';

function Search() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');
    return <h2>Search Query: {query}</h2>;
}

// Route: /search?q=react`}
                        </pre>
                    </section>

                    {/* Navigation Bar */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Navigation Bar
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Test yourself..! Try creating a navigation bar like the one shown below. Through creating this Navbar you will improve your understanding on React routers and navigations effectively.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Try minimizing the screen size on the navigation bar for a more challenging exercise. See how the hamburger menu appears? Try creating your own responsive version.
                        </p>

                        <header className="bg-indigo-600 text-white p-4 shadow-md rounded-md">
                            {/* Navbar Content */}
                            <div className="flex items-center justify-between">
                                {/* Logo */}
                                <div className="text-xl font-bold">
                                    <Link to="/">MyWebsite</Link>
                                </div>

                                {/* Hamburger Menu Icon */}
                                <button className="lg:hidden" onClick={toggleMenu}>
                                    {isOpen ? (
                                        <FaTimes className="text-2xl" />
                                    ) : (
                                        <FaBars className="text-2xl" />
                                    )}
                                </button>

                                {/* Navbar Links (for Desktop) */}
                                <nav className="hidden lg:flex space-x-6">
                                    <Link to="/fdl3day6" className="hover:text-indigo-300 transition-all duration-300">
                                        Home
                                    </Link>
                                    <Link to="/fdl3day6" className="hover:text-indigo-300 transition-all duration-300">
                                        About
                                    </Link>
                                    <Link to="/fdl3day6" className="hover:text-indigo-300 transition-all duration-300">
                                        Services
                                    </Link>
                                    <Link to="/fdl3day6" className="hover:text-indigo-300 transition-all duration-300">
                                        Contact
                                    </Link>
                                </nav>
                            </div>

                            {/* Mobile Menu (shown when isOpen is true) */}
                            <div className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-indigo-500 mt-4 p-4 rounded-md`}>
                                <Link
                                    to="/fdl3day6"
                                    className="block text-white mb-4 hover:text-indigo-300 transition-all duration-300"
                                    onClick={toggleMenu}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/fdl3day6"
                                    className="block text-white mb-4 hover:text-indigo-300 transition-all duration-300"
                                    onClick={toggleMenu}
                                >
                                    About
                                </Link>
                                <Link
                                    to="/fdl3day6"
                                    className="block text-white mb-4 hover:text-indigo-300 transition-all duration-300"
                                    onClick={toggleMenu}
                                >
                                    Services
                                </Link>
                                <Link
                                    to="/fdl3day6"
                                    className="block text-white mb-4 hover:text-indigo-300 transition-all duration-300"
                                    onClick={toggleMenu}
                                >
                                    Contact
                                </Link>
                            </div>
                        </header>

                        {/* Additional Subtopic: Protected Routes */}
                        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2 flex items-center">
                            <FaCode className="mr-2 text-indigo-600" />
                            Protected Routes
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            Protected routes restrict access to certain pages based on conditions (e.g., user authentication). Here’s an example:
                        </p>
                        <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md mb-4 overflow-x-auto">
                            {`import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => (
  isAuthenticated ? element : <Navigate to="/login" replace />
);

const App = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} isAuthenticated={true} />} />
  </Routes>
);`}
                        </pre>
                    </section>

                    {/* Resources */}
                    <section className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <FaLink className="mr-2 text-indigo-600" />
                            Resources for Further Study
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                            To deepen your understanding of React Router, here are some valuable resources:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
                            <li>
                                <a
                                    href="https://reactrouter.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    Official React Router Documentation
                                </a> – The most comprehensive resource for learning React Router.
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/watch?v=Law7wfdg_ls"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    YouTube Tutorial: React Router Explained
                                </a> – An in-depth video guide to React Router.
                            </li>
                            <li>
                                <a
                                    href="https://reactrouter.com/en/main/start/tutorial"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    React Router Tutorial
                                </a> – A hands-on tutorial to learn React Router step by step.
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Date6;