import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TechStack from "./TechStack.jsx";
import ToolStack from "./ToolStack.jsx";

function Stack() {
  return (
    <Container fluid className="home-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="aqua">Skillset </strong>
        </h1>
        <TechStack />
        <h1 className="project-heading">
          <strong className="aqua">Tools</strong> I use
        </h1>
        <ToolStack />
      </Container>
    </Container>
  );
}

export default Stack;