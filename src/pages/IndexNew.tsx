import { lazy, Suspense } from "react";
import NavbarNew from "@/components/portfolio/NavbarNew";
import HeroPremium from "@/components/portfolio/HeroPremium";

// Lazy load below-the-fold components
const About = lazy(() => import("@/components/portfolio/About"));
const SkillsNew = lazy(() => import("@/components/portfolio/SkillsNew"));
const ProjectsNew = lazy(() => import("@/components/portfolio/ProjectsNew"));
const ContactNew = lazy(() => import("@/components/portfolio/ContactNew"));
const Footer = lazy(() => import("@/components/portfolio/Footer"));

// Section loading fallback
const SectionLoader = () => (
  <div style={{
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4F8EF7',
    fontSize: '12px',
    letterSpacing: '0.1em'
  }}>
    Loading...
  </div>
);

const IndexNew = () => {
  return (
    <div className="overflow-x-hidden w-full" style={{ background: '#050508' }}>
      <NavbarNew />
      
      <main className="w-full relative z-10">
        <HeroPremium />
        
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <SkillsNew />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ProjectsNew />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ContactNew />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default IndexNew;
