"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

const EXIT_DURATION_MS = 180;

type Phase = "entering" | "exiting";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [displayedPathname, setDisplayedPathname] = useState(pathname);
  const [phase, setPhase] = useState<Phase>("entering");
  const previousPathname = useRef(pathname);
  const pendingChildren = useRef(children);
  const pendingPathname = useRef(pathname);

  useEffect(() => {
    pendingChildren.current = children;
    pendingPathname.current = pathname;
  }, [children, pathname]);

  useEffect(() => {
    if (pathname === previousPathname.current) {
      return;
    }

    previousPathname.current = pathname;
    setPhase("exiting");

    const timeoutId = window.setTimeout(() => {
      setDisplayedChildren(pendingChildren.current);
      setDisplayedPathname(pendingPathname.current);
      setPhase("entering");
    }, EXIT_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <div
      key={displayedPathname}
      className={
        phase === "exiting"
          ? "page-transition page-transition--exit"
          : "page-transition page-transition--enter"
      }
    >
      {displayedChildren}
    </div>
  );
}
