import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Journey from "@/components/portfolio/Journey";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import LoadingScreen from "@/components/portfolio/LoadingScreen";

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
