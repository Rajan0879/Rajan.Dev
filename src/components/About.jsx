import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-[#f8fafc] pt-4  ">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block">
              <motion.h2
                className="text-md font-semibold text-[#38bdf8] tracking-wider uppercase"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                About Me
              </motion.h2>
              <div className="h-1 w-12 bg-[#38bdf8] mt-1"></div>
            </div>

            <motion.h3
              className="text-4xl font-extrabold text-[#0f172a]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Get to know me
            </motion.h3>

            <motion.div
              className="space-y-4 text-base text-[#1e293b] leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p>
                I'm a passionate Full Stack Web Developer currently pursuing my B.Tech at Babu Banarasi Das Northern India Institute of Technology, Lucknow, with hands-on experience in developing responsive and user-friendly web applications using the MERN stack.
              </p>
              <p>
                My journey in web development began during my B.Tech program, where I developed multiple projects and honed my skills in the MERN stack. I’ve built full-stack applications and collaborated on real-world solutions, focusing on performance and user experience.
              </p>
              <p>
                I specialize in JavaScript, React, Node.js, Express.js, and MongoDB, and I'm passionate about writing clean, efficient code and building seamless user experiences across web platforms.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, solving problems on LeetCode, and continuously learning to improve my development skills.
              </p>
            </motion.div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="https://drive.google.com/file/d/1yjXJVOGjNdXaJ2znPjwi_S9lQFbW68ch/view?usp=sharing"
                className="bg-[#38bdf8] text-white px-5 py-2 rounded-lg flex items-center w-fit hover:bg-[#675d9a6b] transition-colors"
              >
                <FileText size={18} className="mr-2" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

{/* Info cards */}
<motion.div
  className="grid grid-cols-1 gap-8"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {[
     { number: "4+ ", label: "Months of Working Experience" },
    { number: "2+", label: "years of self-taught experience" },
    { number: "10+", label: "Projects Completed" },
      // 🔥 Added Here
  ].map((item, index) => (
    <motion.div
      key={index}
      className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.2 }}
    >
      <h4 className="text-2xl font-bold text-[#0f172a] mb-2">{item.number}</h4>
      <p className="text-sm text-[#1e293b]">{item.label}</p>
    </motion.div>
  ))}
</motion.div>


        </div>
      </div>
    </section>
  );
};

export default About;
