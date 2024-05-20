/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "characterai.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
