import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/sections/HeroSection';
import TestimonialCard from '../components/ui/TestimonialCard';
import Button from '../components/ui/Button';
import TechMarquee from '../components/sections/TechMarquee';
import PortfolioHero from '../components/sections/PortfolioSection';
import ProjectCard from '../components/ui/TestimonialCard';
import AdBanner from '@/components/sections/AdBanner';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Sujeet Kumar</title>
        <meta
          name="description"
          content="Expert web developer specializing in AI, data analytics, and scalable full-stack solutions. Elevate your brand with Sujeet Kumar."
        />
      </Helmet>

      {/* Hero Section */}
      <HeroSection />
      <AdBanner />

      <TechMarquee />

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-400">
            Our results speak for themselves. Here's what our clients say.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ProjectCard 
              link={"./case-studies"}
              title={"Complete Bazaar"}
              description={"This is an ecommerce website for electronic items"}
              imageUrl={"./images/20250308_211155.jpg"}
            />
            <ProjectCard 
              link={"./case-studies"}
              title={"Complete Bazaar"}
              description={"This is an ecommerce website for electronic items"}
              imageUrl={"./images/20250308_211155.jpg"}
            />
            <ProjectCard 
              link={"./case-studies"}
              title={"Complete Bazaar"}
              description={"This is an ecommerce website for electronic items"}
              imageUrl={"./images/20250308_211155.jpg"}
            />
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <PortfolioHero />
    </>
  );
};

export default HomePage;
