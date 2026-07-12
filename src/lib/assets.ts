import { existsSync } from "node:fs";
import { join } from "node:path";

export function publicAssetExists(assetPath: string | null): assetPath is string {
  if (!assetPath?.startsWith("/") || assetPath.includes("..")) return false;
  return existsSync(join(process.cwd(), "public", assetPath));
}
