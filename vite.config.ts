import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
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
