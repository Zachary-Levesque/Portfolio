"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef
} from "react";
import type { ReactNode } from "react";

type ViewTransitionLike = {
  finished: Promise<void>;
  skipTransition: () => void;
};

declare global {
  interface Document {
    startViewTransition?: (
      callback: () => void | Promise<void>
    ) => ViewTransitionLike;
  }
}

type ViewTransitionContextValue = {
  navigate: (href: string) => void;
};

const ViewTransitionContext =
  createContext<ViewTransitionContextValue | null>(null);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ViewTransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const pendingNavigation = useRef<(() => void) | null>(null);
  const activeTransition = useRef<ViewTransitionLike | null>(null);

  useEffect(() => {
    pendingNavigation.current?.();
    pendingNavigation.current = null;
  }, [pathname]);

  const navigate = useCallback(
    (href: string) => {
      if (!document.startViewTransition || prefersReducedMotion()) {
        router.push(href);
        return;
      }

      activeTransition.current?.skipTransition();
      pendingNavigation.current?.();
      pendingNavigation.current = null;

      const transition = document.startViewTransition(
        () =>
          new Promise<void>((resolve) => {
            pendingNavigation.current = resolve;
            router.push(href);
          })
      );

      activeTransition.current = transition;
      transition.finished.finally(() => {
        if (activeTransition.current === transition) {
          activeTransition.current = null;
        }
      });
    },
    [router]
  );

  return (
    <ViewTransitionContext.Provider value={{ navigate }}>
      {children}
    </ViewTransitionContext.Provider>
  );
}

export function useViewTransitionNavigation() {
  const context = useContext(ViewTransitionContext);

  if (!context) {
    throw new Error(
      "useViewTransitionNavigation must be used inside ViewTransitionProvider"
    );
  }

  return context;
}
