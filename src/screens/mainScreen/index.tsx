// modules
import React from 'react';
// components
import {Home, PetProjects, Works} from "../index";
import {Footer} from "../../components";
// utils
import transitionPages from "../../utils/transitionPages";
import {usePageMeta} from "../../utils/usePageMeta";

const MainScreen = () => {
    usePageMeta(
        "Vlad Khrushchov — Full-Stack Developer",
        "Vlad Khrushchov — Full-Stack Developer (React Native, NestJS). Mobile apps, admin panels, backend.",
    );

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
