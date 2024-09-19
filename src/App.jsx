import Navbar from "./components/NavBar.jsx";
import About from "./components/About/About.jsx";
import Stack from "./components/Stack/Stack.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer /> 
    </Router>
  );
}

export default App;
