import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["home", "about", "experience", "projects", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav
            className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
              scrolled
                ? "bg-[#09090b]/80 backdrop-blur-2xl border border-white/[0.08] shadow-2xl shadow-black/80"
                : "bg-transparent"
            }`}
          >
            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center gap-1.5 font-display font-bold text-base tracking-tight text-white focus:outline-none"
            >
              <span className="tracking-tight text-sm sm:text-base font-extrabold text-white group-hover:text-rose-400 transition-colors">
                RAJAN VERMA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-xs font-medium tracking-normal transition-all duration-300 rounded-full ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-white/[0.06] rounded-full border border-white/[0.08] -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-tight text-white bg-rose-600 hover:bg-rose-500 rounded-full shadow-lg shadow-rose-600/20 hover:shadow-rose-600/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get in Touch</span>
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 rounded-full text-zinc-300 hover:text-white bg-white/5 border border-white/10 transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl md:hidden flex flex-col justify-between p-8 pt-28"
          >
            <div className="flex flex-col space-y-6">
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono-code">
                Menu
              </p>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-3xl font-display font-semibold tracking-tight py-1 transition-colors flex items-center justify-between ${
                    activeSection === link.href.replace("#", "")
                      ? "text-rose-500"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono-code text-zinc-600">0{i + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 bg-rose-600 text-white font-semibold text-sm rounded-full shadow-lg shadow-rose-600/30"
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={16} />
              </a>

              <div className="flex items-center justify-center gap-6 pt-2 text-zinc-400">
                <a href="https://github.com/boylish" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/rajanverma" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:rajanverma0879@gmail.com" className="hover:text-rose-400 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
