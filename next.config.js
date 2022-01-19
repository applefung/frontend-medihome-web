/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `@import "@src/themes/variables.scss"; @import "@src/themes/mixins.scss"; @import "@src/themes/globals.scss";`,
  },
};

module.exports = nextConfig;
