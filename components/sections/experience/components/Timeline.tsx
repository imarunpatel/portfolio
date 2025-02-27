"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { FC, useEffect, useRef, useState } from "react";
import Content from "./Content";
import { Experience } from "@/model/experience";


export const Timeline: FC<{data: Experience[]}> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={`w-full`}
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto">
        {props.data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start md:gap-5"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-10 w-full">
                <div className="h-4 w-4 left-0 top-2 absolute rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
            </div>

            <div className="relative">
              <h3 className="font-[neuton] sm:flex justify-between items-center text-lg sm:text-2xl md:text-2xl mb-0 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.company} <div className="my-2 sm:my-0 text-end ml-auto text-sm md:text-lg"><span>{item.duration.start}</span> - {item.duration.end === 'Present' ? <span className="text-blue-600 bg-gray-300 px-3 py-1 rounded-md text-sm">{item.duration.end}</span> : <span>{item.duration.end}</span>}</div>
              </h3>
              <Content designation={item.designation} points={item.points} images={item.images} />
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-2 left-2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};


