import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { projects, projectCategories } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    if (activeCategory === "featured") return projects.filter((p) => p.featured);
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featuredProjects = useMemo(() => {
    return filteredProjects.filter((p) => p.featured);
  }, [filteredProjects]);

  const secondaryProjects = useMemo(() => {
    return filteredProjects.filter((p) => !p.featured);
  }, [filteredProjects]);

  return (
    <section
      id="projects"
      className="relative py-28 sm:py-36 bg-[#060608] overflow-hidden border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <span className="text-xs uppercase tracking-widest text-rose-400 font-mono-code mb-3 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white">
              Selected Works.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-white/[0.02] border border-white/[0.07] backdrop-blur-xl">
            {projectCategories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
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

        {/* Featured Projects List */}
        <div className="space-y-12 sm:space-y-16">
          <AnimatePresence mode="wait">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Secondary Projects Grid */}
        {secondaryProjects.length > 0 && (
          <div className="mt-20 pt-16 border-t border-white/[0.06]">
            <div className="mb-10">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                More Explorations.
              </h3>
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
