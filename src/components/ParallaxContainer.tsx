import { useEffect, useState, ReactNode } from "react";

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number;
}

export const ParallaxContainer = ({ children, speed = 0.5 }: ParallaxContainerProps) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="parallax-slow"
      style={{
        transform: `translateY(${offset * speed}px)`,
      }}
    >
      {children}
    </div>
  );
};
