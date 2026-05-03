import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarNew from "./components/portfolio/NavbarNew";
import HeroPremium from "./components/portfolio/HeroPremium";
import About from "./components/portfolio/About";
import SkillsNew from "./components/portfolio/SkillsNew";
import ProjectsNew from "./components/portfolio/ProjectsNew";
import ContactNew from "./components/portfolio/ContactNew";
import Footer from "./components/portfolio/Footer";

const NotFound = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#050508",
      color: "#F0F0FF",
      fontFamily: "Inter, sans-serif",
      gap: "1rem",
    }}
  >
    <span style={{ fontSize: "4rem", fontWeight: 900, color: "#4F8EF7" }}>404</span>
    <p style={{ color: "#8888AA" }}>Page not found</p>
    <a
      href="/"
      style={{
        padding: "0.6rem 1.5rem",
        borderRadius: "9999px",
        background: "linear-gradient(135deg,#4F8EF7,#9B5DE5)",
        color: "#fff",
        fontWeight: 600,
        fontSize: "0.875rem",
      }}
    >
      Go Home
    </a>
  </div>
);

const IndexPage = () => (
  <div className="overflow-x-hidden w-full" style={{ background: "#050508" }}>
    <NavbarNew />
    <main className="w-full">
      <HeroPremium />
      <About />
      <SkillsNew />
      <ProjectsNew />
      <ContactNew />
    </main>
    <Footer />
  </div>
);

const App = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
