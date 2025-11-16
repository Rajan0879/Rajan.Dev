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
  I am a B.Tech Graduate (2025) in Information Technology from BBD Northern India Institute of Technology, Lucknow, and a passionate Full Stack Web Developer with hands-on experience in building responsive and scalable web applications using the MERN and Next.js stacks.
</p>

<p>
  During my academic journey, I developed several full-stack projects, including an online bookstore with JWT authentication, RESTful APIs, and MongoDB. I gained strong problem-solving skills through continuous learning and solving DSA problems.
</p>

<p>
  I specialize in JavaScript (ES6+), React.js, Next.js, Node.js, Express.js, and MongoDB. I enjoy building clean, efficient, and user-focused applications, and I have practical experience with tools and libraries like Tailwind CSS, ShadCN UI, Redux, Context API, and Git/GitHub.
</p>

<p>
  Currently, I’m working as a Software Developer Intern at Clearcatnet, contributing to <strong>Learnees</strong> — a web platform where I handle full-stack development, including frontend (Next.js) and backend (Node.js, Firebase), ensuring optimized APIs and secure user management.
</p>

<p>
  Beyond coding, I love exploring new technologies, improving my DSA skills, and continuously challenging myself to grow as a developer.
</p>

            </motion.div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="https://drive.google.com/file/d/1YhGh1jiQ2FdBv_pVe9MDngX4if4Cv0OP/view?usp=sharing"
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
              { number: "2+", label: "years of self-taught experience" },
              { number: "10+", label: "Projects Completed" },
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
