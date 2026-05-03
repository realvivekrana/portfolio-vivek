import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavbarNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const sections = navItems.map(i => i.href.slice(1));
      const current = sections.find(s => {
        const el = document.getElementById(s);
        if (el) {
          const r = el.getBoundingClientRect();
          return r.top <= 120 && r.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={isScrolled ? {
          background: "rgba(5,5,8,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(79,142,247,0.1)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
        } : { background: "transparent" }}
      >
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={e => { e.preventDefault(); scrollTo("#home"); }}
              whileTap={{ scale: 0.95 }}
              className="text-xl sm:text-2xl font-black tracking-tight"
              style={{
                background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              VR
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={e => { e.preventDefault(); scrollTo(item.href); }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeSection === item.href.slice(1)
                      ? "text-[#4F8EF7]"
                      : "text-[#8888AA] hover:text-white"
                  }`}
                >
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-[#4F8EF7]/10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="ml-3 w-9 h-9 rounded-full flex items-center justify-center text-[#8888AA] hover:text-white transition-colors"
                style={{ background: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.2)" }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            </div>

            {/* Mobile: theme + hamburger */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#8888AA]"
                style={{ background: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.15)" }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Moon size={15} /> : <Sun size={15} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white"
                style={{ background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.2)" }}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-50 md:hidden flex flex-col"
              style={{
                width: "min(280px, 85vw)",
                background: "rgba(8,8,16,0.97)",
                backdropFilter: "blur(20px)",
                borderLeft: "1px solid rgba(79,142,247,0.15)",
              }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <span
                  className="text-lg font-black"
                  style={{
                    background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  VR
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[#8888AA] hover:text-white"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={e => { e.preventDefault(); scrollTo(item.href); }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold transition-all ${
                      activeSection === item.href.slice(1)
                        ? "text-[#4F8EF7]"
                        : "text-[#8888AA] hover:text-white"
                    }`}
                    style={activeSection === item.href.slice(1) ? {
                      background: "rgba(79,142,247,0.1)",
                      border: "1px solid rgba(79,142,247,0.2)",
                    } : {}}
                  >
                    {activeSection === item.href.slice(1) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] flex-shrink-0" />
                    )}
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              {/* Bottom contact */}
              <div className="px-4 pb-8">
                <a
                  href="mailto:vivekranaworks@gmail.com"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)" }}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarNew;
