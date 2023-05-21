import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
// import GlobalPolyFill from "@esbuild-plugins/node-globals-polyfill";
// npm install --dev @esbuild-plugins/node-globals-polyfill
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
// npm install --dev @esbuild-plugins/node-modules-polyfill
// import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
// import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

// import nodePolyfills from 'rollup-plugin-polyfill-node'
export default defineConfig({
  plugins: [react()],
  // build: {
  //   commonjsOptions: {
  //     include: []
  //   },
  //   rollupOptions: {
  //     plugins: [
  //       // Enable rollup polyfills plugin
  //       // used during production bundling
  //       rollupNodePolyFill()
  //     ]
  //   }
  // },
  // optimizeDeps: {
  //   disabled: false,
  //   esbuildOptions: {
  //     // Enable esbuild polyfill plugins
  //     plugins: [
  //       NodeGlobalsPolyfillPlugin({
  //         process: true,
  //         buffer: true
  //       }),
  //       NodeModulesPolyfillPlugin()
  //     ]
  //   }
  // },
});
