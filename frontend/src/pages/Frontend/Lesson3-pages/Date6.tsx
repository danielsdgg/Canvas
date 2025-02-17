import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Date6: React.FC = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
    <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaArrowLeft className="mr-2" />
            Back
        </button>

        <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
            React Router & Navigation
        </h1>

        {/* Detailed Explanation Section */}
        <section className="text-gray-700 mb-6">
            <h2 className="text-xl font-semibold mb-4">What is React Router?</h2>
            <p className="mb-4">
                React Router is a powerful routing library for React applications that enables navigation between different views or pages, and it keeps the UI in sync with the URL. It allows you to define URL paths and map them to specific React components, enabling users to interact with your application via the URL.
            </p>
            <p className="mb-4">
                With React Router, your application behaves like a Single Page Application (SPA), where the page doesn’t reload on navigation. Instead, only the content that changes (the components) is updated dynamically, improving performance and providing a smoother user experience.
            </p>
            <h2 className="text-xl font-semibold mb-4">Core Concepts of React Router</h2>
            <p className="mb-4">
                Some important concepts in React Router that you'll work with are:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li><strong>Routes:</strong> Define which component should render based on the URL path.</li>
                <li><strong>Links:</strong> Components that allow navigation by changing the URL, without reloading the page.</li>
                <li><strong>useNavigate:</strong> A hook that allows you to programmatically navigate to different routes in your app.</li>
                <li><strong>useParams:</strong> A hook to access the parameters of a route (useful for dynamic routes).</li>
                <li><strong>useLocation:</strong> A hook to access the current location object, which includes the URL and state.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">Code Along Example: Basic Routing</h2>
            <p className="mb-4">
                Let’s start by setting up a new react app and also setting up basic routing in a React application using React Router. First, install React Router DOM using the command:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md mb-4">
{`npm install react-router-dom`}
            </pre>

            <p className="mb-4">
                Now, create two files namely:<b>(Home & About)</b> in your src folder, style them neatly and add some features and define routes to navigate between them. Here’s an example:
            </p>

            <pre className="bg-gray-800 text-white p-4 rounded-md mb-4">
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
            <p className="mb-2">Now you've got it..! you should be able to navigate to different pages.i.e. home and about page</p>

            <p className="mb-4">
                You can also use <code>useNavigate</code> to navigate to a specific route, for example:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md mb-4">
{`const navigate = useNavigate();

// Navigate to a new route programmatically
navigate('/about');`}
            </pre>
            <p className="mb-4">
                You can also pass additional state and query parameters while navigating, for example:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md mb-4">
{`navigate('/about', { state: { from: 'home' } });`}
            </pre>
            <p className="mb-4">
                This way, the navigation is flexible, and you can pass context or data that may be required for the target route.

            </p>

            <h2 className="text-xl font-semibold mb-4">Handling Dynamic Routes</h2>
            <p className="mb-4">
                Dynamic routes in React Router allow you to create paths that include variables or parameters. For example, consider a blog application where each post has a unique ID. You can define a route like this:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md mb-4">
{`<Route path="/post/:id" element={<Post />} />`}
            </pre>
            <p className="mb-4">
                In the <code>Post</code> component, you can access the post ID using the <code>useParams</code> hook:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded-md mb-4">
{`import { useParams } from 'react-router-dom';

function Post() {
    const { id } = useParams();
    return <h2>Post ID: {id}</h2>;
}`}
            </pre>
            <p className="mb-4">
                This allows you to create routes for dynamic content that changes based on the URL.
            </p>
            <h2 className="text-xl font-semibold text-blue-500">Navigation bar</h2>
            <p className="mb-4">Test yourself..! Try creating a navigation bar like the one shown below. Through creating this Navbar you will improve your understanding on react routers and navigations effectively.</p>
            <p className='mb-4'>Try minimising the screen size on the navigation bar for a more challenge, see how the hamburger menu appears? Try creating your own..</p>

            <header className="bg-blue-600 text-white p-4 shadow-md">
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
          <Link to="/fdl3day6" className="hover:text-blue-300 transition-all duration-300">
            Home
          </Link>
          <Link to="/fdl3day6" className="hover:text-blue-300 transition-all duration-300">
            About
          </Link>
          <Link to="/fdl3day6" className="hover:text-blue-300 transition-all duration-300">
            Services
          </Link>
          <Link to="/fdl3day6" className="hover:text-blue-300 transition-all duration-300">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu (shown when isOpen is true) */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-500 mt-4 p-4 rounded-md`}>
        <Link
          to="/fdl3day6"
          className="block text-white mb-4 hover:text-blue-300 transition-all duration-300"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="/fdl3day6"
          className="block text-white mb-4 hover:text-blue-300 transition-all duration-300"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          to="/fdl3day6"
          className="block text-white mb-4 hover:text-blue-300 transition-all duration-300"
          onClick={toggleMenu}
        >
          Services
        </Link>
        <Link
          to="/fdl3day6"
          className="block text-white mb-4 hover:text-blue-300 transition-all duration-300"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </header>


            {/* resources */}
            <h2 className="text-xl font-semibold mt-4">Resources for Further Study</h2>
            <p className="mb-4">
                To deepen your understanding of React Router, here are some valuable resources:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>
                    <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Official React Router Documentation
                    </a> – The most comprehensive resource for learning React Router.
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=Law7wfdg_ls" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        YouTube Tutorial: React Router Explained
                    </a> – An in-depth video guide to React Router.
                </li>
                <li>
                    <a href="https://reactrouter.com/en/main/start/tutorial" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        React Router Tutorial
                    </a> – A hands-on tutorial to learn React Router step by step.
                </li>
            </ul>
        </section>

    </section>
    </>
  )
}

export default Date6;
