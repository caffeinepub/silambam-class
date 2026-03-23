import { Clock, MapPin, Users } from "lucide-react";
import { motion } from "motion/react";

const branches = [
  {
    id: 1,
    name: "Guduvancherry Branch",
    location: "Guduvancherry",
    city: "Tamil Nadu",
    mapsUrl: "https://maps.app.goo.gl/LkwWVSQDekFE26pQ6",
    timing: "Thu & Sun 5:00 PM – 7:00 PM",
  },
  {
    id: 2,
    name: "Kuthanur Branch",
    location: "Kuthanur",
    city: "Tamil Nadu",
    mapsUrl: "https://maps.app.goo.gl/WRrz7oHLEQD39hpv9",
    timing: "Sat 5:30 PM – 7:30 PM & Sun 6:00 AM – 8:00 AM",
  },
  {
    id: 3,
    name: "Mahalakshmi Nagar Branch",
    location: "Mahalakshmi Nagar",
    city: "Tamil Nadu",
    mapsUrl: null,
    timing: "Thu 6:00 AM – 8:00 AM & Sun 4:00 PM – 6:00 PM",
  },
  {
    id: 4,
    name: "Nandhivaram Branch",
    location: "Nandhivaram",
    city: "Tamil Nadu",
    mapsUrl: null,
    timing: "Mon, Wed & Sat 6:00 AM – 7:30 AM",
  },
  {
    id: 5,
    name: "Sambavi Apartment Branch",
    location: "Sambavi Apartment",
    city: "Tamil Nadu",
    mapsUrl: null,
    timing: "Tue & Sat 5:00 PM – 6:30 PM",
  },
  {
    id: 6,
    name: "Thirthaveli Branch",
    location: "Thirthaveli",
    city: "Tamil Nadu",
    mapsUrl: null,
    timing: "Mon & Wed 5:00 PM – 7:00 PM",
  },
  {
    id: 7,
    name: "Shriram Shankari Branch",
    location: "Shriram Shankari",
    city: "Tamil Nadu",
    mapsUrl: null,
    timing: "Tue & Fri 5:00 PM – 6:30 PM",
  },
];

export default function BranchesSection() {
  return (
    <section
      id="classes"
      className="py-20"
      style={{ backgroundColor: "oklch(0.93 0.03 75)" }}
    >
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
            Our Branches
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: "oklch(0.72 0.13 70)" }}
          />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Sri Nandhivarman Silambatta Kalari Kazhagam operates across multiple
            locations. Each branch offers the same quality of authentic Silambam
            instruction under expert supervision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl p-7 shadow-card"
              style={{ backgroundColor: "oklch(0.95 0.025 75)" }}
              data-ocid={`branches.card.${i + 1}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-lg flex-shrink-0"
                  style={{
                    backgroundColor: "oklch(0.25 0.05 220)",
                    color: "oklch(0.72 0.13 70)",
                  }}
                >
                  {branch.id}
                </div>
                <div>
                  <h3
                    className="font-heading font-bold text-lg uppercase"
                    style={{ color: "oklch(0.25 0.05 220)" }}
                  >
                    {branch.name}
                  </h3>
                  <span
                    className="text-xs font-bold tracking-wide uppercase"
                    style={{ color: "oklch(0.72 0.13 70)" }}
                  >
                    SNSKK
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={15}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.38 0.12 28)" }}
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground/80">
                      {branch.location}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {branch.city}
                    </p>
                    {branch.mapsUrl && (
                      <a
                        href={branch.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold underline mt-1 inline-block"
                        style={{ color: "oklch(0.38 0.12 28)" }}
                      >
                        View on Maps
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock
                    size={15}
                    className="flex-shrink-0"
                    style={{ color: "oklch(0.38 0.12 28)" }}
                  />
                  <p className="text-sm text-foreground/80">{branch.timing}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Users
                    size={15}
                    className="flex-shrink-0"
                    style={{ color: "oklch(0.38 0.12 28)" }}
                  />
                  <p className="text-sm text-foreground/80">
                    Age: 5+ &nbsp;|&nbsp; Classes/Week
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-border">
                <button
                  type="button"
                  data-ocid={`branches.primary_button.${i + 1}`}
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="w-full py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "oklch(0.72 0.13 70)",
                    color: "oklch(0.15 0.01 60)",
                  }}
                >
                  INQUIRE NOW
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
