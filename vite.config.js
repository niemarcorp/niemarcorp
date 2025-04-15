import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '',
  plugins: [react()],
  server: {
    port: 5173,   // Podés cambiarlo si usás otro
    open: true    // Esto abre el navegador automáticamente
  }
});
