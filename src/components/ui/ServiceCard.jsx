import React from "react";
import { motion } from "framer-motion";

const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

const SkillCard = ({ name, logo, link, delay = 0 }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-xl border border-gray-300 dark:border-gray-800 p-8 bg-white dark:bg-gray-900 text-center shadow-md transition-all duration-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-2 hover:border-blue-500"
      animate={floatAnimation}
      transition={{ delay }}
    >
      {/* Floating logo */}
      <div className="relative mx-auto w-16 h-16 mb-4">
        <img
          src={logo}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
        />
        <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-40 bg-blue-500/30 transition-all duration-700"></div>
      </div>

      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        {name}
      </h2>
    </motion.a>
  );
};

export default SkillCard;
