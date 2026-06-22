import { Fragment, useEffect, useState, type ReactNode } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

/**
 * Ambient, always-on "data lab" background for the hero: floating spheres in
 * zero-g, rotating 3D data cubes, animated function plots (quadratic /
 * exponential / linear regression), a live DataFrame and a mini dashboard, plus
 * floating data chips. Purely decorative, behind the content, disabled under
 * prefers-reduced-motion.
 */
export function HeroBackground() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Soft glow orbs */}
      <Glow className="left-[4%] top-[12%] h-56 w-56 bg-[radial-gradient(circle,rgba(167,124,238,0.4),transparent_70%)]" dx={28} dy={36} dur={15} />
      <Glow className="bottom-[8%] right-[6%] h-64 w-64 bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)]" dx={-30} dy={-26} dur={18} delay={1.2} />

      {/* Visible zero-g spheres */}
      <Sphere className="left-[12%] top-[22%] h-20 w-20" dx={40} dy={54} dur={12} />
      <Sphere className="right-[14%] top-[58%] h-28 w-28" dx={-46} dy={-38} dur={15} delay={1} />
      <Sphere className="bottom-[20%] left-[34%] h-14 w-14 sm:h-16 sm:w-16" dx={34} dy={-44} dur={10} delay={0.5} />

      {/* Rotating 3D data cubes */}
      <Cube className="right-[20%] top-[14%] hidden sm:block" size={56} rotateDur={18} floatDur={7} />
      <Cube className="bottom-[24%] left-[13%] hidden sm:block" size={42} rotateDur={22} floatDur={9} delay={1.2} />

      {/* Animated function plots */}
      <Plot
        className="left-[3%] top-[12%] hidden lg:block"
        label="f(x) = ax²"
        make={quad}
        p0={0.42}
        p1={1.0}
        floatDur={8}
      />
      <Plot
        className="bottom-[12%] right-[4%] hidden lg:block"
        label="f(x) = eˣ"
        make={expo}
        p0={1.4}
        p1={3.6}
        floatDur={9}
        delay={0.8}
      />
      <Plot
        className="left-[2%] top-[56%] hidden lg:block"
        label="ŷ = ax + b"
        make={lin}
        p0={0.32}
        p1={0.72}
        floatDur={7.5}
        delay={1.4}
        scatter={LINEAR_SCATTER}
      />

      {/* Live DataFrame + dashboard */}
      <DataFrameCard className="right-[3%] top-[24%] hidden lg:block" />
      <Dashboard className="bottom-[14%] left-[6%] hidden lg:block" />

      {/* Floating data chips (bigger) */}
      <Chip className="left-[16%] top-[16%] hidden text-white/55 md:block" dur={8}>
        1.2M rows
      </Chip>
      <Chip className="right-[12%] top-[34%] hidden text-white/55 md:block" dur={9} delay={1}>
        p95 · 142ms
      </Chip>
      <Chip className="bottom-[28%] right-[26%] hidden text-white/55 md:block" dur={7.5} delay={0.6}>
        F1 0.91
      </Chip>
      <RevenueChip className="left-[7%] top-[40%] text-white/65" dur={8.5} delay={0.3} />
      <MetricChip className="right-[9%] top-[68%] hidden text-white/65 sm:block" dur={9.5} delay={1.1} />
    </div>
  );
}

/* ----------------------------------------------------------------- */
/* Floating wrapper                                                   */
/* ----------------------------------------------------------------- */
function Float({
  className,
  dur,
  delay = 0,
  children,
}: {
  className: string;
  dur: number;
  delay?: number;
  children: ReactNode;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------------- */
/* Orbs & spheres                                                     */
/* ----------------------------------------------------------------- */
function Glow({ className, dx, dy, dur, delay = 0 }: OrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-2xl ${className}`}
      animate={{ x: [0, dx, 0], y: [0, dy, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function Sphere({ className, dx, dy, dur, delay = 0 }: OrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{
        background:
          "radial-gradient(circle at 32% 26%, rgba(255,255,255,0.95), rgba(190,160,245,0.6) 42%, rgba(118,74,200,0.35) 100%)",
        boxShadow:
          "inset -6px -8px 16px rgba(70,40,120,0.45), 0 18px 40px rgba(40,20,80,0.35)",
      }}
      animate={{ x: [0, dx, 0], y: [0, dy, 0] }}
      transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

interface OrbProps {
  className: string;
  dx: number;
  dy: number;
  dur: number;
  delay?: number;
}

/* ----------------------------------------------------------------- */
/* 3D cube                                                            */
/* ----------------------------------------------------------------- */
function Cube({
  className,
  size,
  rotateDur,
  floatDur,
  delay = 0,
}: {
  className: string;
  size: number;
  rotateDur: number;
  floatDur: number;
  delay?: number;
}) {
  const half = size / 2;
  const transforms = [
    `translateZ(${half}px)`,
    `rotateY(180deg) translateZ(${half}px)`,
    `rotateY(90deg) translateZ(${half}px)`,
    `rotateY(-90deg) translateZ(${half}px)`,
    `rotateX(90deg) translateZ(${half}px)`,
    `rotateX(-90deg) translateZ(${half}px)`,
  ];
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ perspective: 600 }}
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: floatDur, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <motion.div
        className="relative"
        style={{ width: size, height: size, transformStyle: "preserve-3d" }}
        animate={{ rotateX: 360, rotateY: 360 }}
        transition={{ duration: rotateDur, repeat: Infinity, ease: "linear" }}
      >
        {transforms.map((t, i) => (
          <span
            key={i}
            className="absolute border border-white/25 bg-white/[0.06]"
            style={{ width: size, height: size, transform: t }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ----------------------------------------------------------------- */
/* Function plots                                                     */
/* ----------------------------------------------------------------- */
const NX = (x: number) => 8 + x * 84;
const NY = (v: number) => 58 - Math.max(0, Math.min(1.08, v)) * 48;

function curve(fn: (x: number) => number, n = 22) {
  let d = "";
  for (let i = 0; i < n; i++) {
    const x = i / (n - 1);
    d += (i ? " L " : "M ") + NX(x).toFixed(1) + "," + NY(fn(x)).toFixed(1);
  }
  return d;
}
const quad = (a: number) => curve((x) => a * (2 * x - 1) ** 2);
const expo = (k: number) => curve((x) => (Math.exp(k * x) - 1) / (Math.exp(k) - 1));
const lin = (a: number) => curve((x) => a * x + 0.16);

const LINEAR_SCATTER = [0.12, 0.28, 0.44, 0.6, 0.76, 0.9].map((x, i) => ({
  cx: NX(x),
  cy: NY(0.5 * x + 0.16 + (i % 2 ? 0.08 : -0.07)),
}));

function Plot({
  className,
  label,
  make,
  p0,
  p1,
  floatDur,
  delay = 0,
  scatter,
}: {
  className: string;
  label: string;
  make: (p: number) => string;
  p0: number;
  p1: number;
  floatDur: number;
  delay?: number;
  scatter?: { cx: number; cy: number }[];
}) {
  const t = useMotionValue(0);
  useEffect(() => {
    const controls = animate(t, 1, {
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [t]);
  const d = useTransform(t, (v) => make(p0 + (p1 - p0) * v));

  return (
    <Float className={className} dur={floatDur} delay={delay}>
      <div className="w-[150px] rounded-xl border border-white/15 bg-white/[0.06] p-2.5 shadow-[0_10px_34px_rgba(12,6,28,0.3)] backdrop-blur-sm">
        <svg viewBox="0 0 100 64" className="w-full">
          <line x1="8" y1="58" x2="94" y2="58" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <line x1="8" y1="5" x2="8" y2="58" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          {scatter?.map((p, i) => (
            <circle key={i} cx={p.cx} cy={p.cy} r="1.7" fill="rgba(255,255,255,0.55)" />
          ))}
          <motion.path
            d={d}
            fill="none"
            stroke="rgba(190,160,250,0.95)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="mt-1.5 font-mono text-[0.62rem] uppercase tracking-[0.06em] text-white/55">
          {label}
        </div>
      </div>
    </Float>
  );
}

/* ----------------------------------------------------------------- */
/* DataFrame                                                          */
/* ----------------------------------------------------------------- */
function makeRows() {
  const seg = ["A", "B", "C"];
  return Array.from({ length: 4 }, () => ({
    rev: "R$ " + (0.7 + Math.random() * 0.9).toFixed(2) + "M",
    seg: seg[Math.floor(Math.random() * 3)],
  }));
}

function DataFrameCard({ className }: { className: string }) {
  const [rows, setRows] = useState(makeRows);
  useEffect(() => {
    const id = setInterval(() => setRows(makeRows()), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <Float className={className} dur={9}>
      <div className="rounded-xl border border-white/15 bg-white/[0.06] p-3 font-mono text-[0.64rem] text-white/75 shadow-[0_10px_34px_rgba(12,6,28,0.3)] backdrop-blur-sm">
        <div className="mb-1.5 text-white/45">df.head()</div>
        <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 gap-y-1">
          <span className="text-white/40">idx</span>
          <span className="text-white/40">revenue</span>
          <span className="text-white/40">seg</span>
          {rows.map((r, i) => (
            <Fragment key={i}>
              <span className="text-white/40">{i}</span>
              <span>{r.rev}</span>
              <span>{r.seg}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </Float>
  );
}

/* ----------------------------------------------------------------- */
/* Mini dashboard                                                     */
/* ----------------------------------------------------------------- */
const BARS = [0.45, 0.7, 0.5, 0.92, 0.62, 0.8];

function Dashboard({ className }: { className: string }) {
  const [kpi, setKpi] = useState(fmtKpi);
  useEffect(() => {
    const id = setInterval(() => setKpi(fmtKpi()), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <Float className={className} dur={8} delay={0.5}>
      <div className="w-[152px] rounded-xl border border-white/15 bg-white/[0.06] p-3 shadow-[0_10px_34px_rgba(12,6,28,0.3)] backdrop-blur-sm">
        <div className="font-mono text-[0.55rem] uppercase tracking-[0.08em] text-white/45">
          revenue · mtd
        </div>
        <div className="font-doto text-[1.1rem] font-bold text-white">{kpi}</div>
        <div className="mt-2 flex h-9 items-end gap-1">
          {BARS.map((h, i) => (
            <motion.span
              key={i}
              className="flex-1 origin-bottom rounded-sm bg-[rgba(190,160,250,0.55)]"
              style={{ height: `${h * 100}%` }}
              animate={{ scaleY: [1, 1.35, 0.85, 1] }}
              transition={{
                duration: 2.4 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </Float>
  );
}
const fmtKpi = () => "R$ " + (0.9 + Math.random() * 0.7).toFixed(2) + "M";

/* ----------------------------------------------------------------- */
/* Chips                                                              */
/* ----------------------------------------------------------------- */
function Chip({
  className,
  children,
  dur,
  delay = 0,
}: {
  className: string;
  children: ReactNode;
  dur: number;
  delay?: number;
}) {
  return (
    <motion.span
      className={`absolute whitespace-nowrap font-mono text-[0.8rem] uppercase tracking-[0.06em] ${className}`}
      animate={{ y: [0, -12, 0], opacity: [0.35, 0.7, 0.35] }}
      transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.span>
  );
}

function RevenueChip(props: { className: string; dur: number; delay?: number }) {
  const [value, setValue] = useState(formatRevenue);
  useEffect(() => {
    const id = setInterval(() => setValue(formatRevenue()), 1300);
    return () => clearInterval(id);
  }, []);
  return <Chip {...props}>Σ {value}/mês</Chip>;
}

function MetricChip(props: { className: string; dur: number; delay?: number }) {
  const [value, setValue] = useState(() => (0.9 + Math.random() * 0.099).toFixed(3));
  useEffect(() => {
    const id = setInterval(
      () => setValue((0.9 + Math.random() * 0.099).toFixed(3)),
      1500,
    );
    return () => clearInterval(id);
  }, []);
  return <Chip {...props}>accuracy · {value}</Chip>;
}

function formatRevenue() {
  const n = 820000 + Math.floor(Math.random() * 680000);
  return "R$ " + new Intl.NumberFormat("pt-BR").format(n);
}
