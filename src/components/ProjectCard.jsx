import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  if (project.featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="group relative rounded-[32px] bg-white/[0.015] border border-white/[0.07] hover:border-rose-500/25 p-7 sm:p-9 lg:p-11 transition-all duration-500 backdrop-blur-2xl overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Visual Preview */}
          <div
            className={`lg:col-span-7 ${
              isEven ? "lg:order-1" : "lg:order-2"
            } relative rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-950 shadow-2xl group-hover:border-rose-500/25 transition-colors`}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover object-top filter contrast-[103%] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
          </div>

          {/* Text Info */}
          <div
            className={`lg:col-span-5 ${
              isEven ? "lg:order-2" : "lg:order-1"
            } flex flex-col justify-between space-y-6`}
          >
            <div>
              <span className="text-xs font-mono-code text-rose-400 tracking-wider uppercase mb-2 block">
                {project.tagline}
              </span>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight group-hover:text-rose-400 transition-colors">
                {project.title}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-zinc-400 font-body leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-full text-xs font-mono-code bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-2">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs rounded-full shadow-lg shadow-rose-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Live Platform</span>
                  <ArrowUpRight
                    size={14}
                    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                  />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white font-medium text-xs rounded-full border border-white/[0.08] hover:border-rose-500/20 transition-colors"
                >
                  <Github size={14} />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col justify-between rounded-3xl bg-white/[0.015] border border-white/[0.06] hover:border-rose-500/25 p-6 transition-all duration-300 hover:-translate-y-1 backdrop-blur-xl"
    >
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-950 border border-white/[0.06] mb-5">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-mono-code text-rose-400 uppercase tracking-wider block mb-1.5">
            {project.tagline}
          </span>
          <h4 className="text-xl font-display font-bold text-white group-hover:text-rose-400 transition-colors mb-2.5">
            {project.title}
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400 font-body line-clamp-3 leading-relaxed mb-5">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.slice(0, 4).map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-code bg-white/[0.03] text-zinc-400 border border-white/[0.05]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub source for ${project.title}`}
                className="flex items-center gap-1.5 text-xs font-mono-code text-zinc-400 hover:text-white transition-colors"
              >
                <Github size={13} />
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
                className="flex items-center gap-1 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
              >
                <span>Preview</span>
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
