import { resolve } from 'node:path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

import * as packageJson from './package.json';

export default defineConfig((props) => {
  return {
    plugins: [
      react(),
      svgr(),
      tsconfigPaths(),
      dts({
        include: ['src/'],
      }),
      splitVendorChunkPlugin(),
    ],
    build: {
      lib: {
        entry: resolve('src', 'index.ts'),
        name: 'market-hub-common-react-components',
        formats: ['es'],
      },
      rollupOptions: {
        external: [
          ...Object.keys(packageJson.dependencies),
          '@heroicons/react/24/outline',
          '@heroicons/react/24/solid',
        ],
      },
    },
    test: {
      include: ['**/*.{test,spec}.{ts,tsx}'],
      globals: true,
      environment: 'jsdom',
      setupFiles: './test/setup.ts',
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html', 'text-summary'],
        all: true,
        exclude: ['**/*.{test,spec}.{ts,tsx}', '**/setupTests.ts'],
      },
    },
  };
});
