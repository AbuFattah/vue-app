import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

// export default defineConfig({
//   // omit
// })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5000,
  },
});
