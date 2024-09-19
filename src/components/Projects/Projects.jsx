import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import interactiveTV from "../../assets/Projects/interactive_TV.png";
import tattooShop from "../../assets/Projects/ink_empire.png";
import workInProgress from "../../assets/Projects/work_in_progress.png";
import pattiserie from "../../assets/Projects/eclat_parisienne.png";
import socialMedia from "../../assets/Projects/red_social.png";

function Projects() {
  return (
    <Container fluid className="home-section">
      <Container>
        <Row style={{ justifyContent: "center", paddingTop: "4em" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workInProgress}
              isBlog={false}
              title="Las Naves | Coworking"
              description="Coworking management app optimizing room usage with access control, real-time monitoring, and reporting. Users can easily check availability and book spaces. Stack: React, Tailwind, JWT, TypeScript, MySQL, TypeORM, Docker."
              ghLink="https://github.com/More-Pe/frontend-Coworking"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialMedia}
              isBlog={false}
              title="EMME | Social Media"
              description="A social platform designed to foster user connection and creative expression. Features include user authentication (JWT), profile management, post creation/editing with images, real-time content interactions (likes), and admin controls for user and post moderation. Stack: React, CSS, JWT, Node.js, Express, MongoDB, Docker."
              ghLink="https://github.com/More-Pe/frontend-SocialMedia"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tattooShop}
              isBlog={false}
              title="Ink Empire | Tattoo Shop"
              description="Appointment management system for a tattoo studio with user authentication, service browsing, and full appointment control (create, edit, view, cancel). Admins can manage user profiles and services. Stack: React, CSS, JWT, Node.js, Express, MongoDB, Docker."
              ghLink="https://github.com/More-Pe/frontend-TattooShop"
              //demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interactiveTV}
              isBlog={false}
              title="Interactive TV"
              description='Interface to control a TV with functions like power on/off, channel navigation (numeric keypad or CH button), and access to TV info date, time, and current channel via the "info" button. Streaming services like Disney+ and Netflix are accessible through dedicated buttons. Stack: HTML5, CSS3, JavaScript.'
              ghLink="https://github.com/More-Pe/myInteractive-TV"
              demoLink="https://more-pe.github.io/myInteractive-TV/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pattiserie}
              isBlog={false}
              title="Éclat Parisienne | Pastry Shop"
              description="Main page showcasing the bakery's values, a gourmet product menu, and a contact form for customer inquiries or special orders.
Stack: HTML5, CSS3, Bootstrap."
              ghLink="https://github.com/More-Pe/myWebPage"
              demoLink="https://more-pe.github.io/myWebPage/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;