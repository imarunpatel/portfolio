
import Contact from "@/components/sections/Contact";
import Home from "./(pages)/Home";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import { StickyScrollRevealDemo } from "@/components/sections/StickyScrollDemo";
import Footer from "@/components/Footer";
import { sections } from "@/components/Header";


export default function Page() {
  return (
    <>
      <Home />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
