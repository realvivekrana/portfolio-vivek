import NavbarNew from "@/components/portfolio/NavbarNew";
import HeroNew from "@/components/portfolio/HeroNew";
import About from "@/components/portfolio/About";
import SkillsNew from "@/components/portfolio/SkillsNew";
import ProjectsNew from "@/components/portfolio/ProjectsNew";
import ContactNew from "@/components/portfolio/ContactNew";
import Footer from "@/components/portfolio/Footer";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import AnimatedBackground from "@/components/portfolio/AnimatedBackground";

const IndexNew = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <AnimatedBackground />
      <LoadingScreen />
      <NavbarNew />
      <main className="w-full">
        <HeroNew />
        <About />
        <SkillsNew />
        <ProjectsNew />
        <ContactNew />
      </main>
      <Footer />
    </div>
  );
};

export default IndexNew;
