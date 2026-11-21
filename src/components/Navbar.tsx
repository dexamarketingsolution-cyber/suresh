"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  // Glass background once the visitor scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently on screen
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock page scroll while the mobile menu is open; close with Escape
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/10 bg-navy-950/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Suresh K – back to top">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric via-violet-brand to-teal-brand font-display text-sm font-extrabold text-white shadow-lg shadow-electric/30 transition-transform duration-300 group-hover:rotate-6">
            SK
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-base font-bold text-white">{profile.name}</span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-slate-400">Administration</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.07]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.cvPath}
            download="Suresh-K-CV.pdf"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-electric/25 transition hover:shadow-violet-brand/40 hover:brightness-110 sm:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Scroll progress bar */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-electric via-violet-brand to-teal-brand"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-navy-950/95 backdrop-blur-xl sm:top-20 sm:h-[calc(100dvh-5rem)] lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-4 font-display text-lg font-semibold transition-colors ${
                      active === link.id ? "bg-white/[0.07] text-white" : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    <span className="text-xs text-slate-500">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="px-5 pb-10">
              <a
                href={profile.cvPath}
                download="Suresh-K-CV.pdf"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-electric to-violet-brand px-5 py-4 font-semibold text-white"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
