'use client';
import React from "react";

import { Timeline } from "./components/Timeline";
import SectionHeading from "../../SectionHeading";
import experiences from "@/app/data/experienceData";

const Experience = () => {

  return (
    <div id="experience" className="w-full px-3 md:px-14">
        <SectionHeading title="Experience." />
        <Timeline data={experiences} />
    </div>
      
  );
};

export default Experience;

