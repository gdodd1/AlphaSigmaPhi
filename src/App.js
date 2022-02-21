import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Prudential from "./pages/Prudential";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Calendar from "./pages/Calendar";
import Announcements from "./pages/Announcements";
//work
function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Prudential" element={<Prudential />} />
          <Route path="/About" element={<About />} /> 
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/Announcements" element={<Announcements />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;