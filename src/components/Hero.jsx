import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-16 py-20 md:grid-cols-[1.3fr_0.7fr] md:items-center">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-gray-500">
            Data Analyst • AI/ML Enthusiast
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
            Hi, I'm
            <br />
            Alishan Siddique.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            Computer Science & Engineering student passionate about data
            analytics, artificial intelligence, machine learning and
            building practical technology solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              View Projects
              <ArrowUpRight size={17} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/40"
            >
              Download Resume
              <ArrowDown size={17} />
            </a>

          </div>

          <div className="mt-10 flex items-center gap-6">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-500 transition hover:text-white"
            >
              <Github size={21} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 transition hover:text-white"
            >
              <Linkedin size={21} />
            </a>

            <a
              href="mailto:siddiqueaatif03@gmail.com"
              aria-label="Email"
              className="text-gray-500 transition hover:text-white"
            >
              <Mail size={21} />
            </a>

          </div>
        </motion.div>

        {/* Profile Image */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">

            <div className="absolute -inset-4 rounded-full border border-white/10" />

            <div className="absolute -inset-8 rounded-full border border-white/5" />

            <img
              src="/profile.png"
              alt="Alishan Siddique"
              className="relative h-80 w-80 rounded-full border border-white/10 object-cover grayscale transition duration-500 hover:grayscale-0 md:h-80 md:w-80"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;