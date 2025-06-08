import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import nike from "../assets/portfolio/nike.png";
import nikey from "../assets/videos/nikey.mp4";
import clickcrazy from "../assets/portfolio/ClickCrazy.png";
import littleLooms from "../assets/portfolio/Little-looms.png";
import urbantrends from "../assets/portfolio/urbanTrends.png";
import pulsecore from "../assets/portfolio/pulsecore.png";
import ClickCrazy from "../assets/videos/ClickCrazyh.mp4";
import ReelFlicks from "../assets/portfolio/ReelFlicks.png";
import reelFlicks from "../assets/videos/ReelFlickz.mp4";
import rcpe from "../assets/portfolio/rcpe.png";
import Recipe from "../assets/videos/Recipe.mp4";
import weather from "../assets/portfolio/weather.png";
import Weather from "../assets/videos/weather.mp4";
import fitness from "../assets/portfolio/fitness.png";
import Fitness from "../assets/videos/Fitnessz.mp4";
import { Link } from "react-router-dom";
import { FaGithub, FaPlay } from "react-icons/fa"; // Added icons for modern buttons

// Bind Modal to the app element for accessibility
Modal.setAppElement("#root");

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: pulsecore,
    },
    {
      id: 2,
      src: littleLooms,
    },
    {
      id: 3,
      src: clickcrazy,
      video: ClickCrazy,
      codeLink: "https://github.com/MohamedAzaruddinTH/ClickCrazyh",
    },
    {
      id: 4,
      src: urbantrends,
    },
    {
      id: 5,
      src: nike,
      video: nikey,
      codeLink: "https://github.com/MohamedAzaruddinTH/Nike-store-AjSTACK",
    },
    {
      id: 6,
      src: ReelFlicks,
      video: reelFlicks,
      codeLink: "https://github.com/MohamedAzaruddinTH/ReelFlicks",
    },
    {
      id: 7,
      src: fitness,
      video: Fitness,
      codeLink: "https://github.com/MohamedAzaruddinTH/Fitness",
    },
    {
      id: 8,
      src: rcpe,
      video: Recipe,
      codeLink: "https://github.com/MohamedAzaruddinTH/Recipe",
    },
    {
      id: 9,
      src: weather,
      video: Weather,
      codeLink: "https://github.com/MohamedAzaruddinTH/Weather_App",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDemoClick = (videoSrc) => {
    setSelectedVideo(videoSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalIsOpen(false);
  };

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      name="portfolio"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white flex items-center justify-center py-16"
    >
      <motion.div
        className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.div variants={itemVariants} className="pb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline-block border-b-4 border-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Portfolio
          </h2>
          <p className="py-6 text-lg sm:text-xl text-gray-300">
            Explore my latest projects and see my skills in action.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map(({ id, src, video, codeLink }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="relative group bg-white bg-opacity-10 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={src}
                alt={`Project ${id}`}
                className="rounded-t-xl w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {video && (
                  <button
                    onClick={() => handleDemoClick(video)}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full font-semibold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
                    aria-label="View project demo"
                  >
                    <FaPlay />
                    Demo
                  </button>
                )}
                {codeLink && (
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full font-semibold hover:from-purple-300 hover:to-pink-400 transition-all duration-300"
                    aria-label="View project code on GitHub"
                  >
                    <FaGithub />
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Video */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Video Modal"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              zIndex: 1000,
            },
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "90vw",
              width: "800px",
              maxHeight: "80vh",
              padding: "0",
              border: "none",
              borderRadius: "16px",
              background: "transparent",
              overflow: "hidden",
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white bg-opacity-10 backdrop-blur-md border border-gray-700 rounded-xl overflow-hidden"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-white bg-red-500 px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition-all duration-300"
              aria-label="Close video modal"
            >
              Close
            </button>
            {selectedVideo && (
              <video
                controls
                autoPlay
                className="w-full h-auto rounded-b-xl"
                style={{ maxHeight: "70vh" }}
              >
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>
        </Modal>
      </motion.div>
    </div>
  );
};

export default Portfolio;