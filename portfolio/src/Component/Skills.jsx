import React from 'react';
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
  return (
    <section className="bg-gray-100 py-5">
      <h1 className="font-bold text-center text-3xl sm:text-4xl md:text-5xl">
        What I Do?
      </h1>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center">
        {/* Left Side (Skills Details) */}
        <div className="lg:w-1/2 p-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Full Stack Web Developer
          </h2>
          <div className="flex flex-wrap items-center space-x-4 lg:space-x-8 lg:justify-space justify-evenly">
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
            <img
              width="65"
              height="65"
              src="https://img.icons8.com/ios-filled/50/c-plus-plus-logo.png"
              alt="c-plus-plus-logo"
            />
          </div>

          <ul className="list-disc list-inside mt-4">
            <li className="mb-2 text-gray-500 font-bold text-light-blue-500">
              ⚡ Building responsive websites and web applications using the MERN stack (MongoDB, Express.js, React, Node.js)
            </li>
            <li className="mb-2 text-gray-500 font-bold text-light-blue-500">
              ⚡ Developing RESTful APIs and integrating them with front-end applications
            </li>
            <li className="mb-2 text-gray-500 font-bold text-light-blue-500">
              ⚡ Designing and implementing database schemas using MongoDB
            </li>
            <li className="mb-2 text-gray-500 font-bold text-light-blue-500">
              ⚡ Implementing user authentication and authorization
            </li>
            {/* Add more skills as needed */}
          </ul>
        </div>

        {/* Right Side (Image) */}
        <div className="lg:w-1/2 p-4">
          <img
            src={Designer}
            alt="Designer Illustration"
            className="mx-auto max-w-full h-auto mix-blend-multiply image-animate"
          />
        </div>
      </div>

      {/* Additional Section */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center mt-5">
        {/* Left Side (Skills Details) */}
        <div className="lg:w-1/2 p-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Cloud Infra-Architecture
          </h2>
          <div className="flex flex-wrap items-center justify-center space-x-2 lg:space-x-4">
            <img
              width="65"
              height="65"
              src="https://img.icons8.com/color/48/firebase.png"
              alt="firebase"
              className="mb-2"
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
            <li className="mb-2 text-gray-500 font-bold text-light-blue-500">
              ⚡ Deploying web applications effortlessly on Vercel for lightning-fast hosting.
            </li>
            <li className="mb-2 text-gray-500 font-bold text-light-blue-500">
              ⚡ Utilizing Firebase for real-time database and authentication to power dynamic web experiences.
            </li>
            <li className="mb-2 text-gray-500 font-bold text-light-blue-500">
              ⚡ Streamlining continuous deployment with Vercel and Firebase for efficient updates and scaling.
            </li>
          </ul>

        </div>

        {/* Right Side (Image) */}
        <div className="lg:w-1/2 p-4 sm:w-1/2 mt-8 sm:mt-0">
          <img
            src={Hosting}
            alt="Hosting Illustration"
            className="mx-auto max-w-full h-auto mix-blend-multiply image-animate"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
