// modules
import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
// styles
import "./App.css";
// screens
import {CatchyWebCase, ForDreamCase, MainScreen, MyStatusCase} from "./screens";
import {AnimatePresence} from "framer-motion";

function App() {
    const location = useLocation();
    return (
        <>
            <AnimatePresence mode={'wait'}>
                <Routes location={location} key={location.pathname}>
                    <Route index path={'/'} element={<MainScreen/>}/>
                    <Route path={'/forDream'} element={<ForDreamCase/>}/>
                    <Route path={'/myStatus'} element={<MyStatusCase/>}/>
                    <Route path={'/catchyWeb'} element={<CatchyWebCase/>}/>
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default App;
