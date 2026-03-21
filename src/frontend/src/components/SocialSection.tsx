import { motion } from "motion/react";
import { SiInstagram, SiYoutube } from "react-icons/si";

export default function SocialSection() {
  return (
    <section
      id="social"
      className="py-16"
      style={{ backgroundColor: "oklch(0.93 0.03 75)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Follow Us
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: "oklch(0.72 0.13 70)" }}
          />
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Stay updated with our latest training videos, competition
            highlights, and academy news. Follow us on social media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/sri_nandhi_varman_silambam?igsh=dTdtMWlhYm03ajU0"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="social.link"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-5 rounded-2xl p-7 shadow-card transition-transform hover:-translate-y-1 cursor-pointer"
            style={{ backgroundColor: "oklch(0.95 0.025 75)" }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.60 0.18 30) 0%, oklch(0.55 0.20 340) 50%, oklch(0.45 0.18 280) 100%)",
              }}
            >
              <SiInstagram size={30} color="white" />
            </div>
            <div>
              <h3
                className="font-heading font-bold text-lg uppercase mb-1"
                style={{ color: "oklch(0.25 0.05 220)" }}
              >
                Instagram
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                @sri_nandhi_varman_silambam
              </p>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "oklch(0.55 0.20 340)" }}
              >
                Follow on Instagram →
              </span>
            </div>
          </motion.a>

          {/* YouTube */}
          <motion.a
            href="https://www.youtube.com/channel/UCusFq397fpsJFLBiIHMOZVA"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="social.link"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-5 rounded-2xl p-7 shadow-card transition-transform hover:-translate-y-1 cursor-pointer"
            style={{ backgroundColor: "oklch(0.95 0.025 75)" }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "oklch(0.45 0.20 28)" }}
            >
              <SiYoutube size={30} color="white" />
            </div>
            <div>
              <h3
                className="font-heading font-bold text-lg uppercase mb-1"
                style={{ color: "oklch(0.25 0.05 220)" }}
              >
                YouTube
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Sri Nandhivarman SKK
              </p>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "oklch(0.45 0.20 28)" }}
              >
                Watch on YouTube →
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
