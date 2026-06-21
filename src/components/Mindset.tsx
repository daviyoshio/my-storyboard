import { useI18n } from "../i18n/LanguageContext";
import { Reveal } from "./ui/Reveal";
import { RevealText } from "./ui/RevealText";
import { ScrollReveal } from "./ui/ScrollReveal";
import { Section } from "./ui/Section";

export function Mindset() {
  const { t } = useI18n();

  return (
    <Section id="diferencial">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <Reveal y={0} className="flex flex-col gap-6">
          <span className="eyebrow">
            <span className="h-px w-6 bg-accent/70" aria-hidden />
            {t.mindset.eyebrow}
          </span>
          <h2 className="text-balance text-[clamp(2rem,4.2vw,3.2rem)] font-semibold leading-[1.1] text-ink">
            <RevealText text={t.mindset.title} />
          </h2>
          <ScrollReveal
            text={t.mindset.body}
            className="text-pretty font-serif text-[clamp(1.25rem,2.2vw,1.7rem)] leading-snug text-ink"
          />
        </Reveal>

        <div className="flex flex-col gap-4">
          {t.mindset.pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 0.1}
              className="surface-card flex gap-5 rounded-panel p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink font-doto text-[1.05rem] font-bold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[1.15rem] font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
