import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
    test: {
        coverage: {
            provider: 'istanbul',
            exclude: [
                'e2e/**',
                'test/**',
                '**/*.config.{js,ts}',
                '**/*.eslintrc.cjs',
                '**/main.tsx',
                '**/*.test.ts',
                '**/*.test.tsx',
                '**/app.tsx',
            ],
        },
        exclude: ['e2e/**'],
        include: ['src/**/*.test.{ts,tsx}'],
        watch: true,
        globals: true,
        setupFiles: './test/setup.ts',
        environment: 'happy-dom',
    },
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
