import { motion } from "framer-motion";
import { useI18n } from "../i18n/LanguageContext";
import { asset } from "../lib/asset";
import { EASE } from "../lib/motion";
import { RevealText } from "./ui/RevealText";

export function Hero() {
  const { t } = useI18n();
  const leadWords = t.hero.headlineLead.split(" ").length;

  return (
    <section
      id="inicio"
      className="hero-gradient relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 text-center"
    >
      {/* faint grid texture over the gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(70%_50%_at_50%_25%,black,transparent_75%)]"
      />

      <div className="relative flex w-full max-w-4xl flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-white/70"
        >
          <span className="h-px w-6 bg-white/50" aria-hidden />
          {t.hero.eyebrow}
        </motion.span>

        <h1 className="mt-7 text-[clamp(2.7rem,7vw,5.2rem)] leading-[1.04] text-white">
          <RevealText text={t.hero.headlineLead} />{" "}
          <RevealText
            text={t.hero.headlineAccent}
            className="italic text-white/95"
            delay={leadWords * 0.04}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          className="mt-7 max-w-2xl text-pretty text-[1.05rem] leading-relaxed text-white/80"
        >
          {t.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62, ease: EASE }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#trajetoria"
            className="group inline-flex items-center gap-2 rounded-pill bg-white px-5 py-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.06em] text-ink transition-transform duration-300 hover:-translate-y-0.5"
          >
            {t.hero.ctaJourney}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              ↘
            </span>
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-pill border border-white/35 bg-white/10 px-5 py-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.06em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-pill border border-white/35 bg-white/10 px-5 py-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.06em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
          >
            {t.hero.ctaContact}
          </a>
        </motion.div>

        <ProfileCard
          name="Davi Yoshio"
          role={t.hero.eyebrow}
          availability={t.hero.availability}
        />
      </div>
    </section>
  );
}

function ProfileCard({
  name,
  role,
  availability,
}: {
  name: string;
  role: string;
  availability: string;
}) {
  return (
    <motion.div
      style={{ transformPerspective: 1000 }}
      initial={{ opacity: 0, rotateX: 18, rotateY: -12, y: 18 }}
      animate={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0 }}
      transition={{ duration: 0.85, delay: 0.75, ease: EASE }}
      className="mt-12 flex items-center gap-4 rounded-2xl border border-white/60 bg-white/80 p-3 pr-6 shadow-float backdrop-blur-md"
    >
      <img
        src={asset("assets/img/capitulo-academico.jpg")}
        alt={name}
        loading="lazy"
        className="h-14 w-14 rounded-xl object-cover object-top"
      />
      <div className="text-left">
        <span className="inline-flex items-center gap-1.5 rounded-pill border border-dashed border-accent/60 px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-accent-ink">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          {availability}
        </span>
        <div className="mt-1.5 font-mono text-[0.92rem] font-medium uppercase tracking-[0.04em] text-ink">
          {name}
        </div>
        <div className="font-mono text-[0.72rem] text-muted">{role}</div>
      </div>
    </motion.div>
  );
}
