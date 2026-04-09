import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
  server: {
    hmr: {
      clientPort: 443, // For ngrok HTTPS tunnels
      host: "localhost", // Or your ngrok host if needed
    },
    allowedHosts: ["edaf-62-194-25-142.ngrok-free.app"],
  },
});
