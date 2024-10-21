// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/saas-landing-page/",
  build: {
    outDir: "dist",
  },
});
