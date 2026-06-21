import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE } from "../lib/motion";

/**
 * Full-screen intro overlay with a 0 to 100 counter (Doto font) over a purple
 * barcode mark, then fades out to reveal the page. Shows once per tab session
 * and is skipped entirely under prefers-reduced-motion.
 */
export function Preloader() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    if (sessionStorage.getItem("preloaded")) {
      setDone(true);
      return;
    }
    const id = setInterval(() => {
      setCount((v) => {
        if (v >= 100) {
          clearInterval(id);
          return 100;
        }
        return Math.min(v + 2, 100);
      });
    }, 18);
    return () => clearInterval(id);
  }, [reduce]);

  useEffect(() => {
    if (count >= 100) {
      const t = setTimeout(() => setDone(true), 320);
      return () => clearTimeout(t);
    }
  }, [count]);

  useEffect(() => {
    if (done) {
      sessionStorage.setItem("preloaded", "1");
      document.body.style.overflow = "";
    } else if (!reduce) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [done, reduce]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#0a0a0a]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="flex flex-col items-center gap-7">
            <Barcode />
            <span className="font-doto text-[2.6rem] font-bold tabular-nums text-accent">
              ({String(count).padStart(3, "0")})
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Vertical-bar "barcode" mark used as the brand glyph. */
export function Barcode({ className = "h-9" }: { className?: string }) {
  const bars = [3, 1, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 2];
  return (
    <div className={`flex items-stretch gap-[3px] ${className}`}>
      {bars.map((w, i) => (
        <span
          key={i}
          style={{ width: w * 2 }}
          className="block rounded-[1px] bg-accent"
        />
      ))}
    </div>
  );
}
