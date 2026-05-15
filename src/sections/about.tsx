"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Microscope, Video, Rocket, Users, FileText, Clock, Layers } from "lucide-react";

const stats = [
  { icon: Users, value: "26K+", label: "YouTube Subscribers", color: "text-red-500" },
  { icon: FileText, value: "2", label: "Research Papers", color: "text-primary" },
  { icon: Clock, value: "3+", label: "Years Experience", color: "text-secondary" },
  { icon: Layers, value: "15+", label: "Web3 Projects", color: "text-green-500" },
];

const highlights = [
  { icon: GraduationCap, title: "DIU CSE Student", desc: "Computer Science & Engineering at Daffodil International University" },
  { icon: Microscope, title: "Blockchain Researcher", desc: "Conducting research on blockchain technology and its applications" },
  { icon: Video, title: "Crypto Educator", desc: "Creating educational content for 26K+ subscribers on YouTube" },
  { icon: Rocket, title: "Web3 Entrepreneur", desc: "Building innovative Web3 products and digital solutions" },
];

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-4xl sm:text-5xl font-bold font-heading"
    >
      {value}
    </motion.span>
  );
}

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who I <span className="text-gradient">Am</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A passionate technologist dedicated to shaping the future through innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Computer Science Student &<br />
              <span className="text-primary">Blockchain Enthusiast</span>
            </h3>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I am a Computer Science and Engineering student passionate about blockchain technology, 
                AI innovation, crypto education, and impactful research. My journey in the tech world 
                started with a curiosity about decentralized systems and has evolved into a deep 
                commitment to building the future of Web3.
              </p>
              <p>
                As the founder of CryptoPedia Bangla, I actively educate thousands of subscribers 
                about cryptocurrency, blockchain technology, and digital finance. My research work 
                focuses on applying machine learning to real-world problems, with two accepted 
                papers in prestigious conferences.
              </p>
              <p>
                I believe in the transformative power of technology and work tirelessly to make 
                complex concepts accessible to everyone. Whether it&apos;s through code, content, 
                or community building, I&apos;m dedicated to driving innovation forward.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-white/5 border border-border/30">
                <div className="text-sm text-muted mb-1">Education</div>
                <div className="font-medium text-foreground">BSc in CSE</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-border/30">
                <div className="text-sm text-muted mb-1">Location</div>
                <div className="font-medium text-foreground">Dhaka, Bangladesh</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-border/30">
                <div className="text-sm text-muted mb-1">Focus</div>
                <div className="font-medium text-foreground">Web3 & AI</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-border/30">
                <div className="text-sm text-muted mb-1">Status</div>
                <div className="font-medium text-green-400">Open to Work</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl glass border border-border/50 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <div ref={ref} className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-3xl" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl glass border border-border/50">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`mb-2 ${stat.color}`}>
                  <AnimatedCounter value={stat.value} inView={isInView} />
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted">
                  <stat.icon className="w-4 h-4" />
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
