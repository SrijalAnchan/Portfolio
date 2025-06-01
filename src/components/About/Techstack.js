import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiC, SiSqlite, SiDjango, SiPython, SiPhp, SiLaravel, SiTailwindcss, SiCss3 } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { DiJavascript1, DiReact, DiJava } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 size={50} color="#F7DF1E" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact size={50} color="#CFF4FF" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava size={50} color="#007396" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC size={50} color="#A8B9CC" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 size={50} color="#E34F26" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite size={50} color="#003B57" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango size={50} color="#092E20" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <SiPython size={50} color="#3776AB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp size={50} color="#777BB4" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel size={50} color="#FF2D20" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss size={50} color="#06B6D4" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 size={50} color="#264DE4" />
      </Col>
    </Row>
  );
}

export default Techstack;
