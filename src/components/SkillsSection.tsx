import { skillGroups } from "../data/skills";
import { useI18n } from "../i18n/LanguageContext";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Tag } from "./ui/Tag";

export function SkillsSection() {
  const { t } = useI18n();

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        intro={t.skills.intro}
      />

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.group}
            delay={(i % 3) * 0.06}
            blur={5}
            className="surface-card flex flex-col gap-4 rounded-panel p-6"
          >
            <div className="flex items-center gap-3">
              <span className="font-doto text-[1rem] font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1.05rem] font-semibold text-ink">
                {t.skills.groups[group.group]}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill}>
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
