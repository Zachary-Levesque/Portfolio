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

type ViewTransitionContextValue = {
  navigate: (href: string) => void;
};

const routeOrder = [
  "/",
  "/about",
  "/experience",
  "/education",
  "/projects",
  "/skills",
  "/hobbies",
  "/contact"
];

const ViewTransitionContext =
  createContext<ViewTransitionContextValue | null>(null);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getTransitionDirection(from: string, to: string) {
  const fromIndex = routeOrder.indexOf(from);
  const toIndex = routeOrder.indexOf(to);

  if (fromIndex === -1 || toIndex === -1) {
    return "forward";
  }

  return toIndex >= fromIndex ? "forward" : "backward";
}

export function ViewTransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const pendingNavigation = useRef<(() => void) | null>(null);
  const activeTransition = useRef<ViewTransition | null>(null);

  useEffect(() => {
    pendingNavigation.current?.();
    pendingNavigation.current = null;
  }, [pathname]);

  const navigate = useCallback(
    (href: string) => {
      document.documentElement.dataset.transitionDirection =
        getTransitionDirection(pathname, href);

      if (
        typeof document.startViewTransition !== "function" ||
        prefersReducedMotion()
      ) {
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
    [pathname, router]
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
