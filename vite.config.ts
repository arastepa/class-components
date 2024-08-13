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
    setupFiles: ['./app/setupTests.ts'],
    coverage: {
      reporter: ['html', 'text'],
      exclude: [
        'node_modules/',
        'dist',
        '.vite',
        '**/build/**',
        'vite.config.ts',
        '.eslintrc.cjs',
        'src/vite-env.d.ts',
        '**/*.test.{js,jsx,ts,tsx}',
        'app/Tests',
        '.next/',
        'next-env.d.ts',
        'next.config.js',
        'app/Types/',
        'app/entry.server.tsx',
        'app/entry.client.tsx',
        '.prettierrc.cjs',
      ],
    },
  },
});
