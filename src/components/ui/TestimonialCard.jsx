import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    // The entire card is a link to the specific project section
    <Link 
      to={link} 
      className="group block bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-blue-500/20 transform hover:-translate-y-2 transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`Screenshot of ${title}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
        <div className="mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
          View Case Study <span aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;