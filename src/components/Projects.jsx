import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "AI / Healthcare",
    title: "Explainable AI Disease Prediction",
    status: "In Progress",
    description:
      "An AI-powered healthcare prediction system designed to predict disease risk while providing explainable insights using XAI techniques.",
    technologies: [
      "Python",
      "Machine Learning",
      "XGBoost",
      "SHAP",
      "FastAPI",
      "MySQL",
    ],
    github: "#",
    demo: "#",
  },
  {
    number: "02",
    category: "AI / NLP",
    title: "Explainable AI Fake Job Posting Detection",
    status: "In Progress",
    description:
      "A machine learning system that detects potentially fraudulent job postings using NLP and explainable AI techniques.",
    technologies: [
      "Python",
      "NLP",
      "TF-IDF",
      "SHAP",
      "FastAPI",
    ],
    github: "https://github.com/Alishan1591/Explainable-AI-Fake-Job-Detection",
    demo: "https://explainable-ai-fake-job-detection-u.vercel.app/",
  },
  {
    number: "03",
    category: "Data Analytics",
    title: "Sales Analytics Dashboard",
    status: "In Progress",
    description:
      "An interactive sales analytics project using Excel, SQL, and Tableau to generate business insights.",
    technologies: [
      "Excel",
      "SQL",
      "MySQL",
      "Tableau",
      "Data Visualization",
    ],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-t border-white/10 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-500">
          Selected Work
        </p>

        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Projects that combine data, AI and practical problem solving.
          </h2>

          <p className="max-w-sm leading-7 text-gray-500">
            A selection of academic and personal projects built while
            developing skills in data analytics, machine learning and
            software development.
          </p>

        </div>

        <div className="space-y-10">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition duration-500 hover:border-white/25"
            >
              <div className="grid md:grid-cols-2">

                {/* <div className="relative aspect-video overflow-hidden bg-white/[0.03] md:aspect-auto">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                </div> */}

                <div className="flex flex-col justify-between p-7 md:p-10">

                  <div>

                    <div className="flex flex-wrap items-center justify-between gap-3">
  <span className="text-sm text-gray-600">
    {project.number}
  </span>

  <div className="flex flex-wrap items-center gap-3">
    <span
      className={`rounded-full border px-3 py-1 text-xs font-medium ${
        project.status === "Completed"
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
          : "border-amber-500/30 bg-amber-500/10 text-amber-400"
      }`}
    >
      {project.status}
    </span>

    <span className="text-xs uppercase tracking-[0.15em] text-gray-500">
      {project.category}
    </span>
  </div>
</div> 

                    <h3 className="mt-8 text-2xl font-semibold tracking-tight md:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 leading-7 text-gray-400">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">

                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-500"
                        >
                          {technology}
                        </span>
                      ))}

                    </div>

                  </div>

                  <div className="mt-10 flex gap-6">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                    >
                      GitHub
                      <ArrowUpRight size={16} />
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>

                  </div>

                </div>

              </div>
            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;