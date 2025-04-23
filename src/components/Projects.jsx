import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import p from '../assets/s.png'
import o from '../assets/o.png'

function Projects() {
  const projects = [
    {
      title: "OneLaw - Law Practice Management",
      description: "A comprehensive law practice management system with, client management, Law professional Onboarding, and Incentives for Profeesionals. Currently under active development.",
      technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "HTML5"],
      githubLink: "#", // Add your actual GitHub link
      liveLink: "#", // Add your demo link when available
      imagePath: o, // Replace with your image path
      isCurrent: true
    },
    {
      title: "Sorting Algorithm Visualizer",
      description: "Interactive visualization tool demonstrating various sorting algorithms with real-time animations and performance metrics.",
      technologies: ["React", "JavaScript", "CSS", "D3.js"],
      githubLink: "https://github.com/MrityunjayMaharana/sorting-visualizer",
      liveLink: "#",
      imagePath: p
    },
    {
      title: "ATS Resume Tracker",
      description: "Application Tracking System that analyzes resumes using AI and provides match percentage with job descriptions.",
      technologies: ["Python", "Streamlit", "LLM", "Gemini API"],
      githubLink: "https://github.com/MrityunjayMaharana/ATS-Resume-Tracker",
      liveLink: "#",
      imagePath: "/path-to-ats-tracker.jpg"
    },
    {
      title: "Planit - Project Management",
      description: "Project management platform with workspace creation, task assignment, and progress tracking features.",
      technologies: ["React", "Prisma", "Express", "Tailwind CSS"],
      githubLink: "https://github.com/MrityunjayMaharana/Planit",
      liveLink: "#",
      imagePath: "/path-to-planit.jpg"
    }
  ];

  return (
    <div className='px-10 py-20 max-w-7xl mx-auto' id="projects_section">
      <div className='mb-16 text-center'>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>My Projects</h2>
        <div className='w-20 h-1 bg-green-600 mx-auto'></div>
        <p className='text-gray-600 mt-4'>Here are some of my recent works, including my current focus</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative ${project.isCurrent ? 'ring-2 ring-green-500' : ''}`}
          >
            {project.isCurrent && (
              <div className='absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                Current Project
              </div>
            )}
            
            {/* Project Image */}
            <div className='h-48 bg-gray-200 overflow-hidden'>
              <img 
                src={project.imagePath} 
                alt={project.title} 
                className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/600x400?text=Project+Image";
                }}
              />
            </div>
            
            {/* Project Content */}
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>{project.title}</h3>
              <p className='text-gray-600 mb-4'>{project.description}</p>
              
              {/* Technologies */}
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className={`px-3 py-1 rounded-full text-sm ${project.isCurrent && tech === 'Laravel' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className='flex gap-4'>
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 transition ${project.isCurrent ? 'text-green-600 hover:text-green-800' : 'text-gray-700 hover:text-green-600'}`}
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 transition ${project.isCurrent ? 'text-green-600 hover:text-green-800' : 'text-gray-700 hover:text-green-600'}`}
                  >
                    <FaExternalLinkAlt /> {project.isCurrent ? 'Preview' : 'Live Demo'}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;