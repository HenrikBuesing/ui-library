import * as esbuild from "esbuild";
import {writeFileSync} from "node:fs";
import {sassPlugin} from "esbuild-sass-plugin";
import postcss from "postcss";
import cssnanoPlugin from "cssnano";

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
    plugins: [sassPlugin({
      type: "css-text",
      async transform(source) {
        const {css} = await postcss([
          cssnanoPlugin({
            preset: 'cssnano-preset-advanced',
          })
        ]).process(source, {from: 'undefined'})
        return css
      }
    })],
    external: ['react'],
  });

  writeFileSync('meta.json', JSON.stringify(result.metafile));
  console.log(await esbuild.analyzeMetafile(result.metafile, {verbose: true}))
} catch (e) {
  console.error(e);
  process.exit(1)
}