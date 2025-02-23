import Image from "next/image";
import React, { FC } from "react";

export interface Project {
  name: string;
  description: string;
  points: string[];
  techStack: {
    frontend: string[];
    backend: string[];
  };
  image: string;
  link: string;
}
interface Props {
  data: Project;
}

const ProjectCard: FC<Props> = (props) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row shadow-sm shadow-gray-600 rounded-md p-3 mb-6 md:mb-12 last-of-type:mb-0">
      <div className="flex-1">
        <h5 className="mb-2 text-lg sm:text-2xl md:text-2xl font-bold tracking-tight text-neutral-500 dark:text-neutral-500">
          <a href={props.data.link} target="_blank" className="flex items-center gap-2 hover:text-blue-600">{props.data.name} <i className="fa-solid text-sm fa-arrow-up-right-from-square"></i></a>
        </h5>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-300">
          <div>{props.data.description}</div>
          <ul className="list-disc ml-4">
            {props.data.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <div className="flex gap-1 mt-2">
            <span className="font-bold">Frontend: </span>
            {props.data.techStack.frontend.map((tech, index) => (
              <span key={index}>{tech}{index+1 !== props.data.techStack.frontend.length && ','}</span>
            ))}
          </div>
          <div className="flex gap-1">
            <span className="font-bold">Backend: </span>
            {props.data.techStack.backend.map((tech, index) => (
              <span key={index}>{tech}{index+1 !== props.data.techStack.backend.length && ','}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center  rounded-lg overflow-hidden">
        <Image
          // layout="responsive"
          className="object-cover w-full"
          src={props.data.image}
          width={1}
          height={1}
          alt="Project Image"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
