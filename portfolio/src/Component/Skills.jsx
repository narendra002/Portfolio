import React, { useEffect, useRef } from 'react';
import Designer from '../assets/Designer.svg';
import Hosting from '../assets/Hosting.svg';
import {
  Nodejs,
  Reactjs,
  Javascript,
  Css,
  Html,
  Expressjs,
  Reduxjs,
} from '../assets/logo';

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('skills-animate'); // Add the animation class when the section is in view
          }
        });
      },
      {
        threshold: 0.5, // You can adjust this threshold as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-gray-100 py-16" ref={sectionRef}>
      <h1 className="font-bold text-center text-3xl sm:text-4xl md:text-5xl">
        What I Do?
      </h1>
      <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-center">
        {/* Left Side (Skills Details) */}
        <div className="sm:w-1/2 p-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Full Stack Web Developer
          </h2>
          <div className="flex items-center justify-between space-x-4">
          <Html title="HTML" />

            <Css title="CSS" />
            <Javascript title="JavaScript" />
            <Reactjs title="React" />
            <Expressjs title="Express" />
            <Reduxjs title="Redux" />
            <Nodejs title="Node.js" />
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/nolan/64/mongo-db.png"
              alt="mongo-db"
            />
            <img width="65" height="65" src="https://img.icons8.com/ios-filled/50/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>
          </div>

          <ul className="list-disc list-inside mt-4">
  <li className="mb-2">
    ⚡ Building responsive websites and web applications using the MERN stack (MongoDB, Express.js, React, Node.js)
  </li>
  <li className="mb-2">
    ⚡ Developing RESTful APIs and integrating them with front-end applications
  </li>
  <li className="mb-2">
    ⚡ Designing and implementing database schemas using MongoDB
  </li>
  <li className="mb-2">
    ⚡ Implementing user authentication and authorization
  </li>
  {/* Add more skills as needed */}
</ul>

        </div>

        {/* Right Side (Image) */}
        <div className="sm:w-1/2 p-4">
          <img
            src={Designer}
            alt="Designer Illustration"
            className="mx-auto mix-blend-multiply image-animate"
          />
        </div>
      </div>

      {/* Additional Section */}
      <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-center mt-12">
        {/* Left Side (Skills Details) */}
        <div className="sm:w-1/2 p-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Cloud Infra-Architecture
          </h2>
          <div className="flex items-center space-x-4 ">
            <img
              width="65"
              height="65"
              src="https://img.icons8.com/color/48/firebase.png"
              alt="firebase"
              className='mb-2'
            />
            <img
              width="65"
              height="65"
              src="https://img.icons8.com/nolan/64/mongo-db.png"
              alt="mongo-db"
            />
            <img
              width="100"
              height="100"
              src="https://www.cdnlogo.com/logos/v/78/vercel.svg"
              alt="vercel"
            />
          </div>

          <ul className="list-disc list-inside mt-4">
            <li className='mb-2'>
              ⚡ Deploying web applications effortlessly on Vercel for lightning-fast hosting.
            </li>
            <li className='mb-2'>
              ⚡ Utilizing Firebase for real-time database and authentication to power dynamic web experiences.
            </li>
            <li className='mb-2'>
              ⚡ Streamlining continuous deployment with Vercel and Firebase for efficient updates and scaling.
            </li>
          </ul>
        </div>

        {/* Right Side (Image) */}
        <div className="sm:w-1/2 p-4">
          <img
            src={Hosting}
            alt="Hosting Illustration"
            className="mx-auto mix-blend-multiply image-animate"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
