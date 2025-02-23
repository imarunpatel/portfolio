'use client';
import React, { useRef } from "react";

import { Timeline } from "../ui/Timeline";

const data = [
  {
    title: "HDFC Life Insurance, Banglore",
    start: 'Jan 2024',
    end: 'Present',
    content: (
      <div className="mb-10">
        <p className=" dark:text-blue-600 text-xs md:text-sm font-normal mb-4">
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
    start: 'Mar 2021',
    end: 'Dec 2023',
    content: (
      <div className="mb-10">
        <p className="text-neutral-800 dark:text-blue-600 text-xs md:text-sm font-normal mb-4">
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
    start: 'Sep 2020',
    end: 'Dec 2020',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-blue-600 text-xs md:text-sm font-normal mb-4">
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

const Experience = () => {
  const ref = useRef(null);

  return (
    <div ref={ref} id="experience">
        <h2 className="py-10 flex justify-center left-0 top-[0px] dark:text-gray-100 font-bold text-xl md:text-4xl lg:text-4xl px-4 md:px-8 lg:px-10 leading-none dark:bg-black z-10">
          Experience
        </h2>
        <div className="w-full">
          <Timeline data={data} />
        </div>
    </div>
      
  );
};

export default Experience;
