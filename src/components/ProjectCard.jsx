import { ArrowUpRight, Github } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="group flex flex-col justify-between rounded-[28px] bg-[#0c0c10] border border-white/[0.08] hover:border-rose-500/30 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 shadow-xl overflow-hidden will-change-transform"
    >
      {/* Image Preview Container */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-950 border border-white/[0.06] mb-5">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
      </div>

      {/* Info Container */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-mono-code text-rose-400 uppercase tracking-wider block mb-1.5 font-medium">
            {project.tagline}
          </span>
          <h4 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-rose-400 transition-colors mb-2">
            {project.title}
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400 font-body line-clamp-3 leading-relaxed mb-5">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.slice(0, 4).map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-code bg-white/[0.03] text-zinc-300 border border-white/[0.05]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
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
                Commercial
              </span>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
              >
                <span>Live Preview</span>
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
