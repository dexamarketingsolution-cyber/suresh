"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  rangeStart?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

/** Counts up from 0 when it scrolls into view. Supports ranges like "₹45–50". */
export default function Counter({ to, rangeStart, prefix = "", suffix = "", duration = 2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, reduce, to, duration]);

  const end = Math.round(value);
  const text =
    rangeStart !== undefined
      ? `${prefix}${Math.round((value * rangeStart) / to)}–${end}${suffix}`
      : `${prefix}${end}${suffix}`;

  const finalText =
    rangeStart !== undefined ? `${prefix}${rangeStart}–${to}${suffix}` : `${prefix}${to}${suffix}`;

  return (
    <span ref={ref} aria-label={finalText} className="tabular-nums">
      <span aria-hidden="true">{text}</span>
    </span>
  );
}
