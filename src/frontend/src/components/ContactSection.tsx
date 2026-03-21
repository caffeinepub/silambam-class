import { Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-sand">
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
            Contact Us
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: "oklch(0.72 0.13 70)" }}
          />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Reach out to Master Govindhan.M directly to learn more about joining
            our Silambam classes.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl p-10 shadow-card flex flex-col gap-6 w-full max-w-md"
            style={{ backgroundColor: "oklch(0.38 0.12 28)" }}
          >
            <div>
              <h3 className="font-heading font-bold text-xl text-white mb-1">
                Get in Touch
              </h3>
              <div
                className="h-0.5 w-12 rounded"
                style={{ backgroundColor: "oklch(0.72 0.13 70)" }}
              />
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "oklch(0.30 0.12 28)" }}
              >
                <Phone size={18} style={{ color: "oklch(0.72 0.13 70)" }} />
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-1">Phone</p>
                <p className="text-white/75 text-sm">+91 98847 79225</p>
                <p className="text-white/60 text-xs mt-0.5">
                  Master Govindhan.M
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "oklch(0.30 0.12 28)" }}
              >
                <Mail size={18} style={{ color: "oklch(0.72 0.13 70)" }} />
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-1">Email</p>
                <p className="text-white/75 text-sm break-all">
                  srinandhivarman.s.k.k@gmail.com
                </p>
              </div>
            </div>

            <div
              className="pt-4 border-t"
              style={{ borderColor: "oklch(0.48 0.12 28)" }}
            >
              <p className="text-white/60 text-xs leading-relaxed">
                Open to all age groups from 5 years and above. Contact us to
                find the branch nearest to you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
