"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function ScrollingTumbleweed() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page we've scrolled (0 to 1)
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / documentHeight, 1);

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate horizontal movement (from -10% to 110% of screen width)
  const translateX = -10 + (scrollProgress * 120);

  // Calculate rotation (tumbling effect - multiple full rotations)
  const rotation = scrollProgress * 720; // 2 full rotations over the scroll

  return (
    <div
      className="fixed top-24 left-0 w-full pointer-events-none z-40"
      style={{
        transform: `translateX(${translateX}vw)`,
      }}
    >
      <Image
        src="/assets/tumbleweed.svg"
        alt=""
        width={30}
        height={30}
        className="opacity-60"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.1s linear",
        }}
      />
    </div>
  );
}
