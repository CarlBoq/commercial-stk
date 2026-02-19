import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Always scroll to top on route change
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      // If there's a hash, scroll to the anchor after a short delay
      setTimeout(() => {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
}
