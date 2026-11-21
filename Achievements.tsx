"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import Counter from "@/components/ui/Counter";
import { staggerChild, staggerParent } from "@/components/ui/Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
        <div className="animate-blob absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-electric/15 blur-[110px]" />
        <div className="animate-blob absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-teal-brand/15 blur-[110px] [animation-delay:-9s]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Impact in Numbers"
          title="Key Professional"
          highlight="Achievements"
          description="The scale of operations managed across corporate, airport and logistics locations."
        />

        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map(({ value, rangeStart, prefix, suffix, label, icon: Icon, accent }) => (
            <motion.li
              key={label}
              variants={staggerChild}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-3xl p-6 sm:p-8"
            >
              {/* Accent glow */}
              <div
                aria-hidden="true"
                className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
              />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="whitespace-nowrap font-display text-5xl font-extrabold tracking-tight text-white xl:text-6xl">
                    <Counter to={value} rangeStart={rangeStart} prefix={prefix} suffix={suffix} />
                  </p>
                  <p className="mt-3 text-sm font-medium text-slate-300 sm:text-base">{label}</p>
                </div>
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110`}
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
              </div>
              <div className="relative mt-6 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${accent}`}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
