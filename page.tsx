import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Competencies from "@/components/sections/Competencies";
import TechSkills from "@/components/sections/TechSkills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export default function Home() {
  return (
    <Providers>
      <Preloader />
      <Navbar />
      <main id="main" className="relative overflow-x-clip">
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Competencies />
        <TechSkills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </Providers>
  );
}
