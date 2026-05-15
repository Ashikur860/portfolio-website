"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Folder, Code2, Database, Cloud, Cpu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Revamped Music (MP3)",
    description: "A modern music streaming platform with advanced audio processing and personalized recommendations.",
    image: "🎵",
    tags: ["Next.js", "Node.js", "MongoDB", "Web Audio API"],
    category: "Web App",
    featured: true,
    github: "https://github.com",
    demo: "https://demo.com",
    icon: Folder,
  },
  {
    title: "Twisted Network (TWST)",
    description: "Decentralized networking protocol for secure peer-to-peer communication and data sharing.",
    image: "🌐",
    tags: ["Solidity", "Web3.js", "IPFS", "React"],
    category: "Web3",
    featured: true,
    github: "https://github.com",
    demo: "https://demo.com",
    icon: Shield,
  },
  {
    title: "Digital Agro System",
    description: "IoT-based agricultural management system with real-time monitoring and AI-powered insights.",
    image: "🌾",
    tags: ["IoT", "Python", "TensorFlow", "React"],
    category: "IoT",
    featured: false,
    github: "https://github.com",
    demo: "https://demo.com",
    icon: Cpu,
  },
  {
    title: "IoT Water Pollution Detection",
    description: "ML-based water quality monitoring system using IoT sensors for river pollution detection.",
    image: "💧",
    tags: ["Machine Learning", "IoT", "Python", "Arduino"],
    category: "Research",
    featured: false,
    github: "https://github.com",
    demo: "https://demo.com",
    icon: Database,
  },
  {
    title: "Bank Management System",
    description: "Comprehensive banking solution with secure transaction processing and account management.",
    image: "🏦",
    tags: ["Java", "Spring Boot", "MySQL", "Security"],
    category: "Enterprise",
    featured: false,
    github: "https://github.com",
    demo: "https://demo.com",
    icon: Shield,
  },
  {
    title: "Construction Employee Management",
    description: "HR management system designed for construction industry with payroll and attendance tracking.",
    image: "👷",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    category: "Enterprise",
    featured: false,
    github: "https://github.com",
    demo: "https://demo.com",
    icon: Code2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-secondary-bg/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A collection of my best work spanning Web3, IoT, AI, and enterprise applications
          </p>
        </motion.div>

        {/* Featured Projects - Bento Grid Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              <div className="relative glass rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl">
                      {project.image}
                    </div>
                    <div>
                      <Badge variant="cyan" className="mb-2">
                        {project.category}
                      </Badge>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-muted hover:text-primary transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-secondary/20 text-muted hover:text-secondary transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-muted mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 text-muted border border-border/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-2xl">
                    {project.image}
                  </div>
                  <div className="flex gap-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-white/5 text-muted hover:text-primary transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs bg-white/5 text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2 py-0.5 rounded-full text-xs text-muted">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="gap-2">
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
