import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages serves this project site under /my-storyboard/.
// The base is what makes asset URLs resolve correctly in production.
export default defineConfig({
  base: "/port/",
  plugins: [react(), tailwindcss()],
});
