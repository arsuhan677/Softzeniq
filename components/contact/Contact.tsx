"use client";

import { Button } from "@/components/ui/button";
import { Check, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { GridBackdrop } from "../shared/GridBackDrop";
import { Reveal } from "../shared/Revel";

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact — SoftZeniq" },
//       {
//         name: "description",
//         content:
//           "Tell us about your project. We respond within 24 hours with a proposal and next steps.",
//       },
//       { property: "og:title", content: "Contact — SoftZeniq" },
//       {
//         property: "og:description",
//         content: "Start a project with SoftZeniq. We respond within 24 hours.",
//       },
//       { property: "og:url", content: "/contact" },
//     ],
//     links: [{ rel: "canonical", href: "/contact" }],
//   }),
//   component: Contact,
// });

const projectTypes = [
  "Website",
  "E-commerce",
  "Custom Software",
  "Mobile App",
  "UI/UX Design",
  "SEO / Ads",
  "SaaS Product",
];
const budgets = ["< $5k", "$5k – $15k", "$15k – $50k", "$50k+"];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="relative pt-40 pb-12 overflow-hidden">
        <GridBackdrop />
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
              Get in touch
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Let&apos;s build{" "}
              <span className="text-gradient">your next thing</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Tell us a bit about the project. We respond within 24 hours with a
              tailored proposal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.4fr] gap-6">
          {/* Info */}
          <Reveal>
            <div className="glass rounded-2xl p-7 h-full flex flex-col gap-5">
              <h3 className="font-display text-xl font-semibold">
                Reach us directly
              </h3>
              {[
                { icon: Mail, label: "Email", value: "softzeniq@gmail.com" },
                { icon: Phone, label: "Phone", value: "+880 1791-091160" },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Remote · Worldwide",
                },
              ].map((c) => (
                <div key={c.label} className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-gradient-brand grid place-items-center shrink-0">
                    <c.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="text-sm font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
              <a
                href="https://wa.me/8801791091160"
                target="_blank"
                rel="noopener"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand text-primary-foreground px-4 py-3 text-sm font-medium shadow-glow hover:brightness-110 transition"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <div className="mt-2 rounded-xl overflow-hidden border border-border h-44">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2945.2457475868355!2d90.38816607431781!3d23.878821978582998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDUyJzQzLjgiTiA5MMKwMjMnMjYuNyJF!5e1!3m2!1sen!2sbd!4v1779552441092!5m2!1sen!2sbd"
                  width="600"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-7">
              {sent ? (
                <div className="py-16 text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-gradient-brand grid place-items-center shadow-glow">
                    <Check className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold">Message received!</h3>
                  <p className="mt-2 text-muted-foreground">
                    We&apos;ll be in touch within 24 hours. In the meantime,
                    feel free to ping us on WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Name">
                      <input
                        required
                        maxLength={100}
                        className="field"
                        placeholder="Jane Doe"
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        required
                        type="email"
                        maxLength={150}
                        className="field"
                        placeholder="jane@company.com"
                      />
                    </Field>
                  </div>
                  <Field label="Project type">
                    <select required className="field">
                      <option value="">Select a type…</option>
                      {projectTypes.map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Budget">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgets.map((b) => (
                        <label key={b} className="cursor-pointer">
                          <input
                            type="radio"
                            name="budget"
                            value={b}
                            className="peer sr-only"
                          />
                          <div className="text-center text-sm py-2 px-3 rounded-lg border border-border hover:border-primary/50 peer-checked:bg-gradient-brand peer-checked:text-primary-foreground peer-checked:border-transparent transition">
                            {b}
                          </div>
                        </label>
                      ))}
                    </div>
                  </Field>
                  <Field label="Tell us about your project">
                    <textarea
                      required
                      minLength={10}
                      maxLength={1500}
                      rows={5}
                      className="field resize-none"
                      placeholder="Goals, timeline, anything we should know…"
                    />
                  </Field>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="mt-2"
                  >
                    Send message <Send className="h-4 w-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our friendly use of this info to
                    reply to you.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .field {
          width: 100%;
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 0.625rem;
          padding: 0.7rem 0.9rem;
          font-size: 0.875rem;
          color: var(--foreground);
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .field:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
        }
      `}</style>
    </>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}
