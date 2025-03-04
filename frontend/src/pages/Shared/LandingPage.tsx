import { Link } from "react-router-dom";
import { FaArrowRight, FaBook, FaChartLine, FaGlobe } from 'react-icons/fa';

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto text-center px-6 z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg animate-fade-in-down">
            Welcome to Morgan LMS
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md animate-fade-in-up">
            Unlock a world of modern, interactive, and effective online learning tailored just for you.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/signup"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Log In
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* About Morgan LMS */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in">
            Why Choose Morgan LMS?
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Morgan LMS is a cutting-edge Learning Management System designed to deliver seamless online education. It empowers institutions, instructors, and students to collaborate efficiently, track progress, and elevate learning with powerful, interactive tools.
          </p>
        </section>

        {/* About Morgan Technical Training */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-6 animate-fade-in">
            About Morgan Technical Training
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl transform transition-all duration-500 hover:shadow-2xl animate-fade-in-up">
            <p className="text-gray-700 text-lg leading-relaxed">
              Morgan Technical Training is a premier institution dedicated to providing top-tier technical education and professional development. Our mission is to equip learners with the skills and knowledge needed to thrive in today’s dynamic industries.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              By integrating <span className="font-semibold text-indigo-700">Morgan LMS</span> into our programs, we deliver a dynamic and engaging learning experience. Whether you’re a student, a professional, or an organization aiming to upskill your team, we offer tailored resources to meet your goals.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-10 animate-fade-in">
            Key Features of Morgan LMS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-100">
              <div className="text-indigo-600 text-3xl mb-4"><FaBook /></div>
              <h3 className="text-xl font-semibold text-gray-800">Course Management</h3>
              <p className="text-gray-600 mt-2">
                Create, organize, and manage courses effortlessly with an intuitive interface.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-200">
              <div className="text-indigo-600 text-3xl mb-4"><FaChartLine /></div>
              <h3 className="text-xl font-semibold text-gray-800">Progress Tracking</h3>
              <p className="text-gray-600 mt-2">
                Monitor student performance with real-time analytics and detailed reports.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-300">
              <div className="text-indigo-600 text-3xl mb-4"><FaGlobe /></div>
              <h3 className="text-xl font-semibold text-gray-800">Interactive Learning</h3>
              <p className="text-gray-600 mt-2">
                Engage students with practical content, live sessions, and discussion forums.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-gray-700 text-lg mb-6 max-w-xl mx-auto animate-fade-in-up">
            Join Morgan Technical Training and dive into world-class education with Morgan LMS today!
          </p>
          <div className="flex justify-center gap-6">
            <Link
              to="/login"
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Login <FaArrowRight className="ml-2" />
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center bg-green-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Sign Up <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Morgan LMS. Powered by Morgan Technical Training.
        </p>
      </footer>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-down {
            animation: fadeInDown 1s ease-out;
          }
          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
        `}
      </style>
    </div>
  );
}