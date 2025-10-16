import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Linkedin, Github } from 'lucide-react';

// Skill Card Component
const SkillCard = ({ skill, icon, level }) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-md transition-transform hover:scale-105">
      <img src={icon} alt={skill} className="w-16 h-16 object-contain mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{skill}</h3>
      {level && <p className="text-sm text-gray-900 dark:text-gray-100 mt-1">{level}% Proficiency</p>}
    </div>
  );
};

const skillsData = [
  { skill: 'React', icon: './images/react-original.svg', level: 90 },
  { skill: 'Node.js', icon: './images/nodejs-original.svg', level: 85 },
  { skill: 'Python', icon: './images/python-original.svg', level: 80 },
  { skill: 'SQL', icon: './images/icons8-my-sql.svg', level: 75 },
  { skill: 'Machine Learning', icon: './images/icons8-machine-learning-50.png', level: 70 },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Me | Sujeet Kumar</title>
        <meta
          name="description"
          content="Learn about Sujeet Kumar — Full Stack Developer, AI enthusiast, and digital problem solver. Connect via LinkedIn, GitHub, or LeetCode."
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16 transition-colors duration-300 space-y-20">
        {/* Header Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 text-center lg:text-left space-y-6 lg:pl-10">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Hi, I’m Sujeet Kumar
            </h1>
            <p className="text-gray-700 dark:text-gray-400">
              I am a Full Stack Developer and AI enthusiast, passionate about building scalable, data-driven, and user-centric digital solutions. I love solving real-world problems with code and clean design.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/sujeet-kumar3"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/sujeet123-dot"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-medium transition"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://leetcode.com/u/sujeetkumar35/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition"
              >
                LeetCode
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="./images/20250308_213654.jpg"
              alt="Sujeet working"
              className="w-80 rounded-2xl shadow-lg object-cover transition-transform duration-500 hover:rotate-3"
            />
          </div>
        </div>

        {/* Mission & Approach Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 space-y-6 lg:pl-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
                My Mission
              </h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                My mission is to empower businesses and individuals with intelligent, scalable, and user-friendly web solutions. I aim to create products that are not only functional but also delightful for users.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2 pt-6">
                My Approach
              </h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                I believe in a collaborative and iterative approach. Every project is tailored to the client’s goals and audience, combining clean code, modern frameworks, and data-driven decisions. Continuous learning and adaptation are at the heart of my workflow.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="./images/20250308_211155.jpg"
              alt="Sujeet working"
              className="w-80 rounded-2xl shadow-lg object-cover transition-transform duration-500 hover:rotate-3"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">My Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skillsData.map((skill) => (
              <SkillCard
                key={skill.skill}
                skill={skill.skill}
                icon={skill.icon}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
