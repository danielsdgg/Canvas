import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold tracking-wide">Welcome to Morgan LMS</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Your ultimate platform for modern, interactive, and effective online learning.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* About EduSphere LMS */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Why Choose Morgan LMS?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Morgan LMS is a powerful and user-friendly Learning Management System (LMS) 
            designed to provide seamless online education. It allows institutions, instructors, 
            and students to collaborate efficiently, track progress, and enhance learning experiences 
            with interactive tools.
          </p>
        </section>

        {/* About Morgan Technical Training */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
            About Morgan Technical Training
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-700 leading-relaxed">
              Morgan Technical Training is a leading institution committed to delivering 
              high-quality technical education and professional development. Our goal is 
              to empower learners with the skills and knowledge required to excel in 
              today’s fast-paced industries.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By integrating <span className="font-semibold text-blue-700 mr-1">Morgan LMS</span> 
              into our training programs, we offer a dynamic and interactive learning experience. 
              Whether you are a student, a working professional, or an organization looking to 
              upskill employees, Morgan Technical Training provides top-tier resources tailored 
              to your needs.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
            Key Features of Morgan LMS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">📚 Course Management</h3>
              <p className="text-gray-600 mt-2">
                Create, organize, and manage courses effortlessly with an intuitive interface.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">📊 Progress Tracking</h3>
              <p className="text-gray-600 mt-2">
                Monitor student performance with real-time analytics and reports.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">🌍 Interactive Learning</h3>
              <p className="text-gray-600 mt-2">
                Engage students with practical contents, live sessions, and discussion forums.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Started Today!</h2>
          <p className="text-gray-700 mb-6">
            Join Morgan Technical Training and experience world-class education through Morgan LMS.
          </p>
          <div>
            <Link
              to="/login"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg mr-4 hover:bg-blue-700 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-700 py-6 text-center">
        <p>
          © {new Date().getFullYear()} Morgan LMS. Powered by Morgan Technical Training.
        </p>
      </footer>
    </div>
  );
}
