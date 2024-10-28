import * as esbuild from "esbuild";
import {sassPlugin} from 'esbuild-sass-plugin';

esbuild.build({
  entryPoints: ['src/index.ts'],
  outdir: 'dist',
  bundle: true,
  minify: true,
  sourcemap: true,
  splitting: true,
  chunkNames: 'chunks/[name]-[hash]',
  format: 'esm',
  target: ['es6'],
  plugins: [sassPlugin({type: "css-text"})],
  external: ['react'],
})
  .then(async(result) => {
    console.log('Build complete')
  })
  .catch(() => process.exit(1));