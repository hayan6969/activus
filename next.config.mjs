import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static-00.iconduck.com",
      "vuejs.org",
      "angular.io",
      "brand.jquery.org",
      "media.licdn.com",
      "banner2.cleanpng.com",
      "static.vecteezy.com",
      "encrypted-tbn0.gstatic.com",
      "d3f1iyfxxz8i1e.cloudfront.net",
      "miro.medium.com",
      "upload.wikimedia.org"
    ],
  },
};

export default withNextIntl(nextConfig);
