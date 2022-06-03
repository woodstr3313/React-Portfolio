import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import { useState } from "react";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  const [showNav, setShowNav]= useState(false)

  return (
    <div className="App">
  <Router basename={process.env.PUBLIC_URL}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} setShowNav={setShowNav} showNav={showNav} />
      {/* <Project currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
      <Routes>
      <Route exact path="/" element={<About/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/Portfolio"  element={<Portfolio/>}/>
      <Route exact path="/Resume" element={<Resume/>}/>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
