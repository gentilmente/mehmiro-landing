import { useId } from "react";

interface LogoMaskedPhotoProps {
  src: string;
  alt: string;
  className?: string;
}

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
          <path d="M10 14 L49 38 L49 92 L10 68 Z" />
          <path d="M51 14 L90 38 L90 92 L51 68 Z" />
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
