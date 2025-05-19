import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Education/Education";
import Achievements from "./pages/Achievements/Achievements";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer"
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
