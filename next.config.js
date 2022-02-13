/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'tc'],
    defaultLocale: 'tc',
    localeDetection: false,
  },
  // basePath: '/base-path',
  sassOptions: {
    prependData: '@import "@src/themes/variables.scss"; @import "@src/themes/mixins.scss"; @import "@src/themes/globals.scss";',
  },
};

module.exports = nextConfig;
