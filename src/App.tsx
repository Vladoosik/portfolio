// modules
import React from "react";
// styles
import "./App.css";
// screens
import {Footer, Home, PetProjects, Works} from "./screens";

function App() {
    return (
        <>
            <Home/>
            <Works/>
            <PetProjects/>
            <Footer/>
        </>
    );
}

export default App;
