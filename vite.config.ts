import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

// The Docs app renders long-form prose from .mdx. MDX must run BEFORE
// @vitejs/plugin-react so the JSX it emits goes through React's transform
// (Fast Refresh included). immediately.run processes .mdx natively; this keeps
// local dev/build in sync. https://vite.dev/config/
export default defineConfig({
  plugins: [{ enforce: 'pre', ...mdx() }, react()],
});
