"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Download, CircleCheck, ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import LinkedInIcon from "@/components/ui/LinkedInIcon";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    color: "from-violet-500 to-fuchsia-500",
    external: false,
  },
  {
    label: "Phone",
    value: profile.phoneDisplay,
    href: profile.phoneHref,
    icon: Phone,
    color: "from-teal-500 to-emerald-500",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "in/sureshadminspecialist",
    href: profile.linkedin,
    icon: LinkedInIcon,
    color: "from-[#0a66c2] to-sky-500",
    external: true,
  },
  {
    label: "Location",
    value: profile.location,
    href: "https://www.google.com/maps/search/?api=1&query=Chennai%2C+Tamil+Nadu%2C+India",
    icon: MapPin,
    color: "from-blue-500 to-indigo-500",
    external: true,
  },
];

const inputClass =
  "peer w-full rounded-xl border border-white/10 bg-navy-950/60 px-4 pb-2.5 pt-6 text-[15px] text-white placeholder-transparent outline-none transition focus:border-sky-400/60 focus:bg-navy-950/80 focus:ring-4 focus:ring-sky-400/10";
const labelClass =
  "pointer-events-none absolute left-4 top-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-sky-300";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = `${message}\n\n—\n${name}\n${email}`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    form.reset();
    window.setTimeout(() => setSent(false), 6000);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/80 to-navy-950" />
        <div className="animate-blob absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-violet-brand/15 blur-[130px]" />
        <div className="animate-blob absolute bottom-[10%] right-[5%] h-96 w-96 rounded-full bg-electric/15 blur-[130px] [animation-delay:-11s]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let’s"
          highlight="Connect"
          description="For administration and facilities management roles, collaborations or professional enquiries, I'd be glad to hear from you."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact channels */}
          <Reveal className="min-w-0 space-y-4 lg:col-span-2">
            {channels.map(({ label, value, href, icon: Icon, color, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="glass group flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 sm:p-5"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs uppercase tracking-[0.16em] text-slate-500">{label}</span>
                  <span className="mt-0.5 block font-semibold text-white [overflow-wrap:anywhere]">{value}</span>
                </span>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  aria-hidden="true"
                />
              </a>
            ))}

            <a
              href={profile.cvPath}
              download="Suresh-K-CV.pdf"
              className="group relative mt-2 flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-electric via-violet-brand to-teal-brand bg-[length:200%_auto] px-6 py-4 font-semibold text-white shadow-xl shadow-violet-brand/25 transition-all duration-500 hover:bg-right"
            >
              <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
              Download My CV
            </a>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1} className="min-w-0 lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass gradient-border relative rounded-3xl p-6 sm:p-8"
              aria-describedby="form-note"
            >
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">Send a message</h3>
              <p id="form-note" className="mt-1 text-sm text-slate-400">
                Your email app will open with the message ready to send.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="relative">
                  <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputClass} />
                  <label htmlFor="name" className={labelClass}>Your name</label>
                </div>
                <div className="relative">
                  <input id="email" name="email" type="email" required autoComplete="email" placeholder="Your email" className={inputClass} />
                  <label htmlFor="email" className={labelClass}>Your email</label>
                </div>
                <div className="relative sm:col-span-2">
                  <input id="subject" name="subject" type="text" required placeholder="Subject" className={inputClass} />
                  <label htmlFor="subject" className={labelClass}>Subject</label>
                </div>
                <div className="relative sm:col-span-2">
                  <textarea id="message" name="message" required rows={5} placeholder="Message" className={`${inputClass} resize-none`} />
                  <label htmlFor="message" className={labelClass}>Message</label>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-electric/30 transition hover:brightness-110 sm:w-auto"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </motion.button>
                <AnimatePresence>
                  {sent && (
                    <motion.p
                      role="status"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2 text-sm text-teal-300"
                    >
                      <CircleCheck className="h-4 w-4" aria-hidden="true" />
                      Opening your email app…
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
