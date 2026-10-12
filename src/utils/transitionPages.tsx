// modules
import { motion, useIsPresent } from "framer-motion";
import React, { ComponentType, useState } from "react";
// styles
import "../App.css";

const transitionPages = (
  Component: ComponentType,
  transitionColor: string = "#03aaf1",
) => {
  const Page = () => {
    // false while the page is leaving, this is when the "slide-in" cover closes the screen
    const isPresent = useIsPresent();
    const [entered, setEntered] = useState<boolean>(false);

    // A cover is rendered only while it moves: Safari tints its top and bottom
    // bars with the color of fixed elements that stay at the screen edges.
    return (
      <>
        <Component />
        <motion.div
          className={"slide-in"}
          style={{ display: isPresent ? "none" : "block" }}
          initial={{ scaleY: 0, background: transitionColor }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.35, 1] }}
        />
        <motion.div
          className={"slide-out"}
          style={{ display: entered ? "none" : "block" }}
          initial={{ scaleY: 1, background: transitionColor }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.35, 1] }}
          onAnimationComplete={() => setEntered(true)}
        />
      </>
    );
  };

  return Page;
};

export default transitionPages;
