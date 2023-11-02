import React from "react";
import { HiAcademicCap } from "react-icons/hi";
import { experienceData } from "../data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Experience() {
  return (
    <section id="experience">
      <div className="container px-2 sm:px-5 py-5 md:py-10 mx-auto">
        <div className="text-center mb-5 sm:mb-10">
          <div className="d-flex justify-content-center align-items-center">
            <HiAcademicCap
              style={{ width: "75px", height: "60px" }}
              className="py-2"
            />
          </div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Experience & Certifications
          </h1>
          <p className="text-base leading-relaxed lg:w-3/4 xl:w-2/4 mx-auto">
            Explore my journey through the world of technology and my commitment
            to continuous learning. This section showcases my professional
            experiences, highlighting the projects and roles that have shaped my
            career. Additionally, you'll find certifications that validate my
            expertise and dedication to staying up-to-date in this ever-evolving
            field.
          </p>
        </div>
        <div className="d-flex flex-wrap">
          {experienceData.map((data) => (
            <div
              key={data.id}
              className="p-2 col-12 col-md-6 col-lg-4"
            >
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src={data.image}
                  style={{ width: "100%", height: "250px" }}
                />
                <Card.Body className="bg-gray-800" style={{ height: "100%" }}>
                  <Card.Title className="text-white">{data.title}</Card.Title>
                  <Card.Text
                    className="text-white"
                    style={{ height: "7rem", overflow: "hidden" }}
                  >
                    {data.description}
                  </Card.Text>
                  <Button variant="success" href={data.link}>
                    View
                  </Button>
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
