"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Youtube, Twitter, Send, FileText, Mail, Loader2, TrendingUp, TrendingDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Ashikur860", icon: Github, color: "hover:text-white" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ashikur-rahaman-1360b21a9/", icon: Linkedin, color: "hover:text-blue-500" },
  { name: "YouTube", href: "https://www.youtube.com/@CryptoPediaBangla", icon: Youtube, color: "hover:text-red-500" },
  { name: "X/Twitter", href: "https://x.com/Ashikur1589", icon: Twitter, color: "hover:text-white" },
  { name: "Telegram", href: "https://t.me/Ashikur860", icon: Send, color: "hover:text-blue-400" },
];

// Bitcoin Price Widget Component
const BTCWidget = () => {
  const [btcData, setBtcData] = useState<{
    price: number;
    change24h: number;
    volume24h: number;
    loading: boolean;
    error: boolean;
  }>({
    price: 0,
    change24h: 0,
    volume24h: 0,
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchBTCPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true"
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setBtcData({
          price: data.bitcoin.usd,
          change24h: data.bitcoin.usd_24h_change || 0,
          volume24h: data.bitcoin.usd_24h_vol || 0,
          loading: false,
          error: false,
        });
      } catch {
        setBtcData((prev) => ({ ...prev, loading: false, error: true }));
      }
    };

    fetchBTCPrice();
    const interval = setInterval(fetchBTCPrice, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1e9) return `$${(volume / 1e9).toFixed(1)}B`;
    if (volume >= 1e6) return `$${(volume / 1e6).toFixed(1)}M`;
    return `$${volume.toFixed(0)}`;
  };

  const isPositive = btcData.change24h >= 0;

  return (
    <div className="p-4 rounded-xl bg-white/5 border border-border/30">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
            <span className="text-orange-500 text-sm font-bold">₿</span>
          </div>
          <span className="font-medium text-sm">Bitcoin</span>
        </div>
        {btcData.loading ? (
          <Loader2 className="w-4 h-4 animate-spin text-muted" />
        ) : btcData.error ? (
          <span className="text-xs text-muted">Live</span>
        ) : (
          <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? "text-green-400" : "text-red-400"}`}>
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {isPositive ? "+" : ""}{btcData.change24h.toFixed(2)}%
          </div>
        )}
      </div>
      <div className="text-2xl font-bold text-foreground">
        {btcData.loading ? (
          <span className="animate-pulse">Loading...</span>
        ) : btcData.error ? (
          "---"
        ) : (
          formatPrice(btcData.price)
        )}
      </div>
      <div className="text-xs text-muted mt-1">
        {btcData.loading || btcData.error ? (
          "24h Volume: ---"
        ) : (
          `24h Volume: ${formatVolume(btcData.volume24h)}`
        )}
      </div>
    </div>
  );
};

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            y: [null, -100, null],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

// Animated grid background
const GridBackground = () => {
  return (
    <div className="absolute inset-0 grid-bg opacity-50" />
  );
};

// Glowing orb component
const GlowingOrb = ({ className, color }: { className?: string; color: string }) => (
  <div
    className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
    style={{
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    }}
  />
);

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <GridBackground />
      <GlowingOrb
        className="w-[600px] h-[600px] -top-40 -left-40"
        color="#7C3AED"
      />
      <GlowingOrb
        className="w-[500px] h-[500px] bottom-0 right-0"
        color="#00D4FF"
      />
      <FloatingParticles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted">Available for Collaboration</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="text-gradient">MD. Ashikur</span>
              <br />
              <span className="text-foreground">Rahaman</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-secondary mb-4 font-medium"
            >
              Blockchain Researcher | Crypto Educator | Web3 Builder
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Building the future through blockchain, AI, research, and digital innovation.
              Transforming complex technologies into accessible knowledge for thousands.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                onClick={() => scrollToSection("#projects")}
                size="lg"
                className="gap-2 group"
              >
                View Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <a href="/cv.pdf" download="Ashikur_Rahaman_CV.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-primary/50 hover:bg-primary/10"
                >
                  <FileText className="w-4 h-4" />
                  Download CV
                </Button>
              </a>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-sm text-muted">Follow:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`p-2.5 rounded-xl bg-white/5 border border-border/50 text-muted transition-all ${social.color}`}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur-lg opacity-50 animate-pulse" />

              {/* Main Card */}
              <div className="relative glass rounded-2xl p-6 sm:p-8 max-w-md">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      alt="MD. Ashikur Rahaman"
                      width={224}
                      height={224}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  {/* Status badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Open to Work
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <div className="text-xl font-bold text-primary">26K+</div>
                    <div className="text-xs text-muted">Subscribers</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <div className="text-xl font-bold text-secondary">2</div>
                    <div className="text-xs text-muted">Research Papers</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <div className="text-xl font-bold text-primary">3+</div>
                    <div className="text-xs text-muted">Years Exp.</div>
                  </div>
                </div>

                {/* Live BTC Widget */}
                <BTCWidget />
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-3 rounded-xl glass border border-primary/30"
              >
                <span className="text-2xl">⛓️</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 p-3 rounded-xl glass border border-secondary/30"
              >
                <span className="text-2xl">🤖</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-8 p-2 rounded-lg glass border border-primary/20"
              >
                <span className="text-lg">📊</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted cursor-pointer"
          onClick={() => scrollToSection("#about")}
        >
          <span className="text-xs">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
