"use client";

import { useEffect } from "react";

const SCROLL_DURATION_MS = 850;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animateScrollTo(targetY: number) {
  const startY = window.scrollY;
  const distance = targetY - startY;

  if (Math.abs(distance) < 1) {
    return;
  }

  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

/**
 * Slightly slower-than-default smooth scrolling for in-page anchors.
 */
export function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      return;
    }

    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="/#"], a[href^="#"]') as
        | HTMLAnchorElement
        | null;

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href) {
        return;
      }

      const hash = href.includes("#") ? href.slice(href.indexOf("#")) : null;
      if (!hash || hash === "#") {
        return;
      }

      const id = decodeURIComponent(hash.slice(1));
      const element = document.getElementById(id);
      if (!element) {
        return;
      }

      event.preventDefault();
      const top = element.getBoundingClientRect().top + window.scrollY - 88;
      window.history.pushState(null, "", hash);
      animateScrollTo(top);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
