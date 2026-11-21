"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Mail, MapPin, Award, BadgeCheck } from "lucide-react";
import { profile } from "@/data/profile";
import LinkedInIcon from "@/components/ui/LinkedInIcon";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const letters = profile.name.toUpperCase().split("");

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28">
      {/* Animated background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="animate-blob absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-electric/25 blur-[110px]" />
        <div className="animate-blob absolute right-[-8rem] top-[-4rem] h-[30rem] w-[30rem] rounded-full bg-violet-brand/25 blur-[120px] [animation-delay:-7s]" />
        <div className="animate-blob absolute bottom-[-10rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-teal-brand/20 blur-[120px] [animation-delay:-14s]" />
        {/* Floating shapes */}
        <span className="animate-float absolute left-[8%] top-[22%] hidden h-3 w-3 rounded-full bg-sky-400/70 shadow-[0_0_20px_4px] shadow-sky-400/40 md:block" />
        <span className="animate-float absolute right-[12%] top-[18%] hidden h-14 w-14 rotate-12 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur md:block [animation-delay:-2s]" />
        <span className="animate-float absolute bottom-[18%] left-[14%] hidden h-10 w-10 rounded-full border border-violet-400/30 md:block [animation-delay:-4s]" />
        <span className="animate-float absolute bottom-[26%] right-[6%] hidden h-2.5 w-2.5 rounded-full bg-teal-brand/80 shadow-[0_0_18px_4px] shadow-teal-brand/40 md:block [animation-delay:-1s]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy-950" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Text */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-1.5 text-xs font-semibold text-teal-200 sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-300" />
            </span>
            Corporate Administration Professional
          </motion.div>

          <h1 className="mt-6 font-display font-extrabold leading-[0.95] tracking-tight text-white">
            <span className="sr-only">{profile.name} – {profile.designation}</span>
            <span aria-hidden="true" className="block text-5xl sm:text-7xl lg:text-8xl">
              {letters.map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 40, rotateX: -60 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.7, delay: 1.15 + i * 0.05, ease }}
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            aria-hidden="true"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.55, ease }}
            className="text-gradient-animated mt-4 font-display text-2xl font-bold sm:text-3xl lg:text-4xl"
          >
            {profile.designation}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.65, ease }}
            className="mt-3 text-base font-semibold text-slate-200 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.75, ease }}
            className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-base lg:mx-0"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.85, ease }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#experience"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-electric via-violet-brand to-electric bg-[length:200%_auto] px-7 py-3.5 font-semibold text-white shadow-xl shadow-electric/30 transition-all duration-500 hover:bg-right hover:shadow-violet-brand/40 sm:w-auto"
            >
              Explore My Experience
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={profile.cvPath}
              download="Suresh-K-CV.pdf"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:border-teal-300/50 hover:bg-white/10 sm:w-auto"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
              Download My CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-[#0a66c2]/60 hover:bg-[#0a66c2] hover:text-white"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.email}`}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-violet-400/60 hover:bg-violet-brand hover:text-white"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
            <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-teal-300" aria-hidden="true" />
              {profile.location}
            </span>
          </motion.div>
        </div>

        {/* Photo – round, medium size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 1.1, ease }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative h-60 w-60 sm:h-72 sm:w-72 lg:h-[21rem] lg:w-[21rem]">
            {/* Soft glow */}
            <div aria-hidden="true" className="absolute -inset-6 rounded-full bg-gradient-to-tr from-electric/40 via-violet-brand/30 to-teal-brand/40 blur-3xl" />
            {/* Rotating gradient ring */}
            <div
              aria-hidden="true"
              className="animate-spin-slow absolute -inset-[6px] rounded-full bg-[conic-gradient(from_0deg,#3b7bff,#8b5cf6,#14c8b4,#3b7bff)]"
            />
            <div aria-hidden="true" className="absolute -inset-[2px] rounded-full bg-navy-950" />
            {/* Dashed orbit */}
            <div aria-hidden="true" className="absolute -inset-5 rounded-full border border-dashed border-white/10" />
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src={profile.photo}
                alt="Portrait of Suresh K"
                fill
                priority
                sizes="(min-width: 1024px) 336px, (min-width: 640px) 288px, 240px"
                className="object-cover object-[50%_30%]"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.9, duration: 0.6, ease }}
              className="absolute -left-24 bottom-2 hidden sm:block lg:-left-20"
            >
              <div className="glass animate-float flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-violet-brand text-white">
                <Award className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <span className="text-left leading-tight">
                <span className="block font-display text-lg font-bold text-white">{profile.yearsOfExperience}</span>
                <span className="block text-[11px] text-slate-400">Years Experience</span>
              </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.05, duration: 0.6, ease }}
              className="absolute -right-24 top-2 hidden sm:block lg:-right-20"
            >
              <div className="glass animate-float flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 [animation-delay:-3s]">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-brand to-emerald-500 text-white">
                <BadgeCheck className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <span className="text-left leading-tight">
                <span className="block font-display text-lg font-bold text-white">100%</span>
                <span className="block text-[11px] text-slate-400">Compliance</span>
              </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-500 transition hover:text-white md:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </motion.span>
      </a>
    </section>
  );
}
