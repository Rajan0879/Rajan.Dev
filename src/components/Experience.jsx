import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2, GraduationCap, Award, CheckCircle } from "lucide-react";
import { experiences, education } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 bg-[#08080a] overflow-hidden border-t border-white/5"
    >
      {/* Ambient Red Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-red-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono-code uppercase tracking-widest mb-3">
            <span>02 // Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white uppercase">
            Work <span className="text-red-500">Experience</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl font-body">
            Professional track record of building production web applications, cross-platform Android solutions, and scalable backend services.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-12 sm:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  exp.current
                    ? "bg-red-500 border-red-400 shadow-[0_0_12px_#ef4444]"
                    : "bg-[#08080a] border-white/30 group-hover:border-red-400 group-hover:bg-red-500/50"
                }`}
              />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 group-hover:border-red-500/30 backdrop-blur-md transition-all duration-300 shadow-xl">
                {/* Header: Role & Period */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-white/5">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-red-400 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-code font-bold uppercase tracking-wider bg-red-500/20 text-red-400 border border-red-500/30">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 mt-1.5 text-sm text-zinc-300 font-medium">
                      <span className="flex items-center gap-1 text-white">
                        <Building2 size={15} className="text-red-500" />
                        {exp.company}
                      </span>
                      {exp.parentCompany && (
                        <span className="text-xs text-zinc-500 hidden sm:inline">
                          ({exp.parentCompany})
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono-code text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-red-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets / Highlights */}
                <ul className="mt-5 space-y-3 text-sm sm:text-base text-zinc-300 font-body">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono-code uppercase tracking-wider text-zinc-500 mr-2">
                    Technologies:
                  </span>
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono-code text-zinc-300 bg-white/[0.04] border border-white/5 group-hover:border-red-500/20 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Highlight Subsection */}
        <div id="education" className="mt-24 pt-16 border-t border-white/5">
          <div className="flex flex-col items-start mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono-code uppercase tracking-widest mb-3">
              <span>03 // Academic Foundation</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-white uppercase">
              Education & <span className="text-red-500">Degree</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/30 backdrop-blur-md transition-all shadow-lg flex flex-col md:flex-row justify-between gap-6 items-start md:items-center"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-red-500/10 text-red-400">
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-display font-bold text-white">
                        {edu.degree} — {edu.field}
                      </h4>
                      <p className="text-sm text-zinc-300 font-medium">
                        {edu.institution}, {edu.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-3xl pt-2 font-body leading-relaxed">
                    {edu.details}
                  </p>
                </div>

                <div className="flex md:flex-col items-end gap-2 text-right">
                  <div className="px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 font-mono-code font-bold text-xs uppercase tracking-wider">
                    {edu.grade}
                  </div>
                  <span className="text-xs font-mono-code text-zinc-400 flex items-center gap-1">
                    <Calendar size={13} />
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
