import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import videoAnalyser from "../../Assets/Projects/videoAnalyser.png";
import skincancer from "../../Assets/Projects/skincancer.jpg";
import speechTranslator from "../../Assets/Projects/speechTranslator.png";

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
              imgPath={skincancer}
              isBlog={false}
              title="Skin Cancer Detection "
              description="The web app built with Flask, TensorFlow, and OpenCV. It uses a CNN model to classify skin lesions, provides symptom insights with audio support, and recommends nearby dermatologists via Google Maps API. The system also features interactive visualizations for model performance and predictions."
              ghLink="https://github.com/SrijalAnchan/SKIN-CANCER-PROJECT"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speechTranslator}
              isBlog={false}
              title="Multilingual Speech Translator and Dictionary Platform"
              description="A Tkinter-based speech-to-text and translation application that converts spoken English into multiple regional languages and vice versa. It supports both audio and video input for translation, featuring real-time audio playback and an integrated dictionary lookup for enhanced communication."
              ghLink="https://github.com/SrijalAnchan/Speech-to-Text-Translator-with-Video-and-Dictionary-Support"
                            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoAnalyser}
              isBlog={false}
              title="Video Audio Analyzer"
              description="A Flask-based tool for detecting video issues like frame drops, blank frames, and blurry frames. Built with OpenCV and FFmpeg, it generates detailed PDF reports with timestamps and provides a user-friendly interface for video uploads and analysis."
              ghLink="https://github.com/SrijalAnchan/Video-Audio-Analyzer/"            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
