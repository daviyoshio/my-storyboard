import { motion, useReducedMotion, type TargetAndTransition } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "../../lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
  /** Optional blur (px) that clears as it enters — adds a soft, premium settle. */
  blur?: number;
  /** Fraction of the element visible before triggering. */
  amount?: number;
  as?: "div" | "li" | "article" | "section" | "span";
}

/**
 * Fade + subtle slide-up (and optional de-blur) on scroll into view. Animates
 * once. Honours prefers-reduced-motion (simple fade, no transform/blur).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  blur = 0,
  amount = 0.25,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const hidden: TargetAndTransition = reduce
    ? { opacity: 0 }
    : { opacity: 0, y, ...(blur ? { filter: `blur(${blur}px)` } : {}) };

  const shown: TargetAndTransition = reduce
    ? { opacity: 1 }
    : { opacity: 1, y: 0, ...(blur ? { filter: "blur(0px)" } : {}) };

  return (
    <MotionTag
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}
