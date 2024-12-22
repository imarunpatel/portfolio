import React from "react";
import ProjectCard from "./components/ProjectCard";
import projects from "@/app/data/projectData";


const Page = () => {
  return (
    <div className="h-full py-4">
      <h1 className="text-xl font-bold pb-4">Projects</h1>
      <hr className="mb-4" />

      {projects.map((project, index) => (
        <ProjectCard key={index} data={project} />
      ))}
    </div>
  );
};

export default Page;
