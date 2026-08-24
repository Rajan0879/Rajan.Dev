import { useState, useMemo } from "react";
import { skills, skillCategories } from "../data/skills";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "all") return skills;
    return skills.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="skills"
      className="relative py-28 sm:py-36 bg-[#070709] overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-rose-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-rose-400 font-mono-code mb-3 block">
            Technical Stack & Proficiency
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white">
            Skills & Expertise<span className="text-rose-500">.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl">
            Core technologies, libraries, and frameworks utilized across full-stack web and mobile engineering.
          </p>

          {/* Clean Segmented Filter Bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl max-w-4xl">
            {skillCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-rose-600 text-white font-semibold shadow-lg shadow-rose-600/30"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid with Progress Bars & Star Rating */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative rounded-3xl bg-[#0c0c10] border border-white/[0.08] hover:border-rose-500/30 p-5 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              {/* Top Row: Icon + Badge + Stars */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-black/60 border border-white/[0.08] p-2.5 flex items-center justify-center group-hover:border-rose-500/30 transition-colors">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      loading="lazy"
                      className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold uppercase bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                      {skill.badge}
                    </span>

                    {/* Star Rating */}
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={11}
                          className={
                            i < skill.stars
                              ? "fill-amber-400 text-amber-400"
                              : "text-zinc-700"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-base font-display font-bold text-white group-hover:text-rose-400 transition-colors">
                  {skill.name}
                </h3>
              </div>

              {/* Bottom: Animated Progress Bar & Percentage */}
              <div className="mt-5 pt-3 border-t border-white/[0.04]">
                <div className="flex items-center justify-between text-xs font-mono-code mb-2">
                  <span className="text-[11px] text-zinc-500 uppercase tracking-wider">
                    Proficiency
                  </span>
                  <span className="text-xs font-bold text-rose-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Track */}
                <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden p-[1px]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-rose-600 to-rose-400 shadow-[0_0_8px_#f43f5e]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
