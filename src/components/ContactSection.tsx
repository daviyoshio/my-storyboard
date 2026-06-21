import { profile } from "../data/profile";
import { useI18n } from "../i18n/LanguageContext";
import { Reveal } from "./ui/Reveal";
import { RevealText } from "./ui/RevealText";

/** Full-bleed closing on a mirrored purple gradient: contact + footer in one. */
export function ContactSection() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const channels = [
    { label: t.contact.phoneLabel, value: profile.phone, href: profile.phoneHref },
    { label: t.contact.emailLabel, value: profile.email, href: `mailto:${profile.email}` },
    {
      label: t.contact.linkedinLabel,
      value: profile.linkedinHandle,
      href: profile.linkedin,
      external: true,
    },
    {
      label: t.contact.githubLabel,
      value: profile.githubHandle,
      href: profile.github,
      external: true,
    },
  ];

  return (
    <section
      id="contato"
      className="footer-gradient scroll-mt-24 px-6 pb-12 pt-40 sm:px-8 sm:pt-48"
    >
      <div className="mx-auto w-full max-w-[var(--container-page)]">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-white/75">
            <span className="h-px w-6 bg-white/50" aria-hidden />
            {t.contact.eyebrow}
          </span>

          <h2 className="mt-6 text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.04] text-white">
            <RevealText text={t.contact.title} />
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-[1.08rem] leading-relaxed text-white/80">
            {t.contact.body}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-pill bg-white px-6 py-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.06em] text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t.contact.ctaEmail}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-pill border border-white/40 bg-white/10 px-6 py-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.06em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
            >
              {t.contact.ctaCV}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {channels.map((c) => (
            <Reveal
              key={c.label}
              as="div"
              y={16}
              className="rounded-panel border border-white/20 bg-white/10 px-5 py-4 text-left backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
            >
              <a
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex flex-col gap-1"
              >
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-white/60">
                  {c.label}
                </span>
                <span className="break-words font-mono text-[0.95rem] text-white">
                  {c.value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Footer row */}
        <div className="mx-auto mt-20 flex max-w-[var(--container-page)] flex-col gap-4 border-t border-white/20 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md font-mono text-[0.74rem] uppercase tracking-[0.06em] text-white/70">
            {t.footer.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.06em] text-white/80">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              GitHub
            </a>
            <a href="#inicio" className="transition-colors hover:text-white">
              {t.contact.backToTop}
            </a>
            <span className="text-white/55">© {year} {profile.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
