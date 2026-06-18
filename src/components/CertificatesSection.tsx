import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { EASE } from "../lib/motion";
import {
  certificateGroups,
  type Certificate,
  type CertificateGroup,
} from "../data/certificates";
import { useI18n } from "../i18n/LanguageContext";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

const VISIBLE_GROUPS = 3; // shown before "view all"

export function CertificatesSection() {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);

  const initial = certificateGroups.slice(0, VISIBLE_GROUPS);
  const rest = certificateGroups.slice(VISIBLE_GROUPS);

  return (
    <Section id="certificados" alt>
      <SectionHeading
        eyebrow={t.certificates.eyebrow}
        title={t.certificates.title}
        intro={t.certificates.intro}
      />

      <div className="mt-14 flex flex-col gap-12">
        {initial.map((group) => (
          <CertGroupBlock key={group.category} group={group} />
        ))}

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="rest"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-12">
                {rest.map((group) => (
                  <CertGroupBlock key={group.category} group={group} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {rest.length > 0 && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 rounded-pill border border-hairline-strong bg-surface px-6 py-3 text-[0.9rem] font-semibold text-ink shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-canvas-alt"
          >
            {expanded ? t.certificates.showLess : t.certificates.showMore}
            <span
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            >
              ↓
            </span>
          </button>
        </div>
      )}
    </Section>
  );
}

function CertGroupBlock({ group }: { group: CertificateGroup }) {
  const { t } = useI18n();

  return (
    <div>
      <Reveal className="mb-5 flex items-baseline gap-3">
        <h3 className="text-[1.15rem] font-semibold text-ink">
          {t.certificates.categories[group.category]}
        </h3>
        <span className="text-[0.8rem] font-medium tabular-nums text-faint">
          {String(group.items.length).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 bg-hairline" aria-hidden />
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {group.items.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.06}>
            <CertCard cert={item} viewLabel={t.certificates.viewLabel} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function CertCard({ cert, viewLabel }: { cert: Certificate; viewLabel: string }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-panel border border-hairline bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="flex aspect-[4/3] items-center justify-center border-b border-hairline bg-canvas-alt p-4">
        <img
          src={cert.image}
          alt={`Certificado: ${cert.title}, ${cert.issuer}`}
          loading="lazy"
          decoding="async"
          className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-accent">
          {cert.issuer}
        </span>
        <h4 className="text-[1rem] font-semibold leading-snug text-ink">
          {cert.title}
        </h4>
        <ul className="flex flex-wrap gap-1.5">
          {cert.skills.map((s) => (
            <li
              key={s}
              className="rounded-pill border border-hairline bg-canvas-alt/60 px-2.5 py-1 text-[0.72rem] text-muted"
            >
              {s}
            </li>
          ))}
        </ul>
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-auto inline-flex items-center gap-1.5 pt-2 text-[0.82rem] font-semibold text-ink transition-colors hover:text-accent"
        >
          {viewLabel}
          <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </article>
  );
}
