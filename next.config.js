/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["et", "ru"],
    defaultLocale: "et",
  },
};

module.exports = nextConfig;
