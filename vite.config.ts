/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      reporter: ['html', 'text'],
      exclude: [
        'node_modules/',
        'dist',
        '.vite',
        'vite.config.ts',
        '.eslintrc.cjs',
        'src/vite-env.d.ts',
        '**/*.test.{js,jsx,ts,tsx}',
        'src/Tests',
        '.next/',
        'next-env.d.ts',
        'next.config.js',
        'src/Types/',
        '.prettierrc.cjs',
      ],
    },
  },
});
