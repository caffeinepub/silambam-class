import { Brain, Globe, Heart, Moon, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: Brain,
    title: "Mental Clarity",
    description:
      "Complex footwork and staff patterns train memory, spatial reasoning, and decisive thinking.",
    dark: false,
  },
  {
    icon: Heart,
    title: "Cardiovascular Health",
    description:
      "High-energy sessions elevate heart rate and build long-lasting aerobic endurance.",
    dark: true,
  },
  {
    icon: Users,
    title: "Community & Respect",
    description:
      "Train alongside dedicated students. Build lifelong friendships rooted in shared discipline.",
    dark: false,
  },
  {
    icon: Zap,
    title: "Reflexes & Speed",
    description:
      "Rapid reaction drills sharpen instincts. Students develop lightning-fast block and counter skills.",
    dark: true,
  },
  {
    icon: Globe,
    title: "Cultural Identity",
    description:
      "Reconnect with Tamil heritage. Understand ancient warfare philosophy and folk traditions.",
    dark: false,
  },
  {
    icon: Moon,
    title: "Stress Relief",
    description:
      "Rhythm-based training and meditative movement routines calm the nervous system.",
    dark: true,
  },
];

export default function BenefitsSection() {
  return (
    <section id="classes" className="py-20 bg-sand">
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
            Benefits of Silambam
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: "oklch(0.72 0.13 70)" }}
          />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Six transformative dimensions that make Silambam a complete practice
            for modern life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="rounded-2xl p-7 shadow-card"
              style={{
                backgroundColor: b.dark
                  ? "oklch(0.25 0.05 220)"
                  : "oklch(0.95 0.025 75)",
                color: b.dark ? "white" : "oklch(0.15 0.01 60)",
              }}
              data-ocid={`benefits.card.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  backgroundColor: b.dark
                    ? "oklch(0.30 0.05 220)"
                    : "oklch(0.88 0.04 75)",
                }}
              >
                <b.icon size={22} style={{ color: "oklch(0.72 0.13 70)" }} />
              </div>
              <h3
                className="font-heading font-bold text-lg mb-2"
                style={{
                  color: b.dark
                    ? "oklch(0.72 0.13 70)"
                    : "oklch(0.25 0.05 220)",
                }}
              >
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ opacity: 0.85 }}>
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
