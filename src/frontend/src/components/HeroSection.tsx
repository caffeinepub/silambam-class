import { motion } from "motion/react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden"
      style={{ height: "100vh", minHeight: "600px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-silambam.dim_1400x700.jpg')",
        }}
      />

      {/* Multi-layer dramatic overlay */}
      {/* Base dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(5, 12, 25, 0.72)" }}
      />
      {/* Vignette from all edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.65) 100%)",
        }}
      />
      {/* Strong left fade for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(5,12,25,0.92) 0%, rgba(5,12,25,0.75) 40%, rgba(5,12,25,0.25) 70%, transparent 100%)",
        }}
      />
      {/* Bottom fade into page */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "220px",
          background:
            "linear-gradient(to top, rgba(5,12,25,0.7) 0%, transparent 100%)",
        }}
      />

      {/* Animated gold glow accent - CSS only */}
      <div className="hero-glow-orb absolute" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center">
        {/* Vertical golden accent line - desktop only */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2"
          style={{
            width: "3px",
            height: "260px",
            background:
              "linear-gradient(to bottom, transparent, #FFD700, #FFD700, transparent)",
            transformOrigin: "top",
          }}
        />

        <div className="max-w-2xl lg:pl-10 py-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase mb-5 px-4 py-2 rounded-full"
              style={{
                background: "rgba(255, 215, 0, 0.12)",
                color: "#FFD700",
                border: "1px solid rgba(255,215,0,0.4)",
                backdropFilter: "blur(6px)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#FFD700",
                  boxShadow: "0 0 6px #FFD700",
                }}
              />
              Tamil Nadu's Living Martial Legacy
            </span>
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-5"
            style={{ transformOrigin: "left" }}
          >
            <div
              style={{
                width: "64px",
                height: "2px",
                background:
                  "linear-gradient(to right, #FFD700, rgba(255,215,0,0.2))",
              }}
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
            className="font-heading font-bold uppercase text-white mb-4"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              textShadow:
                "0 4px 40px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            SRI
            <br />
            <span
              style={{
                color: "#FFD700",
                textShadow:
                  "0 0 30px rgba(255,215,0,0.4), 0 4px 40px rgba(0,0,0,0.9)",
              }}
            >
              NANDHIVARMAN
            </span>
            <br />
            SILAMBATTA
            <br />
            <span className="text-white/80">KALARI KAZHAGAM</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38 }}
            className="font-bold tracking-[0.25em] uppercase mb-6"
            style={{
              fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
              color: "#FFD700",
              textShadow: "0 2px 10px rgba(255,215,0,0.3)",
            }}
          >
            Tradition&nbsp; •&nbsp; Discipline&nbsp; •&nbsp; Strength
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-300 leading-relaxed mb-10"
            style={{
              fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
              maxWidth: "480px",
              textShadow: "0 1px 6px rgba(0,0,0,0.5)",
            }}
          >
            Master the ancient Tamil art of Silambam under the guidance of
            Master Govindhan.M. Build discipline, strength, and connect with
            your cultural heritage through dedicated practice.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.62 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <button
              type="button"
              data-ocid="hero.primary_button"
              onClick={() => scrollTo("#classes")}
              className="px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #FFD700, #e6b800)",
                color: "#0a0a0a",
                boxShadow: "0 4px 24px rgba(255,215,0,0.35)",
              }}
            >
              OUR BRANCHES
            </button>
            <button
              type="button"
              data-ocid="hero.secondary_button"
              onClick={() => scrollTo("#about")}
              className="px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest border-2 text-white transition-all duration-200 hover:bg-white/10 hover:scale-105 active:scale-95"
              style={{ borderColor: "rgba(255,255,255,0.55)" }}
            >
              LEARN MORE
            </button>
            <a
              href="https://forms.gle/Ef4YbcN9L3qCryiPA"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.admissions_button"
              className="inline-block px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest border-2 border-white transition-all duration-200 hover:scale-105 active:scale-95 text-center"
              style={{
                background: "linear-gradient(135deg, #FFD700, #ffc200)",
                color: "#0a0a0a",
                boxShadow: "0 4px 20px rgba(255,215,0,0.3)",
              }}
            >
              ADMISSIONS
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-14 overflow-hidden">
        <svg
          viewBox="0 0 1440 56"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full"
          aria-hidden="true"
        >
          <path
            d="M0 56L1440 56L1440 28C1200 0 960 56 720 28C480 0 240 56 0 28Z"
            fill="oklch(0.93 0.03 75)"
          />
        </svg>
      </div>
    </section>
  );
}
