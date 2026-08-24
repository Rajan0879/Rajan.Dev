import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Terminal } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080808] text-white p-6 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-md w-full p-8 rounded-3xl bg-[#0e0e12] border border-white/10 text-center shadow-2xl backdrop-blur-xl">
        <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-4 border border-red-500/20">
          <Terminal size={24} />
        </div>

        <span className="text-xs font-mono-code uppercase tracking-widest text-red-500">
          Error 404 // Not Found
        </span>

        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white mt-2 mb-3">
          Lost in Space?
        </h1>

        <p className="text-sm text-zinc-400 font-body mb-8 leading-relaxed">
          The route <code className="text-red-400 font-mono-code bg-white/5 px-2 py-0.5 rounded">{location.pathname}</code> does not exist or has been relocated.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Home size={16} />
          <span>Return to Headquarters</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
