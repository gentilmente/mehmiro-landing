import { useId } from "react";

interface LogoMaskedPhotoProps {
  src: string;
  alt: string;
  className?: string;
}

const roundedPolygonPath = (points: [number, number][], radius: number) => {
  const length = points.length;
  const normalize = ([x, y]: [number, number]) => {
    const magnitude = Math.hypot(x, y) || 1;
    return [x / magnitude, y / magnitude] as [number, number];
  };

  return points
    .map((point, index) => {
      const previous = points[(index - 1 + length) % length];
      const next = points[(index + 1) % length];
      const toPrevious = normalize([previous[0] - point[0], previous[1] - point[1]]);
      const toNext = normalize([next[0] - point[0], next[1] - point[1]]);
      const start = [point[0] + toPrevious[0] * radius, point[1] + toPrevious[1] * radius];
      const end = [point[0] + toNext[0] * radius, point[1] + toNext[1] * radius];
      const command = index === 0 ? "M" : "L";
      return `${command} ${start[0]} ${start[1]} Q ${point[0]} ${point[1]} ${end[0]} ${end[1]}`;
    })
    .join(" ") + " Z";
};

const leftShard = roundedPolygonPath(
  [
    [10, 14],
    [49, 38],
    [49, 92],
    [10, 68],
  ],
  4.2,
);
const rightShard = roundedPolygonPath(
  [
    [51, 14],
    [90, 38],
    [90, 92],
    [51, 68],
  ],
  4.2,
);

export const LogoMaskedPhoto = ({ src, alt, className = "" }: LogoMaskedPhotoProps) => {
  const clipId = `logo-photo-${useId().replace(/:/g, "")}`;

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      role="img"
      aria-label={alt}
      focusable="false"
    >
      <defs>
        <clipPath id={clipId}>
          <path d={leftShard} />
          <path d={rightShard} />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        <image
          href={src}
          x="0"
          y="0"
          width="100"
          height="100"
          preserveAspectRatio="xMidYMin slice"
        />
      </g>

    </svg>
  );
};
