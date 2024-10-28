import * as esbuild from "esbuild";
import {sassPlugin} from 'esbuild-sass-plugin';
import {writeFileSync} from "node:fs";

try {
  const result = await esbuild.build({
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    bundle: true,
    minify: true,
    sourcemap: false,
    metafile: true,
    format: 'esm',
    target: ['esnext'],
    plugins: [sassPlugin({type: "css-text"})],
    external: ['react'],
  });

  writeFileSync('meta.json', JSON.stringify(result.metafile));
  console.log(await esbuild.analyzeMetafile(result.metafile, {verbose: true}))
} catch (e) {
  console.error(e);
  process.exit(1)
}