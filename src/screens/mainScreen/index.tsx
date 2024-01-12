// modules
import React from 'react';
// components
import {Home, PetProjects, Works} from "../index";
import {Footer} from "../../components";
// utils
import transitionPages from "../../utils/transitionPages";

const MainScreen = () => {
    return (
        <>
            <Home/>
            <Works/>
            <PetProjects/>
            <Footer/>
        </>
    );
};

export default transitionPages(MainScreen);
