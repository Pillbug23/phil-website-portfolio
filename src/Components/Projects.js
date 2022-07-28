import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import trailapp from "../Images/caltrailss.png";
import mobileapp from "../Images/2048.png";
import astronomy from "../Images/astronomy.png";
import website from "../Images/website.png";
import git from "../Images/gitlet.png";
import game from "../Images/byow.png";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function Projects() {
    return (
        <Container fluid className="app-project-section">
            <Container>
                <h1><b> Projects </b></h1>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <Card className="project-card-view">
                            <Card.Img variant="top" src={trailapp} alt="card-img"/>
                            <Card.Body>
                                <Card.Title style={{marginTop: 10}}> CalTrails </Card.Title>
                                <Card.Text style={{textAlign: "justify"}}>
                                A simple web application that allows users to search for hiking trails near their location 
                                made with React.js. App allows unique authentication of login and access to user 
                                profile information. This projects uses API extraction of hiking trail data based on user's 
                                location. User can favorite hikes and view saved trails through backend.
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/Pillbug23/caltrails.github.io">
                                    <BsGithub/>&nbsp;
                                    GitHub
                                </Button>
                                <Button 
                                    variant="primary"
                                    href="https://pillbug23.github.io/caltrails.github.io/"
                                    style={{ marginLeft: "10px" }}
                                >
                                    <CgWebsite /> &nbsp;
                                    Demo
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="project-card">
                        <Card className="project-card-view">
                            <Card.Img variant="top" src={game} alt="card-img"/>
                            <Card.Body>
                                <Card.Title style={{marginTop: 10}}> BYOW (Flower Power) </Card.Title>
                                <Card.Text style={{textAlign: "justify"}}>
                                A simple 2D tile-based world exploration engine made with Java. The user is able to explore the map by walking around with the keyboard and 
                                interacting with the objects in this world. The world consists of rooms (of differing lengths 
                                and sizes), connected by hallways(the paths used to connect rooms and enable us to travel 
                                between them). The user is able to move around with the keyboard (WASD keys) and interact 
                                with objects. The main objective of this game is to collect 10 flowers.
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/Pillbug23/caltrails.github.io">
                                    <BsGithub/>&nbsp;
                                    GitHub
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="project-card">
                        <Card className="project-card-view">
                            <Card.Img variant="top" src={git} alt="card-img"/>
                            <Card.Body>
                                <Card.Title style={{marginTop: 10}}> Gitlet </Card.Title>
                                <Card.Text style={{textAlign: "justify"}}>
                                A custom version-control system similiar to git. Functionality includes intialziation of a version control system, 
                                adding and committing files, removing files, log information, checking out files, branching, and merging. User can 
                                add and remove files, then commit. Viewing commit information is available through global-log and log functions. The
                                user can find specific commits with checkout and find methods. User can create new branches and delete them with branch
                                methods. User can merge multiple branches with the merge method, delete branches with checkout. 
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/Pillbug23/caltrails.github.io">
                                    <BsGithub/>&nbsp;
                                    GitHub
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <Card className="project-card-view">
                            <Card.Img variant="top" src={website} alt="card-img"/>
                            <Card.Body>
                                <Card.Title style={{marginTop: 10}}> Portfolio Website </Card.Title>
                                <Card.Text style={{textAlign: "justify"}}>
                                My portfolio website built with react as a frontend. Usage of react-icons/bootstrap to style
                                and design website. User is able to display,view, and navigate to different pages through 
                                react-router-dom. The website also includes a personal hikes for anyone interested in checking
                                it out.
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/Pillbug23/webdev-site/tree/main/webdev-site-phil">
                                    <BsGithub/>&nbsp;
                                    GitHub
                                </Button>
                                <Button 
                                    variant="primary"
                                    href="https://philliply-tech.vercel.app/"
                                    style={{ marginLeft: "10px" }}
                                >
                                    <CgWebsite /> &nbsp;
                                    Demo
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="project-card">
                        <Card className="project-card-view">
                            <Card.Img variant="top" src={mobileapp} alt="card-img"/>
                            <Card.Body>
                                <Card.Title style={{marginTop: 10}}> 2048 clone </Card.Title>
                                <Card.Text style={{textAlign: "justify"}}>
                                A recreation of the popular mobile game 2048.
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/Pillbug23/Portfolio/tree/main/2048/game2048">
                                    <BsGithub/>&nbsp;
                                    GitHub
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="project-card">
                        <Card className="project-card-view">
                            <Card.Img variant="top" src={astronomy} alt="card-img"/>
                            <Card.Body>
                                <Card.Title style={{marginTop: 10}}> Astronomy Database Favoriter </Card.Title>
                                <Card.Text style={{textAlign: "justify"}}>
                                    A simple app that retrieves astronomy data information and allows users to favorite
                                    trails to view through backend.
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/Pillbug23/Portfolio/tree/main/astronomy-DB">
                                    <BsGithub/>&nbsp;
                                    GitHub
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Projects;