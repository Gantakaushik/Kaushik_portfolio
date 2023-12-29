import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Sketchpen from "../../Assets/Projects/Sketch Pen.png";
import Snapnote from "../../Assets/Projects/Snap Note.png";
import admin from "../../Assets/Projects/Admin.png";
import hirexzo from '../../Assets/Projects/Hirexzo.png';

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
              imgPath={Sketchpen}
              isBlog={false}
              title="Sketch Pen"
              description= "Sketch Pen is an innovative code editor designed for HTML, CSS, and JavaScript, offering a user-friendly interface and powerful features to streamline web development."
                 ghLink="https://github.com/Gantakaushik/SketchCode"
                 demoLink="https://gantakaushik.github.io/SketchCode/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Snapnote}
              isBlog={false}
              title="SnapNote"
              description=
              "Snap Note is a user-friendly note-taking application designed for effortless sampling and organization of notes."
              
              ghLink="https://github.com/Gantakaushik/Snap-Note"
              demoLink="https://gantakaushik.github.io/Snap-Note/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              title="Admin Panel"
              description=
              "Dynamic React-based admin panel project utilizing a modern stack of libraries for efficient and responsive static content management."
              ghLink="https://github.com/Gantakaushik/Admin_panel"
              demoLink="https://gantakaushik.github.io/Admin_panel/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hirexzo}
              isBlog={false}
              title="Hirexzo Solutions"
              description='Empowering Futures By Transforming Campus Hirings'
              ghLink=""
              demoLink="https://www.hirexzo.com/"
            />
          </Col>

          

          

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
