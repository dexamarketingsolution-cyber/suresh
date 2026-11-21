"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/** Short branded loading screen shown on first visit. */
export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setShow(false), 1100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          role="status"
          aria-label="Loading"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="relative flex flex-col items-center">
            <div className="relative h-24 w-24">
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-sky-400 border-r-violet-brand"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: "linear", repeat: Infinity }}
              />
              <motion.span
                className="absolute inset-3 rounded-full border-2 border-transparent border-b-teal-brand border-l-electric"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.4, ease: "linear", repeat: Infinity }}
              />
              <motion.span
                className="absolute inset-0 flex items-center justify-center font-display text-2xl font-extrabold text-white"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                SK
              </motion.span>
            </div>
            <motion.div
              className="mt-6 h-[3px] w-40 overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-electric via-violet-brand to-teal-brand"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
