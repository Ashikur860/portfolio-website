"use client";

import { motion } from "framer-motion";
import { 
  Link2, Globe2, Microscope, Bot, 
  Code2, Database, TrendingUp, Megaphone,
  Users2, FileText, Atom, Palette,
  Server, Layout, Bitcoin, Brain
} from "lucide-react";

const skills = [
  { name: "Blockchain", icon: Link2, level: 90, category: "Core" },
  { name: "Web3", icon: Globe2, level: 85, category: "Core" },
  { name: "Research", icon: Microscope, level: 88, category: "Core" },
  { name: "AI Tools", icon: Bot, level: 80, category: "Tech" },
  { name: "Java", icon: Code2, level: 85, category: "Tech" },
  { name: "Python", icon: Database, level: 82, category: "Tech" },
  { name: "Trading Analysis", icon: TrendingUp, level: 90, category: "Finance" },
  { name: "Digital Marketing", icon: Megaphone, level: 75, category: "Business" },
  { name: "Community Management", icon: Users2, level: 88, category: "Business" },
  { name: "Content Strategy", icon: FileText, level: 92, category: "Business" },
  { name: "Next.js", icon: Atom, level: 85, category: "Web Dev" },
  { name: "Tailwind CSS", icon: Palette, level: 90, category: "Web Dev" },
  { name: "Node.js", icon: Server, level: 78, category: "Web Dev" },
  { name: "React", icon: Layout, level: 88, category: "Web Dev" },
  { name: "Crypto", icon: Bitcoin, level: 95, category: "Core" },
  { name: "Machine Learning", icon: Brain, level: 70, category: "Tech" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-secondary-bg/50">
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
            Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A diverse skill set spanning blockchain, web development, AI, and digital innovation
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              <div className="relative p-6 rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col items-center text-center">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm mb-1">{skill.name}</h3>
                  <span className="text-xs text-muted">{skill.category}</span>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-4 right-4 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { category: "Core", desc: "Blockchain, Web3, Crypto, Research" },
            { category: "Tech", desc: "AI Tools, Java, Python, ML" },
            { category: "Finance", desc: "Trading Analysis, Market Research" },
            { category: "Business", desc: "Marketing, Community, Content" },
          ].map((item, index) => (
            <div
              key={item.category}
              className="p-4 rounded-xl bg-white/5 border border-border/30 text-center"
            >
              <h4 className="font-heading font-semibold text-foreground mb-1">{item.category}</h4>
              <p className="text-xs text-muted">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
