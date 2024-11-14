import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        card: "./pages/card.html",
        sign: "./pages/signin.html",
      },
    },
  },
});
