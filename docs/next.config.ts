import nextra from 'nextra';

const withNextra = nextra({
  defaultShowCopyCode: true
});

const nextConfig = withNextra({
  reactStrictMode: true,
  transpilePackages: ['@hbuesing/ui-library'],
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.ts'
    }
  }
});

export default nextConfig;