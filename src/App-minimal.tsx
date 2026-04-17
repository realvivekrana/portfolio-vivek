// Minimal working App - no lazy loading, no complex dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarNew from "./components/portfolio/NavbarNew";
import HeroPremium from "./components/portfolio/HeroPremium";
import About from "./components/portfolio/About";
import SkillsNew from "./components/portfolio/SkillsNew";
import ProjectsNew from "./components/portfolio/ProjectsNew";
import ContactNew from "./components/portfolio/ContactNew";
import Footer from "./components/portfolio/Footer";

const NotFound = () => (
  <div style={{ 
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: '#050508',
    color: '#F0F0FF'
  }}>
    <h1>404 - Page Not Found</h1>
  </div>
);

const IndexPage = () => {
  return (
    <div className="overflow-x-hidden w-full" style={{ background: '#050508' }}>
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

const App = () => {
  console.log('🎨 Minimal App rendering...');

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
