import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Srijal Anchan </span>
            from <span className="purple"> Mangalore, Karnataka</span>
            <br />
            I am an undergraduate engineering student from canara engineering college.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code. Innovate. Inspire!"{" "}
          </p>
          <footer className="blockquote-footer">SrijalAnchan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
