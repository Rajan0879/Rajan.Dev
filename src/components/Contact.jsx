import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowUpRight, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      user_name: formData.name,

      email: formData.email,
      from_email: formData.email,
      user_email: formData.email,
      reply_to: formData.email,

      to_name: "Rajan Verma",
      to_email: "rajanverma0879@gmail.com",
      recipient: "rajanverma0879@gmail.com",

      subject: formData.subject,
      message: formData.message,
    };

    try {
      const res = await emailjs.send(
        "service_ft0a1lp",
        "template_x0lyfhi",
        templateParams,
        "02SonmZ0Ho9YBKiTa"
      );
      console.log("Email sent successfully:", res.status, res.text);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(null), 6000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(null), 6000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-36 bg-[#060608] overflow-hidden border-t border-white/5"
    >
      {/* Ambient Red Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-red-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Massive Editorial Closing Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono-code uppercase tracking-widest mb-6">
            <Sparkles size={13} />
            <span>06 // Let's Connect</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] uppercase text-white">
            LET'S BUILD <br />
            <span className="text-red-500">SOMETHING</span> REAL<span className="text-red-500">.</span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-zinc-400 font-body max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, seeking a passionate full-stack engineer, or want to collaborate? My inbox is always open.
          </p>
        </div>

        {/* Contact Grid: Info Cards + Glass Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Reach Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <a
              href="mailto:rajanverma0879@gmail.com"
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/40 backdrop-blur-md transition-all duration-300 flex items-center justify-between block hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-red-500/10 text-red-400 group-hover:bg-red-500/20 transition-colors">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs font-mono-code text-zinc-500 uppercase">Direct Email</p>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-red-400 transition-colors">
                    rajanverma0879@gmail.com
                  </p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* Phone Card */}
            <a
              href="tel:+919956561803"
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/40 backdrop-blur-md transition-all duration-300 flex items-center justify-between block hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-red-500/10 text-red-400 group-hover:bg-red-500/20 transition-colors">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-xs font-mono-code text-zinc-500 uppercase">Phone & WhatsApp</p>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-red-400 transition-colors">
                    +91-9956561803
                  </p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* Location & Status Card */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex items-center gap-4">
              <div className="p-3 rounded-xl bg-red-500/10 text-red-400">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs font-mono-code text-zinc-500 uppercase">Location & Timezone</p>
                <p className="text-sm sm:text-base font-bold text-white">
                  India (IST) • Available for Remote Worldwide
                </p>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <a
                href="https://linkedin.com/in/rajanverma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-red-500/40 hover:bg-white/[0.05] transition-all flex items-center justify-center gap-2 text-xs font-mono-code uppercase font-bold text-zinc-300 hover:text-white group"
              >
                <Linkedin size={16} className="text-red-400" />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://github.com/boylish"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-red-500/40 hover:bg-white/[0.05] transition-all flex items-center justify-center gap-2 text-xs font-mono-code uppercase font-bold text-zinc-300 hover:text-white group"
              >
                <Github size={16} className="text-red-400" />
                <span>GitHub</span>
                <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Dark Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0e0e12] border border-white/10 backdrop-blur-xl shadow-2xl relative"
            >
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-body mb-6">
                Fill in your details below and I will respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-code uppercase text-zinc-400 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-body"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code uppercase text-zinc-400 mb-1.5">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-body"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase text-zinc-400 mb-1.5">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-body"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase text-zinc-400 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project, goals, or timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-body resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full group inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-red-600 hover:bg-red-500 disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-semibold text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  {submitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono-code flex items-center gap-2"
                  >
                    <CheckCircle2 size={16} className="flex-shrink-0" />
                    <span>Message delivered successfully! I will reach out soon.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-mono-code flex items-center gap-2"
                  >
                    <AlertCircle size={16} className="flex-shrink-0" />
                    <span>Failed to deliver message. Please email me directly at rajanverma0879@gmail.com</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
