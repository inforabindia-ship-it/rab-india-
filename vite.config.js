import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Client + SSR bundles; post-build prerender in scripts/prerender.mjs */
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    historyApiFallback: true
  },
  ssr: {
    noExternal: ["react-helmet-async", "react-router-dom", "react-router"]
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

