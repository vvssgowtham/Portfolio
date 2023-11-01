import React from "react";
import {HiAcademicCap} from "react-icons/hi";
import { experienceData } from "../data";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Experience() {
    return(
        <section id="experience">
            <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
            <center><HiAcademicCap style={{width: '75px',height:'60px'}} className="py-2"/></center>
            <h1 class="sm:text-4xl text-3xl font-medium title-font text-white mb-4">Experience &amp; Certifications</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Explore my journey through the world of technology and my commitment to continuous learning. 
            This section showcases my professional experiences, highlighting the projects and roles that have shaped my career.
            Additionally, you'll find certifications that validate my expertise and dedication to staying up-to-date in this ever-evolving field.</p>
            </div>
            <div className="d-flex flex-row">
  {experienceData.map((data) => (
    <div key={data.id} className="p-3"> {/* Use p-2 for equal spacing between cards */}
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={data.image} style={{ width: '16rem',height: '200px' }} /> {/* Make images equal width */}
        <Card.Body className="bg-gray-800" style={{height: '100%'}}>
          <Card.Title className='text-white'>{data.title}</Card.Title>
          <Card.Text className='text-white' style={{height:'7rem'}}>{data.description}</Card.Text>
          <Button variant="success">View</Button>
        </Card.Body>
      </Card>
    </div>
  ))}
</div>
            </div>
        </section>
    );
}

export default Experience;