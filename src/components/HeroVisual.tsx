import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../i18n/LanguageContext";
import { EASE } from "../lib/motion";

const BARS = [40, 55, 64, 82, 100, 124]; // ascending heights → the growth story
const BASE_Y = 150;
const CHART_W = 300;
const STEP = CHART_W / BARS.length;

/**
 * Abstract, conceptual "growth panel" for the hero. Lightweight animated SVG
 * (bars + trend line) plus floating accent chips — premium, on-brand (data),
 * and cheap to render.
 */
export function HeroVisual() {
  const { t } = useI18n();
  const reduce = useReducedMotion();

  const points = BARS.map((h, i) => `${i * STEP + STEP / 2},${BASE_Y - h}`).join(" ");

  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0">
      {/* Soft glow behind the panel */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[44px] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(91,91,214,0.18),transparent_70%)] blur-2xl"
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24, rotateX: 6 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        className="surface-card relative overflow-hidden rounded-panel p-6"
      >
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[0.78rem] font-medium text-ink-soft">
            {t.hero.panelLabel}
          </span>
          <span className="flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-wider text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            live
          </span>
        </div>

        <svg
          viewBox="0 0 300 160"
          className="w-full"
          role="img"
          aria-label={t.hero.panelMetricLabel}
        >
          <defs>
            <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5b5bd6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#5b5bd6" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* faint gridlines */}
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1="0"
              x2="300"
              y1={30 + i * 40}
              y2={30 + i * 40}
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="1"
            />
          ))}

          {BARS.map((h, i) => (
            <motion.rect
              key={i}
              x={i * STEP + STEP / 2 - 11}
              width={22}
              rx={6}
              initial={reduce ? false : { height: 0, y: BASE_Y }}
              animate={{ height: h, y: BASE_Y - h }}
              transition={{
                duration: 0.7,
                delay: 0.5 + i * 0.08,
                ease: EASE,
              }}
              fill="url(#barGrad)"
            />
          ))}

          <motion.polyline
            points={points}
            fill="none"
            stroke="#1d1d1f"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          />
        </svg>

        <div className="mt-5 flex items-end justify-between border-t border-hairline pt-4">
          <div>
            <div className="text-[1.7rem] font-semibold leading-none tracking-tight text-ink">
              R$ 800k
            </div>
            <div className="mt-1 text-[0.75rem] text-muted">
              {t.hero.panelMetricLabel}
            </div>
          </div>
          <div className="rounded-pill bg-accent-soft px-3 py-1 text-[0.8rem] font-semibold text-accent-ink">
            {t.hero.panelBadge}
          </div>
        </div>
      </motion.div>

      {/* Floating accent chips */}
      <FloatingChip
        className="-right-3 -top-3"
        delay={1.3}
        reduce={!!reduce}
        label="LLMs · RAG"
      />
      <FloatingChip
        className="-bottom-4 -left-3"
        delay={1.5}
        reduce={!!reduce}
        label="Python · Power BI"
      />
    </div>
  );
}

function FloatingChip({
  className,
  label,
  delay,
  reduce,
}: {
  className: string;
  label: string;
  delay: number;
  reduce: boolean;
}) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.85 }}
      animate={
        reduce
          ? { opacity: 1 }
          : { opacity: 1, scale: 1, y: [0, -6, 0] }
      }
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`absolute ${className} rounded-pill border border-hairline bg-surface/90 px-3.5 py-2 text-[0.78rem] font-semibold text-ink shadow-lift backdrop-blur-md`}
    >
      {label}
    </motion.div>
  );
}
