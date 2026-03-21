import { motion } from "motion/react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ minHeight: "85vh" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-silambam.dim_1400x700.jpg')",
        }}
      />
      {/* Left gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, oklch(0.15 0.04 220 / 0.95) 0%, oklch(0.15 0.04 220 / 0.80) 45%, oklch(0.15 0.04 220 / 0.35) 70%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center"
        style={{ minHeight: "85vh" }}
      >
        <div className="max-w-2xl py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="inline-block text-xs font-bold tracking-[0.25em] uppercase mb-4 px-3 py-1 rounded-full"
              style={{
                backgroundColor: "oklch(0.72 0.13 70)",
                color: "oklch(0.15 0.01 60)",
              }}
            >
              Tamil Nadu's Living Martial Legacy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-heading font-bold text-white uppercase leading-tight text-shadow-lg mb-3"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              lineHeight: 1.15,
            }}
          >
            SRI NANDHIVARMAN
            <br />
            <span style={{ color: "oklch(0.72 0.13 70)" }}>
              SILAMBATTA KALARI
            </span>
            <br />
            KAZHAGAM
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg font-bold tracking-[0.2em] uppercase mb-6 text-shadow-sm"
            style={{ color: "oklch(0.72 0.13 70)" }}
          >
            Tradition • Discipline • Strength
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8 text-shadow-sm"
            style={{ maxWidth: "520px" }}
          >
            Master the ancient Tamil art of Silambam under the guidance of
            Master Govindhan.M. Build discipline, strength, and connect with
            your cultural heritage through dedicated practice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <button
              type="button"
              data-ocid="hero.primary_button"
              onClick={() => scrollTo("#classes")}
              className="px-7 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "oklch(0.72 0.13 70)",
                color: "oklch(0.15 0.01 60)",
              }}
            >
              OUR BRANCHES
            </button>
            <button
              type="button"
              data-ocid="hero.secondary_button"
              onClick={() => scrollTo("#about")}
              className="px-7 py-3 rounded-full font-bold text-sm uppercase tracking-widest border-2 text-white transition-all hover:bg-white/10"
              style={{ borderColor: "oklch(0.72 0.13 70)" }}
            >
              LEARN MORE
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full"
          aria-hidden="true"
        >
          <path
            d="M0 48L1440 48L1440 24C1200 0 960 48 720 24C480 0 240 48 0 24Z"
            fill="oklch(0.93 0.03 75)"
          />
        </svg>
      </div>
    </section>
  );
}
