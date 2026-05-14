import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * SEO: Primary metadata is applied client-side (react-helmet-async). For crawlers with limited JS,
 * add prerendering (host-level), a prerender plugin, or move public routes to SSR (Remix/Next).
 */
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    historyApiFallback: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("react-helmet-async")) return "helmet";
          if (id.includes("react-router")) return "router";
          if (id.includes("node_modules/react-dom")) return "react-core";
          if (id.includes("node_modules/react/")) return "react-core";
        }
      }
    }
  }
});

