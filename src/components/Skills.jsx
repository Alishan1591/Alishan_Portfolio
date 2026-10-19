import { motion } from "framer-motion";

const skills = [
  "Python",
  "SQL",
  "Excel",
  "Tableau",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Machine Learning",
  "Data Analysis",
  "FastAPI",
  "React",
  "MySQL",
  "Git",
  "GitHub",
];

const Skills = () => {
  return (
    <section id="skills" className="border-t border-white/10 px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
          Skills
        </p>

        <h2 className="mb-12 text-4xl font-bold md:text-5xl">
          Technologies I work with.
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">

          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center text-gray-300 transition hover:border-white/30 hover:bg-white/[0.06]"
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;