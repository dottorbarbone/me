/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.ctfassets.net' },
      { protocol: 'https', hostname: 'firebase.google.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'www.accuratereviews.com' },
      { protocol: 'https', hostname: 'images.seeklogo.com' },
      { protocol: 'https', hostname: 'www.unionegeometri.com' },
      { protocol: 'https', hostname: 'www.pcassemblati.eu' },
      { protocol: 'https', hostname: 'www.mylanding.it' },
      { protocol: 'https', hostname: 'cd-keys.online' },
      { protocol: 'https', hostname: 'cdn-icons-png.flaticon.com' },
    ],
  },
};

export default nextConfig;
