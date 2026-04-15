import { defineConfig } from "vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const port = Number(process.env.PORT) || 3000;

const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
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
    outDir: path.resolve(import.meta.dirname, "dist/public"),
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
