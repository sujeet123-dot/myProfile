import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-screen-xl px-4 py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <div className="max-w-xl">
          <h1 className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
            Sujeet Kumar
            <span className="sm:block mt-2">Full Stack Developer</span>
          </h1>

          <p className="mt-6 sm:text-xl/relaxed text-gray-600 dark:text-gray-300 transition-colors">
            A full-stack developer and data enthusiast, crafting intelligent systems that combine design, performance, and analytics. I turn data into decisions and code into impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/contact" primary>
              Hire Me
            </Button>
            <Button to="/case-studies">
              My Projects
            </Button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="./images/profile.png"
            alt="Ad Campaigns Illustration"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
