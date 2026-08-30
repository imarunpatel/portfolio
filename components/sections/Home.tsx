import { SparklesCore } from "@/components/Sparkles";
import Button from "../Button";
import Heading from "../Heading";
import { ParallaxIcons } from "@/components/ParallexIcons";

const Home = () => {
  return (
    <div  className="flex min-h-screen flex-col  gap-5 px-3 md:px-14 py-2" id="welcome">
      <div className="flex-1 flex flex-col gap-5 justify-center pt-16">
        <div className="h-auto w-full flex flex-col overflow-hidden rounded-md">
          <Heading />
          <div className="w-auto md:w-[40rem] h-10 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] mx-auto sm:w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px mx-auto sm:w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] mx-auto sm:w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto h-px sm:w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bgs [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        <div className="text-neutral-300 text-md -mt-12 leading-7">
          {/* I have over 4 years of experience in designing, developing, and implementing scalable, responsive enterprise-level applications. Skilled at employing a configurable approach and creating common framework components to accelerate development and enhance maintainability. */}
          I graduated with a degree in Computer Science and have spent 6+ years building scalable, enterprise-grade web applications — including EMA (NHS UK), Digi VPC, and Galaxy Portal. I currently work on Talview&apos;s AI-powered hiring and proctoring platform, building secure, high-stakes assessment systems.
          <br/>
          <br/>
          My expertise spans React, Next.js, Angular, Node.js, TypeScript, GraphQL, PostgreSQL, and AWS. While I lean frontend, I work full-stack — designing APIs, integrating services, and owning features end-to-end from system design through deployment.
          <br/>
          {/* <br/>
          My work reflects my passion for crafting impactful web solutions that enhance user experiences while solving complex problems. I thrive in collaborative environments and continuously aim to deliver high-quality products that make a difference. */}
        </div>
        <Button />
      </div>
      <ParallaxIcons />
    </div>
  )
}

export default Home