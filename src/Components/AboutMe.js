import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import personalPic from "../Images/UC_Berkeley_Photo.jpg";
import { AiFillHtml5 } from "react-icons/ai";
import { DiPython, DiJava } from "react-icons/di";
import {
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiPandas,
  SiCss3,
  SiPostman,
  SiLatex,
  SiVisualstudio,
} from "react-icons/si";
import { FaReact, FaNode, FaGitAlt, FaFigma } from "react-icons/fa";

function AboutMe() {
  return (
    <Container fluid className="about-me-section">
      <Container>
        <Row
          style={{ justifyContent: "center", padding: "10px" }}
          className="about-row"
        >
          <Col
            md={7}
            style={{ justifyContent: "center" }}
            className="about-me-blurb"
          >
            <h1 className="about-me-title" style={{ paddingBottom: "40px" }}>
              About Me
            </h1>
            <p style={{ fontSize: "1.0em" }} className="about-body">
              Hello! My name is Phillip Ly, and I am from Fremont, California. I
              am a graduate of
              <i>
                <b> UC Berkeley </b>
              </i>
              majoring in
              <i>
                <b> Economics</b>
                .&nbsp;
              </i>
              I'm an aspiring
              <i>
                <b> software engineer </b>
              </i>
              specializing in front-end development. My interest in web
              development started at Berkeley where I enjoyed being able to code
              and design applications. Since then, I've wanted to branch out to
              a role where I can see the benefits of what I'm building and see
              users use the software I've build in their day to day lives. I
              create visual, creative, and engaging experiences, using
              <i>
                <b> React/Node.js. </b>
              </i>
              I work with tools like
              <i>
                <b> Figma </b>
              </i>
              to help construct and develop new ideas for websites. I have a
              passion for developing new skills, coding, and creating dynamic
              interfaces applicable to users.
              <br />
              <br />
              Aside from coding, I love to play video games 🎮, attempt to bake
              or cook new foods 🍳, and go on hikes 🥾 around the Bay Area.
            </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "90px", paddingBottom: "50px" }}
            className="personal-img"
          >
            <img
              src={personalPic}
              style={{ borderRadius: "25px" }}
              alt="about"
              className="img-fluid"
            />
          </Col>
          <h1 className="skillset">
            Technological <strong style={{ color: "#64ffda" }}> Skills </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "70px" }}>
            <Col xs={4} md={2} className="tech-stack">
              <DiPython style={{ marginBottom: "15px" }} />
              <hr class="line" />
              <p className="name-tech"> Python </p>
            </Col>
            <Col xs={4} md={2} className="tech-stack">
              <DiJava style={{ marginBottom: "15px" }} />
              <hr class="line" />
              <p className="name-tech"> Java </p>
            </Col>
            <Col xs={4} md={2} className="tech-stack">
              <SiJavascript style={{ marginBottom: "15px" }} />
              <hr class="line" />
              <p className="name-tech"> Javascript </p>
            </Col>
            <Col xs={4} md={2} className="tech-stack">
              <FaReact style={{ marginBottom: "15px" }} />
              <hr class="line" />
              <p className="name-tech"> React </p>
            </Col>
            <Col xs={4} md={2} className="tech-stack">
              <FaNode style={{ marginBottom: "15px" }} />
              <hr class="line" />
              <p className="name-tech"> Node.js </p>
            </Col>
            <Col xs={4} md={2} className="tech-stack">
              <SiMysql style={{ marginBottom: "15px" }} />
              <hr class="line" />
              <p className="name-tech"> MySql </p>
            </Col>
            <Col xs={4} md={2} className="tech-stack">
              <SiMongodb style={{ marginBottom: "15px" }} />
              <hr class="line" />
              <p className="name-tech"> MongoDb </p>
            </Col>
            <Col xs={4} md={2} className="tech-stack">
              <SiPandas style={{ marginBottom: "15px" }} />
              <hr class="line" />
              <p className="name-tech"> Pandas </p>
            </Col>
            <Col xs={4} md={2} className="tech-stack">
              <AiFillHtml5 style={{ marginBottom: "15px" }} />
              <hr class="line" />
              <p className="name-tech"> HTML </p>
            </Col>
            <Col xs={4} md={2} className="tech-stack">
              <SiCss3 style={{ marginBottom: "15px" }} />
              <hr class="line" />
              <p className="name-tech"> CSS </p>
            </Col>
          </Row>
          <h1 className="skillset">
            Tools <strong style={{ color: "#64ffda" }}> Skillset </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "200px" }}>
            <Col xs={4} md={2} className="tech-stack">
              <FaGitAlt style={{ marginBottom: "15px" }} />
              <hr class="line" />
              <p className="name-tech"> Git </p>
            </Col>
            <Col xs={4} md={2} className="tech-stack">
              <SiPostman style={{ marginBottom: "15px" }} />
              <hr class="line" />
              <p className="name-tech"> Postman </p>
            </Col>
            <Col xs={4} md={2} className="tech-stack">
              <FaFigma style={{ marginBottom: "15px" }} />
              <hr class="line" />
              <p className="name-tech"> Figma </p>
            </Col>
            <Col xs={4} md={2} className="tech-stack">
              <SiLatex style={{ marginBottom: "15px" }} />
              <hr class="line" />
              <p className="name-tech"> Latex </p>
            </Col>
            <Col xs={4} md={2} className="tech-stack">
              <SiVisualstudio style={{ marginBottom: "15px" }} />
              <hr class="line" />
              <p className="name-tech"> Visual Studio Code </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutMe;
