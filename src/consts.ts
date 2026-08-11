import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Finn-Ole Höner",
  EMAIL: "honer@ese.eur.nl",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "PhD Researcher in Generative AI",
  DESCRIPTION: "Finn-Ole Höner is a PhD researcher developing LLM-based methods for market research.",
};

export const BLOG: Metadata = {
  TITLE: "Research",
  DESCRIPTION: "Working papers on generative AI, synthetic data, and market research.",
};

export const WORK: Metadata = {
  TITLE: "Experience",
  DESCRIPTION: "Research, data-science, and teaching experience.",
};

export const PROJECTS: Metadata = {
  TITLE: "Presentations",
  DESCRIPTION: "Selected conference presentations.",
};

export const SOCIALS: Socials = [
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/finn-hoener",
  },
];
