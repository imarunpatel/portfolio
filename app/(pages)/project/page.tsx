import React from "react";
import ProjectCard, { Project } from "./components/ProjectCard";

const projects: Project[] = [
  {
    name: "Skills Track",
    description: "",
    points: [
      "Developed a full-stack web app for tracking daily expenses with budget management",
      "Built the frontend with ReactJS, enabling category-based expense tracking and budget setting with graphics insight",
      "Leveraged a serverless Node.js backend on AWS for efficient, scalable data handling",
    ],
    techStack: {
      frontend: ["ReactJS", "Tailwind CSS", "Zustand"],
      backend: ["Node.js", "AWS Serverless Architecture", "TypeScript"],
    },
    image: "/images/rms.png",
  },
  {
    name: "Skills Track",
    description: "",
    points: [
      "Developed a dynamic blog website using NextJS, with content management powered by Sanity",
      "Implemented Sanity's collaborative editing features, allowing multiple authors to work simultaneously on articles.",
    ],
    techStack: {
      frontend: ["NextJS", "TailwindCSS"],
      backend: ["Sanity"],
    },
    image: "/images/skillsTrack.png",
  },
];

const Page = () => {
  return (
    <div className="h-full px-7 py-4">
      <h1 className="text-3xl font-bold pb-4">Projects</h1>
      <hr className="mb-8" />

      {projects.map((project, index) => (
        <ProjectCard key={index} data={project} />
      ))}
    </div>
  );
};

export default Page;
