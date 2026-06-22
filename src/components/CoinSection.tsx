import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { journeyLogos } from "../data/journeyLogos";
import { useI18n } from "../i18n/LanguageContext";
import { EASE } from "../lib/motion";

const N = journeyLogos.length;

/**
 * Scroll-driven 3D coin between the story and impact sections. As you scroll,
 * the coin spins on its Y axis and flips through each institution's logo
 * (Yamá → Ibmec → PagBank), while the background transitions through purple.
 * Inspired by the reference's rotating "coin" section.
 */
export function CoinSection() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // One full turn across the section → cycles through the 3 logos.
  const deg = useTransform(scrollYProgress, [0, 1], [0, 360]);
  // Counter-rotate the logo on the coin's back half so it stays upright.
  const logoFlip = useTransform(deg, (d) =>
    Math.floor((d + 90) / 180) % 2 === 0 ? 0 : 180,
  );
  const bg = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#f7f6fb", "#221046", "#ffffff"],
  );
  const fg = useTransform(
    scrollYProgress,
    [0, 0.32, 0.68, 1],
    ["#0a0a0a", "#ffffff", "#ffffff", "#0a0a0a"],
  );

  const [index, setIndex] = useState(0);
  useMotionValueEvent(deg, "change", (d) => {
    const seg = Math.floor((d + 90) / 180);
    setIndex(((seg % N) + N) % N);
  });

  // Reduced motion: a calm static row of logos, no rotation or pinning.
  if (reduce) {
    return (
      <section id="moeda" className="bg-canvas-alt px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-[var(--container-page)] text-center">
          <span className="eyebrow justify-center">{t.coin.eyebrow}</span>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {journeyLogos.map((logo) => (
              <div key={logo.name} className="flex flex-col items-center gap-3">
                <div className="grid h-28 w-28 place-items-center rounded-full border border-hairline bg-white shadow-soft">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-[58%] max-w-[68%] object-contain"
                  />
                </div>
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.06em] text-ink">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const current = journeyLogos[index];

  return (
    <section id="moeda" ref={ref} className="relative h-[240vh]">
      <motion.div
        style={{ backgroundColor: bg, color: fg }}
        className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6"
      >
        <motion.span
          style={{ color: fg }}
          className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] opacity-70"
        >
          {t.coin.eyebrow}
        </motion.span>

        {/* Coin */}
        <div
          className="relative mt-10"
          style={{ perspective: 1100 }}
          aria-hidden
        >
          <motion.div
            style={{ rotateY: deg, transformStyle: "preserve-3d" }}
            className="relative grid h-[clamp(190px,38vw,300px)] w-[clamp(190px,38vw,300px)] place-items-center rounded-full border border-black/5 shadow-float [background:radial-gradient(circle_at_38%_32%,#ffffff,#ece9f6_70%,#d8d2ea)]"
          >
            {/* inner ring */}
            <span className="pointer-events-none absolute inset-[7%] rounded-full border border-black/[0.06]" />
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.name}
              style={{ rotateY: logoFlip }}
              className="max-h-[42%] max-w-[62%] object-contain"
            />
          </motion.div>
        </div>

        {/* Changing caption */}
        <div className="mt-10 flex h-20 flex-col items-center justify-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex flex-col items-center gap-1.5"
            >
              <h3 className="text-[clamp(1.6rem,3.4vw,2.4rem)] leading-none">
                {current.name}
              </h3>
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] opacity-70">
                {current.role}
              </span>
            </motion.div>
          </AnimatePresence>

          <span className="mt-5 font-doto text-[0.95rem] font-bold opacity-60">
            ({String(index + 1).padStart(2, "0")} / {String(N).padStart(2, "0")})
          </span>
        </div>
      </motion.div>
    </section>
  );
}
