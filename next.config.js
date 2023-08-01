const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'playground',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          // specify exposed pages and components
          './Playground': './src/pages/playground/[path].tsx',
        },
        shared: {
          // specify shared dependencies 
          // read more in Shared Dependencies section
        },
        extraOptions: {
          exposePages: true, // `false` by default
          enableImageLoaderFix: true, // `false` by default
          enableUrlLoaderFix: true, // `false` by default
        },
      })
    );

    return config;
  },
}

module.exports = nextConfig