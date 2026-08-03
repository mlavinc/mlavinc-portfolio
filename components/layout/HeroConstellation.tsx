import { CONSTELLATION_SEGMENTS } from "@/lib/stars";

/**
 * Subtle open constellation: thin links between existing stars,
 * with a few rays continuing off-canvas. No extra nodes.
 */
export function HeroConstellation() {
  return (
    <div className="hero-constellation" aria-hidden="true">
      <svg
        className="hero-constellation__svg"
        viewBox="-15 -15 130 130"
        preserveAspectRatio="none"
      >
        <defs>
          <filter
            id="constellation-glow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="0.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#constellation-glow)" stroke="rgb(186 200 220)">
          {CONSTELLATION_SEGMENTS.map((segment) => (
            <line
              key={`${segment.x1}-${segment.y1}-${segment.x2}-${segment.y2}`}
              x1={segment.x1}
              y1={segment.y1}
              x2={segment.x2}
              y2={segment.y2}
              strokeOpacity="0.55"
              strokeWidth="1"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
