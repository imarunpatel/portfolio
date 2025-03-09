"use client";

import { FC } from "react";
import ImageSlider from "./ImageSlider";

interface Props {
    designation: string;
    points: Array<string | string[]>;
    images: {
        title: string;
        src: string;
    }[]
}
const Content: FC<Props> = (props) => {
    return (
      <div className="mb-10">
        <p className=" dark:text-blue-600 text-xs md:text-sm font-normal mb-4">
        {props.designation}
        </p>
        <div className="flex flex-col lg:flex-row gap-8">
          <ul className="dark:text-gray-300 list-disc leading-7">
            {
              props.points.map((item, index) => (
                !Array.isArray(item) ? (
                  <li key={index}>{item}</li>
                ) : (
                <ul  key={index} className="list-disc pl-5"> 
                    { item.map((subpoint, i) => (
                      <li key={`${index}-${i}`}>{subpoint}</li>
                      ))} 
                </ul>
                )
              ))
            }
          </ul>
          {/* {props.images.length && <StackImageAnimation data={props.images} autoplay />} */}
          {props.images.length && <ImageSlider images={props.images} transition="fade" interval={5000} /> }
        </div>
      </div>
    )
  }

  export default Content;