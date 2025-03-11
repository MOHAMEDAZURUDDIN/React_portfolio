import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      name="about"
      className="about-section min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white flex items-center justify-center py-16"
    >
      <motion.div
        className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.div variants={itemVariants} className="pb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline-block border-b-4 border-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            About Me
          </h2>
        </motion.div>

        {/* Introduction */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 leading-relaxed"
        >
          Hey there! I’m Mohammed Azaruddin, a passionate React Full Stack
          Developer dedicated to building cutting-edge, scalable web solutions
          that empower businesses and delight users.
        </motion.p>

        {/* Skills */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 leading-relaxed"
        >
          I specialize in creating seamless, high-performance applications using
          technologies like React, React Redux, Tailwind CSS, Material-UI (MUI),
          Node.js, Express, AWS, MongoDB, PostgreSQL, and advanced animations.
        </motion.p>

        {/* Projects */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 leading-relaxed"
        >
          Throughout my career, I’ve delivered impactful projects that blend
          front-end finesse with robust back-end architecture. Want to see my
          work in action? Explore my projects on{" "}
          <a
            href="https://github.com/MohamedAzaruddinTH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline underline-offset-4"
            aria-label="Visit my GitHub profile"
          >
            GitHub
          </a>
          .
        </motion.p>

        {/* Connect */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 leading-relaxed"
        >
          Let’s create something extraordinary together! Whether you’re looking
          to collaborate on a project or just want to chat tech, reach out on{" "}
          <a
            href="https://www.linkedin.com/in/mohammad-azaruddin-747549268/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline underline-offset-4"
            aria-label="Connect with me on LinkedIn"
          >
            LinkedIn
          </a>{" "}
          or drop me an email at{" "}
          <a
            href="mailto:azarajju076@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline underline-offset-4"
            aria-label="Email me"
          >
            azarajju076@gmail.com
          </a>
          .
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;