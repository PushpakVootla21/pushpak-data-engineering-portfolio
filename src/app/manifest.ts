import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pushpak Vootla Portfolio",
    short_name: "Pushpak Portfolio",
    description: "Azure Data Engineering portfolio of Pushpak Vootla.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#087ea4",
  };
}
