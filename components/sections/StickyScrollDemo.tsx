"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { StickyScroll } from "../ui/SticyScrollReveal";
import { motion, useAnimation, useInView } from "motion/react";
import PennyTrackImage from '../../public/images/pennyTrack.png';

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className=" flex-1 flex items-center justify-center text-white">
        <Image
          src={PennyTrackImage}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "-400px 0px 0px 0px"});

  useEffect(() => {
    if (isInView && ref.current) {
      console.log('hi', ref.current)
      const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
      // window.scrollTo({ top: elementTop, behavior: "smooth" })
      // ref.current?.scrollIntoView({behavior: "smooth", block: "start" });
      // window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isInView]);

  return (
    <div className="w-full" >
      <motion.div
        ref={ref}
        className="bg-blue-500"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="py-5 flex justify-center left-0 top-[0px] dark:text-gray-100 font-bold text-xl md:text-4xl lg:text-4xl px-4 md:px-8 lg:px-10 leading-none dark:bg-black z-10">
           Projects
        </h2>
        <StickyScroll content={content} />
      </motion.div>
    </div>
    // <div className="p">
    //   <h2 className="py-5 flex justify-center left-0 top-[0px] dark:text-gray-100 font-bold text-xl md:text-4xl lg:text-4xl px-4 md:px-8 lg:px-10 leading-none dark:bg-black z-10">
    //       Projects
    //     </h2>
    //   <StickyScroll content={content} />
    // </div>
  );
}
