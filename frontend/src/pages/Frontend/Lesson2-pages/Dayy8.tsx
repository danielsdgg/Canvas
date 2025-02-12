import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dayy8 = () => {
  const navigate = useNavigate();
    return (
      <>
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          {/* Back Button */}
          <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
              <FaArrowLeft className="mr-2" />
              Back
          </button>
          {/* Title */}
          <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
              Working with Forms & user input
          </h1>
      </section>
      </>
    )
}

export default Dayy8
