import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface ScrollRevealProps {
  text: string;
  className?: string;
}

/**
 * Scroll-driven paragraph reveal: words clarify (opacity + de-blur) as the
 * paragraph scrolls through the viewport. Honours prefers-reduced-motion.
 */
export function ScrollReveal({ text, className }: ScrollRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });

  if (reduce) return <p className={className}>{text}</p>;

  const words = text.split(" ");

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <Word
          key={i}
          word={w}
          progress={scrollYProgress}
          start={i / words.length}
          end={(i + 1) / words.length}
        />
      ))}
    </p>
  );
}

function Word({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.12, 1]);
  const blur = useTransform(progress, [start, end], [6, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.span
      aria-hidden
      style={{ opacity, filter }}
      className="mr-[0.26em] inline-block"
    >
      {word}
    </motion.span>
  );
}
