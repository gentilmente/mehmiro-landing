import { useId } from "react";

interface ShardPairProps {
  className?: string;
}

export const ShardPair = ({ className = "" }: ShardPairProps) => {
  const gradientId = useId().replace(/:/g, "");

  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="18" y1="20" x2="102" y2="102" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1f4fd6" />
          <stop offset="0.52" stopColor="#7050d8" />
          <stop offset="1" stopColor="#a35be0" />
        </linearGradient>
      </defs>
      <g
        fill={`url(#${gradientId})`}
        stroke={`url(#${gradientId})`}
        strokeWidth="4"
        strokeLinejoin="round"
      >
        <path d="M20 22 L57 46 L57 100 L20 76 Z" />
        <path d="M63 22 L100 46 L100 100 L63 76 Z" />
      </g>
    </svg>
  );
};
