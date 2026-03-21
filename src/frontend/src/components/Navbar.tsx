import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Master's Desk", href: "#masters-desk" },
  { label: "Branches", href: "#classes" },
  { label: "Social Media", href: "#social" },
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
    const id = href.replace("#", "");
    const el = document.getElementById(id);
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
              src="/assets/uploads/IMG_20260321_141537-1-1.jpg"
              alt="SNSKK Logo"
              className="w-11 h-11 rounded-full object-cover flex-shrink-0"
              style={{
                border: "2.5px solid #FFD700",
                boxShadow:
                  "0 0 0 2px rgba(255,215,0,0.3), 0 2px 8px rgba(0,0,0,0.4)",
                backgroundColor: "#fff",
              }}
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
            className="hidden md:flex items-center gap-1 flex-wrap justify-end"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                data-ocid="nav.link"
                onClick={() => handleClick(link.href)}
                className="px-2 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full transition-all duration-200 cursor-pointer select-none"
                style={
                  active === link.href
                    ? {
                        backgroundColor: "#FFD700",
                        color: "#1a1a2e",
                        border: "1.5px solid #FFD700",
                        boxShadow: "0 0 8px rgba(255,215,0,0.5)",
                      }
                    : {
                        backgroundColor: "transparent",
                        color: "#FFD700",
                        border: "1.5px solid #FFD700",
                      }
                }
                onMouseEnter={(e) => {
                  if (active !== link.href) {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = "rgba(255,215,0,0.15)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "0 0 6px rgba(255,215,0,0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== link.href) {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "none";
                  }
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            data-ocid="nav.toggle"
            className="md:hidden text-white p-2"
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
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "oklch(0.22 0.05 220)" }}
          >
            <nav className="px-4 pt-3 pb-4 flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  data-ocid="nav.link"
                  onClick={() => handleClick(link.href)}
                  className="text-left px-3 py-2 text-xs font-bold tracking-widest uppercase rounded-full transition-all duration-200 w-full"
                  style={
                    active === link.href
                      ? {
                          backgroundColor: "#FFD700",
                          color: "#1a1a2e",
                          border: "1.5px solid #FFD700",
                        }
                      : {
                          backgroundColor: "transparent",
                          color: "#FFD700",
                          border: "1.5px solid #FFD700",
                        }
                  }
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
