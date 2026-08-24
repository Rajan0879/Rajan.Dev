import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { projects, projectCategories } from "../data/projects";
import { ArrowUpRight, Github, Sparkles, FolderGit2 } from "lucide-react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    if (activeCategory === "featured") return projects.filter((p) => p.featured);
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const spotlightProject = filteredProjects[0];
  const restProjects = filteredProjects.slice(1);

  return (
    <section
      id="projects"
      className="relative py-28 sm:py-36 bg-[#060608] overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-rose-400 font-mono-code mb-3 block">
              Portfolio Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white">
              Selected Works<span className="text-rose-500">.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl">
            {projectCategories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
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
        </motion.div>

        {/* 1. Flagship Spotlight Showcase */}
        {spotlightProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <div className="group relative rounded-[32px] bg-[#0c0c10] border border-white/[0.08] hover:border-rose-500/30 p-6 sm:p-9 lg:p-11 transition-all duration-300 shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Visual Preview */}
                <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/[0.08] shadow-2xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={spotlightProject.image}
                      alt={spotlightProject.title}
                      className="w-full h-full object-cover object-top filter contrast-[103%] group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono-code font-bold uppercase bg-rose-500/15 text-rose-400 border border-rose-500/30">
                        Featured Production Platform
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight group-hover:text-rose-400 transition-colors">
                      {spotlightProject.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base text-zinc-400 font-body leading-relaxed">
                      {spotlightProject.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {spotlightProject.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full text-xs font-mono-code bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-4 pt-2">
                    {spotlightProject.demo && (
                      <a
                        href={spotlightProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 px-6 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs rounded-full shadow-lg shadow-rose-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span>Live Platform</span>
                        <ArrowUpRight
                          size={14}
                          className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                        />
                      </a>
                    )}

                    {spotlightProject.github && (
                      <a
                        href={spotlightProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white font-medium text-xs rounded-full border border-white/[0.08] hover:border-rose-500/30 transition-colors"
                      >
                        <Github size={14} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. Grid of Secondary Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
