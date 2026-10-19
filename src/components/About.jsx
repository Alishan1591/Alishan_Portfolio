import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="border-t border-white/10 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-500">
          About Me
        </p>

        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Turning data and ideas into meaningful solutions.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 leading-8 text-gray-400"
          >
            <p>
              I'm a Computer Science & Engineering student at Integral
              University, graduating in 2027. My interests lie at the
              intersection of data analytics, artificial intelligence and
              software development.
            </p>

            <p>
              I enjoy working with Python, SQL, Excel, Tableau and machine
              learning technologies to transform raw data into useful
              insights and practical applications.
            </p>

            <p>
              Alongside analytics and AI/ML, I have hands-on experience
              building applications using React, FastAPI and MySQL.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center border-b border-white/30 pb-1 text-white transition hover:border-white"
            >
              Let's connect
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;