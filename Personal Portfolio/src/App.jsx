import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/home";
import About from "./About/About.jsx";
import About_Summary from "./About/About_Summary.jsx";
import Nav from "./Nav/nav";
import Footer from "./Nav/Footer.jsx";
import Contact_Me from "./Contact_Me/Contact.jsx";
import Work from "./Work/work.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WorksProvider from "./Work/WorksProvider.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <WorksProvider>
      <div className="App">
        <div className="NAV">
          <Nav />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About_Summary />} />
          <Route exact path="/credentials" element={<About />} />
          <Route exact path="/contact" element={<Contact_Me />} />
          <Route exact path="/works" element={<Work />} />
          {/* <Route exact path="/" element={<Nav />} /> */}
        </Routes>
        <Footer />
      </div>
    </WorksProvider>
  );
}

export default App;
