import * as esbuild from "esbuild";
import {sassPlugin} from 'esbuild-sass-plugin';
import * as fs from "node:fs";

try {
  const result = await esbuild.build({
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    bundle: true,
    minify: true,
    sourcemap: true,
    metafile: true,
    format: 'esm',
    target: ['esnext'],
    plugins: [sassPlugin({type: "css-text"})],
    external: ['react'],
  });

  console.log('Build complete');
  fs.writeFileSync('meta.json', JSON.stringify(result.metafile));
  console.log(await esbuild.analyzeMetafile(result.metafile, {verbose: true}))
} catch (e) {
  console.error(e);
  process.exit(1)
}