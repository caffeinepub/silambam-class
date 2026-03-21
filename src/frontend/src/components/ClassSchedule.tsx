import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "motion/react";

const schedule = [
  {
    id: "mon-am",
    day: "Monday",
    time: "6:00 AM – 7:30 AM",
    type: "Beginners Foundation",
    level: "Beginner",
  },
  {
    id: "mon-pm",
    day: "Monday",
    time: "6:00 PM – 7:30 PM",
    type: "Intermediate Techniques",
    level: "Intermediate",
  },
  {
    id: "wed-am",
    day: "Wednesday",
    time: "6:00 AM – 7:30 AM",
    type: "Advanced Combat Forms",
    level: "Advanced",
  },
  {
    id: "wed-pm",
    day: "Wednesday",
    time: "6:00 PM – 7:30 PM",
    type: "Beginners Foundation",
    level: "Beginner",
  },
  {
    id: "fri-am",
    day: "Friday",
    time: "6:00 AM – 7:30 AM",
    type: "Women's Self-Defence",
    level: "All Levels",
  },
  {
    id: "fri-pm",
    day: "Friday",
    time: "6:00 PM – 7:30 PM",
    type: "Intermediate Techniques",
    level: "Intermediate",
  },
  {
    id: "sat-am",
    day: "Saturday",
    time: "7:00 AM – 9:00 AM",
    type: "Master Class",
    level: "Advanced",
  },
  {
    id: "sun-am",
    day: "Sunday",
    time: "7:00 AM – 9:00 AM",
    type: "Open Practice & Review",
    level: "All Levels",
  },
];

const levelColor: Record<string, string> = {
  Beginner: "oklch(0.55 0.10 150)",
  Intermediate: "oklch(0.55 0.12 240)",
  Advanced: "oklch(0.38 0.12 28)",
  "All Levels": "oklch(0.45 0.08 80)",
};

export default function ClassSchedule() {
  return (
    <section
      id="schedule"
      className="py-20"
      style={{ backgroundColor: "oklch(0.93 0.03 75)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2
            className="font-heading font-bold uppercase text-3xl sm:text-4xl mb-4"
            style={{ color: "oklch(0.25 0.05 220)" }}
          >
            Class Schedule
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: "oklch(0.72 0.13 70)" }}
          />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            All classes held at our main dojo. Bring comfortable attire and a
            bamboo staff will be provided.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl overflow-hidden shadow-card"
          style={{ backgroundColor: "oklch(0.95 0.025 75)" }}
          data-ocid="schedule.table"
        >
          <Table>
            <TableHeader>
              <TableRow style={{ backgroundColor: "oklch(0.25 0.05 220)" }}>
                <TableHead
                  className="font-bold text-xs uppercase tracking-widest"
                  style={{ color: "oklch(0.72 0.13 70)" }}
                >
                  Day
                </TableHead>
                <TableHead
                  className="font-bold text-xs uppercase tracking-widest"
                  style={{ color: "oklch(0.72 0.13 70)" }}
                >
                  Time
                </TableHead>
                <TableHead
                  className="font-bold text-xs uppercase tracking-widest"
                  style={{ color: "oklch(0.72 0.13 70)" }}
                >
                  Class Type
                </TableHead>
                <TableHead
                  className="font-bold text-xs uppercase tracking-widest"
                  style={{ color: "oklch(0.72 0.13 70)" }}
                >
                  Level
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedule.map((row, i) => (
                <TableRow
                  key={row.id}
                  data-ocid={`schedule.row.${i + 1}`}
                  style={{
                    backgroundColor:
                      i % 2 === 0
                        ? "oklch(0.95 0.025 75)"
                        : "oklch(0.91 0.025 75)",
                  }}
                >
                  <TableCell
                    className="font-bold text-sm"
                    style={{ color: "oklch(0.25 0.05 220)" }}
                  >
                    {row.day}
                  </TableCell>
                  <TableCell className="text-sm">{row.time}</TableCell>
                  <TableCell className="text-sm font-medium">
                    {row.type}
                  </TableCell>
                  <TableCell>
                    <span
                      className="px-2 py-1 rounded-full text-xs font-bold text-white"
                      style={{
                        backgroundColor:
                          levelColor[row.level] ?? "oklch(0.5 0.1 200)",
                      }}
                    >
                      {row.level}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
}
