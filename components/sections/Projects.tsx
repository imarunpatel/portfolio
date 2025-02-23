"use client";
import React, { useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/app/data/projectData";


const Projects = () => {
  const ref = useRef(null);

  return (
    <div ref={ref} className="px-3 md:px-14" >
      <h2 id="projects" className="py-10 flex justify-center left-0 top-[0px] dark:text-gray-100 font-bold text-xl md:text-4xl lg:text-4xl px-4 md:px-8 lg:px-10 leading-none dark:bg-black z-10">
        Projects
      </h2>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

export const projectsd = [
  {
    title: "Penny Track",
    description:
      "Developed a full-stack web app for tracking daily expenses with budget management.",
    link: "https://stripe.com",
  },
  {
    title: "Skills Track",
    description:
      "Developed a dynamic blog website using NextJS, with content management powered by Sanity",
    link: "https://netflix.com",
  },
  {
    title: "Royale Mount School",
    description:
      "Developed a comprehensive school management system consisting of a website for students and parents, an admin mobile app, and a robust backend infrastructure to streamline school operations.",
    link: "https://google.com",
  },
  {
    title: "Todo List",
    description:
      "Developed a dynamic and user-friendly To-do List application with advanced features, enabling users to create tasks, upload images, and manage task progress seamlessly.",
    link: "https://meta.com",
  },
];
