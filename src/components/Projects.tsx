import { projects } from "../data/projects";
import { useI18n } from "../i18n/LanguageContext";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";

export function Projects() {
  const { t } = useI18n();

  return (
    <Section id="projetos" alt>
      <SectionHeading
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        intro={t.projects.intro}
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((meta, i) => (
          <Reveal key={meta.id} delay={(i % 2) * 0.08} y={32} blur={6}>
            <ProjectCard meta={meta} copy={t.projects.items[meta.id]} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
