import { useI18n } from "../i18n/LanguageContext";
import type { Lang } from "../i18n/content";
import { Counter } from "./ui/Counter";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

const LOCALES: Record<Lang, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES",
};

export function ImpactStats() {
  const { t, lang } = useI18n();
  const locale = LOCALES[lang];

  return (
    <Section id="impacto">
      <SectionHeading
        eyebrow={t.impact.eyebrow}
        title={t.impact.title}
        intro={t.impact.intro}
      />

      {/* Metric cards */}
      <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {t.impact.stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.08}
            blur={5}
            className="surface-card flex flex-col gap-3 rounded-panel p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="font-doto text-[clamp(2.4rem,4.6vw,3.4rem)] font-bold leading-none text-ink">
              <Counter
                value={stat.value}
                decimals={stat.decimals}
                prefix={stat.prefix}
                suffix={stat.suffix}
                locale={locale}
              />
            </span>
            <span className="font-mono text-[0.78rem] uppercase leading-snug tracking-[0.04em] text-muted">
              {stat.label}
            </span>
          </Reveal>
        ))}
      </div>

      {/* Evidence cards */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {t.impact.evidence.map((ev, i) => (
          <Reveal
            key={ev.title}
            delay={i * 0.08}
            blur={5}
            className="group relative overflow-hidden rounded-panel border border-hairline bg-gradient-to-b from-accent-soft/50 to-surface p-6"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-white">
              <Spark />
            </div>
            <h3 className="text-[1.1rem] font-semibold text-ink">{ev.title}</h3>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">
              {ev.description}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Spark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
