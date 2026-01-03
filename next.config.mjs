/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configuration pour Netlify
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Désactive le trailing slash pour compatibilité Netlify
  trailingSlash: false,
}

export default nextConfig
