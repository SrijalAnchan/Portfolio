import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiLatex,
  SiJupyter, SiJetbrains, SiAmazonaws
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ color: "#3776AB" }} />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiJetbrains style={{ color: "#B8E9D3"}}/> {/* JetBrains (Closest to PyCharm) */}
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiJupyter style={{ color: "#F37626" }} />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{ color: "	#FF6C37" }} />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiSlack style={{ color: "	#4A154B" }} />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiLatex style={{ color: "#008080" }} />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiAmazonaws style={{ color: "#FF9900" }} />
    </Col>
    </Row>
  );
}

export default Toolstack;
