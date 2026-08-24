import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#040405] text-zinc-400 py-12 sm:py-16 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-white/5">
          {/* Branding & Role */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-1 font-display font-bold text-xl text-white group"
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
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-sm font-body">
              Associate Software Development Engineer crafting scalable web applications and intuitive digital experiences.
            </p>
          </div>

          {/* Social Links & Back-To-Top Button */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/boylish"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] hover:text-red-400 border border-white/5 hover:border-red-500/30 transition-all duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/rajanverma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] hover:text-red-400 border border-white/5 hover:border-red-500/30 transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:rajanverma0879@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] hover:text-red-400 border border-white/5 hover:border-red-500/30 transition-all duration-200"
            >
              <Mail size={18} />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2.5 rounded-xl bg-red-600/80 hover:bg-red-600 text-white shadow-lg shadow-red-600/20 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono-code text-zinc-500">
          <p>© {new Date().getFullYear()} Rajan Verma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
