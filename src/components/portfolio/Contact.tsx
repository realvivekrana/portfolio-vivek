import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Github, Linkedin, Twitter, MapPin, Mail as MailIcon } from "lucide-react";
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
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Image - Shows on all devices */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="order-1 md:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden glass p-4 h-full max-w-sm mx-auto md:max-w-none">
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
            className="space-y-6 order-2 md:order-2"
          >
            <h3 className="text-xl font-bold text-foreground">Let's work together</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to new opportunities, collaborations, and interesting projects. Feel free
              to reach out!
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MailIcon size={18} className="text-primary" />
                <a 
                  href="mailto:vivekranaworks@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  vivekranaworks@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span>Noida, Uttar Pradesh, India</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border transition-all duration-300"
                >
                  <s.icon size={20} />
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
