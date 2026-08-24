import { motion } from "framer-motion";
import { FileText, Code2, Cpu, Sparkles, Layers, CheckCircle2, ArrowUpRight } from "lucide-react";
import { marqueeTech } from "../data/skills";

const stats = [
  {
    value: "1+",
    suffix: "Yrs",
    label: "Professional Experience",
    sublabel: "Healthligence & Clearcatnet",
    icon: Layers,
  },
  {
    value: "10+",
    suffix: "Apps",
    label: "Production & Projects",
    sublabel: "Full-Stack Web & Mobile",
    icon: Code2,
  },
  {
    value: "100+",
    suffix: "DSA",
    label: "Algorithmic Problems",
    sublabel: "LeetCode & Problem Solving",
    icon: Cpu,
  },
  {
    value: "100%",
    suffix: "",
    label: "Clean Code & Quality",
    sublabel: "Type Safety & Best Practices",
    icon: Sparkles,
  },
];

const pillars = [
  {
    title: "Scalable Full-Stack Engineering",
    description:
      "Architecting end-to-end applications with Next.js, React, Node.js, Express, PostgreSQL, and MongoDB with clean separation of concerns.",
  },
  {
    title: "Cross-Platform Mobile Delivery",
    description:
      "Packaging and distributing high-performance web applications into native Android apps using Capacitor.",
  },
  {
    title: "Robust Forms & State Management",
    description:
      "Building complex, enterprise-ready forms with React Hook Form & Zod, powered by lightweight reactive stores with Zustand & Redux.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0a0a0d] overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-red-900/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Infinite Skills Marquee Ribbon */}
      <div className="w-full py-4 mb-20 bg-black/40 border-y border-white/5 overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {[...marqueeTech, ...marqueeTech].map((tech, i) => (
            <div key={i} className="flex items-center gap-3 text-xs sm:text-sm font-mono-code text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span className="uppercase tracking-wider hover:text-white transition-colors">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono-code uppercase tracking-widest mb-3">
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white uppercase">
            Engineering Products <span className="text-red-500">With Purpose</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl font-body">
            Passionate software engineer focused on building robust web platforms, cross-platform mobile apps, and scalable digital solutions.
          </p>
        </div>

        {/* Grid Layout: Editorial Story + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Personal Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg font-body leading-relaxed"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-transparent" />
              
              <p className="text-xl sm:text-2xl font-heading font-medium text-white mb-4 leading-snug">
                "I believe modern software must be <span className="text-red-400">performant</span> under the hood and <span className="text-white underline decoration-red-500 underline-offset-4">intuitive</span> on the surface."
              </p>
              
              <p className="text-zinc-400 text-sm sm:text-base">
                I am a B.Tech graduate in Information Technology (2025) with over a year of hands-on professional software engineering experience. Currently, I serve as an <strong className="text-white font-semibold">Associate Software Development Engineer – 1 at Healthligence</strong>, where I develop responsive Next.js web applications and package native Android experiences with Capacitor.
              </p>
              
              <p className="text-zinc-400 text-sm sm:text-base mt-3">
                Prior to this, I completed an internship at <strong className="text-white font-semibold">Clearcatnet</strong>, taking end-to-end engineering responsibility for the <strong className="text-red-400">Learnees</strong> learning platform across frontend architecture, Node.js/Firebase APIs, and authentication.
              </p>
            </div>

            {/* Core Engineering Pillars */}
            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-mono-code uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-red-500" />
                <span>What I Bring to the Table</span>
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors"
                  >
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="/Rajan_Verma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Rajan_Verma_Resume.pdf"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText size={16} />
                <span>Download Official Resume</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm text-zinc-300 hover:text-white uppercase font-mono-code tracking-wider border border-white/10 hover:border-white/20 rounded-xl transition-colors"
              >
                <span>Hire Rajan</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Key Engineering Numbers / Stats */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/40 transition-all duration-300 group hover:-translate-y-1 backdrop-blur-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 group-hover:bg-red-500/20 group-hover:text-red-300 transition-colors">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-mono-code text-zinc-500 uppercase">
                      Metric 0{index + 1}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight group-hover:text-red-400 transition-colors">
                      {stat.value}
                    </span>
                    <span className="text-lg font-mono-code font-bold text-red-500">
                      {stat.suffix}
                    </span>
                  </div>

                  <p className="mt-2 text-sm sm:text-base font-bold text-zinc-200">
                    {stat.label}
                  </p>
                  <p className="text-xs text-zinc-400 font-mono-code mt-0.5">
                    {stat.sublabel}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
