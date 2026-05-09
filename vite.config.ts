import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Disable Cloudflare Workers build target — we deploy to Vercel as a SPA.
  cloudflare: false,
  tanstackStart: {
    spa: { enabled: true },
    prerender: { enabled: true },
  },
});
