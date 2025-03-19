/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com"], // Autorise ce domaine pour les placeholders
  },
};

export default nextConfig; // ESM, pas module.exports
