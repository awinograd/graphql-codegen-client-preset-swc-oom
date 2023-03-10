/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
    swcPlugins: [
      [
        "@graphql-codegen/client-preset-swc-plugin",
        { artifactDirectory: "./graphql", gqlTagName: "graphql" },
      ],
    ],
  },
};

module.exports = nextConfig;
