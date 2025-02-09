"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxIcons() {
  const { scrollY } = useScroll();

  // Infinite scrolling effect: moves left when scrolling down
  const x = useTransform(scrollY, [0, 6000], ["0%", "-100%"]);

  return (
    <div className="overflow-hidden  tracking-tight bg-pink-20d0 pb-8 pt-2 leading-[0.8] whitespace-nowrap flex flex-nowrap w-full">
      <motion.div
        className="flex space-x-8 text-xl text-gray-800 dark:text-gray-300 w-max"
        style={{ x }} // Moves icons left
      >
        {/* Duplicate icons for seamless loop */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex space-x-8">
            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-angular"></i>
            <i className="fa-brands fa-node-js"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-js"></i>
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-aws"></i>
            <i className="fa-brands fa-bootstrap"></i>
            <div className="w-[2px] h-full bg-green-700"></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
