import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import rajanHd from "../assets/rajan_hd.jpg";

const Hero = () => {
  const containerRef = useRef(null);
  const photoCardRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 60]);
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0.2]);

  const shineRef = useRef(null);

  useEffect(() => {
    const card = photoCardRef.current;
    const shine = shineRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      // Mouse distance relative to card center (-1 to 1 normalized range)
      const deltaX = (e.clientX - cardCenterX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - cardCenterY) / (window.innerHeight / 2);

      // Deep responsive 3D bend
      const rotateX = -deltaY * 22;
      const rotateY = deltaX * 22;
      const moveX = deltaX * 12;
      const moveY = deltaY * 12;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        x: moveX,
        y: moveY,
        transformPerspective: 900,
        ease: "power2.out",
        duration: 0.35,
      });

      if (shine) {
        const shineX = (e.clientX - rect.left) / rect.width * 100;
        const shineY = (e.clientY - rect.top) / rect.height * 100;
        gsap.to(shine, {
          background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.18) 0%, transparent 60%)`,
          ease: "power1.out",
          duration: 0.2,
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        ease: "power3.out",
        duration: 0.8,
      });
      if (shine) {
        gsap.to(shine, {
          background: "transparent",
          duration: 0.5,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Subtle Luxury Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-b from-rose-900/15 via-rose-950/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="max-w-6xl mx-auto px-4 sm:px-6 w-full z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column — Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
              <span className="text-xs font-medium text-zinc-300 tracking-wide">
                Associate SDE-1 @ Healthligence • Available for Roles
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.95] text-white">
                Rajan Verma<span className="text-rose-500">.</span>
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-heading font-medium text-zinc-300 tracking-tight">
                Software Developer <span className="text-zinc-500 font-light">&</span> Full-Stack Engineer
              </p>
            </motion.div>

            {/* Editorial Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-lg text-base sm:text-lg text-zinc-400 font-body leading-relaxed"
            >
              Engineering scalable web applications, robust backend architectures,
              and polished digital experiences with Next.js, React, Node.js, and PostgreSQL.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-medium text-sm rounded-full shadow-xl shadow-rose-600/20 hover:shadow-rose-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>View Selected Works</span>
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.03] hover:bg-white/[0.08] text-zinc-200 hover:text-white font-medium text-sm rounded-full border border-white/[0.08] hover:border-rose-500/30 transition-all duration-300 backdrop-blur-sm"
              >
                <span>Contact Me</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/Rajan%20Verma%20%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-zinc-400 hover:text-rose-400 text-sm font-medium transition-colors"
                title="View Resume"
              >
                <FileText size={15} />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex items-center gap-5 text-zinc-400"
            >
              <span className="text-xs text-zinc-500 uppercase tracking-wider font-mono-code">
                Connect
              </span>
              <div className="h-px w-6 bg-zinc-800" />
              <a
                href="https://github.com/boylish"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-full hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/rajanverma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-full hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:rajanverma0879@gmail.com"
                aria-label="Email Rajan"
                className="p-2 rounded-full hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right Column — Luxury Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm"
            >
              {/* Subtle Ambient Back-Glow */}
              <div className="absolute -inset-1 bg-gradient-to-b from-rose-500/20 via-transparent to-transparent rounded-[36px] blur-2xl opacity-50" />

              <div
                ref={photoCardRef}
                className="relative rounded-[32px] bg-[#0c0c10] border border-white/[0.08] p-3.5 shadow-2xl overflow-hidden backdrop-blur-2xl transition-all duration-300"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Portrait Container */}
                <div className="relative rounded-[26px] overflow-hidden aspect-[4/5] w-full bg-zinc-950 border border-white/[0.06] group shadow-inner">
                  <img
                    src={rajanHd}
                    alt="Rajan Verma"
                    className="w-full h-full object-cover object-top contrast-[105%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Specular Mouse Light Shine */}
                  <div ref={shineRef} className="absolute inset-0 pointer-events-none transition-opacity duration-200" />

                  {/* Bottom Meta Inside Portrait */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/[0.08] flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white tracking-tight">Rajan Verma</p>
                      <p className="text-xs text-rose-400 font-medium">Associate SDE-1</p>
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-mono-code text-zinc-300">
                      India • Remote
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About Section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors group cursor-pointer"
      >
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-rose-500"
          />
        </div>
      </a>
    </section>
  );
};

export default Hero;
