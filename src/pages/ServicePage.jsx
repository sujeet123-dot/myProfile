// src/pages/ServicesPage.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import SkillCard from "../components/ui/ServiceCard";

const skills = [
  {
    name: "HTML5",
    logo: "./html5-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    logo: "./css3-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    logo: "./javascript-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    logo: "./react-original.svg",
    link: "https://react.dev/",
  },
  {
    name: "Tailwind CSS",
    logo: "./icons8-tailwind-css.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Node.js",
    logo: "./nodejs-original.svg",
    link: "https://nodejs.org/",
  },
  {
    name: "Express.js",
    logo: "./express-original.svg",
    link: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    logo: "./mongodb-original.svg",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Python",
    logo: "./python-original.svg",
    link: "https://www.python.org/",
  },
  {
    name: "PostgreSQL",
    logo: "./postgresql-original.svg",
    link: "https://www.postgresql.org/",
  },
  {
    name: "Git",
    logo: "./git-original.svg",
    link: "https://git-scm.com/",
  },
  {
    name: "AWS",
    logo: "./icons8-aws.svg",
    link: "",
  },
  {
    name: "Docker",
    logo: "./docker-original.svg",
    link: "https://www.docker.com/",
  },
  {
    name: "Java",
    logo: "./icons8-java.svg",
    link: "https://www.docker.com/",
  },
  {
    name: "Pandas",
    logo: "./icons8-pandas.svg",
    link: "https://www.docker.com/",
  },
  {
    name: "Numpy",
    logo: "./icons8-numpy.svg",
    link: "https://www.docker.com/",
  },
  {
    name: "Matplotlib",
    logo: "./icons8-matplotlib.svg",
    link: "https://www.docker.com/",
  },
  {
    name: "PowerBi",
    logo: "./icons8-power-bi.svg",
    link: "https://www.docker.com/",
  },
];

const SkillsPage = () => {
  return (
    <>
      <Helmet>
        <title>My Skills & Tech Stack - Sujeet Kumar</title>
        <meta
          name="description"
          content="Explore the technologies and tools I use to craft world-class, scalable, and modern applications — from React and Node.js to Docker and PostgreSQL."
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">My Tech Stack</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These are the technologies I use daily to design, develop, and deploy modern web experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              logo={skill.logo}
              link={skill.link}
              delay={index * 0.2} // Staggered floating animation
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
