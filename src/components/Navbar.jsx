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
      setScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const sections = ["home", "about", "experience", "projects", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
              scrolled
                ? "bg-[#0c0c0e]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80"
                : "bg-transparent"
            }`}
          >
            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center gap-1 font-display font-bold text-lg sm:text-xl tracking-tight text-white focus:outline-none"
            >
              <span className="text-red-500 font-mono-code font-bold text-xl group-hover:-translate-x-0.5 transition-transform duration-200">
                &lt;
              </span>
              <span className="tracking-wider uppercase font-extrabold group-hover:text-red-400 transition-colors">
                RAJAN<span className="text-red-500">.</span>DEV
              </span>
              <span className="text-red-500 font-mono-code font-bold text-xl group-hover:translate-x-0.5 transition-transform duration-200">
                /&gt;
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wide uppercase transition-all duration-200 rounded-lg ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-red-500 rounded-full"
                        style={{
                          boxShadow: "0 0 8px #ef4444",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-white bg-red-600/90 hover:bg-red-600 rounded-xl overflow-hidden shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Let's Talk</span>
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 rounded-xl text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay / Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 pt-28"
          >
            {/* Background Ambient Glow */}
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col space-y-4">
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono-code mb-2">
                Navigation
              </p>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-display font-bold uppercase tracking-tight py-2 transition-colors flex items-center justify-between border-b border-white/5 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-red-500"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono-code text-zinc-600">0{i + 1}</span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="space-y-4 pt-6 border-t border-white/10"
            >
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-red-600 text-white font-semibold uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30"
              >
                <span>Let's Build Together</span>
                <ArrowUpRight size={18} />
              </a>

              <div className="flex items-center justify-center gap-6 pt-2 text-zinc-400">
                <a
                  href="https://github.com/boylish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/rajanverma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:rajanverma0879@gmail.com"
                  className="hover:text-red-400 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
