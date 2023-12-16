import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/home";
import About from "./About/About.jsx";
import About_Summary from "./About/About_Summary.jsx";
import Nav from "./Nav/nav";
import Footer from "./Nav/Footer.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="NAV">
        <Nav />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About_Summary />} />
        {/* <Route exact path="/" element={<Nav />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
