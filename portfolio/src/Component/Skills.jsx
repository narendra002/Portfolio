import React, { useEffect, useRef } from 'react';
import Designer from '../assets/Designer.svg';
// import './Skills.css'; // Import the CSS file with the animation styles

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
            Data Science & AI
          </h2>
          <ul className="list-disc list-inside">
            <li>
              ⚡ Developing highly scalable production-ready models for various deep learning and statistical use cases
            </li>
            <li>
              ⚡ Experience with Computer Vision and NLP projects
            </li>
            <li>
              ⚡ Complex quantitative modeling for dynamic forecasting and time series analysis
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
    </section>
  );
}

export default Skills;
