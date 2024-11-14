import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecom from "../../Assets/Projects/ecom.png";
import fitup from "../../Assets/Projects/fitup.png";
import chatify from "../../Assets/Projects/chatify.png";
import gcs from "../../Assets/Projects/gcs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chat-app"
              description="Developed a fullstack real-time chat application for secure, responsive, and scalable communication using mern stack and socket.io for real-time communication between the users."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-commerce app"
              description="Built a responsive e-commerce website with a streamlined admin dashboard, enabling efficient inventory tracking,order management, and user insights. The website is built using MERN stack and Redux for state management."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gcs}
              isBlog={false}
              title="GCS webapp"
              description="Developed a web application to control and monitor a Martian rover remotely.Designed a real-time interface usingReactJS and TailwindCSS for live rover status updates and telemetry data visualization.Used flask api to get data from the sensors."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitup}
              isBlog={false}
              title="Fit-up"
              description="FitUp combines the power of technology, gamification, fitness tracking to make your fitness and wellness journeyengaging and rewarding.Used mern stack and redux for the state management"
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
