/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  i18n: {
    locales: ["en", "mr"],
    defaultLocale: "en",
  },
};
export default nextConfig;
