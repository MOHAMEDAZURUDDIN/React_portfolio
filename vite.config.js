import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "lottie-vendor": ["lottie-web/light"],
          "framer-motion": ["framer-motion"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});