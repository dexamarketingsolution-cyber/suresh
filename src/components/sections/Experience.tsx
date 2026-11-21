"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { CalendarDays, ChevronDown, MapPinned, CircleCheckBig, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import { experience, type Experience as Job } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet-brand/10 blur-[140px]" />
      </div>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Career Journey"
          title="Professional"
          highlight="Experience"
          description="Over 15 years of progressive responsibility in administration, from office support to leading multi-location facilities."
        />

        <div ref={ref} className="relative mt-16">
          {/* Timeline track */}
          <div aria-hidden="true" className="absolute bottom-0 left-[1.6rem] top-0 w-px bg-white/10 sm:left-[2.1rem]" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: lineScale }}
            className="absolute bottom-0 left-[1.6rem] top-0 w-[2px] origin-top -translate-x-[0.5px] bg-gradient-to-b from-electric via-violet-brand to-teal-brand sm:left-[2.1rem]"
          />

          <ol className="space-y-8 sm:space-y-10">
            {experience.map((job, i) => (
              <TimelineItem key={job.company} job={job} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ job, index }: { job: Job; index: number }) {
  const [open, setOpen] = useState(Boolean(job.current));
  const panelId = `exp-panel-${index}`;

  return (
    <motion.li
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-16 sm:pl-24"
    >
      {/* Node */}
      <div className="absolute left-0 top-5 sm:top-6">
        <span
          className={`relative flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl font-display text-[11px] font-extrabold tracking-wide sm:h-[4.25rem] sm:w-[4.25rem] sm:text-sm ${
            job.current
              ? "bg-gradient-to-br from-electric via-violet-brand to-teal-brand text-white shadow-xl shadow-violet-brand/40"
              : "border border-white/10 bg-navy-800 text-slate-300"
          }`}
        >
          {job.initials}
          {job.current && (
            <span aria-hidden="true" className="absolute -inset-1 -z-10 animate-pulse rounded-2xl bg-violet-brand/40 blur-md" />
          )}
        </span>
      </div>

      <article
        className={`glass group relative overflow-hidden rounded-3xl transition-all duration-300 hover:border-white/20 ${
          job.current ? "gradient-border bg-gradient-to-br from-electric/[0.08] via-violet-brand/[0.05] to-transparent" : ""
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-7"
        >
          <div className="min-w-0">
            {job.current && (
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-teal-400/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-teal-200 ring-1 ring-teal-300/30">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Current Role
              </span>
            )}
            <h3 className={`font-display font-bold text-white ${job.current ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}>
              {job.role}
            </h3>
            <p className={`mt-1 font-semibold ${job.current ? "text-gradient text-base sm:text-lg" : "text-sky-300"}`}>
              {job.company}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-violet-300" aria-hidden="true" />
                {job.period}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPinned className="h-4 w-4 text-teal-300" aria-hidden="true" />
                {job.location}
              </span>
            </div>
          </div>
          <span
            className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">{open ? "Hide" : "Show"} responsibilities</span>
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ul className="space-y-3 border-t border-white/10 px-5 pb-6 pt-5 sm:px-7 sm:pb-7">
                {job.points.map((point, j) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * j + 0.1 }}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-300"
                  >
                    <CircleCheckBig
                      className={`mt-0.5 h-[18px] w-[18px] shrink-0 ${job.current ? "text-teal-300" : "text-sky-400"}`}
                      aria-hidden="true"
                    />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </motion.li>
  );
}
