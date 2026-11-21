"use client";

import { motion } from "framer-motion";
import { competencies } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerChild, staggerParent } from "@/components/ui/Reveal";

/** Each card cycles through a refined colour accent. */
const accents = [
  { icon: "text-sky-300 bg-sky-400/10 ring-sky-400/25", glow: "group-hover:shadow-sky-500/20", bar: "from-sky-400" },
  { icon: "text-violet-300 bg-violet-400/10 ring-violet-400/25", glow: "group-hover:shadow-violet-500/20", bar: "from-violet-400" },
  { icon: "text-teal-300 bg-teal-400/10 ring-teal-400/25", glow: "group-hover:shadow-teal-500/20", bar: "from-teal-400" },
  { icon: "text-blue-300 bg-blue-400/10 ring-blue-400/25", glow: "group-hover:shadow-blue-500/20", bar: "from-blue-400" },
  { icon: "text-fuchsia-300 bg-fuchsia-400/10 ring-fuchsia-400/25", glow: "group-hover:shadow-fuchsia-500/20", bar: "from-fuchsia-400" },
  { icon: "text-emerald-300 bg-emerald-400/10 ring-emerald-400/25", glow: "group-hover:shadow-emerald-500/20", bar: "from-emerald-400" },
  { icon: "text-indigo-300 bg-indigo-400/10 ring-indigo-400/25", glow: "group-hover:shadow-indigo-500/20", bar: "from-indigo-400" },
];

export default function Competencies() {
  return (
    <section id="competencies" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Expertise"
          title="Core"
          highlight="Competencies"
          description="The full range of administration and facilities capabilities built over 15+ years."
        />

        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {competencies.map(({ title, icon: Icon }, i) => {
            const a = accents[i % accents.length];
            return (
              <motion.li
                key={title}
                variants={staggerChild}
                whileHover={{ y: -4 }}
                className={`glass group relative flex w-full items-center min-[420px]:w-[calc(50%-0.375rem)] md:w-[calc(33.333%-0.5rem)] lg:w-[calc(25%-0.5625rem)] gap-3.5 overflow-hidden rounded-2xl px-4 py-4 shadow-xl shadow-transparent transition-[border-color,box-shadow] duration-300 hover:border-white/20 ${a.glow}`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-110 ${a.icon}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold leading-snug text-slate-100 sm:text-[15px]">{title}</span>
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r ${a.bar} to-transparent transition-transform duration-500 group-hover:scale-x-100`}
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
