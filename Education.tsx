import { GraduationCap, School, CalendarRange } from "lucide-react";
import { education } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading eyebrow="Education" title="Academic" highlight="Qualification" />

        <Reveal className="mt-12">
          <div className="glass gradient-border group relative overflow-hidden rounded-3xl p-6 sm:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-violet-brand/30 to-electric/10 blur-3xl transition-transform duration-700 group-hover:scale-125"
            />
            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:text-left">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-electric via-violet-brand to-teal-brand text-white shadow-2xl shadow-violet-brand/30 transition-transform duration-500 group-hover:rotate-6">
                <GraduationCap className="h-10 w-10" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{education.degree}</h3>
                <div className="mt-3 flex flex-col items-center gap-2 text-slate-300 sm:flex-row sm:gap-6">
                  <span className="inline-flex items-center gap-2">
                    <School className="h-4 w-4 text-sky-300" aria-hidden="true" />
                    {education.institution}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CalendarRange className="h-4 w-4 text-teal-300" aria-hidden="true" />
                    {education.period}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
