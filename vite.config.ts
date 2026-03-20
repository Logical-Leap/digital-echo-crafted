import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "next/link": path.resolve(__dirname, "./src/shims/next-link.jsx"),
      "next/navigation": path.resolve(__dirname, "./src/shims/next-navigation.jsx"),
      "next/font/google": path.resolve(__dirname, "./src/shims/next-font.js"),
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
});
