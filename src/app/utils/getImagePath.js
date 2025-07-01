// Utility to prefix image paths with basePath/assetPrefix for static export
export function getImagePath(path) {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${prefix}${path}`;
}
