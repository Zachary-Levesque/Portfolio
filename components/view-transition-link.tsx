"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useViewTransitionNavigation } from "@/components/view-transition-provider";

type ViewTransitionLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
  children: ReactNode;
};

function isModifiedClick(event: MouseEvent<HTMLAnchorElement>) {
  return (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  );
}

function isInternalPath(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function ViewTransitionLink({
  href,
  children,
  onClick,
  target,
  download,
  ...props
}: ViewTransitionLinkProps) {
  const pathname = usePathname();
  const { navigate } = useViewTransitionNavigation();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      target ||
      download ||
      isModifiedClick(event) ||
      !isInternalPath(href) ||
      href.startsWith("#") ||
      href === pathname
    ) {
      return;
    }

    event.preventDefault();
    navigate(href);
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      target={target}
      download={download}
      {...props}
    >
      {children}
    </Link>
  );
}
