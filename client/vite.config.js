
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import removeConsole from "vite-plugin-remove-console";


export default defineConfig({
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
  plugins: [react(), removeConsole()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
