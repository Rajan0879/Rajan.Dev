import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, GraduationCap } from "lucide-react";
import { experiences, education } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-28 sm:py-36 bg-[#060608] overflow-hidden border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start mb-20"
        >
          <span className="text-xs uppercase tracking-widest text-rose-400 font-mono-code mb-3">
            Career
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white">
            Professional Experience.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/[0.08] ml-4 sm:ml-8 space-y-12 sm:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Dot */}
              <div
                className={`absolute -left-[7px] top-2 w-3 h-3 rounded-full transition-all duration-300 ${
                  exp.current
                    ? "bg-rose-500 shadow-[0_0_12px_#f43f5e]"
                    : "bg-zinc-700 group-hover:bg-rose-400"
                }`}
              />

              {/* Experience Card */}
              <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.015] border border-white/[0.06] group-hover:border-rose-500/20 backdrop-blur-xl transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-5 border-b border-white/[0.05]">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-rose-400 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-3 py-0.5 rounded-full text-[11px] font-mono-code font-semibold uppercase bg-rose-500/10 text-rose-400 border border-rose-500/20">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-2 text-sm text-zinc-300">
                      <span className="font-medium text-white">{exp.company}</span>
                      {exp.parentCompany && (
                        <span className="text-xs text-zinc-500">({exp.parentCompany})</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono-code text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-rose-400" />
                      {exp.period}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-6 space-y-3.5 text-sm sm:text-base text-zinc-400 font-body">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-500/80 flex-shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="mt-6 pt-5 border-t border-white/[0.05] flex flex-wrap items-center gap-2">
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full text-xs font-mono-code text-zinc-300 bg-white/[0.03] border border-white/[0.05]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Subsection */}
        <div id="education" className="mt-24 pt-16 border-t border-white/[0.06]">
          <div className="flex flex-col items-start mb-12">
            <span className="text-xs uppercase tracking-widest text-rose-400 font-mono-code mb-2">
              Education
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white">
              Education & Qualifications.
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-7 sm:p-9 rounded-3xl bg-white/[0.015] border border-white/[0.06] hover:border-rose-500/20 backdrop-blur-xl transition-all flex flex-col md:flex-row justify-between gap-6 items-start md:items-center"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-rose-500/10 text-rose-400">
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
                  <div className="px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono-code font-bold text-xs">
                    {edu.grade}
                  </div>
                  <span className="text-xs font-mono-code text-zinc-400">
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
