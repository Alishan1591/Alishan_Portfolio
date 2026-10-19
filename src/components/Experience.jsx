import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2024",
    role: "Data Science Intern",
    organization: "Teachnook (Teachscape Online Learning Service Pvt. Ltd.)",
    type: "Internship",
    description:
      "Completed a Data Science internship focused on machine learning and sentiment analysis. Worked on a Sentiment Analysis of Buyer & Seller Journey project involving data preprocessing, model development, evaluation, and prediction workflows.",
  },
  {
    period: "2025",
    role: "Inventory Management System Intern",
    organization: "Uflex Pvt. Ltd.",
    type: "Internship",
    description:
      "Worked on an Inventory Management System project involving inventory tracking, data organization, system workflows, and practical software development concepts.",
  },
  {
    period: "2026",
    role: "Data Science Intern",
    organization: "Sipher Web Pvt. Ltd.",
    type: "Internship",
    description:
      "Completed a Data Science internship focused on machine learning and data-driven problem solving. Worked on data preprocessing, model development, evaluation, and prediction workflows.",
  },
  {
    period: "2026",
    role: "Data Science Intern",
    organization: "Academic of Skills Development",
    type: "Internship",
    description:
      "Completed a Data Science internship focused on machine learning and healthcare prediction. Worked on a Multiple Disease Prediction project involving data preprocessing, model development, evaluation, and prediction workflows.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="border-t border-white/10 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-500">
          Experience
        </p>

        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Experience built through internships and real-world projects.
          </h2>

          <p className="max-w-sm leading-7 text-gray-500">
            Practical experience gained through internships, data science
            projects, software development, and hands-on learning.
          </p>

        </div>

        <div className="space-y-6">

          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.organization}-${experience.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-500 hover:border-white/25 md:p-10"
            >

              <div className="grid gap-8 md:grid-cols-[180px_1fr]">

                <div>
                  <p className="text-sm font-medium text-gray-400">
                    {experience.period}
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-600">
                    {experience.type}
                  </p>
                </div>

                <div>

                  <div className="flex items-start justify-between gap-5">

                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-gray-400">
                        {experience.organization}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={22}
                      className="shrink-0 text-gray-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />

                  </div>

                  <p className="mt-6 max-w-4xl leading-8 text-gray-400">
                    {experience.description}
                  </p>

                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;