import NavbarNew from "@/components/portfolio/NavbarNew";
import HeroPremium from "@/components/portfolio/HeroPremium";
import About from "@/components/portfolio/About";
import SkillsNew from "@/components/portfolio/SkillsNew";
import ProjectsNew from "@/components/portfolio/ProjectsNew";
import ContactNew from "@/components/portfolio/ContactNew";
import Footer from "@/components/portfolio/Footer";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import ParticleField from "@/components/ParticleField";

const IndexNew = () => {
  return (
    <div className="overflow-x-hidden w-full" style={{ background: '#050508' }}>
      <CustomCursor />
      <ParticleField />
      <LoadingScreen />
      <NavbarNew />
      <main className="w-full relative z-10">
        <HeroPremium />
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
