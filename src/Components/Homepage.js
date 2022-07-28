import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import coverPhoto from '../Images/code_image.svg';
import indicator from '../Images/iOS.png';
import TypeWriterEffect from 'react-typewriter-effect';

function Homepage({scroller}) {
    const [display1,setDisplay1] = useState(true);
    const [display2,setDisplay2] = useState(false);

    function scrollView() {
      if (scroller.current.scrollY) {
        setDisplay1(false)
        setDisplay2(true)
      } else {
        setDisplay1(false)
      }
    };

    useEffect(() => {
      if (scroller.current) {
        scroller.current
          .getScrollElement()
          .addEventListener('scroll', scrollView);
      }
    }, [scroller]);

    return (
        <section>
      <Container fluid className="home-section-info" id="home">
        <Container className="home-content-info">
          <Row>
            <Col md={7} className="home-header tri-right left-in">
              <h1 style={{ paddingBottom: 20}} className="heading-name" >
                Hi everyone!&nbsp;
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="major">
                I'm
                <strong className="major-school"> Phillip Ly </strong>
              </h1>

              <div style={{padding: 35, textAlign: "left", paddingTop: 90}}>
                <TypeWriterEffect
                  textStyle={{
                    color: 'whitesmoke',
                    fontSize: '2.4em',
                    fontWeight: 500,
                  }}
                  startDelay={2000}
                  cursorColor="#3F3D56"
                  multiText={[
                    "Developer",
                    'MERN Stack Developer',
                    'Coding Enthusiast',
                    'Berkeley Graduate',
                    'Economics @ UC Berkeley',
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={50}
                />            
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
              I'd like to think if I can build this then I have at least learnt
              something 🛠
              <br />
              <br />I am fluent in 
              <i>
                <b> Javascript, Java, and Python. </b>
              </i>
              <br />
              <br />
              My field of interest is&nbsp;
                <b>Frontend </b>; I love being able to build software&nbsp; 
              <i> 
                <b>
                utilizes data visualization tools, building applicable software to improve lives, and implement creative and beautiful design.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I develop projects
              with <b>Node.js, JS frameworks like React.js</b> and
              <i>
                <b>
                  &nbsp;explore different React frameworks 
                </b>
              </i>
              &nbsp;like
              <i>
                <b> Bootstrap and MaterialUI</b>
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