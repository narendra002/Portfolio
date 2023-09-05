import React from 'react';
import Freelancer from '../assets/freelancer.svg'; // Adjust the path as needed
import { Github, Linkedin } from '../assets/logo'; // Assuming Github and Linkedin are React components
 // Adjust the
function HeroSection() {
  return (
    <section className="bg-gray-100 py-14">
      <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-between">
        <div className="sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Narendra Choudhary
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl font-light mb-8 color-#1f2937">
            A dedicated professional driven to craft end-to-end solutions that empower sustainable and scalable social and technical systems, with a relentless focus on creating meaningful impact.
          </p>
          
          <div className="flex items-center">
            <a
              href="https://github.com/narendra002/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <Github className="w-1 h-1" /> {/* Adjust the size as needed */}
            </a>
            
            <a
              href="https://www.linkedin.com/in/narendra-choudhary-7557301b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <Linkedin className="w-2 h-2" /> {/* Adjust the size as needed */}
            </a>
          </div>
        </div>
        
        <div className="sm:w-1/2 mt-8 sm:mt-0"> {/* On small screens, move the image below */}
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
