import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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

      subject: formData.subject || "New Inquiry from Portfolio",
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
      toast.success("Message delivered successfully! I will reply to you shortly.", {
        duration: 5000,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(null), 6000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      const errorMsg = error?.text || error?.message || "Failed to deliver message.";
      toast.error(`Unable to send: ${errorMsg}`, {
        duration: 6000,
      });
      setTimeout(() => setStatus(null), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
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
          <span className="text-xs uppercase tracking-widest text-rose-400 font-mono-code mb-3 block">
            Contact
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white max-w-2xl leading-[1.05]">
            Let's build something <br />
            <span className="text-rose-500">exceptional</span> together.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column — Direct Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white/[0.015] border border-white/[0.07] backdrop-blur-xl">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Have a project or opportunity?
              </h3>
              <p className="text-sm text-zinc-400 font-body leading-relaxed mb-8">
                I'm always open to discussing new engineering challenges, full-stack architecture roles, and creative tech collaborations.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:rajanverma0879@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-rose-500/30 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-mono-code">Direct Email</p>
                    <p className="text-sm font-medium text-white group-hover:text-rose-400 transition-colors">
                      rajanverma0879@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] text-zinc-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-mono-code">Location</p>
                    <p className="text-sm font-medium text-white">
                      Lucknow / NCR, India • Remote Worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-mono-code">Current Status</p>
                    <p className="text-sm font-medium text-white">
                      Available for SDE-1 / Full-Stack Roles
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Grid */}
              <div className="pt-6 mt-6 border-t border-white/[0.05] grid grid-cols-2 gap-3">
                <a
                  href="https://www.linkedin.com/in/rajan-verma-10363124a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-rose-500/30 hover:bg-white/[0.05] transition-all flex items-center justify-center gap-2 text-xs font-medium text-zinc-300 hover:text-white"
                >
                  <Linkedin size={15} className="text-rose-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} className="text-zinc-500" />
                </a>

                <a
                  href="https://github.com/Rajan0879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-rose-500/30 hover:bg-white/[0.05] transition-all flex items-center justify-center gap-2 text-xs font-medium text-zinc-300 hover:text-white"
                >
                  <Github size={15} className="text-rose-400" />
                  <span>GitHub</span>
                  <ArrowUpRight size={13} className="text-zinc-500" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Minimalist Luxury Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.015] border border-white/[0.07] backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-zinc-400 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Alex Mercer"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] focus:border-rose-500 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-zinc-400 mb-2"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] focus:border-rose-500 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-zinc-400 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] focus:border-rose-500 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-zinc-400 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your product, project, or opportunity..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] focus:border-rose-500 focus:outline-none text-white text-sm placeholder:text-zinc-600 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-rose-600 hover:bg-rose-500 disabled:bg-rose-900/50 text-white font-medium text-sm shadow-xl shadow-rose-600/25 hover:shadow-rose-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono-code flex items-center gap-2"
                  >
                    <CheckCircle2 size={16} className="flex-shrink-0" />
                    <span>Message delivered successfully! I will reach out soon.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 text-rose-400 text-xs font-mono-code flex items-center gap-2"
                  >
                    <AlertCircle size={16} className="flex-shrink-0" />
                    <span>Failed to deliver message. Please email me directly at rajanverma0879@gmail.com</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
