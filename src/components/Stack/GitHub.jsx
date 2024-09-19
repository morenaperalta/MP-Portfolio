import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="aqua">Code</strong>
      </h1>
      <GitHubCalendar
        username="More-Pe"
        blockSize={12}
        blockMargin={4}
        color="#5ff0f8"
        fontSize={16}
        className="github-calendar"
      />
    </Row>
  );
}

export default Github;