import { Phone, Quote } from "lucide-react";
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
            {/* Master photo and info row */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-8">
              {/* Photo */}
              <div className="flex-shrink-0">
                <img
                  src="/assets/uploads/IMG-20260323-WA0000-1-1.jpg"
                  alt="Master M. Govindhan"
                  className="w-36 h-36 rounded-full object-cover border-4"
                  style={{
                    borderColor: "oklch(0.72 0.13 70)",
                    boxShadow: "0 0 20px oklch(0.72 0.13 70 / 0.4)",
                  }}
                />
              </div>

              {/* Master details */}
              <div className="text-center sm:text-left">
                <div
                  className="font-heading font-bold text-2xl sm:text-3xl mb-1"
                  style={{ color: "oklch(0.72 0.13 70)" }}
                >
                  M. GOVINDHAN
                </div>
                <div className="text-white font-semibold text-base mb-1">
                  Silambam &amp; Kalari Master
                </div>
                <div className="text-white/70 text-sm mb-2">
                  Wise Secretary, Chengalpattu Silambatta Kazhagam
                </div>
                <div className="text-white/60 text-xs mb-3">
                  Sri Nandhivarman Silambatta Kalari Kazhagam
                </div>
                <a
                  href="tel:+919884779225"
                  className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: "oklch(0.72 0.13 70 / 0.15)",
                    color: "oklch(0.72 0.13 70)",
                    border: "1px solid oklch(0.72 0.13 70 / 0.4)",
                  }}
                >
                  <Phone size={14} />
                  9884779225
                </a>
              </div>
            </div>

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
              className="text-base leading-relaxed"
              style={{ color: "oklch(0.75 0.02 220)" }}
            >
              "Every child who walks through our doors carries the potential to
              become a champion — not just in competitions, but in life. I
              invite all who seek discipline, strength, and a connection to our
              ancient roots to join us on this remarkable journey. Together, we
              will keep this timeless tradition alive and thriving for
              generations to come."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
