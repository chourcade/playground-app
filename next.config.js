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
           './Playground': './src/pages/playground.tsx',
         },
         shared: {
            // specify shared dependencies 
            // read more in Shared Dependencies section
         },
       })
     );

     return config;
   },
 }
 
 module.exports = nextConfig