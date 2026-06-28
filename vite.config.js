import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "LSM-tow";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? `/${repoName}/` : "/",
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
}));
