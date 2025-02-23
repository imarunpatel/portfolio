import { SparklesCore } from "@/components/ui/sparkles";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import { ParallaxIcons } from "@/components/ui/ParallexText";

const Home = () => {
  return (
    <div  className="flex min-h-screen flex-col  gap-5 px-3 md:px-14 py-2" id="welcome">
      {/* <div className="h-[56px] w-full bg-red-50"></div> */}
    {/* <Image className="text-white" src={Logo} alt="" width={100} height={100} /> */}
      <div className="flex-1 flex flex-col gap-5 justify-center">
        <div className="h-auto w-full flex flex-col overflow-hidden rounded-md">
          <Heading />
          <div className="w-auto md:w-[40rem] h-10 relative ">
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
        <div className="text-gray-300 text-md -mt-12">
          {/* I have over 4 years of experience in designing, developing, and implementing scalable, responsive enterprise-level applications. Skilled at employing a configurable approach and creating common framework components to accelerate development and enhance maintainability. */}
          I graduated with a degree in Computer Science and have built a strong foundation as a Frontend Engineer. Over the years, I have worked on diverse and impactful projects such as EMA, Digi VPC, Galaxy, etc, where I contributed to building scalable, user-centric web applications.
          <br/>
          <br/>
          In my current role, I specialize in creating seamless user interfaces while ensuring high performance and usability. My expertise spans React, Angular, AWS, System Design, and Web Components, Data Structure and Algoriths. Additionally, 
          I have a solid understanding of backend technologies, which allows me to bridge the gap between frontend and backend effectively. This understanding enables me to design efficient APIs, integrate services, and ensure smooth end-to-end application workflows.
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