"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { ImageCard } from "./ImageCard";

interface Props {
  items: {
    url: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
  
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
  
        getDirection();
        getSpeed();
        setStart(true);
      }
    }
    addAnimation();
  }, []);

  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-96 max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 overflow-hidden md:w-96"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={idx}
          >
            <div>
              <div aria-hidden="true" className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              {/* <Image src={imageUrl} alt="Test" width={100} height={100} className="w-full"/>
              <div className="absolute hover:hidden bottom-0">
                dfksdlk
              </div> */}
              <ImageCard imageUrl={item.url}>
                  <p className="font-bold text-lg">{item.title}</p>
                  {/* <p className="font-normal text-sm">$1299 / night</p> */}
                </ImageCard>
              {/* <div className="h-[40rem] relative  flex items-center justify-center">
                <ImageCard imageUrl={imageUrl}>
                  <p className="font-bold text-xl">In the mountains</p>
                  <p className="font-normal text-sm">$1299 / night</p>
                </ImageCard>
              </div> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
