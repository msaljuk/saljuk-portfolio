import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react({
      include: "**/*.{jsx,js}",
    }),
    svgr(),
  ],
  // Keep REACT_APP_ support so existing Netlify / local env vars keep working
  envPrefix: ["VITE_", "REACT_APP_"],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "build",
  },
  // CRA allowed JSX in .js files; keep that working during the Vite migration
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    globals: true,
  },
});
