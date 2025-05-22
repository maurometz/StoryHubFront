import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://storyhubapi-xy3q.onrender.com/",
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
