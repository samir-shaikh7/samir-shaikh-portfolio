"use client";

import { useState, useEffect } from "react";

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Avoid running on server
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(min-width: 1024px)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDesktop(media.matches);

    const listener = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    // Modern browsers support addEventListener on MediaQueryList
    media.addEventListener("change", listener);
    return () => {
      media.removeEventListener("change", listener);
    };
  }, []);

  return isDesktop;
}
