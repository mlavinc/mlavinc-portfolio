"use client";

import { useReducedMotion } from "framer-motion";
import { STARS } from "@/lib/stars";

/** Rare, slow meteors: long cycle = infrequent appearance */
const METEORS = [
  { x: 22, y: 4, delay: 1, duration: 18 },
  { x: 58, y: 0, delay: 8, duration: 20 },
  { x: 78, y: 8, delay: 14, duration: 19 },
] as const;

export function CosmicBackground() {
  const prefersReducedMotion = useReducedMotion();
  const animate = !prefersReducedMotion;

  return (
    <div className="site-starfield" aria-hidden="true">
      {STARS.map((star, index) => (
        <span
          key={`star-${index}`}
          className={animate ? "site-star site-star--live" : "site-star"}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.s,
            height: star.s,
            ["--star-o" as string]: String(star.o),
            opacity: star.o,
            ...(animate
              ? {
                  animationDuration: `${star.d}s`,
                  animationDelay: `${star.delay}s`,
                }
              : null),
          }}
        />
      ))}

      {animate
        ? METEORS.map((meteor, index) => (
            <span
              key={`meteor-${index}`}
              className="site-meteor"
              style={{
                left: `${meteor.x}%`,
                top: `${meteor.y}%`,
                animationDuration: `${meteor.duration}s`,
                animationDelay: `${meteor.delay}s`,
              }}
            />
          ))
        : null}
    </div>
  );
}
