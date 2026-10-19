import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const certificates = [
  {
    year: "2024",
    title: "Data Science Internship",
    issuer: " TEACHNOOK (TEACHSCAPE ONLINE LEARNING SERVICES PRIVATE LIMITED)",
    description:
      "Worked on data science concepts, data preprocessing, exploratory data analysis, and machine learning fundamentals. Gained practical exposure to analyzing datasets and understanding data-driven problem-solving techniques.",
  },
   {
    year: "2025",
    title: "Inventory Management Sysytem",
    issuer: "UFLEX Limited",
    description:
      "Worked on inventory management concepts, focusing on stock tracking, inventory records, and efficient data organization. Explored methods to improve inventory monitoring and reporting.",
  },
   {
    year: "2026",
    title: "Data Science Internship",
    issuer: "Sipher Web Pvt. Ltd.",
    description:
      "Gained exposure to Python programming, data analysis, data visualization, and machine learning workflows. Practiced data preparation and analytical techniques for extracting meaningful insights from datasets.",
  },
   {
    year: "2026",
    title: "Data Science Internship",
    issuer: "Academic of Skills Development",
    description:
      "Worked on a Multiple Disease Prediction project using machine learning techniques. Explored healthcare data preprocessing, model development, and predictive analysis to understand data-driven disease prediction.",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="border-t border-white/10 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-500">
          Certifications
        </p>

        <h2 className="mb-14 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Learning beyond the classroom.
        </h2>

        <div className="grid gap-5">

          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/25 md:p-9"
            >

              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                <div>

                  <p className="text-sm text-gray-600">
                    {certificate.year}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {certificate.issuer}
                  </p>

                  <p className="mt-5 max-w-2xl leading-7 text-gray-500">
                    {certificate.description}
                  </p>

                </div>

                <ArrowUpRight
                  size={24}
                  className="text-gray-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certificates;