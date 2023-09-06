import React from 'react';
import Freelancer from '../assets/freelancer.svg'; // Adjust the path as needed
import { Github, Linkedin } from '../assets/logo'; // Assuming Github and Linkedin are React components

function HeroSection() {
  return (
    <section className="bg-gray-100 py-5 sm:py-5">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between">
        <div className="sm:w-1/2 pr-8 text-center sm:text-left"> {/* Center text in small screens */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Narendra Choudhary
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-bold text-gray-600 mb-8"> {/* Change font to bold and color to gray */}
            A dedicated professional driven to craft end-to-end solutions that empower sustainable and scalable social and technical systems, with a relentless focus on creating meaningful impact.
          </p>

          <div className="flex items-center justify-center sm:justify-start"> {/* Center icons in small screens */}
            <a
              href="https://github.com/narendra002/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-blue-500 hover:underline"
            >
              <Github className="w-4 h-4" /> {/* Adjust the size as needed */}
            </a>

            <a
              href="https://www.linkedin.com/in/narendra-choudhary-7557301b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <Linkedin className="w-4 h-4" /> {/* Adjust the size as needed */}
            </a>
          </div>
        </div>

        <div className="sm:w-1/2 mt-8 sm:mt-0"> {/* Center image in small screens */}
          <img
            src={Freelancer}
            alt="Freelancer Illustration"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
