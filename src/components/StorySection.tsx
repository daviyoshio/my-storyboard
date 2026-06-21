import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { chapters, type ChapterMeta } from "../data/chapters";
import { useI18n } from "../i18n/LanguageContext";
import type { ChapterCopy } from "../i18n/content";
import { Reveal } from "./ui/Reveal";
import { RevealText } from "./ui/RevealText";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Tag } from "./ui/Tag";

export function StorySection() {
  const { t } = useI18n();
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <Section id="trajetoria" alt>
      <SectionHeading
        eyebrow={t.story.eyebrow}
        title={t.story.title}
        intro={t.story.intro}
      />

      <div ref={railRef} className="relative mt-16 lg:mt-24 lg:pl-16">
        {/* Scroll-linked progress rail (desktop) */}
        <div
          aria-hidden
          className="absolute bottom-3 left-3 top-3 hidden w-px bg-hairline lg:block"
        >
          <motion.div
            style={{ scaleY }}
            className="h-full w-full origin-top bg-accent"
          />
        </div>

        <div className="flex flex-col gap-20 lg:gap-28">
          {chapters.map((meta, i) => (
            <ChapterBlock
              key={meta.id}
              meta={meta}
              copy={t.story.chapters[meta.id]}
              index={String(i + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

function ChapterBlock({
  meta,
  copy,
  index,
}: {
  meta: ChapterMeta;
  copy: ChapterCopy;
  index: string;
}) {
  const mediaLeft = meta.side === "left";

  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <Reveal
        y={36}
        className={`relative ${mediaLeft ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="group relative overflow-hidden rounded-panel border border-hairline shadow-soft">
          <img
            src={meta.image}
            alt={meta.alt}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </div>
      </Reveal>

      <Reveal
        y={0}
        delay={0.05}
        className={`relative ${mediaLeft ? "lg:order-2" : "lg:order-1"}`}
      >
        {/* Big ghost number watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 right-0 select-none font-doto text-[6rem] font-bold leading-none text-accent/10 lg:text-[7.5rem]"
        >
          {index}
        </span>

        <span className="eyebrow relative">
          <span className="h-px w-6 bg-accent/70" aria-hidden />
          {copy.kicker}
        </span>

        <h3 className="relative mt-4 text-balance text-[clamp(1.6rem,2.8vw,2.3rem)] font-semibold leading-[1.12] text-ink">
          <RevealText text={copy.title} />
        </h3>

        <div className="relative mt-4 flex flex-col gap-3">
          {copy.body.map((paragraph, idx) => (
            <p key={idx} className="text-pretty leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="relative mt-6 flex flex-wrap gap-2">
          {copy.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
