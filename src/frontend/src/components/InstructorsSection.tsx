import { Award, BookOpen, Trophy } from "lucide-react";
import { motion } from "motion/react";

const instructors = [
  {
    name: "Guru Arasu Murugan",
    title: "Grand Master & Founder",
    image: "/assets/generated/instructor-master.dim_300x300.jpg",
    achievements: [
      "45 years of Silambam mastery",
      "State Champion — 1988, 1992, 1996",
      "Tamil Nadu Government Cultural Award",
      "Trained 500+ students across 3 countries",
    ],
  },
  {
    name: "Senthil Kumaran",
    title: "Senior Instructor",
    image: "/assets/generated/instructor-senthil.dim_300x300.jpg",
    achievements: [
      "National Silambam Gold Medalist 2016",
      "Specialist in Veeran & Mooligai forms",
      "International demonstration performer",
      "B.P.Ed with Martial Arts specialization",
    ],
  },
  {
    name: "Priya Devi",
    title: "Women's Division Coach",
    image: "/assets/generated/instructor-priya.dim_300x300.jpg",
    achievements: [
      "District champion — 4 consecutive years",
      "Expert in self-defence applications",
      "Youth & women's empowerment advocate",
      "Certified Yoga & Silambam instructor",
    ],
  },
];

export default function InstructorsSection() {
  return (
    <section
      id="instructors"
      className="py-20"
      style={{ backgroundColor: "oklch(0.25 0.05 220)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl mb-4 text-white">
            Meet Our Instructors
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: "oklch(0.72 0.13 70)" }}
          />
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Learn from masters who have dedicated their lives to preserving and
            teaching Silambam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden shadow-card"
              style={{ backgroundColor: "oklch(0.95 0.025 75)" }}
              data-ocid={`instructors.card.${i + 1}`}
            >
              <div
                className="relative overflow-hidden"
                style={{ height: "240px" }}
              >
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="w-full h-full object-cover object-top"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-16"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.95 0.025 75), transparent)",
                  }}
                />
              </div>
              <div className="p-6">
                <h3
                  className="font-heading font-bold text-xl mb-1"
                  style={{ color: "oklch(0.25 0.05 220)" }}
                >
                  {inst.name}
                </h3>
                <p
                  className="text-sm font-bold tracking-wide uppercase mb-4"
                  style={{ color: "oklch(0.72 0.13 70)" }}
                >
                  {inst.title}
                </p>
                <ul className="space-y-2">
                  {inst.achievements.map((ach, j) => (
                    <li key={ach} className="flex items-start gap-2 text-sm">
                      {j === 0 ? (
                        <Trophy
                          size={14}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: "oklch(0.72 0.13 70)" }}
                        />
                      ) : j === 1 ? (
                        <Award
                          size={14}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: "oklch(0.72 0.13 70)" }}
                        />
                      ) : (
                        <BookOpen
                          size={14}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: "oklch(0.72 0.13 70)" }}
                        />
                      )}
                      <span className="text-foreground/80">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
