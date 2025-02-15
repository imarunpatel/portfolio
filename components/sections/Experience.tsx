'use client';
import React, { useRef, useState } from "react";
// import experiences from "@/app/data/experienceData";
import ExperienceCard from "@/app/(pages)/experience/components/ExperienceCard";
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { BackgroundBeamsWithCollision } from "../ui/BackgroundBeamsWithCollision";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { Timeline } from "../ui/Timeline";


const experiences = [
  { title: "Frontend Engineer", company: "Company A", description: "Worked on UI/UX..." },
  { title: "Software Engineer", company: "Company B", description: "Built scalable apps..." },
  { title: "Tech Lead", company: "Company C", description: "Led a frontend team..." },
];

const Experience = () => {
  const ref = useRef(null);
  const [percentage, setPercentage] = useState(0);

  // const { scrollYProgress } = useScroll();
  // const [index, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref})
  const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100])

  useMotionValueEvent(scrollPercentage, "change", (latest) => {
    setPercentage(Math.round(latest));
  });

  

  // const handleScroll = (event: React.WheelEvent) => {
  //   if (event.deltaY > 0 && index < experiences.length - 1) {
  //     setIndex((prev) => prev + 1);
  //   } else if (event.deltaY < 0 && index > 0) {
  //     setIndex((prev) => prev - 1);
  //   }
  // };

  return (
    <div ref={ref} >
        <h2 className="sticky flex justify-center left-0 top-[0px] md:text-4xl lg:text-4xl font- px-4 md:px-8 lg:px-10 leading-none dark:bg-black z-10">
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Experience</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">Experience</span>
              </div>
          </div>
        </h2>
      <TimelineDemo />
    </div>
      
  );
};

export default Experience;


export function TimelineDemo() {
  const data = [
    {
      title: "HDFC Life Insurance, Banglore",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Software Development Engineer - Frontend
          </p>
          <ul className="dark:text-gray-300 list-disc">
            <li>
              Designed and implemented face detection with eye blink detection in frontend, followed by real-time video recording. This feature reduced the liveliness verification failure rate from 33% to under 1%
            </li>
            <li>
              Lead the frontend system design architecture, optimizing scalability and performance across projects and enhancing reliability and user experience.
            </li>
            <li>
              AI Platform Dashboard: Developed a dashboard with advanced features: PDF upload and automatic summary generation, Interactive question-answering from uploaded PDFs, Audio upload with accurate transcription capabilities, etc.
            </li>
            <li>
              Data-Driven Dashboards: Worked on multiple dashboards, delivering insightful and user-friendly interfaces for data analysis and management.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Parallel Reality, UK (Remote)",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Software Development Engineer
          </p>
          <ul className="dark:text-gray-300 list-disc">
            <li>
              Led the front-end development for the EMA project, a ground-breaking Electronic Medical Assistant platform designed for NHS UK.
            </li>
            <li>
              Developed and maintained various components of the EMA system, including admin, representative, and doctor dashboards and developed and integrated RESTful APIs for seamless data handling and communication.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "SimplyTurn Technology, Hyderabad (Remote)",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Software Development Intern
          </p>
          <ul className="dark:text-gray-300 list-disc">
            <li>
              Developed high-performance, reusable components for the HRMS dashboard, enhancing the user experience and functionality. Collaborated with cross-functional teams to implement UI designs, ensuring project requirements.
            </li>
            <li>
              Integrated RESTful APIs to enable seamless data flow and improve system performance.
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

