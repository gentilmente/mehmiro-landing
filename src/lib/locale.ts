export const isEnglishPath = (pathname: string) =>
  pathname === "/en" || pathname.startsWith("/en/");

export const stripEnglishPrefix = (pathname: string) => {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
};

/**
 * Prefixes an internal path with /en when the current route is English.
 * External URLs, mailto links and relative hashes are returned unchanged.
 */
export const localizePath = (path: string, english: boolean) => {
  if (!english) return path;
  if (path === "/") return "/en";
  if (path.startsWith("/en")) return path;
  if (path.startsWith("/#")) return `/en${path.slice(1)}`;
  if (path.startsWith("/")) return `/en${path}`;
  return path;
};
