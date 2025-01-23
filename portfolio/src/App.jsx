import React from "react"
import NavbarRoutes from "./Routes/NavbarRoutes"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import "./index.css";


function App() {
  return (
    <>
    <Navbar/>
    <NavbarRoutes/>
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Resume />
    </>
  )
}

export default App
