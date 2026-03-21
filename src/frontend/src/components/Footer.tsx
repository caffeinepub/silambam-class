import { SiInstagram, SiYoutube } from "react-icons/si";

export default function Footer() {
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer style={{ backgroundColor: "oklch(0.25 0.05 220)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-lg"
                style={{
                  backgroundColor: "oklch(0.72 0.13 70)",
                  color: "oklch(0.15 0.01 60)",
                }}
              >
                ⚔
              </div>
              <div>
                <div
                  className="font-heading font-bold text-sm uppercase tracking-widest"
                  style={{ color: "oklch(0.72 0.13 70)" }}
                >
                  SRI NANDHIVARMAN
                </div>
                <div className="font-heading font-bold text-sm text-white uppercase tracking-wide">
                  Silambatta Kalari Kazhagam
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-2"
              style={{ color: "oklch(0.70 0.02 220)" }}
            >
              Tradition • Discipline • Strength
            </p>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "oklch(0.60 0.02 220)" }}
            >
              Dedicated to preserving and teaching the ancient Tamil martial art
              of Silambam. Welcoming students aged 5 and above across multiple
              branches.
            </p>
            <div
              className="flex items-center gap-2 text-sm mb-1"
              style={{ color: "oklch(0.70 0.02 220)" }}
            >
              <span>📞</span>
              <span>+91 98847 79225 (Master Govindhan.M)</span>
            </div>
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "oklch(0.70 0.02 220)" }}
            >
              <span>✉</span>
              <span>srinandhivarman.s.k.k@gmail.com</span>
            </div>
          </div>

          {/* Social & Quick Links */}
          <div>
            <h4
              className="font-bold text-xs uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.72 0.13 70)" }}
            >
              Follow Us
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/srinandhivarman.s.k.k?igsh=NHd6MGs2MGs2Y2lz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-opacity hover:opacity-75"
              >
                <SiInstagram
                  size={22}
                  style={{ color: "oklch(0.72 0.13 70)" }}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCusFq397fpsJFLBiIHMOZVA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="transition-opacity hover:opacity-75"
              >
                <SiYoutube size={22} style={{ color: "oklch(0.72 0.13 70)" }} />
              </a>
            </div>
            <h4
              className="font-bold text-xs uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.72 0.13 70)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Achievements", "Gallery", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <button
                      type="button"
                      onClick={() => {
                        const id = `#${link.toLowerCase()}`;
                        document
                          .querySelector(id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "oklch(0.65 0.02 220)" }}
                    >
                      {link}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid oklch(0.35 0.04 220)",
            color: "oklch(0.55 0.02 220)",
          }}
        >
          <p>
            © 2025 SRI NANDHIVARMAN SILAMBATTA KALARI KAZHAGAM | All Rights
            Reserved
          </p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              style={{ color: "oklch(0.72 0.13 70)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
