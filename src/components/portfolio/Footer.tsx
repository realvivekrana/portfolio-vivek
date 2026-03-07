import { ArrowUp, Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          © {new Date().getFullYear()} Vivek Rana. Made with{" "}
          <Heart size={14} className="text-primary" fill="currentColor" /> and React
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/realvivekrana" },
            { icon: Linkedin, href: "https://linkedin.com/in/vivekrana" },
            { icon: Twitter, href: "https://twitter.com/vivekrana" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
