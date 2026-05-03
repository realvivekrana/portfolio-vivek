import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

const ContactNew = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1400));
    setSubmitting(false);
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSuccess(false), 3000);
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
  ];

  const socials = [
    { icon: Github, href: "https://github.com/realvivekrana", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mrvivekrana/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/mrvivaanrana", label: "Twitter" },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(155,93,229,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase mb-3" style={{ color: "#4F8EF7" }}>
            📬 Get In Touch
          </p>
          <h2
            className="font-black tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", color: "#F0F0FF" }}
          >
            Let's Work{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Together
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg, #4F8EF7, #9B5DE5)", transformOrigin: "center" }}
          />
          <p className="mt-4 text-sm sm:text-base max-w-xl mx-auto" style={{ color: "#6B6B8A" }}>
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <div className="mb-2">
              <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: "#F0F0FF" }}>
                Contact Information
              </h3>
              <p className="text-sm sm:text-base" style={{ color: "#8888AA" }}>
                Feel free to reach out through any of these channels.
              </p>
            </div>

            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 group"
                    style={{
                      background: "rgba(79,142,247,0.04)",
                      border: "1px solid rgba(79,142,247,0.1)",
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.3)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.1)")}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(79,142,247,0.1)" }}
                    >
                      <item.icon size={20} style={{ color: "#4F8EF7" }} />
                    </div>
                    <div>
                      <div className="text-xs font-mono tracking-widest uppercase mb-0.5" style={{ color: "#4B4B6A" }}>
                        {item.label}
                      </div>
                      <div className="text-sm sm:text-base font-semibold" style={{ color: "#C8C8E8" }}>
                        {item.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    className="flex items-center gap-4 p-4 rounded-2xl"
                    style={{
                      background: "rgba(79,142,247,0.04)",
                      border: "1px solid rgba(79,142,247,0.1)",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(79,142,247,0.1)" }}
                    >
                      <item.icon size={20} style={{ color: "#4F8EF7" }} />
                    </div>
                    <div>
                      <div className="text-xs font-mono tracking-widest uppercase mb-0.5" style={{ color: "#4B4B6A" }}>
                        {item.label}
                      </div>
                      <div className="text-sm sm:text-base font-semibold" style={{ color: "#C8C8E8" }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social links */}
            <div className="pt-2">
              <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "#4B4B6A" }}>
                Follow Me
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all"
                    style={{
                      background: "rgba(79,142,247,0.08)",
                      border: "1px solid rgba(79,142,247,0.15)",
                      color: "#8888AA",
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#4F8EF7")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#8888AA")}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-2xl p-5 sm:p-6"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(79,142,247,0.1)",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: "#C8C8E8" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl text-sm sm:text-base outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(79,142,247,0.15)",
                    color: "#F0F0FF",
                  }}
                  onFocus={e => (e.target.style.borderColor = "rgba(79,142,247,0.5)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(79,142,247,0.15)")}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: "#C8C8E8" }}>
                  Your Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm sm:text-base outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(79,142,247,0.15)",
                    color: "#F0F0FF",
                  }}
                  onFocus={e => (e.target.style.borderColor = "rgba(79,142,247,0.5)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(79,142,247,0.15)")}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: "#C8C8E8" }}>
                  Your Message
                </label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl text-sm sm:text-base outline-none transition-all resize-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(79,142,247,0.15)",
                    color: "#F0F0FF",
                  }}
                  onFocus={e => (e.target.style.borderColor = "rgba(79,142,247,0.5)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(79,142,247,0.15)")}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={submitting || success}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3.5 rounded-xl text-sm sm:text-base font-bold text-white flex items-center justify-center gap-2 transition-all"
                style={{
                  background: success
                    ? "linear-gradient(135deg, #00C853, #00E676)"
                    : "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                  opacity: submitting ? 0.7 : 1,
                  minHeight: "48px",
                }}
              >
                {success ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : submitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactNew;
