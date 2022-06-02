import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  const [showNav, setShowNav]= useState(false)

  const showNavigation = ()=>{
    setShowNav(!showNav)
  }


  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} setShowNav={setShowNav} showNav={showNav} />
      <Project currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
}

export default App;
