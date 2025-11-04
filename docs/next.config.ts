import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true
});

const nextConfig = withNextra({
  reactStrictMode: true,
  transpilePackages: ['@hbuesing/ui-library']
});

export default nextConfig;