// modules
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// styles
import "./App.css";
// screens
import {
  IDriverCase,
  MainScreen,
  PlannerCase,
  VoiceNotesCase,
} from "./screens";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode={"wait"}>
        <Routes location={location} key={location.pathname}>
          <Route index path={"/"} element={<MainScreen />} />
          <Route path={"/idriver"} element={<IDriverCase />} />
          <Route path={"/voiceNotes"} element={<VoiceNotesCase />} />
          <Route path={"/kloki"} element={<PlannerCase />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
