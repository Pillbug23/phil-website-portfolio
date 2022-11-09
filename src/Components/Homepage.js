import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Homepage() {
  return (
    <section>
      <Container fluid className="home-section-info" id="home">
        <Container className="home-content-info">
          <Row>
            <Col md={7} className="home-header tri-right left-in">
              <h4 className="major" style={{ color: "#64ffda" }}>
                Hi, my name is
              </h4>

              <div
                style={{
                  padding: 32,
                  textAlign: "left",
                  paddingTop: 10,
                }}
              >
                <h1 style={{ fontSize: "3.5em" }}>Phillip Ly</h1>
                <h1 style={{ fontSize: "3.3em" }}>Economics @ UC Berkeley</h1>
              </div>
              <div style={{ padding: 35, textAlign: "left", paddingTop: 2 }}>
                <p style={{ fontSize: "1.0em" }}>
                  {" "}
                  I'm an aspiring software engineer specializing in frontend and
                  full-stack development. Currently, I'm focused on building
                  accessible and unique products and learning new technologies
                  like Next.js and Typescript.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Homepage;
