import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE } from "../lib/motion";
import { useI18n } from "../i18n/LanguageContext";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { Clock } from "./Clock";
import { LanguageSwitch } from "./LanguageSwitch";
import { Barcode } from "./Preloader";

const SECTION_IDS = [
  "inicio",
  "trajetoria",
  "impacto",
  "projetos",
  "skills",
  "certificados",
  "contato",
] as const;

type NavKey = keyof ReturnType<typeof useI18n>["t"]["nav"];

const NAV: { id: (typeof SECTION_IDS)[number]; key: NavKey }[] = [
  { id: "inicio", key: "inicio" },
  { id: "trajetoria", key: "trajetoria" },
  { id: "impacto", key: "impacto" },
  { id: "projetos", key: "projetos" },
  { id: "skills", key: "skills" },
  { id: "certificados", key: "certificados" },
  { id: "contato", key: "contato" },
];

export function Navbar() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const active = useScrollSpy([...SECTION_IDS]);
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Primary"
        className="flex w-full max-w-[var(--container-page)] items-center justify-between gap-3 rounded-pill border border-hairline bg-surface/80 px-3 py-2 shadow-soft backdrop-blur-xl sm:px-4"
      >
        <a
          href="#inicio"
          className="flex shrink-0 items-center gap-2.5 rounded-full px-1.5 py-1"
          aria-label="Davi Yoshio — início"
        >
          <Barcode className="h-3.5" />
          <span className="font-mono text-[0.8rem] font-medium uppercase tracking-[0.06em] text-ink">
            Davi Yoshio
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV.map(({ id, key }) => {
            const isActive = active === id;
            return (
              <li key={id} className="relative">
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative z-10 inline-flex rounded-pill px-3 py-2 font-mono text-[0.7rem] uppercase tracking-[0.06em] transition-colors duration-200 ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {t.nav[key]}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-pill bg-canvas-alt"
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 32 }
                    }
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Clock
            city="São Paulo"
            timeZone="America/Sao_Paulo"
            className="hidden xl:inline-flex"
          />
          <LanguageSwitch />
          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={t.menuLabel}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-surface text-ink lg:hidden"
          >
            <Burger open={open} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="absolute inset-x-4 top-[72px] z-40 rounded-panel border border-hairline bg-surface/95 p-3 shadow-lift backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col">
              {NAV.map(({ id, key }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-[1rem] font-medium transition-colors ${
                      active === id
                        ? "bg-canvas-alt text-ink"
                        : "text-ink-soft hover:bg-canvas-alt"
                    }`}
                  >
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Burger({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3 w-4">
      <span
        className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-all duration-300 ${
          open ? "top-[5px] rotate-45" : "top-0"
        }`}
      />
      <span
        className={`absolute left-0 top-[5px] block h-[1.5px] w-4 bg-current transition-all duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-all duration-300 ${
          open ? "top-[5px] -rotate-45" : "top-[10px]"
        }`}
      />
    </span>
  );
}
