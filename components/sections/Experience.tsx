'use client';
import React, { useRef, useState } from "react";
import experiences from "@/app/data/experienceData";
import ExperienceCard from "@/app/(pages)/experience/components/ExperienceCard";
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { BackgroundBeamsWithCollision } from "../ui/BackgroundBeamsWithCollision";

const Experience = () => {
  const ref = useRef(null);
  const [percentage, setPercentage] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref})
  const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100])

  useMotionValueEvent(scrollPercentage, "change", (latest) => {
    setPercentage(Math.round(latest));
  });
  return (
    
    
    
    
    <BackgroundBeamsWithCollision className=" py-4 px-3 md:px-14 h-screen">
        <section className="" ref={ref}>
          <div className="flex justify-start items-start font-['neuton'] gap-2 sticky left-0 top-[2px] bg-black z-10 dark:text-gray-300">
            <h1 className="text-4xl font-bold">Experience</h1>
            <motion.pre className="text-md border-[1px] px-1 border-gray-50 py rounded-lg">{percentage}%</motion.pre>
          </div>
          </section>
      {/* <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        What&apos;s cooler than Beams?{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Exploding beams.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Exploding beams.</span>
          </div>
        </div>
      </h2> */}
    </BackgroundBeamsWithCollision>
      
  );
};

export default Experience;


{/* <div className="pl-3">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {experiences.map((experience, index) => (
            <li key={index} className="mb-10 ms-6">
              <ExperienceCard data={experience} />
            </li>
          ))}
        </ol>
      </div> */}

const processCircle: React.CSSProperties = {
  strokeDashoffset: 0,
  strokeWidth: 2,
  fill: "none",
}



const progressIconIndicator: React.CSSProperties = {
  ...processCircle,
  strokeDashoffset: 0,
  strokeWidth: 2,
  fill: "none",
}

const progressIcon: React.CSSProperties = {
  ...processCircle,
  transform: "translateX(-100px) rotate(-90deg)",
  stroke: "green",
}


const progressIconBg: React.CSSProperties = {
  opacity: 0.2,
}
