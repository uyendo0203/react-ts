// next.config.js

// You can choose which headers to add to the list
// after learning more below.
const securityHeaders = []
const nextConfig = {
  /* config options here */
  source: '/:path*',
  headers: securityHeaders,
  images: {
    domains: [process.env.DOMAIN_API]
  },
  env: {
    GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID,
  },
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: `/` },                              // Routes
      '/booking': { page: `/booking` },           // match
      '/equipment': { page: `/equipment` },           // match
      '/payment': { page: `/payment` },           // match
      '/studio': { page: `/studio` },           // match
      '/work': { page: `/work` },           // match
      '/terms': { page: `/terms` },           // match
    }
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
      config.resolve.alias.https = "https-browserify";
      config.resolve.alias.http = "http-browserify";
    }

    return config;
  }
}
module.exports = nextConfig