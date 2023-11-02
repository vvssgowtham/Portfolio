import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CodeIcon } from "@heroicons/react/solid";
import { projectsData } from '../data';

function Projects() {
  return (
    <section id='projects'>
      <div className="container px-2 sm:px-5 py-5 md:py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-5 sm:mb-10">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Explore a showcase of my diverse projects, spanning web development and more. These projects reflect my skills, creativity, and commitment to delivering high-quality solutions. From responsive websites to innovative apps, each project tells a unique story of problem-solving and excellence.
          </p>
        </div>
        <div className="d-flex flex-wrap">
          {projectsData.map((data) => (
            <div key={data.id} className="p-2 col-12 col-md-6 col-lg-4 col-xl-3"> {/* Adjust the column sizes for responsiveness */}
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={data.image} style={{ width: '100%', height: '15rem' }} />
                <Card.Body className="bg-gray-900">
                  <Card.Title className='text-white'>{data.title}</Card.Title>
                  <Card.Text className='text-white'>{data.description}</Card.Text>
                  <Button variant="success" href={data.link}>View</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
