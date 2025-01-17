import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.ibb.co",
      },
      {
        hostname: "placehold.co",
      },
      {
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
      },
      {
        hostname: "drive.google.com",
      },
    ],
  },
};

export default nextConfig;
