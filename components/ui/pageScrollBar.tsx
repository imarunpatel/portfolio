"use client";
import React from "react";
import { motion, useScroll } from "motion/react";

const PageScrollBar = () => {
  const { scrollYProgress } = useScroll();

  return (
      <motion.div
        className="z-20"
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          originX: 0,
          backgroundColor: "#60a5fa",
        }}
      />
  );
};

export default PageScrollBar;
