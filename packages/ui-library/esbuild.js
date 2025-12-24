import {sassPlugin} from 'esbuild-sass-plugin';
import {writeFileSync} from 'node:fs';
import * as esbuild from 'esbuild';

try {
  const mode = process.argv.includes('--prod') ? 'production' : 'development';
  const isProduction = mode === 'production';
  
  console.log(`using ${mode} config...`);
  
  const result = await esbuild.build(
    {
      entryPoints: ['src/index.ts'],
      outdir: 'dist',
      bundle: true,
      minify: isProduction,
      sourcemap: !isProduction,
      metafile: true,
      external: ['react', 'react-dom'],
      format: 'esm',
      target: ['esnext'],
      plugins: [sassPlugin({
        type: 'local-css'
      })],
    }
  );

  if (!isProduction) {
    writeFileSync('meta.json', JSON.stringify(result.metafile));
  }

  console.log(await esbuild.analyzeMetafile(result.metafile));
} catch (e) {
  console.error(e);
  process.exit(1);
}