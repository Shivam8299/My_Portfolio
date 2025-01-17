import React from 'react';
import { useNavigate } from 'react-router';
import About from './About'
function Home() {
  const navigate = useNavigate();
  return (
    <div className="px-4 sm:px-8 bg-blue-50">
      {/* Header Section */}
      <div className="mt-14 sm:mt-28 md:mt-36">
        <p className="mb-8 font-sans text-gray-700 text-center ml-2">
          HEY! I'M EXCITED TO SHARE MY JOURNEY WITH YOU.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="flex justify-center text-center ">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700 font-semibold leading-tight">
          I'm Shivam Mishra, a passionate
          <span className="text-green-600">MERN </span> Stack < br />
          <span className="text-green-600">Developer</span> from Lucknow, Uttar Pradesh.
        </p>
      </div>

      {/* Description Section */}
      <div className="mt-6">
        <p className="font-sans text-gray-800 text-center  text-base font-medium  ">
          I specialize in creating dynamic and scalable web applications that drive success.
        </p>
      </div>

      {/* Button Section */}
      <div className="mt-8 flex justify-center  mb-12 md:mb-28">
        <button
          onClick={() => navigate('/projects')}
          className="px-6 py-3 bg-blue-500 text-white text-sm sm:text-base md:text-md font-medium rounded-md hover:border border-blue-900 hover:bg-green-500 transition-all duration-300"
        >
          See My Work
        </button>
      </div>
      <About/>
    </div>
  );
}

export default Home;
