import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import trailapp from "../Images/caltrailss.png";
import git from "../Images/gitlet.png";
import game from "../Images/byow.png";
import safety from "../Images/sf_safety.png";
import classifier from "../Images/Spam_Ham.png";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function Projects() {
  return (
    <Container fluid className="app-project-section">
      <Container>
        <h1>
          <b> Projects </b>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={trailapp} alt="card-img" />
              <Card.Body>
                <Card.Title style={{ marginTop: 10 }}> CalTrails </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  A web application that allows users to search for hiking
                  trails near their location made with React.js. The user is
                  additionally able to find trails in different areas through
                  the autocomplete search, and select distance based on
                  preference. The app allows unique authentication of login and
                  access to user profile information. The projects uses API
                  extraction of hiking trail data based on user's location. User
                  can favorite hikes and view saved trails through backend.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/Pillbug23/caltrails.github.io"
                >
                  <BsGithub />
                  &nbsp; GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={game} alt="card-img" />
              <Card.Body>
                <Card.Title style={{ marginTop: 10 }}>
                  {" "}
                  BYOW (Flower Power){" "}
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  A simple 2D tile-based world exploration engine made with
                  Java. The user is able to explore the map by walking around
                  with the keyboard and interacting with the objects in this
                  world. The world consists of rooms (of differing lengths and
                  sizes), connected by hallways (the paths used to connect rooms
                  and enable us to travel between them). The user is able to
                  move around with the keyboard (WASD keys) and interact with
                  objects. The main objective of this game is to collect 10
                  flowers.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/Pillbug23/Portfolio/tree/main/BYOW"
                >
                  <BsGithub />
                  &nbsp; GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={git} alt="card-img" />
              <Card.Body>
                <Card.Title style={{ marginTop: 10 }}> Gitlet </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  A custom version-control system similiar to git. Functionality
                  includes initialization of a version control system, adding
                  and committing files, removing files, viewing log information,
                  checking out files, creating and deleting branches, and
                  merging.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/Pillbug23/Portfolio/tree/main/Gitlet"
                >
                  <BsGithub />
                  &nbsp; GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={classifier} alt="card-img" />
              <Card.Body>
                <Card.Title style={{ marginTop: 10 }}>
                  {" "}
                  Spam and Ham Classifier{" "}
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Built a logistic regression classifier to determine spam
                  emails from non-spam emails using Python. Utilized Sk-learn
                  libraries to process and fit data, implementation of data
                  visualizations using Python's Seaborn library, and Natural
                  Language Toolkit to analyze text data.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/Pillbug23/Portfolio/tree/main/2048/game2048"
                >
                  <BsGithub />
                  &nbsp; GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={safety} alt="card-img" />
              <Card.Body>
                <Card.Title style={{ marginTop: 10 }}>
                  {" "}
                  SF Food Safety Analysis{" "}
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  An analysis of food safety ratings in San Francisco using
                  Python's data visualization tools and Pandas. In this project
                  we explore ratings based on zip code, violations correlated
                  with low scoring restaurants, and highly located violations
                  within the SF region.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/Pillbug23/Portfolio/tree/main/Food_Safety"
                >
                  <BsGithub />
                  &nbsp; GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
