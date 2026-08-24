import { useState, useMemo } from "react";
import { skills, skillCategories } from "../data/skills";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal, Sparkles, CheckCircle2 } from "lucide-react";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "all") return skills;
    return skills.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-[#09090c] overflow-hidden border-t border-white/5"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-800/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono-code uppercase tracking-widest mb-3">
              <span>05 // Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white uppercase">
              Skills & <span className="text-red-500">Technologies</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-xl font-body">
              Verified stack of modern languages, frontend frameworks, backend engines, databases, and engineering workflows.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {skillCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-code uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-red-600 text-white font-bold shadow-md shadow-red-600/30"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.02 }}
                className="group relative rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/40 p-5 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-red-600/10 backdrop-blur-md flex flex-col justify-between"
              >
                {/* Header with Icon & Category Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-black/60 border border-white/10 group-hover:border-red-500/30 p-2.5 flex items-center justify-center transition-colors">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20">
                      {skill.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-red-400 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="mt-1.5 text-xs text-zinc-400 font-body leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Subtle Interactive Bottom Indicator */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-zinc-500">
                  <span className="uppercase">{skill.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-red-500 transition-colors" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Engineering Philosophy Card */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/20 via-black/40 to-white/[0.02] border border-red-500/20 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-red-500/20 text-red-400">
              <Terminal size={28} />
            </div>
            <div>
              <h4 className="text-lg font-display font-bold text-white uppercase">
                Continuous Learning & Architecture
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-body">
                Committed to writing testable, maintainable code with strict TypeScript/Zod validations and scalable database query structures.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono-code text-xs text-red-400 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Ready for Production Deployments</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
