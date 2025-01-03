import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to Canvas LMS</h1>
          <p className="mt-4 text-lg">
            The ultimate platform for online learning and training.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* About Canvas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">About Canvas LMS</h2>
          <p className="text-gray-700">
            Canvas is a robust learning management system designed to help students, educators, 
            and institutions create an engaging and collaborative learning environment. From 
            course materials to interactive tools, Canvas makes learning seamless and effective.
          </p>
        </section>

        {/* About Morgan Technical Training */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">About Morgan Technical Training</h2>
          <p className="text-gray-700">
            Morgan Technical Training is a premier institution dedicated to offering world-class 
            education and professional development. Our mission is to equip students with 
            the technical skills they need to thrive in today’s competitive job market. 
            By integrating Canvas LMS into our training, we provide an unparalleled 
            online learning experience.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center">
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
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-700 py-6">
        <div className="container mx-auto text-center">
          <p>
            © {new Date().getFullYear()} Canvas LMS. Powered by Morgan Technical Training.
          </p>
        </div>
      </footer>
    </div>
  );
}
