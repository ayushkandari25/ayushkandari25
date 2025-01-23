import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "../Components/Home";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Resume from "../Components/Resume";

function PortfolioRoutes(){
return(
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Skills' element={<Skills/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Resume' element={<Resume/>}></Route>
    </Routes>
    </>
    )
};

export default PortfolioRoutes;