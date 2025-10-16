import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/sections/ContactForm';
import { Download } from 'lucide-react'; // optional icon

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Sujeet Kumar</title>
        <meta
          name="description"
          content="Get in touch with the AdRun Pro team for a free consultation and quote. Let's discuss how we can help grow your business."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Let’s Build Something Together
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            Got a project, idea, or just want to collaborate? Fill out the form below and I’ll personally get back to you within 24 hours. Let’s turn your vision into reality.
          </p>
        </div>

        {/* 🌫️ Glassmorphic Card */}
        <div className="backdrop-blur-xl bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30 
                        rounded-2xl shadow-2xl max-w-2xl w-full p-8 transition-all duration-500 hover:shadow-blue-200/50
                        dark:hover:shadow-blue-900/40">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;