"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Twitter, Send, Mail } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Research", href: "#research" },
    { name: "Projects", href: "#projects" },
  ],
  resources: [
    { name: "Blog", href: "#blog" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/Ashikur860", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ashikur-rahaman-1360b21a9/", icon: Linkedin },
    { name: "YouTube", href: "https://www.youtube.com/@CryptoPediaBangla", icon: Youtube },
    { name: "Twitter", href: "https://x.com/Ashikur1589", icon: Twitter },
    { name: "Telegram", href: "https://t.me/Ashikur860", icon: Send },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-secondary-bg">
      {/* Gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="font-heading font-bold text-xl text-white">AR</span>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  MD. Ashikur
                </h3>
                <p className="text-xs text-muted">Rahaman</p>
              </div>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Blockchain Researcher | Crypto Educator | Web3 Builder. Building the future through technology and innovation.
            </p>
            <a
              href="mailto:Ashikur241-15-128@diu.edu.bd"
              className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              Ashikur241-15-128@diu.edu.bd
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-white/5 text-muted hover:text-primary hover:bg-primary/10 transition-all border border-border/50"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted">
              © {currentYear} MD. Ashikur Rahaman. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-muted hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
