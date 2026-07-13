"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

const EXIT_CLEANUP_MS = 560;

type PageLayer = {
  pathname: string;
  children: ReactNode;
  shouldAnimate: boolean;
};

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [activeLayer, setActiveLayer] = useState<PageLayer>({
    pathname,
    children,
    shouldAnimate: false
  });
  const [exitingLayer, setExitingLayer] = useState<PageLayer | null>(null);
  const [gradientKey, setGradientKey] = useState(0);
  const activeLayerRef = useRef(activeLayer);

  useLayoutEffect(() => {
    const previousLayer = activeLayerRef.current;

    if (pathname === previousLayer.pathname) {
      const updatedLayer = { ...previousLayer, children };
      activeLayerRef.current = updatedLayer;
      setActiveLayer(updatedLayer);
      return;
    }

    const nextLayer = {
      pathname,
      children,
      shouldAnimate: true
    };

    activeLayerRef.current = nextLayer;
    setExitingLayer(previousLayer);
    setActiveLayer(nextLayer);
    setGradientKey((key) => key + 1);

    const timeoutId = window.setTimeout(() => {
      setExitingLayer(null);
    }, EXIT_CLEANUP_MS);

    return () => window.clearTimeout(timeoutId);
  }, [children, pathname]);

  return (
    <div className="page-transition-shell">
      {gradientKey > 0 ? (
        <div
          key={gradientKey}
          aria-hidden="true"
          className="page-transition-gradient"
        />
      ) : null}

      <div
        key={activeLayer.pathname}
        className={
          activeLayer.shouldAnimate
            ? "page-transition-layer page-transition-layer--enter"
            : "page-transition-layer"
        }
      >
        {activeLayer.children}
      </div>

      {exitingLayer ? (
        <div
          key={`exit-${exitingLayer.pathname}`}
          aria-hidden="true"
          className="page-transition-layer page-transition-layer--exit"
        >
          {exitingLayer.children}
        </div>
      ) : null}
    </div>
  );
}
