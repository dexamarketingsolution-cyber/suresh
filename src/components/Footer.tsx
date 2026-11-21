import { ArrowUp, Mail, Phone } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import LinkedInIcon from "@/components/ui/LinkedInIcon";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-navy-950">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-brand/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric via-violet-brand to-teal-brand font-display text-sm font-extrabold text-white">
                SK
              </span>
              <span className="font-display text-lg font-bold text-white">{profile.name}</span>
            </a>
            <p className="mt-2 text-sm text-slate-400">{profile.designation} · {profile.location}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-400">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-[#0a66c2] hover:text-white"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-violet-brand hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.phoneHref}
              aria-label="Call Suresh K"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-teal-brand hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-violet-brand text-white transition hover:-translate-y-1"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-slate-500">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
