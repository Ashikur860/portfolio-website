"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink, Quote, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const researchPapers = [
  {
    title: "Code-Mixed Bangla-English Sentiment and Emotion Analysis in YouTube News Comments: A Tailored Machine Learning Approach",
    abstract: "This research presents a novel machine learning approach for analyzing sentiment and emotion in code-mixed Bangla-English YouTube news comments. The study addresses the unique challenges of processing mixed-language social media content and proposes tailored preprocessing techniques and feature extraction methods.",
    conference: "IEEE Conference",
    year: "2024",
    status: "Published",
    doi: "10.xxxx/xxxxx",
    tags: ["NLP", "Machine Learning", "Sentiment Analysis", "Code-Mixed"],
  },
  {
    title: "DeepStrokeGuard: Explainable and Deployable Deep Learning for Brain Stroke Detection with Class Imbalance Handling",
    abstract: "DeepStrokeGuard introduces an explainable deep learning framework for brain stroke detection that effectively handles class imbalance in medical imaging datasets. The research focuses on creating deployable AI solutions for healthcare with high accuracy and interpretability.",
    conference: "International Conference on Medical AI",
    year: "2024",
    status: "Accepted",
    doi: "10.xxxx/xxxxx",
    tags: ["Deep Learning", "Medical AI", "Explainable AI", "Healthcare"],
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      
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
            Research
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Academic <span className="text-gradient">Publications</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Contributing to the scientific community through rigorous research and innovation
          </p>
        </motion.div>

        {/* Research Papers */}
        <div className="grid lg:grid-cols-2 gap-8">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              
              <div className="relative glass rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <Badge variant="accent" className="mb-1">
                        {paper.status}
                      </Badge>
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <Calendar className="w-3 h-3" />
                        {paper.year}
                        <span className="w-1 h-1 rounded-full bg-muted" />
                        <Award className="w-3 h-3" />
                        {paper.conference}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {paper.title}
                </h3>

                {/* Abstract Preview */}
                <div className="relative mb-6 flex-grow">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-muted text-sm leading-relaxed pl-6">
                    {paper.abstract}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 text-muted border border-border/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border/30">
                  <Button variant="outline" size="sm" className="gap-2 flex-1">
                    <FileText className="w-4 h-4" />
                    PDF
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 flex-1">
                    <ExternalLink className="w-4 h-4" />
                    Cite
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "2", label: "Papers Published" },
            { value: "50+", label: "Citations" },
            { value: "3", label: "Research Areas" },
            { value: "2", label: "Conferences" },
          ].map((stat, index) => (
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
