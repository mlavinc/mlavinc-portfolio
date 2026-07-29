/**
 * Deterministic star positions — no Math.random, stable across renders.
 */
const STARS = [
  { x: 8, y: 12, s: 1, d: 28, delay: 0 },
  { x: 18, y: 28, s: 1.2, d: 34, delay: 2 },
  { x: 27, y: 8, s: 1, d: 30, delay: 4 },
  { x: 35, y: 42, s: 1, d: 36, delay: 1 },
  { x: 42, y: 18, s: 1.5, d: 40, delay: 6 },
  { x: 51, y: 55, s: 1, d: 32, delay: 3 },
  { x: 58, y: 14, s: 1, d: 38, delay: 8 },
  { x: 66, y: 33, s: 1.2, d: 29, delay: 5 },
  { x: 74, y: 22, s: 1, d: 35, delay: 7 },
  { x: 82, y: 48, s: 1, d: 31, delay: 2.5 },
  { x: 91, y: 16, s: 1.2, d: 37, delay: 9 },
  { x: 12, y: 62, s: 1, d: 33, delay: 1.5 },
  { x: 23, y: 71, s: 1, d: 39, delay: 4.5 },
  { x: 39, y: 68, s: 1.5, d: 42, delay: 0.5 },
  { x: 47, y: 78, s: 1, d: 30, delay: 6.5 },
  { x: 61, y: 64, s: 1, d: 36, delay: 3.5 },
  { x: 69, y: 82, s: 1.2, d: 34, delay: 8.5 },
  { x: 78, y: 58, s: 1, d: 41, delay: 5.5 },
  { x: 88, y: 74, s: 1, d: 28, delay: 7.5 },
  { x: 6, y: 44, s: 1, d: 32, delay: 10 },
  { x: 94, y: 38, s: 1.2, d: 38, delay: 11 },
  { x: 15, y: 86, s: 1, d: 35, delay: 2.2 },
  { x: 33, y: 90, s: 1, d: 29, delay: 4.8 },
  { x: 55, y: 6, s: 1, d: 40, delay: 6.2 },
  { x: 72, y: 92, s: 1.5, d: 33, delay: 9.2 },
  { x: 4, y: 76, s: 1, d: 37, delay: 1.8 },
  { x: 86, y: 88, s: 1, d: 31, delay: 3.2 },
  { x: 48, y: 36, s: 1, d: 36, delay: 7.8 },
] as const;

const METEORS = [
  { x: 20, y: 0, delay: 0, duration: 14 },
  { x: 55, y: 8, delay: 6, duration: 16 },
  { x: 78, y: 2, delay: 11, duration: 15 },
] as const;

interface HeroStarfieldProps {
  animate: boolean;
}

export function HeroStarfield({ animate }: HeroStarfieldProps) {
  return (
    <div
      className="hero-starfield pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {STARS.map((star, index) => (
        <span
          key={`star-${index}`}
          className={
            animate ? "hero-starfield__star" : "hero-starfield__star-static"
          }
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.s,
            height: star.s,
            ...(animate
              ? {
                  animationDuration: `${star.d}s`,
                  animationDelay: `${star.delay}s`,
                }
              : {}),
          }}
        />
      ))}

      {animate
        ? METEORS.map((meteor, index) => (
            <span
              key={`meteor-${index}`}
              className="hero-starfield__meteor"
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
