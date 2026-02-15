"use client";
import { motion } from "framer-motion";
import { AnimatedSection, textVariant } from "../components/AnimatedSection";
import {
  MapPin,
  Mail,
  Briefcase,
  GraduationCap,
  Calendar,
  Code,
  ChevronRight,
  Download,
  ArrowLeft,
} from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiAxios,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { TbSeo, TbTimeline } from "react-icons/tb";
import { MdQueryStats } from "react-icons/md";
import Link from "next/link";

/* ── CV Data ─────────────────────────────────────────── */

const contact = {
  name: "Tirmidzi Ahmad Fuzna",
  phone: "+6285325492308",
  email: "tirmidziahmad.work@gmail.com",
  location: "Pemalang, Central Java",
};

const summary =
  "Frontend Developer with 1+ years experience building scalable, responsive, and user-friendly web applications. Proficient in React.js and Next.js, combined with Tailwind CSS and modern UI/UX practices, with additional exposure to backend development using ExpressJs, PostgreSQL, and API integration.";

const skills = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "ReactJS", icon: SiReact },
  { name: "NextJS", icon: SiNextdotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Axios", icon: SiAxios },
  { name: "SWR", icon: Code },
  { name: "React Query", icon: MdQueryStats },
  { name: "Zustand", icon: Code },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
  { name: "SEO", icon: TbSeo },
  { name: "Agile", icon: TbTimeline },
];

const experiences = [
  {
    company: "PT AZLogistik Dot Com",
    role: "Front End Developer",
    location: "Surabaya",
    period: "08/2025 – 01/2026",
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    bullets: [
      "Engineered and scaled a high-traffic logistics platform, maintaining 30+ dynamic pages across 4+ distinct user roles to support a growing user base.",
      "Leveraged Next.js, Zustand, and React Hook Form to architect complex state management systems, robust form validation, and full multilingual support.",
      "Partnered within a 30-member cross-functional Agile team, collaborating with BAs, Designers, and QC to ensure 100% on-time sprint delivery.",
    ],
  },
  {
    company: "PT. Sinergi Merah Putih Indonesia",
    role: "Front End Developer",
    location: "Yogyakarta",
    period: "08/2024 – 05/2025",
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    bullets: [
      "Engineered and maintained multiple web applications using Next.js, navigating both App Router (TypeScript) and Pages Router (JavaScript) architectures.",
      "Collaborated with UI/UX teams to transform Figma designs into responsive, intuitive interfaces using Tailwind CSS, including data-heavy dashboards and management systems.",
      "Bridged the gap between backend APIs and project requirements by integrating RESTful services, reducing errors and increasing development efficiency.",
    ],
  },
  {
    company: "Fakultas Sastra & Bahasa",
    role: "WordPress Developer",
    location: "Wonosobo",
    period: "12/2022 – 05/2023",
    gradient: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    bullets: [
      "Architected and launched a fully responsive WordPress platform within a 7-day sprint, implementing advanced SEO optimizations.",
      "Engineered custom themes and integrated specialized plugins tailored to specific client business logic.",
      "Authored comprehensive maintenance manuals and conducted 1-on-1 stakeholder training.",
    ],
  },
];

const education = [
  {
    institution: "Bootcamp HARISENIN.COM",
    degree: "Fullstack Web Developer",
    location: "Jakarta",
    period: "11/2024",
    gradient: "from-red-500/20 via-rose-500/10 to-pink-500/20",
    highlights: [
      "Engineered a high-fidelity Netflix clone streaming interface using React.js and Tailwind CSS with modular component reusability.",
      "Architected an efficient data-fetching layer to consume RESTful APIs, managing global application state using Zustand.",
      "Integrated JWT-based authentication on the client side to manage protected routes and user sessions.",
    ],
  },
  {
    institution: "Sains AlQur'an University",
    degree: "Informatics Engineering",
    location: "Wonosobo",
    period: "02/2024",
    gradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
    highlights: [
      'Architected and published "Mojo The Adventure," an interactive 2D platformer using Godot Engine with complex character physics and state machines.',
      'Engineered "Mettopia" within Roblox Studio (Luau), developing a scalable multiplayer environment with in-game economy system.',
      "Developed a portfolio of responsive web applications utilizing HTML5, CSS3, JavaScript, and PHP for full-stack foundations.",
    ],
  },
];

/* ── Animation helpers ───────────────────────────────── */

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

/* ── Page ─────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <main className="w-full max-w-5xl mx-auto py-32 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Back link */}
      <AnimatedSection className="mb-12">
        <motion.div variants={textVariant}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back home
          </Link>
        </motion.div>
      </AnimatedSection>

      {/* ── Header ─────────────────────────────────── */}
      <AnimatedSection className="mb-20 text-center">
        {/* Available badge */}
        <motion.div variants={textVariant} className="flex justify-center mb-8">
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-green-400 text-sm font-medium tracking-wide">
              Available for work
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={textVariant}
          className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6"
        >
          {contact.name.split(" ").slice(0, 2).join(" ")}
          <span className="block text-foreground/50 text-2xl md:text-4xl lg:text-5xl font-light tracking-normal mt-2">
            {contact.name.split(" ").slice(2).join(" ")}
          </span>
        </motion.h1>

        {/* Contact info pills */}
        <motion.div
          variants={textVariant}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8"
        >
          <a
            href={`mailto:${contact.email}`}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/[0.05] border border-foreground/10 hover:border-foreground/25 hover:bg-foreground/[0.08] transition-all duration-300 text-sm text-gray-500 hover:text-foreground"
          >
            <Mail className="w-3.5 h-3.5 text-foreground/40 group-hover:text-foreground/70 transition-colors" />
            {contact.email}
          </a>

          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/[0.05] border border-foreground/10 text-sm text-gray-500">
            <MapPin className="w-3.5 h-3.5 text-foreground/40" />
            {contact.location}
          </span>
        </motion.div>
      </AnimatedSection>

      {/* ── Summary ────────────────────────────────── */}
      <AnimatedSection className="mb-20">
        <motion.div
          variants={cardVariant}
          className="relative rounded-2xl bg-foreground/[0.03] backdrop-blur-xl border border-foreground/10 p-8 md:p-10 overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-white/[0.06] to-transparent rounded-full blur-[80px] pointer-events-none" />
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light relative z-10">
            {summary}
          </p>
        </motion.div>
      </AnimatedSection>

      {/* ── Technical Skills ───────────────────────── */}
      <AnimatedSection className="mb-24">
        <motion.div
          variants={textVariant}
          className="flex items-center gap-3 mb-8"
        >
          <Code className="w-5 h-5 text-foreground/40" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Technical Skills
          </h2>
          <span className="flex-1 h-px bg-gradient-to-r from-foreground/10 to-transparent" />
        </motion.div>

        <motion.div variants={textVariant} className="flex flex-wrap gap-2.5">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <span
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-foreground/[0.06] text-gray-500 border border-foreground/10 hover:border-foreground/25 hover:bg-foreground/[0.1] transition-all duration-300 cursor-default"
              >
                <IconComponent className="w-3.5 h-3.5 text-foreground/40" />
                {skill.name}
              </span>
            );
          })}
        </motion.div>
      </AnimatedSection>

      {/* ── Experience ─────────────────────────────── */}
      <AnimatedSection className="mb-24">
        <motion.div
          variants={textVariant}
          className="flex items-center gap-3 mb-10"
        >
          <Briefcase className="w-5 h-5 text-foreground/40" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Experience
          </h2>
          <span className="flex-1 h-px bg-gradient-to-r from-foreground/10 to-transparent" />
        </motion.div>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent hidden md:block" />

          {experiences.map((exp, i) => (
            <AnimatedSection key={i}>
              <motion.div
                variants={cardVariant}
                className="group relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-[13px] top-8 w-3 h-3 rounded-full bg-foreground/20 border-2 border-foreground/30 hidden md:block group-hover:bg-foreground/40 transition-colors" />

                <div
                  className={`relative rounded-2xl bg-foreground/[0.03] backdrop-blur-xl border border-foreground/10 hover:border-foreground/20 transition-all duration-500 overflow-hidden`}
                >
                  {/* Top gradient bar */}
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${exp.gradient}`}
                  />

                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-5">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.company}
                        </h3>
                        <p className="text-foreground/60 text-sm font-medium mt-0.5">
                          {exp.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4 mt-0.5 text-foreground/20 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Education ──────────────────────────────── */}
      <AnimatedSection className="mb-16">
        <motion.div
          variants={textVariant}
          className="flex items-center gap-3 mb-10"
        >
          <GraduationCap className="w-5 h-5 text-foreground/40" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Education
          </h2>
          <span className="flex-1 h-px bg-gradient-to-r from-foreground/10 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <AnimatedSection key={i}>
              <motion.div
                variants={cardVariant}
                whileHover={{ y: -4 }}
                className="group relative h-full rounded-2xl bg-foreground/[0.03] backdrop-blur-xl border border-foreground/10 hover:border-foreground/20 transition-all duration-500 overflow-hidden hover:shadow-lg"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                {/* Gradient area */}
                <div
                  className={`relative h-32 w-full bg-gradient-to-br ${edu.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <GraduationCap className="w-12 h-12 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
                </div>

                <div className="relative p-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-foreground/60 text-sm font-medium mb-1">
                    {edu.degree}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-5">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {edu.highlights.map((hl, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-gray-400 text-xs leading-relaxed font-light group-hover:text-gray-300 transition-colors"
                      >
                        <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-foreground/20 flex-shrink-0" />
                        {hl}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Download CTA ───────────────────────────── */}
      <AnimatedSection className="text-center">
        <motion.div
          variants={textVariant}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <span className="w-8 h-px bg-foreground/10" />
            --- Want a copy? ---
            <span className="w-8 h-px bg-foreground/10" />
          </p>
          <motion.a
            href="/file/CV-TirmidziAhmadFuzna.pdf"
            download="CV-TirmidziAhmadFuzna.pdf"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold text-sm overflow-hidden transition-all duration-300 border border-foreground/10 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <Download className="w-4 h-4" />
            Download Full CV
          </motion.a>
        </motion.div>
      </AnimatedSection>
    </main>
  );
}
