import type { LinkProps } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { isEnglishPath, localizePath } from "@/lib/locale";

type LocalizedLinkProps = Omit<LinkProps, "to"> & { to: string };

/**
 * Internal Link that keeps the /en prefix when the current route is English.
 */
export const LocalizedLink = ({ to, ...props }: LocalizedLinkProps) => {
  const { pathname } = useLocation();
  const target = localizePath(to, isEnglishPath(pathname));

  return <Link to={target} {...props} />;
};
