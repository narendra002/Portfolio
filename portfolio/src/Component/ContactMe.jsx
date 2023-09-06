import React, { useState } from 'react';
import { Github, Linkedin } from '../assets/logo'; // Assuming Github and Linkedin are React components
import Profile from '../assets/Profile.jpg'; // Adjust the path as needed
import Resume from '../assets/NarendraRX.pdf'; // Adjust the path as needed

function ContactMe() {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <section className="bg-gray-100 py-14">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center">
        <div className="sm:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center sm:text-left">
            Contact Me
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-bold text-gray-600 mb-8 text-center sm:text-left">
            I'm available on various social media platforms. Feel free to reach out; I usually respond within 24 hours. I can assist you with ML, React, Android, and Backend Development.
          </p>
          <div className="flex items-center justify-center sm:justify-start space-x-4 mt-6">
            <a
              href="https://github.com/narendra002/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/narendra-choudhary-7557301b6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="65"
                height="65"
                src="https://img.icons8.com/color/96/instagram-new--v1.png"
                alt="instagram-new--v1"
              />
            </a>
          </div>
          <button
            onClick={toggleResume}
            className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 block mx-auto sm:mx-0"
          >
            {showResume ? 'Hide Resume' : 'Show Resume'}
          </button>
        </div>
        <div className="sm:w-1/2 mt-8 sm:mt-0">
          <img
            src={Profile}
            alt="Profile"
            className={`mx-auto w-44 h-44 sm:w-64 sm:h-64 rounded-full shadow-md ${showResume ? 'hidden' : ''}`}
          />
          {showResume && (
            <iframe
              src={Resume}
              title="Resume"
              width="100%"
              height="500"
              className="mt-6 mx-auto"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
