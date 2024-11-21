import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaTachometerAlt, FaBook, FaCalendarAlt, FaEnvelope, FaHistory, FaQuestionCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const SideNav: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <IconContext.Provider value={{ size: '1.5em' }}>
      {/* Top Navbar for Mobile */}
      <div className="md:hidden flex justify-between items-center bg-gray-800 p-4">
        <Link to="/" className="text-white flex items-center">
          <img src="https://res.cloudinary.com/ddei3mzex/image/upload/v1729158010/crest_x1gutu.jpg" alt="Logo" className="h-10 w-auto" />        
        </Link>
        <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
          {isMobile ? <FaTimes size="1.8em" /> : <FaBars size="1.8em" />}
        </button>
      </div>

      {/* Side Navigation for Desktop and Mobile (conditionally rendered) */}
      <nav
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white transform z-20 ${
          isMobile ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:translate-x-0 md:flex md:flex-col`}
      >
        <div className="flex justify-center p-4">
          <Link to="/" className="text-white">
            <img src="https://res.cloudinary.com/ddei3mzex/image/upload/v1729158010/crest_x1gutu.jpg" alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>
        <Link to="/accounts" className="flex items-center p-4 hover:bg-gray-700">
          <FaUser className="mr-3" /> Account
        </Link>
        <Link to="/" className="flex items-center p-4 hover:bg-gray-700">
          <FaTachometerAlt className="mr-3" /> Dashboard
        </Link>
        <Link to="/courses" className="flex items-center p-4 hover:bg-gray-700">
        <FaBook className="mr-3" /> Courses
        </Link>
        <Link to="/calendar" className="flex items-center p-4 hover:bg-gray-700">
          <FaCalendarAlt className="mr-3" /> Calendar
        </Link>
        <Link to="/inbox" className="flex items-center p-4 hover:bg-gray-700">
          <FaEnvelope className="mr-3" /> Inbox
        </Link>
        <Link to="/history" className="flex items-center p-4 hover:bg-gray-700">
          <FaHistory className="mr-3" /> History
        </Link>
        <Link to="/help" className="flex items-center p-4 hover:bg-gray-700">
          <FaQuestionCircle className="mr-3" /> Help
        </Link>
      </nav>
      
      {/* Background overlay for mobile view */}
      {isMobile && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </IconContext.Provider>
  );
};

export default SideNav;
