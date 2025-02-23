"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const testimonials = [
  { id: 1, text: "Amazing service!", name: "John Doe" },
  { id: 2, text: "Highly recommend!", name: "Jane Smith" },
  { id: 3, text: "Great experience!", name: "Michael Lee" },
  { id: 4, text: "Very satisfied!", name: "Emily Davis" },
];

export default function TestimonialCarousel() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        ease: "linear",
        duration: 10, // Adjust speed
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div className="overflow-hidden relative w-full bg-gray-100 p-6">
      <motion.div
        className="flex space-x-6"
        animate={controls}
        whileHover={{ x: "0%" }} // Stops scrolling on hover
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 min-w-[250px] text-center"
          >
            <p className="text-gray-600">&quot;{testimonial.text}&quot;</p>
            <p className="text-gray-900 font-semibold mt-2">
              - {testimonial.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
