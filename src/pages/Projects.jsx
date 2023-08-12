import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import Expense from "../assets/projects/expense.png";
import Encryption from "../assets/projects/Encryption.jpeg";

import Realtime from "../assets/projects/realtime.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Expense}
              isBlog={false}
              title="Expense Tracker"
              description="Developed a dynamic and user-friendly expense tracker application using the MERN (MongoDB, Express.js, React, Node.js) stack, facilitating efficient financial management and providing insightful data visualization."
              ghLink="https://www.google.com/"
              demoLink="https://www.google.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Realtime}
              isBlog={false}
              title="Realtime-Openboard"
              description="Designed and implemented a real-time openboard website, utilizing web sockets and modern web technologies, to provide users with live collaborative features for seamless information sharing and interaction"
              ghLink="https://github.com/Soul-8789/My-OpenBoard"
              demoLink="https://my-openboard-5yo0.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Encryption}
              isBlog={false}
              title="Encyption and Decryption App"
              description="We developed an android application in which we incorporated various encryption algorithms, like Pig Latin Encryption, Diffie Hellman Key Exchange Algorithm and Caesar Encryption, to encrypt and decrypt text and also exchange secret numbers."
              ghLink="https://www.google.com/"
            />
          </Col>

        

   
       
        </Row>
      </Container>
    </Container>
  )
}

export default Projects