import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Pages load on demand, so keep looking for the anchor for up to ~2s.
      let attempts = 0;
      let timer;
      const tryScroll = () => {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts < 20) {
          attempts += 1;
          timer = setTimeout(tryScroll, 100);
        }
      };
      timer = setTimeout(tryScroll, 100);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, hash]);
  return null;
}

export default ScrollToTop;
