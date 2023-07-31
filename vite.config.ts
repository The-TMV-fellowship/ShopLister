import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // Load environment variables from the appropriate .env file
    envDir: mode === "production" ? "env.production" : ".",
    // Your Vite config settings here
  };
});
