import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UmarJaum",
    short_name: "UmarJaum",
    description: "Engineering the systems behind better publishing.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f3ed",
    theme_color: "#ff6b35",
    icons: [
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  };
}
