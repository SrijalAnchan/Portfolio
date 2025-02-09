import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiC, SiMysql, SiDjango, SiPython } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

import {
  DiJavascript1,
  DiReact,
  DiJava,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 size={50} color="#F7DF1E"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact size={50} color="#CFF4FF"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava size={50} color="#007396"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC size={50} color="#A8B9CC" /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 size={50} color="#E34F26" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql size={50} color="#4479A1" /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango size={50} color="#092E20" /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython size={50} color="#3776AB" />
    
      </Col>

    </Row>
  );
}

export default Techstack;
