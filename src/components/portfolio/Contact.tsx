import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Github, Linkedin, Twitter, MapPin, Mail as MailIcon, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: Github, href: "https://github.com/realvivekrana", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mrvivekrana/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/mrvivaanrana", label: "Twitter" },
  ];

  return (
    <section id="contact" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="w-full px-5 sm:px-6 md:px-10 lg:px-16 max-w-sm sm:max-w-2xl md:max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-10">
          {/* Image - Shows on all devices */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="w-full"
          >
            <div className="relative rounded-2xl overflow-hidden glass p-3 sm:p-4 h-full max-w-sm mx-auto md:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=600&fit=crop"
                alt="Contact illustration"
                className="w-full h-auto object-cover rounded-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-5 sm:gap-6 w-full"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Let's work together</h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm always open to new opportunities, collaborations, and interesting projects. Feel free
              to reach out!
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
                <MailIcon size={20} className="text-primary flex-shrink-0" />
                <a 
                  href="mailto:vivekranaworks@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  vivekranaworks@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a 
                  href="tel:+919304718075"
                  className="hover:text-primary transition-colors"
                >
                  +91 9304718075
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
                <MapPin size={20} className="text-primary flex-shrink-0" />
                <span>Noida, Uttar Pradesh, India</span>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-12 h-12 sm:w-11 sm:h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border transition-all duration-300 touch-manipulation"
                >
                  <s.icon size={22} className="sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
