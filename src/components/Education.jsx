import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="border-t border-white/10 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-500">
          Education
        </p>

        <div className="grid gap-6 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10"
          >

            <p className="text-sm text-gray-500">
              2023 — 2027
            </p>

            <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
              Bachelor of Technology
            </h2>

            <p className="mt-2 text-lg text-gray-400">
              Computer Science & Engineering
            </p>

            <p className="mt-6 text-gray-500">
              Integral University
            </p>

            <p className="mt-6 leading-7 text-gray-500">
              Currently pursuing B.Tech in Computer Science Engineering,
              with a focus on data analytics, artificial intelligence,
              machine learning, and software development.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10"
          >

            <p className="text-sm uppercase tracking-[0.2em] text-gray-600">
              Current Focus
            </p>

            <div className="mt-7 space-y-5">

              <div className="border-b border-white/10 pb-5">
                <p className="text-white">
                  Data Analytics
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Excel • SQL • Tableau
                </p>
              </div>

              <div className="border-b border-white/10 pb-5">
                <p className="text-white">
                  Artificial Intelligence
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Machine Learning • Explainable AI
                </p>
              </div>

              <div>
                <p className="text-white">
                  Software Development
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  React • FastAPI • MySQL
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Education;