import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitForm } from "../hooks/useQueries";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { mutate, isPending, isSuccess } = useSubmitForm();

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Valid email required";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    mutate(form, {
      onSuccess: () => {
        toast.success(
          "Enrollment request sent! We'll contact you within 24 hours.",
        );
        setForm({ name: "", email: "", phone: "", message: "" });
      },
      onError: () => {
        toast.error("Something went wrong. Please try again.");
      },
    });
  };

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
            Enroll &amp; Contact Us
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: "oklch(0.72 0.13 70)" }}
          />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Ready to begin your Silambam journey? Fill in the form or reach
            Master Govindhan.M directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 rounded-2xl p-8 shadow-card"
            style={{ backgroundColor: "oklch(0.95 0.025 75)" }}
            data-ocid="contact.card"
          >
            {isSuccess ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center py-16 text-center gap-4"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl text-white"
                  style={{ backgroundColor: "oklch(0.25 0.05 220)" }}
                >
                  ✓
                </div>
                <h3
                  className="font-heading font-bold text-2xl"
                  style={{ color: "oklch(0.25 0.05 220)" }}
                >
                  Request Sent!
                </h3>
                <p className="text-muted-foreground">
                  We'll reach out to you within 24 hours to discuss your
                  enrollment.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.modal"
              >
                <h3
                  className="font-heading font-bold text-xl mb-6"
                  style={{ color: "oklch(0.25 0.05 220)" }}
                >
                  Send Us a Message
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-xs font-bold uppercase tracking-widest"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      data-ocid="contact.input"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder="Your full name"
                      className="bg-white"
                    />
                    {errors.name && (
                      <p
                        data-ocid="contact.error_state"
                        className="text-xs"
                        style={{ color: "oklch(0.38 0.12 28)" }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-xs font-bold uppercase tracking-widest"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      data-ocid="contact.input"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="your@email.com"
                      className="bg-white"
                    />
                    {errors.email && (
                      <p
                        data-ocid="contact.error_state"
                        className="text-xs"
                        style={{ color: "oklch(0.38 0.12 28)" }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="phone"
                    className="text-xs font-bold uppercase tracking-widest"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    data-ocid="contact.input"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-white"
                  />
                  {errors.phone && (
                    <p
                      data-ocid="contact.error_state"
                      className="text-xs"
                      style={{ color: "oklch(0.38 0.12 28)" }}
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-widest"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="contact.textarea"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Tell us about your experience level, age, and any questions..."
                    rows={4}
                    className="bg-white"
                  />
                  {errors.message && (
                    <p
                      data-ocid="contact.error_state"
                      className="text-xs"
                      style={{ color: "oklch(0.38 0.12 28)" }}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={isPending}
                  className="w-full py-3 rounded-full font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-95 disabled:opacity-60"
                  style={{
                    backgroundColor: "oklch(0.25 0.05 220)",
                    color: "white",
                  }}
                >
                  {isPending && <Loader2 size={16} className="animate-spin" />}
                  {isPending ? "Sending..." : "SEND ENROLLMENT REQUEST"}
                </button>
                {isPending && (
                  <div data-ocid="contact.loading_state" className="sr-only">
                    Submitting form...
                  </div>
                )}
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl p-8 shadow-card flex flex-col gap-6"
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
