"use client";
import React, { useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/app/data/projectData";
import SectionHeading from "../SectionHeading";


const Projects = () => {
  const ref = useRef(null);

  return (
    <div ref={ref} id="projects" className="px-3 md:px-14">
      <SectionHeading title="Project." />
      {projects.map((project, index) => (
        <ProjectCard key={index} data={project} />
      ))}
    </div>
  );
};

export default Projects;