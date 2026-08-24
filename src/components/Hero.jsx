import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, FileText, Terminal } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import rajanHd from "../assets/rajan_hd.jpg";

const Hero = () => {
  const containerRef = useRef(null);
  const photoCardRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 80]);
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0.2]);

  // 3D Parallax tilt effect on photo card
  useEffect(() => {
    const card = photoCardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;

      const rotateX = (-mouseY / rect.height) * 14;
      const rotateY = (mouseX / rect.width) * 14;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.5,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        ease: "power2.out",
        duration: 0.8,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (card) card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Background Ambient Red Glows & Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-red-800/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column — Massive Clean Typography & Editorial Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-red-500/30 backdrop-blur-md mb-6 shadow-sm shadow-red-500/10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-sm shadow-red-500" />
              </span>
              <span className="text-xs font-mono-code font-semibold text-zinc-300 tracking-wide uppercase">
                Associate SDE-1 @ Healthligence • Available for Roles
              </span>
            </motion.div>

            {/* Massive Headline Typography with Crisp Outfit Font */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-0"
            >
              <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] tracking-tight leading-[0.92] uppercase text-white">
                RAJAN
              </h1>
              <div className="flex items-baseline">
                <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] tracking-tight leading-[0.92] uppercase text-white">
                  VERMA<span className="text-red-500">.</span>
                </h1>
              </div>
            </motion.div>

            {/* Dynamic Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex items-center gap-2 text-lg sm:text-2xl font-heading font-semibold text-zinc-300"
            >
              <span className="text-red-500 font-mono-code">&gt;</span>
              <span className="text-white">
                <Typewriter
                  words={[
                    "Full-Stack Web Developer",
                    "Software Development Engineer",
                    "React & Next.js Specialist",
                    "MERN Stack & PostgreSQL Architect",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={60}
                  deleteSpeed={35}
                  delaySpeed={1800}
                />
              </span>
            </motion.div>

            {/* Supporting Editorial Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-zinc-400 font-body leading-relaxed"
            >
              Crafting high-impact digital products, scalable full-stack architectures,
              and tactile web experiences. Blending <span className="text-white font-medium">clean engineering</span> with <span className="text-red-400 font-medium">performance-driven design</span>.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-semibold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>Explore Work</span>
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white font-semibold text-sm uppercase tracking-wider rounded-xl border border-white/10 hover:border-red-500/40 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get In Touch</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/Rajan_Verma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-zinc-400 hover:text-red-400 text-xs font-mono-code uppercase tracking-wider transition-colors"
                title="View Resume"
              >
                <FileText size={15} />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Social Links Ribbon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex items-center gap-5 text-zinc-400"
            >
              <span className="text-xs uppercase tracking-widest text-zinc-600 font-mono-code">
                Connect //
              </span>
              <a
                href="https://github.com/boylish"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-red-400 hover:scale-110 border border-white/5 hover:border-red-500/30 transition-all duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/rajanverma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-red-400 hover:scale-110 border border-white/5 hover:border-red-500/30 transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:rajanverma0879@gmail.com"
                aria-label="Email Rajan"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-red-400 hover:scale-110 border border-white/5 hover:border-red-500/30 transition-all duration-200"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right Column — Upgraded High-Definition 3D Hero Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Outer Glow & Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-red-500/40 via-red-600/10 to-transparent rounded-[28px] blur-xl opacity-60 group-hover:opacity-90 transition duration-500" />
              
              <div
                ref={photoCardRef}
                className="relative rounded-[28px] bg-[#0c0c10] border border-white/10 hover:border-red-500/40 p-4 sm:p-5 shadow-2xl overflow-hidden backdrop-blur-2xl transition-all duration-300"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Window Header */}
                <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>rajan_verma.dev</span>
                  </div>
                  <Terminal size={14} className="text-zinc-500" />
                </div>

                {/* Portrait Container with HD Image & Clean Lighting */}
                <div className="relative rounded-2xl overflow-hidden aspect-square w-full bg-zinc-950 border border-white/10 group shadow-inner">
                  <img
                    src={rajanHd}
                    alt="Rajan Verma — Software Developer"
                    className="w-full h-full object-cover object-center contrast-[105%] filter group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Scrim for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Floating Micro-Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        Rajan Verma
                      </p>
                      <p className="text-[11px] text-red-400 font-mono-code">
                        Associate SDE-1 @ Healthligence
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono-code text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Active</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Snapshot Specs */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center font-mono-code">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-red-500/20 transition-colors">
                    <p className="text-[10px] text-zinc-500 uppercase">Core</p>
                    <p className="text-xs font-bold text-white mt-0.5">Next & React</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-red-500/20 transition-colors">
                    <p className="text-[10px] text-zinc-500 uppercase">Backend</p>
                    <p className="text-xs font-bold text-red-400 mt-0.5">Node & SQL</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-red-500/20 transition-colors">
                    <p className="text-[10px] text-zinc-500 uppercase">Focus</p>
                    <p className="text-xs font-bold text-emerald-400 mt-0.5">Full Stack</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Scroll Chevron Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About Section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-red-400 transition-colors group cursor-pointer"
      >
        <span className="text-[10px] uppercase font-mono-code tracking-widest group-hover:text-red-400 transition-colors">
          Scroll Down
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-red-500/50 flex items-start justify-center p-1 transition-colors">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-red-500"
          />
        </div>
      </a>
    </section>
  );
};

export default Hero;
