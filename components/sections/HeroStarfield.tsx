/**
 * Deterministic positions — varied sizes, opacity and drift for a natural field.
 * driftY / glow give organic depth without looking uniform.
 */
const STARS = [
  { x: 7, y: 11, s: 1.1, d: 32, delay: 0, opacity: 0.45, drift: 14 },
  { x: 16, y: 26, s: 1.6, d: 41, delay: 2.4, opacity: 0.7, drift: 22 },
  { x: 24, y: 7, s: 1, d: 28, delay: 5.1, opacity: 0.35, drift: 12 },
  { x: 33, y: 39, s: 1.4, d: 38, delay: 1.2, opacity: 0.55, drift: 18 },
  { x: 41, y: 16, s: 2, d: 46, delay: 7.3, opacity: 0.75, drift: 26 },
  { x: 49, y: 52, s: 1.1, d: 30, delay: 3.6, opacity: 0.4, drift: 15 },
  { x: 57, y: 13, s: 1.3, d: 44, delay: 9.1, opacity: 0.6, drift: 20 },
  { x: 65, y: 31, s: 1.7, d: 35, delay: 4.8, opacity: 0.68, drift: 24 },
  { x: 73, y: 20, s: 1, d: 29, delay: 6.5, opacity: 0.38, drift: 11 },
  { x: 81, y: 46, s: 1.5, d: 40, delay: 2.1, opacity: 0.58, drift: 19 },
  { x: 90, y: 14, s: 1.8, d: 48, delay: 10.4, opacity: 0.72, drift: 28 },
  { x: 11, y: 58, s: 1.2, d: 33, delay: 1.7, opacity: 0.48, drift: 16 },
  { x: 22, y: 69, s: 1, d: 42, delay: 5.9, opacity: 0.36, drift: 13 },
  { x: 38, y: 66, s: 1.9, d: 50, delay: 0.6, opacity: 0.78, drift: 30 },
  { x: 46, y: 76, s: 1.2, d: 31, delay: 7.8, opacity: 0.5, drift: 17 },
  { x: 60, y: 62, s: 1.4, d: 39, delay: 3.3, opacity: 0.62, drift: 21 },
  { x: 68, y: 80, s: 1.6, d: 36, delay: 8.9, opacity: 0.66, drift: 23 },
  { x: 77, y: 56, s: 1.1, d: 45, delay: 5.4, opacity: 0.42, drift: 14 },
  { x: 87, y: 72, s: 1.3, d: 34, delay: 7.1, opacity: 0.54, drift: 18 },
  { x: 5, y: 42, s: 1.5, d: 37, delay: 11.2, opacity: 0.64, drift: 20 },
  { x: 93, y: 36, s: 1.7, d: 43, delay: 12, opacity: 0.7, drift: 25 },
  { x: 14, y: 84, s: 1.1, d: 30, delay: 2.8, opacity: 0.4, drift: 12 },
  { x: 32, y: 88, s: 1.4, d: 47, delay: 4.4, opacity: 0.58, drift: 22 },
  { x: 54, y: 5, s: 1.2, d: 52, delay: 6.8, opacity: 0.46, drift: 15 },
  { x: 71, y: 90, s: 2, d: 40, delay: 9.6, opacity: 0.76, drift: 27 },
  { x: 3, y: 74, s: 1.2, d: 35, delay: 1.9, opacity: 0.44, drift: 16 },
  { x: 85, y: 86, s: 1.3, d: 38, delay: 3.7, opacity: 0.52, drift: 19 },
  { x: 47, y: 34, s: 1.6, d: 44, delay: 8.2, opacity: 0.68, drift: 24 },
  { x: 29, y: 50, s: 1.8, d: 36, delay: 5.6, opacity: 0.72, drift: 26 },
  { x: 63, y: 44, s: 1.1, d: 41, delay: 9.3, opacity: 0.4, drift: 13 },
  { x: 9, y: 32, s: 1.5, d: 49, delay: 0.9, opacity: 0.6, drift: 21 },
  { x: 83, y: 9, s: 1.2, d: 33, delay: 4.1, opacity: 0.48, drift: 15 },
  { x: 19, y: 48, s: 0.9, d: 27, delay: 6.2, opacity: 0.32, drift: 10 },
  { x: 52, y: 24, s: 1, d: 55, delay: 11.5, opacity: 0.38, drift: 14 },
  { x: 75, y: 38, s: 0.9, d: 26, delay: 2.6, opacity: 0.34, drift: 9 },
  { x: 36, y: 22, s: 1.3, d: 48, delay: 7.5, opacity: 0.56, drift: 17 },
] as const;

const METEORS = [
  { x: 18, y: 2, delay: 0, duration: 14 },
  { x: 48, y: 0, delay: 4.5, duration: 16 },
  { x: 72, y: 5, delay: 9, duration: 15 },
  { x: 36, y: 8, delay: 12.5, duration: 17 },
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
      <div
        className={
          animate
            ? "hero-starfield__nebula hero-starfield__nebula--a"
            : "hero-starfield__nebula hero-starfield__nebula--a hero-starfield__nebula--static"
        }
      />
      <div
        className={
          animate
            ? "hero-starfield__nebula hero-starfield__nebula--b"
            : "hero-starfield__nebula hero-starfield__nebula--b hero-starfield__nebula--static"
        }
      />
      <div
        className={
          animate
            ? "hero-starfield__nebula hero-starfield__nebula--c"
            : "hero-starfield__nebula hero-starfield__nebula--c hero-starfield__nebula--static"
        }
      />
      <div className="hero-starfield__dust" />

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
            ["--star-base" as string]: String(star.opacity),
            ["--star-drift" as string]: `${star.drift}px`,
            ["--star-peak" as string]: String(
              Math.min(star.opacity + 0.22, 0.92),
            ),
            ...(animate
              ? {
                  animationDuration: `${star.d}s`,
                  animationDelay: `${star.delay}s`,
                }
              : { opacity: star.opacity }),
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
