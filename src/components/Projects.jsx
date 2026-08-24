import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { projects, projectCategories } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers } from "lucide-react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    if (activeCategory === "featured") return projects.filter((p) => p.featured);
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Separate featured from non-featured if viewing "all"
  const featuredProjects = useMemo(() => {
    return filteredProjects.filter((p) => p.featured);
  }, [filteredProjects]);

  const secondaryProjects = useMemo(() => {
    return filteredProjects.filter((p) => !p.featured);
  }, [filteredProjects]);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 bg-[#050507] overflow-hidden border-t border-white/5"
    >
      {/* Ambient Red Glows */}
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono-code uppercase tracking-widest mb-3">
              <span>04 // Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white uppercase">
              Featured <span className="text-red-500">Projects</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-xl font-body">
              A curated collection of full-stack platforms, developer tools, and interactive digital experiences.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {projectCategories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono-code uppercase tracking-wider transition-all duration-200 cursor-pointer ${
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

        {/* Featured Projects Editorial Showcase List */}
        <div className="space-y-12 sm:space-y-16">
          <AnimatePresence mode="wait">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Secondary / Additional Projects Grid */}
        {secondaryProjects.length > 0 && (
          <div className="mt-20 pt-16 border-t border-white/5">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase flex items-center gap-2">
                  <Layers size={22} className="text-red-500" />
                  <span>More Projects & Explorations</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-mono-code mt-1">
                  Additional applications, automated bots, and frontend motion labs.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
