/**
 * Minimal star field — deterministic positions, no random, GPU-friendly transforms.
 */
const STARS = [
  { x: 6, y: 10, s: 1, o: 0.35, d: 7, delay: 0 },
  { x: 14, y: 28, s: 1.25, o: 0.5, d: 9, delay: 1.2 },
  { x: 22, y: 8, s: 1, o: 0.28, d: 8, delay: 2.4 },
  { x: 31, y: 40, s: 1.5, o: 0.55, d: 11, delay: 0.6 },
  { x: 39, y: 18, s: 1, o: 0.32, d: 10, delay: 3.1 },
  { x: 48, y: 54, s: 1.25, o: 0.45, d: 8.5, delay: 1.8 },
  { x: 56, y: 12, s: 1, o: 0.3, d: 12, delay: 4.2 },
  { x: 64, y: 34, s: 1.5, o: 0.52, d: 9.5, delay: 2.7 },
  { x: 73, y: 22, s: 1, o: 0.38, d: 7.5, delay: 0.9 },
  { x: 81, y: 48, s: 1.25, o: 0.48, d: 10.5, delay: 3.6 },
  { x: 90, y: 14, s: 1, o: 0.34, d: 8, delay: 5 },
  { x: 10, y: 62, s: 1.25, o: 0.42, d: 11, delay: 1.5 },
  { x: 20, y: 74, s: 1, o: 0.28, d: 9, delay: 4.5 },
  { x: 37, y: 68, s: 1.5, o: 0.58, d: 10, delay: 2.1 },
  { x: 45, y: 82, s: 1, o: 0.36, d: 8, delay: 5.5 },
  { x: 58, y: 66, s: 1.25, o: 0.44, d: 12, delay: 3.3 },
  { x: 70, y: 80, s: 1, o: 0.3, d: 9.5, delay: 0.4 },
  { x: 78, y: 58, s: 1.25, o: 0.46, d: 7.5, delay: 4.8 },
  { x: 88, y: 72, s: 1, o: 0.33, d: 11, delay: 2.9 },
  { x: 4, y: 44, s: 1.25, o: 0.4, d: 10, delay: 6 },
  { x: 94, y: 38, s: 1.5, o: 0.5, d: 8.5, delay: 1.1 },
  { x: 28, y: 52, s: 1, o: 0.26, d: 13, delay: 3.9 },
  { x: 52, y: 30, s: 1.25, o: 0.48, d: 9, delay: 5.2 },
  { x: 66, y: 46, s: 1, o: 0.31, d: 10.5, delay: 2.3 },
  { x: 84, y: 88, s: 1.25, o: 0.42, d: 8, delay: 4.1 },
  { x: 16, y: 88, s: 1, o: 0.29, d: 11.5, delay: 0.7 },
] as const;

/** Rare, slow meteors — long cycle = infrequent appearance */
const METEORS = [
  { x: 22, y: 4, delay: 2, duration: 22 },
  { x: 58, y: 0, delay: 12, duration: 26 },
  { x: 78, y: 8, delay: 20, duration: 24 },
] as const;

interface HeroStarfieldProps {
  animate: boolean;
}

export function HeroStarfield({ animate }: HeroStarfieldProps) {
  return (
    <div className="hero-starfield" aria-hidden="true">
      {STARS.map((star, index) => (
        <span
          key={`star-${index}`}
          className={animate ? "hero-star hero-star--live" : "hero-star"}
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
              className="hero-meteor"
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
