import React from 'react';
import { Helmet } from 'react-helmet-async';

// --- ICONS (No changes) ---
const GitHubIcon = () => (
  <svg className="w-8 h-8 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path>
  </svg>
);

const LeetCodeIcon = () => (
  <svg className="w-8 h-8 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 5.844a1.374 1.374 0 0 0-.438.961v10.392a1.374 1.374 0 0 0 .438.961l5.405 5.405a1.373 1.373 0 0 0 .961.438h7.034a1.374 1.374 0 0 0 .961-.438l5.405-5.405a1.374 1.374 0 0 0 .438-.961V.438A1.374 1.374 0 0 0 20.517 0h-7.034ZM15.451 3.333h3.21v13.334h-3.21V3.333Zm-3.21 0H8.96v13.334h3.282V3.333Z" transform="translate(-2 -2)" />
  </svg>
);


// --- STATS COMPONENT (WITH HOVER EFFECT) ---
const StatsCard = ({ icon, value, label }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex items-center space-x-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div>{icon}</div>
    <div>
      <div className="text-3xl font-bold text-gray-900 dark:text-white">{value}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
    </div>
  </div>
);


// --- PROJECT DETAIL COMPONENT (WITH HOVER EFFECT) ---
const ProjectDetail = ({ id, title, problem, solution, techStack, imageUrl, liveLink, repoLink }) => (
  <section id={id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-16 overflow-hidden transition-all duration-300 scroll-mt-20 hover:shadow-2xl hover:-translate-y-2">
    {imageUrl && <img src={imageUrl} alt={`Screenshot of ${title}`} className="w-full h-auto object-cover border-b dark:border-gray-700" />}

    <div className="p-8">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <div className="mt-6">
        <h4 className="font-semibold text-lg text-blue-600 dark:text-blue-400">The Problem</h4>
        <p className="text-gray-700 dark:text-gray-300 mt-2">{problem}</p>
      </div>
      <div className="mt-6">
        <h4 className="font-semibold text-lg text-blue-600 dark:text-blue-400">My Solution & Process</h4>
        <p className="text-gray-700 dark:text-gray-300 mt-2">{solution}</p>
      </div>
      
      <div className="mt-8 flex flex-wrap items-center gap-4">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            Live App
          </a>
        )}
        
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-gray-100 dark:bg-gray-700 px-4 py-2 text-sm font-semibold text-gray-800 dark:text-gray-200 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path></svg>
            View Code
          </a>
        )}
      </div>
    </div>

    <div className="bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 p-8 transition-colors duration-300">
      <h4 className="font-semibold text-lg text-blue-600 dark:text-blue-400 mb-4">Technology Stack</h4>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </section>
);


// --- MAIN PAGE COMPONENT (No changes here) ---
const ProjectsPage = () => {
  const myStats = {
    githubContributions: '100+',
    leetcodeProblems: '24+',
  };

  return (
    <>
      <Helmet>
        <title>Projects | Sujeet</title>
        <meta name="description" content="Explore a collection of my best projects, showcasing my skills in web development, problem-solving, and more." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 py-16 transition-colors duration-300">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">My Projects & Achievements</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">I believe in learning by doing. Here's a look at my work and my dedication to the craft.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <StatsCard 
            icon={<GitHubIcon />}
            value={myStats.githubContributions}
            label="GitHub Contributions (Last Year)"
          />
          <StatsCard 
            icon={<LeetCodeIcon />}
            value={myStats.leetcodeProblems}
            label="LeetCode Problems Solved"
          />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Work</h2>
        
        <ProjectDetail
          id="project-alpha"
          title="E-Commerce Platform Redesign"
          problem="An existing online store was suffering from slow load times, a confusing user interface, and a high cart abandonment rate, leading to poor sales."
          solution="I led a full-stack redesign, migrating the frontend to Next.js for server-side rendering and improved performance. I built a new, intuitive UI with Tailwind CSS and implemented a streamlined checkout process using Stripe."
          techStack={['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Stripe API', 'Vercel']}
          liveLink="https://your-live-app-alpha.com"
          repoLink="https://github.com/your-username/project-alpha"
        />

        <ProjectDetail
          id="project-beta"
          title="Data Visualization Dashboard"
          problem="A SaaS company needed a way for its users to easily understand complex engagement data, but their existing reports were static and hard to interpret."
          solution="I developed a highly interactive dashboard using React and D3.js. The app fetches data from a REST API and allows users to filter, sort, and visualize data with dynamic charts and graphs, providing actionable insights."
          techStack={['React', 'D3.js', 'REST API', 'JavaScript (ES6+)', 'CSS Grid']}
          liveLink="https://your-live-app-beta.com"
          repoLink="https://github.com/your-username/project-beta"
        />
      </div>
    </>
  );
};

export default ProjectsPage;