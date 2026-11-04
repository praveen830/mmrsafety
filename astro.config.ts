import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://mmrsafety.in",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
