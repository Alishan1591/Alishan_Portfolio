import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-500">
          Contact
        </p>

        <div className="grid gap-14 md:grid-cols-2 md:items-end">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
              Let's build
              <br />
              something
              <br />
              meaningful.
            </h2>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:pb-2"
          >

            <p className="max-w-xl leading-8 text-gray-400">
              I'm interested in internships, entry-level opportunities,
              data analytics projects, AI/ML applications, and
              collaborations where I can learn and contribute.
            </p>

           <a
  href="mailto:siddiqueaatif03@gmail.com?subject=Internship%20or%20Project%20Opportunity"
  className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-medium text-black transition hover:bg-gray-200"
>
  <Mail size={18} />
  Get in touch
  <ArrowUpRight size={18} />
</a>

            <div className="mt-8 flex gap-5">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 transition hover:text-white"
                aria-label="GitHub"
              >
                <Github size={21} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 transition hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={21} />
              </a>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;