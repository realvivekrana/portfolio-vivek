import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

const ContactNew = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  // 3D tilt for form
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

  // Magnetic button effect
  const buttonX = useMotionValue(0);
  const buttonY = useMotionValue(0);
  const buttonSpringX = useSpring(buttonX, { stiffness: 300, damping: 30 });
  const buttonSpringY = useSpring(buttonY, { stiffness: 300, damping: 30 });

  const contactInfo = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
  ];

  const handleFormMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleFormMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleButtonMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    
    buttonX.set(deltaX);
    buttonY.set(deltaY);
  };

  const handleButtonMouseLeave = () => {
    buttonX.set(0);
    buttonY.set(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: "", email: "", message: "" });
    
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated particle ring in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          className="w-[600px] h-[600px] border-2 border-primary/10 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] border-2 border-accent/10 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header with typography system */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative"
        >
          {/* Small mono label */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 rounded-full glass border border-primary/20 font-mono text-label text-primary tracking-[0.2em] uppercase mb-6"
          >
            📬 Get In Touch
          </motion.span>
          
          {/* Main heading - Syne Display with 3D depth */}
          <motion.h2 
            className="font-display text-display-lg font-bold mb-6 tracking-[-0.02em]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span 
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              style={{
                textShadow: `
                  1px 1px 0 #1a1a2e,
                  2px 2px 0 #1a1a2e,
                  3px 3px 0 #1a1a2e,
                  4px 4px 0 #0d0d14,
                  5px 5px 0 #0d0d14,
                  6px 6px 0 #0d0d14
                `,
              }}
            >
              Let's Work Together
            </span>
          </motion.h2>
          
          {/* Subtitle - Inter body font */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Have a project in mind? Let's create something amazing together
          </motion.p>
          
          {/* Large Bebas watermark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 0.025, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[clamp(120px,20vw,220px)] font-normal text-white/[0.03] leading-none tracking-wider pointer-events-none whitespace-nowrap"
            style={{ 
              textShadow: '0 0 40px rgba(79, 142, 247, 0.1)',
            }}
          >
            CONTACT
          </motion.div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info with 3D cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              {/* Heading - Plus Jakarta heading font */}
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6 tracking-tight">Contact Information</h3>
              {/* Body text - Inter */}
              <p className="font-body text-body-md text-muted-foreground mb-8">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30, rotateX: 45 }}
                  animate={inView ? { opacity: 1, x: 0, rotateX: 0 } : {}}
                  transition={{ 
                    delay: 0.6 + i * 0.1, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ 
                    x: 10, 
                    scale: 1.02,
                    rotateY: 5,
                    boxShadow: "0 10px 30px rgba(79, 142, 247, 0.2)",
                  }}
                  className="group"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-2xl glass border border-primary/10 hover:border-primary/30 transition-all duration-300"
                    >
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <div className="font-mono text-label text-muted-foreground uppercase tracking-wider">{item.label}</div>
                        <div className="font-heading font-semibold text-body-md text-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-2xl glass border border-primary/10">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-mono text-label text-muted-foreground uppercase tracking-wider">{item.label}</div>
                        <div className="font-heading font-semibold text-body-md text-foreground">{item.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3D Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            onMouseMove={handleFormMouseMove}
            onMouseLeave={handleFormMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
            className="glass rounded-3xl p-8 border border-primary/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <motion.label 
                  htmlFor="name" 
                  className="block font-heading text-body-sm font-semibold mb-2 transition-all duration-300"
                  animate={{
                    y: focusedField === 'name' ? -5 : 0,
                    scale: focusedField === 'name' ? 0.95 : 1,
                    color: focusedField === 'name' ? '#4F8EF7' : '#F0F0FF',
                  }}
                >
                  Your Name
                </motion.label>
                <motion.input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ 
                    scale: 1.02, 
                    translateZ: 10,
                    boxShadow: "0 0 20px rgba(79, 142, 247, 0.3)",
                  }}
                  className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="John Doe"
                  style={{ transformStyle: "preserve-3d" }}
                />
              </div>

              {/* Email Field */}
              <div>
                <motion.label 
                  htmlFor="email" 
                  className="block font-heading text-body-sm font-semibold mb-2 transition-all duration-300"
                  animate={{
                    y: focusedField === 'email' ? -5 : 0,
                    scale: focusedField === 'email' ? 0.95 : 1,
                    color: focusedField === 'email' ? '#4F8EF7' : '#F0F0FF',
                  }}
                >
                  Your Email
                </motion.label>
                <motion.input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ 
                    scale: 1.02, 
                    translateZ: 10,
                    boxShadow: "0 0 20px rgba(79, 142, 247, 0.3)",
                  }}
                  className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-body-md"
                  placeholder="john@example.com"
                  style={{ transformStyle: "preserve-3d" }}
                />
              </div>

              {/* Message Field */}
              <div>
                <motion.label 
                  htmlFor="message" 
                  className="block font-heading text-body-sm font-semibold mb-2 transition-all duration-300"
                  animate={{
                    y: focusedField === 'message' ? -5 : 0,
                    scale: focusedField === 'message' ? 0.95 : 1,
                    color: focusedField === 'message' ? '#4F8EF7' : '#F0F0FF',
                  }}
                >
                  Your Message
                </motion.label>
                <motion.textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  whileFocus={{ 
                    scale: 1.02, 
                    translateZ: 10,
                    boxShadow: "0 0 20px rgba(79, 142, 247, 0.3)",
                  }}
                  className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none font-body text-body-md"
                  placeholder="Tell me about your project..."
                  style={{ transformStyle: "preserve-3d" }}
                />
              </div>

              {/* Magnetic Submit Button */}
              <motion.button
                ref={buttonRef}
                type="submit"
                disabled={isSubmitting || isSuccess}
                onMouseMove={handleButtonMouseMove}
                onMouseLeave={handleButtonMouseLeave}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95, translateZ: -10 }}
                style={{
                  x: buttonSpringX,
                  y: buttonSpringY,
                  transformStyle: "preserve-3d",
                }}
                className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-heading font-bold text-body-md tracking-[0.05em] uppercase shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                
                <span className="relative z-10 flex items-center gap-3">
                  {isSuccess ? (
                    <>
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <CheckCircle className="w-5 h-5" />
                      </motion.div>
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactNew;
