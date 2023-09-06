import React from 'react';
import Graduate from '../assets/Graduate.svg';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from '@nextui-org/react';

import logomit from '../assets/logo_mit.png';
function Education() {
  return (
    <>
      <section className="bg-gray-100 py-0">
        <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-center">
          <div className="sm:w-1/2 p-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Education
            </h2>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium">
              Basic Qualification and Certifications
            </h3>
            <div className="flex items-center justify-start space-x-4 mt-4">
  <a
    href="https://leetcode.com/narendrac024/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png"
      alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo"
    />
  </a>
  <a
    href="https://auth.geeksforgeeks.org/user/narendrac024/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/96/GeeksforGeeks.png"
      alt="GeeksforGeeks"
    />
  </a>
</div>

          </div>

          {/* Right Side (Image) */}
          <div className="sm:w-1/2 p-4">
            <img
              src={Graduate}
              alt="Graduate Illustration"
              className="mx-auto mix-blend-multiply image-animate"
            />
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center space-y-4 bg-gray-100">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Degree Received
          </h2>
          <Card className="max-w-[900px] bg-gray-100 py-4">
            <CardHeader className="flex gap-3">
              <Image
                alt="college logo"
                height={40}
                radius="sm"
                src={logomit} // Replace with the actual path to your college logo
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">
                  Mahakal Institute of Technology and Management Ujjain
                </p>
                <p className="text-small text-default-500">
                  http://www.mitujjain.ac.in/
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                ⚡ During my B.Tech in Computer Science, I covered a wide range
                of subjects including Data Structures (DS), Algorithms, Database
                Management Systems (DBMS), Operating Systems (OS), Computer
                Networks (CN), and Theory of Computation (TOC).
                <br />
                <br />
                ⚡ Additionally, I delved into various advanced topics related
                to Full Stack Development, where I learned about web
                development, server-side programming, front-end technologies, and
                building dynamic web applications.
                <br />
                <br />
                ⚡ My coursework also included practical projects, labs, and
                assignments that provided hands-on experience in applying these
                concepts to real-world scenarios, equipping me with valuable
                skills for software development.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="http://www.mitujjain.ac.in/"
              >
                Visit College Website.
              </Link>
            </CardFooter>
          </Card>
        </div>
    </>
  );
}

export default Education;
