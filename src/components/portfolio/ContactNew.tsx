import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail, MapPin, Phone, Send, CheckCircle,
  AlertCircle, Github, Linkedin, Twitter,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

// ─────────────────────────────────────────────────────────────
// EmailJS config — replace these three values with your own:
//
//  1. Go to https://www.emailjs.com  →  sign up (free)
//  2. Add an Email Service  →  copy SERVICE_ID
//  3. Create an Email Template with variables:
//       {{from_name}}  {{from_email}}  {{message}}  {{to_name}}
//     →  copy TEMPLATE_ID
//  4. Account → API Keys  →  copy PUBLIC_KEY
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_5ek5x96i";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // ← Go to EmailJS → Email Templates → copy ID
const EMAILJS_PUBLIC_KEY  = "O03STzf4wGjZ_XQQpUjgpYmijkISBEy6YNQf4";

type Status = "idle" | "sending" | "success" | "error";

const ContactNew = () => {
  const ref    = useRef<HTMLDivElement>(null);
  const formEl = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  /* ── Validation ── */
  const validate = () => {
    if (!form.name.trim())    return "Please enter your name.";
    if (!form.email.trim())   return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              return "Please enter a valid email address.";
    if (!form.message.trim()) return "Please enter a message.";
    if (form.message.trim().length < 10)
                              return "Message must be at least 10 characters.";
    return null;
  };

  /* ── Submit ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setErrMsg(validationError);
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name.trim(),
          from_email: form.email.trim(),
          message:    form.message.trim(),
          to_name:    "Vivek",
          reply_to:   form.email.trim(),
        },
        EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      // Reset back to idle after 5 s
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      setErrMsg("Something went wrong. Please try emailing me directly.");
      setStatus("error");
    }
  };

  /* ── Helpers ── */
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(79,142,247,0.18)",
    color: "#F0F0FF",
  };
  const focusStyle  = "rgba(79,142,247,0.55)";
  const blurStyle   = "rgba(79,142,247,0.18)";

  const contactItems = [
    { icon: Mail,   label: "Email",    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
    { icon: Phone,  label: "Phone",    value: personalInfo.phone,    href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
  ];

  const socials = [
    { icon: Github,   href: "https://github.com/realvivekrana",          label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mrvivekrana/",  label: "LinkedIn" },
    { icon: Twitter,  href: "https://x.com/mrvivaanrana",                label: "Twitter" },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(155,93,229,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p
            className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase mb-3"
            style={{ color: "#4F8EF7", fontFamily: "JetBrains Mono, monospace" }}
          >
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
            style={{
              background: "linear-gradient(90deg, #4F8EF7, #9B5DE5)",
              transformOrigin: "center",
            }}
          />
          <p className="mt-4 text-sm sm:text-base max-w-xl mx-auto" style={{ color: "#6B6B8A" }}>
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ── Left: contact info ── */}
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
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-200"
                    style={{ background: "rgba(79,142,247,0.04)", border: "1px solid rgba(79,142,247,0.1)" }}
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
                      <div
                        className="text-xs font-mono tracking-widest uppercase mb-0.5"
                        style={{ color: "#4B4B6A", fontFamily: "JetBrains Mono, monospace" }}
                      >
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
                    style={{ background: "rgba(79,142,247,0.04)", border: "1px solid rgba(79,142,247,0.1)" }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(79,142,247,0.1)" }}
                    >
                      <item.icon size={20} style={{ color: "#4F8EF7" }} />
                    </div>
                    <div>
                      <div
                        className="text-xs font-mono tracking-widest uppercase mb-0.5"
                        style={{ color: "#4B4B6A", fontFamily: "JetBrains Mono, monospace" }}
                      >
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
              <p
                className="text-xs font-mono tracking-widest uppercase mb-3"
                style={{ color: "#4B4B6A", fontFamily: "JetBrains Mono, monospace" }}
              >
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

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-2xl p-5 sm:p-6"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(79,142,247,0.1)" }}
          >
            <form ref={formEl} onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

              {/* Name */}
              <div>
                <label
                  htmlFor="cf-name"
                  className="block text-xs sm:text-sm font-semibold mb-1.5"
                  style={{ color: "#C8C8E8" }}
                >
                  Your Name <span style={{ color: "#9B5DE5" }}>*</span>
                </label>
                <input
                  id="cf-name"
                  type="text"
                  name="from_name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-xl text-sm sm:text-base outline-none transition-all"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = focusStyle)}
                  onBlur={e  => (e.target.style.borderColor = blurStyle)}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="cf-email"
                  className="block text-xs sm:text-sm font-semibold mb-1.5"
                  style={{ color: "#C8C8E8" }}
                >
                  Your Email <span style={{ color: "#9B5DE5" }}>*</span>
                </label>
                <input
                  id="cf-email"
                  type="email"
                  name="from_email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-xl text-sm sm:text-base outline-none transition-all"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = focusStyle)}
                  onBlur={e  => (e.target.style.borderColor = blurStyle)}
                />
              </div>

              {/* Subject (optional) */}
              <div>
                <label
                  htmlFor="cf-subject"
                  className="block text-xs sm:text-sm font-semibold mb-1.5"
                  style={{ color: "#C8C8E8" }}
                >
                  Subject
                  <span className="ml-1 text-xs font-normal" style={{ color: "#4B4B6A" }}>(optional)</span>
                </label>
                <input
                  id="cf-subject"
                  type="text"
                  name="subject"
                  placeholder="Project inquiry / Collaboration / Other"
                  className="w-full px-4 py-3 rounded-xl text-sm sm:text-base outline-none transition-all"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = focusStyle)}
                  onBlur={e  => (e.target.style.borderColor = blurStyle)}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="cf-message"
                  className="block text-xs sm:text-sm font-semibold mb-1.5"
                  style={{ color: "#C8C8E8" }}
                >
                  Message <span style={{ color: "#9B5DE5" }}>*</span>
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  placeholder="Tell me about your project, timeline, and budget..."
                  className="w-full px-4 py-3 rounded-xl text-sm sm:text-base outline-none transition-all resize-none"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = focusStyle)}
                  onBlur={e  => (e.target.style.borderColor = blurStyle)}
                />
                <p className="text-xs mt-1" style={{ color: "#4B4B6A" }}>
                  {form.message.length} / 1000 characters
                </p>
              </div>

              {/* Error banner */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 p-3.5 rounded-xl"
                  style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)" }}
                >
                  <AlertCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#EF4444" }} />
                  <p className="text-sm" style={{ color: "#FCA5A5" }}>{errMsg}</p>
                </motion.div>
              )}

              {/* Success banner */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 p-3.5 rounded-xl"
                  style={{ background: "rgba(0,200,83,0.08)", border: "1px solid rgba(0,200,83,0.25)" }}
                >
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#00C853" }} />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#69F0AE" }}>
                      Message sent successfully!
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#4B4B6A" }}>
                      I'll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={status === "sending" || status === "success"}
                whileHover={status === "idle" || status === "error" ? { scale: 1.02 } : {}}
                whileTap={status === "idle" || status === "error" ? { scale: 0.97 } : {}}
                className="w-full py-3.5 rounded-xl text-sm sm:text-base font-bold text-white flex items-center justify-center gap-2 transition-all"
                style={{
                  background:
                    status === "success"
                      ? "linear-gradient(135deg, #00C853, #00E676)"
                      : "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                  opacity: status === "sending" ? 0.75 : 1,
                  cursor: status === "sending" || status === "success" ? "not-allowed" : "pointer",
                  minHeight: "48px",
                  boxShadow:
                    status === "idle" || status === "error"
                      ? "0 4px 20px rgba(79,142,247,0.3)"
                      : "none",
                }}
              >
                {status === "success" ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : status === "sending" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Privacy note */}
              <p className="text-center text-xs" style={{ color: "#4B4B6A" }}>
                🔒 Your information is private and will never be shared.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactNew;
