import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Finn-Ole Höner",
  EMAIL: "honer@ese.eur.nl",
  CV: "/finn-ole-honer-cv.pdf",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "PhD Candidate in Generative AI",
  DESCRIPTION: "Finn-Ole Höner develops generative AI methods for market research and innovation management.",
};

export const BLOG: Metadata = {
  TITLE: "Research",
  DESCRIPTION: "Working papers on generative AI, synthetic respondents, and market research.",
};

export const WORK: Metadata = {
  TITLE: "Experience",
  DESCRIPTION: "Research, data-science, and teaching experience.",
};

export const PROJECTS: Metadata = {
  TITLE: "Conference presentations",
  DESCRIPTION: "Selected conference presentations.",
};

export const SOCIALS: Socials = [{
  NAME: "LinkedIn",
  HREF: "https://www.linkedin.com/in/finn-hoener",
}];

export const TALKS = [
  {
    TITLE: "Using LLMs to Measure Sensitive Topics: Synthetic Respondents, Real Challenges",
    DESCRIPTION: "Special Session · Marketing Science Conference · Washington, D.C., USA · 2025.",
  },
  {
    TITLE: "Generative Embeddings for Marketing Text Refinement and Validation",
    DESCRIPTION: "Contributed Session and Doctoral Consortium · Marketing Science Conference · Lisbon, Portugal · 2026.",
  },
];

export const GRANTS = [
  { TITLE: "Google Cloud Academic Research Grant", DESCRIPTION: "€2,000 · 2025." },
  { TITLE: "SURF Small Compute Grant", DESCRIPTION: "€2,500 · 2025." },
  { TITLE: "ERIM Support Programme (Travel)", DESCRIPTION: "€1,000 · 2025." },
  { TITLE: "SURF Small Compute Grant", DESCRIPTION: "€2,500 · 2026." },
  { TITLE: "ERIM Support Programme (Travel)", DESCRIPTION: "€750 · 2026." },
  { TITLE: "ERIM Support Programme (Research)", DESCRIPTION: "€4,750 · 2026." },
];
