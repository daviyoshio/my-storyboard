import { asset } from "../lib/asset";

/**
 * Institutions across the journey, in chronological order. Shown on the
 * scroll-driven 3D coin between the story and impact sections. `role` is a short
 * mono/uppercase tech label (language-neutral); names are proper nouns.
 */
export interface JourneyLogo {
  name: string;
  role: string;
  src: string;
}

export const journeyLogos: JourneyLogo[] = [
  {
    name: "Yamá Cosméticos",
    role: "E-commerce & Growth",
    src: asset("assets/logos/yama.webp"),
  },
  {
    name: "Ibmec SP",
    role: "Data Science & AI",
    src: asset("assets/logos/ibmec.webp"),
  },
  {
    name: "PagBank",
    role: "Data & AI",
    src: asset("assets/logos/pagbank.png"),
  },
];
