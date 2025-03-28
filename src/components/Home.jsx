import React from "react";
import { motion } from "framer-motion";
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from "react-scroll";
import profileImage from "../assets/heroImage1.jpg"; 

const Home = () => {
  const getGreeting = () => {
    try {
      const hour = new Date().getHours();
      if (hour < 12) return "Good Morning";
      if (hour < 18) return "Good Afternoon";
      return "Good Evening";
    } catch (error) {
      console.error("Error in getGreeting:", error);
      return "Hello";
    }
  };

  return (
    <div
      name="home"
      className="h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        {/* Left Section: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center md:w-1/2"
        >
          <h2 className="text-2xl sm:text-6xl font-bold leading-tight animate-fadeIn">
            {getGreeting()}, I’m Azar – Your{" "}
            <p className="text-cyan-400 inline">React Full Stack Developer</p>
          </h2>
          <p className="text-gray-400 py-4 max-w-md text-lg animate-slideUp">
            Crafting scalable, user-centric web solutions with expertise in
            React, React Redux, Tailwind, MUI, Node.js, Express, AWS, MongoDB,
            PostgreSQL, and cutting-edge animations.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-opacity-20 backdrop-blur-md bg-white border border-gray-300 cursor-pointer hover:bg-opacity-30 transition-all duration-300"
              aria-label="View my portfolio"
            >
              Explore My Work
              <span className="group-hover:rotate-90 duration-300">
                <TiArrowRightOutline size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Right Section: Static Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 md:w-1/2 animate-scaleIn"
        >
          <img
            src={profileImage}
            alt="Azar, React Full Stack Developer"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            className="w-full max-w-[400px]"
          />
          <p className="sr-only">
            Profile image showcasing my professional identity.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;