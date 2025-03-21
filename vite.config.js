import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Memory_Game_React/', // 👈 your repo name with slashes
  plugins: [react()],
});
