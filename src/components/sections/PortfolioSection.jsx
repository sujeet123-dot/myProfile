import React from 'react';
import { Link } from 'react-router-dom';
import DownloadResumeSection from '../sections/DownloadResumeSection';

const PortfolioHero = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* SVG for the inverted curve shape. This fills with the main page's background color. */}
      <div className="absolute top-0 left-0 w-full h-24 bg-transparent">
        <svg 
          className="w-full h-full"
          preserveAspectRatio="none" 
          viewBox="0 0 1440 100"
        >
          <path 
            d="M0,100 C240,0 480,0 720,0 S960,0 1200,100 L1440,100 L1440,0 L0,0 Z" 
            // This class ensures the curve's color matches the page background in both modes
            className="fill-current text-white dark:text-gray-900"
          ></path>
        </svg>
      </div>

      {/* Hero content container with adaptive background color */}
      <div className="relative bg-gray-100 dark:bg-black py-32 sm:py-40 px-6 overflow-hidden">
        
        {/* --- DUAL GRID BACKGROUNDS --- */}
        {/* Grid for Light Mode (visible by default, hidden in dark mode) */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.slate.200)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.200)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50 dark:hidden"
        ></div>
        {/* Grid for Dark Mode (hidden by default, visible in dark mode) */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.slate.800)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.800)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 hidden dark:block"
        ></div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Crafting Digital Experiences
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            See why I'm the right developer for your next project. Let's build something amazing together.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            
            {/* --- PRIMARY ACTION: DOWNLOAD RESUME (ADAPTIVE BUTTON) --- */}
            <DownloadResumeSection />

            {/* --- SECONDARY ACTION: CONTACT LINK (ADAPTIVE BUTTON) --- */}
            <Link
              to="/contact"
              className="text-sm font-semibold leading-6 rounded-md px-5 py-3 transition-colors
                         text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-white/10"
            >
              Contact Me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;