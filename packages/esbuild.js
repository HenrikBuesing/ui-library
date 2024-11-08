import * as esbuild from "esbuild";
import {writeFileSync} from "node:fs";
import {postcssModules, sassPlugin} from "esbuild-sass-plugin";
import cssnanoPlugin from "cssnano";

try {
  const result = await esbuild.build({
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    bundle: true,
    minify: false,
    sourcemap: false,
    metafile: true,
    format: 'esm',
    target: ['esnext'],
    plugins: [sassPlugin({
      type: "style",
      transform: postcssModules({
        generateScopedName: 'uil_[hash:base64:5]',
      }, [
        // cssnanoPlugin({
        //   preset: 'cssnano-preset-advanced',
        // })
      ]),
    })],
    external: ['react'],
  });

  writeFileSync('meta.json', JSON.stringify(result.metafile));
  console.log(await esbuild.analyzeMetafile(result.metafile, {verbose: true}))
} catch (e) {
  console.error(e);
  process.exit(1)
}