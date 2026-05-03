import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

const NavbarNew = () => {
  const [isOpen, setIsOpen]           = useState(false);
  const [active, setActive]           = useState("home");
  const [scrolled, setScrolled]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = navItems.map(i => i.href.slice(1));
      const cur = ids.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 120 && r.bottom >= 120;
      });
      if (cur) setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* ── NAV BAR ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
        style={scrolled ? {
          background: "rgba(5,5,8,0.94)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(79,142,247,0.1)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
        } : { background: "transparent" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between" style={{ height: "64px" }}>

            {/* Logo */}
            <a
              href="#home"
              onClick={e => { e.preventDefault(); scrollTo("#home"); }}
              className="font-black text-xl tracking-tight select-none"
              style={{
                background: "linear-gradient(135deg,#4F8EF7,#9B5DE5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Inter, sans-serif",
              }}
            >
              VR
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(item => {
                const isActive = active === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={e => { e.preventDefault(); scrollTo(item.href); }}
                    className="relative px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
                    style={{ color: isActive ? "#4F8EF7" : "#8888AA" }}
                    onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#F0F0FF"; }}
                    onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#8888AA"; }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: "rgba(79,142,247,0.1)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}

              {/* Hire Me CTA */}
              <a
                href="mailto:vivekranaworks@gmail.com"
                className="ml-3 px-4 py-2 rounded-full text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg,#4F8EF7,#9B5DE5)",
                  boxShadow: "0 2px 12px rgba(79,142,247,0.3)",
                  minHeight: "36px",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Hire Me
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(79,142,247,0.08)",
                border: "1px solid rgba(79,142,247,0.2)",
                color: "#F0F0FF",
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-50 md:hidden flex flex-col"
              style={{
                width: "min(280px, 85vw)",
                background: "rgba(8,8,18,0.98)",
                backdropFilter: "blur(24px)",
                borderLeft: "1px solid rgba(79,142,247,0.15)",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              >
                <span
                  className="text-lg font-black"
                  style={{
                    background: "linear-gradient(135deg,#4F8EF7,#9B5DE5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  VR
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.05)", color: "#8888AA" }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto">
                {navItems.map((item, i) => {
                  const isActive = active === item.href.slice(1);
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={e => { e.preventDefault(); scrollTo(item.href); }}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold"
                      style={isActive ? {
                        background: "rgba(79,142,247,0.1)",
                        border: "1px solid rgba(79,142,247,0.2)",
                        color: "#4F8EF7",
                      } : { color: "#8888AA" }}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] flex-shrink-0" />}
                      {item.label}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Bottom CTA */}
              <div className="px-4 pb-8">
                <a
                  href="mailto:vivekranaworks@gmail.com"
                  className="flex items-center justify-center w-full py-3.5 rounded-xl text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg,#4F8EF7,#9B5DE5)" }}
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
