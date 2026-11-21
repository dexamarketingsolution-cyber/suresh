"use client";

import { motion } from "framer-motion";
import { techSkills } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerChild, staggerParent } from "@/components/ui/Reveal";

export default function TechSkills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-electric/10 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Systems & Software"
          title="Technical Skills"
          highlight="& Software"
          description="Enterprise systems and reporting tools in my professional toolkit."
        />

        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {techSkills.map(({ title, icon: Icon, tag, description, gradient }) => (
            <motion.li
              key={title}
              variants={staggerChild}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="glass relative h-full overflow-hidden rounded-3xl p-6 transition-colors duration-300 group-hover:border-white/25">
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
                />
                {/* Circuit-style corner detail */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 80 80"
                  className="absolute -right-2 -top-2 h-20 w-20 text-white/10 transition-colors duration-500 group-hover:text-white/25"
                >
                  <path d="M10 70 H40 V40 H70 M40 40 V10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="70" cy="40" r="3" fill="currentColor" />
                  <circle cx="40" cy="10" r="3" fill="currentColor" />
                  <circle cx="10" cy="70" r="3" fill="currentColor" />
                </svg>
                <div className="relative">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-navy-950/60 text-white shadow-inner transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <span className="mt-5 inline-block rounded-md bg-white/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    {tag}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-white">{title}</h3>
                  <p className="mt-1.5 text-sm text-slate-400">{description}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
