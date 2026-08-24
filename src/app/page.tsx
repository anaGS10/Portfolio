import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Training from "@/components/Training";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      {/*<Training />*/}
      {/*<Projects />*/}
      {/* <Testimonials /> */}
      {/*<Skills />*/}
      <Contact />
    </>
  );
}