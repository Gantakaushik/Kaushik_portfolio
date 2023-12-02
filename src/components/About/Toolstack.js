import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SiVisualstudiocode
} from "react-icons/si";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faGithub} style={{ fontSize: "3rem" }} />
      </Col>

      
    </Row>
  );
}

export default Toolstack;
