"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarClock, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { aboutHighlights, aboutParagraphs, education, experience, profile } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { staggerChild, staggerParent } from "@/components/ui/Reveal";

const palette = [
  "from-blue-500 to-cyan-400 shadow-blue-500/30",
  "from-violet-500 to-fuchsia-400 shadow-violet-500/30",
  "from-teal-500 to-emerald-400 shadow-teal-500/30",
  "from-indigo-500 to-sky-400 shadow-indigo-500/30",
];

export default function About() {
  const current = experience.find((e) => e.current);

  const facts = [
    { icon: MapPin, label: "Based in", value: profile.location },
    { icon: CalendarClock, label: "Experience", value: `${profile.yearsOfExperience} Years` },
    { icon: BriefcaseBusiness, label: "Currently at", value: current?.company ?? "" },
    { icon: GraduationCap, label: "Education", value: `BBA, ${education.institution}` },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Keeping workplaces running,"
          highlight="every single day"
          description="A hands-on administration professional trusted with offices, airports and logistics sites across multiple locations."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="min-w-0 space-y-5 text-[15px] leading-relaxed text-slate-300 sm:text-base lg:col-span-3">
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Administration", "Facilities", "Procurement", "Travel Desk", "Compliance", "Cost Control"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="min-w-0 lg:col-span-2">
            <div className="glass gradient-border rounded-3xl p-6 sm:p-7">
              <ul className="space-y-5">
                {facts.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-sky-300 ring-1 ring-white/10">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-slate-500">{label}</span>
                      <span className="mt-0.5 block font-semibold text-white">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {aboutHighlights.map(({ title, icon: Icon, description }, i) => (
            <motion.li
              key={title}
              variants={staggerChild}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-2xl p-5 transition-colors duration-300 hover:border-white/20"
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-electric/20 to-violet-brand/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg ${palette[i % palette.length]} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
