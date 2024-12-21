"use client";

import Button from "./components/Button";

export default function Home() {
  return (
    <div  className="flex flex-col justify-center gap-5 h-full px-14 py-2">
      <div className="font-bold">
        Hello 👋 , I am
      </div>
      <h1 className="text-3xl font-bold">Arun Patel</h1>
      <h2 className="font-bold">I am a Passionate Frontend Developer</h2>
      <div className="text-">
        {/* I have over 4 years of experience in designing, developing, and implementing scalable, responsive enterprise-level applications. Skilled at employing a configurable approach and creating common framework components to accelerate development and enhance maintainability. */}
        {/* Hello 
        <br/> */}
        I graduated with a degree in Computer Science and have built a strong foundation as a Frontend Engineer. Over the years, I have worked on diverse and impactful projects such as EMA, Digi VPC, Galaxy, etc, where I contributed to building scalable, user-centric web applications.
        <br/>
        <br/>
        In my current role, I specialize in creating seamless user interfaces while ensuring high performance and usability. My expertise spans React, Angular, AWS, System Design, and Web Components, Data Structure and Algoriths. Additionally, 
        I have a solid understanding of backend technologies, which allows me to bridge the gap between frontend and backend effectively. This understanding enables me to design efficient APIs, integrate services, and ensure smooth end-to-end application workflows.
        <br/>
        <br/>
        My work reflects my passion for crafting impactful web solutions that enhance user experiences while solving complex problems. I thrive in collaborative environments and continuously aim to deliver high-quality products that make a difference.
      </div>
      <Button title="Download Resume" onClick={() => {}} />
    </div>
  );
}
