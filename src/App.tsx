// modules
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// styles
import "./App.css";
// screens
import { ForDreamCase, MainScreen, MyStatusCase, PlannerCase } from "./screens";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode={"wait"}>
        <Routes location={location} key={location.pathname}>
          <Route index path={"/"} element={<MainScreen />} />
          <Route path={"/forDream"} element={<ForDreamCase />} />
          <Route path={"/myStatus"} element={<MyStatusCase />} />
          <Route path={"/kloki"} element={<PlannerCase />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
