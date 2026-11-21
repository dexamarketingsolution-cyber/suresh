import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // Serve the CV as a download with a friendly filename
        source: "/Suresh-K-CV.pdf",
        headers: [
          { key: "Content-Type", value: "application/pdf" },
          { key: "Content-Disposition", value: 'attachment; filename="Suresh-K-CV.pdf"' },
        ],
      },
    ];
  },
};

export default nextConfig;
