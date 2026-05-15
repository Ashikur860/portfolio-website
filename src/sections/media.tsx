"use client";

import { motion } from "framer-motion";
import { Youtube, Play, Eye, ThumbsUp, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    title: "Bitcoin Halving Explained in Bangla",
    views: "45K",
    likes: "2.1K",
    thumbnail: "₿",
    duration: "12:34",
    category: "Crypto Education",
  },
  {
    title: "Web3 Development Roadmap 2024",
    views: "32K",
    likes: "1.8K",
    thumbnail: "🌐",
    duration: "18:22",
    category: "Web3",
  },
  {
    title: "Crypto Trading Psychology",
    views: "28K",
    likes: "1.5K",
    thumbnail: "📊",
    duration: "15:45",
    category: "Trading",
  },
  {
    title: "Blockchain Technology Fundamentals",
    views: "55K",
    likes: "3.2K",
    thumbnail: "⛓️",
    duration: "22:10",
    category: "Education",
  },
];

const stats = [
  { icon: Users, value: "26K+", label: "Subscribers" },
  { icon: Play, value: "200+", label: "Videos" },
  { icon: Eye, value: "1M+", label: "Total Views" },
  { icon: ThumbsUp, value: "50K+", label: "Likes" },
];

export function MediaSection() {
  return (
    <section id="media" className="relative py-24 overflow-hidden bg-secondary-bg/50">
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Content
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            CryptoPedia <span className="text-red-500">Bangla</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Educational content making blockchain and cryptocurrency accessible to Bangla speakers worldwide
          </p>
        </motion.div>

        {/* Channel Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="glass rounded-2xl p-8 border border-red-500/20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center">
                <Youtube className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-left">
                <h3 className="font-heading text-2xl font-bold text-foreground">CryptoPedia Bangla</h3>
                <p className="text-muted">Crypto Education Channel</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="glass rounded-xl overflow-hidden border border-border/50 hover:border-red-500/30 transition-all">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center text-5xl">
                  {video.thumbnail}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                      <Play className="w-5 h-5 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-xs text-white">
                    {video.duration}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <span className="text-xs text-red-400 mb-1 block">{video.category}</span>
                  <h4 className="font-medium text-foreground text-sm mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
                    {video.title}
                  </h4>
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {video.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3" />
                      {video.likes}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://www.youtube.com/@CryptoPediaBangla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="gap-2 bg-red-500 hover:bg-red-600"
            >
              <Youtube className="w-5 h-5" />
              Subscribe to Channel
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
