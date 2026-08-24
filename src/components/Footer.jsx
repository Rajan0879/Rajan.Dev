import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-white/[0.06] py-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-white text-base tracking-tight">
            RAJAN VERMA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          <span className="text-xs text-zinc-500 font-mono-code ml-2">
            © {new Date().getFullYear()}
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs text-zinc-400">
          <a
            href="https://github.com/boylish"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rajanverma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:rajanverma0879@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group flex items-center gap-2 text-xs font-mono-code text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <span>Top</span>
          <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] group-hover:border-rose-500/40 flex items-center justify-center transition-colors">
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
