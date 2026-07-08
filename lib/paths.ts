const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  if (!path || path.startsWith("http")) {
    return path;
  }

  return `${basePath}${path}`;
}
