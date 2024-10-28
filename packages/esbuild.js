import * as esbuild from "esbuild";
import {writeFileSync} from "node:fs";
import { inlineSass } from "esbuild-inline-sass";

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
    plugins: [inlineSass({minify: true})],
    external: ['react'],
  });

  writeFileSync('meta.json', JSON.stringify(result.metafile));
  console.log(await esbuild.analyzeMetafile(result.metafile, {verbose: true}))
} catch (e) {
  console.error(e);
  process.exit(1)
}