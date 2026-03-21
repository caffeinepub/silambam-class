import { motion } from "motion/react";

export default function HeritageSection() {
  return (
    <section
      id="heritage"
      className="py-20"
      style={{ backgroundColor: "oklch(0.93 0.03 75)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2
            className="font-heading font-bold uppercase text-3xl sm:text-4xl mb-4"
            style={{ color: "oklch(0.25 0.05 220)" }}
          >
            Cultural Heritage
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: "oklch(0.72 0.13 70)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "oklch(0.25 0.04 220)" }}
            >
              Silambam is one of the world's oldest martial arts, tracing its
              lineage to the ancient Tamil civilisation of South India.
              Documented in Sangam literature dating back over 2,500 years, the
              art was developed by tribal warriors of the Kurinji hills who
              mastered the bamboo staff (<em>silam</em>) as both weapon and
              ceremonial implement.
            </p>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "oklch(0.25 0.04 220)" }}
            >
              Historically, the art was patronised by Tamil kings who integrated
              silambam training into royal military education. The
              Cilappatikaram, one of the five great Tamil epics, explicitly
              describes silambam performers displaying their skills in the grand
              courts of the Chola and Pandya dynasties.
            </p>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "oklch(0.25 0.04 220)" }}
            >
              Today, organisations like ARASU Silambam Academy carry this
              tradition forward, working with the Tamil Nadu government's
              cultural preservation initiatives to ensure this priceless
              heritage reaches future generations — not only as a martial art,
              but as a living expression of Tamil identity.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                "2500+ Year Legacy",
                "Sangam Literature",
                "UNESCO Intangible Heritage Candidate",
                "Living Art Form",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide"
                  style={{
                    backgroundColor: "oklch(0.25 0.05 220)",
                    color: "oklch(0.72 0.13 70)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-card col-span-2"
              style={{ height: "280px" }}
            >
              <img
                src="/assets/generated/class-silambam.dim_600x400.jpg"
                alt="Silambam class in session"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="rounded-2xl p-6 flex flex-col justify-center"
              style={{ backgroundColor: "oklch(0.25 0.05 220)" }}
            >
              <div
                className="text-4xl font-heading font-bold mb-1"
                style={{ color: "oklch(0.72 0.13 70)" }}
              >
                2500+
              </div>
              <div className="text-white text-sm font-medium">
                Years of continuous tradition
              </div>
            </div>
            <div
              className="rounded-2xl p-6 flex flex-col justify-center"
              style={{ backgroundColor: "oklch(0.38 0.12 28)" }}
            >
              <div className="text-4xl font-heading font-bold mb-1 text-white">
                64
              </div>
              <div className="text-white/80 text-sm font-medium">
                Traditional forms & patterns
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
