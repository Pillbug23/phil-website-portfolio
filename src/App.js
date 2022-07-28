import './App.css';
import {useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router,Link,Route, Routes,Navigate} from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import AboutMe from './Components/AboutMe';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Misc from './Components/Misc';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  const ref = useRef();
  const [scroll,setScroll] = useState(0);
  
  return (
    <SimpleBar style={{maxHeight: "100vh",backgroundColor: "whitesmoke"}} forceVisible="y" ref={ref} autoHide={false}>
      <Router>
        <div className="App">
          <Navigationbar scroller={ref}></Navigationbar>
          <Routes>
            <Route path="/" element={<Homepage scroller={ref}/>}/>
            <Route path="/about" element={<AboutMe/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/misc" element={<Misc/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </SimpleBar>
  );
}

export default App;