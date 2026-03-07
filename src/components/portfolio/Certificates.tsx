import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";
import cert1 from "@/assets/cert1.jpg";
import cert2 from "@/assets/cert2.jpg";
import cert3 from "@/assets/cert3.jpg";
import cert4 from "@/assets/cert4.jpg";
import cert5 from "@/assets/cert5.jpg";

type Certificate = {
  title: string;
  image: string;
  issuer?: string;
};

// CERTIFICATES CONFIGURATION - Add or update your certificates here
const certificates: Certificate[] = [
  {
    title: "Certificate 1",
    image: cert1,
    issuer: "Certification Authority",
  },
  {
    title: "Certificate 2",
    image: cert2,
    issuer: "Certification Authority",
  },
  {
    title: "Certificate 3",
    image: cert3,
    issuer: "Certification Authority",
  },
  {
    title: "Certificate 4",
    image: cert4,
    issuer: "Certification Authority",
  },
  {
    title: "Certificate 5",
    image: cert5,
    issuer: "Certification Authority",
  },
];

const Certificates = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                delay: 0.2 + i * 0.1,
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="glass rounded-2xl overflow-hidden group hover:glow-border transition-all duration-500"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-primary" size={18} />
                  <h3 className="text-base font-bold text-foreground">{cert.title}</h3>
                </div>
                {cert.issuer && (
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
