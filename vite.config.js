import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ 지금 주소가 /portfolio/ 이므로 base도 동일하게 맞춤
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});