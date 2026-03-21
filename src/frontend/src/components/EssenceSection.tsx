import { Dumbbell, Eye, Shield, Star } from "lucide-react";
import { motion } from "motion/react";

const pillars = [
  {
    icon: Eye,
    title: "Focus",
    description:
      "Silambam demands pinpoint concentration. Training sharpens the mind as it forges the body, cultivating awareness and mental clarity.",
  },
  {
    icon: Shield,
    title: "Discipline",
    description:
      "Rooted in ancient warrior codes, every technique cultivates respect, patience, and self-mastery from the very first class.",
  },
  {
    icon: Dumbbell,
    title: "Strength",
    description:
      "Full-body conditioning through dynamic footwork, agile spins, and explosive power drills builds enduring physical fitness.",
  },
  {
    icon: Star,
    title: "Heritage",
    description:
      "Carry forward a 5,000-year Tamil legacy — connect with living history through every strike, stance, and form you master.",
  },
];

export default function EssenceSection() {
  return (
    <section id="about" className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2
            className="font-heading font-bold uppercase text-3xl sm:text-4xl mb-4"
            style={{ color: "oklch(0.25 0.05 220)" }}
          >
            About Our Academy
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: "oklch(0.72 0.13 70)" }}
          />
        </motion.div>

        {/* Academy Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-2xl p-8 mb-12 shadow-card"
          style={{ backgroundColor: "oklch(0.95 0.025 75)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3
                className="font-heading font-bold text-2xl uppercase mb-4"
                style={{ color: "oklch(0.25 0.05 220)" }}
              >
                Sri Nandhivarman Silambatta Kalari Kazhagam
              </h3>
              <p className="text-base leading-relaxed mb-4 text-foreground/80">
                Sri Nandhivarman Silambatta Kalari Kazhagam is a dedicated
                institution committed to preserving and promoting the ancient
                Tamil martial art of Silambam. Our academy nurtures the rich
                cultural heritage of Silambam — a bamboo staff fighting system
                that traces its roots to the warrior traditions of Tamil Nadu.
              </p>
              <p className="text-base leading-relaxed mb-4 text-foreground/80">
                We welcome students of all ages (5 years and above) who wish to
                embark on a transformative journey of physical fitness, mental
                fortitude, and cultural discovery. Under expert guidance, our
                students learn traditional forms, combat techniques, and the
                philosophical principles that have guided Silambam practitioners
                for millennia.
              </p>
              <p className="text-base leading-relaxed text-foreground/80">
                With multiple branches, we are growing our mission of bringing
                authentic Silambam training closer to communities across Tamil
                Nadu. Each branch upholds the same rigorous standards of
                instruction and traditional values that define our kazhagam.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {[
                { value: "5+", label: "Branches" },
                { value: "5+", label: "Years Min. Age" },
                { value: "2x", label: "Classes Per Week" },
                { value: "5000+", label: "Years of Tradition" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-6 text-center w-36"
                  style={{ backgroundColor: "oklch(0.25 0.05 220)" }}
                >
                  <div
                    className="font-heading font-bold text-3xl mb-1"
                    style={{ color: "oklch(0.72 0.13 70)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white text-xs font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="rounded-2xl p-8 text-center shadow-card"
              style={{ backgroundColor: "oklch(0.95 0.025 75)" }}
            >
              <div
                className="w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "oklch(0.25 0.05 220)" }}
              >
                <pillar.icon
                  size={28}
                  style={{ color: "oklch(0.72 0.13 70)" }}
                />
              </div>
              <h3
                className="font-heading font-bold text-xl uppercase mb-3"
                style={{ color: "oklch(0.25 0.05 220)" }}
              >
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/75">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
