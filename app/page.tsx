"use client";

import Button from "./components/Button";

export default function Home() {
  return (
    <div  className="flex flex-col justify-center gap-5 h-full px-14 py-2">
      <div>
        Hello, I am
      </div>
      <h1 className="text-3xl font-bold">Arun Patel</h1>
      <h2 className="font-bold">I am a Passionate Frontend Developer</h2>
      <div className="text-">
        I have over 4 years of experience in designing, developing, and implementing scalable, responsive enterprise-level applications. Skilled at employing a configurable approach and creating common framework components to accelerate development and enhance maintainability.
      </div>
      <Button onClick={() => {}} />
    </div>
  );
}
