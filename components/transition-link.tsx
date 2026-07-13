"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type TransitionLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
  children: ReactNode;
};

const EXIT_DURATION_MS = 170;

function isModifiedClick(event: MouseEvent<HTMLAnchorElement>) {
  return (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  );
}

export function TransitionLink({
  href,
  children,
  onClick,
  target,
  ...props
}: TransitionLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      target ||
      isModifiedClick(event) ||
      href === pathname ||
      href.startsWith("#") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    event.preventDefault();

    const currentPage = document.querySelector("[data-page-transition]");
    currentPage?.classList.add("page-transition--exit");

    window.setTimeout(() => {
      router.push(href);
    }, EXIT_DURATION_MS);
  }

  return (
    <Link href={href} onClick={handleClick} target={target} {...props}>
      {children}
    </Link>
  );
}
