import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const handleClick = (href: string) => {
    setActive(href);
    setOpen(false);
    const el = document.querySelector(href) as HTMLElement | null;
    if (el) {
      const navHeight = 64;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className="sticky top-0 z-50 shadow-lg"
      style={{ backgroundColor: "oklch(0.25 0.05 220)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            data-ocid="nav.link"
            onClick={() => handleClick("#home")}
            className="flex items-center gap-3 group"
          >
            <img
              src="/assets/uploads/IMG_20260321_141537-1.jpg"
              alt="SNSKK Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-white hidden sm:block">
              <div
                className="font-heading font-bold text-xs tracking-widest uppercase leading-tight"
                style={{ color: "oklch(0.72 0.13 70)" }}
              >
                SRI NANDHIVARMAN
              </div>
              <div className="font-heading font-bold text-xs tracking-wide text-white uppercase leading-tight">
                Silambatta Kalari Kazhagam
              </div>
            </div>
            <div className="text-white sm:hidden">
              <div
                className="font-heading font-bold text-[10px] tracking-widest uppercase leading-tight"
                style={{ color: "oklch(0.72 0.13 70)" }}
              >
                SRI NANDHIVARMAN
              </div>
              <div className="font-heading font-bold text-[10px] tracking-wide text-white uppercase leading-tight">
                Silambatta Kalari Kazhagam
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                data-ocid="nav.link"
                onClick={() => handleClick(link.href)}
                className={`px-3 py-2 text-xs font-bold tracking-widest uppercase transition-colors rounded ${
                  active === link.href
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-300"
                }`}
                style={
                  active === link.href ? { color: "oklch(0.72 0.13 70)" } : {}
                }
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Join Us CTA */}
          <div className="hidden lg:block">
            <button
              type="button"
              data-ocid="nav.primary_button"
              onClick={() => handleClick("#contact")}
              className="px-5 py-2 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "oklch(0.72 0.13 70)",
                color: "oklch(0.15 0.01 60)",
              }}
            >
              JOIN US
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            data-ocid="nav.toggle"
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "oklch(0.22 0.05 220)" }}
          >
            <nav className="px-4 pt-2 pb-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left px-3 py-2 text-sm font-bold tracking-widest uppercase text-gray-300 hover:text-yellow-300 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleClick("#contact")}
                className="mt-2 px-5 py-2 rounded-full font-bold text-sm uppercase tracking-widest w-fit"
                style={{
                  backgroundColor: "oklch(0.72 0.13 70)",
                  color: "oklch(0.15 0.01 60)",
                }}
              >
                JOIN US
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
