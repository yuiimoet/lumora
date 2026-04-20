import { defineConfig } from "vite";
import path from "path";


const isDev = process.env.NODE_ENV !== "production";

const port = Number(process.env.PORT) || 3000;

const port = Number(process.env.PORT) || 3000;
 ad17c40650d013840d1f40ff566c847efd9356a2
const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [
    ...(isDev && process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-runtime-error-modal").then((m) =>
            m.default()
          ),
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            })
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner()
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        splash: path.resolve(import.meta.dirname, "splash.html"),
        login: path.resolve(import.meta.dirname, "login.html"),
        index: path.resolve(import.meta.dirname, "index.html"),
        todo: path.resolve(import.meta.dirname, "todo.html"),
        statistics: path.resolve(import.meta.dirname, "statistics.html"),
        applock: path.resolve(import.meta.dirname, "applock.html"),
        folder: path.resolve(import.meta.dirname, "folder.html"),
        settings: path.resolve(import.meta.dirname, "settings.html"),
        profile: path.resolve(import.meta.dirname, "profile.html"),
      },
    },
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});