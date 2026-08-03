/**
 * Shared starfield positions (percent of viewport).
 * Keep CosmicBackground and technology constellations in sync.
 */
export const STARS = [
  { x: 6, y: 10, s: 1.35, o: 0.62, d: 7, delay: 0 },
  { x: 14, y: 28, s: 1.6, o: 0.82, d: 9, delay: 1.2 },
  { x: 22, y: 8, s: 1.25, o: 0.52, d: 8, delay: 2.4 },
  { x: 31, y: 40, s: 1.85, o: 0.88, d: 11, delay: 0.6 },
  { x: 39, y: 18, s: 1.35, o: 0.58, d: 10, delay: 3.1 },
  { x: 48, y: 54, s: 1.6, o: 0.75, d: 8.5, delay: 1.8 },
  { x: 56, y: 12, s: 1.25, o: 0.55, d: 12, delay: 4.2 },
  { x: 64, y: 34, s: 1.85, o: 0.85, d: 9.5, delay: 2.7 },
  { x: 73, y: 22, s: 1.35, o: 0.65, d: 7.5, delay: 0.9 },
  { x: 81, y: 48, s: 1.6, o: 0.78, d: 10.5, delay: 3.6 },
  { x: 90, y: 14, s: 1.35, o: 0.6, d: 8, delay: 5 },
  { x: 10, y: 62, s: 1.6, o: 0.72, d: 11, delay: 1.5 },
  { x: 20, y: 74, s: 1.25, o: 0.5, d: 9, delay: 4.5 },
  { x: 37, y: 68, s: 1.85, o: 0.9, d: 10, delay: 2.1 },
  { x: 45, y: 82, s: 1.35, o: 0.62, d: 8, delay: 5.5 },
  { x: 58, y: 66, s: 1.6, o: 0.74, d: 12, delay: 3.3 },
  { x: 70, y: 80, s: 1.25, o: 0.55, d: 9.5, delay: 0.4 },
  { x: 78, y: 58, s: 1.6, o: 0.76, d: 7.5, delay: 4.8 },
  { x: 88, y: 72, s: 1.35, o: 0.58, d: 11, delay: 2.9 },
  { x: 4, y: 44, s: 1.6, o: 0.7, d: 10, delay: 6 },
  { x: 94, y: 38, s: 1.85, o: 0.82, d: 8.5, delay: 1.1 },
  { x: 28, y: 52, s: 1.25, o: 0.48, d: 13, delay: 3.9 },
  { x: 52, y: 30, s: 1.6, o: 0.78, d: 9, delay: 5.2 },
  { x: 66, y: 46, s: 1.35, o: 0.56, d: 10.5, delay: 2.3 },
  { x: 84, y: 88, s: 1.6, o: 0.72, d: 8, delay: 4.1 },
  { x: 16, y: 88, s: 1.25, o: 0.52, d: 11.5, delay: 0.7 },
] as const;

/** Invisible off-canvas anchors so some lines continue outside the viewport. */
export const EXTERIOR_POINTS = [
  { x: -12, y: 8 },
  { x: -10, y: 48 },
  { x: -8, y: 86 },
  { x: 18, y: -10 },
  { x: 52, y: -12 },
  { x: 86, y: -8 },
  { x: 112, y: 16 },
  { x: 114, y: 44 },
  { x: 110, y: 78 },
  { x: 28, y: 112 },
  { x: 62, y: 114 },
  { x: 96, y: 110 },
] as const;

export type ConstellationSegment = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

function distance(
  a: { x: number; y: number },
  b: { x: number; y: number },
) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy;
}

/**
 * Open constellation graph: a sparse spanning tree between stars,
 * plus a few rays that drift off-screen so it never feels closed.
 */
function buildConstellationSegments(): ConstellationSegment[] {
  const n = STARS.length;
  const edgeKeys = new Set<string>();
  const segments: ConstellationSegment[] = [];

  function addStarEdge(a: number, b: number) {
    if (a === b) return;
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (edgeKeys.has(key)) return;
    edgeKeys.add(key);
    const start = STARS[a];
    const end = STARS[b];
    segments.push({ x1: start.x, y1: start.y, x2: end.x, y2: end.y });
  }

  // Sparse MST — connects every star without forming a dense mesh
  const connected = new Set<number>([0]);
  while (connected.size < n) {
    let bestA = -1;
    let bestB = -1;
    let bestDist = Number.POSITIVE_INFINITY;

    for (const a of connected) {
      for (let b = 0; b < n; b++) {
        if (connected.has(b)) continue;
        const d = distance(STARS[a], STARS[b]);
        if (d < bestDist) {
          bestDist = d;
          bestA = a;
          bestB = b;
        }
      }
    }

    if (bestA < 0 || bestB < 0) break;
    addStarEdge(bestA, bestB);
    connected.add(bestB);
  }

  // A few extra short links for constellation character (not a full net)
  const extras: Array<[number, number]> = [
    [6, 10],
    [8, 20],
    [7, 23],
    [9, 17],
    [13, 15],
    [22, 7],
  ];
  for (const [a, b] of extras) {
    addStarEdge(a, b);
  }

  // Rays from perimeter stars outward past the viewport edges
  for (const exterior of EXTERIOR_POINTS) {
    let nearest = 0;
    let nearestDist = Number.POSITIVE_INFINITY;

    for (let i = 0; i < n; i++) {
      const d = distance(STARS[i], exterior);
      if (d < nearestDist) {
        nearestDist = d;
        nearest = i;
      }
    }

    const star = STARS[nearest];
    segments.push({
      x1: star.x,
      y1: star.y,
      x2: exterior.x,
      y2: exterior.y,
    });
  }

  return segments;
}

export const CONSTELLATION_SEGMENTS = buildConstellationSegments();
