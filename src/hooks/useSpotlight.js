import { useEffect } from "react";

// Sets --spot-x / --spot-y on any `.spotlight` element under the pointer,
// which the CSS uses to draw a soft glow that follows the cursor.
const useSpotlight = () => {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return undefined;

    const onMove = (event) => {
      const card = event.target.closest && event.target.closest(".spotlight");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
};

export default useSpotlight;
