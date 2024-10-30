import * as esbuild from "esbuild";
import {sassPlugin} from "esbuild-sass-plugin";
import postcss from "postcss";
import cssnanoPlugin from "cssnano";

try {
  await esbuild.build({
    entryPoints: ['../packages/src/index.ts'],
    outdir: 'src/uil-bundle',
    bundle: true,
    minify: true,
    sourcemap: false,
    metafile: false,
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

  console.log('build complete')
} catch (e) {
  console.error(e);
  process.exit(1)
}