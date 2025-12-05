import React from "react";
import Button from "../ui/Button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const HeroSection = () => {
  const nameWords = [
    { text: "Sujeet", className: "text-sky-600 dark:text-sky-400" },
    { text: "Kumar", className: "text-indigo-600 dark:text-indigo-400" },
  ];

  const titleWords = [
    { text: "Full", className: "text-violet-600 dark:text-violet-400" },
    { text: "Stack", className: "text-fuchsia-600 dark:text-fuchsia-400" },
    { text: "Developer", className: "text-rose-600 dark:text-rose-400" },
  ];

  return (
    <section className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-500">
      <div className="mx-auto max-w-screen-xl px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <div className="max-w-xl">
          {/* --- Animated Name --- */}
          <TypewriterEffectSmooth
            words={nameWords}
            className="text-4xl sm:text-6xl font-extrabold mb-3"
            cursorClassName="bg-sky-500 dark:bg-sky-400"
          />

          {/* --- Animated Title --- */}
          <TypewriterEffectSmooth
            words={titleWords}
            className="text-2xl sm:text-4xl font-semibold mb-8"
            cursorClassName="bg-violet-500 dark:bg-violet-400"
          />

          {/* --- Description Paragraph --- */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A full-stack developer and data enthusiast, crafting intelligent
            systems that merge design, performance, and analytics. I turn data
            into decisions and code into impact — with precision and creativity.
          </p>

          {/* --- Buttons --- */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/contact" primary>
              Hire Me
            </Button>
            <Button to="/case-studies">My Projects</Button>
          </div>
        </div>

        {/* --- Right Side - Image --- */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-500/20 via-violet-500/20 to-fuchsia-500/20 blur-2xl transition-all duration-700 group-hover:blur-3xl" />
            <img
              src="./images/profile.png"
              alt="Profile"
              className="relative w-full max-w-md rounded-2xl shadow-lg ring-1 ring-gray-200 dark:ring-gray-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
