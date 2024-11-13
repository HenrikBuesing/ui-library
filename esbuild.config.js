import {postcssModules, sassPlugin} from "esbuild-sass-plugin";
import cssnanoPlugin from "cssnano";

const baseConfig = {
  bundle: true,
  format: 'esm',
  target: ['esnext'],
  external: ['react'],
}

export function getBuildConfig(entry, outDir, meta = false) {
  return {
    entryPoints: [entry],
    outdir: outDir,
    minify: true,
    sourcemap: false,
    metafile: meta,
    plugins: [sassPlugin({
      type: "style",
      transform: postcssModules({
        generateScopedName: '[hash:base64:5]',
        hashPrefix: 'uil',
        scopeBehaviour: 'global'
      }, [
        cssnanoPlugin({
          preset: 'cssnano-preset-advanced',
        })
      ]),
    })],
    ...baseConfig
  }
}

export function getDevConfig(entry, outDir) {
  return {
    entryPoints: [entry],
    outdir: outDir,
    minify: false,
    sourcemap: true,
    metafile: true,
    plugins: [sassPlugin({
      type: "style",
      transform: postcssModules({
        scopeBehaviour: 'global'
      }, []),
    })],
    ...baseConfig
  }
}