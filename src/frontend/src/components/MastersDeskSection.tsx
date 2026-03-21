import { Quote } from "lucide-react";
import { motion } from "motion/react";

export default function MastersDeskSection() {
  return (
    <section
      id="masters-desk"
      className="py-20"
      style={{ backgroundColor: "oklch(0.25 0.05 220)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold uppercase text-3xl sm:text-4xl mb-4 text-white">
            Master's Desk
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: "oklch(0.72 0.13 70)" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl p-8 sm:p-12 relative overflow-hidden"
          style={{ backgroundColor: "oklch(0.30 0.05 220)" }}
        >
          {/* Decorative quote icon */}
          <div className="absolute top-6 left-6 opacity-20" aria-hidden="true">
            <Quote size={80} style={{ color: "oklch(0.72 0.13 70)" }} />
          </div>

          <div className="relative z-10">
            <p
              className="text-lg sm:text-xl leading-relaxed mb-6 italic"
              style={{ color: "oklch(0.90 0.02 75)" }}
            >
              "Silambam is not merely an art of fighting — it is an art of
              living. When a student picks up the bamboo staff for the first
              time, they are not just holding a weapon; they are holding the
              weight of thousands of years of Tamil wisdom and warrior spirit.
              At Sri Nandhivarman Silambatta Kalari Kazhagam, we do not just
              teach techniques — we shape character, build confidence, and
              ignite a lifelong love for our cultural heritage."
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "oklch(0.75 0.02 220)" }}
            >
              "Every child who walks through our doors carries the potential to
              become a champion — not just in competitions, but in life. I
              invite all who seek discipline, strength, and a connection to our
              ancient roots to join us on this remarkable journey. Together, we
              will keep this timeless tradition alive and thriving for
              generations to come."
            </p>

            <div className="flex items-center gap-5">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-heading font-bold text-2xl flex-shrink-0"
                style={{
                  backgroundColor: "oklch(0.72 0.13 70)",
                  color: "oklch(0.15 0.01 60)",
                }}
              >
                G
              </div>
              <div>
                <div
                  className="font-heading font-bold text-lg"
                  style={{ color: "oklch(0.72 0.13 70)" }}
                >
                  Master Govindhan.M
                </div>
                <div className="text-white/70 text-sm">
                  Founder & Chief Instructor
                </div>
                <div className="text-white/60 text-xs mt-0.5">
                  Sri Nandhivarman Silambatta Kalari Kazhagam
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
