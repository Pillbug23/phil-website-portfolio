import React, { useState,useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillGithub
} from "react-icons/ai";

import { CgFileDocument,CgGitFork } from "react-icons/cg";


function Navigationbar() {
  const [updateNavbar,setupdateNavbar] = useState(false);
  const [expand,setExpand] = useState(false);

  function scrollView(event) {
    if (window.scrollY >= 20) {
      setupdateNavbar(true);
    } else {
      setupdateNavbar(false);
    }
  }

  window.addEventListener("scroll",scrollView);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={updateNavbar ? "nav-blacked" : "navbar"}
    >
        <Container>
          <Navbar.Brand href="/" className="d-flex" style={{ marginRight: "30px" }} >Phillip Ly</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => {setExpand(expand ? false : "expanded");}}/>
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home" style={{ paddingLeft: "12px", paddingRight: "12px"}}>
          <Nav.Item style={{ paddingLeft: "14px", paddingRight: "14px"}}>
              <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ paddingLeft: "14px", paddingRight: "14px"}}>
              <Nav.Link as={Link} to="/about" onClick={() => setExpand(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ paddingLeft: "14px", paddingRight: "14px"}}>
              <Nav.Link as={Link} to="/projects" onClick={() => setExpand(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ paddingLeft: "14px", paddingRight: "14px"}}>
              <Nav.Link as={Link} to="/resume" onClick={() => setExpand(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
          </Nav.Item>
          <Nav.Item className="fork-button" style={{ paddingLeft: "16px", paddingRight: "14px",paddingTop: "2px"}}>
              <Button
                href="https://github.com/Pillbug23/Portfolio"
                target="_blank"
                className="fork-btn-inner"
                style={{ paddingLeft: "19px", paddingRight: "19px"}}
              >
                <CgGitFork style={{ fontSize: "22px" }} />
                <AiFillGithub style={{ fontSize: "22px" }} />
              </Button>
            </Nav.Item>
          </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Navigationbar;