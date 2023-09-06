import React from 'react';
import Project from '../assets/Projects.svg';
import {
  Nodejs,
  Reactjs,
  Javascript,
  Css,
  Html,
  Expressjs,
  Reduxjs,
} from '../assets/logo';

const projectsData = [
  {
    name: 'The Stream',
    description:
      'A dynamic MERN web app for OTT content streaming with Redux state management and Vercel deployment.',
    link: 'https://thestream-frontend.vercel.app/',
    technologies: ['React', 'Node.js', 'Redux', 'Express', 'MongoDB'],
  },
  {
    name: 'CodeEditor',
    description:
      'Real-time Collaborative Code Editor with React, Express.js, and Socket.io for team coding.',
    link: 'https://github.com/narendra002/Code_Editor_Server',
    technologies: ['React', 'Express', 'Socket.io'],
  },
  {
    name: 'Admin Panel',
    description:
      'Robust Admin Panel for an OTT platform using MERN stack and Context API for content management.',
    link: 'https://the-stream-admin.vercel.app/',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
];

function Projects() {
  return (
    <section className="bg-gray-100 py-14">
      <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-center">
        <div className="sm:w-1/2 mt-8 sm:mt-0 mix-blend-multiply">
          {/* On small screens, move the image below */}
          <img src={Project} alt="Projects Illustration" className="mx-auto" />
        </div>
        <div className="sm:w-1/2 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Projects
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-bold text-gray-600 mb-8">
            My projects encompass a wide array of modern technology tools. I specialize in creating React applications and efficiently deploying them to web platforms using robust cloud infrastructure.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-14">
        {projectsData.map((project, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="p-6">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-800">
                    {project.name}
                  </h1>
                  <div className="flex items-center justify-evenly space-x-4">
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex}>
                        {tech === 'React' && <img width={65} height={65} src="https://www.cdnlogo.com/logos/r/85/react.svg" />}
                        {tech === 'Node.js' && <Nodejs title="Node.js" />}
                        {tech === 'Javascript' && (
                          <Javascript title="Javascript" />
                        )}
                        {tech === 'Css' && <Css title="Css" />}
                        {tech === 'Html' && <Html title="Html" />}
                        {tech === 'Express' && <Expressjs title="Express" />}
                        {tech === 'Redux' && <Reduxjs title="Redux" />}
                        {tech === 'Socket.io' && <img 
                        width={65} height={65}  src="https://www.cdnlogo.com/logos/s/14/socket-io.svg" />}
                        { tech === 'MongoDB' &&    <img
                          width="64"
                          height="64"
                          src="https://img.icons8.com/nolan/64/mongo-db.png"
                          alt="mongo-db"
                        />}
                        {/* Add more technologies as needed */}
                      </div>
                    ))}
                  </div>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-gray-600 mb-8">
                    {project.description}
                  </p>
                  <p className="text-sm text-blue-500 hover:underline">
                    View Project
                  </p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
