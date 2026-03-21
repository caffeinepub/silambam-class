import { Award, Medal, Star, Trophy } from "lucide-react";
import { motion } from "motion/react";

const achievements = [
  {
    icon: Trophy,
    title: "State-Level Champions",
    description:
      "Our students have consistently secured top positions at Tamil Nadu State-level Silambam competitions, bringing pride to the academy and their families.",
    highlight: "Multiple Gold Medals",
  },
  {
    icon: Medal,
    title: "District Competitions",
    description:
      "Year after year, SNSKK students dominate district-level tournaments across age categories, demonstrating the quality of training imparted at our branches.",
    highlight: "Top Rankings",
  },
  {
    icon: Award,
    title: "Cultural Performances",
    description:
      "Our students have performed at prestigious cultural events and government functions, showcasing the beauty and power of traditional Silambam to thousands.",
    highlight: "100+ Events",
  },
  {
    icon: Star,
    title: "Youth Development",
    description:
      "We take pride in developing young champions. Students as young as 5 years old have gone on to win district and state medals within their first year of training.",
    highlight: "All Age Groups",
  },
];

const milestones = [
  { number: "150+", label: "Students Trained" },
  { number: "10+", label: "Medals Won" },
  { number: "5+", label: "Active Branches" },
  { number: "5+", label: "Years of Excellence" },
];

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
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
            Our Achievements
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: "oklch(0.72 0.13 70)" }}
          />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            The dedication of our students and the expertise of our instructors
            have produced remarkable results across competitions and cultural
            platforms.
          </p>
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {milestones.map((m, i) => (
            <div
              key={m.label}
              className="rounded-2xl p-6 text-center"
              style={{ backgroundColor: "oklch(0.25 0.05 220)" }}
              data-ocid={`achievements.card.${i + 1}`}
            >
              <div
                className="font-heading font-bold text-4xl mb-1"
                style={{ color: "oklch(0.72 0.13 70)" }}
              >
                {m.number}
              </div>
              <div className="text-white text-xs font-medium uppercase tracking-widest">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="rounded-2xl p-7 shadow-card flex gap-5"
              style={{ backgroundColor: "oklch(0.95 0.025 75)" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "oklch(0.25 0.05 220)" }}
              >
                <ach.icon size={26} style={{ color: "oklch(0.72 0.13 70)" }} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3
                    className="font-heading font-bold text-lg uppercase"
                    style={{ color: "oklch(0.25 0.05 220)" }}
                  >
                    {ach.title}
                  </h3>
                  <span
                    className="px-2 py-1 rounded-full text-xs font-bold flex-shrink-0"
                    style={{
                      backgroundColor: "oklch(0.72 0.13 70 / 0.15)",
                      color: "oklch(0.55 0.13 70)",
                    }}
                  >
                    {ach.highlight}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/75">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
