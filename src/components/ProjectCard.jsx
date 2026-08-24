import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  // Featured Project Editorial Showcase (Wide alternating row layout)
  if (project.featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="group relative rounded-3xl bg-[#0e0e12] border border-white/10 hover:border-red-500/40 p-6 sm:p-8 lg:p-10 transition-all duration-500 shadow-2xl overflow-hidden backdrop-blur-xl"
      >
        {/* Subtle Ambient Red Gradient Accent in Background */}
        <div
          className={`absolute -inset-1 bg-gradient-to-r ${project.accent || "from-red-600/10 to-transparent"} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Visual Preview Side */}
          <div
            className={`lg:col-span-7 ${
              isEven ? "lg:order-1" : "lg:order-2"
            } relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl group-hover:border-red-500/30 transition-colors`}
          >
            {/* Browser / Frame Top Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-black/80 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <span className="text-[11px] font-mono-code text-zinc-500 tracking-wider">
                {project.tagline}
              </span>
              <span className="text-[11px] font-mono-code text-red-400 font-bold">
                {project.featuredNumber}
              </span>
            </div>

            {/* Project Image Showcase with Zoom and Action Overlay */}
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 group-hover:brightness-100 transition-transform duration-700 ease-out"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
          </div>

          {/* Text & Meta Side */}
          <div
            className={`lg:col-span-5 ${
              isEven ? "lg:order-2" : "lg:order-1"
            } flex flex-col justify-between space-y-5`}
          >
            <div>
              {/* Category & Index Pill */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-red-500 font-mono-code text-sm font-bold tracking-widest uppercase">
                  {project.featuredNumber} //
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-code uppercase tracking-wider bg-white/5 text-zinc-400 border border-white/10">
                  {project.tagline}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight group-hover:text-red-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-zinc-400 font-body leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono-code bg-white/[0.04] text-zinc-300 border border-white/5 group-hover:border-red-500/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Live Platform</span>
                  <ArrowUpRight
                    size={15}
                    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                  />
                </a>
              )}

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-mono-code text-xs uppercase tracking-wider rounded-xl border border-white/10 hover:border-red-500/30 transition-colors"
                >
                  <Github size={15} />
                  <span>Source Code</span>
                </a>
              ) : (
                <span className="text-[11px] font-mono-code text-zinc-500">
                  Commercial Project
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard Project Card (for secondary / grid items)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col justify-between rounded-2xl bg-[#0e0e12] border border-white/10 hover:border-red-500/40 p-5 transition-all duration-300 hover:-translate-y-1 shadow-xl overflow-hidden"
    >
      {/* Image Preview Container */}
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black/60 border border-white/5 mb-5 group-hover:border-red-500/20 transition-colors">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-mono-code bg-black/80 text-zinc-300 border border-white/10 backdrop-blur-md">
          {project.featuredNumber}
        </span>
      </div>

      {/* Info Container */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs font-mono-code text-red-400 uppercase tracking-wider mb-1">
            {project.tagline}
          </p>
          <h4 className="text-xl font-display font-bold text-white group-hover:text-red-400 transition-colors mb-2">
            {project.title}
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400 font-body line-clamp-3 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 4).map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-white/[0.03] text-zinc-400 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub source for ${project.title}`}
                className="flex items-center gap-1.5 text-xs font-mono-code text-zinc-400 hover:text-white transition-colors"
              >
                <Github size={14} />
                <span>Code</span>
              </a>
            ) : (
              <span className="text-[10px] font-mono-code text-zinc-600">
                Proprietary
              </span>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
              >
                <span>Live Preview</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
