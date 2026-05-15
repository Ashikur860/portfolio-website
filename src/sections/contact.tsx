"use client";

import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, Twitter, MapPin, Phone, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Ashikur241-15-128@diu.edu.bd",
    href: "mailto:Ashikur241-15-128@diu.edu.bd",
    color: "text-primary",
  },
  {
    icon: Phone,
    label: "Telegram",
    value: "@Ashikur860",
    href: "https://t.me/Ashikur860",
    color: "text-blue-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "#",
    color: "text-green-400",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Ashikur860", color: "hover:text-white" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ashikur-rahaman-1360b21a9/", color: "hover:text-blue-500" },
  { icon: Twitter, label: "X/Twitter", href: "https://x.com/Ashikur1589", color: "hover:text-white" },
  { icon: Send, label: "Telegram", href: "https://t.me/Ashikur860", color: "hover:text-blue-400" },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/meenbwdn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-secondary-bg/50">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl" />

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
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass rounded-2xl p-8 border border-border/50">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-muted mb-6">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border/50 text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border/50 text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border/50 text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border/50 text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted text-center">
                    You&apos;ll receive a confirmation email. Powered by Formspree.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-border/50 hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div>
                    <div className="text-sm text-muted">{info.label}</div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6 border border-border/50">
              <h4 className="font-heading font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                  >
                    <social.icon className={`w-5 h-5 text-muted ${social.color} transition-colors`} />
                    <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="glass rounded-2xl p-6 border border-green-500/30 bg-green-500/5">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <div>
                  <div className="font-medium text-foreground">Available for Work</div>
                  <div className="text-sm text-muted">
                    Currently open for freelance projects and collaborations
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
