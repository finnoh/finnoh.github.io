import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://finnoh.github.io",
  redirects: {
    "/blog/01-getting-started": "/blog/01-project",
    "/blog/02-blog-collection": "/blog/02-project",
    "/blog/03-projects-collection": "/blog/03-project",
  },
  integrations: [mdx(), sitemap(), tailwind()],
});
