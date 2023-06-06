import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      "/foo": "http://localhost:4567",
      // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      // with RegEx: http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
      "^/fallback/.*": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ""),
      },
    },
  },
});
