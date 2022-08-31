import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import coverPhoto from '../Images/code_image.svg';
import indicator from '../Images/iOS.png';
import TypeWriterEffect from 'react-typewriter-effect';

function Homepage() {
    const [display1,setDisplay1] = useState(true);
    const [display2,setDisplay2] = useState(false);

    function scrollView() {
      if (window.scrollY >= 7) {
        setDisplay1(false)
        setDisplay2(true)
      } else {
        setDisplay1(true)
        setDisplay2(false)
      }
    };
    window.addEventListener("scroll",scrollView);

    return (
        <section>
      <Container fluid className="home-section-info" id="home">
        <Container className="home-content-info">
          <Row>
            <Col md={7} className="home-header tri-right left-in">
              <h1 className="major">
                I'm
                <strong className="major-school"> Phillip Ly </strong>
              </h1>

              <div style={{padding: 35, textAlign: "left", paddingTop: 90}}>
                <h1>Front end developer, Economics at UC Berkeley</h1>            
              </div>

            </Col>
            
            <Col md={5} style={{ paddingBottom: 20}}>
              <img
                src={coverPhoto}
                alt="generic-pic"
                className="img-fluid"
                style={{ maxHeight: "550px",paddingTop: 30}}
              />
            </Col>
            
          </Row>
          
          {display1 && (
          <Row>
          <Col md={5} style={{ paddingBottom: 70}}>
              <img
                src={indicator}
                alt="generic-pic"
                className="img-fluid"
                style={{ maxHeight: "550px",paddingTop: 70}}
              />
            </Col>
          </Row>)}

          {display2 && (
            <div>
          <Row>
          <Col md={8} className="home-about-section">
            <h1 style={{ fontSize: "2.6em" }}>
              A little about myself...
            </h1>
            <p className="home-about-body">
              I'd like to think if I can build this then I have at least learned
              something 🛠
              <br />
              <br />I am fluent in 
              <i>
                <b> JavaScript, Java, and Python. </b>
              </i>
              <br />
              <br />
              My field of interest is&nbsp;
                <b>Frontend </b>; I love being able to build software that&nbsp; 
              <i> 
                <b>
                utilizes data visualization tools, building applicable software that improve lives, and implement creative and beautiful design.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I develop projects
              using technologies like <b>Node.js, JS frameworks like React.js</b> and
              <i>
                <b>
                  &nbsp;utilizing different React UI frameworks 
                </b>
              </i>
              &nbsp;like
              <i>
                <b> React Bootstrap and MaterialUI.</b>
              </i>
            </p>
          </Col>
        </Row>
        </div>
        )}
        </Container>
      </Container>
    </section>
    );
};

export default Homepage;