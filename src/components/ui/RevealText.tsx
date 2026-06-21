import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { EASE } from "../../lib/motion";

interface RevealTextProps {
  text: string;
  className?: string;
  /** Delay before the first word starts (seconds). */
  delay?: number;
}

const word: Variants = {
  hidden: { opacity: 0, y: 8, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE },
  },
};

const container = (delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: delay } },
});

/**
 * Word-by-word reveal on scroll: each word fades + de-blurs + rises into place
 * with a stagger. The signature "Framer portfolio" headline animation.
 * Honours prefers-reduced-motion (renders the text statically). Accessible: the
 * full string is exposed via aria-label.
 */
export function RevealText({ text, className, delay = 0 }: RevealTextProps) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{text}</span>;

  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      style={{ display: "inline" }}
      variants={container(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          <motion.span variants={word} aria-hidden className="inline-block">
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </motion.span>
  );
}
