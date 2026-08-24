import { motion } from "framer-motion";
import { FileText, ArrowUpRight, Check, ArrowRight } from "lucide-react";
import { marqueeTech } from "../data/skills";

const stats = [
  {
    value: "1+",
    suffix: "Yrs",
    label: "Professional Engineering",
    sublabel: "Healthligence & Clearcatnet",
  },
  {
    value: "10+",
    suffix: "Apps",
    label: "Shipped Projects",
    sublabel: "Full-Stack Web & Mobile",
  },
  {
    value: "500+",
    suffix: "DSA",
    label: "Algorithmic Problems",
    sublabel: "LeetCode & Problem Solving",
  },
  {
    value: "100%",
    suffix: "",
    label: "Type Safety & Quality",
    sublabel: "Scalable Architecture",
  },
];

const pillars = [
  {
    title: "Full-Stack Web Architecture",
    description:
      "Designing resilient, end-to-end applications using Next.js App Router, React, Node.js, PostgreSQL, and MongoDB with clean modular structures.",
  },
  {
    title: "Cross-Platform Native Apps",
    description:
      "Packaging and distributing high-performance web products into native Android mobile applications with Capacitor.",
  },
  {
    title: "Type-Safe Forms & State",
    description:
      "Engineering complex dynamic form validation with React Hook Form & Zod, coupled with reactive state management in Zustand.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#070709] overflow-hidden border-t border-white/[0.06]">
      {/* Subtle Marquee Ticker */}
      <div className="w-full py-3 mb-24 bg-white/[0.015] border-y border-white/[0.05] overflow-hidden">
        <div className="animate-luxury-marquee flex items-center gap-10 whitespace-nowrap">
          {[...marqueeTech, ...marqueeTech].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 text-xs font-mono-code text-zinc-400">
              <span className="w-1 h-1 rounded-full bg-rose-500/80" />
              <span className="tracking-wider uppercase hover:text-white transition-colors">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <span className="text-xs uppercase tracking-widest text-rose-400 font-mono-code mb-3">
            About
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white">
            Engineering with precision <br className="hidden sm:inline" />
            <span className="text-zinc-500 font-light">&</span> creative intent.
          </h2>
        </div>

        {/* Editorial Story + Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column — Personal Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-xl relative">
              <p className="text-xl sm:text-2xl font-heading font-medium text-white leading-relaxed mb-6">
                "I build software that balances architectural rigor under the hood with refined, intuitive design on the surface."
              </p>
              
              <div className="space-y-4 text-sm sm:text-base text-zinc-400 font-body leading-relaxed">
                <p>
                  I am a B.Tech graduate in Information Technology (2025) with over a year of professional experience building enterprise and product web applications. Currently, I work as an <strong className="text-white font-medium">Associate Software Development Engineer – 1 at Healthligence</strong>, developing Next.js applications and packaging cross-platform mobile apps with Capacitor.
                </p>
                <p>
                  Previously, at <strong className="text-white font-medium">Clearcatnet</strong>, I had full-stack engineering responsibility for the <strong className="text-rose-400 font-medium">Learnees</strong> learning platform across Next.js frontend architectures, Node.js/Firebase APIs, and authentication workflows.
                </p>
              </div>
            </div>

            {/* Engineering Pillars */}
            <div className="space-y-3 pt-2">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.015] border border-white/[0.05] hover:border-rose-500/20 transition-colors"
                >
                  <h4 className="text-base font-semibold text-white mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span>{pillar.title}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pl-3.5">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/Rajan_Verma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Rajan_Verma_Resume.pdf"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs sm:text-sm rounded-full shadow-lg shadow-rose-600/20 hover:shadow-rose-600/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText size={15} />
                <span>Download Resume</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm text-zinc-300 hover:text-white font-medium border border-white/10 hover:border-white/20 rounded-full transition-colors"
              >
                <span>Let's Discuss Projects</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column — Luxury Stat Metrics */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-rose-500/30 transition-all duration-300 backdrop-blur-xl group"
              >
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight group-hover:text-rose-400 transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-base font-mono-code text-rose-500 font-semibold">
                    {stat.suffix}
                  </span>
                </div>

                <p className="mt-2 text-sm sm:text-base font-semibold text-zinc-200">
                  {stat.label}
                </p>
                <p className="text-xs text-zinc-500 font-mono-code mt-0.5">
                  {stat.sublabel}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
