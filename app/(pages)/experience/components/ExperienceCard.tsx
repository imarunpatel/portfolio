import Link from "next/link";
import React, { FC } from "react";

export interface Experience {
  company: string;
  designation: string;
  isCurrent: boolean;
  url: string;
  duration: {
    start: string;
    end: string;
  };
  description: string;
  points: string[];
  skills: string[];
}

interface Props {
    data: Experience
}

const ExperienceCard: FC<Props> = (props) => {
  return (
    <div>
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <svg
          className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>
      <h3 className="flex justify-between items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        <Link
          href={props.data.url}
          target="_blank"
          className="hover:text-violet-600"
        >
          {props.data.company}
          <i className="fa-solid text-sm ml-1 fa-arrow-up-right-from-square"></i>
        </Link>
        <time>
          <span className="text-sm">{props.data.duration.start}</span> - 
          {props.data.isCurrent ? (
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                Present
            </span>
          ) : <span className="text-sm"> {props.data.duration.end}</span>}
        </time>
      </h3>
      <div className="block mb-2 text-md leading-none italic text-gray-700 font-semibold dark:text-gray-500">
        {props.data.designation}
      </div>
      <ul className="mb-4 text-base font-normal list-disc ml-4 text-gray-500 dark:text-gray-400">
        {props.data.points.map((point, index) => (
            <li key={index}>{point}</li>
        ))}
      </ul>
      <div className="text-gray-600">
        <span className="font-bold">Skills:</span> {props.data.skills.join(", ")}
      </div>
    </div>
  );
};

export default ExperienceCard;
