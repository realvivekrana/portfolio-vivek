import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";

const Resume = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const resumePath = "/Vivek-Kumar-Rana-Resume.pdf";

  const handleViewFullScreen = () => {
    window.open(resumePath, "_blank");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Vivek-Kumar-Rana-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section-padding relative" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="text-primary" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold">
              My <span className="gradient-text">Resume</span>
            </h2>
            <motion.span
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, type: "spring" }}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
            >
              Updated 2026
            </motion.span>
          </div>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            View or download my professional resume
          </p>
        </motion.div>

        {/* Resume Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-4 md:p-6 mb-6"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border/50">
            <iframe
              src={resumePath}
              className="w-full h-[400px] sm:h-[500px] md:h-[600px]"
              title="Vivek Kumar Rana Resume"
            />
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={handleViewFullScreen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl glass border border-primary/30 text-foreground font-semibold hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
            <span>View Full Screen</span>
          </motion.button>

          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
