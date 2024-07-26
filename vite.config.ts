import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    server: {
        host: 'localhost',
        port: 3000,
    },
});
