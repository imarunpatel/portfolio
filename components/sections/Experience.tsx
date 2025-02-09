import React from "react";
import experiences from "@/app/data/experienceData";
import ExperienceCard from "@/app/(pages)/experience/components/ExperienceCard";


const Page = () => {
  return (
    <div className="h-full py-4">
      <h1 className="text-xl font-bold pb-4">Experience</h1>
      <hr className="mb-4" />
      <div className="pl-3 dark:bg-red-300">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {experiences.map((experience, index) => (
            <li key={index} className="mb-10 ms-6">
              <ExperienceCard data={experience} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Page;
