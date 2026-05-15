"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Rocket, Youtube, TrendingUp, Users, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Business Development Manager",
    company: "Bitget",
    type: "Web3 Exchange",
    period: "2023 - Present",
    description: "Leading business development initiatives for one of the world's leading cryptocurrency exchanges. Responsible for partnership development, market expansion, and strategic growth in the MENA and South Asian regions.",
    achievements: [
      "Expanded user base by 150% in target regions",
      "Secured 20+ strategic partnerships",
      "Launched successful marketing campaigns",
    ],
    icon: Building2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Business Development Manager",
    company: "XT.com",
    type: "Crypto Exchange",
    period: "2022 - 2023",
    description: "Drove business growth and market penetration for XT.com exchange. Developed strategic partnerships with blockchain projects and managed key client relationships.",
    achievements: [
      "Increased trading volume by 80%",
      "Onboarded 50+ new projects",
      "Built strong KOL network",
    ],
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Founder & Content Creator",
    company: "CryptoPedia Bangla",
    type: "YouTube Channel",
    period: "2021 - Present",
    description: "Founded and grew CryptoPedia Bangla to 26K+ subscribers. Creating educational content about blockchain, cryptocurrency, and Web3 technologies in Bangla language.",
    achievements: [
      "26K+ YouTube subscribers",
      "1M+ total views",
      "Top crypto educator in Bangladesh",
    ],
    icon: Youtube,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Web3 Project Founder",
    company: "Independent",
    type: "Entrepreneur",
    period: "2020 - Present",
    description: "Building innovative Web3 projects and decentralized applications. Exploring blockchain technology applications and contributing to the crypto ecosystem.",
    achievements: [
      "Launched 3 successful Web3 projects",
      "Built strong community of 10K+ members",
      "Developed DeFi and NFT solutions",
    ],
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

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
            Career
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A journey through blockchain industry, Web3 entrepreneurship, and content creation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${exp.color} p-0.5`}
                >
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <exp.icon className="w-5 h-5 text-foreground" />
                  </div>
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] ${
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
              }`}>
                <div className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all group">
                  {/* Header */}
                  <div className={`flex items-center gap-3 mb-3 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <Badge variant="outline" className="text-xs">
                      {exp.period}
                    </Badge>
                    <span className="text-xs text-muted">{exp.type}</span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className={`text-secondary font-medium mb-3 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}>
                    {exp.company}
                  </p>
                  
                  <p className={`text-sm text-muted mb-4 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className={`space-y-2 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}>
                    {exp.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 text-sm text-muted ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <Award className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "2", label: "Major Exchanges" },
            { value: "70+", label: "Partnerships" },
            { value: "26K+", label: "Subscribers" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl glass border border-border/30"
            >
              <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
