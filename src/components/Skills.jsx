import { useState, useMemo } from "react";
import { skills, skillCategories } from "../data/skills";
import { motion, AnimatePresence } from "framer-motion";

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <span className="text-xs uppercase tracking-widest text-rose-400 font-mono-code mb-3 block">
              Stack
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white">
              Skills & Expertise.
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-white/[0.02] border border-white/[0.07] backdrop-blur-xl">
            {skillCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-white text-black font-semibold shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="group relative rounded-3xl bg-white/[0.015] border border-white/[0.06] hover:border-rose-500/25 p-5 transition-all duration-300 hover:-translate-y-1 backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-black/40 border border-white/[0.06] p-2.5 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain filter group-hover:scale-105 transition-transform"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-semibold uppercase bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                      {skill.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-semibold text-white group-hover:text-rose-400 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="mt-1 text-xs text-zinc-400 font-body leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono-code text-zinc-500">
                  <span className="uppercase">{skill.category}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-rose-500 transition-colors" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
