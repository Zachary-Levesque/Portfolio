"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
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
  const pendingScrollToTop = useRef(false);
  const activeTransition = useRef<ViewTransition | null>(null);

  useLayoutEffect(() => {
    if (!pendingScrollToTop.current) {
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (pendingScrollToTop.current) {
      window.scrollTo(0, 0);
    }

    pendingNavigation.current?.();
    pendingNavigation.current = null;

    if (!pendingScrollToTop.current) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      pendingScrollToTop.current = false;
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  const navigate = useCallback(
    (href: string) => {
      document.documentElement.dataset.transitionDirection =
        getTransitionDirection(pathname, href);
      pendingScrollToTop.current = true;

      if (
        typeof document.startViewTransition !== "function" ||
        prefersReducedMotion()
      ) {
        router.push(href, { scroll: false });
        return;
      }

      activeTransition.current?.skipTransition();
      pendingNavigation.current?.();
      pendingNavigation.current = null;

      const transition = document.startViewTransition(
        () =>
          new Promise<void>((resolve) => {
            pendingNavigation.current = resolve;
            router.push(href, { scroll: false });
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
