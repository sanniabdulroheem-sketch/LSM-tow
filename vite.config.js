import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "LanreShittuMotors";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : "/",
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
