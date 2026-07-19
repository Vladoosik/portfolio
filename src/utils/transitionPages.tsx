// modules
import { motion } from "framer-motion";
import React, { ComponentType } from "react";
// styles
import "../App.css";

const transitionPages = (
  Component: ComponentType,
  transitionColor: string = "#03aaf1",
) => {
  return () => (
    <>
      <Component />
      <motion.div
        className={"slide-in"}
        initial={{ scaleY: 0, background: transitionColor }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.35, 1] }}
      />
      <motion.div
        className={"slide-out"}
        initial={{ scaleY: 1, background: transitionColor }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.35, 1] }}
      />
    </>
  );
};

export default transitionPages;
