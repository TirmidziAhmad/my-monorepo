"use client";
import { motion } from "framer-motion";
import { AnimatedSection, textVariant } from "../components/AnimatedSection";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  ArrowLeft,
  Send,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formState);
    alert("Thanks for reaching out! (This is a demo)");
  };

  const socials = [
    {
      name: "Email",
      value: "tirmidziahmad.work@gmail.com",
      link: "mailto:tirmidziahmad.work@gmail.com",
      icon: Mail,
      color: "text-rose-400",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/tirmidziahmad",
      link: "https://linkedin.com/in/tirmidziahmad",
      icon: Linkedin,
      color: "text-blue-400",
    },
    {
      name: "GitHub",
      value: "github.com/tirmidziahmad",
      link: "https://github.com/tirmidziahmad",
      icon: Github,
      color: "text-gray-500 dark:text-gray-300",
    },
    {
      name: "Instagram",
      value: "@tirmidziahmd",
      link: "https://instagram.com/tirmidziahmd",
      icon: Instagram,
      color: "text-pink-400",
    },
  ];

  return (
    <main className="w-full max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Back link */}
      <AnimatedSection className="mb-12">
        <motion.div variants={textVariant}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back home
          </Link>
        </motion.div>
      </AnimatedSection>

      {/* Header */}
      <AnimatedSection className="mb-20">
        <div className="max-w-3xl">
          <motion.div
            variants={textVariant}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3 h-3" />
            Let's build together
          </motion.div>

          <motion.h1
            variants={textVariant}
            className="text-5xl md:text-8xl font-bold tracking-tighter text-foreground mb-8 leading-[0.85]"
          >
            Get in touch<span className="text-emerald-500">.</span>
          </motion.h1>

          <motion.p
            variants={textVariant}
            className="text-gray-500 text-lg md:text-2xl font-light leading-relaxed max-w-2xl"
          >
            Have a project in mind or just want to say hi? I'm always open to
            discussing new opportunities and creative ideas.
          </motion.p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <AnimatedSection>
            <motion.form
              variants={textVariant}
              onSubmit={handleSubmit}
              className="space-y-8 p-8 md:p-12 rounded-[2.5rem] bg-foreground/[0.03] backdrop-blur-xl border border-foreground/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-6 py-4 rounded-2xl bg-foreground/[0.02] border border-foreground/10 text-foreground focus:border-emerald-500/50 focus:bg-foreground/[0.05] transition-all outline-none placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-6 py-4 rounded-2xl bg-foreground/[0.02] border border-foreground/10 text-foreground focus:border-emerald-500/50 focus:bg-foreground/[0.05] transition-all outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">
                  Your Message
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-6 py-4 rounded-2xl bg-foreground/[0.02] border border-foreground/10 text-foreground focus:border-emerald-500/50 focus:bg-foreground/[0.05] transition-all outline-none resize-none placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-3 w-full md:w-auto px-10 py-5 rounded-2xl bg-emerald-600 dark:bg-emerald-500 text-white dark:text-[#1e201e] font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg border border-emerald-400/20"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.form>
          </AnimatedSection>
        </div>

        {/* Social Info */}
        <div className="lg:col-span-5 space-y-12">
          {socials.map((social, i) => (
            <AnimatedSection key={social.name} delay={i * 0.1}>
              <motion.a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={textVariant}
                className="group flex items-center gap-6 p-6 rounded-3xl bg-foreground/[0.05] border border-foreground/5 hover:border-foreground/10 transition-all duration-500"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-foreground/[0.05] flex items-center justify-center group-hover:scale-110 transition-transform ${social.color}`}
                >
                  <social.icon className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">
                    {social.name}
                  </p>
                  <p className="text-foreground text-lg font-medium group-hover:text-emerald-500 transition-colors">
                    {social.value}
                  </p>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}

          <AnimatedSection delay={0.4}>
            <motion.div
              variants={textVariant}
              className="p-10 rounded-[2.5rem] bg-gradient-to-br from-foreground/[0.05] to-transparent border border-foreground/10 relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -right-10 opacity-[0.03]">
                <MessageSquare className="w-48 h-48 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Availability
              </h3>
              <p className="text-gray-400 font-light leading-relaxed relative z-10">
                I'm currently based in{" "}
                <span className="text-foreground font-medium">
                  Jakarta, Indonesia
                </span>{" "}
                (GMT+7) and available for full-time roles or project-based
                freelance work worldwide.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
