import React from "react";
import { motion } from "framer-motion";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImage from "../assets/react.png";
import Redux from "../assets/redux.png";
import Aws from "../assets/AWSLogo.png";
import Node from "../assets/node.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import MongoDb from "../assets/mongoDb.png";
import Postgresql from '../assets/postgresql.png'
import Mui from "../assets/mui.png";
import Git from "../assets/git.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: ReactImage,
      title: "React",
      accentColor: "from-cyan-400 to-blue-500",
    },
    {
      id: 2,
      src: Redux,
      title: "Redux",
      accentColor: "from-purple-400 to-pink-500",
    },
    {
      id: 3,
      src: Node,
      title: "Node.js",
      accentColor: "from-green-400 to-lime-500",
    },
    {
      id: 4,
      src: MongoDb,
      title: "MongoDB",
      accentColor: "from-amber-400 to-orange-500",
    },
    {
      id: 5,
      src: Postgresql,
      title: "Postgresql",
      accentColor: "from-amber-400 to-orange-500",
    },
    {
      id: 6,
      src: Javascript,
      title: "JavaScript",
      accentColor: "from-yellow-400 to-amber-500",
    },
    {
      id: 7,
      src: Aws,
      title: "AWS",
      accentColor: "from-pink-400 to-red-500",
    },
    {
      id: 8,
      src: Mui,
      title: "Material-UI",
      accentColor: "from-sky-400 to-blue-500",
    },
    {
      id: 9,
      src: Tailwind,
      title: "Tailwind CSS",
      accentColor: "from-teal-400 to-cyan-500",
    },
    {
      id: 10,
      src: Git,
      title: "Git",
      accentColor: "from-lime-400 to-green-500",
    },
    {
      id: 11,
      src: Github,
      title: "GitHub",
      accentColor: "from-gray-400 to-gray-600",
    },
    {
      id: 12,
      src: Html,
      title: "HTML",
      accentColor: "from-orange-400 to-red-500",
    },
    {
      id: 13,
      src: Css,
      title: "CSS",
      accentColor: "from-blue-400 to-indigo-500",
    },
  ];

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
      name="experience"
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
            Experience
          </h2>
          <p className="py-6 text-lg sm:text-xl text-gray-300">
            These are the technologies I’ve mastered to build cutting-edge web
            solutions.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 text-center">
          {techs.map(({ id, src, title, accentColor }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="relative group bg-white bg-opacity-10 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              {/* Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${accentColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              ></div>
              {/* Tech Icon */}
              <img
                src={src}
                alt={title}
                className="w-16 h-16 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
              />
              {/* Tech Title */}
              <p className="mt-4 text-sm sm:text-base font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                {title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;